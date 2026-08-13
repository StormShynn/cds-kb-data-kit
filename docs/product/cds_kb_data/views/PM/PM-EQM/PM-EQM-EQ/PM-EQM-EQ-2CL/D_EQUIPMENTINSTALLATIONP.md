---
name: D_EQUIPMENTINSTALLATIONP
description: "D Equipmentinstallationp"
semantic_vi: "View D_EQUIPMENTINSTALLATIONP hiển thị dữ liệu lắp đặt thiết bị, bao gồm thiết bị trên cùng, vị trí chức năng và chi tiết lắp đặt. Nó được sử dụng để truy cập và quản lý thông tin lắp đặt thiết bị."
keywords:
  - "equipment installation"
  - "dụng cụ lắp đặt"
  - "equipment"
  - "thiết bị"
  - "pm eqm"
  - "plant maintenance"
  - "lắp đặt"
  - "thiết bị trên cùng"
  - "vị trí chức năng"
semantic_en: "The D_EQUIPMENTINSTALLATIONP view exposes equipment installation data, including the superordinate equipment, functional location, and installation details. It is used to access and manage equipment installation information."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuperordinateEquipment` |  | |  | `hequi` |  |  |
| `FunctionalLocation` |  | |  | `tplnr` |  |  |
| `EquipInstallationPositionNmbr` |  | |  | `installpos` |  |  |
| `EquipmentInstallationDate` |  | |  | `aedat` |  |  |
| `EquipmentInstallationTime` |  | |  | `timbi` |  |  |
| `LocationCopyIsRequested` |  | |  | `flag` |  |  |
| `RoomCopyIsRequested` |  | |  | `flag` |  |  |
| `PlantSectionCopyIsRequested` |  | |  | `flag` |  |  |
| `WorkCenterCopyIsRequested` |  | |  | `flag` |  |  |
| `ABCIndicatorCopyIsRequested` |  | |  | `flag` |  |  |
| `SortFieldCopyIsRequested` |  | |  | `flag` |  |  |
| `BusinessAreaCopyIsRequested` |  | |  | `flag` |  |  |
| `CostCenterCopyIsRequested` |  | |  | `flag` |  |  |
| `WBSElementCopyIsRequested` |  | |  | `flag` |  |  |
| `StandingOrderCopyIsRequested` |  | |  | `flag` |  |  |
| `SettlementOrderCopyIsRequested` |  | |  | `flag` |  |  |
| `MaintPlanningPlantCopyIsReqd` |  | |  | `flag` |  |  |
| `MaintWorkCenterCopyIsRequested` |  | |  | `flag` |  |  |
| `CatalogProfileCopyIsRequested` |  | |  | `flag` |  |  |
| `SalesOrganizationCopyIsReqd` |  | |  | `flag` |  |  |

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
