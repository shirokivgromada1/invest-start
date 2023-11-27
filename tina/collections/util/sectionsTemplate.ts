import { TinaField } from "@/tina/types";
import { previewComponentSchema } from "./../../../components/blocks/Home/Preview/Preview.schema";
import { localBusinessComponentSchema } from "./../../../components/blocks/Home/LocalBusiness/LocalBusiness.schema";
import { investmentComponentSchema } from "./../../../components/blocks/Home/Investment/Investment.schema";
import { prospectiveComponentSchema } from "./../../../components/blocks/Home/Prospective/Prospective.schema";
import { hromadaCompaniesComponentSchema } from "./../../../components/blocks/Home/HromadaCompanies/HromadaCompanies.schema";
import { communityComponentSchema } from "./../../../components/blocks/Home/Community/Community.schema";
import { opportunityComponentSchema } from "./../../../components/blocks/Opportunity/Opportunity.schema";
import { opportunity2ComponentSchema } from "./../../../components/blocks/Opportunity2/Opportunity2.schema";
import { opportunity3ComponentSchema } from "./../../../components/blocks/Opportunity3/Opportunity3.schema";
import { roadComponentSchema } from "./../../../components/blocks/Home/Road/Road.schema";
import { transportNetworkComponentSchema } from "./../../../components/blocks/Home/TransportNetwork/TransportNetwork.schema";
import { usefulInfoComponentSchema } from "./../../../components/blocks/Home/UsefulInfo/UsefulInfo.schema";
import { usefulInfo2ComponentSchema } from "./../../../components/blocks/Home/UsefulInfo2/UsefulInfo.schema";
import { usefulInfo3ComponentSchema } from "./../../../components/blocks/Home/UsefulInfo3/UsefulInfo3.schema";
import { usefulInfo6ComponentSchema } from "./../../../components/blocks/Home/UsefulInfo6/UsefulInfo6.schema";
import { usefulInfo5ComponentSchema } from "./../../../components/blocks/Home/UsefulInfo5/UsefulInfo5.schema";

export const sectionsTemplate: TinaField = {
  type: "object",
  list: true,
  name: "components",
  label: "Sections",
  ui: {
    visualSelector: true,
  },
  templates: [
    previewComponentSchema,
    localBusinessComponentSchema,
    investmentComponentSchema,
    prospectiveComponentSchema,
    hromadaCompaniesComponentSchema,
    communityComponentSchema,
    opportunityComponentSchema,
    opportunity2ComponentSchema,
    opportunity3ComponentSchema,
    roadComponentSchema,
    transportNetworkComponentSchema,
    usefulInfoComponentSchema,
    usefulInfo2ComponentSchema,
    usefulInfo3ComponentSchema,
    usefulInfo5ComponentSchema,
    usefulInfo6ComponentSchema,
  ],
};
