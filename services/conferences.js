import { Client } from "@notionhq/client";
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

const getConferences = async () => {
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
};

// const getConference = async (slug) => {
//   let post, markdown;
//
//   const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";
//   // list of blog posts
//   const response = await this.client.databases.query({
//     database_id: database,
//     filter: {
//       property: "Slug",
//       formula: {
//         text: {
//           equals: slug, // slug
//         },
//       },
//       // add option for tags in the future
//     },
//     sorts: [
//       {
//         property: "Updated",
//         direction: "descending",
//       },
//     ],
//   });
//
//   if (!response.results[0]) {
//     throw "No results available";
//   }
//
//   // grab page from notion
//   const page = response.results[0];
//
//   const mdBlocks = await n2m.pageToMarkdown(page.id);
//   markdown = n2m.toMarkdownString(mdBlocks);
//   post = pageToPostTransformer(page);
//
//   return {
//     post,
//     markdown,
//   };
// };

export default { /* getConference, */ getConferences };
