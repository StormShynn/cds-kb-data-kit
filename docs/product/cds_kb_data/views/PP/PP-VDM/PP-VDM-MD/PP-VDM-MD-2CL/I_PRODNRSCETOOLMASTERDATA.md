---
name: I_PRODNRSCETOOLMASTERDATA
description: "Prodnrscetoolmasterdata"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLMASTERDATA

**Prodnrscetoolmasterdata**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionResourceType` | ✓ | |  | `cast(crfh.objty as productionresourcetype preserving type)` |  |  |
| `ProductionResourceInternalID` | ✓ | |  | `cast(crfh.objid as pph_fhmid preserving type)` |  |  |
| `ProdnRsceToolCategory` |  | |  | `fhmar` |  |  |
| `ProdnRsceToolCategory_2` |  | |  | `cast(crfh.fhmar as mpe_fhmar preserving type)` |  |  |
| `ProductionResourceToolGroup1` |  | |  | `fgru1` |  |  |
| `ProductionResourceToolGroup2` |  | |  | `fgru2` |  |  |
| `ProductionResourceUsage` |  | |  | `planv` |  |  |
| `MiscPRTAuthorizationGroup` |  | |  | `brgru` |  |  |
| `ProdnRsceToolControlProfile` |  | |  | `steuf` |  |  |
| `ChangeNumber` |  | |  | `cast(crfh.aennr as changenumber preserving type)` |  |  |
| `ProdnRsceToolStandardTextCode` |  | |  | `ktsch` |  |  |
| `ProdnRsceToolTotQtyCalcFormula` |  | |  | `mgform` |  |  |
| `ProdnRsceToolUsageQtyCalcFmla` |  | |  | `ewform` |  |  |
| `ProdnRsceToolBaseUnit` |  | |  | `baseh` |  |  |
| `CreationDate` |  | |  | `andat` |  |  |
| `CreatedByUser` |  | |  | `cast(crfh.annam as vdm_createdbyuserid preserving type)` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `StartDateOffsetReferenceCode` |  | |  | `cast(crfh.bzoffb as startdateoffsetreferencecode preserving type)` |  |  |
| `StartDateOffsetDuration` |  | |  | `cast(crfh.offstb as startdateoffsetduration preserving type)` |  |  |
| `StartDateOffsetDurationUnit` |  | |  | `ehoffb` |  |  |
| `EndDateOffsetReferenceCode` |  | |  | `cast(crfh.bzoffe as enddateoffsetreferencecode preserving type)` |  |  |
| `EndDateOffsetDuration` |  | |  | `cast(crfh.offste as enddateoffsetduration preserving type)` |  |  |
| `EndDateOffsetDurationUnit` |  | |  | `ehoffe` |  |  |
| `EndDateOffsetDurnIsReferenced` |  | |  | `cast(crfh.offste_ref as vdm_oekzr preserving type)` |  |  |
| `StartDateOffstDurnIsReferenced` |  | |  | `cast(crfh.offstb_ref as vdm_obkzr preserving type)` |  |  |
| `EndDteOffstRefCodeIsReferenced` |  | |  | `cast(crfh.bzoffe_ref as vdm_bekzr preserving type)` |  |  |
| `StartDateOffsetRefCodeIsRefcd` |  | |  | `cast(crfh.bzoffb_ref as vdm_bbkzr preserving type)` |  |  |
| `PRTTotQtyCalcFmlaIsReferenced` |  | |  | `cast(crfh.mgform_ref as vdm_mfkzr preserving type)` |  |  |
| `PRTUsgeQtyCalcFmlaIsReferenced` |  | |  | `cast(crfh.ewform_ref as vdm_efkzr preserving type)` |  |  |
| `PRTControlProfileIsReferenced` |  | |  | `cast(crfh.steuf_ref as vdm_stkzr preserving type)` |  |  |
| `PRTStdTextCodeIsReferenced` |  | |  | `cast(crfh.ktsch_ref as vdm_ktkzr preserving type)` |  |  |
| `ShopFloorRtgPRTIsRegistrable` |  | |  | `registrable` |  |  |
| `ProdnRsceToolPlntLoc` |  | |  | `stowk` |  |  |
| `ProductionResourceToolStatus` |  | |  | `status` |  |  |
| `ProdnRsceToolIsDeleted` |  | |  | `loekz` |  |  |
| `ProductionResourceToolLocation` |  | |  | `stort` |  |  |
| `ProdPRTLoadRecordsAreCreated` |  | |  | `kzkbl` |  |  |
| `_ProductionResourceType` | | ✓ | | | | |
| `_ProdnRsceToolCategory` | | ✓ | | | | |
| `_ProdnRsceToolCategory_2` | | ✓ | | | | |
| `_ProdnRsceToolCategory_3` | | ✓ | | | | |
| `_ProdnRsceToolGroup1` | | ✓ | | | | |
| `_ProdnRsceToolGroup2` | | ✓ | | | | |
| `_ProductionResourceUsage` | | ✓ | | | | |
| `_ProdnRsceToolControlProfile` | | ✓ | | | | |
| `_ProdnRsceToolStandardText` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_ProdnRsceToolTotQtyCalcFmla` | | ✓ | | | | |
| `_ProdnRsceToolUsageQtyCalcFmla` | | ✓ | | | | |
| `_StartDateOffsetReferenceCode` | | ✓ | | | | |
| `_EndDateOffsetReferenceCode` | | ✓ | | | | |
| `_StartDateOffsetDurationUnit` | | ✓ | | | | |
| `_EndDateOffsetDurationUnit` | | ✓ | | | | |
| `_ProdnRsceToolBaseUnit` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionResourceType` | `I_ProductionResourceType` | [1..1] |
| `_ProdnRsceToolCategory` | `I_ProdnRsceToolCategory` | [1..1] |
| `_ProdnRsceToolCategory_2` | `I_ProdnRsceToolCategory` | [1..1] |
| `_ProdnRsceToolCategory_3` | `I_ProdnRsceToolCategory_2` | [1..1] |
| `_ProdnRsceToolGroup1` | `I_ProdnRsceToolGroup` | [1..1] |
| `_ProdnRsceToolGroup2` | `I_ProdnRsceToolGroup` | [1..1] |
| `_ProductionResourceUsage` | `I_ProductionResourceUsage` | [1..1] |
| `_ProdnRsceToolControlProfile` | `I_ProdnRsceToolControlProfile` | [0..1] |
| `_ProdnRsceToolStandardText` | `I_ProdnRsceToolStandardText` | [1..1] |
| `_ChangeMaster` | `I_ChangeMaster` | [0..1] |
| `_ProdnRsceToolTotQtyCalcFmla` | `I_ProdnRsceToolQtyCalcFormula` | [1..1] |
| `_ProdnRsceToolUsageQtyCalcFmla` | `I_ProdnRsceToolQtyCalcFormula` | [1..1] |
| `_StartDateOffsetReferenceCode` | `I_OperationDateOffsetRefCode` | [1..1] |
| `_EndDateOffsetReferenceCode` | `I_OperationDateOffsetRefCode` | [1..1] |
| `_StartDateOffsetDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EndDateOffsetDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProdnRsceToolBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTMD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionResourceInternalID'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Production Resource Tool Master Data'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK"]  } */
define view I_ProdnRsceToolMasterData
  as select from crfh

  association [1..1] to I_ProductionResourceType      as _ProductionResourceType        on $projection.ProductionResourceType = _ProductionResourceType.ProductionResourceType
  association [1..1] to I_ProdnRsceToolCategory       as _ProdnRsceToolCategory         on $projection.ProdnRsceToolCategory = _ProdnRsceToolCategory.ProdnRsceToolCategory
  association [1..1] to I_ProdnRsceToolCategory       as _ProdnRsceToolCategory_2       on $projection.ProdnRsceToolCategory_2 = _ProdnRsceToolCategory_2.ProdnRsceToolCategory
  association [1..1] to I_ProdnRsceToolCategory_2     as _ProdnRsceToolCategory_3       on $projection.ProdnRsceToolCategory_2 = _ProdnRsceToolCategory_3.ProdnRsceToolCategory
  association [1..1] to I_ProdnRsceToolGroup          as _ProdnRsceToolGroup1           on $projection.ProductionResourceToolGroup1 = _ProdnRsceToolGroup1.ProductionResourceToolGroup
  association [1..1] to I_ProdnRsceToolGroup          as _ProdnRsceToolGroup2           on $projection.ProductionResourceToolGroup2 = _ProdnRsceToolGroup2.ProductionResourceToolGroup
  association [1..1] to I_ProductionResourceUsage     as _ProductionResourceUsage       on $projection.ProductionResourceUsage = _ProductionResourceUsage.ProductionResourceUsage
  association [0..1] to I_ProdnRsceToolControlProfile as _ProdnRsceToolControlProfile   on $projection.ProdnRsceToolControlProfile = _ProdnRsceToolControlProfile.ProdnRsceToolControlProfile
  association [1..1] to I_ProdnRsceToolStandardText   as _ProdnRsceToolStandardText     on $projection.ProdnRsceToolStandardTextCode = _ProdnRsceToolStandardText.ProdnRsceToolStandardTextCode
  association [0..1] to I_ChangeMaster                as _ChangeMaster                  on $projection.ChangeNumber = _ChangeMaster.ChangeNumber

  association [1..1] to I_ProdnRsceToolQtyCalcFormula as _ProdnRsceToolTotQtyCalcFmla   on $projection.ProdnRsceToolTotQtyCalcFormula = _ProdnRsceToolTotQtyCalcFmla.ProdnRsceToolQtyCalcFormula
  association [1..1] to I_ProdnRsceToolQtyCalcFormula as _ProdnRsceToolUsageQtyCalcFmla on $projection.ProdnRsceToolUsageQtyCalcFmla = _ProdnRsceToolUsageQtyCalcFmla.ProdnRsceToolQtyCalcFormula

  association [1..1] to I_OperationDateOffsetRefCode  as _StartDateOffsetReferenceCode  on $projection.StartDateOffsetReferenceCode = _StartDateOffsetReferenceCode.OperationDateOffsetRefCode
  association [1..1] to I_OperationDateOffsetRefCode  as _EndDateOffsetReferenceCode    on $projection.EndDateOffsetReferenceCode = _EndDateOffsetReferenceCode.OperationDateOffsetRefCode

  association [0..1] to I_UnitOfMeasure               as _StartDateOffsetDurationUnit   on $projection.StartDateOffsetDurationUnit = _StartDateOffsetDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _EndDateOffsetDurationUnit     on $projection.EndDateOffsetDurationUnit = _EndDateOffsetDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ProdnRsceToolBaseUnit         on $projection.ProdnRsceToolBaseUnit = _ProdnRsceToolBaseUnit.UnitOfMeasure

  association [1..1] to I_User                        as _CreatedByUser                 on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                        as _LastChangedByUser             on $projection.LastChangedByUser = _LastChangedByUser.UserID

