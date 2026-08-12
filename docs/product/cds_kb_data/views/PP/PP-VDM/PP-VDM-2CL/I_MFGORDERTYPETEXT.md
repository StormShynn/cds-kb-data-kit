---
name: I_MFGORDERTYPETEXT
description: "Mfgordertypetext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERTYPETEXT

**Mfgordertypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrderType` | ✓ | |  | `cast(txt.OrderType as manufacturingordertype preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.Language as spras preserving type)` |  |  |
| `ManufacturingOrderTypeName` |  | |  | `cast(txt.OrderTypeName as manufacturingordertypename preserving type)` |  |  |
| `_OrderType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrderType` | `I_MfgOrderType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPPMFGORDTYPETXT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrderType'
@ObjectModel.sapObjectNodeType.name: 'ManufacturingOrderTypeText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Type - Text'

define view entity I_MfgOrderTypeText 
  as select from I_OrderTypeText as txt
    association [1..1] to I_MfgOrderType as _OrderType on $projection.ManufacturingOrderType = _OrderType.ManufacturingOrderType
    association [0..1] to I_Language     as _Language  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_OrderType'
      @ObjectModel.text.element: ['ManufacturingOrderTypeName']
  key cast(txt.OrderType as manufacturingordertype preserving type)         as ManufacturingOrderType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.Language as spras preserving type)                           as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.OrderTypeName as manufacturingordertypename preserving type) as ManufacturingOrderTypeName,
    
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _OrderType,
      _Language
};
```
