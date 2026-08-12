---
name: C_MAINTMBLAPPLCOMMSESSIONQUERY
description: "Mobile Communication Session - Query"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCOMMSESSIONQUERY')/$value
semantic_en: "Mobile Communication Session - Query"
semantic_vi: "Mobile Communication Session - Query — CDS view tiêu dùng dựa trên I_MaintMblApplCommSessionCube."
keywords:
  - "mobile"
  - "communication"
  - "session"
  - "query"
  - "user"
  - "internal"
  - "server"
  - "active"
  - "logged"
  - "creation"
  - "date"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# C_MAINTMBLAPPLCOMMSESSIONQUERY

**Mobile Communication Session - Query**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCOMMSESSIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserInternal` |  | |  |  | `CHAR(32)` | User GUID |
| `MobileUserSessionServer` |  | |  |  | `CHAR(32)` | Middleware Server GUID |
| `MobileUserSessionIsActive` |  | |  |  | `CHAR(1)` | Active Flag |
| `MobileUserHasLoggedIn` |  | |  |  | `CHAR(1)` | Active Flag |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplCommSssnCrtnYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnCrtnMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintMblApplCommSessionEndDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplCommSessionEndYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnEndMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `MaintMblApplNrOfCommSessions` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCOMMSESSIONQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLAPPLCOMMSESSIONQUERY')/$value)*

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'CMNTMBLCOMMSSSNQ'
}

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Mobile Communication Session - Query'

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
define view C_MaintMblApplCommSessionQuery 
  as select from I_MaintMblApplCommSessionCube
{
  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Mobile User'
  MobileUserInternal,
  
  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Middleware Server'
  MobileUserSessionServer,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Is Online'
  MobileUserSessionIsActive,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Is Login'
  MobileUserHasLoggedIn,
  
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
  MaintMblApplCommSssnCrtnYear,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Creation Month'
  MaintMblApplCommSssnCrtnMonth,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Closed On'
  MaintMblApplCommSessionEndDate,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Close Year'
  MaintMblApplCommSessionEndYear,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Close Month'
  MaintMblApplCommSssnEndMonth,
  
  @EndUserText.label: 'Number of Communication Sessions'
  MaintMblApplNrOfCommSessions
}
```
