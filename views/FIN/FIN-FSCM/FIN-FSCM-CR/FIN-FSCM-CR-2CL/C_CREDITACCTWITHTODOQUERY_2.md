---
name: C_CREDITACCTWITHTODOQUERY_2
description: "This CDS view is designed to provide analytical insights into credit accounts, specifically focusing on credit exposure, credit limits, and related activities such as credit decision documents and resubmissions. It allows users to analyze credit data with respect to various parameters like exchange rate type, display currency, and key date. This CDS view provides the data to answer the following business questions: What is the credit exposure and credit limit for each business partner and credit segment? How much of the credit limit is utilized by each business partner? Which business partners have critical credit statuses or zero credit limits? What are the reasons for any credit account blocks? How many credit decision documents, credit limit requests, and resubmissions exist for each business partner? Are there any business partners with pending credit decision documents, credit limit requests, or resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value
semantic_en: "This CDS view is designed to provide analytical insights into credit accounts, specifically focusing on credit exposure, credit limits, and related activities such as credit decision documents and resubmissions. It allows users to analyze credit data with respect to various parameters like exchange rate type, display currency, and key date. This CDS view provides the data to answer the following business questions: What is the credit exposure and credit limit for each business partner and credit segment? How much of the credit limit is utilized by each business partner? Which business partners have critical credit statuses or zero credit limits? What are the reasons for any credit account blocks? How many credit decision documents, credit limit requests, and resubmissions exist for each business partner? Are there any business partners with pending credit decision documents, credit limit requests, or resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - metadata-only
---
# C_CREDITACCTWITHTODOQUERY_2

**This CDS view is designed to provide analytical insights into credit accounts, specifically focusing on credit exposure, credit limits, and related activities such as credit decision documents and resubmissions. It allows users to analyze credit data with respect to various parameters like exchange rate type, display currency, and key date. This CDS view provides the data to answer the following business questions: What is the credit exposure and credit limit for each business partner and credit segment? How much of the credit limit is utilized by each business partner? Which business partners have critical credit statuses or zero credit limits? What are the reasons for any credit account blocks? How many credit decision documents, credit limit requests, and resubmissions exist for each business partner? Are there any business partners with pending credit decision documents, credit limit requests, or resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditAnalyst` |  | |  |  | `CHAR(10)` | Credit Analyst |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CreditAccountResubmissionDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  |  | `CHAR(1)` | Credit Limit is Zero |
| `CreditAccountBlockReason` |  | |  |  | `CHAR(2)` | Credit Account Blocking Reason |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `NumberOfCreditLimitRequests` |  | |  |  | `INT4(10)` | Number of Credit Limit Requests |
| `NumberOfResubmissions` |  | |  |  | `INT4(10)` | Number of Resubmisisons |
| `BPHasCreditDecisionDocument` |  | |  |  | `CHAR(1)` | Documented Credit Decision exists |
| `BPHasCreditLimitRequest` |  | |  |  | `CHAR(1)` | Credit Limit Request exists |
| `BPHasResubmission` |  | |  |  | `CHAR(1)` | Resubmission exists |
| `CreditLimitUtilizationPct` |  | |  |  | `DEC(10)` | Credit Limit Change (in Percent) |
