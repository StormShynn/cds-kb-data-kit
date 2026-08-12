---
name: I_PURGDOCUMENTITEMCATEGORY
description: "Purgdocumentitemcategory"
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
  - document
  - item-level
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGDOCUMENTITEMCATEGORY

**Purgdocumentitemcategory**

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
| `PurchasingDocumentItemCategory` | ✓ | |  | `pstyp` |  |  |
| `GoodsReceiptIsExpected` |  | |  | `wepos` |  |  |
| `GoodsReceiptIsNonValuated` |  | |  | `weunb` |  |  |
| `InvoiceIsExpected` |  | |  | `repos` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMMPURDOCITMCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Item Category for Purchasing Document'
@Analytics.dataCategory:  #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'PurchasingDocumentItemCategory'
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentItemCategory'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PurgDocumentItemCategory
  as select from t163
  composition [0..*] of I_PurgDocumentItemCategoryText as _Text
{
      @ObjectModel.text.association: '_Text'
  key t163.pstyp as PurchasingDocumentItemCategory,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      t163.wepos as GoodsReceiptIsExpected,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      t163.weunb as GoodsReceiptIsNonValuated,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      t163.repos as InvoiceIsExpected,
      _Text
}
```
