import { Template } from "tinacms";

export const usefulInfo5ComponentSchema: Template = {
  name: "UsefulInfo5",
  label: "UsefulInfo variant 5",
  ui: {
    previewSrc: "/blocks/UsefulInfo5/useful-info.png",
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
          label: "Location",
          name: "location",
          type: "string",
        },
        {
          label: "Square",
          name: "square",
          type: "string",
        },
        {
          label: "Need repair",
          name: "repair",
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
