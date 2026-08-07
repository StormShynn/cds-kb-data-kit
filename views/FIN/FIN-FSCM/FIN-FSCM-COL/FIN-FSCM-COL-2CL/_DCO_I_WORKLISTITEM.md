---
name: _DCO_I_WORKLISTITEM
description: This CDS view provides access to worklist items in the collection process. It enables users to retrieve and analyze worklist data including business partner information, amounts to be collected, priorities, and status information for an effective collection process. This CDS view provides the data to answer the following business questions: What is the total amount to be collected across all open worklist items? Which worklist items have the highest priority for collection activities? How much has been paid, credited, or written off for specific worklist items? Which worklist items have broken promises and require follow-up? What is the status distribution of worklist items by collections agent group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_WORKLISTITEM')/$value
semantic_en: This CDS view provides access to worklist items in the collection process. It enables users to retrieve and analyze worklist data including business partner information, amounts to be collected, priorities, and status information for an effective collection process. This CDS view provides the data to answer the following business questions: What is the total amount to be collected across all open worklist items? Which worklist items have the highest priority for collection activities? How much has been paid, credited, or written off for specific worklist items? Which worklist items have broken promises and require follow-up? What is the status distribution of worklist items by collections agent group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Worklist Item (Collections and Dispute Automation)
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
# _DCO_I_WORKLISTITEM

**This CDS view provides access to worklist items in the collection process. It enables users to retrieve and analyze worklist data including business partner information, amounts to be collected, priorities, and status information for an effective collection process. This CDS view provides the data to answer the following business questions: What is the total amount to be collected across all open worklist items? Which worklist items have the highest priority for collection activities? How much has been paid, credited, or written off for specific worklist items? Which worklist items have broken promises and require follow-up? What is the status distribution of worklist items by collections agent group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_WORKLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoWorklistItemUUID` |  | |  |  | `RAW(16)` | Worklist UUID |
| `DCoWorklistItemID` |  | |  |  | `CHAR(12)` | Worklist Item |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DCoCollectorGroup` |  | |  |  | `CHAR(40)` | Collections Agent Group |
| `DCoAccountPrioritizationRule` |  | |  |  | `CHAR(10)` | Account Prioritization Rule |
| `DCoWorklistItemValuationValue` |  | |  |  | `INT4(10)` | Valuation |
| `DCoAcctPrioznRuleValnValue` |  | |  |  | `INT4(10)` | Valuation |
| `DCoWorklistItemPriority` |  | |  |  | `NUMC(1)` | Priority of Worklist Item |
| `DebtCollectionsSegmentCurrency` |  | |  |  | `CUKY(5)` | Segment Currency |
| `DCoWorklistItemStatus` |  | |  |  | `NUMC(1)` | Status |
| `DCoWlItemToBeCollectedAmount` |  | |  |  | `CURR(23)` | Amount to Be Collected |
| `DCoWorklistItemOpenAmount` |  | |  |  | `CURR(23)` | Open Amount |
| `DCoWorklistItemPaidAmount` |  | |  |  | `CURR(23)` | Paid Amount |
| `DCoWorklistItemCreditedAmount` |  | |  |  | `CURR(23)` | Credited Amount |
| `DCoWorklistItemWriteOffAmount` |  | |  |  | `CURR(23)` | Write-Off Amount |
| `DCoWorklistItemPromisedAmount` |  | |  |  | `CURR(23)` | Promised Amount |
| `DCoWorklistItemDisputedAmount` |  | |  |  | `CURR(23)` | Disputed Amount |
| `DCoWorklistItemDunnedAmount` |  | |  |  | `CURR(23)` | Dunned Amount |
| `DCoWlItemBrokenPromisedAmount` |  | |  |  | `CURR(23)` | Broken Promised Amount |
| `DCoCollsAgtGrpIsMnllyChgd` |  | |  |  | `CHAR(1)` | Collections Agent Group Is Manually Changed |
| `DCoWlItemCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoWlItemLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoWlItemLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoWlItemClosingDateTime` |  | |  |  | `DEC(15)` | Closed On/At |
| `DCoWorklistItemClosedByUser` |  | |  |  | `CHAR(12)` | Closed By |
