---
name: I_PROJECTBOMLINK
description: "Projectbomlink"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - bom
  - project
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Project
---
# I_PROJECTBOMLINK

**Projectbomlink**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementInternalID` | ✓ | |  | `pspnr` |  |  |
| `Material` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `BillOfMaterialVariantUsage` | ✓ | |  | `stlan` |  |  |
| `BillOfMaterial` | ✓ | |  | `stlnr` |  |  |
| `BillOfMaterialVariant` | ✓ | |  | `stlal` |  |  |
| `BillOfMaterialCategory` |  | |  | `cast ('P' as stlty preserving type)` |  |  |
| `_BillOfMaterialUsage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfMaterialUsage` | `I_BillOfMaterialUsage` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Work Breakdown Structure Link for BOM'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProjectBOMLink
  as select from prst
  association [0..1] to I_BillOfMaterialUsage as _BillOfMaterialUsage on $projection.BillOfMaterialVariantUsage = _BillOfMaterialUsage.BillOfMaterialVariantUsage
                                                                      and _BillOfMaterialUsage.Language         = $session.system_language
  
{
  key pspnr                                   as WBSElementInternalID,
  key matnr                                   as Material,
      @Consumption.valueHelpDefinition: [
      { entity: { name:    'I_PlantStdVH',
                  element: 'Plant' } }]
      @ObjectModel.text.element: [ 'Plant' ]
  key werks                                   as Plant,
  key stlan                                   as BillOfMaterialVariantUsage,
  key stlnr                                   as BillOfMaterial,
  key stlal                                   as BillOfMaterialVariant,
  cast ('P' as stlty preserving type)         as BillOfMaterialCategory,
  _BillOfMaterialUsage
      
}
```
