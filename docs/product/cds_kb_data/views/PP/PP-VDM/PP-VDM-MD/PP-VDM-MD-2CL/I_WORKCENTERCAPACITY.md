---
name: I_WORKCENTERCAPACITY
description: "Work CenterCAPACITY"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERCAPACITY

**Work CenterCAPACITY**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  | `objid` |  |  |
| `WorkCenterTypeCode` | ✓ | |  | `objty` |  |  |
| `CapacityCategoryAllocation` | ✓ | |  | `cast(crca.canum as pph_cr_capnum preserving type)` |  |  |
| `LastChangeDate` |  | |  | `aedat_kapa` |  |  |
| `LastChangedByUser` |  | |  | `aenam_kapa` |  |  |
| `Plant` |  | | `_WorkCenter` | `Plant` |  |  |
| `WorkCenter` |  | | `_WorkCenter` | `WorkCenter` |  |  |
| `WorkCenterCategoryCode` |  | | `_WorkCenter` | `WorkCenterCategoryCode` |  |  |
| `WorkCenterResponsible` |  | | `_WorkCenter` | `WorkCenterResponsible` |  |  |
| `CapacityInternalID` |  | |  | `kapid` |  |  |
| `CapacityCategoryCode` |  | | `_Capacity` | `CapacityCategoryCode` |  |  |
| `Capacity` |  | | `_Capacity` | `Capacity` |  |  |
| `SetupCapRequirementFormula` |  | |  | `fork1` |  |  |
| `ProcgCapRequirementFormula` |  | |  | `fork2` |  |  |
| `TeardownCapRequirementFormula` |  | |  | `fork3` |  |  |
| `OtherCapRequirementFormula` |  | |  | `forkn` |  |  |
| `ValidityStartDate` |  | |  | `begda` |  |  |
| `ValidityEndDate` |  | |  | `endda` |  |  |
| `CapacityQuantityUnit` |  | | `_Capacity` | `CapacityQuantityUnit` |  |  |
| `WorkCenterLastChangeDateTime` |  | |  | `case when _WorkCenter.WorkCenterLastChangeDateTime is null then cast(dats_tims_to_tstmp(cast('20190101' as dats), cast('120000'as tims), 'UTC', $session.client, 'NULL') as cr_lastchange_datetime) else _WorkCenter.WorkCenterLastChangeDateTime end` |  |  |
| `_Plant` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_WorkCenterBySemanticKey` | | ✓ | | | | |
| `_WorkCenterTypeCode` | | ✓ | | | | |
| `_WorkCenterCategory` | | ✓ | | | | |
| `_Capacity` | | ✓ | | | | |
| `_CapacityCategory` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_CapacityQuantityUnit` | | ✓ | | | | |
| `_WorkCenterResponsible` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_WorkCenter` | `I_WorkCenter` | [1..1] |
| `_WorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_WorkCenterTypeCode` | `I_WorkCenterType` | [1..1] |
| `_WorkCenterCategory` | `I_WorkCenterCategory` | [1..1] |
| `_Capacity` | `I_Capacity` | [1..1] |
| `_CapacityCategory` | `I_CapacityCategory` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_CapacityQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WorkCenterResponsible` | `I_WorkCenterResponsible` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWRKCNTRCAP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_LastChangedByUser'] 
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'CapacityCategoryAllocation'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Capacity'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_WorkCenterCapacity
  as select from crca as crca

  association [1..1] to I_Plant                   as _Plant                   on  $projection.Plant = _Plant.Plant
  association [1..1] to I_WorkCenter              as _WorkCenter              on  $projection.WorkCenterTypeCode   = _WorkCenter.WorkCenterTypeCode
                                                                              and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [0..1] to I_WorkCenterBySemanticKey as _WorkCenterBySemanticKey on  $projection.Plant      = _WorkCenterBySemanticKey.Plant
                                                                              and $projection.WorkCenter = _WorkCenterBySemanticKey.WorkCenter
  association [1..1] to I_WorkCenterType          as _WorkCenterTypeCode      on  $projection.WorkCenterTypeCode = _WorkCenterTypeCode.WorkCenterTypeCode
  association [1..1] to I_WorkCenterCategory      as _WorkCenterCategory      on  $projection.WorkCenterCategoryCode = _WorkCenterCategory.WorkCenterCategoryCode
  association [1..1] to I_Capacity                as _Capacity                on  $projection.CapacityInternalID = _Capacity.CapacityInternalID
  association [1..1] to I_CapacityCategory        as _CapacityCategory        on  $projection.CapacityCategoryCode = _CapacityCategory.CapacityCategoryCode
  association [0..1] to I_User                    as _LastChangedByUser       on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_UnitOfMeasure           as _CapacityQuantityUnit    on  $projection.CapacityQuantityUnit = _CapacityQuantityUnit.UnitOfMeasure
  association [0..1] to I_WorkCenterResponsible   as _WorkCenterResponsible   on  $projection.Plant                 = _WorkCenterResponsible.Plant
                                                                              and $projection.WorkCenterResponsible = _WorkCenterResponsible.WorkCenterResponsible 
{
      // Key
      @ObjectModel.foreignKey.association: '_WorkCenter'
  key crca.objid                                        as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterTypeCode'
  key crca.objty                                        as WorkCenterTypeCode,
  key cast(crca.canum as pph_cr_capnum preserving type) as CapacityCategoryAllocation,

      // Admin
      @Semantics.systemDate.lastChangedAt: true
      crca.aedat_kapa                                   as LastChangeDate,
      @Semantics.user.lastChangedBy: true
      crca.aenam_kapa                                   as LastChangedByUser,

      // Assignments
      @ObjectModel.foreignKey.association: '_Plant'
      _WorkCenter.Plant                                 as Plant,
      @ObjectModel.foreignKey.association: '_WorkCenterBySemanticKey'
      _WorkCenter.WorkCenter                            as WorkCenter,
      @ObjectModel.foreignKey.association: '_WorkCenterCategory'
      _WorkCenter.WorkCenterCategoryCode                as WorkCenterCategoryCode,
      @ObjectModel.foreignKey.association: '_WorkCenterResponsible'
      _WorkCenter.WorkCenterResponsible                 as WorkCenterResponsible,
      @ObjectModel.foreignKey.association: '_Capacity'
      crca.kapid                                        as CapacityInternalID,
      @ObjectModel.foreignKey.association: '_CapacityCategory'
      _Capacity.CapacityCategoryCode                    as CapacityCategoryCode,
      _Capacity.Capacity                                as Capacity,

      // Formula IDs
      crca.fork1                                        as SetupCapRequirementFormula,
      crca.fork2                                        as ProcgCapRequirementFormula,
      crca.fork3                                        as TeardownCapRequirementFormula,
      crca.forkn                                        as OtherCapRequirementFormula,

      // Dates
      @Semantics.businessDate.from
      crca.begda                                        as ValidityStartDate,
      @Semantics.businessDate.to
      crca.endda                                        as ValidityEndDate,

      // UoM
      @Semantics.unitOfMeasure: true
      _Capacity.CapacityQuantityUnit                    as CapacityQuantityUnit,

      case 
        when _WorkCenter.WorkCenterLastChangeDateTime is null 
        then cast(dats_tims_to_tstmp(cast('20190101' as dats), cast('120000'as tims), 'UTC', $session.client, 'NULL') as cr_lastchange_datetime)
        else _WorkCenter.WorkCenterLastChangeDateTime 
      end                                               as WorkCenterLastChangeDateTime,

      // Associations
      _Plant,
      _WorkCenter,
      _WorkCenterBySemanticKey,
      _WorkCenterTypeCode,
      _WorkCenterCategory,
      _Capacity,
      _CapacityCategory,
      _CapacityQuantityUnit,
      _LastChangedByUser,
      _WorkCenterResponsible
};
```
