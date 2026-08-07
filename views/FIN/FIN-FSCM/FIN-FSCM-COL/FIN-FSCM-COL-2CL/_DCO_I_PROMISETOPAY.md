---
name: _DCO_I_PROMISETOPAY
description: This CDS view provides access to promise to pay records in collections and dispute automation. It contains information about payment commitments made by business partners, including promised amounts, due dates, installment plans, and related receivable items. This CDS view provides the data to answer the following business questions: What are the outstanding promises to pay for a specific business partner? Which promises to pay are due within a specific time period? What is the total promised amount across all open promises to pay? How much of the promised amount has been distributed to receivable items? Which promises to pay have installment plans and how many installments are defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PROMISETOPAY')/$value
semantic_en: This CDS view provides access to promise to pay records in collections and dispute automation. It contains information about payment commitments made by business partners, including promised amounts, due dates, installment plans, and related receivable items. This CDS view provides the data to answer the following business questions: What are the outstanding promises to pay for a specific business partner? Which promises to pay are due within a specific time period? What is the total promised amount across all open promises to pay? How much of the promised amount has been distributed to receivable items? Which promises to pay have installment plans and how many installments are defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - plan
  - metadata-only
---
# _DCO_I_PROMISETOPAY

**This CDS view provides access to promise to pay records in collections and dispute automation. It contains information about payment commitments made by business partners, including promised amounts, due dates, installment plans, and related receivable items. This CDS view provides the data to answer the following business questions: What are the outstanding promises to pay for a specific business partner? Which promises to pay are due within a specific time period? What is the total promised amount across all open promises to pay? How much of the promised amount has been distributed to receivable items? Which promises to pay have installment plans and how many installments are defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PROMISETOPAY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoPromiseToPayUUID` |  | |  |  | `RAW(16)` | UUID of Promise to Pay |
| `DebtCollectionsPromiseToPay` |  | |  |  | `CHAR(12)` | Promise to Pay |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `DebtCollectionsCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoPromiseToPayDueDate` |  | |  |  | `DATS(8)` | Promised For |
| `DCoPromiseToPayAmount` |  | |  |  | `CURR(23)` | Overall Promised Amount |
| `DCoPrms2PDistrdPromisedAmount` |  | |  |  | `CURR(23)` | Distributed Promised Amount |
| `DCoPrmsToPayUsedCreditAmount` |  | |  |  | `CURR(23)` | Overall Credit Amount Used for the Promise to Pay |
| `DCoPromiseToPayCurrency` |  | |  |  | `CUKY(5)` | Currency of Promise to Pay |
| `DCoPrms2PMainCustContactPerson` |  | |  |  | `CHAR(10)` | Main Customer Contact Person for This Promise to Pay |
| `DCoPromiseToPayStatus` |  | |  |  | `NUMC(1)` | Status of Promise to Pay |
| `DCoPromiseToPayPromisedBy` |  | |  |  | `CHAR(10)` | Promised By |
| `DCoPrms2PInsmPlnNrOfInstlmnts` |  | |  |  | `INT2(5)` | Installments |
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
