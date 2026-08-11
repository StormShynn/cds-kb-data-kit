---
name: I_REINTEGRATIONOBJECTBASICDATA
description: "Real Estate Integration Object"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECTBASICDATA')/$value
semantic_en: "Real Estate Integration Object"
semantic_vi: "Real Estate Integration Object — CDS view giao diện dựa trên viipobject."
keywords:
  - "real"
  - "estate"
  - "integration"
  - "object"
  - "internal"
  - "number"
  - "external"
  - "status"
  - "type"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - bo:purchaseorder
---
# I_REINTEGRATIONOBJECTBASICDATA

**Real Estate Integration Object**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECTBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  | `intreno` | `CHAR(13)` | Internal Key of Real Estate Object |
| `RealEstateExternalID` |  | |  | `extid` | `CHAR(45)` | External Identification |
| `REStatusObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `REIntegrationObjectNumber` |  | |  | `ionr` | `CHAR(20)` | Real Estate Object Number |
| `REIntegrationObjectType` |  | |  | `iotype` | `CHAR(4)` | Object Type |
| `REIntegObjectCtrlgObjectType` |  | |  | `iocoobjtype` | `CHAR(1)` | Controlling Object Type |
| `REIntegrationObjectName` |  | |  | `xsobject` | `CHAR(30)` | Object Name (Short) |
| `REIntegObjectLongName` |  | |  | `xlobject` | `CHAR(250)` | Object Name (Long) |
| `REIntegObjSpaceGroupType` |  | |  | `iosgtype` | `CHAR(4)` | Group Type |
| `RESpaceGroupUsageType` |  | |  | `iosgusagetype` | `CHAR(4)` | Group Usage Type |
| `RESpaceGrpEnableUseType` |  | |  | `iosgenableusetype` | `CHAR(4)` | Usage Enablement Type |
| `REInternalNumberForUseEnable` |  | |  | `intrenoenableuse` | `CHAR(13)` | Internal Object Number (Enable Use) |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `REParentIntegObjectType` |  | |  | `ioparenttype` | `CHAR(4)` | Parent Object Type |
| `REParentIntegObjectExternalID` |  | |  | `ioparentextid` | `CHAR(45)` | Parent External Identification |
| `REAreaUnit` |  | |  | `areaunit` | `UNIT(3)` | Area Unit |
| `CreatedByUser` |  | |  | `rerf` | `CHAR(12)` | Entered By |
| `CreationDate` |  | |  | `derf` | `DATS(8)` | First Entered On |
| `CreationTime` |  | |  | `terf` | `TIMS(6)` | Time of Creation |
| `RESourceOfCreation` |  | |  | `reher` | `CHAR(10)` | Source of Initial Entry |
| `LastChangedByUser` |  | |  | `rbear` | `CHAR(12)` | Employee ID |
| `LastChangeDate` |  | |  | `dbear` | `DATS(8)` | Last Edited On |
| `LastChangeTime` |  | |  | `tbear` | `TIMS(6)` | Last Edited At |
| `RESourceOfChange` |  | |  | `rbher` | `CHAR(10)` | Editing Source |
| `Responsible` |  | |  | `responsible` | `CHAR(12)` | Person Responsible |
| `REAuthorizationGroup` |  | |  | `authgrp` | `CHAR(40)` | Authorization Group |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_ResponsibleUser` | | ✓ | | | | |
| `_UnitOfMeasureArea` | | ✓ | | | | |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |
| `_REIntegObjectType` | | ✓ | | | | |
| `_REParentIntegObjectType` | | ✓ | | | | |
| `_REIntegObjCtrlgObjType` | | ✓ | | | | |
| `_REIntegObjSpaceGroupType` | | ✓ | | | | |
| `_RESpaceGroupUsageType` | | ✓ | | | | |
| `_RESpaceGrpEnableUseType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_StatusObjectStatus` | | ✓ | | | | |
| `_REObjectAddress` | | ✓ | | | | |
| `_REIntegObjectOccupancy` | | ✓ | | | | |
| `_REIntegObjToContractAssgmt` | | ✓ | | | | |
| `_REIntegrationObjSubObj` | | ✓ | | | | |
| `_REParentIntegrationObject` | | ✓ | | | | |
| `_REUseEnableIntegrationObject` | | ✓ | | | | |
| `_REIntegrationObjectRelation` | | ✓ | | | | |
| `_REIntegObjectRelationPartial` | | ✓ | | | | |
| `_REPartnerAssgmt` | | ✓ | | | | |
| `_REObjectAssgmt` | | ✓ | | | | |
| `_REReminderRule` | | ✓ | | | | |
| `_REMeasurement` | | ✓ | | | | |
| `_REIntegObjectAcctObjAssgmt` | | ✓ | | | | |
| `_REIntegrationObjectTimeline` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_ResponsibleUser` | `I_User` | [0..1] |
| `_UnitOfMeasureArea` | `I_UnitOfMeasure` | [0..1] |
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REAuthorizationGroup` | `I_REAuthorizationGroup` | [0..1] |
| `_REIntegObjectType` | `I_REIntegObjectType` | [1..1] |
| `_REParentIntegObjectType` | `I_REIntegObjectType` | [1..1] |
| `_REIntegObjCtrlgObjType` | `I_REIntegObjCtrlgObjType` | [1..1] |
| `_REIntegObjSpaceGroupType` | `I_REIntegObjSpaceGroupType` | [1..1] |
| `_RESpaceGroupUsageType` | `I_RESpaceGroupUsageType` | [1..1] |
| `_RESpaceGrpEnableUseType` | `I_RESpaceGrpEnableUseType` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [0..1] |
| `_StatusObjectStatus` | `I_StatusObjectStatus` | [1..*] |
| `_REObjectAddress` | `I_REObjectAddress` | [0..1] |
| `_REIntegObjectOccupancy` | `I_REIntegObjectOccupancy` | [1..*] |
| `_REIntegObjToContractAssgmt` | `I_REIntegObjToContractAssgmt` | [1..*] |
| `_REIntegrationObjSubObj` | `I_REIntegrationObjectSubObj` | [1..1] |
| `_REParentIntegrationObject` | `I_REIntegrationObject` | [0..1] |
| `_REUseEnableIntegrationObject` | `I_REIntegrationObjectBasicData` | [0..1] |
| `_REIntegrationObjectRelation` | `I_REIntegrationObjectRelation` | [0..*] |
| `_REIntegObjectRelationPartial` | `I_REIntegObjectRelationPartial` | [0..*] |
| `_REPartnerAssgmt` | `I_REPartnerAssgmt` | [0..*] |
| `_REObjectAssgmt` | `I_REObjectAssgmt` | [0..*] |
| `_REReminderRule` | `I_REReminderObjRule` | [0..*] |
| `_REMeasurement` | `I_REIntegObjectMeasurement` | [0..*] |
| `_REIntegObjectAcctObjAssgmt` | `I_REIntegObjectAcctObjAssgmt` | [0..*] |
| `_REIntegrationObjectTimeline` | `I_REIntegrationObjectTimeline` | [0..*] |
| `_Extension` | `E_REIntegrationObject` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECTBASICDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECTBASICDATA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREINTOBJECTBSC'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Real Estate Integration Object'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.representativeKey: 'InternalRealEstateNumber'
@ObjectModel.semanticKey: ['RealEstateExternalID']
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

