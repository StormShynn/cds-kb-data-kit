---
name: I_MATERIALBOMLINKDEX_2
description: "Materialbomlinkdex 2"
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
  - data-extraction
  - material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_MATERIALBOMLINKDEX_2

**Materialbomlinkdex 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BillOfMaterialVariantUsage` | ✓ | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BOMHeaderBaseUnit` |  | |  |  |  |  |
| `MatFromLotSizeQuantity` |  | |  |  |  |  |
| `MaterialToLotSizeQuantity` |  | |  |  |  |  |
| `IsConfiguredMaterial` |  | |  |  |  |  |
| `MaterialBOMObjectID` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bill of Material Link Data Extraction'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking : #NOT_REQUIRED
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #MASTER}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterialLink'
// CDC Annotation for DATA extraction

@Analytics:{
     dataCategory: #FACT,
     dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'mast', role: #MAIN,
                    viewElement: ['BillOfMaterial', 'BillOfMaterialVariant', 'Material', 'Plant', 'BillOfMaterialVariantUsage'],
                    tableElement: ['stlnr', 'stlal', 'matnr', 'werks', 'stlan']

                },
                {
                    table: 'mara', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['Material'],
                    tableElement: ['matnr']
                }
            ]
        }
    }
}
define view entity I_MaterialBOMLinkDEX_2
  as select from P_MATERIALBOMLINKDEX_2
{
  key BillOfMaterial,
  key BillOfMaterialVariant,
  key Material,
  key Plant,
  key BillOfMaterialVariantUsage,
      BillOfMaterialCategory,
      BOMHeaderBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      MatFromLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      MaterialToLotSizeQuantity,
      IsConfiguredMaterial,
      MaterialBOMObjectID,
      CreatedByUser,
      LastChangedByUser
}
```
