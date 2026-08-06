---
name: I_FINANCENOTIFPROCSTEPMESSAGE
description: Trigger object for finance notif step
app_component: FI-GL-BTI-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value
semantic_en: Trigger object for finance notif step
tags:
  - FI
  - bo:companycode
  - component:FI-GL-BTI-2CL
  - FI-GL
  - FI-GL-BTI
  - FI-GL-BTI-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FINANCENOTIFPROCSTEPMESSAGE

**Trigger object for finance notif step**

| Property | Value |
|---|---|
| App Component | `FI-GL-BTI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinanceNotifProcessStepUUID` | `RAW(16)` | Finance Notification Step Identifier |
| `LogMessageText` | `CHAR(132)` | Message Text composed with variables |
| `FinanceNotifMessageUniqueKey` | `CHAR(70)` | Message Unique Key |
| `FinanceNotificationUUID` | `RAW(16)` | Finance Notification Identifier |
| `FinanceNotificationProcessStep` | `NUMC(10)` | Finance Notification Process Step |
| `FinanceComponent` | `CHAR(30)` | Finance Component |
| `FinanceCompProcessingStatus` | `CHAR(2)` | Finance Component Processing Status |
| `FinanceCompNotificationUUID` | `RAW(16)` | Finance Component Notification Identifier |
| `ApplicationLogHandle` | `CHAR(22)` | Application Log: Log Handle |
| `LatestMessageClass` | `CHAR(20)` | Message class of the latest message |
| `LatestMessageNumber` | `CHAR(3)` | Message number of the latest message |
| `LatestMessageSeverity` | `CHAR(1)` | Message severity of the latest message |
| `LatestMessageVariable1Text` | `CHAR(50)` | Message variable 1 of the latest message |
| `LatestMessageVariable2Text` | `CHAR(50)` | Message variable 2 of the latest message |
| `LatestMessageVariable3Text` | `CHAR(50)` | Message variable 3 of the latest message |
| `LatestMessageVariable4Text` | `CHAR(50)` | Message variable 4 of the latest message |
| `FinanceNotificationType` | `CHAR(30)` | Finance Notification Object Type |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentOID` | `CHAR(128)` | Reference Document OID |
| `ReferenceDocumentDisplayID` | `CHAR(64)` | Reference Document Display ID |
| `ReferenceDocumentEventOID` | `CHAR(128)` | Reference Document Event OID |
| `RefDocumentEventDisplayID` | `CHAR(64)` | Reference Document Event Display ID |
| `ReferenceDocumentLogicalSystem` | `CHAR(10)` | Reference Document Logical System |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
