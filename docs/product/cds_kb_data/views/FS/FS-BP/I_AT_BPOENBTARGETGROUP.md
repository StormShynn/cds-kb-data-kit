---
name: I_AT_BPOENBTARGETGROUP
description: "AT Bpoenbtargetgroup"
semantic_vi: "View I_AT_BPOENBTARGETGROUP hiển thị dữ liệu kinh doanh liên quan đến nhóm mục tiêu cho BPO (Business Process Outsourcing) trong thành phần FS-BP của SAP. Nó có thể được sử dụng để lấy thông tin nhóm mục tiêu cho các quy trình BPO."
keywords:
  - "bpo"
  - "target group"
  - "nhiệm vụ kinh doanh"
  - "bán hàng"
  - "mua hàng"
  - "thành phần fs-bp"
  - "sap"
  - "interface view"
  - "cds view"
semantic_en: "The I_AT_BPOENBTARGETGROUP view exposes business data related to target groups for BPO (Business Process Outsourcing) in SAP FS-BP component. It can be used to retrieve target group information for BPO processes."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - component:FS-BP
  - lob:Other
---
# I_AT_BPOENBTARGETGROUP

**AT Bpoenbtargetgroup**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPOeNBTargetGroup` | ✓ | |  | `szg_at` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AT_BPOeNBTargetGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Target Group According to OeNB'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: { representativeKey: 'BPOeNBTargetGroup',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'AT_BPOeNBTargetGroupCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true
           }
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_AT_BPOeNBTargetGroup
  as select from td05_at_fs
  association [0..*] to I_AT_BPOeNBTargetGroupText as _Text on $projection.BPOeNBTargetGroup = _Text.BPOeNBTargetGroup
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key td05_at_fs.szg_at as BPOeNBTargetGroup,
      _Text
}
```
