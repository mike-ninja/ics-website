import "server-only";

import { Client } from "@notionhq/client";
import React from "react";
// import {
//   BlockObjectResponse,
//   PageObjectResponse,
// } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchConferences = React.cache(() => {
  const databaseId = process.env.NOTION_DATABASE_ID || "";

  return notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });
});

export const fetchConferenceBySlug = React.cache(async (slug) => {
  const databaseId = process.env.NOTION_DATABASE_ID || "";

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      formula: {
        text: {
          equals: slug, // slug
        },
      },
    },
  });

  if (!response.results[0]) { // Proper Error handling here
    throw "No results available";
  }

  return response.results[0];
});

export const fetchConferenceBlocks = React.cache(async (pageId) => {
  const response = await notion.blocks.children
    .list({ block_id: pageId });
  return response.results;
});
