---
name: I_COLLECTIONPROGRESS
description: "This CDS view provides information about the progress in collection activities within an organization that uses SAP Collections Management. It aggregates and presents data related to collection segments, specialists, groups, and priorities, along with financial metrics such as promised and collected amounts. The view is structured to support analytical processing and reporting, enabling users to assess the effectiveness and efficiency of collection efforts. This CDS view provides the data to answer the following business questions: What is the current status of collection activities across different segments and priorities? How many worklist items have been completed, and how many customers have been reached? What are the promised and collected amounts in the specified display currency? Who are the collection specialists involved, and what are their respective contributions? How do collection efforts vary across different groups and priorities? What is the impact of exchange rate types on the financial metrics of collection activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value
semantic_en: "This CDS view provides information about the progress in collection activities within an organization that uses SAP Collections Management. It aggregates and presents data related to collection segments, specialists, groups, and priorities, along with financial metrics such as promised and collected amounts. The view is structured to support analytical processing and reporting, enabling users to assess the effectiveness and efficiency of collection efforts. This CDS view provides the data to answer the following business questions: What is the current status of collection activities across different segments and priorities? How many worklist items have been completed, and how many customers have been reached? What are the promised and collected amounts in the specified display currency? Who are the collection specialists involved, and what are their respective contributions? How do collection efforts vary across different groups and priorities? What is the impact of exchange rate types on the financial metrics of collection activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_COLLECTIONPROGRESS

**This CDS view provides information about the progress in collection activities within an organization that uses SAP Collections Management. It aggregates and presents data related to collection segments, specialists, groups, and priorities, along with financial metrics such as promised and collected amounts. The view is structured to support analytical processing and reporting, enabling users to assess the effectiveness and efficiency of collection efforts. This CDS view provides the data to answer the following business questions: What is the current status of collection activities across different segments and priorities? How many worklist items have been completed, and how many customers have been reached? What are the promised and collected amounts in the specified display currency? Who are the collection specialists involved, and what are their respective contributions? How do collection efforts vary across different groups and priorities? What is the impact of exchange rate types on the financial metrics of collection activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONPROGRESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CollectionSpecialist` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionGroup` |  | |  |  | `CHAR(10)` | Collection Group |
| `CollectionPriority` |  | |  |  | `NUMC(1)` | Priority of Worklist Item |
| `CollectionSpecialistName` |  | |  |  | `CHAR(80)` | User Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `NumberOfWorklistItems` |  | |  |  | `INT4(10)` | Number of Worklist Items |
| `NumberOfCompletedItems` |  | |  |  | `INT4(10)` | Number of Completed Items |
| `NumberOfCustomerReachedItems` |  | |  |  | `INT4(10)` | Number of Customer Reached |
| `PromisedAmount` |  | |  |  | `CURR(23)` | Promised Amount |
| `CollectableAmount` |  | |  |  | `CURR(23)` | Collectable Amount |
