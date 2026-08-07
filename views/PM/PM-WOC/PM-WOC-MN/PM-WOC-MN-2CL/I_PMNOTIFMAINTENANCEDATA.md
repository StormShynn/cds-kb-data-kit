---
name: I_PMNOTIFMAINTENANCEDATA
description: Pmnotifmaintenancedata
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_PMNOTIFMAINTENANCEDATA

**Pmnotifmaintenancedata**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  | `qmnum` |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  | `iloan` |
| `MalfunctionEffect` |  | |  | `auswk` |
| `Equipment` |  | |  | `equnr` |
| `Assembly` |  | |  | `bautl` |
| `MaintenancePlanningPlant` |  | |  | `iwerk` |
| `MaintenancePlannerGroup` |  | |  | `}] qmih.ingrp` |
| `LocationDescription` |  | |  | `loc_desc` |
| `MaintenanceObjectIsDown` |  | |  | `msaus` |
| `MalfunctionStartDate` |  | |  | `ausvn` |
| `MalfunctionEndDate` |  | |  | `ausbs` |
| `MalfunctionStartTime` |  | |  | `auztv` |
| `MalfunctionEndTime` |  | |  | `auztb` |
| `InspectionDate` |  | |  | `datan` |
| `InspectedByUser` |  | |  | `inspk` |
| `MaintenanceRevision` |  | |  | `revnr` |
| `MaintObjectDowntimeDuration` |  | |  | `auszt` |
| `MaintObjDowntimeDurationUnit` |  | |  | `maueh` |
| `SalesDocument` |  | |  | `kdauf` |
| `SalesDocumentItem` |  | |  | `kdpos` |
| `MaintenancePlan` |  | |  | `warpl` |
| `MaintenanceItem` |  | |  | `wapos` |
| `MaintenanceActivityType` |  | |  | `cast(qmih.ilart as eam_maint_activity_type)` |
| `RelevantFunctionalLocation` |  | |  | `btpln` |
| `RelevantEquipment` |  | |  | `bequi` |
| `AvailyBeforeMalfunctionPercent` |  | |  | `verfv` |
| `AvailyAfterMalfunctionPercent` |  | |  | `verfn` |
| `AvailyAfterConclusionPercent` |  | |  | `verfm` |
| `SystConditionBeforeMalfunction` |  | |  | `anlzv` |
| `SystConditionAfterMalfunction` |  | |  | `anlzn` |
| `SystConditionAfterCompletion` |  | |  | `anlze` |
| `LatestAcceptableCompletionDate` |  | |  | `cast(qmih.lacd_date as vdm_lacd_date preserving type)` |
| `NotificationPersonResponsible` |  | |  | `notificationpersonresponsible` |
| `MaintNotifProcessPhaseCode` |  | |  | `maintnotifovrlprocphase` |
| `MaintNotifProcessSubPhaseCode` |  | |  | `maintnotifovrlprocsubphase` |
| `MaintNotifRejectionReasonCode` |  | |  | `notifrejectionreasoncode` |
| `MaintenancePlanCallNumber` |  | |  | `abnum` |
| `MaintenanceTaskListType` |  | |  | `plnty` |
| `TaskListGroup` |  | |  | `plnnr` |
| `TaskListGroupCounter` |  | |  | `plnal` |
| `MaintNotifDetectionCatalog` |  | |  | `detectioncatalog` |
| `MaintNotifDetectionCodeGroup` |  | |  | `detectioncodegroup` |
| `MaintNotifDetectionCode` |  | |  | `detectioncode` |
| `MaintNotifProcessingContext` |  | |  | `maintnotifprocessingcontext` |
| `PreviousFinalDueDate` |  | |  | `old_lacd_date` |
| `_LocationAccountAssignment` | | ✓ | | |
| `_MalfunctionEffect` | | ✓ | | |
| `_MaintenanceObjectIsDown` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |
| `_Equipment` | | ✓ | | |
| `_RelevantEquipment` | | ✓ | | |
| `_RelevantFunctionalLocation` | | ✓ | | |
| `_MaintenancePlanningPlant` | | ✓ | | |
| `_MaintenancePlanPlant` | | ✓ | | |
| `_InspectedByUser` | | ✓ | | |
| `_MaintenancePlannerGroup` | | ✓ | | |
| `_Assembly` | | ✓ | | |
| `_MaintenanceNotification` | | ✓ | | |
| `_MaintenancePlan` | | ✓ | | |
| `_MaintenanceItem` | | ✓ | | |
| `_MaintenanceActivityType` | | ✓ | | |
| `_MaintenanceRevision` | | ✓ | | |
| `_SubPhase` | | ✓ | | |
| `_Phase` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocationAccountAssignment` | `I_LocationAccountAssignment` | [0..1] |
| `_MalfunctionEffect` | `I_MalfunctionEffect` | [0..1] |
| `_MaintenanceObjectIsDown` | `I_Indicator` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_RelevantEquipment` | `I_Equipment` | [0..1] |
| `_RelevantFunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_MaintenancePlanningPlant` | `I_Plant` | [0..1] |
| `_MaintenancePlanPlant` | `I_MaintenancePlanPlant` | [0..1] |
| `_InspectedByUser` | `I_User` | [0..1] |
| `_MaintenancePlannerGroup` | `I_MaintenancePlannerGroup` | [0..1] |
| `_Assembly` | `I_Material` | [0..1] |
| `_MaintenanceNotification` | `I_MaintenanceNotification` | [1..1] |
| `_MaintenancePlan` | `I_MaintenancePlan` | [0..1] |
| `_MaintenanceItem` | `I_MaintenanceItem` | [0..1] |
| `_MaintenanceActivityType` | `I_MaintenanceActivityType` | [0..1] |
| `_MaintenanceRevision` | `I_MaintenanceRevision` | [0..1] |
| `_SubPhase` | `I_EAMProcessSubPhase` | [0..1] |
| `_Phase` | `I_EAMProcessPhase` | [0..1] |
| `_NotifMaintenanceDataExtension` | `E_PMNotifMaintenanceData` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Notification Maintenance Data'
--@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog: { sqlViewName: 'IPMNTFMAINTDATA', compiler.compareFilter } // N3273656 - remove 'preserveKey'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations:['_LocationAccountAssignment']

