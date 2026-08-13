---
name: I_ACCDOCITEMCATEGORY
description: "Accdocitemcategory"
semantic_vi: "View I_ACCDOCITEMCATEGORY cung cấp truy cập vào các loại mục tài khoản tài liệu kế toán, được sử dụng để phân loại các mục trong tài liệu kế toán. Nó được sử dụng để truy xuất và quản lý các loại mục này cho mục đích kế toán tài chính."
keywords:
  - "accounting document"
  - "tài liệu kế toán"
  - "accounting document item category"
  - "loại mục tài khoản tài liệu kế toán"
  - "financial accounting"
  - "kế toán tài chính"
  - "fi-gl"
  - "fi"
  - "fi-gl-gl"
  - "item-level"
  - "interface-view"
  - "lob:finance"
semantic_en: "The I_ACCDOCITEMCATEGORY view provides access to accounting document item categories, which are used to categorize items within accounting documents. It is used to retrieve and manage these categories for financial accounting purposes."
app_component: FI-GL-GL-A-2CL
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
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - item-level
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCDOCITEMCATEGORY

**Accdocitemcategory**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `AccountingDocumentItemCategory` | ✓ | |  | `cast(t8g02.linetype as fis_accdoc_itemcat preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccDocItemCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IFIACCDOCITEMCAT'  
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true }
@EndUserText.label: 'Accounting Document Item Category'
@ObjectModel: { representativeKey: 'AccountingDocumentItemCategory',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'JournalEntryItemCategory' }                                
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_AccDocItemCategory as select from t8g02
association[0..*] to I_AccDocItemCategoryText as _Text on $projection.AccountingDocumentItemCategory = _Text.AccountingDocumentItemCategory 
{ 
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  key cast(t8g02.linetype as fis_accdoc_itemcat preserving type ) as AccountingDocumentItemCategory,
  
  _Text
}
```
