import { Template } from "tinacms";

export const investmentComponentSchema: Template = {
  name: "Investment",
  label: "Investment",
  ui: {
    previewSrc: "/blocks/Home/Investment/investment.png",
  },
  fields: [
    { type: "string", label: "Block title", name: "title" },
    {
      type: "object",
      label: "List of opportunities",
      name: "list",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.opportunityTitle };
        },
      },
      fields: [
        {
          label: "Title",
          name: "opportunityTitle",
          type: "string",
        },
        {
          label: "Description",
          name: "desc",
          type: "string",
        },
        {
          label: "Link",
          name: "link",
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
