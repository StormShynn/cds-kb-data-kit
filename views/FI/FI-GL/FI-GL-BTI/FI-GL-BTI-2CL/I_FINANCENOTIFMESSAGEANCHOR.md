---
name: I_FINANCENOTIFMESSAGEANCHOR
description: Anchor object for finance notif messages
app_component: FI-GL-BTI-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value
semantic_en: Anchor object for finance notif messages
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
# I_FINANCENOTIFMESSAGEANCHOR

**Anchor object for finance notif messages**

| Property | Value |
|---|---|
| App Component | `FI-GL-BTI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinanceNotifMessageUniqueKey` | `CHAR(70)` | Message Unique Key |
| `LatestMessageClass` | `CHAR(20)` | Message class of the latest message |
| `LatestMessageNumber` | `CHAR(3)` | Message number of the latest message |
| `LatestMessageVariable1Text` | `CHAR(50)` | Message variable 1 of the latest message |
| `LatestMessageVariable2Text` | `CHAR(50)` | Message variable 2 of the latest message |
| `LatestMessageVariable3Text` | `CHAR(50)` | Message variable 3 of the latest message |
| `LatestMessageVariable4Text` | `CHAR(50)` | Message variable 4 of the latest message |
| `LogMessageText` | `CHAR(132)` | Message Text composed with variables |
