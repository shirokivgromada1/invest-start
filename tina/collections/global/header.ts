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
        {
          label: "Link №1 label Eng",
          name: "label1Eng",
          type: "string",
        },
        {
          label: "Інвестиційний паспорт label",
          name: "label2",
          type: "string",
        },
        {
          label: "Інвестиційний паспорт label Eng",
          name: "label2Eng",
          type: "string",
        },
        { label: "Інвестиційний паспорт href", name: "href2", type: "image" },
        {
          label: "Link №3 label",
          name: "label3",
          type: "string",
        },
        {
          label: "Link №3 label Eng",
          name: "label3Eng",
          type: "string",
        },
        {
          label: "Link №4 label",
          name: "label4",
          type: "string",
        },
        {
          label: "Link №4 label Eng",
          name: "label4Eng",
          type: "string",
        },
      ],
    },
    {
      label: "Location",
      name: "location",
      type: "string",
    },
    {
      label: "Location Eng",
      name: "locationEng",
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
