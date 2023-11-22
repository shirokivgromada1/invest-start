import { Template } from "tinacms";

export const usefulInfo2ComponentSchema: Template = {
  name: "UsefulInfo2",
  label: "UsefulInfo variant 2",
  ui: {
    previewSrc: "/blocks/UsefulInfo2/useful-info.png",
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },

    {
      label: "Item title",
      name: "itemTitle",
      type: "string",
    },
    {
      label: "Item number",
      name: "itemNumber",
      type: "string",
    },
    {
      label: "List of items",
      type: "object",
      name: "list",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Link",
          name: "link",
          type: "image",
        },
        {
          label: "URL",
          name: "url",
          type: "string",
        },
        {
          label: "Hidden",
          name: "hidden",
          type: "boolean",
        },
      ],
    },
  ],
};
