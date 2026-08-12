---
name: I_WORKCENTERCOSTCENTER
description: "Work CenterCost Center"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - cost-center
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
  - bo:CostCenter
---
# I_WORKCENTERCOSTCENTER

**Work CenterCost Center**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  | `objid` |  |  |
| `WorkCenterTypeCode` | ✓ | |  | `objty` |  |  |
| `CostCenterAllocation` | ✓ | |  | `cast(crco.lanum as pph_lanum preserving type)` |  |  |
| `ValidityEndDate` | ✓ | |  | `endda` |  |  |
| `ValidityStartDate` |  | |  | `begda` |  |  |
| `LastChangeDate` |  | |  | `aedat_kost` |  |  |
| `LastChangedByUser` |  | |  | `aenam_kost` |  |  |
| `Plant` |  | | `_WorkCenter` | `Plant` |  |  |
| `WorkCenterCategoryCode` |  | | `_WorkCenter` | `WorkCenterCategoryCode` |  |  |
| `ControllingArea` |  | |  | `cast(crco.kokrs as fis_kokrs preserving type)` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `CostCtrActivityTypeQtyUnit` |  | |  | `leinh` |  |  |
| `BusinessProcess` |  | |  | `prz` |  |  |
| `ActivityDescOriginType` |  | |  | `cast(crco.actxy as pph_actxy preserving type)` |  |  |
| `CostCenterActivityAltvDescID` |  | |  | `cast(crco.actxk as pph_actxk preserving type)` |  |  |
| `CostCenterActivityTypeFormula` |  | |  | `cast(crco.forml as ap_form_c1 preserving type)` |  |  |
| `CostCtrActyTypeIsReferenced` |  | |  | `lstar_ref` |  |  |
| `CostCtrActyTypeIncntvWageCode` |  | |  | `bde` |  |  |
| `CostCtrActyTypeRecdTypeGrpCode` |  | |  | `sakl` |  |  |
| `_WorkCenter` | | ✓ | | | | |
| `_WorkCenterTypeCode` | | ✓ | | | | |
| `_WorkCenterCategory` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StartDate` | | ✓ | | | | |
| `_EndDate` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ActivityType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_ActivityDescOriginType` | | ✓ | | | | |
| `_ActivityAlternativeText` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_CostCtrActivityTypeFormula` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkCenter` | `I_WorkCenter` | [1..1] |
| `_WorkCenterTypeCode` | `I_WorkCenterType` | [1..1] |
| `_WorkCenterCategory` | `I_WorkCenterCategory` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StartDate` | `I_CalendarDate` | [0..1] |
| `_EndDate` | `I_CalendarDate` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_CostCenter` | `I_CostCenter` | [1..1] |
| `_ActivityType` | `I_CostCenterActivityType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_ActivityDescOriginType` | `I_ActivityDescOriginType` | [0..1] |
| `_ActivityAlternativeText` | `I_ActivityAlternativeText` | [0..*] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_CostCtrActivityTypeFormula` | `I_ProdnRsceToolQtyCalcFormula` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWRKCNTRCOSTC'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_LastChangedByUser'] 
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'CostCenterAllocation'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Cost Center'
@ObjectModel.sapObjectNodeType.name: 'WorkCenterCostCenter'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_WorkCenterCostCenter
  as select from crco as crco

  association [1..1] to I_WorkCenter                  as _WorkCenter                 on  $projection.WorkCenterTypeCode   = _WorkCenter.WorkCenterTypeCode
                                                                                     and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [1..1] to I_WorkCenterType              as _WorkCenterTypeCode         on  $projection.WorkCenterTypeCode = _WorkCenterTypeCode.WorkCenterTypeCode
  association [1..1] to I_WorkCenterCategory          as _WorkCenterCategory         on  $projection.workcentercategorycode = _WorkCenterCategory.WorkCenterCategoryCode
  association [1..1] to I_Plant                       as _Plant                      on  $projection.plant = _Plant.Plant
  association [0..1] to I_CalendarDate                as _StartDate                  on  $projection.ValidityStartDate = _StartDate.CalendarDate
  association [1..1] to I_CalendarDate                as _EndDate                    on  $projection.ValidityEndDate = _EndDate.CalendarDate
  association [0..1] to I_User                        as _LastChangedByUser          on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_ControllingArea             as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [1..1] to I_CostCenter                  as _CostCenter                 on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                     and $projection.CostCenter      = _CostCenter.CostCenter
                                                                                     and $projection.ValidityEndDate = _CostCenter.ValidityEndDate
  association [0..1] to I_CostCenterActivityType      as _ActivityType               on  $projection.ControllingArea     = _ActivityType.ControllingArea
                                                                                     and $projection.CostCtrActivityType = _ActivityType.CostCtrActivityType
                                                                                     and $projection.ValidityEndDate     = _ActivityType.ValidityEndDate
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure              on  $projection.CostCtrActivityTypeQtyUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_BusinessProcess             as _BusinessProcess            on  $projection.ControllingArea = _BusinessProcess.ControllingArea
                                                                                     and $projection.BusinessProcess = _BusinessProcess.BusinessProcess
  association [0..1] to I_ActivityDescOriginType      as _ActivityDescOriginType     on  $projection.ActivityDescOriginType = _ActivityDescOriginType.ActivityDescOriginType
  association [0..*] to I_ActivityAlternativeText     as _ActivityAlternativeText    on  $projection.CostCenterActivityAltvDescID = _ActivityAlternativeText.CostCenterActivityAltvDescID
  association [0..*] to I_CostCenterText              as _CostCenterText             on  $projection.CostCenter      = _CostCenterText.CostCenter
                                                                                     and $projection.ControllingArea = _CostCenterText.ControllingArea
                                                                                     and $projection.ValidityEndDate = _CostCenterText.ValidityEndDate
  association [0..1] to I_ProdnRsceToolQtyCalcFormula as _CostCtrActivityTypeFormula on  $projection.CostCenterActivityTypeFormula = _CostCtrActivityTypeFormula.ProdnRsceToolQtyCalcFormula
{
      // Key
      @ObjectModel.foreignKey.association: '_WorkCenter'
  key crco.objid                                     as  WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterTypeCode'
  key crco.objty                                     as  WorkCenterTypeCode,
  key cast(crco.lanum as pph_lanum preserving type)  as  CostCenterAllocation,
      @ObjectModel.foreignKey.association: '_EndDate'
  key crco.endda                                     as  ValidityEndDate,
      @ObjectModel.foreignKey.association: '_StartDate'
      crco.begda                                     as  ValidityStartDate,

      // Admin
      @Semantics.systemDate.lastChangedAt: true
      crco.aedat_kost                                as  LastChangeDate,
      @Semantics.user.lastChangedBy: true
      crco.aenam_kost                                as  LastChangedByUser,

      // Plant and Category for DCLS
      @ObjectModel.foreignKey.association: '_Plant'
      _WorkCenter.Plant,
      @ObjectModel.foreignKey.association: '_WorkCenterCategory'
      _WorkCenter.WorkCenterCategoryCode,

      //CO Data
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast(crco.kokrs as fis_kokrs preserving type)  as  ControllingArea,
      @ObjectModel.foreignKey.association: '_CostCenter'
      crco.kostl                                     as  CostCenter,
      @ObjectModel.foreignKey.association: '_ActivityType'
      crco.lstar                                     as  CostCtrActivityType,
      @Semantics.unitOfMeasure: true
      crco.leinh                                     as  CostCtrActivityTypeQtyUnit,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      crco.prz                                       as  BusinessProcess,

      // Alternative description
      @ObjectModel.foreignKey.association: '_ActivityDescOriginType'
      cast(crco.actxy as pph_actxy preserving type)  as  ActivityDescOriginType,
      cast(crco.actxk as pph_actxk preserving type)  as  CostCenterActivityAltvDescID,

      @ObjectModel.foreignKey.association: '_CostCtrActivityTypeFormula'
      cast(crco.forml as ap_form_c1 preserving type) as  CostCenterActivityTypeFormula,

      crco.lstar_ref                                 as  CostCtrActyTypeIsReferenced,
      crco.bde                                       as  CostCtrActyTypeIncntvWageCode,
      crco.sakl                                      as  CostCtrActyTypeRecdTypeGrpCode,

      // Associations
      _WorkCenter,
      _WorkCenterTypeCode,
      _WorkCenterCategory,
      _Plant,
      _EndDate,
      _StartDate,
      _LastChangedByUser,
      _ControllingArea,
      _CostCenter,
      _CostCenterText,
      _ActivityType,
      _UnitOfMeasure,
      _BusinessProcess,
      _ActivityDescOriginType,
      _ActivityAlternativeText,
      _CostCtrActivityTypeFormula
}
where
  (     crco.objty = 'A'
    and crco.laset = '    1'
  );
```
