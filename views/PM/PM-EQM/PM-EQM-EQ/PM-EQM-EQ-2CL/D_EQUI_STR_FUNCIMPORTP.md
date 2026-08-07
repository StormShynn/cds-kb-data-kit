---
name: D_EQUI_STR_FUNCIMPORTP
description: D Equi Str Funcimportp
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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuperordinateEquipment` |  | |  | `hequi` |
| `EquipInstallationPositionNmbr` |  | |  | `posnr` |
| `EquipInstallationPosInChar` |  | |  | `installpos` |
| `FunctionalLocation` |  | |  | `tplnr` |
| `EquipmentInstallationDate` |  | |  | `aedat` |
| `EquipmentInstallationTime` |  | |  | `timbi` |

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
