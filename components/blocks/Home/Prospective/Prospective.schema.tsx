import { Template } from "tinacms";

export const prospectiveComponentSchema: Template = {
  name: "Prospective",
  label: "Prospective",
  ui: {
    previewSrc: "/blocks/Home/Prospective/prospective.png",
  },
  fields: [
    { type: "string", label: "Block title", name: "title" },
    {
      label: "Subtitle block 1",
      name: "sub1",
      type: "string",
    },
    {
      label: "Subtitle block 2",
      name: "sub2",
      type: "string",
    },
    {
      label: "Photo 1",
      name: "photo1",
      type: "image",
    },
    {
      label: "Photo 2",
      name: "photo2",
      type: "image",
    },
    {
      label: "Photo 3",
      name: "photo3",
      type: "image",
    },
    {
      label: "Photo 4",
      name: "photo4",
      type: "image",
    },
    {
      label: "Photo 5",
      name: "photo5",
      type: "image",
    },
    {
      label: "Photo 6",
      name: "photo6",
      type: "image",
    },
  ],
};
