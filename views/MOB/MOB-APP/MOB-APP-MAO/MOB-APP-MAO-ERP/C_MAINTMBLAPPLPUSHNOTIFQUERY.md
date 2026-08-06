---
name: C_MAINTMBLAPPLPUSHNOTIFQUERY
description: Mobile Push Notification - Query
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLPUSHNOTIFQUERY')/$value
semantic_en: Mobile Push Notification - Query
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - notification
  - metadata-only
---
# C_MAINTMBLAPPLPUSHNOTIFQUERY

**Mobile Push Notification - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLPUSHNOTIFQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MobileUserApplication` | `CHAR(30)` | Mobile Application Name |
| `MblApplPushScenarioInternal` | `CHAR(40)` | Scenario Id |
| `MblUsrApplPushSourceType` | `CHAR(10)` | Push Scenario Source Type |
| `MobileUserApplPushSourceObj` | `CHAR(100)` | Push source object |
| `MobileUserApplicationPushSts` | `CHAR(10)` | Push instance status |
| `MblUsrApplPushEmlNotifIsEnbld` | `CHAR(1)` | Active Flag |
| `MaintMblApplPushNotifExprtnDte` | `DATS(8)` |  |
| `MaintMblApplPushNotifExprtnYr` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifExprtnMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplPushNotifProcgDate` | `DATS(8)` |  |
| `MaintMblApplPushNotifProcgYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplPushNotifProcgMnth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplPushNotifCanclnDte` | `DATS(8)` |  |
| `MaintMblApplPushNotifCanclnYr` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifCanclnMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppPushNotifCompltnDate` | `DATS(8)` |  |
| `MaintMblApplPushNotifCompltnYr` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifCompltnMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppPushServerCompltnDate` | `DATS(8)` |  |
| `MntMblAppPushServerCompltnYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushServerCompltnMnth` | `NUMC(2)` | Calendar Month |
| `MntMblAppPushNotifEnqueueDate` | `DATS(8)` |  |
| `MaintMblApplPushNotifEnqueueYr` | `NUMC(4)` | Calendar Year |
| `MntMblAppPushNotifEnqueueMonth` | `NUMC(2)` | Calendar Month |
| `MblUsrApplPushEventInternal` | `CHAR(32)` | Background Processing Event |
| `MobileUserApplPushEvtParam` | `CHAR(64)` | Batch Event Parameters (for example, Jobname/Jobcount) |
| `MobileUserApplPushScenarioPrio` | `NUMC(1)` | Push scenario priority |
| `MobileUserApplPushHistIsEnbld` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplPushOutbTrggrIsEnbld` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserApplPushRetryIsAllwd` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplFetchCallbackIsAllwd` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserApplPushCreatedBy` | `CHAR(12)` | Created by |
| `CreationDate` | `DATS(8)` |  |
| `MaintMblApplPushNotifCrtnYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplPushNotifCrtnMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppNrOfPushNotifRecords` | `INT1(3)` |  |
| `MblUsrApplNmbrOfPushRecipients` | `INT4(10)` | Total number of subscribers |
