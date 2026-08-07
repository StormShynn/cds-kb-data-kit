---
name: I_CASEATTRIBUTE
description: Case Attribute
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTE')/$value
semantic_en: Case Attribute
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
  - metadata-only
---
# I_CASEATTRIBUTE

**Case Attribute**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUniqueID` |  | |  |  | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CaseExternalReference` |  | |  |  | `CHAR(30)` | External Reference |
| `CaseCreatedBy` |  | |  |  | `CHAR(12)` | Created By |
| `CaseCreatedOn` |  | |  |  | `DEC(15)` | Created On |
| `CaseLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `CaseLastChangedOn` |  | |  |  | `DEC(15)` | Last Changed On |
| `CaseClosedBy` |  | |  |  | `CHAR(12)` | Closed by User |
| `CaseClosedTime` |  | |  |  | `DEC(15)` | Closed at Time |
| `CasePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `CaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `CaseResponsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `CaseTitle` |  | |  |  | `CHAR(80)` | Case Title |
| `CaseEscalationReason` |  | |  |  | `CHAR(2)` | Reason for Escalation |
| `CaseCategory` |  | |  |  | `CHAR(4)` | Category |
| `CasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `CaseAuthorizationLevel` |  | |  |  | `CHAR(1)` | Authorization level |
| `CaseStatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseStatusObjectNumber` |  | |  |  | `CHAR(32)` | Case: Status Object Number (GUID), (Central Status Managmnt) |
| `CaseSystemStatusName` |  | |  |  | `CHAR(40)` | Case: System Status Description (Central Status Management) |
| `CaseUserStatusName` |  | |  |  | `CHAR(40)` | Case: User Status Description (Central Status Management) |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