@ObjectModel.representativeKey: 'MaintenanceNotification'
@ObjectModel.semanticKey:  [ 'MaintenanceNotification' ]

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE 
@Metadata.ignorePropagatedAnnotations:true

define view I_PMNotifMaintenanceData
  as select from qmih
  association [0..1] to I_LocationAccountAssignment as _LocationAccountAssignment     on  _LocationAccountAssignment.MaintObjectLocAcctAssgmtNmbr = $projection.MaintObjectLocAcctAssgmtNmbr
  association [0..1] to I_MalfunctionEffect         as _MalfunctionEffect             on  _MalfunctionEffect.MalfunctionEffect = $projection.MalfunctionEffect
  association [0..1] to I_Indicator                 as _MaintenanceObjectIsDown       on  $projection.MaintenanceObjectIsDown = _MaintenanceObjectIsDown.IndicatorValue
  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure                 on  $projection.MaintObjDowntimeDurationUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_Equipment                 as _Equipment                     on  $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_Equipment                 as _RelevantEquipment             on  $projection.RelevantEquipment = _RelevantEquipment.Equipment
  association [0..1] to I_FunctionalLocation        as _RelevantFunctionalLocation    on  $projection.RelevantFunctionalLocation = _RelevantFunctionalLocation.FunctionalLocation
  //Obsolete-C1 released association not intended to used and replaced with I_MaintenancePlanPlant
  association [0..1] to I_Plant                     as _MaintenancePlanningPlant      on  $projection.MaintenancePlanningPlant = _MaintenancePlanningPlant.Plant
  /////////////////////////////////////////////////////////////////////////////////
  association [0..1] to I_MaintenancePlanPlant      as _MaintenancePlanPlant          on  $projection.MaintenancePlanningPlant = _MaintenancePlanPlant.MaintenancePlanningPlant
  association [0..1] to I_User                      as _InspectedByUser               on  $projection.InspectedByUser = _InspectedByUser.UserID
  association [0..1] to I_MaintenancePlannerGroup   as _MaintenancePlannerGroup       on  $projection.MaintenancePlannerGroup  = _MaintenancePlannerGroup.MaintenancePlannerGroup
                                                                                      and $projection.MaintenancePlanningPlant = _MaintenancePlannerGroup.MaintenancePlanningPlant
  association [0..1] to I_Material                  as _Assembly                      on  $projection.Assembly = _Assembly.Material
  association [1..1] to I_MaintenanceNotification   as _MaintenanceNotification       on  $projection.MaintenanceNotification = _MaintenanceNotification.MaintenanceNotification
  association [0..1] to I_MaintenancePlan           as _MaintenancePlan               on  $projection.MaintenancePlan = _MaintenancePlan.MaintenancePlan
  association [0..1] to I_MaintenanceItem           as _MaintenanceItem               on  $projection.MaintenanceItem = _MaintenanceItem.MaintenanceItem
  // association [0..1] to I_MaintenanceItem           as _MaintenanceItem           on  $projection.MaintenancePlan = _MaintenanceItem.MaintenancePlan
  association [0..1] to I_MaintenanceActivityType   as _MaintenanceActivityType       on  $projection.MaintenanceActivityType = _MaintenanceActivityType.MaintenanceActivityType
  association [0..1] to I_MaintenanceRevision       as _MaintenanceRevision           on  $projection.MaintenancePlanningPlant = _MaintenanceRevision.MaintenancePlanningPlant
                                                                                      and $projection.MaintenanceRevision      = _MaintenanceRevision.MaintenanceRevision
  association [0..1] to I_EAMProcessSubPhase        as _SubPhase                      on  $projection.MaintNotifProcessSubPhaseCode = _SubPhase.EAMProcessSubPhaseCode
  association [0..1] to I_EAMProcessPhase           as _Phase                         on  $projection.MaintNotifProcessPhaseCode = _Phase.EAMProcessPhaseCode
  -- Extensions, do not expose as association:
  association [0..1] to E_PMNotifMaintenanceData    as _NotifMaintenanceDataExtension on  _NotifMaintenanceDataExtension.MaintenanceNotification = $projection.MaintenanceNotification
  

