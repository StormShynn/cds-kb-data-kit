---
name: I_PRODUCTIONORDERTYPETEXT
description: "Production OrderTYPETEXT"
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
  - text-view
  - product
  - production-order
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERTYPETEXT

**Production OrderTYPETEXT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrderType` | ✓ | |  | `cast(txt.OrderType as vdm_prodnordertype preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.Language as spras preserving type)` |  |  |
| `ProductionOrderTypeName` |  | |  | `OrderTypeName` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProductionOrderType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPRODNORDTYPETXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductionOrderType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Order Type - Text'

define view entity I_ProductionOrderTypeText 
  as select from I_OrderTypeText as txt
    association to parent I_ProductionOrderType as _ProductionOrderType on $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
    association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      @ObjectModel.text.element: ['ProductionOrderTypeName']
  key cast(txt.OrderType as vdm_prodnordertype preserving type) as ProductionOrderType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.Language as spras preserving type)               as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.OrderTypeName                                         as ProductionOrderTypeName,
    
      // Associations
      _ProductionOrderType,
      _Language
};
```
