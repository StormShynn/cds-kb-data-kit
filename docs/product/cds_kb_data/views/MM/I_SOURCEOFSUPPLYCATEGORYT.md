---
name: I_SOURCEOFSUPPLYCATEGORYT
description: "Source of Supply Category - Text"
app_component: MM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORYT')/$value
semantic_en: "Source of Supply Category - Text"
semantic_vi: "Source of Supply Category Text — CDS view giao diện dựa trên tmbwt."
keywords:
  - "source"
  - "supply"
  - "category"
  - "text"
  - "language"
  - "name"
tags:
  - MM
  - bo:salesorder
  - component:MM
  - interface-view
  - lob:sourcing & procurement
---
# I_SOURCEOFSUPPLYCATEGORYT

**Source of Supply Category - Text**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceOfSupplyCategory` | ✓ | |  | `bwscl` | `CHAR(1)` | Source of supply key |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SourceOfSupplyCategoryName` |  | |  | `bwscb` | `CHAR(40)` | Source of supply key description |
| `_SourceOfSupplyCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceOfSupplyCategory` | `I_SourceOfSupplyCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORYT')/$value)*

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISRCOFSPLYCTGRYT'
@EndUserText.label: 'Source of Supply Category Text'

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SourceOfSupplyCategory',
    usageType: {
      serviceQuality: #A,
      sizeCategory : #S,
      dataClass: #META
    }
}

define view I_SourceOfSupplyCategoryT
  as select from tmbwt
  association [1..1] to I_SourceOfSupplyCategory as _SourceOfSupplyCategory on $projection.SourceOfSupplyCategory = _SourceOfSupplyCategory.SourceOfSupplyCategory
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SourceOfSupplyCategory'
      @ObjectModel.text.element: ['SourceOfSupplyCategoryName']
  key bwscl as SourceOfSupplyCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      bwscb as SourceOfSupplyCategoryName,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SourceOfSupplyCategory,
      _Language
}
```
