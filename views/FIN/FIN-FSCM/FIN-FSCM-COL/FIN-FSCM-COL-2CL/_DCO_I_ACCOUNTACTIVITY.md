---
name: _DCO_I_ACCOUNTACTIVITY
description: "This CDS view provides a comprehensive view of activities associated with collection accounts. It combines account information with related activities, including both finalized activities and draft activities created by the current user. This CDS view provides the data to answer the following business questions: What activities have been performed for a specific collection account? Which activities are currently in draft status for my accounts? What is the history of customer contact activities for a business partner? Which activities have been created or modified by specific users? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTACTIVITY')/$value
semantic_en: "This CDS view provides a comprehensive view of activities associated with collection accounts. It combines account information with related activities, including both finalized activities and draft activities created by the current user. This CDS view provides the data to answer the following business questions: What activities have been performed for a specific collection account? Which activities are currently in draft status for my accounts? What is the history of customer contact activities for a business partner? Which activities have been created or modified by specific users? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_ACCOUNTACTIVITY

**This CDS view provides a comprehensive view of activities associated with collection accounts. It combines account information with related activities, including both finalized activities and draft activities created by the current user. This CDS view provides the data to answer the following business questions: What activities have been performed for a specific collection account? Which activities are currently in draft status for my accounts? What is the history of customer contact activities for a business partner? Which activities have been created or modified by specific users? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTACTIVITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` |  | |  |  | `RAW(16)` | UUID of Collection Account |
| `DCoActivityUUID` |  | |  |  | `RAW(16)` | Activity UUID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DCoDebtCollectionsActivity` |  | |  |  | `CHAR(12)` | Activity in Collection Process |
| `DCoActyMainCustContactPerson` |  | |  |  | `CHAR(10)` | Main Customer Contact Person for Activity |
| `DCoActivityDirection` |  | |  |  | `CHAR(1)` | Activity Direction |
| `DCoActivityType` |  | |  |  | `CHAR(2)` | Activity Type |
| `DCoActivityResult` |  | |  |  | `CHAR(2)` | Activity Result |
| `DCoActivityIsMigrated` |  | |  |  | `CHAR(1)` | Activity Is Migrated |
| `DCoWorklistItemIsFinalized` |  | |  |  | `CHAR(1)` | Worklist Item Is Completed |
| `DCoActivityCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoActivityCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoActivityLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoActivityLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoActivityCriticality` |  | |  |  | `INT1(3)` | Activity Criticality |
