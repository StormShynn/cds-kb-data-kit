---
name: C_MAINTMBLAPPLCLIENTSTATEQUERY
description: "Mobile Application Client State - Query"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCLIENTSTATEQUERY')/$value
semantic_en: "Mobile Application Client State - Query"
semantic_vi: "Mobile Application Client State - Query — CDS view tiêu dùng dựa trên I_MaintMblApplClientStateCube."
keywords:
  - "mobile"
  - "application"
  - "client"
  - "state"
  - "query"
  - "clnt"
  - "tech"
  - "entity"
  - "type"
  - "model"
  - "name"
  - "data"
  - "object"
  - "operation"
  - "user"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# C_MAINTMBLAPPLCLIENTSTATEQUERY

**Mobile Application Client State - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCLIENTSTATEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MblUsrClntStateTechEntityType` |  | |  |  | `CHAR(40)` | oMDO - Technical Entity Type |
| `OMDOModelEntityTypeName` |  | |  |  | `CHAR(128)` | Service Builder: Artifact Name |
| `ODataMobileDataObject` |  | |  |  | `CHAR(40)` | oData Mobile Data Object Id |
| `OMDOOperation` |  | |  |  | `CHAR(30)` | oMDO Operation |
| `MobileUserInternal` |  | |  |  | `CHAR(32)` | User GUID |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MobileUserHasUserSwitched` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MntMblAppClntStateInitSyncDate` |  | |  |  | `DATS(8)` |  |
| `MntMblAppClntStateInitSyncYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MntMblAppClntStateInitSyncMnth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MobileUserClientStateIsActive` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `LastChangeDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplClntStateLastChgYr` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MntMblAppClntStateLastChgMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MblUsrNumberOfClientStateKeys` |  | |  |  | `INT4(10)` | 4 Byte Signed Integer |
| `MntMblAppNrOfClntStateRecords` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCLIENTSTATEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCLIENTSTATEQUERY')/$value)*

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'CMNTMBLCLNTSTQ'
}

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Mobile Application Client State - Query'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_QUERY,
  supportedCapabilities: [ #ANALYTICAL_QUERY ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}

@VDM.viewType: #CONSUMPTION

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view C_MaintMblApplClientStateQuery
  as select from I_MaintMblApplClientStateCube
{
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Technical Entity Type'
  MblUsrClntStateTechEntityType,
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Entity Type'
  OMDOModelEntityTypeName,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'OData Mobile Data Object'
  ODataMobileDataObject,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'OMDO Operation'
  OMDOOperation,
  
  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Mobile User'
  MobileUserInternal,
 
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
  @EndUserText.label: 'Has User Switched'
  MobileUserHasUserSwitched,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Initial Synchronized On'
  MntMblAppClntStateInitSyncDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Initial Synchronization Year'
  MntMblAppClntStateInitSyncYear,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Initial Synchronization Month'
  MntMblAppClntStateInitSyncMnth,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Is Active'
  MobileUserClientStateIsActive,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Changed On'
  LastChangeDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Change Year'
  MaintMblApplClntStateLastChgYr,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Change Month'
  MntMblAppClntStateLastChgMonth,
  
  @EndUserText.label: 'Number Of Keys'
  MblUsrNumberOfClientStateKeys,

  @EndUserText.label: 'Number of Client State Records'
  MntMblAppNrOfClntStateRecords
}
```
