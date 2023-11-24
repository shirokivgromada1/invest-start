import { Template } from "tinacms";

export const transportNetworkComponentSchema: Template = {
  name: "TransportNetwork",
  label: "Transport Network",
  ui: {
    previewSrc: "/blocks/Home/TransportNetwork/transport-network.png",
  },
  fields: [
    { type: "string", label: "Block title", name: "title" },
    { type: "string", label: "Block title Eng", name: "titleEng" },
    { type: "number", label: "Settlements", name: "settlements" },
    { type: "number", label: "Square", name: "square" },
    { type: "number", label: "Population", name: "population" },
  ],
};
