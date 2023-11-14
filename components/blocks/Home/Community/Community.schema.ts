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
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
    {
      type: "image",
      label: "Image",
      name: "image",
    },
  ],
};
