import { Template } from "tinacms";

export const opportunityComponentSchema: Template = {
  name: "Opportunity",
  label: "Opportunity",
  ui: {
    previewSrc: "/blocks/Opportunity/opportunity.png",
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
      type: "rich-text",
      label: "Description block",
      name: "text",
    },
    {
      type: "string",
      label: "List title",
      name: "listTitle",
    },
    {
      type: "string",
      label: "Phone",
      name: "phone",
    },
    {
      type: "string",
      label: "Email",
      name: "email",
    },
    {
      type: "string",
      label: "Location",
      name: "location",
    },
    {
      type: "image",
      label: "Image 1",
      name: "image1",
    },
    {
      type: "image",
      label: "Image 2",
      name: "image2",
    },
    {
      type: "image",
      label: "Image 3",
      name: "image3",
    },
  ],
};
