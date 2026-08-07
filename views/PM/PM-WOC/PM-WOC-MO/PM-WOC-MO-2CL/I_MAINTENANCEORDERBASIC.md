---
name: I_MAINTENANCEORDERBASIC
description: Maintenance OrderBASIC
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - maintenance-order
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDERBASIC

**Maintenance OrderBASIC**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  | `aufnr` |
| `MaintPriorityType` |  | |  | `artpr` |
| `MaintPriority` |  | |  | `priok` |
| `MaintenanceProcessingPhase` |  | |  | `iphas` |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  | `iloan` |
| `MaintenanceNotification` |  | |  | `qmnum` |
| `Equipment` |  | |  | `equnr` |
| `Assembly` |  | |  | `bautl` |
| `SerialNumber` |  | |  | `serialnr` |
| `MaintenancePlanningPlant` |  | |  | `iwerk` |
| `MaintenancePlannerGroup` |  | |  | `ingpr` |
| `MaintenanceRevision` |  | |  | `revnr` |
| `MaintenancePlan` |  | |  | `warpl` |
| `MaintenanceItem` |  | |  | `wapos` |
| `MaintenanceActivityType` |  | |  | `cast( afih.ilart as eam_maint_activity_type preserving type )` |
| `WorkCenterInternalID` |  | |  | `gewrk` |
| `WorkCenterTypeCode` |  | |  | `pm_objty` |
| `MaintOrderReferenceDate` |  | |  | `addat` |
| `MaintOrderReferenceTime` |  | |  | `aduhr` |
| `MainWorkCompletedDateTime` |  | |  | `mainworkcompleteddatetime` |
| `MaintenanceOrderPlanningCode` |  | |  | `plknz` |
| `OperationSystemCondition` |  | |  | `anlzu` |
| `ReferenceElement` |  | |  | `adpsp` |
| `MaintenanceItemObjectList` |  | |  | `obknr` |
| `MaintenanceOrderObjectList` |  | |  | `cast(afih.obknr as objknr preserving type )` |
| `PersonnelNumber` |  | |  | `cast(afih.aning as pernr_d )` |
| `MaintOrdProcmtIntegScenario` |  | |  | `maintordprocmtintegscenario` |
| `Material` |  | |  | `sermat` |
| `MaintOrderRoutingNumber` |  | |  | `aufpl` |
| `BusinessArea` |  | |  | `gsber` |
| `FunctionalArea` |  | |  | `func_area` |
| `MaintenanceOrderType` |  | |  | `auart` |
| `MaintenanceOrderCategory` |  | |  | `autyp` |
| `MaintenanceOrderDesc` |  | |  | `ktext` |
| `ControllingArea` |  | |  | `kokrs` |
| `CompanyCode` |  | |  | `bukrs` |
| `ResponsibleCostCenter` |  | |  | `cast(aufk.kostv as pph_kostl preserving type)` |
| `ProfitCenter` |  | |  | `prctr` |
| `ControllingObjectClass` |  | |  | `cast(aufk.scope as pph_scope preserving type)` |
| `TechnicalCompletionDate` |  | |  | `idat2` |
| `BasicSchedulingType` |  | |  | `terkz` |
| `OrdIsNotSchedldAutomatically` |  | |  | `nauterm` |
| `MaintOrdBasicStartDate` |  | |  | `gstrp` |
| `MaintOrdBasicStartTime` |  | |  | `gsuzp` |
| `MaintOrdBasicEndDate` |  | |  | `gltrp` |
| `MaintOrdBasicEndTime` |  | |  | `gluzp` |
| `ScheduledBasicStartDate` |  | |  | `gstrs` |
| `ScheduledBasicStartTime` |  | |  | `gsuzs` |
| `ScheduledBasicEndDate` |  | |  | `gltrs` |
| `ScheduledBasicEndTime` |  | |  | `gluzs` |
| `MaintOrdPersonResponsible` |  | |  | `maintordpersonresponsible` |
| `MaintenanceOrderInternalID` |  | |  | `objnr` |
| `TaskListGroup` |  | |  | `cast(afko.plnnr as billofoperations preserving type)` |
| `TaskListType` |  | |  | `cast(afko.plnty as billofoperationstype preserving type)` |
| `TaskListGroupCounter` |  | |  | `cast(afko.plnal as billofoperationsvariant preserving type)` |
| `MaintenancePlant` |  | |  | `sowrk` |
| `CreationDate` |  | |  | `erdat` |
| `CreationTime` |  | |  | `erfzeit` |
| `CreatedByUser` |  | |  | `ernam` |
| `OrderHasLongText` |  | |  | `cast( case when aufk.ltext = '' then '' else 'X' end as pph_aufltxt preserving type)` |
| `LastChangeByUser` |  | |  | `aenam` |
| `LastChangeDateTime` |  | |  | `changeddatetime` |
| `AdditionalDeviceData` |  | |  | `deviceid` |
| `WBSElementInternalID` |  | |  | `cast( aufk.pspel as vdm_wbs_element_internal preserving type )` |
| `ProjectInternalID` |  | |  | `cast( afko.pronr as ps_s4_proj_pspnr preserving type)` |
| `OrderProcessingGroup` |  | |  | `abkrs` |
| `SuperiorProjectNetwork` |  | |  | `aufnt` |
| `MainWorkCenter` |  | |  | `vaplz` |
| `MainWorkCenterPlant` |  | |  | `wawrk` |
| `CostingSheet` |  | |  | `kalsm` |
| `Currency` |  | |  | `waers` |
| `LatestAcceptableCompletionDate` |  | |  | `cast(afih.lacd_date as vdm_lacd_date preserving type )` |
| `MaintOrdProcessPhaseCode` |  | |  | `maintordovrlprocphase` |
| `MaintOrdProcessSubPhaseCode` |  | |  | `maintordovrlprocsubphase` |
| `MaintOrderProcessingContext` |  | |  | `maintorderprocessingcontext` |
| `ServiceDocumentType` |  | |  | `service_doc_type` |
| `ServiceDocument` |  | |  | `service_doc_id` |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` |
| `ConditionUsage` |  | |  | `kvewe` |
| `ConditionApplication` |  | |  | `kappl` |
| `MaintenanceOrderOverheadCode` |  | |  | `zschl` |
| `PlannedCostsCostingVariant` |  | |  | `klvarp` |
| `ActualCostsCostingVariant` |  | |  | `klvari` |
| `MaintenanceCall` |  | |  | `abnum` |
| `LeadingOrder` |  | |  | `laufn` |
| `PrevLtstAccptblCompletionDate` |  | |  | `old_lacd_date` |
| `_MaintenancePriorityType` | | ✓ | | |
| `_MaintenancePriority` | | ✓ | | |
| `_MaintenanceOrderPhase` | | ✓ | | |
| `_LocationAccountAssignment` | | ✓ | | |
| `_MaintenanceNotification` | | ✓ | | |
| `_Equipment` | | ✓ | | |
| `_Assembly` | | ✓ | | |
| `_MaintenancePlanPlant` | | ✓ | | |
| `_EAMProcessPhase` | | ✓ | | |
| `_EAMProcessSubPhase` | | ✓ | | |
| `_MaintenancePlannerGroup` | | ✓ | | |
| `_MaintenanceRevision` | | ✓ | | |
| `_MaintenancePlan` | | ✓ | | |
| `_MaintenanceItem` | | ✓ | | |
| `_MainWorkCenter` | | ✓ | | |
| `_WorkCenterType` | | ✓ | | |
| `_MaintenanceActivityType` | | ✓ | | |
| `_OperationSystemCondition` | | ✓ | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | |
| `_BusinessArea` | | ✓ | | |
| `_FunctionalArea` | | ✓ | | |
| `_MaintenanceOrderCategory` | | ✓ | | |
| `_MaintenanceOrderType` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_ControllingObjectClass` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_ResponsibleCostCenter` | | ✓ | | |
| `_ProfitCenter` | | ✓ | | |
| `_ResponsibleCostCenterText` | | ✓ | | |
| `_BasicSchedulingType` | | ✓ | | |
| `_LocationPlant` | | ✓ | | |
| `_OrderHasLongText` | | ✓ | | |
| `_WBSElement` | | ✓ | | |
| `_Project` | | ✓ | | |
| `_OrderProcessingGroup` | | ✓ | | |
| `_MaintOrderTypeControlParam` | | ✓ | | |
| `_Order` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenancePriorityType` | `I_PMNotificationPriorityType` | [0..1] |
| `_MaintenancePriority` | `I_PMNotificationPriority` | [0..1] |
| `_MaintenanceOrderPhase` | `I_MaintenanceOrderPhase` | [0..1] |
| `_LocationAccountAssignment` | `I_LocationAccountAssignment` | [0..1] |
| `_MaintenanceNotification` | `I_MaintenanceNotification` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_Assembly` | `I_Material` | [0..1] |
| `_MaintenancePlanPlant` | `I_MaintenancePlanPlant` | [0..1] |
| `_EAMProcessPhase` | `I_EAMProcessPhase` | [0..1] |
| `_EAMProcessSubPhase` | `I_EAMProcessSubPhase` | [0..1] |
| `_MaintenancePlannerGroup` | `I_MaintenancePlannerGroup` | [0..1] |
| `_MaintenanceRevision` | `I_MaintenanceRevision` | [0..1] |
| `_MaintenancePlan` | `I_MaintenancePlanBasic` | [0..1] |
| `_MaintenanceItem` | `I_MaintenanceItem` | [0..1] |
| `_MainWorkCenter` | `I_WorkCenter` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [1..1] |
| `_MaintenanceActivityType` | `I_MaintenanceActivityType` | [0..1] |
| `_OperationSystemCondition` | `I_MaintOperationSystCondition` | [0..1] |
| `_MaintOrdPlngDegreeCode` | `I_MaintOrdPlngDegreeCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_MaintenanceOrderCategory` | `I_OrderCategory` | [1..1] |
| `_MaintenanceOrderType` | `I_OrderType` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ResponsibleCostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ResponsibleCostCenterText` | `I_CostCenterText` | [0..*] |
| `_BasicSchedulingType` | `I_SchedulingType` | [0..1] |
| `_LocationPlant` | `I_Plant` | [0..1] |
| `_OrderHasLongText` | `I_Indicator` | [0..1] |
| `_WBSElement` | `I_WBSElementByInternalKey` | [0..1] |
| `_Project` | `I_ProjectByInternalKey` | [0..1] |
| `_OrderProcessingGroup` | `I_OrderProcessingGroup` | [0..1] |
| `_MaintOrderTypeControlParam` | `I_MaintOrderTypeControlParam` | [0..1] |
| `_Order` | `I_LogisticsOrder` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Maintenance Order'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.privilegedAssociations:['_LocationAccountAssignment']
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.representativeKey: 'MaintenanceOrder'
@ObjectModel.semanticKey:  [ 'MaintenanceOrder' ]

