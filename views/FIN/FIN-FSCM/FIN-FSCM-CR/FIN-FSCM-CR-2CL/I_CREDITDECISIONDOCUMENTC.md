---
name: I_CREDITDECISIONDOCUMENTC
description: Credit Decision Document - Cube
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC')/$value
semantic_en: Credit Decision Document - Cube
tags:
  - FIN
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CREDITDECISIONDOCUMENTC

**Credit Decision Document - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CaseProcessor` |  | |  |  | `CHAR(12)` | Credit Analyst |
| `CaseResponsible` |  | |  |  | `CHAR(12)` | Person Responsible |
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
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseLastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CasePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `CaseIsClosed` |  | |  |  | `CHAR(1)` | Case is Closed |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  |  | `INT4(10)` | Number of Days After Planned Closing Date |
| `CasePlannedCloseDateIsExceeded` |  | |  |  | `CHAR(1)` | Planned Close Date is Exceeded |
| `CreditDecisionObjectType` |  | |  |  | `CHAR(10)` | Type of Document with Credit Block |
| `CreditDecisionSalesDocument` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesDocumentCreditStatus` |  | |  |  | `CHAR(1)` | Status of Document with Credit Block |
| `CreditDecisionReqUTCDateTime` |  | |  |  | `DEC(15)` | Timestamp |
| `CreditDecisionFirstApprover` |  | |  |  | `CHAR(12)` | Approver |
| `CreditDecisionSecondApprover` |  | |  |  | `CHAR(12)` | Second Approver |
| `CreditDecisionFirstApprvlSts` |  | |  |  | `CHAR(1)` | Status of First Approval |
| `CreditDecisionSecondApprvlSts` |  | |  |  | `CHAR(1)` | Status of Second Approval |
| `CreditDecisionCompletedByUser` |  | |  |  | `CHAR(12)` | User Who Released/Rejected the Sales Document |
| `CrdtDcsnApprvlProcIsOverruled` |  | |  |  | `CHAR(1)` | Approval Process Not Adhered To |
| `StaticLmtUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Static Check of Credit Limit Utilization Failed |
| `MaxDocAmountCreditChkIsFailed` |  | |  |  | `CHAR(1)` | Check for Maximum Document Value Failed |
| `DynLimitUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Dynamic Check of Credit Limit Utilization Failed |
| `MaxDunningLevelCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Dunning Level Failed |
| `OldestOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check for Oldest Open Item Failed |
| `DaysSlsOutStdgCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Days Sales Outstanding (DSO) Failed |
| `OtherCreditCheckIsFailed` |  | |  |  | `CHAR(1)` | Other Checks Failed |
| `OverdueOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check for Overdue Open Items Failed |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `OpenCreditAmount` |  | |  |  | `CURR(15)` | Open Credit Amount |
| `CheckedCreditRiskAmount` |  | |  |  | `CURR(15)` | Amount for Which the Credit Check Was Performed |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
