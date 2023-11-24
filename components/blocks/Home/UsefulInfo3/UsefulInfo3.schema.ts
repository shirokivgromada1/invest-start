import { Template } from "tinacms";

export const usefulInfo3ComponentSchema: Template = {
  name: "UsefulInfo3",
  label: "UsefulInfo variant 3",
  ui: {
    previewSrc: "/blocks/UsefulInfo3/useful-info.png",
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
          label: "Kadastr number",
          name: "kadastr",
          type: "string",
        },
        {
          label: "Kadastr number Eng",
          name: "kadastrEng",
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
          label: "Description Eng",
          name: "descBlockEng",
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
