---
name: I_MFGORDERTYPE
description: Mfgordertype
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_MFGORDERTYPE

**Mfgordertype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrderType` | ✓ | |  | `cast(typ.OrderType as manufacturingordertype preserving type)` |  |  |
| `ManufacturingOrderCategory` |  | |  | `cast(typ.OrderCategory as manufacturingordercategory preserving type)` |  |  |
| `_Text` | | ✓ | | | | |
| `_MfgOrderCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MfgOrderTypeText` | [0..*] |
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPPMFGORDERTYPE'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrderType'
@ObjectModel.semanticKey: ['ManufacturingOrderType']
@ObjectModel.sapObjectNodeType.name: 'ManufacturingOrderType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Type'

define view entity I_MfgOrderType
  as select from I_OrderType as typ
    association [0..*] to I_MfgOrderTypeText as _Text             on $projection.ManufacturingOrderType = _Text.ManufacturingOrderType
    association [0..1] to I_MfgOrderCategory as _MfgOrderCategory on $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
      @ObjectModel.text.association: '_Text'
  key cast(typ.OrderType     as manufacturingordertype     preserving type) as ManufacturingOrderType,
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      cast(typ.OrderCategory as manufacturingordercategory preserving type) as ManufacturingOrderCategory,

      // Associations
      _MfgOrderCategory,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
  where (typ.OrderCategory = '10' or  //Manufacturing orders only
         typ.OrderCategory = '40');
```
