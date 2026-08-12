---
name: I_MAINTMBLAPPLCOMMSESSIONCUBE
description: "Mobile Communication Session - Cube"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCOMMSESSIONCUBE')/$value
semantic_en: "Mobile Communication Session - Cube"
semantic_vi: "Mobile Communication Session - Cube — CDS view giao diện dựa trên I_MobileUserSession."
keywords:
  - "mobile"
  - "communication"
  - "session"
  - "cube"
  - "user"
  - "internal"
  - "server"
  - "active"
  - "logged"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MAINTMBLAPPLCOMMSESSIONCUBE

**Mobile Communication Session - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCOMMSESSIONCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserSessionInternal` | ✓ | |  |  | `CHAR(32)` | Session GUID |
| `MobileUserSessionServer` |  | |  |  | `CHAR(32)` | Middleware Server GUID |
| `MobileUserInternal` |  | |  |  | `CHAR(32)` | User GUID |
| `MobileUserSessionIsActive` |  | |  |  | `CHAR(1)` | Active Flag |
| `MobileUserHasLoggedIn` |  | |  |  | `CHAR(1)` | Active Flag |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplCommSssnCrtnYear` |  | | `_CreationDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnCrtnMonth` |  | | `_CreationDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplCommSessionEndDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplCommSessionEndYear` |  | | `_EndDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplCommSssnEndMonth` |  | | `_EndDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplNrOfCommSessions` |  | |  | `1` | `INT1(3)` |  |
| `_CreationYear` |  | | `_CreationDate` | `_CalendarYear` |  |  |
| `_CreationMonth` |  | | `_CreationDate` | `_CalendarMonth` |  |  |
| `_EndYear` |  | | `_EndDate` | `_CalendarYear` |  |  |
| `_EndMonth` |  | | `_EndDate` | `_CalendarMonth` |  |  |
| `_MobileApplicationUser` | | ✓ | | | | |
| `_MblCommServerDetails` | | ✓ | | | | |
| `_CreationDate` | | ✓ | | | | |
| `_EndDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MobileApplicationUser` | `I_MobileApplicationUser` | [1..1] |
| `_MblCommServerDetails` | `I_MblCommServerDetails` | [1..1] |
| `_CreationDate` | `I_CalendarDate` | [1..1] |
| `_EndDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCOMMSESSIONCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCOMMSESSIONCUBE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_MobileApplicationUser', '_MblCommServerDetails' ]
}

@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMNTMBLCOMMSSSNC'
}

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@EndUserText.label: 'Mobile Communication Session - Cube'

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

define view entity I_MaintMblApplCommSessionCube
  as select from I_MobileUserSession

  association [1..1] to I_MobileApplicationUser as _MobileApplicationUser on _MobileApplicationUser.MobileUserInternal = $projection.MobileUserInternal
  association [1..1] to I_MblCommServerDetails  as _MblCommServerDetails  on _MblCommServerDetails.MobileUserSessionServer = $projection.MobileUserSessionServer
  association [1..1] to I_CalendarDate          as _CreationDate          on _CreationDate.CalendarDate = $projection.CreationDate
  association [1..1] to I_CalendarDate          as _EndDate               on _EndDate.CalendarDate = $projection.MaintMblApplCommSessionEndDate
{
  key MobileUserSessionInternal,
  
      @ObjectModel.foreignKey.association: '_MblCommServerDetails'
      MobileUserSessionServer,
      @ObjectModel.foreignKey.association: '_MobileApplicationUser'
      MobileUserInternal,
      MobileUserSessionIsActive,
      MobileUserHasLoggedIn,
      @ObjectModel.foreignKey.association: '_CreationDate'
      @EndUserText.label: 'Created On'
      CreationDate,
      _CreationDate.CalendarYear   as MaintMblApplCommSssnCrtnYear,
      _CreationDate.CalendarMonth  as MaintMblApplCommSssnCrtnMonth,
      @ObjectModel.foreignKey.association: '_EndDate'
      @EndUserText.label: 'Closed On'
      MaintMblApplCommSessionEndDate, 
      _EndDate.CalendarYear        as MaintMblApplCommSessionEndYear,
      _EndDate.CalendarMonth       as MaintMblApplCommSssnEndMonth,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Number of Communication Sessions'
      1                            as MaintMblApplNrOfCommSessions,

      _CreationDate,
      _CreationDate._CalendarYear  as _CreationYear,
      _CreationDate._CalendarMonth as _CreationMonth,
      _EndDate,
      _EndDate._CalendarYear       as _EndYear,
      _EndDate._CalendarMonth      as _EndMonth,
      _MobileApplicationUser,
      _MblCommServerDetails
}
```
