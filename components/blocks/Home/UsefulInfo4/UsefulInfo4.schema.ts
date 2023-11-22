import { Template } from "tinacms";

export const usefulInfo4ComponentSchema: Template = {
  name: "UsefulInfo4",
  label: "UsefulInfo variant 4",
  ui: {
    previewSrc: "/blocks/UsefulInfo4/useful-info.png",
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
          label: "Kadastr number",
          name: "kadastr",
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
          label: "Description",
          name: "descBlock",
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
