---
name: I_COLLECTIONWORKLISTITEM
description: "This CDS view provides information about collection worklist items, which are part of the process in SAP Collections Management. It aggregates various attributes related to collection activities, such as the collection specialist, group, segment, strategy, and financial details, enabling efficient management and analysis of collection tasks. This CDS view provides the data to answer the following business questions: Who is the collection specialist responsible for a particular worklist item? What is the status and strategy associated with a collection worklist item? What is the creation date of a worklist item and its associated collection run? What is the valuation percentage of a worklist item? What is the collectable amount for a specific worklist item? Which business partner is associated with a collection worklist item? What are the currency details related to the collection amounts? How can collection activities be segmented and grouped for better management? What are the results of customer contact efforts in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value
semantic_en: "This CDS view provides information about collection worklist items, which are part of the process in SAP Collections Management. It aggregates various attributes related to collection activities, such as the collection specialist, group, segment, strategy, and financial details, enabling efficient management and analysis of collection tasks. This CDS view provides the data to answer the following business questions: Who is the collection specialist responsible for a particular worklist item? What is the status and strategy associated with a collection worklist item? What is the creation date of a worklist item and its associated collection run? What is the valuation percentage of a worklist item? What is the collectable amount for a specific worklist item? Which business partner is associated with a collection worklist item? What are the currency details related to the collection amounts? How can collection activities be segmented and grouped for better management? What are the results of customer contact efforts in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - task
  - metadata-only
---
# I_COLLECTIONWORKLISTITEM

**This CDS view provides information about collection worklist items, which are part of the process in SAP Collections Management. It aggregates various attributes related to collection activities, such as the collection specialist, group, segment, strategy, and financial details, enabling efficient management and analysis of collection tasks. This CDS view provides the data to answer the following business questions: Who is the collection specialist responsible for a particular worklist item? What is the status and strategy associated with a collection worklist item? What is the creation date of a worklist item and its associated collection run? What is the valuation percentage of a worklist item? What is the collectable amount for a specific worklist item? Which business partner is associated with a collection worklist item? What are the currency details related to the collection amounts? How can collection activities be segmented and grouped for better management? What are the results of customer contact efforts in the collection process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionWorklistItemUUID` |  | |  |  | `RAW(16)` | Key of Worklist Item |
| `CollectionSpecialist` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionGroup` |  | |  |  | `CHAR(10)` | Collection Group |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `WorklistItemCreationDate` |  | |  |  | `DATS(8)` | Date of Worklist Item |
| `CollectionWorklistRun` |  | |  |  | `CHAR(12)` | Run ID |
| `Status` |  | |  |  | `CHAR(1)` | Indicator: Worklist Item Is Completed |
| `CollectionStrategy` |  | |  |  | `CHAR(10)` | Collection Strategy |
| `CollectionsStrategyVersion` |  | |  |  | `NUMC(8)` | Collection Strategy Version |
| `WorklistItemValuationPercent` |  | |  |  | `NUMC(4)` | Percentage Valuation |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CustomerContactResult` |  | |  |  | `CHAR(3)` | Result of Customer Contact |
| `CollectableAmount` |  | |  |  | `CURR(15)` | Amount to Be Collected |
| `Currency` |  | |  |  | `CUKY(5)` | Strategy Currency |
