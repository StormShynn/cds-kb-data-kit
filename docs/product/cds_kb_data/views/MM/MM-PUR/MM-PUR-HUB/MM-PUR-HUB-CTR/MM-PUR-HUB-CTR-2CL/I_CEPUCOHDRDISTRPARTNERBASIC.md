---
name: I_CEPUCOHDRDISTRPARTNERBASIC
description: "This CDS view provides access to distribution partner information at the header level of central purchase contracts. It retrieves partner details associated with distribution keys for central purchasing contracts, focusing on header-level partner assignments where the contract item is '00000'. This CDS view provides the data to answer the following business questions: Which distribution partners are assigned to a specific central purchase contract at the header level? What are the partner functions and organizational assignments for central contract distributions? Which suppliers and purchasing organizations are associated with central contract distribution keys? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRPARTNERBASIC')/$value
semantic_en: "This CDS view provides access to distribution partner information at the header level of central purchase contracts. It retrieves partner details associated with distribution keys for central purchasing contracts, focusing on header-level partner assignments where the contract item is '00000'. This CDS view provides the data to answer the following business questions: Which distribution partners are assigned to a specific central purchase contract at the header level? What are the partner functions and organizational assignments for central contract distributions? Which suppliers and purchasing organizations are associated with central contract distribution keys? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - supplier
  - metadata-only
---
# I_CEPUCOHDRDISTRPARTNERBASIC

**This CDS view provides access to distribution partner information at the header level of central purchase contracts. It retrieves partner details associated with distribution keys for central purchasing contracts, focusing on header-level partner assignments where the contract item is '00000'. This CDS view provides the data to answer the following business questions: Which distribution partners are assigned to a specific central purchase contract at the header level? What are the partner functions and organizational assignments for central contract distributions? Which suppliers and purchasing organizations are associated with central contract distribution keys? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRPARTNERBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `DistributionKey` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `PartnerCounter` |  | |  |  | `NUMC(3)` | Partner counter |
| `CentralPurchaseContractItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `PartnerFunction` |  | |  |  | `CHAR(2)` | Partner Function |
| `ExtPlantForPurg` |  | |  |  | `CHAR(4)` | Plant of External System |
| `Supplier` |  | |  |  | `CHAR(10)` | Reference to other supplier |
| `SupplierSubrange` |  | |  |  | `CHAR(6)` | Supplier Subrange |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` |  |
