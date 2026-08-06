---
name: I_WORKCENTER
description: Work Center
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_WORKCENTER

**Work Center**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkCenterInternalID` | `crhd.objid` |
| key `WorkCenterTypeCode` | `crhd.objty` |
| `WorkCenter` | `cast(crhd.arbpl as pph_arbpl preserving type)` |
| `WorkCenterIsToBeDeleted` | `crhd.lvorm` |
| `WorkCenterIsLocked` | `crhd.xsprr` |
| `WorkCenterIsMntndForCosting` | `crhd.xkost` |
| `WorkCenterIsMntndForScheduling` | `crhd.xterm` |
| `NumberOfConfirmationSlips` | `crhd.rsanz` |
| `AdvancedPlanningIsSupported` | `crhd.ppskz` |
| `ShiftNoteType` | `crhd.sntype` |
| `ShiftReportType` | `crhd.srtype` |
| `WorkCenterLastChangedBy` | `crhd.aenam_grnd` |
| `WorkCenterLastChangeDateTime` | `case when crhd.lastchange_datetime = 0 or crhd.lastchange_datetime is null then case when crhd.aedat_grnd is null then cast(dats_tims_to_tstmp(cast('20190101' as dats), cast('120000'as tims), 'UTC', $session.client, 'NULL') as cr_lastchange_datetime) else cast(dats_tims_to_tstmp(crhd.aedat_grnd, cast('120000'as tims), 'UTC', $session.client, 'NULL') as cr_lastchange_datetime) end else crhd.lastchange_datetime end` |
| `WorkCenterCategoryCode` | `crhd.verwe` |
| `WorkCenterLocation` | `crhd.stand` |
| `WorkCenterLocationGroup` | `crhd.ortgr` |
| `WorkCenterUsage` | `cast(crhd.planv as pph_ap_planv preserving type)` |
| `WorkCenterResponsible` | `crhd.veran` |
| `Plant` | `crhd.werks` |
| `SupplyArea` | `crhd.prvbe` |
| `CapacityInternalID` | `crhd.kapid` |
| `MachineType` | `crhd.matyp` |
| `OperationControlProfile` | `cast(crhd.steus as pph_steus preserving type)` |
| `MatlCompIsMarkedForBackflush` | `crhd.rgekz` |
| `WorkCenterSetupType` | `cast(crhd.rasch as workcentersetuptype preserving type)` |
| `FreeDefinedTableFieldSemantic` | `cast(crhd.slwid as pph_slwid preserving type)` |
| `ObjectInternalID` | `crhd.stobj` |
| `StandardTextInternalID` | `cast(crhd.ktsch as pph_ktsch preserving type)` |
| `EmployeeWageType` | `cast(crhd.loart as pph_loart preserving type)` |
| `EmployeeWageGroup` | `cast(crhd.logrp as pph_logrp preserving type)` |
| `EmployeeSuitability` | `cast(crhd.qualf as pph_qualf preserving type)` |
| `NumberOfTimeTickets` | `crhd.loanz` |
| `PlanVersion` | `cast(crhd.hrplvar as pph_plvar preserving type)` |
| `WrkCtrHumRsceObjID` | `cast(crhd.hroid as wrkctrhumrsceobjid preserving type)` |
| `ValidityStartDate` | `cast(crhd.begda as pph_begda preserving type)` |
| `ValidityEndDate` | `cast(crhd.endda as pph_endda preserving type)` |
| `StandardTextIDIsReferenced` | `crhd.ktsch_ref` |
| `EmployeeWageTypeIsReferenced` | `crhd.loart_ref` |
| `NmbrOfTimeTicketsIsReferenced` | `crhd.loanz_ref` |
| `EmployeeWageGroupIsReferenced` | `crhd.logrp_ref` |
| `EmplSuitabilityIsReferenced` | `crhd.qualf_ref` |
| `WorkCenterSetpTypeIsReferenced` | `crhd.rasch_ref` |
| `OpControlProfileIsReferenced` | `crhd.steus_ref` |
| `NumberOfConfSlipsIsReferenced` | `crhd.rsanz_ref` |
| `WorkCenterStdQueueDurnUnit` | `crhd.zeiwn` |
| `WorkCenterStandardQueueDurn` | `crhd.zwnor` |
| `WorkCenterMinimumQueueDurnUnit` | `crhd.zeiwm` |
| `WorkCenterMinimumQueueDuration` | `crhd.zwmin` |
| `WorkCenterStandardWorkQtyUnit1` | `cast(crhd.vge01 as pph_vge01 preserving type)` |
| `WorkCenterStandardWorkQtyUnit2` | `cast(crhd.vge02 as pph_vge02 preserving type)` |
| `WorkCenterStandardWorkQtyUnit3` | `cast(crhd.vge03 as pph_vge03 preserving type)` |
| `WorkCenterStandardWorkQtyUnit4` | `cast(crhd.vge04 as pph_vge04 preserving type)` |
| `WorkCenterStandardWorkQtyUnit5` | `cast(crhd.vge05 as pph_vge05 preserving type)` |
| `WorkCenterStandardWorkQtyUnit6` | `cast(crhd.vge06 as pph_vge06 preserving type)` |
| `StandardWorkQuantityUnit` | `crhd.vgarb` |
| `StandardWorkFormulaParamGroup` | `crhd.vgwts` |
| `LaborTrackingIsRequired` | `crhd.s_labor_track` |
| `WorkCenterFormulaParam1` | `cast(crhd.par01 as pph_par01 preserving type)` |
| `WorkCenterFormulaParam2` | `cast(crhd.par02 as pph_par02 preserving type)` |
| `WorkCenterFormulaParam3` | `cast(crhd.par03 as pph_par03 preserving type)` |
| `WorkCenterFormulaParam4` | `cast(crhd.par04 as pph_par04 preserving type)` |
| `WorkCenterFormulaParam5` | `cast(crhd.par05 as pph_par05 preserving type)` |
| `WorkCenterFormulaParam6` | `cast(crhd.par06 as pph_par06 preserving type)` |
| `WorkCenterFmlaParamValue1` | `cast(crhd.parv1 as pph_parv1 preserving type)` |
| `WorkCenterFmlaParamValue2` | `cast(crhd.parv2 as pph_parv2 preserving type)` |
| `WorkCenterFmlaParamValue3` | `cast(crhd.parv3 as pph_parv3 preserving type)` |
| `WorkCenterFmlaParamValue4` | `cast(crhd.parv4 as pph_parv4 preserving type)` |
| `WorkCenterFmlaParamValue5` | `cast(crhd.parv5 as pph_parv5 preserving type)` |
| `WorkCenterFmlaParamValue6` | `cast(crhd.parv6 as pph_parv6 preserving type)` |
| `WorkCenterFmlaParamUnit1` | `cast(crhd.paru1 as pph_paru1 preserving type)` |
| `WorkCenterFmlaParamUnit2` | `cast(crhd.paru2 as pph_paru2 preserving type)` |
| `WorkCenterFmlaParamUnit3` | `cast(crhd.paru3 as pph_paru3 preserving type)` |
| `WorkCenterFmlaParamUnit4` | `cast(crhd.paru4 as pph_paru4 preserving type)` |
| `WorkCenterFmlaParamUnit5` | `cast(crhd.paru5 as pph_paru5 preserving type)` |
| `WorkCenterFmlaParamUnit6` | `cast(crhd.paru6 as pph_paru6 preserving type)` |
| `WrkCtrStdValMaintRule1` | `cast(crhd.vgm01 as pph_vgm01 preserving type)` |
| `WrkCtrStdValMaintRule2` | `cast(crhd.vgm02 as pph_vgm02 preserving type)` |
| `WrkCtrStdValMaintRule3` | `cast(crhd.vgm03 as pph_vgm03 preserving type)` |
| `WrkCtrStdValMaintRule4` | `cast(crhd.vgm04 as pph_vgm04 preserving type)` |
| `WrkCtrStdValMaintRule5` | `cast(crhd.vgm05 as pph_vgm05 preserving type)` |
| `WrkCtrStdValMaintRule6` | `cast(crhd.vgm06 as pph_vgm06 preserving type)` |
| `WrkCtrSetupSchedgFmla` | `cast(crhd.fort1 as ap_form_t1 preserving type)` |
| `WrkCtrProcgSchedgFmla` | `cast(crhd.fort2 as ap_form_t2 preserving type)` |
| `WrkCtrTeardownSchedgFmla` | `cast(crhd.fort3 as ap_form_t3 preserving type)` |
| `WrkCtrIntProcgSchedgFmla` | `cast(crhd.fortn as wrkctrintprocgschedgfmla preserving type)` |
| `_Plant` | *Association* |
| `_WorkCenterType` | *Association* |
| `_Text` | *Association* |
| `_WorkCenterCostCenter` | *Association* |
| `_CostCenter` | *Association* |
| `_WorkCenter` | *Association* |
| `_WorkCenterResponsible` | *Association* |
| `_WorkCenterCategory` | *Association* |
| `_ProductionResourceType` | *Association* |
| `_WorkCenterUsage` | *Association* |
| `_WorkCenterLocation` | *Association* |
| `_WorkCenterLocationGroup` | *Association* |
| `_Capacity` | *Association* |
| `_MachineType` | *Association* |
| `_OperationControlProfile` | *Association* |
| `_SupplyArea` | *Association* |
| `_WorkCenterSetupType` | *Association* |
| `_StandardTextInternalID` | *Association* |
| `_EmployeeWageGroup` | *Association* |
| `_EmployeeSuitability` | *Association* |
| `_ValidityStartDate` | *Association* |
| `_ValidityEndDate` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_StandardQueueDurationUnit` | *Association* |
| `_MinimumQueueDurationUnit` | *Association* |
| `_WorkQuantityUnit1` | *Association* |
| `_WorkQuantityUnit2` | *Association* |
| `_WorkQuantityUnit3` | *Association* |
| `_WorkQuantityUnit4` | *Association* |
| `_WorkQuantityUnit5` | *Association* |
| `_WorkQuantityUnit6` | *Association* |
| `_StandardWorkQuantityUnit` | *Association* |
| `_StandardWorkFmlaParamGroup` | *Association* |
| `_WorkCenterFmlaParamUnit1` | *Association* |
| `_WorkCenterFmlaParamUnit2` | *Association* |
| `_WorkCenterFmlaParamUnit3` | *Association* |
| `_WorkCenterFmlaParamUnit4` | *Association* |
| `_WorkCenterFmlaParamUnit5` | *Association* |
| `_WorkCenterFmlaParamUnit6` | *Association* |
| `_StandardWorkFormulaParameter1` | *Association* |
| `_StandardWorkFormulaParameter2` | *Association* |
| `_StandardWorkFormulaParameter3` | *Association* |
| `_StandardWorkFormulaParameter4` | *Association* |
| `_StandardWorkFormulaParameter5` | *Association* |
| `_StandardWorkFormulaParameter6` | *Association* |
| `_WrkCtrSchedgSetupFormula` | *Association* |
| `_WrkCtrProcgSchedgFormula` | *Association* |
| `_WrkCtrTeardownSchedgFormula` | *Association* |
| `_WrkCtrIntProcgSchedgFormula` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [1..1] |
| `_Text` | `I_WorkCenterText` | [0..*] |
| `_WorkCenterCostCenter` | `I_WorkCenterCostCenter` | [0..1] |
| `_CostCenter` | `I_WorkCenterCostCenter` | [0..*] |
| `_WorkCenter` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_WorkCenterResponsible` | `I_WorkCenterResponsible` | [0..1] |
| `_WorkCenterCategory` | `I_WorkCenterCategory` | [1..1] |
| `_ProductionResourceType` | `I_ProductionResourceType` | [1..1] |
| `_WorkCenterUsage` | `I_ProductionResourceUsage` | [0..1] |
| `_WorkCenterLocation` | `I_WorkCenterLocation` | [0..1] |
| `_WorkCenterLocationGroup` | `I_WorkCenterLocationGroup` | [0..1] |
| `_Capacity` | `I_Capacity` | [1..1] |
| `_MachineType` | `I_MachineType` | [1..1] |
| `_OperationControlProfile` | `I_OperationControlProfile` | [0..1] |
| `_SupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_WorkCenterSetupType` | `I_OperationSetupType` | [0..1] |
| `_StandardTextInternalID` | `I_OperationStandardText` | [0..1] |
| `_EmployeeWageGroup` | `I_EmployeeWageGroup` | [0..1] |
| `_EmployeeSuitability` | `I_EmployeeSuitability` | [0..1] |
| `_ValidityStartDate` | `I_CalendarDate` | [0..1] |
| `_ValidityEndDate` | `I_CalendarDate` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_StandardQueueDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MinimumQueueDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit1` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit2` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit3` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit4` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit5` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit6` | `I_UnitOfMeasure` | [0..1] |
| `_StandardWorkQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_StandardWorkFmlaParamGroup` | `I_StandardWorkFmlaParamGroup` | [0..1] |
| `_WorkCenterFmlaParamUnit1` | `I_UnitOfMeasure` | [0..1] |
| `_WorkCenterFmlaParamUnit2` | `I_UnitOfMeasure` | [0..1] |
| `_WorkCenterFmlaParamUnit3` | `I_UnitOfMeasure` | [0..1] |
| `_WorkCenterFmlaParamUnit4` | `I_UnitOfMeasure` | [0..1] |
| `_WorkCenterFmlaParamUnit5` | `I_UnitOfMeasure` | [0..1] |
| `_WorkCenterFmlaParamUnit6` | `I_UnitOfMeasure` | [0..1] |
| `_StandardWorkFormulaParameter1` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter2` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter3` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter4` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter5` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter6` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_WrkCtrSchedgSetupFormula` | `I_ProdnRsceToolQtyCalcFormula` | [0..1] |
| `_WrkCtrProcgSchedgFormula` | `I_ProdnRsceToolQtyCalcFormula` | [0..1] |
| `_WrkCtrTeardownSchedgFormula` | `I_ProdnRsceToolQtyCalcFormula` | [0..1] |
| `_WrkCtrIntProcgSchedgFormula` | `I_ProdnRsceToolQtyCalcFormula` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWORKCENTER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_WorkCenterResponsible', '_LastChangedByUser' ]
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkCenterInternalID'
@ObjectModel.semanticKey: ['WorkCenter']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center'
@ObjectModel.sapObjectNodeType.name: 'WorkCenter'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_WorkCenter
  as select from crhd as crhd

  association [1..1] to I_Plant                        as _Plant                         on  $projection.Plant = _Plant.Plant
  association [1..1] to I_WorkCenterType               as _WorkCenterType                on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..*] to I_WorkCenterText               as _Text                          on  $projection.WorkCenterInternalID = _Text.WorkCenterInternalID
                                                                                         and $projection.WorkCenterTypeCode   = _Text.WorkCenterTypeCode
  association [0..1] to I_WorkCenterCostCenter         as _WorkCenterCostCenter          on  $projection.WorkCenterInternalID           = _WorkCenterCostCenter.WorkCenterInternalID
                                                                                         and $projection.WorkCenterTypeCode             = _WorkCenterCostCenter.WorkCenterTypeCode
                                                                                         and $projection.ValidityEndDate                = _WorkCenterCostCenter.ValidityEndDate
                                                                                         and _WorkCenterCostCenter.CostCenterAllocation = '0001'
  association [0..*] to I_WorkCenterCostCenter         as _CostCenter                    on  $projection.WorkCenterInternalID = _CostCenter.WorkCenterInternalID
                                                                                         and $projection.WorkCenterTypeCode   = _CostCenter.WorkCenterTypeCode
  association [0..1] to I_WorkCenterBySemanticKey      as _WorkCenter                    on  $projection.Plant      = _WorkCenter.Plant
                                                                                         and $projection.WorkCenter = _WorkCenter.WorkCenter
  association [0..1] to I_WorkCenterResponsible        as _WorkCenterResponsible         on  $projection.Plant                 = _WorkCenterResponsible.Plant
                                                                                         and $projection.WorkCenterResponsible = _WorkCenterResponsible.WorkCenterResponsible
  association [1..1] to I_WorkCenterCategory           as _WorkCenterCategory            on  $projection.WorkCenterCategoryCode = _WorkCenterCategory.WorkCenterCategoryCode
  association [1..1] to I_ProductionResourceType       as _ProductionResourceType        on  $projection.WorkCenterTypeCode = _ProductionResourceType.ProductionResourceType
  association [0..1] to I_ProductionResourceUsage      as _WorkCenterUsage               on  $projection.WorkCenterUsage = _WorkCenterUsage.ProductionResourceUsage
  association [0..1] to I_WorkCenterLocation           as _WorkCenterLocation            on  $projection.Plant              = _WorkCenterLocation.WorkCenterPlant
                                                                                         and $projection.WorkCenterLocation = _WorkCenterLocation.WorkCenterLocation
  association [0..1] to I_WorkCenterLocationGroup      as _WorkCenterLocationGroup       on  $projection.Plant                   = _WorkCenterLocationGroup.WorkCenterPlant
                                                                                         and $projection.WorkCenterLocationGroup = _WorkCenterLocationGroup.WorkCenterLocationGroup
  association [1..1] to I_Capacity                     as _Capacity                      on  $projection.CapacityInternalID = _Capacity.CapacityInternalID
  association [1..1] to I_MachineType                  as _MachineType                   on  $projection.MachineType = _MachineType.MachineType
  association [0..1] to I_OperationControlProfile      as _OperationControlProfile       on  $projection.OperationControlProfile = _OperationControlProfile.OperationControlProfile
  association [0..1] to I_ProductionSupplyArea         as _SupplyArea                    on  $projection.SupplyArea = _SupplyArea.ProductionSupplyArea
                                                                                         and $projection.Plant      = _SupplyArea.Plant
  association [0..1] to I_OperationSetupType           as _WorkCenterSetupType           on  $projection.WorkCenterSetupType = _WorkCenterSetupType.OperationSetupType
                                                                                         and $projection.Plant               = _WorkCenterSetupType.Plant
  association [0..1] to I_OperationStandardText        as _StandardTextInternalID        on  $projection.StandardTextInternalID = _StandardTextInternalID.OperationStandardTextCode
  association [0..1] to I_EmployeeWageGroup            as _EmployeeWageGroup             on  $projection.Plant             = _EmployeeWageGroup.Plant
                                                                                         and $projection.EmployeeWageGroup = _EmployeeWageGroup.EmployeeWageGroup
  association [0..1] to I_EmployeeSuitability          as _EmployeeSuitability           on  $projection.Plant               = _EmployeeSuitability.Plant
                                                                                         and $projection.EmployeeSuitability = _EmployeeSuitability.EmployeeSuitability
  association [0..1] to I_CalendarDate                 as _ValidityStartDate             on  $projection.ValidityStartDate = _ValidityStartDate.CalendarDate
  association [0..1] to I_CalendarDate                 as _ValidityEndDate               on  $projection.ValidityEndDate = _ValidityEndDate.CalendarDate
  association [0..1] to I_User                         as _LastChangedByUser             on  $projection.WorkCenterLastChangedBy = _LastChangedByUser.UserID
  association [0..1] to I_UnitOfMeasure                as _StandardQueueDurationUnit     on  $projection.WorkCenterStdQueueDurnUnit = _StandardQueueDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _MinimumQueueDurationUnit      on  $projection.WorkCenterMinimumQueueDurnUnit = _MinimumQueueDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit1             on  $projection.WorkCenterStandardWorkQtyUnit1 = _WorkQuantityUnit1.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit2             on  $projection.WorkCenterStandardWorkQtyUnit2 = _WorkQuantityUnit2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit3             on  $projection.WorkCenterStandardWorkQtyUnit3 = _WorkQuantityUnit3.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit4             on  $projection.WorkCenterStandardWorkQtyUnit4 = _WorkQuantityUnit4.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit5             on  $projection.WorkCenterStandardWorkQtyUnit5 = _WorkQuantityUnit5.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit6             on  $projection.WorkCenterStandardWorkQtyUnit6 = _WorkQuantityUnit6.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StandardWorkQuantityUnit      on  $projection.StandardWorkQuantityUnit = _StandardWorkQuantityUnit.UnitOfMeasure

  association [0..1] to I_StandardWorkFmlaParamGroup   as _StandardWorkFmlaParamGroup    on  $projection.StandardWorkFormulaParamGroup = _StandardWorkFmlaParamGroup.StandardWorkFormulaParamGroup

  association [0..1] to I_UnitOfMeasure                as _WorkCenterFmlaParamUnit1      on  $projection.WorkCenterFmlaParamUnit1 = _WorkCenterFmlaParamUnit1.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkCenterFmlaParamUnit2      on  $projection.WorkCenterFmlaParamUnit2 = _WorkCenterFmlaParamUnit2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkCenterFmlaParamUnit3      on  $projection.WorkCenterFmlaParamUnit3 = _WorkCenterFmlaParamUnit3.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkCenterFmlaParamUnit4      on  $projection.WorkCenterFmlaParamUnit3 = _WorkCenterFmlaParamUnit4.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkCenterFmlaParamUnit5      on  $projection.WorkCenterFmlaParamUnit5 = _WorkCenterFmlaParamUnit5.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkCenterFmlaParamUnit6      on  $projection.WorkCenterFmlaParamUnit6 = _WorkCenterFmlaParamUnit6.UnitOfMeasure

  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter1 on  $projection.WorkCenterFormulaParam1 = _StandardWorkFormulaParameter1.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter2 on  $projection.WorkCenterFormulaParam2 = _StandardWorkFormulaParameter2.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter3 on  $projection.WorkCenterFormulaParam3 = _StandardWorkFormulaParameter3.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter4 on  $projection.WorkCenterFormulaParam4 = _StandardWorkFormulaParameter4.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter5 on  $projection.WorkCenterFormulaParam5 = _StandardWorkFormulaParameter5.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter6 on  $projection.WorkCenterFormulaParam6 = _StandardWorkFormulaParameter6.StandardWorkFormulaParameter

  association [0..1] to I_ProdnRsceToolQtyCalcFormula  as _WrkCtrSchedgSetupFormula      on  $projection.WrkCtrSetupSchedgFmla = _WrkCtrSchedgSetupFormula.ProdnRsceToolQtyCalcFormula
  association [0..1] to I_ProdnRsceToolQtyCalcFormula  as _WrkCtrProcgSchedgFormula      on  $projection.WrkCtrProcgSchedgFmla = _WrkCtrProcgSchedgFormula.ProdnRsceToolQtyCalcFormula
  association [0..1] to I_ProdnRsceToolQtyCalcFormula  as _WrkCtrTeardownSchedgFormula   on  $projection.WrkCtrTeardownSchedgFmla = _WrkCtrTeardownSchedgFormula.ProdnRsceToolQtyCalcFormula
  association [0..1] to I_ProdnRsceToolQtyCalcFormula  as _WrkCtrIntProcgSchedgFormula   on  $projection.WrkCtrIntProcgSchedgFmla = _WrkCtrIntProcgSchedgFormula.ProdnRsceToolQtyCalcFormula
{
      @ObjectModel.text.association: '_Text'
      // Key
  key crhd.objid                                                   as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
  key crhd.objty                                                   as WorkCenterTypeCode,

      // Attributes
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WrkCtrBySemanticKeyStdVH', element: 'WorkCenter' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      cast(crhd.arbpl as pph_arbpl preserving type)                as WorkCenter,
      crhd.lvorm                                                   as WorkCenterIsToBeDeleted,
      crhd.xsprr                                                   as WorkCenterIsLocked,
      crhd.xkost                                                   as WorkCenterIsMntndForCosting,
      crhd.xterm                                                   as WorkCenterIsMntndForScheduling,
      crhd.rsanz                                                   as NumberOfConfirmationSlips,
      crhd.ppskz                                                   as AdvancedPlanningIsSupported,
      crhd.sntype                                                  as ShiftNoteType,
      crhd.srtype                                                  as ShiftReportType,

      // Admin data
      @Semantics.user.lastChangedBy: true
      crhd.aenam_grnd                                              as WorkCenterLastChangedBy,
      @Semantics.systemDateTime.lastChangedAt: true
      case when crhd.lastchange_datetime = 0 or crhd.lastchange_datetime is null then
        case when crhd.aedat_grnd is null then
             cast(dats_tims_to_tstmp(cast('20190101' as dats), cast('120000'as tims), 'UTC', $session.client, 'NULL') as cr_lastchange_datetime)
        else
             cast(dats_tims_to_tstmp(crhd.aedat_grnd, cast('120000'as tims), 'UTC', $session.client, 'NULL') as cr_lastchange_datetime)
        end
      else
            crhd.lastchange_datetime
      end                                                          as WorkCenterLastChangeDateTime,

      // Assignments
      @ObjectModel.foreignKey.association: '_WorkCenterCategory'
      crhd.verwe                                                   as WorkCenterCategoryCode,
      @ObjectModel.foreignKey.association: '_WorkCenterLocation'
      crhd.stand                                                   as WorkCenterLocation,
      @ObjectModel.foreignKey.association: '_WorkCenterLocationGroup'
      crhd.ortgr                                                   as WorkCenterLocationGroup,
      @ObjectModel.foreignKey.association: '_WorkCenterUsage'
      cast(crhd.planv as pph_ap_planv preserving type)             as WorkCenterUsage,
      @ObjectModel.foreignKey.association: '_WorkCenterResponsible'
      crhd.veran                                                   as WorkCenterResponsible,
      @ObjectModel.foreignKey.association: '_Plant'
      crhd.werks                                                   as Plant,
      @ObjectModel.foreignKey.association: '_SupplyArea'
      crhd.prvbe                                                   as SupplyArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      crhd.kapid                                                   as CapacityInternalID,
      @ObjectModel.foreignKey.association: '_MachineType'
      crhd.matyp                                                   as MachineType,
      @ObjectModel.foreignKey.association: '_OperationControlProfile'
      cast(crhd.steus as pph_steus preserving type)                as OperationControlProfile,
      crhd.rgekz                                                   as MatlCompIsMarkedForBackflush,
      @ObjectModel.foreignKey.association: '_WorkCenterSetupType'
      cast(crhd.rasch as workcentersetuptype preserving type)      as WorkCenterSetupType,
      cast(crhd.slwid as pph_slwid preserving type)                as FreeDefinedTableFieldSemantic,
      crhd.stobj                                                   as ObjectInternalID,
      @ObjectModel.foreignKey.association: '_StandardTextInternalID'
      cast(crhd.ktsch as pph_ktsch preserving type)                as StandardTextInternalID,

      // Assignments HR
      cast(crhd.loart as pph_loart preserving type)                as EmployeeWageType,
      @ObjectModel.foreignKey.association: '_EmployeeWageGroup'
      cast(crhd.logrp as pph_logrp preserving type)                as EmployeeWageGroup,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'
      cast(crhd.qualf as pph_qualf preserving type)                as EmployeeSuitability,
      crhd.loanz                                                   as NumberOfTimeTickets,
      cast(crhd.hrplvar as pph_plvar preserving type)              as PlanVersion,
      cast(crhd.hroid  as wrkctrhumrsceobjid preserving type)      as WrkCtrHumRsceObjID,

      // Dates
      @Semantics.businessDate.from
      cast(crhd.begda as pph_begda preserving type)                as ValidityStartDate,
      @Semantics.businessDate.to
      cast(crhd.endda as pph_endda preserving type)                as ValidityEndDate,

      // Reference indicators
      crhd.ktsch_ref                                               as StandardTextIDIsReferenced,
      crhd.loart_ref                                               as EmployeeWageTypeIsReferenced,
      crhd.loanz_ref                                               as NmbrOfTimeTicketsIsReferenced,
      crhd.logrp_ref                                               as EmployeeWageGroupIsReferenced,
      crhd.qualf_ref                                               as EmplSuitabilityIsReferenced,
      crhd.rasch_ref                                               as WorkCenterSetpTypeIsReferenced,
      crhd.steus_ref                                               as OpControlProfileIsReferenced,
      crhd.rsanz_ref                                               as NumberOfConfSlipsIsReferenced,

      // Durations
      @Semantics.unitOfMeasure: true
      crhd.zeiwn                                                   as WorkCenterStdQueueDurnUnit,
      crhd.zwnor                                                   as WorkCenterStandardQueueDurn,
      @Semantics.unitOfMeasure: true
      crhd.zeiwm                                                   as WorkCenterMinimumQueueDurnUnit,
      crhd.zwmin                                                   as WorkCenterMinimumQueueDuration,

      // Unit of Measures
      @Semantics.unitOfMeasure: true
      cast(crhd.vge01 as pph_vge01 preserving type)                as WorkCenterStandardWorkQtyUnit1,
      @Semantics.unitOfMeasure: true
      cast(crhd.vge02 as pph_vge02 preserving type)                as WorkCenterStandardWorkQtyUnit2,
      @Semantics.unitOfMeasure: true
      cast(crhd.vge03 as pph_vge03 preserving type)                as WorkCenterStandardWorkQtyUnit3,
      @Semantics.unitOfMeasure: true
      cast(crhd.vge04 as pph_vge04 preserving type)                as WorkCenterStandardWorkQtyUnit4,
      @Semantics.unitOfMeasure: true
      cast(crhd.vge05 as pph_vge05 preserving type)                as WorkCenterStandardWorkQtyUnit5,
      @Semantics.unitOfMeasure: true
      cast(crhd.vge06 as pph_vge06 preserving type)                as WorkCenterStandardWorkQtyUnit6,
      @Semantics.unitOfMeasure: true
      crhd.vgarb                                                   as StandardWorkQuantityUnit,

      //Standard Value Key
      @ObjectModel.foreignKey.association: '_StandardWorkFmlaParamGroup'
      crhd.vgwts                                                   as StandardWorkFormulaParamGroup,
      crhd.s_labor_track                                           as LaborTrackingIsRequired,

      // Formula Parameters
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter1'
      cast(crhd.par01 as pph_par01 preserving type)                as WorkCenterFormulaParam1,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter2'
      cast(crhd.par02 as pph_par02 preserving type)                as WorkCenterFormulaParam2,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter3'
      cast(crhd.par03 as pph_par03 preserving type)                as WorkCenterFormulaParam3,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter4'
      cast(crhd.par04 as pph_par04 preserving type)                as WorkCenterFormulaParam4,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter5'
      cast(crhd.par05 as pph_par05 preserving type)                as WorkCenterFormulaParam5,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter6'
      cast(crhd.par06 as pph_par06 preserving type)                as WorkCenterFormulaParam6,

      // Formula Parameters Value
      @Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit1'
      cast(crhd.parv1 as pph_parv1 preserving type)                as WorkCenterFmlaParamValue1,
      @Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit2'
      cast(crhd.parv2 as pph_parv2 preserving type)                as WorkCenterFmlaParamValue2,
      @Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit3'
      cast(crhd.parv3 as pph_parv3 preserving type)                as WorkCenterFmlaParamValue3,
      @Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit4'
      cast(crhd.parv4 as pph_parv4 preserving type)                as WorkCenterFmlaParamValue4,
      @Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit5'
      cast(crhd.parv5 as pph_parv5 preserving type)                as WorkCenterFmlaParamValue5,
      @Semantics.quantity.unitOfMeasure : 'WorkCenterFmlaParamUnit6'
      cast(crhd.parv6 as pph_parv6 preserving type)                as WorkCenterFmlaParamValue6,

      // Formula Parameters Unit
      @Semantics.unitOfMeasure: true
      cast(crhd.paru1 as pph_paru1 preserving type)                as WorkCenterFmlaParamUnit1,
      @Semantics.unitOfMeasure: true
      cast(crhd.paru2 as pph_paru2 preserving type)                as WorkCenterFmlaParamUnit2,
      @Semantics.unitOfMeasure: true
      cast(crhd.paru3 as pph_paru3 preserving type)                as WorkCenterFmlaParamUnit3,
      @Semantics.unitOfMeasure: true
      cast(crhd.paru4 as pph_paru4 preserving type)                as WorkCenterFmlaParamUnit4,
      @Semantics.unitOfMeasure: true
      cast(crhd.paru5 as pph_paru5 preserving type)                as WorkCenterFmlaParamUnit5,
      @Semantics.unitOfMeasure: true
      cast(crhd.paru6 as pph_paru6 preserving type)                as WorkCenterFmlaParamUnit6,

      // Standard Value Maintenance Rules
      cast(crhd.vgm01 as pph_vgm01 preserving type)                as WrkCtrStdValMaintRule1,
      cast(crhd.vgm02 as pph_vgm02 preserving type)                as WrkCtrStdValMaintRule2,
      cast(crhd.vgm03 as pph_vgm03 preserving type)                as WrkCtrStdValMaintRule3,
      cast(crhd.vgm04 as pph_vgm04 preserving type)                as WrkCtrStdValMaintRule4,
      cast(crhd.vgm05 as pph_vgm05 preserving type)                as WrkCtrStdValMaintRule5,
      cast(crhd.vgm06 as pph_vgm06 preserving type)                as WrkCtrStdValMaintRule6,

      // Work Center Scheduling Formulas
      @ObjectModel.foreignKey.association: '_WrkCtrSchedgSetupFormula'
      cast(crhd.fort1 as ap_form_t1 preserving type)               as WrkCtrSetupSchedgFmla,
      @ObjectModel.foreignKey.association: '_WrkCtrProcgSchedgFormula'
      cast(crhd.fort2 as ap_form_t2 preserving type)               as WrkCtrProcgSchedgFmla,
      @ObjectModel.foreignKey.association: '_WrkCtrTeardownSchedgFormula'
      cast(crhd.fort3 as ap_form_t3 preserving type)               as WrkCtrTeardownSchedgFmla,
      @ObjectModel.foreignKey.association: '_WrkCtrIntProcgSchedgFormula'
      cast(crhd.fortn as wrkctrintprocgschedgfmla preserving type) as WrkCtrIntProcgSchedgFmla,

      // Associations
      _Plant,
      _WorkCenter,
      _WorkCenterType,
      _WorkCenterResponsible,
      _WorkCenterCostCenter,
      _WorkCenterCategory,
      _WorkCenterLocation,
      _WorkCenterLocationGroup,
      _WorkCenterUsage,
      _ProductionResourceType,
      _Text,
      _Capacity,
      _MachineType,
      _OperationControlProfile,
      _SupplyArea,
      _WorkCenterSetupType,
      _StandardTextInternalID,
      _EmployeeWageGroup,
      _EmployeeSuitability,
      _ValidityStartDate,
      _ValidityEndDate,
      _LastChangedByUser,
      _StandardQueueDurationUnit,
      _MinimumQueueDurationUnit,
      _WorkQuantityUnit1,
      _WorkQuantityUnit2,
      _WorkQuantityUnit3,
      _WorkQuantityUnit4,
      _WorkQuantityUnit5,
      _WorkQuantityUnit6,
      _StandardWorkQuantityUnit,
      _StandardWorkFmlaParamGroup,
      _WorkCenterFmlaParamUnit1,
      _WorkCenterFmlaParamUnit2,
      _WorkCenterFmlaParamUnit3,
      _WorkCenterFmlaParamUnit4,
      _WorkCenterFmlaParamUnit5,
      _WorkCenterFmlaParamUnit6,
      _StandardWorkFormulaParameter1,
      _StandardWorkFormulaParameter2,
      _StandardWorkFormulaParameter3,
      _StandardWorkFormulaParameter4,
      _StandardWorkFormulaParameter5,
      _StandardWorkFormulaParameter6,
      _WrkCtrSchedgSetupFormula,
      _WrkCtrProcgSchedgFormula,
      _WrkCtrTeardownSchedgFormula,
      _WrkCtrIntProcgSchedgFormula,
      _CostCenter
}
where
  objty = 'A'; // Work Centers only
```
