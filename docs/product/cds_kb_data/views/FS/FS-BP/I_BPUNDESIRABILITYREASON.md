---
name: I_BPUNDESIRABILITYREASON
description: "Bpundesirabilityreason"
semantic_vi: "View Bpundesirabilityreason CDS hiển thị dữ liệu kinh doanh liên quan đến lý do không mong muốn trong ứng dụng FS-BP. Nó có thể được sử dụng để lấy hoặc chỉnh sửa dữ liệu này trong phát triển ABAP hoặc đám mây."
keywords:
  - "fs-bp"
  - "undesirability reason"
  - "reason"
  - "fs"
  - "bp"
  - "business data"
  - "application"
  - "abap"
  - "cloud development"
  - "lob other"
  - "interface view"
semantic_en: "The Bpundesirabilityreason CDS view exposes business data related to undesirability reasons in the FS-BP application. It can be used to retrieve or manipulate this data in ABAP or cloud development."
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
# I_BPUNDESIRABILITYREASON

**Bpundesirabilityreason**

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
| `UndesirabilityReason` | ✓ | |  | `unw_reason` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPUndesirabilityReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Reason Undesirable Client'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: { representativeKey: 'UndesirabilityReason',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPUndesirabilityReasonCode',
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

define view entity I_BPUndesirabilityReason
  as select from tp18
  association [0..*] to I_BPUndesirabilityReasonText as _Text on $projection.UndesirabilityReason = _Text.UndesirabilityReason
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp18.unw_reason as UndesirabilityReason,
      _Text
}
```
