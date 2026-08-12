---
name: I_SOURCEOFSUPPLYCATEGORYT
description: "Source of Supply Category - Text"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