{
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
  key cast(crfh.objty as productionresourcetype preserving type)        as ProductionResourceType,
      // Representative Key
  key cast(crfh.objid as pph_fhmid preserving type)                     as ProductionResourceInternalID,

      // Assignments
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProdnRsceToolCategory_2'
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory'
      crfh.fhmar                                                        as ProdnRsceToolCategory,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory_3'
      cast(crfh.fhmar as mpe_fhmar preserving type)                     as ProdnRsceToolCategory_2,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolGroup1'
      crfh.fgru1                                                        as ProductionResourceToolGroup1,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolGroup2'
      crfh.fgru2                                                        as ProductionResourceToolGroup2,
      @ObjectModel.foreignKey.association: '_ProductionResourceUsage'
      crfh.planv                                                        as ProductionResourceUsage,
      // Technical field, used for Miscellaneous Production Resource Tool only !
      crfh.brgru                                                        as MiscPRTAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolControlProfile'
      crfh.steuf                                                        as ProdnRsceToolControlProfile,
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      cast(crfh.aennr as changenumber preserving type)                  as ChangeNumber,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolStandardText'
      crfh.ktsch                                                        as ProdnRsceToolStandardTextCode,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolTotQtyCalcFmla'
      crfh.mgform                                                       as ProdnRsceToolTotQtyCalcFormula,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolUsageQtyCalcFmla'
      crfh.ewform                                                       as ProdnRsceToolUsageQtyCalcFmla,
      @Semantics.unitOfMeasure: true
      crfh.baseh                                                        as ProdnRsceToolBaseUnit,

      // Administrative Data
      @Semantics.systemDate.createdAt: true
      crfh.andat                                                        as CreationDate,
      @Semantics.user.createdBy: true
      cast(crfh.annam as vdm_createdbyuserid preserving type)           as CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      crfh.aedat                                                        as LastChangeDate,
      @Semantics.user.lastChangedBy: true
      crfh.aenam                                                        as LastChangedByUser,

      // Offset
      @ObjectModel.foreignKey.association: '_StartDateOffsetReferenceCode'
      cast(crfh.bzoffb as startdateoffsetreferencecode preserving type) as StartDateOffsetReferenceCode,
      @Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
      @DefaultAggregation: #SUM
      cast(crfh.offstb as startdateoffsetduration preserving type)      as StartDateOffsetDuration,
      @Semantics.unitOfMeasure: true
      crfh.ehoffb                                                       as StartDateOffsetDurationUnit,

      @ObjectModel.foreignKey.association: '_EndDateOffsetReferenceCode'
      cast(crfh.bzoffe as enddateoffsetreferencecode preserving type)   as EndDateOffsetReferenceCode,
      @Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
      @DefaultAggregation: #SUM
      cast(crfh.offste as enddateoffsetduration preserving type)        as EndDateOffsetDuration,
      @Semantics.unitOfMeasure: true
      crfh.ehoffe                                                       as EndDateOffsetDurationUnit,

      // Reference Indicators
      cast(crfh.offste_ref as vdm_oekzr preserving type)                as EndDateOffsetDurnIsReferenced,
      cast(crfh.offstb_ref as vdm_obkzr preserving type)                as StartDateOffstDurnIsReferenced,
      cast(crfh.bzoffe_ref as vdm_bekzr preserving type)                as EndDteOffstRefCodeIsReferenced,
      cast(crfh.bzoffb_ref as vdm_bbkzr preserving type)                as StartDateOffsetRefCodeIsRefcd,
      cast(crfh.mgform_ref as vdm_mfkzr preserving type)                as PRTTotQtyCalcFmlaIsReferenced,
      cast(crfh.ewform_ref as vdm_efkzr preserving type)                as PRTUsgeQtyCalcFmlaIsReferenced,
      cast(crfh.steuf_ref  as vdm_stkzr preserving type)                as PRTControlProfileIsReferenced,
      cast(crfh.ktsch_ref  as vdm_ktkzr preserving type)                as PRTStdTextCodeIsReferenced,

      //PRT can be Registered at Production Execution
      crfh.registrable                                                  as ShopFloorRtgPRTIsRegistrable,

      //Manage PRT
      crfh.stowk                                                        as ProdnRsceToolPlntLoc,
      crfh.status                                                       as ProductionResourceToolStatus,
      crfh.loekz                                                        as ProdnRsceToolIsDeleted,
      crfh.stort                                                        as ProductionResourceToolLocation,
      
      crfh.kzkbl                                                        as ProdPRTLoadRecordsAreCreated,
      
      // Associations
      _ProductionResourceType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProdnRsceToolCategory_3'
      _ProdnRsceToolCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProdnRsceToolCategory_3'
      _ProdnRsceToolCategory_2,
      _ProdnRsceToolCategory_3, //assoc. to new view w/o conversion exit
      _ProdnRsceToolGroup1,
      _ProdnRsceToolGroup2,
      _ProductionResourceUsage,
      _ProdnRsceToolControlProfile,
      _ProdnRsceToolStandardText,
      _ProdnRsceToolTotQtyCalcFmla,
      _ProdnRsceToolUsageQtyCalcFmla,
      _StartDateOffsetReferenceCode,
      _EndDateOffsetReferenceCode,
      _StartDateOffsetDurationUnit,
      _EndDateOffsetDurationUnit,
      _ProdnRsceToolBaseUnit,
      _CreatedByUser,
      _LastChangedByUser,
      _ChangeMaster
}
where
      crfh.objty = 'FH' // Production Resource Tool
  and crfh.zaehl = '00000000'
  and crfh.loekz = ' '  // not deleted
```
