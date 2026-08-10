---
name: I_CRDTWRTHNSSSCORECHGSITUATION
description: "This CDS view is designed to track changes in the credit worthiness scores of business partners. It provides detailed information about the adjustments in credit scores, including both the new and previous scores, the numeric values of these scores, and the percentage change. Additionally, it associates these changes with specific business partners and their credit management profiles. This CDS view provides the data to answer the following business questions: What is the current credit worthiness score of a specific business partner, and how has it changed over time? What was the previous credit worthiness score of a business partner before the latest change? What is the numeric value of the credit worthiness score, and how does it compare to the previous numeric value? What is the percentage change in the credit worthiness score for a business partner? What is the adjustment value in the credit worthiness score for a business partner? Which credit score and limit calculation rule is applied to a business partner? To which credit management business partner group does a specific business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value
semantic_en: "This CDS view is designed to track changes in the credit worthiness scores of business partners. It provides detailed information about the adjustments in credit scores, including both the new and previous scores, the numeric values of these scores, and the percentage change. Additionally, it associates these changes with specific business partners and their credit management profiles. This CDS view provides the data to answer the following business questions: What is the current credit worthiness score of a specific business partner, and how has it changed over time? What was the previous credit worthiness score of a business partner before the latest change? What is the numeric value of the credit worthiness score, and how does it compare to the previous numeric value? What is the percentage change in the credit worthiness score for a business partner? What is the adjustment value in the credit worthiness score for a business partner? Which credit score and limit calculation rule is applied to a business partner? To which credit management business partner group does a specific business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_CRDTWRTHNSSSCORECHGSITUATION

**This CDS view is designed to track changes in the credit worthiness scores of business partners. It provides detailed information about the adjustments in credit scores, including both the new and previous scores, the numeric values of these scores, and the percentage change. Additionally, it associates these changes with specific business partners and their credit management profiles. This CDS view provides the data to answer the following business questions: What is the current credit worthiness score of a specific business partner, and how has it changed over time? What was the previous credit worthiness score of a business partner before the latest change? What is the numeric value of the credit worthiness score, and how does it compare to the previous numeric value? What is the percentage change in the credit worthiness score for a business partner? What is the adjustment value in the credit worthiness score for a business partner? Which credit score and limit calculation rule is applied to a business partner? To which credit management business partner group does a specific business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` |  | |  |  | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  |  | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditWorthinessScoreValue` |  | |  |  | `CHAR(10)` | Score |
| `PrevCreditWorthinessScoreValue` |  | |  |  | `CHAR(10)` | Previous Internal Score |
| `CrdtWrthnssScoreNumericValue` |  | |  |  | `DEC(12)` | New Internal Score (Numeric) |
| `OldCrdtWrthnssScrNumericValue` |  | |  |  | `DEC(12)` | Old Internal Score (Numeric) |
| `CrdtWrthnssScoreChangePercent` |  | |  |  | `DEC(6)` | Change to Internal Score (in Percent) |
| `CrdtWrthnssScrAdjustmentValue` |  | |  |  | `DEC(10)` | Delta Value of Internal Score |
| `CreditScoreAndLimitCalcRule` |  | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
