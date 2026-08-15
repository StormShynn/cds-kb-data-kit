---
name: I_BPMARITALPROPERTYREGIME
description: "Bpmaritalpropertyregime"
semantic_vi: "View Bpmaritalpropertyregime hiển thị các chế độ tài sản hôn nhân cho mục đích kinh doanh, đặc biệt là trong việc phân chia tài sản gia đình và kế hoạch kế thừa doanh nghiệp."
keywords:
  - "marital property regime"
  - "chế độ tài sản hôn nhân"
  - "family settlement"
  - "phân chia tài sản gia đình"
  - "business succession planning"
  - "kế hoạch kế thừa doanh nghiệp"
  - "fs-bp"
  - "interface-view"
  - "component:fs-bp"
  - "lob:other"
  - "sap cds view"
semantic_en: "The Bpmaritalpropertyregime view exposes marital property regimes for business use, particularly in family settlement and business succession planning."
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
# I_BPMARITALPROPERTYREGIME

**Bpmaritalpropertyregime**

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
| `BPMaritalPropertyRegime` | ✓ | |  | `proprty_st` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPMaritalPropertyRegimeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Marital Property Regime'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: { representativeKey: 'BPMaritalPropertyRegime',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPMaritalPropertyRegimeCode',
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

define view entity I_BPMaritalPropertyRegime
  as select from tp04
  association [0..*] to I_BPMaritalPropertyRegimeText as _Text on $projection.BPMaritalPropertyRegime = _Text.BPMaritalPropertyRegime
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp04.proprty_st as BPMaritalPropertyRegime,
      _Text
}
```
