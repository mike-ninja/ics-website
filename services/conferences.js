import { Client } from "@notionhq/client";
import React from "react";
// import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
// const n2m = new NotionToMarkdown({ notionClient: notion });

const pageToPostTransformer = (page) => {
  let cover = page.cover;
  console.log(cover);
  switch (cover.type) {
    case "file":
      cover = page.cover.file;
      break;
    case "external":
      cover = page.cover.external.url;
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

  return pageToPostTransformer(response.results[0]);
});

const getConferenceBlocks = React.cache(async (pageId) => {
  const response = await notion.blocks.children
    .list({ block_id: pageId });
  return response.results;
});

export default { getConference, getConferences, getConferenceBlocks, notion };
