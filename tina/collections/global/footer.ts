import { TinaField } from "@/tina/types";

export const footer: TinaField = {
  type: "object",
  label: "Footer",
  name: "footer",
  fields: [
    {
      type: "object",
      label: "Nav Links",
      name: "nav",
      ui: {
        itemProps: (item) => {
          return { label: item?.label };
        },
        defaultItem: {
          href: "home",
          label: "Home",
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
      type: "object",
      label: "Social Links",
      name: "social",
      fields: [
        {
          type: "string",
          label: "Facebook",
          name: "facebook",
        },
        {
          type: "string",
          label: "Instagram",
          name: "instagram",
        },
        {
          type: "string",
          label: "Telegram",
          name: "telegram",
        },
      ],
    },
    {
      type: "image",
      label: "Logo",
      name: "logo",
    },
    {
      type: "string",
      label: "Description",
      name: "agency",
    },
    {
      type: "string",
      label: "Description Eng",
      name: "agencyEng",
    },
    {
      type: "string",
      label: "Посилання на сайт",
      name: "url",
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
  ],
};
