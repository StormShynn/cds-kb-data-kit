---
name: D_HNDLGUNTPCKDSCRTMFGAUTOMLYP
description: "D Hndlguntpckdscrtmfgautomlyp"
app_component: LO-HU-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - LO-HU-API
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# D_HNDLGUNTPCKDSCRTMFGAUTOMLYP

**D Hndlguntpckdscrtmfgautomlyp**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrder` |  | |  | `aufnr` |  |  |
| `Quantity` |  | |  | `vemng` |  |  |
| `UnitOfMeasure` |  | |  | `vemeh` |  |  |
| `StorageLocation` |  | |  | `lgort_d` |  |  |
| `Batch` |  | |  | `charg_d` |  |  |
| `PackingInstructionNumber` |  | |  | `pl_pobjid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Auto packing HUs in Disc Mfg Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define root abstract entity D_HndlgUntPckDscrtMfgAutomlyP 
{
    
   ProductionOrder : aufnr;
   @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
   Quantity : vemng;
   UnitOfMeasure : vemeh;
   StorageLocation : lgort_d;
   Batch : charg_d ;
   PackingInstructionNumber : pl_pobjid;
   
}
```
