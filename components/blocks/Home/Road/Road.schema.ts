import { Template } from "tinacms";

export const roadComponentSchema: Template = {
  name: "Road",
  label: "Road",
  ui: {
    previewSrc: "/blocks/Home/Road/road.png",
  },
  fields: [
    {
      type: "object",
      label: "Stations (Кількість станцій має дорівнювати 4)",
      name: "stations",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.pText };
        },
      },
      fields: [
        {
          label: "Distance",
          name: "hText",
          type: "string",
        },
        {
          label: "Name",
          name: "pText",
          type: "string",
        },
        { label: "Icon", name: "icon", type: "image" },
      ],
    },
  ],
};
