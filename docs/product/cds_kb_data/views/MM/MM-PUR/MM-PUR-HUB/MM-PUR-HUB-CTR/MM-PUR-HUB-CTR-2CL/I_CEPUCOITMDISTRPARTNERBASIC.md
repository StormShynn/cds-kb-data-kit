---
name: I_CEPUCOITMDISTRPARTNERBASIC
description: "This CDS view provides access to partner information associated with distribution keys in central purchase contract items. It enables the retrieval of partner functions, suppliers, purchasing organizations, and external plants related to contract item distributions. This CDS view provides the data to answer the following business questions: Which partners are assigned to a specific distribution key in a central purchase contract item? What are the supplier and purchasing organization details for contract item distributions? Which external plants are associated with distribution partners in central contracts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITMDISTRPARTNERBASIC')/$value
semantic_en: "This CDS view provides access to partner information associated with distribution keys in central purchase contract items. It enables the retrieval of partner functions, suppliers, purchasing organizations, and external plants related to contract item distributions. This CDS view provides the data to answer the following business questions: Which partners are assigned to a specific distribution key in a central purchase contract item? What are the supplier and purchasing organization details for contract item distributions? Which external plants are associated with distribution partners in central contracts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CTR-2CL
  - contract
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CTR
  - MM-PUR-HUB-CTR-2CL
  - plan
  - supplier
  - metadata-only
---
# I_CEPUCOITMDISTRPARTNERBASIC

**This CDS view provides access to partner information associated with distribution keys in central purchase contract items. It enables the retrieval of partner functions, suppliers, purchasing organizations, and external plants related to contract item distributions. This CDS view provides the data to answer the following business questions: Which partners are assigned to a specific distribution key in a central purchase contract item? What are the supplier and purchasing organization details for contract item distributions? Which external plants are associated with distribution partners in central contracts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITMDISTRPARTNERBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `CentralPurchaseContractItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `DistributionKey` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `PartnerCounter` |  | |  |  | `NUMC(3)` | Partner counter |
| `PartnerFunction` |  | |  |  | `CHAR(2)` | Partner Function |
| `ExtPlantForPurg` |  | |  |  | `CHAR(4)` | Plant of External System |
| `Supplier` |  | |  |  | `CHAR(10)` | Reference to other supplier |
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` |  |
