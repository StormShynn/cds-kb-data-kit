---
name: D_EQUI_STR_FUNCIMPORTP
description: "D Equi Str Funcimportp"
semantic_vi: "View D_EQUI_STR_FUNCIMPORTP hiển thị dữ liệu vị trí lắp đặt thiết bị, bao gồm vị trí chức năng và ngày tháng lắp đặt, có thể được sử dụng để phân tích và quản lý việc lắp đặt thiết bị trong bối cảnh bảo trì nhà máy."
keywords:
  - "equipment installation"
  - "plant maintenance"
  - "functional location"
  - "equipment installation position"
  - "pm-eqm-eq"
  - "transactional processing"
  - "equipment"
  - "maintenance"
  - "installation"
  - "position"
  - "equipment installation date"
  - "equipment installation time"
semantic_en: "The D_EQUI_STR_FUNCIMPORTP CDS view exposes equipment installation position data, including functional locations and installation dates, which can be used to analyze and manage equipment installations in a plant maintenance context."
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
  - transactional-processing
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_EQUI_STR_FUNCIMPORTP

**D Equi Str Funcimportp**

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
| `EquipInstallationPositionNmbr` |  | |  | `posnr` |  |  |
| `EquipInstallationPosInChar` |  | |  | `installpos` |  |  |
| `FunctionalLocation` |  | |  | `tplnr` |  |  |
| `EquipmentInstallationDate` |  | |  | `aedat` |  |  |
| `EquipmentInstallationTime` |  | |  | `timbi` |  |  |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'sql_view_name'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Update Equipment Structure'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_Equi_Str_FuncImportP {

SuperordinateEquipment            :  hequi ;
@API.element.releaseState: #DEPRECATED  
@API.element.successor: 'EquipInstallationPosInChar' 
EquipInstallationPositionNmbr     :  posnr;

EquipInstallationPosInChar        : installpos;

FunctionalLocation                : tplnr; //tplnr_unconverted; //tplnr;

EquipmentInstallationDate          :  aedat;

EquipmentInstallationTime         :  timbi;
}
```
