---
name: I_ORDERTYPETEXT
description: "Ordertypetext"
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
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_ORDERTYPETEXT

**Ordertypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderType` | ✓ | |  | `cast(txt.auart as aufart preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |  |  |
| `OrderTypeName` |  | |  | `cast(txt.txt as pph_auarttext preserving type)` |  |  |
| `_OrderType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrderType` | `I_OrderType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPORDERTYPETXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OrderType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Order Type - Text'

define view I_OrderTypeText
  as select from t003p as txt
    association [1..1] to I_OrderType as _OrderType on $projection.OrderType = _OrderType.OrderType
    association [0..1] to I_Language  as _Language  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_OrderType'
      @ObjectModel.text.element: ['OrderTypeName']
  key cast(txt.auart as aufart preserving type)      as OrderType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.spras as spras preserving type)       as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.txt as pph_auarttext preserving type) as OrderTypeName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _OrderType,
      _Language
};
```
