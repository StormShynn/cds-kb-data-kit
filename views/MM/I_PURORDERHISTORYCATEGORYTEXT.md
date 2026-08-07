---
name: I_PURORDERHISTORYCATEGORYTEXT
description: "Purorderhistorycategorytext"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURORDERHISTORYCATEGORYTEXT

**Purorderhistorycategorytext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrderHistCategory` | ✓ | |  | `bewtp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PurchaseOrderHistCategName` |  | |  | `bewtl` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurchaseOrderHistCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PurchaseOrderHistCategory` | `I_PurchaseOrderHistCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchaseOrderHistCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'IMMPUROHISTCATT'
@EndUserText.label: 'Purchase Order History Category - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'PurOrdHistoryCategoryText'

define view I_PurOrderHistoryCategoryText
  as select from t163c
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [1..1] to I_PurchaseOrderHistCategory as _PurchaseOrderHistCategory on $projection.PurchaseOrderHistCategory = _PurchaseOrderHistCategory.PurchaseOrderHistCategory
{
      @ObjectModel.foreignKey.association: '_PurchaseOrderHistCategory'
  key bewtp as  PurchaseOrderHistCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as  Language,

      @Semantics.text: true
      bewtl as  PurchaseOrderHistCategName,

      _Language,
      _PurchaseOrderHistCategory
};
```
