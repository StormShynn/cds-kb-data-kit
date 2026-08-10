---
name: I_CREDITLIMITCHANGESITUATION
description: "This CDS view is designed to track and analyze changes in credit limits for business partners. It provides detailed information about the credit limit adjustments, including the old and new credit limits, the percentage change, and the total adjustment amount. This view is essential for monitoring credit management activities and ensuring that credit limits are adjusted appropriately based on business needs and risk assessments. This CDS view provides the data to answer the following business questions: What are the recent changes in credit limits for specific business partners? How much has the credit limit changed in terms of percentage and total amount? What are the old and new credit limits for a given business partner and credit segment? Which credit segment and currency are associated with the credit limit change? What credit score and limit calculation rules are applied to the business partner? To which credit management business partner group does the business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value
semantic_en: "This CDS view is designed to track and analyze changes in credit limits for business partners. It provides detailed information about the credit limit adjustments, including the old and new credit limits, the percentage change, and the total adjustment amount. This view is essential for monitoring credit management activities and ensuring that credit limits are adjusted appropriately based on business needs and risk assessments. This CDS view provides the data to answer the following business questions: What are the recent changes in credit limits for specific business partners? How much has the credit limit changed in terms of percentage and total amount? What are the old and new credit limits for a given business partner and credit segment? Which credit segment and currency are associated with the credit limit change? What credit score and limit calculation rules are applied to the business partner? To which credit management business partner group does the business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FIO-CCD-CR-2CL
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CREDITLIMITCHANGESITUATION

**This CDS view is designed to track and analyze changes in credit limits for business partners. It provides detailed information about the credit limit adjustments, including the old and new credit limits, the percentage change, and the total adjustment amount. This view is essential for monitoring credit management activities and ensuring that credit limits are adjusted appropriately based on business needs and risk assessments. This CDS view provides the data to answer the following business questions: What are the recent changes in credit limits for specific business partners? How much has the credit limit changed in terms of percentage and total amount? What are the old and new credit limits for a given business partner and credit segment? Which credit segment and currency are associated with the credit limit change? What credit score and limit calculation rules are applied to the business partner? To which credit management business partner group does the business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` |  | |  |  | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  |  | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `NewCreditLimitAmount` |  | |  |  | `CURR(15)` | Credit Limit (New) |
| `OldCreditLimitAmount` |  | |  |  | `CURR(15)` | Credit Limit (Old) |
| `CreditSegmentCurrency` |  | |  |  | `CUKY(5)` | Credit Segment Currency |
| `CreditLimitChangeInPercent` |  | |  |  | `DEC(10)` | Credit Limit Change (in Percent) |
| `CreditLimitAdjustmentAmount` |  | |  |  | `CURR(15)` | Amount Change to Credit Limit |
| `CreditScoreAndLimitCalcRule` |  | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
