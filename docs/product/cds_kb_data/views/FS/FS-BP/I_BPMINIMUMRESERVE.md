---
name: I_BPMINIMUMRESERVE
description: "Bpminimumreserve"
semantic_vi: "View I_BPMINIMUMRESERVE CDS hiển thị mức dự trữ tối thiểu cho đối tác kinh doanh và được sử dụng khi xác định yêu cầu dự trữ tối thiểu cho các giao dịch kinh doanh."
keywords:
  - "business partner"
  - "dự trữ tối thiểu"
  - "mức dự trữ"
  - "business transaction"
  - "đối tác kinh doanh"
  - "giao dịch kinh doanh"
  - "sap"
  - "fs-bp"
  - "interface-view"
  - "lob:other"
semantic_en: "The I_BPMINIMUMRESERVE CDS view exposes the minimum reserve for business partners and is used when determining the minimum reserve requirements for business transactions."
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
# I_BPMINIMUMRESERVE

**Bpminimumreserve**

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
| `BPMinimumReserve` | ✓ | |  | `cast ( dd07l.domvalue_l as bnk_min_rsv )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPMinimumReserveText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPMINRESERVE',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                representativeKey: 'BPMinimumReserve',
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'BPMinimumReserveCode',
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
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@EndUserText.label: 'Subject to min reserve indicator'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view I_BPMinimumReserve
  as select from dd07l
  association [0..*] to I_BPMinimumReserveText as _Text on $projection.BPMinimumReserve = _Text.BPMinimumReserve
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as bnk_min_rsv ) as BPMinimumReserve,
      _Text
}
where
      dd07l.domname  = 'BNK_MIN_RSV'
  and dd07l.as4local = 'A'
```
