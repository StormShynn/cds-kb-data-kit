---
name: _DCO_I_ACTIVITY
description: This CDS view provides access to collection activity data, including information about activity direction, type, result, and related business partners. It serves as a basic interface view for managing and tracking collection activities within the system. This CDS view provides the data to answer the following business questions: What activities have been performed for a specific business partner in the collection process? Which collection activities are still open and not finalized? What is the history of communication activities for a specific collection segment? Which activities were created or last changed by a specific user? What are the results of activities performed for a specific worklist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACTIVITY')/$value
semantic_en: This CDS view provides access to collection activity data, including information about activity direction, type, result, and related business partners. It serves as a basic interface view for managing and tracking collection activities within the system. This CDS view provides the data to answer the following business questions: What activities have been performed for a specific business partner in the collection process? Which collection activities are still open and not finalized? What is the history of communication activities for a specific collection segment? Which activities were created or last changed by a specific user? What are the results of activities performed for a specific worklist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_ACTIVITY

**This CDS view provides access to collection activity data, including information about activity direction, type, result, and related business partners. It serves as a basic interface view for managing and tracking collection activities within the system. This CDS view provides the data to answer the following business questions: What activities have been performed for a specific business partner in the collection process? Which collection activities are still open and not finalized? What is the history of communication activities for a specific collection segment? Which activities were created or last changed by a specific user? What are the results of activities performed for a specific worklist? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACTIVITY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DCoActivityUUID` | `RAW(16)` | Activity UUID |
| `DCoDebtCollectionsActivity` | `CHAR(12)` | Activity in Collection Process |
| `BusinessPartner` | `CHAR(10)` | Business Partner |
| `DebtCollectionsSegment` | `CHAR(10)` | Collection Segment |
| `DCoActyMainCustContactPerson` | `CHAR(10)` | Main Customer Contact Person for Activity |
| `DCoActivityDirection` | `CHAR(1)` | Activity Direction |
| `DCoActivityType` | `CHAR(2)` | Activity Type |
| `DCoActivityResult` | `CHAR(2)` | Activity Result |
| `DCoActivityIsMigrated` | `CHAR(1)` | Activity Is Migrated |
| `DCoWorklistItemIsFinalized` | `CHAR(1)` | Worklist Item Is Completed |
| `DCoWorklistItemID` | `CHAR(12)` | Worklist Item |
| `DCoActivityCreatedByUser` | `CHAR(12)` | Created By |
| `DCoActivityCreationDateTime` | `DEC(15)` | Created On/At |
| `DCoActivityLastChangedByUser` | `CHAR(12)` | Last Changed By |
| `DCoActivityLastChangeDateTime` | `DEC(15)` | Last Changed On/At |
