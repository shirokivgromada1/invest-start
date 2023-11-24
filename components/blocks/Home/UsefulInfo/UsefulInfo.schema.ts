import { Template } from "tinacms";

export const usefulInfoComponentSchema: Template = {
  name: "UsefulInfo",
  label: "UsefulInfo variant 1",
  ui: {
    previewSrc: "/blocks/UsefulInfo/useful-info.png",
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
      type: "rich-text",
      label: "Description block",
      name: "desc",
    },
    {
      type: "rich-text",
      label: "Description block Eng",
      name: "descEng",
    },
    {
      label: "Contacts Block",
      type: "object",
      name: "contacts",
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
          label: "Contacts list",
          name: "contactsList",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name };
            },
          },
          fields: [
            {
              label: "Name",
              name: "name",
              type: "string",
            },
            {
              label: "Name Eng",
              name: "nameEng",
              type: "string",
            },
            {
              label: "Description",
              name: "description",
              type: "string",
            },
            {
              label: "Description Eng",
              name: "descriptionEng",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
