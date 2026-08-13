---
name: I_BOMITEMCATEGORYTEXT
description: "Bomitemcategorytext"
semantic_vi: "View I_BOMITEMCATEGORYTEXT cung cấp mô tả văn bản cho các loại vật tư trong danh mục vật tư, có thể được sử dụng để hiển thị tên và mô tả loại vật tư trong các ứng dụng."
keywords:
  - "bom"
  - "bill of material"
  - "item category"
  - "text view"
  - "category description"
  - "sap cds view"
  - "logistics"
  - "lo"
  - "lo-md-bom"
  - "language"
  - "description"
semantic_en: "The I_BOMITEMCATEGORYTEXT view provides text descriptions for bill of material item categories, which can be used to display category names and descriptions in applications."
app_component: LO-MD-BOM-2CL
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
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - text-view
  - bom
  - text
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_BOMITEMCATEGORYTEXT

**Bomitemcategorytext**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `BillOfMaterialItemCategory` | ✓ | |  | `postp` |  |  |
| `BillOfMaterialItemCategoryDesc` |  | |  | `ptext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BillOfMaterialItemCategory'
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IBOMITMCATEGORYT'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@EndUserText.label: 'Bill Of Material Item Category - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [  #CDS_MODELING_ASSOCIATION_TARGET, 
                                       #SQL_DATA_SOURCE, 
                                       #CDS_MODELING_DATA_SOURCE, 
                                       #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'BillOfMaterialItemCategoryText'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_BomItemCategoryText
  as select from t418t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras     as Language,
      _Language,
  key postp     as BillOfMaterialItemCategory,
      @Semantics.text: true
      ptext     as BillOfMaterialItemCategoryDesc

}
```
