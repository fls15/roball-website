// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "roball inside",
  description:
    "A simple, lightweight, and flexible note-taking template for Eleventy.",
  editThisNote: {
    url: "https://github.com/fls15/roball-website/edit/{{branch}}/{{file}}",
  },
  staticAssets: {
    paths: { "public/": "/" },
  },
  ignores: ["README.md", "CHANGELOG.md"],
  customProperties: {
    properties: [
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    links: [
      {
        url: "https://github.com/fls15/roball-website",
        label: "GitHub Source",
        icon: "github",
      },
    ],
    sections: [
      {
        label: "Beruf",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/beruf/",
            }),
          },
        ],
      },
      {
        label: "Sport",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/sport/",
            }),
          },
        ],
      },
    ],
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
});
