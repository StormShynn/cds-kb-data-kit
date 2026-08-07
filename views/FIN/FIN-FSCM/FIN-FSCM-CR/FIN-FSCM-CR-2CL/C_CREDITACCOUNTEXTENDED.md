---
name: C_CREDITACCOUNTEXTENDED
description: "This CDS view retrieves information related to business partners in SAP Credit Management. It provides detailed information about the credit limit, the requested credit limit, and the exposure amount. This CDS view provides the data to answer the following business questions: What is the requested credit limit amount and the actual credit limit amount? When was the credit limit amount changed? How long is the credit limit valid? Is the business partner critical? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCOUNTEXTENDED')/$value
semantic_en: "This CDS view retrieves information related to business partners in SAP Credit Management. It provides detailed information about the credit limit, the requested credit limit, and the exposure amount. This CDS view provides the data to answer the following business questions: What is the requested credit limit amount and the actual credit limit amount? When was the credit limit amount changed? How long is the credit limit valid? Is the business partner critical? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# C_CREDITACCOUNTEXTENDED

**This CDS view retrieves information related to business partners in SAP Credit Management. It provides detailed information about the credit limit, the requested credit limit, and the exposure amount. This CDS view provides the data to answer the following business questions: What is the requested credit limit amount and the actual credit limit amount? When was the credit limit amount changed? How long is the credit limit valid? Is the business partner critical? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCOUNTEXTENDED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `CreditSegmentName` |  | |  |  | `CHAR(50)` | Name of Credit Segment |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditRiskClassName` |  | |  |  | `CHAR(40)` | Name of Risk Class |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  |  | `CHAR(20)` | Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CreditLimitCalculatedAmount` |  | |  |  | `CURR(23)` | Calculated Credit Limit |
| `CreditLimitRequestedAmount` |  | |  |  | `CURR(23)` | Requested Credit Limit |
| `NumberOfBusinessPartners` |  | |  |  | `INT4(10)` | Number of Business Partners |
| `CrdtLimitIsEqualCrdtLimitCalcd` |  | |  |  | `CHAR(1)` | Current Limit Vs. Calculated Limit |
| `CrdtLimitIsEqualCrdtLimitReqd` |  | |  |  | `CHAR(1)` | Current Limit Vs. Requested Limit |
| `CreditAccountIsBlocked` |  | |  |  | `CHAR(1)` | Blocked Credit Account |
| `CreditLimitValidityEndDate` |  | |  |  | `DATS(8)` | Credit Limit Validity End Date |
| `CreditLimitLastChangeDate` |  | |  |  | `DATS(8)` | Last Change Date for Credit Limit |
| `CreditAccountGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditAccountGroupName` |  | |  |  | `CHAR(40)` | Text for Credit Group |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditAccountResubmissionDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  |  | `CHAR(1)` | Credit Limit is Zero |
| `CreditAccountBlockReason` |  | |  |  | `CHAR(2)` | Credit Account Blocking Reason |
| `CrdtAcctBlockReasonDescription` |  | |  |  | `CHAR(40)` | SAP Credit Management: Description for Blocks |
| `CrdtLmtIsReqdFrmAutomCalc` |  | |  |  | `CHAR(1)` | Credit Limit Request from Automatic Calculation |
| `CreditLimitReqdValidityEndDate` |  | |  |  | `DATS(8)` | Credit Limit Requested Validity End Date |
| `CreditLimitRequestDate` |  | |  |  | `DATS(8)` | Credit Limit Requested Date |
| `CrdtLimitValidityRemainingDays` |  | |  |  | `INT4(10)` | Limit Remaining Days |
| `CreditLimitLastChangeDays` |  | |  |  | `INT4(10)` | Days Since Last Change Made to Credit Limit |
| `CreditLimitUtilizationPct` |  | |  |  | `INT1(3)` |  |
