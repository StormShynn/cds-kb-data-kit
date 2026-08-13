---
name: D_BILLOFMATERIALGETCOMPAREFLDR
description: "D Bill of MaterialGETCOMPAREFLDR"
semantic_vi: "View D_BILLOFMATERIALGETCOMPAREFLDR cung cấp truy cập vào các trường so sánh của bảng vật liệu, được sử dụng để so sánh các vật liệu khác nhau hoặc phiên bản của một vật liệu trong bảng vật liệu. Nó thường được sử dụng khi phân tích hoặc duy trì cấu trúc vật liệu trong logistics."
keywords:
  - "bill of material"
  - "bảng vật liệu"
  - "so sánh"
  - "logistics"
  - "lo"
  - "lo-md"
  - "lo-md-bom"
  - "material"
  - "vật liệu"
  - "ekko"
semantic_en: "The D_BILLOFMATERIALGETCOMPAREFLDR view provides access to bill of material comparison fields, which are used to compare different materials or versions of a material in a bill of material. It is typically used when analyzing or maintaining material structures in logistics."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BILLOFMATERIALGETCOMPAREFLDR

**D Bill of MaterialGETCOMPAREFLDR**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ComparisonFieldName` |  | |  | `fieldname` |  |  |
| `ComparisonFieldNameText` |  | |  | `as4text` |  |  |
| `ComparisonFieldObjTypeValue` |  | |  | `bom_comp_obj_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Bill of Material Comparison fields'
@VDM.usage.type:[#ACTION_RESULT_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE               
 }   
define abstract entity D_BillOfMaterialGetCompareFldR
{
  ComparisonFieldName          : fieldname;
  ComparisonFieldNameText      : as4text;
  ComparisonFieldObjTypeValue  : bom_comp_obj_type;
}
```
