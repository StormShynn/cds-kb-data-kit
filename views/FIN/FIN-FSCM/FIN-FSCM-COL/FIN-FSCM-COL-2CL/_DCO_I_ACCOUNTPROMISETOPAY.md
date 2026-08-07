---
name: _DCO_I_ACCOUNTPROMISETOPAY
description: This CDS view provides access to promise-to-pay records associated with collection accounts. It combines account information with promise-to-pay commitments made by business partners, including both active promises and draft promises created by the current user. This CDS view provides the data to answer the following business questions: What are the outstanding promise-to-pay commitments for a specific collection account? Which promises to pay are due within a specific timeframe? What is the total promised amount across all accounts for a business partner? Which draft promises to pay have been created but not yet finalized? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTPROMISETOPAY')/$value
semantic_en: This CDS view provides access to promise-to-pay records associated with collection accounts. It combines account information with promise-to-pay commitments made by business partners, including both active promises and draft promises created by the current user. This CDS view provides the data to answer the following business questions: What are the outstanding promise-to-pay commitments for a specific collection account? Which promises to pay are due within a specific timeframe? What is the total promised amount across all accounts for a business partner? Which draft promises to pay have been created but not yet finalized? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_ACCOUNTPROMISETOPAY

**This CDS view provides access to promise-to-pay records associated with collection accounts. It combines account information with promise-to-pay commitments made by business partners, including both active promises and draft promises created by the current user. This CDS view provides the data to answer the following business questions: What are the outstanding promise-to-pay commitments for a specific collection account? Which promises to pay are due within a specific timeframe? What is the total promised amount across all accounts for a business partner? Which draft promises to pay have been created but not yet finalized? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTPROMISETOPAY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` |  | |  |  | `RAW(16)` | UUID of Collection Account |
| `DCoPromiseToPayUUID` |  | |  |  | `RAW(16)` | UUID of Promise to Pay |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DCoBusinessPartnerBranch` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `DebtCollectionsPromiseToPay` |  | |  |  | `CHAR(12)` | Promise to Pay |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoPromiseToPayDueDate` |  | |  |  | `DATS(8)` | Promised For |
| `DCoPromiseToPayAmount` |  | |  |  | `CURR(23)` | Overall Promised Amount |
| `DCoPrms2PDistrdPromisedAmount` |  | |  |  | `CURR(23)` | Distributed Promised Amount |
| `DCoPrmsToPayUsedCreditAmount` |  | |  |  | `CURR(23)` | Overall Credit Amount Used for the Promise to Pay |
| `DCoPrms2PInsmPlnNrOfInstlmnts` |  | |  |  | `INT2(5)` | Installments |
| `DCoPromiseToPayCurrency` |  | |  |  | `CUKY(5)` | Currency of Promise to Pay |
| `DCoPrms2PMainCustContactPerson` |  | |  |  | `CHAR(10)` | Main Customer Contact Person for This Promise to Pay |
| `DCoPromiseToPayStatus` |  | |  |  | `NUMC(1)` | Status of Promise to Pay |
| `DCoPromiseToPayPromisedBy` |  | |  |  | `CHAR(10)` | Promised By |
| `DCoActivityIsCreated` |  | |  |  | `CHAR(1)` | Activity Is Created |
| `DCoPromiseToPayIsMigrated` |  | |  |  | `CHAR(1)` | Promise to Pay Is Migrated |
| `DCoPredecessorPromiseToPay` |  | |  |  | `CHAR(12)` | Preceding Promise to Pay |
| `DCoDebtCollectionsActivity` |  | |  |  | `CHAR(12)` | Activity |
| `DCoPromiseToPayCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoPrmsToPayCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoPrmsToPayLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoPrmsToPayLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoPromiseToPayClosedByUser` |  | |  |  | `CHAR(12)` | Closed By |
| `DCoPromiseToPayClosingDateTime` |  | |  |  | `DEC(15)` | Closed On/At |
| `DCoPromiseToPayCriticality` |  | |  |  | `INT1(3)` | Criticality |
