---
name: I_MAINTMBLAPPLICATIONUSERCUBE
description: "Mobile Application User - Cube"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLICATIONUSERCUBE')/$value
semantic_en: "Mobile Application User - Cube"
semantic_vi: "Mobile Application User - Cube — CDS view giao diện dựa trên I_MobileApplicationUser."
keywords:
  - "mobile"
  - "application"
  - "user"
  - "cube"
  - "internal"
  - "server"
  - "group"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MAINTMBLAPPLICATIONUSERCUBE

**Mobile Application User - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLICATIONUSERCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserInternal` | ✓ | |  |  | `CHAR(32)` | User GUID |
| `MobileUserServerInternal` |  | |  |  | `CHAR(50)` | Syclo Middleware Server Serial No. |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MobileUserGroupInternal` |  | |  |  | `CHAR(30)` | Syclo Middleware User Group Id |
| `MobileUser` |  | |  |  | `CHAR(12)` | User Name |
| `MaintMobileApplicationUserName` |  | |  |  | `CHAR(80)` | User Description |
| `MobileUserIsLocked` |  | |  |  | `CHAR(1)` | Lock flag |
| `MobileUserProductRoleIsValid` |  | |  |  | `CHAR(1)` | Flag - No Valid Product Role |
| `MobileUserLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MaintMblApplNumberOfUsers` |  | |  | `1` | `INT1(3)` |  |
| `_CalendarDate` | | ✓ | | | | |
| `_ServerDetails` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_ServerDetails` | `I_MblCommServerDetails` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLICATIONUSERCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLICATIONUSERCUBE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_ServerDetails' ]
}

@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMNTMBLUSERC'
}
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@EndUserText.label: 'Mobile Application User - Cube'

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
    dataClass: #TRANSACTIONAL
  }
}
@VDM.viewType: #COMPOSITE

define view entity I_MaintMblApplicationUserCube
  as select from I_MobileApplicationUser

  association [1..1] to I_CalendarDate         as _CalendarDate  on _CalendarDate.CalendarDate = $projection.CreationDate
  // DEPRECATED: This association is incorrect, since the MobileUserSessionServer is a GUID and the MobileUserServerInternal is a string that can be empty as well,
  // but it cannot be deleted because of C1 stability contract
  // There is no direct 1 to 1 connection between users and servers, one user can have multiple communication sessions connected to different servers
  association [1..1] to I_MblCommServerDetails as _ServerDetails on _ServerDetails.MobileUserSessionServer = $projection.MobileUserServerInternal
{
  key MobileUserInternal,

      MobileUserServerInternal,
      MobileUserApplication,
      MobileUserGroupInternal,
      MobileUser,
      MaintMobileApplicationUserName,
      MobileUserIsLocked,
      MobileUserProductRoleIsValid,
      MobileUserLogicalSystem,
      @EndUserText.label: 'Changed On'
      @ObjectModel.foreignKey.association: '_CalendarDate'
      CreationDate,
      _CalendarDate.CalendarYear,
      _CalendarDate.CalendarMonth,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Total Number of Users'
      1 as MaintMblApplNumberOfUsers,

      _CalendarDate,
      _CalendarDate._CalendarYear,
      _CalendarDate._CalendarMonth,
      _ServerDetails
}
```