//@Analytics.internalName:#LOCAL
//@Analytics:{
//    dataCategory: #DIMENSION,
//    dataExtraction: {
//        enabled: true,
//        delta.changeDataCapture: {
//        automatic: true
//        }
//    }
//}
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY      ]
                                        
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

@VDM.viewType: #BASIC

define view I_REIntegrationObjectBasicData
  as select from viipobject
  association [0..1] to I_User                         as _CreatedByUser                on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _ChangedByUser                on  $projection.LastChangedByUser = _ChangedByUser.UserID
  association [0..1] to I_User                         as _ResponsibleUser              on  $projection.Responsible = _ResponsibleUser.UserID
  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasureArea            on  $projection.REAreaUnit = _UnitOfMeasureArea.UnitOfMeasure
  association [1..1] to I_REKeyAssgmt                  as _REKeyAssgmt                  on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [0..1] to I_REAuthorizationGroup         as _REAuthorizationGroup         on  $projection.REAuthorizationGroup = _REAuthorizationGroup.REAuthorizationGroup
                                                                                        and  _REAuthorizationGroup.RealEstateObjectType = 'J5' 
  association [1..1] to I_REIntegObjectType            as _REIntegObjectType            on  $projection.REIntegrationObjectType = _REIntegObjectType.REIntegrationObjectType
  association [1..1] to I_REIntegObjectType            as _REParentIntegObjectType      on  $projection.REParentIntegObjectType = _REParentIntegObjectType.REIntegrationObjectType
  association [1..1] to I_REIntegObjCtrlgObjType       as _REIntegObjCtrlgObjType       on  $projection.REIntegObjectCtrlgObjectType = _REIntegObjCtrlgObjType.REIntegObjectCtrlgObjectType
  association [1..1] to I_REIntegObjSpaceGroupType     as _REIntegObjSpaceGroupType     on  $projection.REIntegObjSpaceGroupType = _REIntegObjSpaceGroupType.REIntegObjSpaceGroupType
  association [1..1] to I_RESpaceGroupUsageType        as _RESpaceGroupUsageType        on  $projection.RESpaceGroupUsageType = _RESpaceGroupUsageType.RESpaceGroupUsageType
  association [1..1] to I_RESpaceGrpEnableUseType      as _RESpaceGrpEnableUseType      on  $projection.RESpaceGrpEnableUseType = _RESpaceGrpEnableUseType.RESpaceGrpEnableUseType
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_StatusObject                 as _StatusObject                 on  $projection.REStatusObject = _StatusObject.StatusObject
  association [1..*] to I_StatusObjectStatus           as _StatusObjectStatus           on  $projection.REStatusObject = _StatusObjectStatus.StatusObject
  association [0..1] to I_REObjectAddress              as _REObjectAddress              on  $projection.InternalRealEstateNumber = _REObjectAddress.InternalRealEstateNumber
  association [1..*] to I_REIntegObjectOccupancy       as _REIntegObjectOccupancy       on  $projection.InternalRealEstateNumber = _REIntegObjectOccupancy.REIntegObjectInternalNumber
  association [1..*] to I_REIntegObjToContractAssgmt   as _REIntegObjToContractAssgmt   on  $projection.REStatusObject           = _REIntegObjToContractAssgmt.REStatusObjectSource

  association [1..1] to I_REIntegrationObjectSubObj    as _REIntegrationObjSubObj       on  _REIntegrationObjSubObj.InternalRealEstateNumberLvl0 = $projection.InternalRealEstateNumber
                                                                                        or  _REIntegrationObjSubObj.InternalRealEstateNumberLvl1 = $projection.InternalRealEstateNumber
                                                                                        or  _REIntegrationObjSubObj.InternalRealEstateNumberLvl2 = $projection.InternalRealEstateNumber
                                                                                        or  _REIntegrationObjSubObj.InternalRealEstateNumberLvl3 = $projection.InternalRealEstateNumber

  //   parent
  association [0..1] to I_REIntegrationObject          as _REParentIntegrationObject    on  $projection.REParentIntegObjectExternalID = _REParentIntegrationObject.RealEstateExternalID
  association [0..1] to I_REIntegrationObjectBasicData as _REUseEnableIntegrationObject on  $projection.REInternalNumberForUseEnable = _REUseEnableIntegrationObject.InternalRealEstateNumber
  //  children
  association [0..*] to I_REIntegrationObjectRelation  as _REIntegrationObjectRelation  on  $projection.InternalRealEstateNumber = _REIntegrationObjectRelation.InternalRealEstateNumber
  association [0..*] to I_REIntegObjectRelationPartial as _REIntegObjectRelationPartial on  $projection.InternalRealEstateNumber = _REIntegObjectRelationPartial.InternalRealEstateNumber
  association [0..*] to I_REPartnerAssgmt              as _REPartnerAssgmt              on  $projection.InternalRealEstateNumber = _REPartnerAssgmt.InternalRealEstateNumber
  association [0..*] to I_REObjectAssgmt               as _REObjectAssgmt               on  $projection.REStatusObject = _REObjectAssgmt.REStatusObjectSource
  association [0..*] to I_REReminderObjRule            as _REReminderRule               on  $projection.InternalRealEstateNumber = _REReminderRule.InternalRealEstateNumber
  association [0..*] to I_REIntegObjectMeasurement     as _REMeasurement                on  $projection.InternalRealEstateNumber = _REMeasurement.InternalRealEstateNumber
  association [0..*] to I_REIntegObjectAcctObjAssgmt   as _REIntegObjectAcctObjAssgmt   on  $projection.InternalRealEstateNumber = _REIntegObjectAcctObjAssgmt.InternalRealEstateNumber
  association [0..*] to I_REIntegrationObjectTimeline  as _REIntegrationObjectTimeline  on  $projection.InternalRealEstateNumber = _REIntegrationObjectTimeline.InternalRealEstateNumber
  //  Extensibility
  association [1..1] to E_REIntegrationObject          as _Extension                    on  $projection.InternalRealEstateNumber = _Extension.InternalRealEstateNumber
{
  key intreno                                                                              as InternalRealEstateNumber,
      extid                                                                                as RealEstateExternalID,
      @ObjectModel.foreignKey.association: '_StatusObject'
      objnr                                                                                as REStatusObject,
      ionr                                                                                 as REIntegrationObjectNumber,
      @ObjectModel.foreignKey.association: '_REIntegObjectType'
      iotype                                                                               as REIntegrationObjectType,
      @ObjectModel.foreignKey.association: '_REIntegObjCtrlgObjType'
      iocoobjtype                                                                          as REIntegObjectCtrlgObjectType,
      xsobject                                                                             as REIntegrationObjectName,
      xlobject                                                                             as REIntegObjectLongName,
      @ObjectModel.foreignKey.association: '_REIntegObjSpaceGroupType'
      iosgtype                                                                             as REIntegObjSpaceGroupType,
      @ObjectModel.foreignKey.association: '_RESpaceGroupUsageType'
      iosgusagetype                                                                        as RESpaceGroupUsageType,
      @ObjectModel.foreignKey.association: '_RESpaceGrpEnableUseType'
      iosgenableusetype                                                                    as RESpaceGrpEnableUseType,
      @ObjectModel.foreignKey.association: '_REUseEnableIntegrationObject'
      intrenoenableuse                                                                     as REInternalNumberForUseEnable,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                                                as CompanyCode,
      @ObjectModel.foreignKey.association: '_REParentIntegObjectType'
      ioparenttype                                                                         as REParentIntegObjectType,
      ioparentextid                                                                        as REParentIntegObjectExternalID,
      @ObjectModel.foreignKey.association: '_UnitOfMeasureArea'
      areaunit                                                                             as REAreaUnit,
      //      @ObjectModel.foreignKey.association: '_CreatedByUser'
      rerf                                                                                 as CreatedByUser,
      derf                                                                                 as CreationDate,
      terf                                                                                 as CreationTime,
      reher                                                                                as RESourceOfCreation,
      //      @ObjectModel.foreignKey.association: '_ChangedByUser'
      rbear                                                                                as LastChangedByUser,
      dbear                                                                                as LastChangeDate,
      tbear                                                                                as LastChangeTime,
      rbher                                                                                as RESourceOfChange,
      //      @ObjectModel.foreignKey.association: '_ResponsibleUser'
      responsible                                                                          as Responsible,
      @ObjectModel.foreignKey.association: '_REAuthorizationGroup'
      authgrp                                                                              as REAuthorizationGroup,

      _CreatedByUser,
      _ChangedByUser,
      _ResponsibleUser,
      _UnitOfMeasureArea,
      _REAuthorizationGroup,
      _REIntegObjectType,
      _REIntegObjCtrlgObjType,
      _REParentIntegObjectType,
      _REIntegObjSpaceGroupType,
      _RESpaceGroupUsageType,
      _RESpaceGrpEnableUseType,
      _REKeyAssgmt,
      _StatusObject,
      _StatusObjectStatus,
      _REObjectAddress,
      _REIntegObjectOccupancy,
      _REIntegObjToContractAssgmt,
      _REIntegrationObjSubObj,

      _REParentIntegrationObject,
      _REUseEnableIntegrationObject,
      _CompanyCode,
      _REIntegrationObjectRelation,
      _REIntegObjectRelationPartial,
      _REPartnerAssgmt,
      _REObjectAssgmt,
      _REReminderRule,
      _REMeasurement,
      _REIntegObjectAcctObjAssgmt,
      _REIntegrationObjectTimeline

}
```
