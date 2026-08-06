---
name: D_EQUIPMENTINSTALLATIONP
description: D Equipmentinstallationp
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - equipment
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_EQUIPMENTINSTALLATIONP

**D Equipmentinstallationp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuperordinateEquipment` | `hequi` |
| `FunctionalLocation` | `tplnr` |
| `EquipInstallationPositionNmbr` | `installpos` |
| `EquipmentInstallationDate` | `aedat` |
| `EquipmentInstallationTime` | `timbi` |
| `LocationCopyIsRequested` | `flag` |
| `RoomCopyIsRequested` | `flag` |
| `PlantSectionCopyIsRequested` | `flag` |
| `WorkCenterCopyIsRequested` | `flag` |
| `ABCIndicatorCopyIsRequested` | `flag` |
| `SortFieldCopyIsRequested` | `flag` |
| `BusinessAreaCopyIsRequested` | `flag` |
| `CostCenterCopyIsRequested` | `flag` |
| `WBSElementCopyIsRequested` | `flag` |
| `StandingOrderCopyIsRequested` | `flag` |
| `SettlementOrderCopyIsRequested` | `flag` |
| `MaintPlanningPlantCopyIsReqd` | `flag` |
| `MaintWorkCenterCopyIsRequested` | `flag` |
| `CatalogProfileCopyIsRequested` | `flag` |
| `SalesOrganizationCopyIsReqd` | `flag` |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'sql_view_name'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@EndUserText.label: 'FuncImport for Equi Install DataTransfer'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_EquipmentInstallationP  {
  SuperordinateEquipment                       :hequi;
  FunctionalLocation                           :tplnr; //tplnr; //tplnr_unconverted; 
  EquipInstallationPositionNmbr                :installpos;
  EquipmentInstallationDate                    :aedat;
  EquipmentInstallationTime                    :timbi;
  LocationCopyIsRequested                      :flag;
  RoomCopyIsRequested                          :flag;
  PlantSectionCopyIsRequested                  :flag;
  WorkCenterCopyIsRequested                    :flag;
  ABCIndicatorCopyIsRequested                  :flag;
  SortFieldCopyIsRequested                     :flag;
  BusinessAreaCopyIsRequested                  :flag;
  CostCenterCopyIsRequested                    :flag;
  WBSElementCopyIsRequested                    :flag;
  StandingOrderCopyIsRequested                 :flag;
  SettlementOrderCopyIsRequested               :flag;
  MaintPlanningPlantCopyIsReqd                 :flag;
  MaintWorkCenterCopyIsRequested               :flag;
  CatalogProfileCopyIsRequested                :flag;
  SalesOrganizationCopyIsReqd                  :flag;
 // DistributionChannelCopyIsReqd              :flag;
 //  DivisionCopyIsRequested                   :flag;
}
```
