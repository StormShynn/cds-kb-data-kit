---
name: I_BOMGROUPDEX
description: "Bomgroupdex"
semantic_vi: "View I_BOMGROUPDEX cung cấp thông tin chi tiết về các nhóm vật liệu (BOM) bao gồm cấu trúc và lịch sử của chúng. Nó được sử dụng để phân tích và quản lý các nhóm vật liệu trong lĩnh vực logistics."
keywords:
  - "bom"
  - "bom group"
  - "logistics"
  - "sap"
  - "cds view"
  - "bill of materials"
  - "ngành logistics"
  - "cds"
  - "bom nhóm"
  - "vật liệu"
  - "sự kiện lịch sử"
semantic_en: "The I_BOMGROUPDEX view provides a detailed breakdown of bill of materials (BOM) groups, including their structure and history. It is used to analyze and manage BOM groups in the logistics domain."
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
# I_BOMGROUPDEX

**Bomgroupdex**

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
| `BOMGroupUUID` | ✓ | |  |  |  |  |
| `ParentBOMGroupUUID` |  | |  |  |  |  |
| `BOMGroupName` |  | |  |  |  |  |
| `BOMGroupDescription` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `BOMGroupLastChangedDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Data extaction for Bom Groups'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]


@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled:true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'stgo',
              role: #MAIN,
              viewElement: ['BOMGroupUUID'],
              tableElement: ['groupuuid' ] }


          ]
        }
    }
}
@Analytics.technicalName: 'IBOMGROUPDEX'
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterialGroup'
define view entity I_BOMGroupDEX
  as select from I_BOMGroups
{
      @Semantics.uuid: true
  key BOMGroupUUID,
      @Semantics.uuid: true
      ParentBOMGroupUUID,
      BOMGroupName,
      BOMGroupDescription,
      CreationDateTime,
      BOMGroupLastChangedDateTime,
      CreatedByUser,
      LastChangedByUser
}
```
