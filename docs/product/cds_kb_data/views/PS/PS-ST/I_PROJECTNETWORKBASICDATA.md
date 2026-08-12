---
name: I_PROJECTNETWORKBASICDATA
description: "Project Network Basic Data"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTNETWORKBASICDATA')/$value
semantic_en: "Project Network Basic Data"
semantic_vi: "Project Network Basic Data — CDS view giao diện dựa trên afko."
keywords:
  - "Project Network Basic Data"
  - "project"
  - "network"
  - "basic"
  - "data"
  - "internal"
  - "prod"
  - "availy"
  - "check"
  - "planning"
  - "type"
  - "order"
  - "category"
tags:
  - PS
  - bo:project
  - component:PS-ST
  - interface-view
  - project
  - PS-ST
  - bo:productionorder
---
# I_PROJECTNETWORKBASICDATA

**Project Network Basic Data**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTNETWORKBASICDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectNetwork` | ✓ | |  | `aufnr` | `CHAR(12)` | Order Number |
| `ProjectNetworkInternalID` |  | |  | `aufpl` | `NUMC(10)` | Routing Number of Operations in the Order |
| `ProdAvailyCheckPlanningType` |  | |  | `plart` | `CHAR(1)` | Basis for scheduling |
| `ProjectInternalID` |  | |  | `cast( afko.pronr as ps_pspnr )` | `NUMC(8)` | Project definition |
| `OrderCategory` |  | |  | `autyp` | `NUMC(2)` | Order Category |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `ProjectNetworkType` |  | |  | `auart` | `CHAR(4)` | Order Type |
| `ProjectNetworkDescription` |  | |  | `cast(aufk.ktext as pph_auftext preserving type)` | `CHAR(40)` | Order Description |
| `SuperiorProjectNetwork` |  | |  | `aufnt` | `CHAR(12)` | Number of superior network |
| `SuperiorProjectNetworkIntID` |  | |  | `aufpt` | `NUMC(10)` | Routing Number of Operations in the Order |
| `SuperiorNtwkActivityInternalID` |  | |  | `aplzt` | `NUMC(8)` | General counter for order |
| `SalesOrder` |  | |  | `kdauf` | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  | `kdpos` | `NUMC(6)` | Item Number in Sales Order |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `WBSElementInternalID` |  | |  | `cast(aufk.pspel as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `ProjectNetworkObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `PlannedStartDate` |  | |  | `gstrp` | `DATS(8)` | Basic Start Date |
| `PlannedEndDate` |  | |  | `gltrp` | `DATS(8)` | Basic Finish Date |
| `ScheduledBasicStartDate` |  | |  | `gstrs` | `DATS(8)` | Scheduled start |
| `ScheduledBasicEndDate` |  | |  | `gltrs` | `DATS(8)` | Scheduled finish |
| `ActualStartDate` |  | |  | `gstri` | `DATS(8)` | Actual start date |
| `ActualEndDate` |  | |  | `getri` | `DATS(8)` | Confirmed Order Finish Date |
| `PriorityCode` |  | |  | `aprio` | `CHAR(1)` | Order priority |
| `IsMarkedForDeletion` |  | |  | `loekz` | `CHAR(1)` | Deletion Flag |
| `ForecastedStartDate` |  | |  | `gstpp` | `DATS(8)` | Forecast start date |
| `ForecastedEndDate` |  | |  | `gltpp` | `DATS(8)` | Finish date (forecast) |
| `ScheduledForecastedStartDate` |  | |  | `gstps` | `DATS(8)` | Scheduled forecast start |
| `ScheduledForecastedEndDate` |  | |  | `gltps` | `DATS(8)` | Scheduled forecast finish |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Created On |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Entered By |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Change Date for Order Master |
| `CostCenter` |  | |  | `kostl` | `CHAR(10)` | Cost Center for Basic Settlement |
| `ScheduledReleaseDate` |  | |  | `cast(afko.ftrms as fis_co_ftrms)` | `DATS(8)` | Scheduled Release Date |
| `ResponsibleCostCenter` |  | |  | `kostv` | `CHAR(10)` | Responsible cost center |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `MRPController` |  | |  | `dispo` | `CHAR(3)` | MRP Controller for Order |
| `NetworkProfile` |  | |  | `profid` | `CHAR(7)` | Network Profile |
| `ScheduledFcstdReleaseDate` |  | |  | `ftrps` | `DATS(8)` | Scheduled release date (forecast) |
| `ActualReleasedDate` |  | |  | `ftrmi` | `DATS(8)` | Actual release date |
| `BasicSchedulingType` |  | |  | `terkz` | `CHAR(1)` | Scheduling type |
| `BasicSchedulingReductionLevel` |  | |  | `redkz` | `CHAR(1)` | Reduction Indicator for Scheduling |
| `ForecastSchedulingType` |  | |  | `trkzp` | `CHAR(1)` | Scheduling type (forecast) |
| `FcstSchedulingReductionLevel` |  | |  | `rdkzp` | `CHAR(1)` | Reduction indicator for scheduling (forecast) |
| `OrdIsNotSchedldAutomatically` |  | |  | `nauterm` | `CHAR(1)` | Indicator: Do not schedule automatically |
| `CapacityRqmtHasNotToBeCreated` |  | |  | `kbed` | `CHAR(1)` | Indicator: Do not Create Capacity Requirements |
| `SchedulingIsAllowingForBreaks` |  | |  | `breaks` | `CHAR(1)` | Indicator:  Scheduling Allowing for Breaks |
| `FunctionalArea` |  | |  | `func_area` | `CHAR(16)` | Functional Area |
| `ControllingObjectClass` |  | |  | `cast(aufk.scope as pph_scope preserving type)` | `CHAR(2)` | Controlling Object Class |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Order Currency |
| `ResponsiblePlannerGroup` |  | |  | `plgrp` | `CHAR(3)` | Responsible Planner Group or Department |
| `ChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  | `otype` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  | `jv_jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  | `jv_jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `JointVentureOriginalCostObject` |  | |  | `jv_oco` | `CHAR(1)` | JV original cost object |
| `BaseUnit` |  | |  | `gmein` | `UNIT(3)` | Base Unit of Measure |
| `PlannedTotalQty` |  | |  | `gamng` | `QUAN(13)` | Total Order Quantity |
| `CostingSheet` |  | |  | `kalsm` | `CHAR(6)` | Costing Sheet |
| `PlannedCostsCostingVariant` |  | |  | `klvarp` | `CHAR(4)` | Costing Variant for Planned Costs |
| `ActualCostsCostingVariant` |  | |  | `klvari` | `CHAR(4)` | Costing Variant For Actual Costs |
| `OverheadCode` |  | |  | `zschl` | `CHAR(6)` | Overhead key |
| `PlannedCostsAreNotCalculated` |  | |  | `nopcost` | `CHAR(1)` | Do not calculate planned costs for order |
| `OrderIsNotCostedAutomatically` |  | |  | `naucost` | `CHAR(1)` | Indicator: Do not cost automatically |
| `OrderCostsAreUpdated` |  | |  | `costupd` | `CHAR(1)` | Costs are updated |
| `ProjNtwkIsRlvtForMatlPlng` |  | |  | `no_disp` | `CHAR(1)` | Effective for Materials Planning |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Last Changed By |
| `LastChangeTime` |  | |  | `aezeit` | `TIMS(6)` | Changed At |
| `NetworkIsAccountAssigned` |  | |  | `case when afko.netzkont = '1' then 'X' else ' ' end` | `CHAR(1)` |  |
| `ProcurementMode` |  | |  | `order_proc_mode` | `CHAR(1)` | Procurement Mode for Order master data |
| `StatusCombinationCode` |  | |  | `aufk_status` | `INT1(3)` | Status Combination |
| `_OrderType` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_NetworkActivityByInternalKey` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PriorityCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_NetworkShortText` | | ✓ | | | | |
| `_ProjectData` | | ✓ | | | | |
| `_WBSElementData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrderType` | `I_OrderType` | [0..1] |
| `_Project` | `I_ProjectBasicData` | [0..1] |
| `_NetworkActivityByInternalKey` | `I_NetworkActivityByInternalKey` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PriorityCode` | `I_Prioritycode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_NetworkShortText` | `I_ProjectObjectShortText` | [0..1] |
| `_ProjectData` | `I_ProjectData_2` | [0..1] |
| `_WBSElementData` | `I_WBSElementData_2` | [0..1] |
| `_Extension` | `E_LogisticsOrder` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTNETWORKBASICDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTNETWORKBASICDATA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPROJNTWKBASDAT'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey: 'ProjectNetwork'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_MRPController']
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Project Network Basic Data'
@Metadata.ignorePropagatedAnnotations:true
define view I_ProjectNetworkBasicData
  as select from afko
    inner join   aufk on afko.aufnr = aufk.aufnr
  association [0..1] to I_OrderType                    as _OrderType                    on  $projection.ProjectNetworkType = _OrderType.OrderType
  association [0..1] to I_ProjectBasicData             as _Project                      on  $projection.ProjectInternalID = _Project.ProjectInternalID

  association [1..1] to I_NetworkActivityByInternalKey as _NetworkActivityByInternalKey on  $projection.SuperiorProjectNetworkIntID    = _NetworkActivityByInternalKey.ProjectNetworkInternalID
                                                                                        and $projection.SuperiorNtwkActivityInternalID = _NetworkActivityByInternalKey.NetworkActivityInternalID
  association [1..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Prioritycode                 as _PriorityCode                 on  $projection.PriorityCode = _PriorityCode.PriorityCode
  association [0..1] to I_ControllingArea              as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_CompanyCode                  as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea                 as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..*] to I_ProfitCenter                 as _ProfitCenter                 on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_MRPController                as _MRPController                on  $projection.Plant         = _MRPController.Plant
                                                                                        and $projection.MRPController = _MRPController.MRPController
  // Multi language Short text
  association [0..1] to I_ProjectObjectShortText       as _NetworkShortText             on  _NetworkShortText.Language                     = $session.system_language
                                                                                        and _NetworkShortText.ProjectApplicationIdentifier = 'PS'
                                                                                        and _NetworkShortText.ProjectObjectType            = 'NP'
                                                                                        and $projection.ProjectNetworkObject               = _NetworkShortText.ProjectObjectNode


  association [0..1] to I_ProjectData_2                as _ProjectData                  on  $projection.ProjectInternalID = _ProjectData.ProjectInternalID
  association [0..1] to I_WBSElementData_2             as _WBSElementData               on  $projection.WBSElementInternalID = _WBSElementData.WBSElementInternalID
  association [1..1] to E_LogisticsOrder               as _Extension                    on  $projection.ProjectNetwork = _Extension.OrderID

{
  key afko.aufnr                                       as ProjectNetwork,
      afko.aufpl                                       as ProjectNetworkInternalID,
      afko.plart                                       as ProdAvailyCheckPlanningType,
      cast( afko.pronr as ps_pspnr )                   as ProjectInternalID,
      aufk.autyp                                       as OrderCategory,
      aufk.kokrs                                       as ControllingArea, 
      aufk.auart                                       as ProjectNetworkType,
      @Semantics.text: true
      cast(aufk.ktext as pph_auftext preserving type)  as ProjectNetworkDescription,
      afko.aufnt                                       as SuperiorProjectNetwork,
      afko.aufpt                                       as SuperiorProjectNetworkIntID,
      afko.aplzt                                       as SuperiorNtwkActivityInternalID,
      aufk.kdauf                                       as SalesOrder,
      aufk.kdpos                                       as SalesOrderItem,
      aufk.bukrs                                       as CompanyCode,
      aufk.gsber                                       as BusinessArea,
      cast(aufk.pspel as ps_s4_pspnr preserving type ) as WBSElementInternalID,
      aufk.objnr                                       as ProjectNetworkObject,
      aufk.prctr                                       as ProfitCenter,
      afko.gstrp                                       as PlannedStartDate,
      afko.gltrp                                       as PlannedEndDate,
      afko.gstrs                                       as ScheduledBasicStartDate,
      afko.gltrs                                       as ScheduledBasicEndDate,
      afko.gstri                                       as ActualStartDate,
      afko.getri                                       as ActualEndDate,
      afko.aprio                                       as PriorityCode,
      aufk.loekz                                       as IsMarkedForDeletion,
      afko.gstpp                                       as ForecastedStartDate,
      afko.gltpp                                       as ForecastedEndDate,
      afko.gstps                                       as ScheduledForecastedStartDate,
      afko.gltps                                       as ScheduledForecastedEndDate,
      aufk.erdat                                       as CreationDate,
      aufk.ernam                                       as CreatedByUser,
      aufk.aedat                                       as LastChangeDate,
      aufk.kostl                                       as CostCenter,
      cast(afko.ftrms as fis_co_ftrms)                 as ScheduledReleaseDate,
      aufk.kostv                                       as ResponsibleCostCenter,
      aufk.werks                                       as Plant,
      afko.dispo                                       as MRPController, 
      afko.profid                                      as NetworkProfile,
      afko.ftrps                                       as ScheduledFcstdReleaseDate,
      afko.ftrmi                                       as ActualReleasedDate,
      afko.terkz                                       as BasicSchedulingType,
      afko.redkz                                       as BasicSchedulingReductionLevel, //Reduction Indicator for Scheduling (Basic)
      afko.trkzp                                       as ForecastSchedulingType,
      afko.rdkzp                                       as FcstSchedulingReductionLevel, //Reduction Indicator for Scheduling (Forecast)
      @Semantics.booleanIndicator: true
      afko.nauterm                                     as OrdIsNotSchedldAutomatically,
      afko.kbed                                        as CapacityRqmtHasNotToBeCreated, //Indicator: Calculate capacity requirements
      afko.breaks                                      as SchedulingIsAllowingForBreaks, // Indicator:  Scheduling allowing for breaks
      aufk.func_area                                   as FunctionalArea,
      cast(aufk.scope as pph_scope preserving type)    as ControllingObjectClass,
      aufk.txjcd                                       as TaxJurisdiction,
      aufk.waers                                       as Currency,
      afko.plgrp                                       as ResponsiblePlannerGroup,
      afko.aennr                                       as ChangeNumber,
      aufk.vname                                       as JointVenture,
      aufk.recid                                       as JointVentureRecoveryCode,
      aufk.etype                                       as JointVentureEquityType,
      aufk.otype                                       as JointVentureObjectType,
      aufk.jv_jibcl                                    as JointVentureClass,
      aufk.jv_jibsa                                    as JointVentureSubClass,
      aufk.jv_oco                                      as JointVentureOriginalCostObject,
      afko.gmein                                       as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      afko.gamng                                       as PlannedTotalQty, // Execution Factor
      aufk.kalsm                                       as CostingSheet,
      afko.klvarp                                      as PlannedCostsCostingVariant,
      afko.klvari                                      as ActualCostsCostingVariant,
      aufk.zschl                                       as OverheadCode,
      afko.nopcost                                     as PlannedCostsAreNotCalculated,
      @Semantics.booleanIndicator: true
      afko.naucost                                     as OrderIsNotCostedAutomatically,
      afko.costupd                                     as OrderCostsAreUpdated,
      afko.no_disp                                     as ProjNtwkIsRlvtForMatlPlng,

      // Administr.
      aufk.aenam                                       as LastChangedByUser,
      aufk.aezeit                                      as LastChangeTime,

      // Other Fields
      @Semantics.booleanIndicator: true
      case when afko.netzkont = '1' then
        'X'
      else
        ' '
      end                                              as NetworkIsAccountAssigned,
      aufk.order_proc_mode                             as ProcurementMode,
      aufk.aufk_status                                 as StatusCombinationCode,

      _ProjectData,
      _WBSElementData,
      _OrderType,
      _Project,
      _NetworkActivityByInternalKey,
      _Plant,
      _PriorityCode,
      _ControllingArea,
      _CompanyCode,
      _BusinessArea,
      _ProfitCenter,
      _MRPController,
      //Multi Language Short text
      _NetworkShortText
}
where
  aufk.autyp = '20'
```
