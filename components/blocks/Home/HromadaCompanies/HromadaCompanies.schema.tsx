import { Template } from "tinacms";

export const hromadaCompaniesComponentSchema: Template = {
  name: "HromadaCompanies",
  label: "Hromada Companies",
  ui: {
    previewSrc: "/blocks/Home/HromadaCompanies/hromada-companies.png",
  },
  fields: [
    { type: "string", label: "Block title", name: "title" },
    {
      type: "object",
      label: "List of companies",
      name: "list",
      list: true,
      fields: [
        {
          label: "Image",
          name: "image",
          type: "image",
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
