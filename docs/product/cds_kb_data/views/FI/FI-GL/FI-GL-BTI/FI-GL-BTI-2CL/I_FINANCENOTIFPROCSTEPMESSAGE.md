---
name: I_FINANCENOTIFPROCSTEPMESSAGE
description: "Trigger object for finance notif step"
app_component: FI-GL-BTI-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value
semantic_en: "Trigger object for finance notif step"
semantic_vi: "Trigger object for finance notif step — CDS view giao diện dựa trên I_FinanceNotifProcessStep."
keywords:
  - "trigger"
  - "object"
  - "for"
  - "finance"
  - "notif"
  - "step"
  - "process"
  - "message"
  - "text"
  - "unique"
  - "notification"
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
# I_FINANCENOTIFPROCSTEPMESSAGE

**Trigger object for finance notif step**

| Property | Value |
|---|---|
| App Component | `FI-GL-BTI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinanceNotifProcessStepUUID` | ✓ | | `_ProcessStep` | `FinanceNotifProcessStepUUID` | `RAW(16)` | Finance Notification Step Identifier |
| `LogMessageText` |  | | `_ProcessStep` | `LogMessageText` | `CHAR(132)` | Message Text composed with variables |
| `FinanceNotifMessageUniqueKey` |  | | `_ProcessStep` | `FinanceNotifMessageUniqueKey` | `CHAR(70)` | Message Unique Key |
| `FinanceNotificationUUID` |  | | `_ProcessStep` | `FinanceNotificationUUID` | `RAW(16)` | Finance Notification Identifier |
| `FinanceNotificationProcessStep` |  | | `_ProcessStep` | `FinanceNotificationProcessStep` | `NUMC(10)` | Finance Notification Process Step |
| `FinanceComponent` |  | | `_ProcessStep` | `FinanceComponent` | `CHAR(30)` | Finance Component |
| `FinanceCompProcessingStatus` |  | | `_ProcessStep` | `FinanceCompProcessingStatus` | `CHAR(2)` | Finance Component Processing Status |
| `FinanceCompNotificationUUID` |  | | `_ProcessStep` | `FinanceCompNotificationUUID` | `RAW(16)` | Finance Component Notification Identifier |
| `ApplicationLogHandle` |  | | `_ProcessStep` | `ApplicationLogHandle` | `CHAR(22)` | Application Log: Log Handle |
| `LatestMessageClass` |  | | `_ProcessStep` | `LatestMessageClass` | `CHAR(20)` | Message class of the latest message |
| `LatestMessageNumber` |  | | `_ProcessStep` | `LatestMessageNumber` | `CHAR(3)` | Message number of the latest message |
| `LatestMessageSeverity` |  | | `_ProcessStep` | `LatestMessageSeverity` | `CHAR(1)` | Message severity of the latest message |
| `LatestMessageVariable1Text` |  | | `_ProcessStep` | `LatestMessageVariable1Text` | `CHAR(50)` | Message variable 1 of the latest message |
| `LatestMessageVariable2Text` |  | | `_ProcessStep` | `LatestMessageVariable2Text` | `CHAR(50)` | Message variable 2 of the latest message |
| `LatestMessageVariable3Text` |  | | `_ProcessStep` | `LatestMessageVariable3Text` | `CHAR(50)` | Message variable 3 of the latest message |
| `LatestMessageVariable4Text` |  | | `_ProcessStep` | `LatestMessageVariable4Text` | `CHAR(50)` | Message variable 4 of the latest message |
| `FinanceNotificationType` |  | | `_FinanceNotif` | `FinanceNotificationType` | `CHAR(30)` | Finance Notification Object Type |
| `ReferenceDocumentType` |  | | `_FinanceNotif` | `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentOID` |  | | `_FinanceNotif` | `ReferenceDocumentOID` | `CHAR(128)` | Reference Document OID |
| `ReferenceDocumentDisplayID` |  | | `_FinanceNotif` | `ReferenceDocumentDisplayID` | `CHAR(64)` | Reference Document Display ID |
| `ReferenceDocumentEventOID` |  | | `_FinanceNotif` | `ReferenceDocumentEventOID` | `CHAR(128)` | Reference Document Event OID |
| `RefDocumentEventDisplayID` |  | | `_FinanceNotif` | `RefDocumentEventDisplayID` | `CHAR(64)` | Reference Document Event Display ID |
| `ReferenceDocumentLogicalSystem` |  | | `_FinanceNotif` | `ReferenceDocumentLogicalSystem` | `CHAR(10)` | Reference Document Logical System |
| `CompanyCode` |  | | `_FinanceNotif` | `CompanyCode` | `CHAR(4)` | Company Code |
| `PostingDate` |  | | `_FinanceNotif` | `PostingDate` | `DATS(8)` | Posting Date |
| `FiscalYearVariant` |  | | `_CompanyCode` | `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCENOTIFPROCSTEPMESSAGE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Trigger object for finance notif step'
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType:#COMPOSITE
// required for usage as Situation Object Structure
@VDM.lifecycle.contract.type:           #PUBLIC_LOCAL_API
@ObjectModel.semanticKey: ['ReferenceDocumentDisplayID']
@ObjectModel.supportedCapabilities:[#SITUATION_ANCHOR, #SITUATION_TRIGGER, #SITUATION_DATACONTEXT]
@Metadata.ignorePropagatedAnnotations:true
define view entity I_FinanceNotifProcStepMessage
  as select from I_FinanceNotifProcessStep as _ProcessStep
    inner join   I_FinanceNotification     as _FinanceNotif on _FinanceNotif.FinanceNotificationUUID = _ProcessStep.FinanceNotificationUUID
  association [0..1] to I_CompanyCode      as _CompanyCode  on $projection.CompanyCode = _CompanyCode.CompanyCode 
{

  key _ProcessStep.FinanceNotifProcessStepUUID,
      _ProcessStep.LogMessageText,
      _ProcessStep.FinanceNotifMessageUniqueKey,
      _ProcessStep.FinanceNotificationUUID,
      _ProcessStep.FinanceNotificationProcessStep,
      _ProcessStep.FinanceComponent,
      _ProcessStep.FinanceCompProcessingStatus,
      _ProcessStep.FinanceCompNotificationUUID,
      _ProcessStep.ApplicationLogHandle,
      _ProcessStep.LatestMessageClass,
      _ProcessStep.LatestMessageNumber,
      _ProcessStep.LatestMessageSeverity,
      _ProcessStep.LatestMessageVariable1Text,
      _ProcessStep.LatestMessageVariable2Text,
      _ProcessStep.LatestMessageVariable3Text,
      _ProcessStep.LatestMessageVariable4Text,
//      _ProcessStep.CreatedByUser,
//      _ProcessStep.CreationDateTime,
//      _ProcessStep.LastChangedByUser,
//      _ProcessStep.LastChangeDateTime,
//      

      _FinanceNotif.FinanceNotificationType,
      _FinanceNotif.ReferenceDocumentType,
      _FinanceNotif.ReferenceDocumentOID,
      _FinanceNotif.ReferenceDocumentDisplayID,
      _FinanceNotif.ReferenceDocumentEventOID,
      _FinanceNotif.RefDocumentEventDisplayID,
      _FinanceNotif.ReferenceDocumentLogicalSystem,
      _FinanceNotif.CompanyCode,
      _FinanceNotif.PostingDate,
      
      _CompanyCode.FiscalYearVariant,
      _CompanyCode
    //  _FinanceNotif.FinanceNotifProcessingStatus


}
```
