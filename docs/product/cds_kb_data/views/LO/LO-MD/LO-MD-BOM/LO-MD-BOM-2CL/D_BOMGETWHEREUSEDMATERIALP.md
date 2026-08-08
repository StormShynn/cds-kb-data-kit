---
name: D_BOMGETWHEREUSEDMATERIALP
description: "D Bomgetwhereusedmaterialp"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BOMGETWHEREUSEDMATERIALP

**D Bomgetwhereusedmaterialp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HeaderValidityEndDate` |  | |  | `datub` |  |  |
| `HeaderValidityStartDate` |  | |  | `datuv` |  |  |
| `BillOfMaterialComponent` |  | |  | `idnrk` |  |  |
| `BillOfMaterialVariant` |  | |  | `stalt` |  |  |
| `BillOfMaterialVersion` |  | |  | `bom_version` |  |  |
| `BillOfMaterialCategory` |  | |  | `stlty` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameters for material where-used list'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 } 
define abstract entity D_BOMGetWhereUsedMaterialP 
{
  HeaderValidityEndDate       : datub;
  HeaderValidityStartDate     : datuv;
  BillOfMaterialComponent     : idnrk;
  BillOfMaterialVariant       : stalt;
  BillOfMaterialVersion       : bom_version;
  BillOfMaterialCategory      : stlty;
  Plant                       : werks_d;
}
```
