---
name: I_BOMGROUPLINKSDEX
description: "Bomgrouplinksdex"
semantic_vi: "View I_BOMGROUPLINKSDEX hiển thị danh sách liên kết nhóm vật liệu BOM, được sử dụng để kết nối các nhóm vật liệu BOM khác nhau trong một BOM. Dữ liệu này hữu ích khi phân tích hoặc chỉnh sửa cấu trúc BOM."
keywords:
  - "bom"
  - "bill of material"
  - "bom group"
  - "bom link"
  - "logistics"
  - "sap"
  - "cds view"
  - "interface view"
  - "data extraction"
  - "bom structure"
  - "vật liệu bom"
  - "nhóm vật liệu bom"
semantic_en: "The I_BOMGROUPLINKSDEX view exposes a list of bill of material group links, which are used to connect different bill of material groups in a BOM. This data is useful when analyzing or modifying BOM structures."
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
  - data-extraction
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_BOMGROUPLINKSDEX

**Bomgrouplinksdex**

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
| `BOMLinkUUID` | ✓ | |  |  |  |  |
| `BOMGroupUUID` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BillOfMaterialVersion` |  | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data extaction for Bom Group links'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]


@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled:true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'stgobomlink',
              role: #MAIN,
              viewElement: [ 'BOMLinkUUID' ],
              tableElement: [ 'linkid' ] }


          ]
        }
    }
}
@Analytics.technicalName: 'IBOMGRPLINKDEX'
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterialGroup'

define view entity I_BOMGroupLinksDEX
  as select from I_BOMGroupLinks
{
      @Semantics.uuid: true
  key BOMLinkUUID,
      @Semantics.uuid: true
      BOMGroupUUID,
      BillOfMaterialCategory,
      BillOfMaterial,
      BillOfMaterialVariant,
      BillOfMaterialVersion,
      BillOfMaterialItemNodeNumber
}
```
