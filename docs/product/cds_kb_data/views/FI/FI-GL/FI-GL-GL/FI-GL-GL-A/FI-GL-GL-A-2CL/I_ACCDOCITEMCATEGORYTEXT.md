---
name: I_ACCDOCITEMCATEGORYTEXT
description: "Accdocitemcategorytext"
semantic_vi: "View Accdocitemcategorytext cung cấp các mô tả văn bản cho các loại tài khoản giao dịch tài khoản trong một ngôn ngữ cụ thể, hữu ích khi hiển thị tên loại tài khoản trong các ứng dụng đa ngôn ngữ."
keywords:
  - "accounting document item category"
  - "tài khoản giao dịch tài khoản"
  - "text view"
  - "view"
  - "fi-gl-gl-a-2cl"
  - "fi"
  - "fi-gl"
  - "fi-gl-gl"
  - "interface view"
  - "item-level"
  - "text"
  - "finance"
semantic_en: "The Accdocitemcategorytext view provides text descriptions for accounting document item categories in a specific language, useful when displaying category names in multi-language applications."
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
  - text-view
  - text
  - item-level
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCDOCITEMCATEGORYTEXT

**Accdocitemcategorytext**

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
| `AccountingDocumentItemCategory` | ✓ | |  | `cast(t8g02t.linetype as fis_accdoc_itemcat preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `AccountingDocItemCategoryName` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataExtraction.enabled: true}
@EndUserText.label: 'Accounting Document Item Category - Text'
@ObjectModel: { dataCategory: #TEXT, 
                representativeKey: 'AccountingDocumentItemCategory',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }     
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_AccDocItemCategoryText as select from t8g02t 
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{ 
  key cast(t8g02t.linetype as fis_accdoc_itemcat preserving type ) as AccountingDocumentItemCategory, 
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key t8g02t.langu as Language, 

  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  t8g02t.text as AccountingDocItemCategoryName,
  
  _Language
}
```
