---
name: C_CREDITACCTWITHTODOQUERY
description: "This CDS view retrieves information related to business partners in SAP Credit Management, such as the criticality of the business partner, if a resubmission date is set, or if a credit limit request exists. This CDS view provides the data to answer the following business questions: What is the criticality of a business partner? Does a resubmission date exist for the business partner? Does a credit limit request exist for the business partner? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY')/$value
semantic_en: "This CDS view retrieves information related to business partners in SAP Credit Management, such as the criticality of the business partner, if a resubmission date is set, or if a credit limit request exists. This CDS view provides the data to answer the following business questions: What is the criticality of a business partner? Does a resubmission date exist for the business partner? Does a credit limit request exist for the business partner? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - metadata-only
---
# C_CREDITACCTWITHTODOQUERY

**This CDS view retrieves information related to business partners in SAP Credit Management, such as the criticality of the business partner, if a resubmission date is set, or if a credit limit request exists. This CDS view provides the data to answer the following business questions: What is the criticality of a business partner? Does a resubmission date exist for the business partner? Does a credit limit request exist for the business partner? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
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
| `CreditLimitUtilizationPct` |  | |  |  | `INT1(3)` |  |
