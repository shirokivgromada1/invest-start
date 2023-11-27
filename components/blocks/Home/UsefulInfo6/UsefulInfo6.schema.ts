import { Template } from "tinacms";

export const usefulInfo6ComponentSchema: Template = {
  name: "UsefulInfo6",
  label: "UsefulInfo variant 6",
  ui: {
    previewSrc: "/blocks/UsefulInfo7/useful-info.png",
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
          label: "Subtitle",
          name: "subtitle",
          type: "string",
        },
        {
          label: "Subtitle Eng",
          name: "subtitleEng",
          type: "string",
        },
        {
          label: "Position",
          name: "position",
          type: "string",
        },
        {
          label: "Position Eng",
          name: "positionEng",
          type: "string",
        },
        {
          label: "Fullname",
          name: "fullname",
          type: "string",
        },
        {
          label: "Fullname Eng",
          name: "fullnameEng",
          type: "string",
        },
        {
          label: "Phone 1",
          name: "contact1",
          type: "string",
        },
        {
          label: "Phone 2",
          name: "contact2",
          type: "string",
        },
        {
          label: "Phone 3",
          name: "contact3",
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
