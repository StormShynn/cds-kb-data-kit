---
name: I_CREDITLIMITREQUESTCUBE
description: "This CDS view is designed to provide a comprehensive overview of credit limit requests, including details about the business partner, credit segment, and various case attributes. It aggregates and presents data related to credit limits, requests, approvals, and associated business metrics, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of credit limit requests for a specific business partner or credit segment? How many credit limit requests have been made, and what is their status? What is the utilization percentage of the credit limit for a business partner? What are the credit risk class and business partner rating associated with the credit limit requests? How do the requested, approved, and actual credit limit amounts compare? What is the expected sales amount and customer credit exposure amount related to the credit limit requests? Are there any cases where the planned close date for a credit limit request has been exceeded? What are the details of the case processor, creator, last changer, and closer for each credit limit request? What are the reasons, types, and categories associated with the credit limit request cases? What is the priority and system status of each credit limit request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITREQUESTCUBE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of credit limit requests, including details about the business partner, credit segment, and various case attributes. It aggregates and presents data related to credit limits, requests, approvals, and associated business metrics, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of credit limit requests for a specific business partner or credit segment? How many credit limit requests have been made, and what is their status? What is the utilization percentage of the credit limit for a business partner? What are the credit risk class and business partner rating associated with the credit limit requests? How do the requested, approved, and actual credit limit amounts compare? What is the expected sales amount and customer credit exposure amount related to the credit limit requests? Are there any cases where the planned close date for a credit limit request has been exceeded? What are the details of the case processor, creator, last changer, and closer for each credit limit request? What are the reasons, types, and categories associated with the credit limit request cases? What is the priority and system status of each credit limit request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - plan
  - metadata-only
---
# I_CREDITLIMITREQUESTCUBE

**This CDS view is designed to provide a comprehensive overview of credit limit requests, including details about the business partner, credit segment, and various case attributes. It aggregates and presents data related to credit limits, requests, approvals, and associated business metrics, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of credit limit requests for a specific business partner or credit segment? How many credit limit requests have been made, and what is their status? What is the utilization percentage of the credit limit for a business partner? What are the credit risk class and business partner rating associated with the credit limit requests? How do the requested, approved, and actual credit limit amounts compare? What is the expected sales amount and customer credit exposure amount related to the credit limit requests? Are there any cases where the planned close date for a credit limit request has been exceeded? What are the details of the case processor, creator, last changer, and closer for each credit limit request? What are the reasons, types, and categories associated with the credit limit request cases? What is the priority and system status of each credit limit request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITREQUESTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `CaseCreatedBy` |  | |  |  | `CHAR(12)` | Created By |
| `CaseLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `CaseClosedBy` |  | |  |  | `CHAR(12)` | Closed by User |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseStatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `CaseEscalationReason` |  | |  |  | `CHAR(2)` | Reason for Escalation |
| `CaseCategory` |  | |  |  | `CHAR(4)` | Category |
| `CreditLimitUtilizationPct` |  | |  |  | `DEC(5)` | Credit Limit Utilization in Percent |
| `BusinessPartnerRating` |  | |  |  | `CHAR(10)` | Score |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `NumberOfCreditLimitRequests` |  | |  |  | `INT4(10)` | Number of Credit Limit Requests |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseLastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CasePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `CaseIsClosed` |  | |  |  | `CHAR(1)` | Case is Closed |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  |  | `INT4(10)` | Number of Days After Planned Closing Date |
| `CasePlannedCloseDateIsExceeded` |  | |  |  | `CHAR(1)` | Planned Close Date is Exceeded |
| `CreditLimitIsApproved` |  | |  |  | `CHAR(1)` | Credit Limit Is Approved |
| `CrdtLmtReqdIsEqualCrdtLmtAprvd` |  | |  |  | `CHAR(1)` | Requested Limit Vs. Approved Limit |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CreditLimitRequestedAmount` |  | |  |  | `CURR(23)` | Requested Credit Limit |
| `CreditLimitApprovedAmount` |  | |  |  | `CURR(23)` | Approved Credit Limit |
| `ExpectedSalesAmount` |  | |  |  | `CURR(15)` | Expected Sales Revenue |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
