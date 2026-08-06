---
name: I_MATERIALBOMLINK
description: Materialbomlink
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
  - material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_MATERIALBOMLINK

**Materialbomlink**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterial` | `stlnr` |
| key `BillOfMaterialVariant` | `stlal` |
| key `Material` | `matnr` |
| key `Plant` | `werks` |
| key `BillOfMaterialVariantUsage` | `stlan` |
| `BillOfMaterialCategory` | `cast ('M' as stlty preserving type)` |
| `MatFromLotSizeQuantity` | `losvn` |
| `MaterialToLotSizeQuantity` | `losbs` |
| `IsConfiguredMaterial` | `cslty` |
| `MaterialBOMObjectID` | `material_bom_key` |
| `CreatedByUser` | `annam` |
| `LastChangedByUser` | `aenam` |
| `_BillOfMaterialUsage` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfMaterialUsage` | `I_BillOfMaterialUsage` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMATTOBOMLINK'
@AbapCatalog.preserveKey:true
@ClientHandling.type : #INHERITED
@ClientHandling.algorithm : #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
}
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Material Link for Bill of Material'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterial'
define view I_MaterialBOMLink 
  as select from mast
  association [0..1] to I_BillOfMaterialUsage as _BillOfMaterialUsage on $projection.BillOfMaterialVariantUsage = _BillOfMaterialUsage.BillOfMaterialVariantUsage
                                                                      and _BillOfMaterialUsage.Language         = $session.system_language
 {

  
  key stlnr                                    as BillOfMaterial,
  key stlal                                    as BillOfMaterialVariant,
  key matnr                                    as Material,
  @Consumption.valueHelpDefinition: [
      { entity: { name:    'I_PlantStdVH',
                  element: 'Plant' } }]
  @ObjectModel.text.element: [ 'Plant' ]
  
  key werks                                    as Plant,
  key stlan                                    as BillOfMaterialVariantUsage,
      cast ('M' as stlty preserving type)      as BillOfMaterialCategory,
      losvn                                    as MatFromLotSizeQuantity,
      losbs                                    as MaterialToLotSizeQuantity,
      cslty                                    as IsConfiguredMaterial,
      material_bom_key                         as MaterialBOMObjectID,
      annam                                    as CreatedByUser,  
      aenam                                    as LastChangedByUser ,
      _BillOfMaterialUsage
}
```
