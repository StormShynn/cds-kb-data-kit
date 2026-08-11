---
name: C_MAINTMBLAPPLICATIONUSERQUERY
description: "Mobile Application User - Query"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLICATIONUSERQUERY')/$value
semantic_en: "Mobile Application User - Query"
semantic_vi: "Mobile Application User - Query — CDS view tiêu dùng dựa trên I_MaintMblApplicationUserCube."
keywords:
  - "mobile"
  - "application"
  - "user"
  - "query"
  - "server"
  - "internal"
  - "group"
  - "maint"
  - "name"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# C_MAINTMBLAPPLICATIONUSERQUERY

**Mobile Application User - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLICATIONUSERQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserServerInternal` |  | |  |  | `CHAR(50)` | Syclo Middleware Server Serial No. |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MobileUserGroupInternal` |  | |  |  | `CHAR(30)` | Syclo Middleware User Group Id |
| `MobileUser` |  | |  |  | `CHAR(12)` | User Name |
| `MaintMobileApplicationUserName` |  | |  |  | `CHAR(80)` | User Description |
| `MobileUserIsLocked` |  | |  |  | `CHAR(1)` | Lock flag |
| `MobileUserProductRoleIsValid` |  | |  |  | `CHAR(1)` | Flag - No Valid Product Role |
| `MobileUserLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintMblApplNumberOfUsers` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLICATIONUSERQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLICATIONUSERQUERY')/$value)*

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'CMNTMBLUSERQ'
}

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Mobile Application User - Query'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_QUERY,
  supportedCapabilities: [ #ANALYTICAL_QUERY ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  }
}

@VDM.viewType: #CONSUMPTION

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view C_MaintMblApplicationUserQuery
  as select from I_MaintMblApplicationUserCube
{ 
  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Middleware Server'
  MobileUserServerInternal,
  
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
  @EndUserText.label: 'Middleware User Group'
  MobileUserGroupInternal,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'User Name'
  MobileUser,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'User Description'
  MaintMobileApplicationUserName,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Is Locked'
  MobileUserIsLocked,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Has No Valid Product Role'
  MobileUserProductRoleIsValid,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Logical System'
  MobileUserLogicalSystem,
  
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
  CalendarYear,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Creation Month'
  CalendarMonth,
 
  @EndUserText.label: 'Number of Users'
  MaintMblApplNumberOfUsers
}
```
