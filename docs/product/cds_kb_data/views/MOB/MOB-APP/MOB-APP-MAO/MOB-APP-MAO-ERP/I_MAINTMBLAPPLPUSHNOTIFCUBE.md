---
name: I_MAINTMBLAPPLPUSHNOTIFCUBE
description: "Mobile Push Notification - Cube"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHNOTIFCUBE')/$value
semantic_en: "Mobile Push Notification - Cube"
semantic_vi: "Mobile Push Notification - Cube — CDS view giao diện dựa trên I_MblApplPushNotification."
keywords:
  - "mobile"
  - "push"
  - "notification"
  - "cube"
  - "application"
  - "internal"
  - "user"
  - "appl"
  - "scenario"
  - "source"
  - "type"
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - notification
---
# I_MAINTMBLAPPLPUSHNOTIFCUBE

**Mobile Push Notification - Cube**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHNOTIFCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileApplicationPushInternal` | ✓ | |  |  | `CHAR(32)` | Push scenario instance GUID |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MblApplPushScenarioInternal` |  | |  |  | `CHAR(40)` | Scenario Id |
| `MblUsrApplPushSourceType` |  | |  |  | `CHAR(10)` | Push Scenario Source Type |
| `MobileUserApplPushSourceObj` |  | |  |  | `CHAR(100)` | Push source object |
| `MobileUserApplicationPushSts` |  | |  |  | `CHAR(10)` | Push instance status |
| `MblUsrApplPushEmlNotifIsEnbld` |  | |  |  | `CHAR(1)` | Active Flag |
| `MblUsrApplPushEventInternal` |  | |  |  | `CHAR(32)` | Background Processing Event |
| `MobileUserApplPushEvtParam` |  | |  |  | `CHAR(64)` | Batch Event Parameters (for example, Jobname/Jobcount) |
| `MobileUserApplPushScenarioPrio` |  | |  |  | `NUMC(1)` | Push scenario priority |
| `MobileUserApplPushHistIsEnbld` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplPushOutbTrggrIsEnbld` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserApplPushRetryIsAllwd` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplFetchCallbackIsAllwd` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserApplPushCreatedBy` |  | |  |  | `CHAR(12)` | Created by |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifCrtnYear` |  | | `_CreationDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplPushNotifCrtnMonth` |  | | `_CreationDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplPushNotifExprtnDte` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifExprtnYr` |  | | `_ExpirationDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifExprtnMonth` |  | | `_ExpirationDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplPushNotifProcgDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifProcgYear` |  | | `_ProcessingDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplPushNotifProcgMnth` |  | | `_ProcessingDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplPushNotifCanclnDte` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifCanclnYr` |  | | `_CancellationDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifCanclnMonth` |  | | `_CancellationDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppPushNotifCompltnDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifCompltnYr` |  | | `_CompletionDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifCompltnMonth` |  | | `_CompletionDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppPushServerCompltnDate` |  | |  |  | `DATS(8)` |  |
| `MntMblAppPushServerCompltnYear` |  | | `_ServerCompletionDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushServerCompltnMnth` |  | | `_ServerCompletionDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppPushNotifEnqueueDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifEnqueueYr` |  | | `_EnqueueDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifEnqueueMonth` |  | | `_EnqueueDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppNrOfPushNotifRecords` |  | |  | `1` | `INT1(3)` |  |
| `MblUsrApplNmbrOfPushRecipients` |  | |  |  | `INT4(10)` | Total number of subscribers |
| `_CreationYear` |  | | `_CreationDate` | `_CalendarYear` |  |  |
| `_CreationMonth` |  | | `_CreationDate` | `_CalendarMonth` |  |  |
| `_ExpirationYear` |  | | `_ExpirationDate` | `_CalendarYear` |  |  |
| `_ExpirationMonth` |  | | `_ExpirationDate` | `_CalendarMonth` |  |  |
| `_ProcessingYear` |  | | `_ProcessingDate` | `_CalendarYear` |  |  |
| `_ProcessingMonth` |  | | `_ProcessingDate` | `_CalendarMonth` |  |  |
| `_CancellationYear` |  | | `_CancellationDate` | `_CalendarYear` |  |  |
| `_CancellationMonth` |  | | `_CancellationDate` | `_CalendarMonth` |  |  |
| `_CompletionYear` |  | | `_CompletionDate` | `_CalendarYear` |  |  |
| `_CompletionMonth` |  | | `_CompletionDate` | `_CalendarMonth` |  |  |
| `_ServerCompletionYear` |  | | `_ServerCompletionDate` | `_CalendarYear` |  |  |
| `_ServerCompletionMonth` |  | | `_ServerCompletionDate` | `_CalendarMonth` |  |  |
| `_EnqueueYear` |  | | `_EnqueueDate` | `_CalendarYear` |  |  |
| `_EnqueueMonth` |  | | `_EnqueueDate` | `_CalendarMonth` |  |  |
| `_PushScenario` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_CreationDate` | | ✓ | | | | |
| `_ExpirationDate` | | ✓ | | | | |
| `_ProcessingDate` | | ✓ | | | | |
| `_CancellationDate` | | ✓ | | | | |
| `_CompletionDate` | | ✓ | | | | |
| `_ServerCompletionDate` | | ✓ | | | | |
| `_EnqueueDate` | | ✓ | | | | |
| `_PushStatusText` | | ✓ | | | | |
| `_SourceTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PushScenario` | `I_MblApplPushScenarioDef` | [1..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_CreationDate` | `I_CalendarDate` | [1..1] |
| `_ExpirationDate` | `I_CalendarDate` | [0..1] |
| `_ProcessingDate` | `I_CalendarDate` | [0..1] |
| `_CancellationDate` | `I_CalendarDate` | [0..1] |
| `_CompletionDate` | `I_CalendarDate` | [0..1] |
| `_ServerCompletionDate` | `I_CalendarDate` | [0..1] |
| `_EnqueueDate` | `I_CalendarDate` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHNOTIFCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHNOTIFCUBE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_PushScenario', '_CreatedByUser' ]
}
@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMNTMBLPSHNOTIFC'
}

@EndUserText.label: 'Mobile Push Notification - Cube'

@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [ #ANALYTICAL_PROVIDER ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #MIXED
  }
}

@VDM.viewType: #COMPOSITE

define view entity I_MaintMblApplPushNotifCube
  as select from I_MblApplPushNotification

  association [1..1] to I_MblApplPushScenarioDef as _PushScenario         on _PushScenario.MblApplPushScenarioInternal = $projection.MblApplPushScenarioInternal
  association [0..1] to I_User                   as _CreatedByUser        on _CreatedByUser.UserID = $projection.MobileUserApplPushCreatedBy
  association [1..1] to I_CalendarDate           as _CreationDate         on _CreationDate.CalendarDate = $projection.CreationDate
  association [0..1] to I_CalendarDate           as _ExpirationDate       on _ExpirationDate.CalendarDate = $projection.MaintMblApplPushNotifExprtnDte
  association [0..1] to I_CalendarDate           as _ProcessingDate       on _ProcessingDate.CalendarDate = $projection.MaintMblApplPushNotifProcgDate
  association [0..1] to I_CalendarDate           as _CancellationDate     on _CancellationDate.CalendarDate = $projection.MaintMblApplPushNotifCanclnDte
  association [0..1] to I_CalendarDate           as _CompletionDate       on _CompletionDate.CalendarDate = $projection.MntMblAppPushNotifCompltnDate
  association [0..1] to I_CalendarDate           as _ServerCompletionDate on _ServerCompletionDate.CalendarDate = $projection.MntMblAppPushServerCompltnDate
  association [0..1] to I_CalendarDate           as _EnqueueDate          on _EnqueueDate.CalendarDate = $projection.MntMblAppPushNotifEnqueueDate
{
  key MobileApplicationPushInternal,
      MobileUserApplication,
      @ObjectModel.foreignKey.association: '_PushScenario'
      MblApplPushScenarioInternal,
      MblUsrApplPushSourceType,
      MobileUserApplPushSourceObj,
      MobileUserApplicationPushSts,
      MblUsrApplPushEmlNotifIsEnbld,
      MblUsrApplPushEventInternal,
      MobileUserApplPushEvtParam,
      MobileUserApplPushScenarioPrio,
      MobileUserApplPushHistIsEnbld,
      MblUsrApplPushOutbTrggrIsEnbld,
      MobileUserApplPushRetryIsAllwd,
      MblUsrApplFetchCallbackIsAllwd,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      MobileUserApplPushCreatedBy,
      @ObjectModel.foreignKey.association: '_CreationDate'
      @EndUserText.label: 'Created On'
      CreationDate,
      _CreationDate.CalendarYear           as MaintMblApplPushNotifCrtnYear,
      _CreationDate.CalendarMonth          as MaintMblApplPushNotifCrtnMonth,

      @EndUserText.label: 'Expired On'
      MaintMblApplPushNotifExprtnDte,
      _ExpirationDate.CalendarYear         as MaintMblApplPushNotifExprtnYr,
      _ExpirationDate.CalendarMonth        as MntMblAppPushNotifExprtnMonth,

      @EndUserText.label: 'Processed On'
      MaintMblApplPushNotifProcgDate,
      _ProcessingDate.CalendarYear         as MaintMblApplPushNotifProcgYear,
      _ProcessingDate.CalendarMonth        as MaintMblApplPushNotifProcgMnth,

      @EndUserText.label: 'Cancelled On'
      MaintMblApplPushNotifCanclnDte,
      _CancellationDate.CalendarYear       as MaintMblApplPushNotifCanclnYr,
      _CancellationDate.CalendarMonth      as MntMblAppPushNotifCanclnMonth,

      @EndUserText.label: 'Completed On'
      MntMblAppPushNotifCompltnDate,
      _CompletionDate.CalendarYear         as MaintMblApplPushNotifCompltnYr,
      _CompletionDate.CalendarMonth        as MntMblAppPushNotifCompltnMonth,

      @EndUserText.label: 'Server Completed On'
      MntMblAppPushServerCompltnDate,
      _ServerCompletionDate.CalendarYear   as MntMblAppPushServerCompltnYear,
      _ServerCompletionDate.CalendarMonth  as MntMblAppPushServerCompltnMnth,

      @EndUserText.label: 'Enqueued On'
      MntMblAppPushNotifEnqueueDate,
      _EnqueueDate.CalendarYear            as MaintMblApplPushNotifEnqueueYr,
      _EnqueueDate.CalendarMonth           as MntMblAppPushNotifEnqueueMonth,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Number of Push Notification Records'
      1                                    as MntMblAppNrOfPushNotifRecords,

      @Aggregation.default: #SUM
      MblUsrApplNmbrOfPushRecipients,

      _CreationDate,
      _CreationDate._CalendarYear          as _CreationYear,
      _CreationDate._CalendarMonth         as _CreationMonth,

      _ExpirationDate,
      _ExpirationDate._CalendarYear        as _ExpirationYear,
      _ExpirationDate._CalendarMonth       as _ExpirationMonth,

      _ProcessingDate,
      _ProcessingDate._CalendarYear        as _ProcessingYear,
      _ProcessingDate._CalendarMonth       as _ProcessingMonth,

      _CancellationDate,
      _CancellationDate._CalendarYear      as _CancellationYear,
      _CancellationDate._CalendarMonth     as _CancellationMonth,

      _CompletionDate,
      _CompletionDate._CalendarYear        as _CompletionYear,
      _CompletionDate._CalendarMonth       as _CompletionMonth,

      _ServerCompletionDate,
      _ServerCompletionDate._CalendarYear  as _ServerCompletionYear,
      _ServerCompletionDate._CalendarMonth as _ServerCompletionMonth,

      _EnqueueDate,
      _EnqueueDate._CalendarYear           as _EnqueueYear,
      _EnqueueDate._CalendarMonth          as _EnqueueMonth,

      _CreatedByUser,
      _PushScenario,
      
      _PushStatusText,
      _SourceTypeText
}
```
