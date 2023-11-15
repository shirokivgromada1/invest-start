import { TinaField } from "@/tina/types";

export const header: TinaField = {
  type: "object",
  label: "Header",
  name: "header",
  fields: [
    {
      label: "Icon",
      name: "icon",
      type: "image",
      ui: {
        label: "Logo",
        component: "image",
      },
    },

    {
      label: "Links",
      name: "links",
      type: "object",
      ui: {
        itemProps: (item) => {
          return { label: item?.label };
        },
      },
      fields: [
        {
          label: "Link №1 label",
          name: "label1",
          type: "string",
        },
        { label: "Link №1 href", name: "href1", type: "string" },
        {
          label: "Інвестиційний паспорт label",
          name: "label2",
          type: "string",
        },
        { label: "Інвестиційний паспорт href", name: "href2", type: "image" },
        {
          label: "Link №3 label",
          name: "label3",
          type: "string",
        },
        { label: "Link №3 href", name: "href3", type: "string" },
        {
          label: "Link №4 label",
          name: "label4",
          type: "string",
        },
        { label: "Link №4 href", name: "href4", type: "string" },
      ],
    },
    {
      label: "Location",
      name: "location",
      type: "string",
    },
    {
      label: "Phone",
      name: "phone",
      type: "string",
    },
    {
      label: "Email",
      name: "email",
      type: "string",
    },
    {
      label: "Instagram",
      name: "instagram",
      type: "string",
    },
    {
      label: "Facebook",
      name: "facebook",
      type: "string",
    },
    {
      label: "Telegram",
      name: "telegram",
      type: "string",
    },
  ],
};
