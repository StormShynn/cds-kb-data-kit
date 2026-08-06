---
name: I_STANDARDBOMLINK
description: Standardbomlink
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
  - interface-view
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_STANDARDBOMLINK

**Standardbomlink**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `StandardObject` | `stobj` |
| key `Plant` | `werks` |
| key `BillOfMaterialVariantUsage` | `stlan` |
| key `BillOfMaterial` | `stlnr` |
| key `BillOfMaterialVariant` | `stlal` |
| `BillOfMaterialCategory` | `cast ('S' as stlty preserving type)` |
| `_BillOfMaterialUsage` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfMaterialUsage` | `I_BillOfMaterialUsage` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@EndUserText.label: 'Standard Link for BOM'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_StandardBOMLink
  as select from stst
  association [0..1] to I_BillOfMaterialUsage as _BillOfMaterialUsage on $projection.BillOfMaterialVariantUsage = _BillOfMaterialUsage.BillOfMaterialVariantUsage
                                                                      and _BillOfMaterialUsage.Language         = $session.system_language 
  
{
  key stobj                                   as StandardObject,
  @Consumption.valueHelpDefinition: [
      { entity: { name:    'I_PlantStdVH',
                  element: 'Plant' } }]
  @ObjectModel.text.element: [ 'Plant' ]
  key werks                                   as Plant,
  key stlan                                   as BillOfMaterialVariantUsage,   
  key stlnr                                   as BillOfMaterial,
  key stlal                                   as BillOfMaterialVariant,
  cast ('S' as stlty preserving type)         as BillOfMaterialCategory,
  _BillOfMaterialUsage

}
```
