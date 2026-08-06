---
name: I_MAINTMBLAPPLCLIENTSTATECUBE
description: Mobile Application Client State - Cube
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCLIENTSTATECUBE')/$value
semantic_en: Mobile Application Client State - Cube
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# I_MAINTMBLAPPLCLIENTSTATECUBE

**Mobile Application Client State - Cube**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCLIENTSTATECUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MobileUserClientStateInternal` | `CHAR(32)` | Client State Id |
| `MblUsrClntStateTechEntityType` | `CHAR(40)` | oMDO - Technical Entity Type |
| `OMDOModelEntityTypeName` | `CHAR(128)` | Service Builder: Artifact Name |
| `ODataMobileDataObject` | `CHAR(40)` | oData Mobile Data Object Id |
| `OMDOOperation` | `CHAR(30)` | oMDO Operation |
| `MobileUserInternal` | `CHAR(32)` | User GUID |
| `MobileUserApplication` | `CHAR(30)` | Mobile Application Name |
| `MobileUserHasUserSwitched` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserClientStateIsActive` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MntMblAppClntStateInitSyncDate` | `DATS(8)` |  |
| `MntMblAppClntStateInitSyncYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppClntStateInitSyncMnth` | `NUMC(2)` | Calendar Month |
| `LastChangeDate` | `DATS(8)` |  |
| `MaintMblApplClntStateLastChgYr` | `NUMC(4)` | Calendar Year |
| `MntMblAppClntStateLastChgMonth` | `NUMC(2)` | Calendar Month |
| `MblUsrNumberOfClientStateKeys` | `INT4(10)` | 4 Byte Signed Integer |
| `MntMblAppNrOfClntStateRecords` | `INT1(3)` |  |
