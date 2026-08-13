---
name: I_BILLOFMATERIALUSAGESTDVH
description: "Bill of MaterialUSAGESTDVH"
semantic_vi: "Cung cấp hỗ trợ giá trị tiêu chuẩn cho sử dụng bảng thành phần vật liệu, bao gồm việc sử dụng biến thể và mô tả, cho việc sử dụng trong logistics và quản lý vật liệu."
keywords:
  - "bill of material"
  - "bảng thành phần vật liệu"
  - "logistics"
  - "quản lý vật liệu"
  - "standard value help"
  - "hỗ trợ giá trị tiêu chuẩn"
  - "material management"
  - "variant usage"
  - "sử dụng biến thể"
semantic_en: "Provides standard value help for bill of material usage, including variant usage and descriptions, for use in logistics and material management."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
  - value-help
  - standard-value-help
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALUSAGESTDVH

**Bill of MaterialUSAGESTDVH**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialVariantUsage` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `BillOfMaterialVariantUsageDesc` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@Analytics.technicalName: 'IBOMUSAGE_VH'
@ObjectModel.representativeKey: 'BillOfMaterialVariantUsage'

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@ObjectModel.resultSet.sizeCategory: #XS

@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Bill Of Material Usage'


define view entity I_BillOfMaterialUsageStdVH as select from I_BillOfMaterialUsage {
  @ObjectModel.text.element: ['BillOfMaterialVariantUsageDesc']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key BillOfMaterialVariantUsage,
   @Semantics.language: true
   @UI.hidden: true
  key Language,
   @Semantics.text: true
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
  BillOfMaterialVariantUsageDesc
}
```
