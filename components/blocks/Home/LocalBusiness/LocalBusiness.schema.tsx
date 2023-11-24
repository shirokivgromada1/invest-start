import { Template } from "tinacms";

export const localBusinessComponentSchema: Template = {
  name: "LocalBusiness",
  label: "Local Business",
  ui: {
    previewSrc: "/blocks/Home/LocalBusiness/local-business.png",
  },
  fields: [
    { type: "string", label: "Block title", name: "title" },
    { type: "string", label: "Block title Eng", name: "titleEng" },
    {
      type: "object",
      label: "List of businesses",
      name: "list",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.businessTitle };
        },
      },
      fields: [
        {
          label: "Title",
          name: "businessTitle",
          type: "string",
        },
        {
          label: "Title Eng",
          name: "businessTitleEng",
          type: "string",
        },
        {
          label: "Image",
          name: "image",
          type: "image",
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
          label: "Text description",
          name: "desc",
          type: "string",
        },
        {
          label: "Text description Eng",
          name: "descEng",
          type: "string",
        },
        {
          label: "Website name",
          name: "websiteName",
          type: "string",
        },
        {
          label: "Website link",
          name: "websiteLink",
          type: "string",
        },
        {
          label: "Instagram",
          name: "inst",
          type: "string",
        },
        {
          label: "facebook",
          name: "facebook",
          type: "string",
        },
        {
          label: "Hide",
          name: "isHidden",
          type: "boolean",
        },
      ],
    },
  ],
};
