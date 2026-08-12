---
name: I_PURORDERHISTORYCATEGORYTEXT
description: "Purorderhistorycategorytext"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
