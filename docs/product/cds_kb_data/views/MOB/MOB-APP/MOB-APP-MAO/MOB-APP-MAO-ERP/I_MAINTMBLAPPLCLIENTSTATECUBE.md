---
name: I_MAINTMBLAPPLCLIENTSTATECUBE
description: "Mobile Application Client State - Cube"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCLIENTSTATECUBE')/$value
semantic_en: "Mobile Application Client State - Cube"
semantic_vi: "Mobile Application Client State - Cube — CDS view giao diện dựa trên I_MobileUserClientState."
keywords:
  - "mobile"
  - "application"
  - "client"
  - "state"
  - "cube"
  - "user"
  - "internal"
  - "clnt"
  - "tech"
  - "entity"
  - "type"
  - "model"
  - "name"
  - "data"
  - "object"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MAINTMBLAPPLCLIENTSTATECUBE

**Mobile Application Client State - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCLIENTSTATECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserClientStateInternal` | ✓ | |  |  | `CHAR(32)` | Client State Id |
| `MblUsrClntStateTechEntityType` | ✓ | |  |  | `CHAR(40)` | oMDO - Technical Entity Type |
| `OMDOModelEntityTypeName` |  | | `_TechEntyTypeAssgmt` | `OMDOModelEntityTypeName` | `CHAR(128)` | Service Builder: Artifact Name |
| `ODataMobileDataObject` |  | |  | `MobileUserODataObjectInternal` | `CHAR(40)` | oData Mobile Data Object Id |
| `OMDOOperation` |  | |  | `MobileUserClientStateOperation` | `CHAR(30)` | oMDO Operation |
| `MobileUserInternal` |  | |  |  | `CHAR(32)` | User GUID |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MobileUserHasUserSwitched` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MobileUserClientStateIsActive` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MntMblAppClntStateInitSyncDate` |  | |  |  | `DATS(8)` |  |
| `MntMblAppClntStateInitSyncYear` |  | | `_InitSyncDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppClntStateInitSyncMnth` |  | | `_InitSyncDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `LastChangeDate` |  | |  |  | `DATS(8)` |  |
| `MaintMblApplClntStateLastChgYr` |  | | `_LastChangeDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `MntMblAppClntStateLastChgMonth` |  | | `_LastChangeDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `MblUsrNumberOfClientStateKeys` |  | |  |  | `INT4(10)` | 4 Byte Signed Integer |
| `MntMblAppNrOfClntStateRecords` |  | |  | `1` | `INT1(3)` |  |
| `_LastChangeYear` |  | | `_LastChangeDate` | `_CalendarYear` |  |  |
| `_LastChangeMonth` |  | | `_LastChangeDate` | `_CalendarMonth` |  |  |
| `_InitSyncYear` |  | | `_InitSyncDate` | `_CalendarYear` |  |  |
| `_InitSyncMonth` |  | | `_InitSyncDate` | `_CalendarMonth` |  |  |
| `_LastChangeDate` | | ✓ | | | | |
| `_InitSyncDate` | | ✓ | | | | |
| `_MblApplicationUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechEntyTypeAssgmt` | `I_OMDOModTechEntyTypeAssgmt` | [0..1] |
| `_LastChangeDate` | `I_CalendarDate` | [1..1] |
| `_InitSyncDate` | `I_CalendarDate` | [1..1] |
| `_MblApplicationUser` | `I_MobileApplicationUser` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCLIENTSTATECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLCLIENTSTATECUBE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_MblApplicationUser' ]
}

@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMNTMBLCLNTSTC'
}

@EndUserText.label: 'Mobile Application Client State - Cube'

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

define view entity I_MaintMblApplClientStateCube
  as select from I_MobileUserClientState

  association [0..1] to I_OMDOModTechEntyTypeAssgmt as _TechEntyTypeAssgmt on  _TechEntyTypeAssgmt.ODataMobileDataObject   = $projection.ODataMobileDataObject
                                                                           and _TechEntyTypeAssgmt.OMDOTechnicalEntityType = $projection.MblUsrClntStateTechEntityType
  association [1..1] to I_CalendarDate              as _LastChangeDate     on  _LastChangeDate.CalendarDate = $projection.LastChangeDate
  association [1..1] to I_CalendarDate              as _InitSyncDate       on  _InitSyncDate.CalendarDate = $projection.MntMblAppClntStateInitSyncDate
  association [1..1] to I_MobileApplicationUser     as _MblApplicationUser on  _MblApplicationUser.MobileUserInternal = $projection.MobileUserInternal
{
  key MobileUserClientStateInternal,
  key MblUsrClntStateTechEntityType,

      _TechEntyTypeAssgmt.OMDOModelEntityTypeName,
      MobileUserODataObjectInternal  as ODataMobileDataObject,
      MobileUserClientStateOperation as OMDOOperation,
      @ObjectModel.foreignKey.association: '_MblApplicationUser'
      MobileUserInternal,
      MobileUserApplication,
      MobileUserHasUserSwitched,
      MobileUserClientStateIsActive,
      @EndUserText.label: 'Initial Synchronized On'
      @ObjectModel.foreignKey.association: '_InitSyncDate'
      MntMblAppClntStateInitSyncDate,
      _InitSyncDate.CalendarYear     as MntMblAppClntStateInitSyncYear,
      _InitSyncDate.CalendarMonth    as MntMblAppClntStateInitSyncMnth,
      @EndUserText.label: 'Changed On'
      @ObjectModel.foreignKey.association: '_LastChangeDate'
      LastChangeDate,
      _LastChangeDate.CalendarYear   as MaintMblApplClntStateLastChgYr,
      _LastChangeDate.CalendarMonth  as MntMblAppClntStateLastChgMonth,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Number Of Keys'
      MblUsrNumberOfClientStateKeys,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Number of Client State Records'
      1                              as MntMblAppNrOfClntStateRecords,

      _LastChangeDate,
      _LastChangeDate._CalendarYear  as _LastChangeYear,
      _LastChangeDate._CalendarMonth as _LastChangeMonth,
      _InitSyncDate,
      _InitSyncDate._CalendarYear    as _InitSyncYear,
      _InitSyncDate._CalendarMonth   as _InitSyncMonth,
      _MblApplicationUser
}
```
