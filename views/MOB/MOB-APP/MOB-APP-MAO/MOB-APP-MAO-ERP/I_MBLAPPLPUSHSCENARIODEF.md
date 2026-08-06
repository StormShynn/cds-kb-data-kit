---
name: I_MBLAPPLPUSHSCENARIODEF
description: Mobile Application Push Scenario
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLAPPLPUSHSCENARIODEF')/$value
semantic_en: Mobile Application Push Scenario
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# I_MBLAPPLPUSHSCENARIODEF

**Mobile Application Push Scenario**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLAPPLPUSHSCENARIODEF')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MblApplPushScenarioInternal` | `CHAR(40)` | Scenario Id |
| `MobileUserApplication` | `CHAR(30)` | Mobile Application Name |
| `MblUsrApplPushSourceType` | `CHAR(10)` | Push Scenario Source Type |
| `MobileUserApplPushSourceObj` | `CHAR(100)` | Push source object |
| `MblApplPushScenSourceHandler` | `CHAR(30)` | Push handler |
| `MblApplPushScenSubscriberType` | `CHAR(10)` | Subscriber Type |
| `MblApplPushDistributorType` | `CHAR(10)` | Push service data distributor type |
| `MblApplPushDistributorObj` | `CHAR(100)` | Push service data distributor object |
| `MblApplPushDistributionHandler` | `CHAR(30)` | Push handler |
| `MblUsrApplPushEmlNotifIsEnbld` | `CHAR(1)` | Active Flag |
| `MblApplPushEmailNotifDesc` | `CHAR(50)` | Short description of contents |
| `MblApplPushEmailMessageText` | `CHAR(140)` | SMS Message |
| `MblApplPushDataPackIsSkipped` | `CHAR(1)` | Active Flag |
| `MblApplPushScenIsActive` | `CHAR(1)` | Active Flag |
| `MblApplPushNotifValidityInHrs` | `INT4(10)` | Validity period (hours) |
| `MblApplPushEvtTrggrIsDsbld` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplPushEventInternal` | `CHAR(32)` | Background Processing Event |
| `MobileUserApplPushEvtParam` | `CHAR(64)` | Batch Event Parameters (for example, Jobname/Jobcount) |
| `MobileApplicationPushEventRule` | `CHAR(30)` | Rule determines event id and parameter for push scenario |
| `MblApplQueuedRFCIsEnabled` | `CHAR(1)` | Active Flag |
| `MblApplPushQueuedRFCName` | `CHAR(24)` | Name of tRFC Queue |
| `MblApplPushQueuedRFCRule` | `CHAR(30)` | Rule determines qRFC queue name |
| `MobileUserApplPushScenarioPrio` | `NUMC(1)` | Push scenario priority |
| `MblApplPushMergeIsAllowed` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushServerCmpltdIsExcld` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushMaxSelDelayInSecs` | `INT4(10)` | Maximum selection delay (seconds) |
| `MblApplPushNmbrOfSelRetry` | `INT4(10)` | Number of selection retry |
| `MobileUserApplPushHistIsEnbld` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplPushOutbTrggrIsEnbld` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplSglInstceProcgIsUsed` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushRetryIntvlInSeconds` | `INT4(10)` | Refetch wait interval (Sec) |
| `MblApplPushMetadataIsRequired` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplSelfPushIsDisabled` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushScenarioAlias` | `CHAR(40)` | Push scenario id alias |
| `MblUsrApplFetchCallbackIsAllwd` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushTransHistIsChkd` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplTransHistIntvlInSecs` | `INT4(10)` | Mobile transaction update history check interval (seconds) |
| `MblApplPushSubscriptionIsAllwd` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushSubscrpnAgtInt` | `CHAR(40)` | Subscription Agent ID |
| `MobileUserApplPushCreatedBy` | `CHAR(12)` | Created by |
| `MblUsrApplPushCreatedDteTme` | `DEC(15)` | Creation timestamp |
| `MobileUserApplPushChangedBy` | `CHAR(12)` | Last Changed By |
| `MblUsrApplPushChangedDteTme` | `DEC(15)` | Changed time stamp |
