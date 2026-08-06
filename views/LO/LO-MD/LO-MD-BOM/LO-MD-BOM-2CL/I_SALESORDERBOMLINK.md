---
name: I_SALESORDERBOMLINK
description: Sales OrderBOMLINK
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
  - sales-order
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:SalesOrder
---
# I_SALESORDERBOMLINK

**Sales OrderBOMLINK**

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
| key `SalesOrder` | `vbeln` |
| key `SalesOrderItem` | `vbpos` |
| `BillOfMaterialCategory` | `cast ('K' as stlty preserving type)` |
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
@EndUserText.label: 'Sales Order Link for BOM'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_SalesOrderBOMLink as select from kdst
association [0..1] to I_BillOfMaterialUsage as _BillOfMaterialUsage on $projection.BillOfMaterialVariantUsage = _BillOfMaterialUsage.BillOfMaterialVariantUsage
                                                                      and _BillOfMaterialUsage.Language         = $session.system_language 
{
  key stlnr                                   as BillOfMaterial,
  key stlal                                   as BillOfMaterialVariant,
  key matnr                                   as Material,
   @Consumption.valueHelpDefinition: [ { entity: { name:    'I_PlantStdVH',
                                                   element: 'Plant' } }]
  @ObjectModel.text.element: [ 'Plant' ]
  key werks                                   as Plant,
  key stlan                                   as BillOfMaterialVariantUsage,
  key vbeln                                   as SalesOrder,
  key vbpos                                   as SalesOrderItem,
  cast ('K' as stlty preserving type)     as BillOfMaterialCategory,
  _BillOfMaterialUsage
      
}
```
