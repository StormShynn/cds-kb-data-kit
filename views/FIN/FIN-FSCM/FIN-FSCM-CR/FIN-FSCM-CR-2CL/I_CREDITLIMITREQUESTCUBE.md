---
name: I_CREDITLIMITREQUESTCUBE
description: Credit Limit Request - Cube
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITREQUESTCUBE')/$value
semantic_en: Credit Limit Request - Cube
tags:
  - FIN
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CREDITLIMITREQUESTCUBE

**Credit Limit Request - Cube**

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
