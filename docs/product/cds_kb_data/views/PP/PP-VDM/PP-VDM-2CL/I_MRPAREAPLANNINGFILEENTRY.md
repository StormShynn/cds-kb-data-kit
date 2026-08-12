---
name: I_MRPAREAPLANNINGFILEENTRY
description: "Mrpareaplanningfileentry"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPAREAPLANNINGFILEENTRY

**Mrpareaplanningfileentry**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `MRPArea` | ✓ | |  | `berid` |  |  |
| `MRPPlanningScenario` | ✓ | |  | `plscn` |  |  |
| `MatlIsConsideredInNetChgPlng` |  | |  | `gsaen` |  |  |
| `MatlNextTimePhasedPlanningDate` |  | |  | `cast(d.rhytd as vdm_rhytd preserving type)` |  |  |
| `MaterialLastMRPDateTime` |  | |  | `dstmp` |  |  |
| `MatlLastMRPRelevantChgDateTime` |  | |  | `lstmp` |  |  |
| `_Material` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_MaterialPlant` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_PlanningScenario` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_MaterialPlant` | `I_ProductPlantBasic` | [1..1] |
| `_MRPArea` | `I_MRPArea` | [1..1] |
| `_PlanningScenario` | `I_MRPPlanningScenario` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@Analytics.technicalName: 'IMRPAREAPFE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Area Planning File Entry'

define view entity I_MRPAreaPlanningFileEntry
  as select from pph_dbvm as d
                                        
  association [1..1] to I_Product             as _Material         on  $projection.Material = _Material .Product
  association [1..1] to I_Plant               as _Plant            on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ProductPlantBasic   as _MaterialPlant    on  $projection.Material = _MaterialPlant.Product
                                                                   and $projection.Plant    = _MaterialPlant.Plant 
  association [1..1] to I_MRPArea             as _MRPArea          on  $projection.MRPArea = _MRPArea.MRPArea
  association [0..1] to I_MRPPlanningScenario as _PlanningScenario on  $projection.MRPPlanningScenario = _PlanningScenario.MRPPlanningScenario

{
      // Key elements
      @ObjectModel.foreignKey.association: '_Material'
  key d.matnr as Material,
      @ObjectModel.foreignKey.association: '_Plant'
  key d.werks as Plant,
      @ObjectModel.foreignKey.association: '_MRPArea'
  key d.berid as MRPArea,
      @ObjectModel.foreignKey.association: '_PlanningScenario'
  key d.plscn as MRPPlanningScenario,

      d.gsaen                                    as MatlIsConsideredInNetChgPlng,
--    d.erdat                                    as PlanningFileEntryCreationDate,
      cast(d.rhytd as vdm_rhytd preserving type) as MatlNextTimePhasedPlanningDate,
      d.dstmp                                    as MaterialLastMRPDateTime,
      d.lstmp                                    as MatlLastMRPRelevantChgDateTime,
                                          
      // Associations
      _Plant,
      _Material,
      _MaterialPlant,  // for DCLS
      _MRPArea,
      _PlanningScenario
}
where d.sc_empty = ''
  and d.nodisp   = '';
```
