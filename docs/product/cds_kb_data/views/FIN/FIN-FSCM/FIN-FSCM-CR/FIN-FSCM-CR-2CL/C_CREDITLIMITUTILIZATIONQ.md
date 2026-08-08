---
name: C_CREDITLIMITUTILIZATIONQ
description: "This CDS view retrieves details about a credit limit and its usage in percent in SAP Credit Management. This CDS view provides the data to answer the following business questions: How much is the exposure amount in percent in relation to the credit limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITUTILIZATIONQ')/$value
semantic_en: "This CDS view retrieves details about a credit limit and its usage in percent in SAP Credit Management. This CDS view provides the data to answer the following business questions: How much is the exposure amount in percent in relation to the credit limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# C_CREDITLIMITUTILIZATIONQ

**This CDS view retrieves details about a credit limit and its usage in percent in SAP Credit Management. This CDS view provides the data to answer the following business questions: How much is the exposure amount in percent in relation to the credit limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITUTILIZATIONQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `CreditSegmentName` |  | |  |  | `CHAR(50)` | Name of Credit Segment |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditRiskClassName` |  | |  |  | `CHAR(40)` | Name of Risk Class |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `CreditAccountGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group (Obsolete) |
| `CreditAccountGroupName` |  | |  |  | `CHAR(40)` | Text for Credit Group |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CreditSegmentCurrency` |  | |  |  | `CUKY(5)` | Credit Segment Currency |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `HedgedExposureAmount` |  | |  |  | `CURR(15)` | Hedged Credit Exposure |
| `CustomerIsAboveThreshold` |  | |  |  | `INT4(10)` | Threshold exceeded |
| `AboveLimitAmtInDspCrcy` |  | |  |  | `CURR(24)` |  |
| `AbvThldWthnLmtAmtInDspCrcy` |  | |  |  | `INT1(3)` |  |
| `AbvThldPct` |  | |  |  | `INT1(3)` |  |
| `CreditLimitUtilizationPct` |  | |  |  | `INT1(3)` |  |
| `WthnThldCrdtLmtUtilizationPct` |  | |  |  | `INT1(3)` |  |
| `LimitExceededPct` |  | |  |  | `INT1(3)` |  |
| `CreditLimitExceededPct` |  | |  |  | `INT1(3)` |  |
| `RemainingCreditPct` |  | |  |  | `INT1(3)` |  |
| `AbvThldWithinLmtPct` |  | |  |  | `INT1(3)` |  |
| `AbvThldWithinLmtCrdtUtilznPct` |  | |  |  | `INT1(3)` |  |
| `CreditLimitUtilizationAllPct` |  | |  |  | `INT1(3)` |  |
| `CrdtUsageWthnLmtAmtInDspCrcy` |  | |  |  | `CURR(23)` | Credit Amount used within Limit |
| `CrdtLmtExceededAmtInDspCrcy` |  | |  |  | `CURR(23)` | Credit Limit Exceeded Amount |
| `RemainingCreditAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Credit Amount |
