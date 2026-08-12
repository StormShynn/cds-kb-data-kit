---
name: I_MAINTMBLAPPLOBJECTSTATUSCUBE
description: "Mobile Object Status - Cube"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLOBJECTSTATUSCUBE')/$value
semantic_en: "Mobile Object Status - Cube"
semantic_vi: "Mobile Object Status - Cube — CDS view giao diện dựa trên I_MaintMblApplObjectStatus."
keywords:
  - "mobile"
  - "object"
  - "status"
  - "cube"
  - "user"
  - "application"
  - "maint"
  - "appl"
  - "record"
  - "active"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MAINTMBLAPPLOBJECTSTATUSCUBE

**Mobile Object Status - Cube**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLOBJECTSTATUSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserApplication` | ✓ | |  |  | `CHAR(30)` | Mobile Application Name |
| `MaintMblApplicationObjectKey` | ✓ | |  |  | `CHAR(100)` | Object key for Mobile Status |
| `MaintMblApplObjMblStatusRecord` | ✓ | |  |  | `NUMC(10)` | Record no. |
| `MaintMblApplMobileStatus` |  | |  |  | `CHAR(10)` | Mobile Object Status |
| `MaintMblApplObjMblStsIsActive` |  | |  |  | `CHAR(1)` | Active Flag |
| `MaintMblApplicationObjectType` |  | |  |  | `CHAR(30)` | Object Type for Mobile Status |
| `MaintMblApplObjectSortValue` |  | |  |  | `CHAR(40)` | Sort field |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created by |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplObjMblStsCrtnYear` |  | | `_CreationDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MaintMblApplObjMblStsCrtnMonth` |  | | `_CreationDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MntMblAppNrOfObjMblStsRecords` |  | |  | `1` | `INT1(3)` |  |
| `_CreationYear` |  | | `_CreationDate` | `_CalendarYear` |  |  |
| `_CreationMonth` |  | | `_CreationDate` | `_CalendarMonth` |  |  |
| `_CreatedByUser` | | ✓ | | | | |
| `_CreationDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_CreationDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLOBJECTSTATUSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLOBJECTSTATUSCUBE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_CreatedByUser' ]
}

@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMNTMBLOBJSTSC'
}

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@EndUserText.label: 'Mobile Object Status - Cube'

@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [ #ANALYTICAL_PROVIDER ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}

@VDM.viewType: #COMPOSITE

define view entity I_MaintMblApplObjectStatusCube
  as select from I_MaintMblApplObjectStatus

  association [0..1] to I_User         as _CreatedByUser on _CreatedByUser.UserID = $projection.CreatedByUser
  association [1..1] to I_CalendarDate as _CreationDate  on _CreationDate.CalendarDate = $projection.CreationDate
{
  key MobileUserApplication,
  key MaintMblApplicationObjectKey,
  key MaintMblApplObjMblStatusRecord,
  
      MaintMblApplMobileStatus,
      MaintMblApplObjMblStsIsActive,
      MaintMblApplicationObjectType,
      MaintMblApplObjectSortValue,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      CreatedByUser,
      @ObjectModel.foreignKey.association: '_CreationDate'
      @EndUserText.label: 'Created On'
      CreationDate,
      _CreationDate.CalendarYear    as MaintMblApplObjMblStsCrtnYear,
      _CreationDate.CalendarMonth   as MaintMblApplObjMblStsCrtnMonth,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Number of Mobile Status Records'
      1                             as MntMblAppNrOfObjMblStsRecords,

      _CreationDate,
      _CreationDate._CalendarYear   as _CreationYear,
      _CreationDate._CalendarMonth  as _CreationMonth,
      _CreatedByUser
}
```
