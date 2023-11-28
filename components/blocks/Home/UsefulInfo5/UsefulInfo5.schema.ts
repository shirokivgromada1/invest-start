import { Template } from "tinacms";

export const usefulInfo5ComponentSchema: Template = {
  name: "UsefulInfo5",
  label: "Useful Info variant 5",
  ui: {
    previewSrc: "/blocks/UsefulInfo6/useful-info.png",
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Title Eng",
      name: "titleEng",
      type: "string",
    },
    {
      label: "Item title",
      name: "itemTitle",
      type: "string",
    },
    {
      label: "Item title Eng",
      name: "itemTitleEng",
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
          label: "Title Eng",
          name: "titleEng",
          type: "string",
        },
        {
          label: "Location",
          name: "location",
          type: "string",
        },
        {
          label: "Location Eng",
          name: "locationEng",
          type: "string",
        },
        {
          label: "Square",
          name: "square",
          type: "string",
        },
        {
          label: "Square Eng",
          name: "squareEng",
          type: "string",
        },
        {
          label: "Need repair",
          name: "repair",
          type: "string",
        },
        {
          label: "Need repair Eng",
          name: "repairEng",
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
