---
name: I_CREDITDECISIONDOCUMENTC_2
description: "This CDS view is designed to provide a comprehensive analytical cube for credit decision documents. It aggregates and presents data related to credit decisions, including details about business partners, credit segments, credit risk classes, and associated documents. The view is structured to support analytical queries and reporting, focusing on open credit decision cases. This CDS view provides the data to answer the following business questions: What are the open credit decision documents for a given business partner or credit segment? What is the status, priority, and reason for each credit decision document? Who are the users involved in processing, creating, changing, and closing credit decision documents? What are the credit limits and exposures for business partners within specific credit segments? How many days have passed since the planned close date for credit decision documents, and which documents have exceeded this date? What are the amounts related to open credit, checked credit risk, customer credit limit, and customer credit exposure? Which credit checks have failed for the credit decision documents, such as static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open item checks? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC_2')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analytical cube for credit decision documents. It aggregates and presents data related to credit decisions, including details about business partners, credit segments, credit risk classes, and associated documents. The view is structured to support analytical queries and reporting, focusing on open credit decision cases. This CDS view provides the data to answer the following business questions: What are the open credit decision documents for a given business partner or credit segment? What is the status, priority, and reason for each credit decision document? Who are the users involved in processing, creating, changing, and closing credit decision documents? What are the credit limits and exposures for business partners within specific credit segments? How many days have passed since the planned close date for credit decision documents, and which documents have exceeded this date? What are the amounts related to open credit, checked credit risk, customer credit limit, and customer credit exposure? Which credit checks have failed for the credit decision documents, such as static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open item checks? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - plan
  - metadata-only
---
# I_CREDITDECISIONDOCUMENTC_2

**This CDS view is designed to provide a comprehensive analytical cube for credit decision documents. It aggregates and presents data related to credit decisions, including details about business partners, credit segments, credit risk classes, and associated documents. The view is structured to support analytical queries and reporting, focusing on open credit decision cases. This CDS view provides the data to answer the following business questions: What are the open credit decision documents for a given business partner or credit segment? What is the status, priority, and reason for each credit decision document? Who are the users involved in processing, creating, changing, and closing credit decision documents? What are the credit limits and exposures for business partners within specific credit segments? How many days have passed since the planned close date for credit decision documents, and which documents have exceeded this date? What are the amounts related to open credit, checked credit risk, customer credit limit, and customer credit exposure? Which credit checks have failed for the credit decision documents, such as static limit utilization, maximum document amount, dynamic limit utilization, maximum dunning level, oldest open item, days sales outstanding, and overdue open item checks? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocumentUUID` |  | |  |  | `RAW(16)` | UUID of DCD |
| `CreditDecisionDocument` |  | |  |  | `CHAR(12)` | DCD ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CrdtDcsnDocumentProcessingUser` |  | |  |  | `CHAR(12)` | Processor |
| `CrdtDcsnDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | DCD Created By (User) |
| `CrdtDcsnDocLastChangedByUser` |  | |  |  | `CHAR(12)` | DCD Changed By (User) |
| `CrdtDcsnDocumentClosedByUser` |  | |  |  | `CHAR(12)` | DCD Closed By (User) |
| `CreditDecisionDocumentReason` |  | |  |  | `CHAR(4)` | Reason for the Documented Credit Decision |
| `CreditDecisionDocumentStatus` |  | |  |  | `NUMC(1)` | DCD Status |
| `CreditDecisionDocumentPriority` |  | |  |  | `NUMC(1)` | DCD Priority |
| `CreditDecisionDocumentIsClosed` |  | |  |  | `CHAR(1)` |  |
| `CreditDecisionDocumentCategory` |  | |  |  | `CHAR(4)` | Category of the Documented Credit Decision |
| `CrdtDecisionDocumentLastAction` |  | |  |  | `NUMC(1)` | DCD Last Action |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `CrdtDcsnDocCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CrdtDcsnDocLastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `CrdtDcsnDocumentCloseDate` |  | |  |  | `DATS(8)` | Closed On |
| `CrdtDcsnDocPlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `ProcessingDays` |  | |  |  | `INT4(10)` |  |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  |  | `INT4(10)` | Number of Days After Planned Closing Date |
| `CasePlannedCloseDateIsExceeded` |  | |  |  | `CHAR(1)` |  |
| `RelatedSAPObjectType` |  | |  |  | `CHAR(30)` | SAP Object Node Type - Camel Case Node Name |
| `CreditDecisionReferenceDoc` |  | |  |  | `CHAR(70)` | Number of Document with Credit Block |
| `CreditDecisionReqUTCDateTime` |  | |  |  | `DEC(15)` | Request Time of Documented Credit Decision in UTC |
| `StaticLmtUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Static Check of Credit Limit Utilization |
| `MaxDocAmountCreditChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Document Value |
| `DynLimitUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Dynamic Check of Credit Limit Utilization |
| `MaxDunningLevelCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Dunning Level |
| `OldestOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Oldest Open Item |
| `DaysSlsOutStdgCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Days Sales Outstanding (DSO) |
| `OverdueOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Overdue Open Items |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `OpenCreditAmount` |  | |  |  | `CURR(15)` | Open Credit Amount |
| `CheckedCreditRiskAmount` |  | |  |  | `CURR(15)` | Amount for Which the Credit Check Was Performed |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
