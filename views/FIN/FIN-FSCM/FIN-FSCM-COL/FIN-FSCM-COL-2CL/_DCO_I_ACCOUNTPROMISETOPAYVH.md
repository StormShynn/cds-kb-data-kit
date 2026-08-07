---
name: _DCO_I_ACCOUNTPROMISETOPAYVH
description: This CDS view provides value help for promise to pay records in collections and dispute automation. It enables users to search and select promise to pay agreements associated with business partners and their collection accounts. This CDS view provides the data to answer the following business questions: Which promises to pay are due for a specific business partner? What is the total promised amount for a given company code? Which promises to pay have been created or closed by a specific user? What is the status of promises to pay for a particular collection activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTPROMISETOPAYVH')/$value
semantic_en: This CDS view provides value help for promise to pay records in collections and dispute automation. It enables users to search and select promise to pay agreements associated with business partners and their collection accounts. This CDS view provides the data to answer the following business questions: Which promises to pay are due for a specific business partner? What is the total promised amount for a given company code? Which promises to pay have been created or closed by a specific user? What is the status of promises to pay for a particular collection activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# _DCO_I_ACCOUNTPROMISETOPAYVH

**This CDS view provides value help for promise to pay records in collections and dispute automation. It enables users to search and select promise to pay agreements associated with business partners and their collection accounts. This CDS view provides the data to answer the following business questions: Which promises to pay are due for a specific business partner? What is the total promised amount for a given company code? Which promises to pay have been created or closed by a specific user? What is the status of promises to pay for a particular collection activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTPROMISETOPAYVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DCoBusinessPartnerUUID` | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` | `RAW(16)` | UUID of Collection Account |
| `DCoPromiseToPayUUID` | `RAW(16)` | UUID of Promise to Pay |
| `DebtCollectionsPromiseToPay` | `CHAR(12)` | Promise to Pay |
| `BusinessPartner` | `CHAR(10)` | Business Partner |
| `DebtCollectionsCompanyCode` | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `DCoPromiseToPayDueDate` | `DATS(8)` | Promised For |
| `DCoPromiseToPayAmount` | `CURR(23)` | Overall Promised Amount |
| `DCoPrms2PDistrdPromisedAmount` | `CURR(23)` | Distributed Promised Amount |
| `DCoPrmsToPayUsedCreditAmount` | `CURR(23)` | Overall Credit Amount Used for the Promise to Pay |
| `DCoPromiseToPayCurrency` | `CUKY(5)` | Currency of Promise to Pay |
| `DCoPrms2PMainCustContactPerson` | `CHAR(10)` | Main Customer Contact Person for This Promise to Pay |
| `DCoPromiseToPayStatus` | `NUMC(1)` | Status of Promise to Pay |
| `DCoPromiseToPayPromisedBy` | `CHAR(10)` | Promised By |
| `DCoPrms2PInsmPlnNrOfInstlmnts` | `INT2(5)` | Installments |
| `DCoDebtCollectionsActivity` | `CHAR(12)` | Activity |
| `DCoPromiseToPayCreatedByUser` | `CHAR(12)` | Created By |
| `DCoPrmsToPayCreationDateTime` | `DEC(15)` | Created On/At |
| `DCoPrmsToPayLastChangedByUser` | `CHAR(12)` | Last Changed By |
| `DCoPrmsToPayLastChangeDateTime` | `DEC(15)` | Last Changed On/At |
| `DCoPromiseToPayClosedByUser` | `CHAR(12)` | Closed By |
| `DCoPromiseToPayClosingDateTime` | `DEC(15)` | Closed On/At |
| `BusinessPartnerName` | `CHAR(81)` |  |
| `DCoCompanyCodeName` | `CHAR(50)` | Company Code in Collections and Dispute Automation (Name) |
| `DCoPromiseToPayCurrencyName` | `CHAR(40)` | Description |
| `DCoPrms2PCustCntctPersnName` | `CHAR(81)` |  |
| `DCoPromiseToPayStatusName` | `CHAR(50)` | Promise to Pay Status Name |
| `DCoPromiseToPayPromisedByName` | `CHAR(81)` |  |
| `DCoPrmsToPayCreatedByUserName` | `CHAR(80)` | User Description |
| `DCoPrms2PLastChangedByUserName` | `CHAR(80)` | User Description |
| `DCoPrmsToPayClosedByUserName` | `CHAR(80)` | User Description |
| `DebtCollectionsSegment` | `CHAR(10)` | Collection Segment |
