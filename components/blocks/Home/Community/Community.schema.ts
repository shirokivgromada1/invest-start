import { Template } from "tinacms";

export const communityComponentSchema: Template = {
  name: "Community",
  label: "Community",
  ui: {
    previewSrc: "/blocks/Home/Community/community.png",
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
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "string",
      label: "Subtitle Eng",
      name: "subtitleEng",
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
  ],
};
