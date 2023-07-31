import React from "react";
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const pageToPostTransformer = (page) => {
  let cover = page.cover;

  console.log(cover.type)
  switch (cover.type) {
    case "file":
      cover = cover.file.url;
      break;
    case "external":
      cover = cover.external.url;
      break;
    default:
      cover = "";
  }

  console.log(page.properties);
  return {
    id: page.id,
    cover: cover,
    title: page.properties.Name.title[0].plain_text,
    date: page.properties.Date.date,
    hotel: page.properties.Hotel.rich_text[0].plain_text,
    address: page.properties.Address.url,
    tags: page.properties.Tags.multi_select,
    slug: page.properties.Slug.formula.string,
  };
};

// Get all Conferences
const getConferences = React.cache(async () => {
  const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";
  const response = await notion.databases.query({
    database_id: database,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results.map((res) => {
    return pageToPostTransformer(res);
  });
});

// Get a conference
const getConference = React.cache(async (slug) => {
  const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";
  const response = await notion.databases.query({
    database_id: database,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug, // slug
        },
      },
      // add option for tags in the future
    },
  });

  if (!response.results[0]) {
    throw "No results available";
  }

  const mdBlocks = await n2m.pageToMarkdown(response.results[0].id);
  const markdown = n2m.toMarkdownString(mdBlocks);
  const post = pageToPostTransformer(response.results[0]);
  return { post, markdown };
});

export default { getConference, getConferences };
