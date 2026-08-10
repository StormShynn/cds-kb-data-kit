---
name: I_CRDTRISKCLASSCHANGESITUATION
description: "This CDS view is designed to track changes in the credit risk class of business partners. It provides a detailed view of the credit risk class transitions, including the previous and current risk classes, the date and time of the change, and associated business partner information. This view is useful for monitoring and analyzing credit risk adjustments over time. This CDS view provides the data to answer the following business questions: What are the changes in the credit risk class for a specific business partner? When did the credit risk class change occur for a business partner? What was the previous credit risk class before the change? What is the current credit risk class after the change? What is the criticality adjustment value associated with the credit risk class change? What credit score and limit calculation rule is applied to the business partner? Which credit management business partner group does the business partner belong to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTRISKCLASSCHANGESITUATION')/$value
semantic_en: "This CDS view is designed to track changes in the credit risk class of business partners. It provides a detailed view of the credit risk class transitions, including the previous and current risk classes, the date and time of the change, and associated business partner information. This view is useful for monitoring and analyzing credit risk adjustments over time. This CDS view provides the data to answer the following business questions: What are the changes in the credit risk class for a specific business partner? When did the credit risk class change occur for a business partner? What was the previous credit risk class before the change? What is the current credit risk class after the change? What is the criticality adjustment value associated with the credit risk class change? What credit score and limit calculation rule is applied to the business partner? Which credit management business partner group does the business partner belong to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_CRDTRISKCLASSCHANGESITUATION

**This CDS view is designed to track changes in the credit risk class of business partners. It provides a detailed view of the credit risk class transitions, including the previous and current risk classes, the date and time of the change, and associated business partner information. This view is useful for monitoring and analyzing credit risk adjustments over time. This CDS view provides the data to answer the following business questions: What are the changes in the credit risk class for a specific business partner? When did the credit risk class change occur for a business partner? What was the previous credit risk class before the change? What is the current credit risk class after the change? What is the criticality adjustment value associated with the credit risk class change? What credit score and limit calculation rule is applied to the business partner? Which credit management business partner group does the business partner belong to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTRISKCLASSCHANGESITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` |  | |  |  | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  |  | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CurrentCreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `PreviousCreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class (Old) |
| `CrdtRskClCritltyAdjmtValue` |  | |  |  | `DEC(3)` | Risk Class Change (Using Internal Score) |
| `CreditScoreAndLimitCalcRule` |  | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
