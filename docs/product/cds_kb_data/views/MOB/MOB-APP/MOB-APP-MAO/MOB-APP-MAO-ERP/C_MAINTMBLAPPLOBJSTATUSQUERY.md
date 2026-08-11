---
name: C_MAINTMBLAPPLOBJSTATUSQUERY
description: "Mobile Object Status - Query"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLOBJSTATUSQUERY')/$value
semantic_en: "Mobile Object Status - Query"
semantic_vi: "Mobile Object Status - Query — CDS view tiêu dùng dựa trên I_MaintMblApplObjectStatusCube."
keywords:
  - "mobile"
  - "object"
  - "status"
  - "query"
  - "user"
  - "application"
  - "maint"
  - "appl"
  - "active"
  - "type"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# C_MAINTMBLAPPLOBJSTATUSQUERY

**Mobile Object Status - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLOBJSTATUSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MaintMblApplicationObjectKey` |  | |  |  | `CHAR(100)` | Object key for Mobile Status |
| `MaintMblApplMobileStatus` |  | |  |  | `CHAR(10)` | Mobile Object Status |
| `MaintMblApplObjMblStsIsActive` |  | |  |  | `CHAR(1)` | Active Flag |
| `MaintMblApplicationObjectType` |  | |  |  | `CHAR(30)` | Object Type for Mobile Status |
| `MaintMblApplObjectSortValue` |  | |  |  | `CHAR(40)` | Sort field |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created by |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplObjMblStsCrtnYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplObjMblStsCrtnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MntMblAppNrOfObjMblStsRecords` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLOBJSTATUSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLOBJSTATUSQUERY')/$value)*

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'CMNTMBLOBJSTSQ'
}

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Mobile Object Status - Query'

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
define view C_MaintMblApplObjStatusQuery
  as select from I_MaintMblApplObjectStatusCube
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
  @EndUserText.label: 'Object Key'
  MaintMblApplicationObjectKey,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Mobile Status'
  MaintMblApplMobileStatus,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Is Active'
  MaintMblApplObjMblStsIsActive,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Object Type'
  MaintMblApplicationObjectType,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Root Object Key'
  MaintMblApplObjectSortValue,

  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Created By'
  CreatedByUser,

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
  MaintMblApplObjMblStsCrtnYear,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Creation Month'
  MaintMblApplObjMblStsCrtnMonth,

  @EndUserText.label: 'Number of Mobile Status Records'
  MntMblAppNrOfObjMblStsRecords
}
```
