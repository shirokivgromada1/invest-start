import { Template } from "tinacms";

export const previewComponentSchema: Template = {
  name: "preview",
  label: "Preview",
  ui: {
    previewSrc: "/blocks/Home/Preview/preview.png",
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
      type: "string",
      label: "Video",
      name: "video",
    },
    {
      type: "string",
      label: "Description block",
      name: "descBlock",
    },
  ],
};
