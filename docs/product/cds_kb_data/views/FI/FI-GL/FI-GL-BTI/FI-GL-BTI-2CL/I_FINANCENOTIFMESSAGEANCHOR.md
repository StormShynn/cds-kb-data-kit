---
name: I_FINANCENOTIFMESSAGEANCHOR
description: "Anchor object for finance notif messages"
app_component: FI-GL-BTI-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value
semantic_en: "Anchor object for finance notif messages"
semantic_vi: "Anchor object for finance notif messages — CDS view giao diện dựa trên Anchor object for finance notif messages."
keywords:
  - "anchor"
  - "object"
  - "for"
  - "finance"
  - "notif"
  - "messages"
  - "message"
  - "unique"
  - "latest"
  - "class"
  - "number"
  - "variable1"
  - "text"
  - "variable2"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-BTI-2CL
  - FI-GL
  - FI-GL-BTI
  - FI-GL-BTI-2CL
  - interface-view
  - lob:finance
---
# I_FINANCENOTIFMESSAGEANCHOR

**Anchor object for finance notif messages**

| Property | Value |
|---|---|
| App Component | `FI-GL-BTI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinanceNotifMessageUniqueKey` | ✓ | |  |  | `CHAR(70)` | Message Unique Key |
| `LatestMessageClass` |  | |  |  | `CHAR(20)` | Message class of the latest message |
| `LatestMessageNumber` |  | |  |  | `CHAR(3)` | Message number of the latest message |
| `LatestMessageVariable1Text` |  | |  |  | `CHAR(50)` | Message variable 1 of the latest message |
| `LatestMessageVariable2Text` |  | |  |  | `CHAR(50)` | Message variable 2 of the latest message |
| `LatestMessageVariable3Text` |  | |  |  | `CHAR(50)` | Message variable 3 of the latest message |
| `LatestMessageVariable4Text` |  | |  |  | `CHAR(50)` | Message variable 4 of the latest message |
| `LogMessageText` |  | |  |  | `CHAR(132)` | Message Text composed with variables |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFMESSAGEANCHOR')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Anchor object for finance notif messages'
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType:#COMPOSITE
// required for usage as Situation Object Structure
@VDM.lifecycle.contract.type:           #PUBLIC_LOCAL_API
@ObjectModel.semanticKey: ['FinanceNotifMessageUniqueKey']
@ObjectModel.supportedCapabilities:[#SITUATION_ANCHOR, #SITUATION_TRIGGER, #SITUATION_DATACONTEXT]
@Metadata.ignorePropagatedAnnotations:true
define view entity I_FinanceNotifMessageAnchor
  as select distinct from I_FinanceNotifProcessStep
{
  key FinanceNotifMessageUniqueKey,
      LatestMessageClass,
      LatestMessageNumber,
      LatestMessageVariable1Text,
      LatestMessageVariable2Text,
      LatestMessageVariable3Text,
      LatestMessageVariable4Text,
      LogMessageText
}
where
  FinanceNotifMessageUniqueKey is not initial
//union select distinct from I_FinanceNotification {
//  key FinanceNotifMessageUniqueKey,
//      LatestMessageClass,
//      LatestMessageNumber,
//      LatestMessageVariable1Text,
//      LatestMessageVariable2Text,
//      LatestMessageVariable3Text,
//      LatestMessageVariable4Text,
//      LogMessageText
//} where FinanceNotifMessageUniqueKey is not initial
```
