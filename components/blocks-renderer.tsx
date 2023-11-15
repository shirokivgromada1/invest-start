import type { Page, PageComponents } from "../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Preview, LocalBusiness } from "./blocks/Home";
import { Investment } from "../components/blocks/Home/Investment/Investment";
import { Prospective } from "../components/blocks/Home/Prospective/Prospective";
import { HromadaCompanies } from "../components/blocks/Home/HromadaCompanies/HromadaCompanies";
import { Community } from "../components/blocks/Home/Community/Community";
import { Opportunity } from "../components/blocks/Opportunity/Opportunity";
import { Opportunity2 } from "../components/blocks/Opportunity2/Opportunity2";
import { Opportunity3 } from "../components/blocks/Opportunity3/Opportunity3";
import { Road } from "../components/blocks/Home/Road/Road";
import { TransportNetwork } from "../components/blocks/Home/TransportNetwork/TransportNetwork";

export const Components = (props: Omit<Page, "id">) => {
  return (
    <>
      {props.components
        ? props.components.map(function (component, i) {
            if (component)
              return (
                <div
                  key={i}
                  data-tina-field={tinaField(component)}
                  style={{ overflow: "hidden" }}
                >
                  <Component {...component} />
                </div>
              );
          })
        : null}
    </>
  );
};

const Component = (component: PageComponents) => {
  switch (component.__typename) {
    case "PageComponentsPreview":
      return <Preview data={component} />;
    case "PageComponentsLocalBusiness":
      return <LocalBusiness data={component} />;
    case "PageComponentsInvestment":
      return <Investment data={component} />;
    case "PageComponentsProspective":
      return <Prospective data={component} />;
    case "PageComponentsHromadaCompanies":
      return <HromadaCompanies data={component} />;
    case "PageComponentsCommunity":
      return <Community data={component} />;
    case "PageComponentsOpportunity":
      return <Opportunity data={component} />;
    case "PageComponentsOpportunity2":
      return <Opportunity2 data={component} />;
    case "PageComponentsOpportunity3":
      return <Opportunity3 data={component} />;
    case "PageComponentsRoad":
      return <Road data={component} />;
    case "PageComponentsTransportNetwork":
      return <TransportNetwork data={component} />;
    default:
      return null;
  }
};
