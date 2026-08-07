---
name: C_CREDITDECISIONDOCUMENTQ_2
description: Credit Decision Document V2 Query
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ_2')/$value
semantic_en: Credit Decision Document V2 Query
tags:
  - FIN
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - metadata-only
---
# C_CREDITDECISIONDOCUMENTQ_2

**Credit Decision Document V2 Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ_2')/$value) |

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
| `CrdtDcsnDocumentProcessingUser` |  | |  |  | `CHAR(12)` | Processor |
| `CrdtDcsnDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | DCD Created By (User) |
| `CrdtDcsnDocLastChangedByUser` |  | |  |  | `CHAR(12)` | DCD Changed By (User) |
| `CrdtDcsnDocumentClosedByUser` |  | |  |  | `CHAR(12)` | DCD Closed By (User) |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CreditDecisionDocumentReason` |  | |  |  | `CHAR(4)` | Reason for the Documented Credit Decision |
| `CreditDecisionDocumentStatus` |  | |  |  | `NUMC(1)` | DCD Status |
| `CreditDecisionDocumentPriority` |  | |  |  | `NUMC(1)` | DCD Priority |
| `CreditDecisionDocumentCategory` |  | |  |  | `CHAR(4)` | Category of the Documented Credit Decision |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `CrdtDcsnDocCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CrdtDcsnDocLastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `CrdtDcsnDocumentCloseDate` |  | |  |  | `DATS(8)` | Closed On |
| `CrdtDcsnDocPlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  |  | `INT4(10)` | Number of Days After Planned Closing Date |
| `CreditDecisionDocumentIsClosed` |  | |  |  | `CHAR(1)` |  |
| `CasePlannedCloseDateIsExceeded` |  | |  |  | `CHAR(1)` |  |
| `ProcessingDays` |  | |  |  | `INT4(10)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `OpenCreditAmount` |  | |  |  | `CURR(15)` | Open Credit Amount |
| `CheckedCreditRiskAmount` |  | |  |  | `CURR(15)` | Amount for Which the Credit Check Was Performed |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `RelatedSAPObjectType` |  | |  |  | `CHAR(30)` | SAP Object Node Type - Camel Case Node Name |
| `CreditDecisionReferenceDoc` |  | |  |  | `CHAR(70)` | Number of Document with Credit Block |
| `StaticLmtUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Static Check of Credit Limit Utilization |
| `MaxDocAmountCreditChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Document Value |
| `DynLimitUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Dynamic Check of Credit Limit Utilization |
| `MaxDunningLevelCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Dunning Level |
| `OldestOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Oldest Open Item |
| `DaysSlsOutStdgCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Days Sales Outstanding (DSO) |
| `OverdueOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Overdue Open Items |
| `CreditLimitUtilizationPct` |  | |  |  | `DECF(34)` |  |
