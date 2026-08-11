---
name: C_MAINTMBLAPPLPUSHNOTIFQUERY
description: "Mobile Push Notification - Query"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLPUSHNOTIFQUERY')/$value
semantic_en: "Mobile Push Notification - Query"
semantic_vi: "Mobile Push Notification - Query — CDS view tiêu dùng dựa trên I_MaintMblApplPushNotifCube."
keywords:
  - "mobile"
  - "push"
  - "notification"
  - "query"
  - "user"
  - "application"
  - "appl"
  - "scenario"
  - "internal"
  - "source"
  - "type"
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - notification
---
# C_MAINTMBLAPPLPUSHNOTIFQUERY

**Mobile Push Notification - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLPUSHNOTIFQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MblApplPushScenarioInternal` |  | |  |  | `CHAR(40)` | Scenario Id |
| `MblUsrApplPushSourceType` |  | |  |  | `CHAR(10)` | Push Scenario Source Type |
| `MobileUserApplPushSourceObj` |  | |  |  | `CHAR(100)` | Push source object |
| `MobileUserApplicationPushSts` |  | |  |  | `CHAR(10)` | Push instance status |
| `MblUsrApplPushEmlNotifIsEnbld` |  | |  |  | `CHAR(1)` | Active Flag |
| `MaintMblApplPushNotifExprtnDte` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifExprtnYr` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifExprtnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintMblApplPushNotifProcgDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifProcgYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplPushNotifProcgMnth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintMblApplPushNotifCanclnDte` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifCanclnYr` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifCanclnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MntMblAppPushNotifCompltnDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifCompltnYr` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifCompltnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MntMblAppPushServerCompltnDate` |  | |  |  | `DATS(8)` |  |
| `MntMblAppPushServerCompltnYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MntMblAppPushServerCompltnMnth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MntMblAppPushNotifEnqueueDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifEnqueueYr` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifEnqueueMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MblUsrApplPushEventInternal` |  | |  |  | `CHAR(32)` | Background Processing Event |
| `MobileUserApplPushEvtParam` |  | |  |  | `CHAR(64)` | Batch Event Parameters (for example, Jobname/Jobcount) |
| `MobileUserApplPushScenarioPrio` |  | |  |  | `NUMC(1)` | Push scenario priority |
| `MobileUserApplPushHistIsEnbld` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplPushOutbTrggrIsEnbld` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserApplPushRetryIsAllwd` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplFetchCallbackIsAllwd` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserApplPushCreatedBy` |  | |  |  | `CHAR(12)` | Created by |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplPushNotifCrtnYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplPushNotifCrtnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MntMblAppNrOfPushNotifRecords` |  | |  |  | `INT1(3)` |  |
| `MblUsrApplNmbrOfPushRecipients` |  | |  |  | `INT4(10)` | Total number of subscribers |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLPUSHNOTIFQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLPUSHNOTIFQUERY')/$value)*

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'CMNTMBLPSHNOTIFQ'
}

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Mobile Push Notification - Query'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_QUERY,
  supportedCapabilities: [ #ANALYTICAL_QUERY ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #MIXED
  }
}

@VDM.viewType: #CONSUMPTION

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view C_MaintMblApplPushNotifQuery 
  as select from I_MaintMblApplPushNotifCube
{
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Mobile Application'
  MobileUserApplication,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Push Scenario'
  MblApplPushScenarioInternal,
  
  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Source Type'
  MblUsrApplPushSourceType,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Source Object'
  MobileUserApplPushSourceObj,
  
  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Push Status'
  MobileUserApplicationPushSts,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Is Enabled'
  MblUsrApplPushEmlNotifIsEnbld,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Expired On'
  MaintMblApplPushNotifExprtnDte,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Expiration Year'
  MaintMblApplPushNotifExprtnYr,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Expiration Month'
  MntMblAppPushNotifExprtnMonth,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Processed On'
  MaintMblApplPushNotifProcgDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Processing Year'
  MaintMblApplPushNotifProcgYear,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Processing Month'
  MaintMblApplPushNotifProcgMnth,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Cancelled On'
  MaintMblApplPushNotifCanclnDte,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Cancellation Year'
  MaintMblApplPushNotifCanclnYr,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Cancellation Month'
  MntMblAppPushNotifCanclnMonth,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Completed On'
  MntMblAppPushNotifCompltnDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Completion Year'    
  MaintMblApplPushNotifCompltnYr,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Completion Month'  
  MntMblAppPushNotifCompltnMonth,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Server Completed On'  
  MntMblAppPushServerCompltnDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Server Completion Year'  
  MntMblAppPushServerCompltnYear,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Server Completion Month'  
  MntMblAppPushServerCompltnMnth,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Enqueued On'  
  MntMblAppPushNotifEnqueueDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Enqueuing Year'  
  MaintMblApplPushNotifEnqueueYr,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Enqueuing Month'  
  MntMblAppPushNotifEnqueueMonth,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Event'
  MblUsrApplPushEventInternal,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Batch Event Parameter'
  MobileUserApplPushEvtParam,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Priority'
  MobileUserApplPushScenarioPrio,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'History Is Enabled'
  MobileUserApplPushHistIsEnbld,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Outbound Trigger Is Enabled'
  MblUsrApplPushOutbTrggrIsEnbld,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Retry Is Allowed'
  MobileUserApplPushRetryIsAllwd,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Fetch Callback Is Allowed'
  MblUsrApplFetchCallbackIsAllwd,
  
  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Created By'  
  MobileUserApplPushCreatedBy,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Created On'  
  CreationDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Creation Year'  
  MaintMblApplPushNotifCrtnYear,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Creation Month'
  MaintMblApplPushNotifCrtnMonth,
  
  @EndUserText.label: 'Number of Push Notification Records'
  MntMblAppNrOfPushNotifRecords,
  
  @EndUserText.label: 'Number of Recipients'
  MblUsrApplNmbrOfPushRecipients
}
```