@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrder'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_MaintenanceOrderBasic as select from afih
    left outer to one join aufk on aufk.aufnr = afih.aufnr
    left outer to one join afko on afko.aufnr = afih.aufnr
    
    association [0..1] to I_PMNotificationPriorityType  as _MaintenancePriorityType    on  $projection.MaintPriorityType = _MaintenancePriorityType.MaintPriorityType
    association [0..1] to I_PMNotificationPriority      as _MaintenancePriority        on  $projection.MaintPriority     = _MaintenancePriority.MaintPriority
                                                                                           and $projection.MaintPriorityType = _MaintenancePriority.MaintPriorityType
    association [0..1] to I_MaintenanceOrderPhase       as _MaintenanceOrderPhase      on  $projection.MaintenanceProcessingPhase = _MaintenanceOrderPhase.MaintenanceProcessingPhase
    association [0..1] to I_LocationAccountAssignment   as _LocationAccountAssignment  on  $projection.MaintObjectLocAcctAssgmtNmbr = _LocationAccountAssignment.MaintObjectLocAcctAssgmtNmbr
    association [0..1] to I_MaintenanceNotification     as _MaintenanceNotification    on  $projection.MaintenanceNotification = _MaintenanceNotification.MaintenanceNotification
    association [0..1] to I_Equipment                   as _Equipment                  on  $projection.Equipment = _Equipment.Equipment
    association [0..1] to I_Material                    as _Assembly                   on  $projection.Assembly = _Assembly.Material
    association [0..1] to I_MaintenancePlanPlant        as _MaintenancePlanPlant       on  $projection.MaintenancePlanningPlant = _MaintenancePlanPlant.MaintenancePlanningPlant
    association [0..1] to I_EAMProcessPhase             as _EAMProcessPhase            on  $projection.MaintOrdProcessPhaseCode = _EAMProcessPhase.EAMProcessPhaseCode
    association [0..1] to I_EAMProcessSubPhase          as _EAMProcessSubPhase         on  $projection.MaintOrdProcessSubPhaseCode = _EAMProcessSubPhase.EAMProcessSubPhaseCode
    association [0..1] to I_MaintenancePlannerGroup     as _MaintenancePlannerGroup    on  $projection.MaintenancePlannerGroup  = _MaintenancePlannerGroup.MaintenancePlannerGroup
                                                                                            and $projection.MaintenancePlanningPlant = _MaintenancePlannerGroup.MaintenancePlanningPlant                                                                                       
    association [0..1] to I_MaintenanceRevision         as _MaintenanceRevision        on  $projection.MaintenancePlanningPlant = _MaintenanceRevision.MaintenancePlanningPlant
                                                                                           and $projection.MaintenanceRevision = _MaintenanceRevision.MaintenanceRevision
    association [0..1] to I_MaintenancePlanBasic        as _MaintenancePlan            on  $projection.MaintenancePlan = _MaintenancePlan.MaintenancePlan
    association [0..1] to I_MaintenanceItem             as _MaintenanceItem            on  $projection.MaintenanceItem = _MaintenanceItem.MaintenanceItem
    association [0..1] to I_WorkCenter                  as _MainWorkCenter             on  $projection.WorkCenterInternalID = _MainWorkCenter.WorkCenterInternalID                                                                                  and $projection.WorkCenterTypeCode   = _MainWorkCenter.WorkCenterTypeCode
    association [1..1] to I_WorkCenterType              as _WorkCenterType             on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
    association [0..1] to I_MaintenanceActivityType     as _MaintenanceActivityType    on  $projection.MaintenanceActivityType = _MaintenanceActivityType.MaintenanceActivityType
    association [0..1] to I_MaintOperationSystCondition as _OperationSystemCondition   on  $projection.OperationSystemCondition = _OperationSystemCondition.OperationSystemCondition
    association [0..1] to I_MaintOrdPlngDegreeCode      as _MaintOrdPlngDegreeCode     on  $projection.MaintenanceOrderPlanningCode = _MaintOrdPlngDegreeCode.MaintenanceOrderPlanningCode
    association [0..1] to I_BusinessArea                as _BusinessArea               on  $projection.BusinessArea = _BusinessArea.BusinessArea
    association [0..1] to I_FunctionalArea              as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
    association [1..1] to I_OrderCategory               as _MaintenanceOrderCategory   on  $projection.MaintenanceOrderCategory = _MaintenanceOrderCategory.OrderCategory
    association [1..1] to I_OrderType                   as _MaintenanceOrderType       on  $projection.MaintenanceOrderType = _MaintenanceOrderType.OrderType
    association [0..1] to I_ControllingArea             as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
    association [0..1] to I_ControllingObjectClass      as _ControllingObjectClass     on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass
    association [0..1] to I_CompanyCode                 as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
    association [0..*] to I_CostCenter                  as _ResponsibleCostCenter      on  $projection.ControllingArea       = _ResponsibleCostCenter.ControllingArea                                                                                 and $projection.ResponsibleCostCenter = _ResponsibleCostCenter.CostCenter
    association [0..*] to I_ProfitCenter                as _ProfitCenter               on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                           and $projection.ProfitCenter = _ProfitCenter.ProfitCenter
    association [0..*] to I_CostCenterText              as _ResponsibleCostCenterText  on  $projection.ControllingArea                  = _ResponsibleCostCenterText.ControllingArea
    association [0..1] to I_SchedulingType              as _BasicSchedulingType        on  $projection.BasicSchedulingType = _BasicSchedulingType.SchedulingType
    association [0..1] to I_Plant                       as _LocationPlant              on  $projection.MaintenancePlant = _LocationPlant.Plant
    association [0..1] to I_Indicator                   as _OrderHasLongText           on  $projection.OrderHasLongText = _OrderHasLongText.IndicatorValue
    association [0..1] to I_WBSElementByInternalKey     as _WBSElement                 on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
    association [0..1] to I_ProjectByInternalKey        as _Project                    on  $projection.ProjectInternalID = _Project.ProjectInternalID
    association [0..1] to I_OrderProcessingGroup        as _OrderProcessingGroup       on  $projection.ControllingArea      = _OrderProcessingGroup.ControllingArea
                                                                                           and $projection.OrderProcessingGroup = _OrderProcessingGroup.OrderProcessingGroup
                                                                                           
   association [0..1] to I_MaintOrderTypeControlParam  as _MaintOrderTypeControlParam on  $projection.MaintenanceOrderType = _MaintOrderTypeControlParam.OrderType
   association [0..1] to I_LogisticsOrder              as _Order                      on  _Order.OrderID = $projection.MaintenanceOrder 
 {

      @ObjectModel.text.element:  [ 'MaintenanceOrderDesc' ]
  key afih.aufnr                                                         as MaintenanceOrder,

      @ObjectModel.foreignKey.association: '_MaintenancePriorityType'
      afih.artpr                                                         as MaintPriorityType,

      @ObjectModel.foreignKey.association: '_MaintenancePriority'
      afih.priok                                                         as MaintPriority,

      @ObjectModel.foreignKey.association: '_MaintenanceOrderPhase'
      afih.iphas                                                         as MaintenanceProcessingPhase,

      @ObjectModel.foreignKey.association: '_LocationAccountAssignment'
      afih.iloan                                                         as MaintObjectLocAcctAssgmtNmbr,

      @ObjectModel.foreignKey.association: '_MaintenanceNotification'
      afih.qmnum                                                         as MaintenanceNotification,

 
      @ObjectModel.foreignKey.association: '_Equipment'
      afih.equnr                                                         as Equipment,

      @ObjectModel.foreignKey.association: '_Assembly'
      afih.bautl                                                         as Assembly,

      afih.serialnr                                                      as SerialNumber,

      @ObjectModel.foreignKey.association: '_MaintenancePlanPlant'
      afih.iwerk                                                         as MaintenancePlanningPlant,

      @ObjectModel.foreignKey.association: '_MaintenancePlannerGroup'
      afih.ingpr                                                         as MaintenancePlannerGroup,

      @ObjectModel.foreignKey.association: '_MaintenanceRevision'
      afih.revnr                                                         as MaintenanceRevision,

      @ObjectModel.foreignKey.association: '_MaintenancePlan'
      afih.warpl                                                         as MaintenancePlan,


      @ObjectModel.foreignKey.association: '_MaintenanceItem'
      afih.wapos                                                         as MaintenanceItem,

    
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      cast( afih.ilart as eam_maint_activity_type preserving type )      as MaintenanceActivityType,

      @ObjectModel.foreignKey.association: '_MainWorkCenter'
      afih.gewrk                                                         as WorkCenterInternalID,

      @ObjectModel.foreignKey.association: '_WorkCenterType'
      afih.pm_objty                                                      as WorkCenterTypeCode,

      afih.addat                                                         as MaintOrderReferenceDate,
      afih.aduhr                                                         as MaintOrderReferenceTime,

      afih.mainworkcompleteddatetime                                     as MainWorkCompletedDateTime,

      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      afih.plknz                                                         as MaintenanceOrderPlanningCode,

      @ObjectModel.foreignKey.association: '_OperationSystemCondition'
      afih.anlzu                                                         as OperationSystemCondition,

      afih.adpsp                                                         as ReferenceElement,

      afih.obknr                                                         as MaintenanceItemObjectList,

      cast(afih.obknr  as objknr preserving type )                       as MaintenanceOrderObjectList,

      cast(afih.aning  as pernr_d )                                      as PersonnelNumber,

      afih.maintordprocmtintegscenario                                   as MaintOrdProcmtIntegScenario,

      afih.sermat                                                        as Material,

      afko.aufpl                                                         as MaintOrderRoutingNumber,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      aufk.gsber                                                         as BusinessArea,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      aufk.func_area                                                     as FunctionalArea,

      @ObjectModel.foreignKey.association: '_MaintenanceOrderType'
      aufk.auart                                                         as MaintenanceOrderType,

      @ObjectModel.foreignKey.association: '_MaintenanceOrderCategory'
      aufk.autyp                                                         as MaintenanceOrderCategory,

      @Semantics.text: true
      aufk.ktext                                                         as MaintenanceOrderDesc,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      aufk.kokrs                                                         as ControllingArea,
 
      @ObjectModel.foreignKey.association: '_CompanyCode'
      aufk.bukrs                                                         as CompanyCode,

      @ObjectModel.foreignKey.association: '_ResponsibleCostCenter'
      @ObjectModel.text.association: '_ResponsibleCostCenterText'
      cast(aufk.kostv as pph_kostl preserving type)                      as ResponsibleCostCenter,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      aufk.prctr                                                         as ProfitCenter,

      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      cast(aufk.scope as pph_scope preserving type)                      as ControllingObjectClass,

      aufk.idat2                                                         as TechnicalCompletionDate,

      @ObjectModel.foreignKey.association: '_BasicSchedulingType'
      afko.terkz                                                         as BasicSchedulingType,

      @Semantics.booleanIndicator:true
      afko.nauterm                                                       as OrdIsNotSchedldAutomatically,

      afko.gstrp                                                         as MaintOrdBasicStartDate,
      afko.gsuzp                                                         as MaintOrdBasicStartTime,

      afko.gltrp                                                         as MaintOrdBasicEndDate,
      afko.gluzp                                                         as MaintOrdBasicEndTime,

      afko.gstrs                                                         as ScheduledBasicStartDate,
      afko.gsuzs                                                         as ScheduledBasicStartTime,
      afko.gltrs                                                         as ScheduledBasicEndDate,
      afko.gluzs                                                         as ScheduledBasicEndTime,

      -- will require DPP protection (todo CE2008)
      afih.maintordpersonresponsible                                     as MaintOrdPersonResponsible,

      aufk.objnr                                                         as MaintenanceOrderInternalID,

      cast(afko.plnnr as billofoperations           preserving type)     as TaskListGroup,
      cast(afko.plnty as billofoperationstype           preserving type) as TaskListType,
      cast(afko.plnal as billofoperationsvariant    preserving type)     as TaskListGroupCounter,

      @ObjectModel.foreignKey.association: '_LocationPlant'
      aufk.sowrk                                                         as MaintenancePlant,

      @Semantics.systemDate.createdAt: true
      aufk.erdat                                                         as CreationDate,
      @Semantics.systemTime.createdAt: true
      aufk.erfzeit                                                       as CreationTime,
      @Semantics.user.createdBy: true
      aufk.ernam                                                         as CreatedByUser,

      @ObjectModel.foreignKey.association: '_OrderHasLongText'
      cast( case when aufk.ltext = '' then ''
                 else 'X' end as pph_aufltxt preserving type)            as OrderHasLongText,

      @Semantics.user.lastChangedBy: true
      aufk.aenam                                                         as LastChangeByUser,
      
      afih.changeddatetime                                               as LastChangeDateTime,

      afih.deviceid                                                      as AdditionalDeviceData,

      @ObjectModel.foreignKey.association: '_WBSElement'
      cast( aufk.pspel as vdm_wbs_element_internal preserving type )     as WBSElementInternalID,
      
      @ObjectModel.foreignKey.association: '_Project'
      cast( afko.pronr   as ps_s4_proj_pspnr preserving type)            as ProjectInternalID,
    
      @ObjectModel.foreignKey.association: '_OrderProcessingGroup'
      aufk.abkrs                                                         as OrderProcessingGroup,
      afko.aufnt                                                         as SuperiorProjectNetwork,
      aufk.vaplz                                                         as MainWorkCenter,
      aufk.wawrk                                                         as MainWorkCenterPlant,
      aufk.kalsm                                                         as CostingSheet,
      aufk.waers                                                         as Currency,


      cast(afih.lacd_date as vdm_lacd_date preserving type )             as LatestAcceptableCompletionDate,
  
      
      @ObjectModel.foreignKey.association: '_EAMProcessPhase'
      afih.maintordovrlprocphase                                         as MaintOrdProcessPhaseCode,
      @ObjectModel.foreignKey.association: '_EAMProcessSubPhase'
      afih.maintordovrlprocsubphase                                      as MaintOrdProcessSubPhaseCode,

      afih.maintorderprocessingcontext                                   as MaintOrderProcessingContext,
      afih.service_doc_type                                              as ServiceDocumentType,
      afih.service_doc_id                                                as ServiceDocument,
      afih.service_doc_item_id                                           as ServiceDocumentItem,
      /* Control Parameters*/
      aufk.kvewe                                                         as ConditionUsage,
      aufk.kappl                                                         as ConditionApplication,
      aufk.zschl                                                         as MaintenanceOrderOverheadCode,
      afko.klvarp                                                        as PlannedCostsCostingVariant,
      afko.klvari                                                        as ActualCostsCostingVariant,
      /* maintenance plan */
      afih.abnum                                                         as MaintenanceCall,
      afih.laufn                                                         as LeadingOrder,
      afih.old_lacd_date                                                 as PrevLtstAccptblCompletionDate,
      
      _MaintenancePriorityType,
      _MaintenancePriority,
      _MaintenanceOrderPhase,
      _LocationAccountAssignment,
      _MaintenanceNotification,
      _Equipment,
      _Assembly,
      _MaintenancePlanPlant,
      _EAMProcessPhase ,
      _EAMProcessSubPhase ,
      _MaintenancePlannerGroup,
      _MaintenanceRevision ,
      _MaintenancePlan ,
      _MaintenanceItem,
      _MainWorkCenter,                                                                      
      _WorkCenterType ,
      _MaintenanceActivityType,
      _OperationSystemCondition,
      _MaintOrdPlngDegreeCode ,
      _BusinessArea ,
      _FunctionalArea ,
      _MaintenanceOrderCategory,
      _MaintenanceOrderType ,
      _ControllingArea  ,
      _ControllingObjectClass ,
      _CompanyCode  ,
      _ResponsibleCostCenter,            
      _ProfitCenter ,
      _ResponsibleCostCenterText ,
      _BasicSchedulingType,
      _LocationPlant,
      _OrderHasLongText,
      _WBSElement ,
      _Project,
      _OrderProcessingGroup,
      _MaintOrderTypeControlParam,    
     _Order
}
```
