---
name: _DCO_I_BUSINESSPARTNERBRANCH
description: "This CDS view provides value help functionality for basic rules used for account prioritization. It serves as a value help provider to enable users to search and select basic rules efficiently. This CDS view provides the data to answer the following business questions: Which basic rules are available for account prioritization? How can I quickly find and select a specific basic rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BUSINESSPARTNERBRANCH')/$value
semantic_en: "This CDS view provides value help functionality for basic rules used for account prioritization. It serves as a value help provider to enable users to search and select basic rules efficiently. This CDS view provides the data to answer the following business questions: Which basic rules are available for account prioritization? How can I quickly find and select a specific basic rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_BUSINESSPARTNERBRANCH

**This CDS view provides value help functionality for basic rules used for account prioritization. It serves as a value help provider to enable users to search and select basic rules efficiently. This CDS view provides the data to answer the following business questions: Which basic rules are available for account prioritization? How can I quickly find and select a specific basic rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BUSINESSPARTNERBRANCH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoBPBranchUUID` |  | |  |  | `RAW(16)` | Business Partner Branch UUID |
| `DCoBusinessPartnerBranch` |  | |  |  | `CHAR(10)` | Branch Office in Collections and Dispute Automation |
| `DCoRblsAreCollectedOnBranch` |  | |  |  | `CHAR(1)` | Receivable Items Are Collected on Branch |
| `DCoBPBranchCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoBPBranchCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoBPBranchLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoBPBrnchLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
