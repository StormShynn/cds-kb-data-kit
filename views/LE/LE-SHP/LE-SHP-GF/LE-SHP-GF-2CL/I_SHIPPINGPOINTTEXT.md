---
name: I_SHIPPINGPOINTTEXT
description: Shippingpointtext
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SHIPPINGPOINTTEXT

**Shippingpointtext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ShippingPoint` | `vstel` |
| key `Language` | `spras` |
| `ShippingPointName` | `vtext` |
| `_ShippingPoint` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ShippingPoint'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Shipping Point - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AbapCatalog.sqlViewName: 'ISDSHIPPINGPNTT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.sapObjectNodeType.name: 'ShippingPointText'
@Search.searchable: true
@Consumption.ranked: true

define view I_ShippingPointText
  as select from tvstt
  association [0..1] to I_ShippingPoint as _ShippingPoint on $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
  key vstel as ShippingPoint,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      vtext as ShippingPointName,

      //Associations
      _ShippingPoint,
      _Language
};
```
