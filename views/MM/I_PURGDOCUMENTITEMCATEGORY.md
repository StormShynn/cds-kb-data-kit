---
name: I_PURGDOCUMENTITEMCATEGORY
description: Purgdocumentitemcategory
app_component: MM
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchasingDocumentItemCategory` | `t163.pstyp` |
| `GoodsReceiptIsExpected` | `t163.wepos` |
| `GoodsReceiptIsNonValuated` | `t163.weunb` |
| `InvoiceIsExpected` | `t163.repos` |
| `_Text` | *Association* |

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