{
  key qmih.qmnum                                            as MaintenanceNotification,

      // Associations
      @ObjectModel.foreignKey.association: '_LocationAccountAssignment'
      qmih.iloan                                            as MaintObjectLocAcctAssgmtNmbr,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MalfunctionEffectStdVH',
                     element: 'MalfunctionEffect' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_MalfunctionEffect'
      qmih.auswk                                            as MalfunctionEffect,

      // Notification Reference Objects
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_EquipmentStdVH',
                     element: 'Equipment' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Equipment'
      qmih.equnr                                            as Equipment,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Assembly'
      qmih.bautl                                            as Assembly,

      @ObjectModel.foreignKey.association: '_MaintenancePlanPlant'
      qmih.iwerk                                            as MaintenancePlanningPlant,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaintPlnrGrpStdVH',
                     element: 'MaintenancePlannerGroup' },
          additionalBinding: [{ localElement: 'MaintenancePlanningPlant',
                                element: 'MaintenancePlanningPlant' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_MaintenancePlannerGroup'
      qmih.ingrp                                            as MaintenancePlannerGroup,
      qmih.loc_desc                                         as LocationDescription,
      @ObjectModel.foreignKey.association: '_MaintenanceObjectIsDown'
      qmih.msaus                                            as MaintenanceObjectIsDown,

      qmih.ausvn                                            as MalfunctionStartDate,
      qmih.ausbs                                            as MalfunctionEndDate,
      qmih.auztv                                            as MalfunctionStartTime,
      qmih.auztb                                            as MalfunctionEndTime,

      qmih.datan                                            as InspectionDate,
      qmih.inspk                                            as InspectedByUser,
      qmih.revnr                                            as MaintenanceRevision,


      @DefaultAggregation: #SUM
      //Semantics.quantity.unitOfMeasure: 'MaintObjDowntimeDurationUnit' - N3273656 - AUSZT is always in [sec]
      qmih.auszt                                            as MaintObjectDowntimeDuration, // [sec]

      @Semantics.unitOfMeasure: true
      qmih.maueh                                            as MaintObjDowntimeDurationUnit,

      qmih.kdauf                                            as SalesDocument,
      qmih.kdpos                                            as SalesDocumentItem,

      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaintenancePlanStdVH',
                     element: 'MaintenancePlan' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_MaintenancePlan'
      qmih.warpl                                            as MaintenancePlan,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaintenanceItemStdVH',
                     element: 'MaintenanceItem' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_MaintenanceItem'
      qmih.wapos                                            as MaintenanceItem,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaintActyTypeStdVH',
                     element: 'MaintenanceActivityType' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      cast(qmih.ilart as eam_maint_activity_type)           as MaintenanceActivityType,
      qmih.btpln                                            as RelevantFunctionalLocation,
      qmih.bequi                                            as RelevantEquipment,
      qmih.verfv                                            as AvailyBeforeMalfunctionPercent,
      qmih.verfn                                            as AvailyAfterMalfunctionPercent,
      qmih.verfm                                            as AvailyAfterConclusionPercent,
      qmih.anlzv                                            as SystConditionBeforeMalfunction,
      qmih.anlzn                                            as SystConditionAfterMalfunction,
      qmih.anlze                                            as SystConditionAfterCompletion,

      // IME: 2002 LACD
      cast(qmih.lacd_date as vdm_lacd_date preserving type) as LatestAcceptableCompletionDate,
      // IME: 2002 LACD

      qmih.notificationpersonresponsible                    as NotificationPersonResponsible,
      qmih.maintnotifovrlprocphase                          as MaintNotifProcessPhaseCode,
      qmih.maintnotifovrlprocsubphase                       as MaintNotifProcessSubPhaseCode,
     //Notification API 2011
      qmih.notifrejectionreasoncode                         as MaintNotifRejectionReasonCode,
      qmih.abnum                                            as MaintenancePlanCallNumber,
      qmih.plnty                                            as MaintenanceTaskListType,
      qmih.plnnr                                            as TaskListGroup,
      qmih.plnal                                            as TaskListGroupCounter,
     //Notification API 2011
     
     // Detection Catalog
     qmih.detectioncatalog                                  as MaintNotifDetectionCatalog,
     qmih.detectioncodegroup                                as MaintNotifDetectionCodeGroup,
     qmih.detectioncode                                     as MaintNotifDetectionCode,     
     //Detection Catalog
     //Maintenance Notification Processing Context
     qmih.maintnotifprocessingcontext                       as MaintNotifProcessingContext,
     
     //Previous Final Due Date
     qmih.old_lacd_date                                     as PreviousFinalDueDate,
      

      // Propagate association
      _MaintenanceNotification,
      _Equipment,
      _LocationAccountAssignment,
      _MalfunctionEffect,
      _MaintenanceObjectIsDown,
      _UnitOfMeasure,
      _MaintenancePlanningPlant, //Obsolete
      _MaintenancePlanPlant,
      _InspectedByUser,
      _MaintenancePlannerGroup,
      _Assembly,
      _MaintenancePlan,
      _MaintenanceItem,
      _MaintenanceActivityType,
      _MaintenanceRevision,
      _RelevantEquipment,
      _RelevantFunctionalLocation,
      _SubPhase,
      _Phase
}
```
