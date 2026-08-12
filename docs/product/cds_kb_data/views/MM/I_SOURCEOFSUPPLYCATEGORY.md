---
name: I_SOURCEOFSUPPLYCATEGORY
description: "Source of Supply Category"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORY')/$value
semantic_en: "Source of Supply Category"
semantic_vi: "Source of Supply Category — CDS view giao diện dựa trên tmbw1."
keywords:
  - "source"
  - "supply"
  - "category"
tags:
  - MM
  - bo:salesorder
  - component:MM
  - interface-view
  - lob:sourcing & procurement
---
# I_SOURCEOFSUPPLYCATEGORY

**Source of Supply Category**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceOfSupplyCategory` | ✓ | |  | `bwscl` | `CHAR(1)` | Source of supply key |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SourceOfSupplyCategoryT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOURCEOFSUPPLYCATEGORY')/$value)*

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISRCOFSPLYCTGRY'
@EndUserText.label: 'Source of Supply Category'

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'SourceOfSupplyCategory',
    usageType: {
      serviceQuality: #A,
      sizeCategory : #S,
      dataClass: #META
   }
}
define view I_SourceOfSupplyCategory
  as select from tmbw1
  association [0..*] to I_SourceOfSupplyCategoryT as _Text on $projection.SourceOfSupplyCategory = _Text.SourceOfSupplyCategory
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key bwscl as SourceOfSupplyCategory,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
