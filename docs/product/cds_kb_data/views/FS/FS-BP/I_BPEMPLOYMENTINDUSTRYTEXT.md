---
name: I_BPEMPLOYMENTINDUSTRYTEXT
description: "Bpemploymentindustrytext"
semantic_vi: "View I_BPEMPLOYMENTINDUSTRYTEXT cung cấp mô tả và mô tả ngắn gọn về các ngành nghề lao động trong nhiều ngôn ngữ, hữu ích cho việc hiển thị thông tin ngành nghề trong các ứng dụng kinh doanh."
keywords:
  - "employment industry"
  - "mô tả ngành nghề lao động"
  - "business application"
  - "description"
  - "short description"
  - "language"
  - "fs-bp"
  - "interface view"
  - "text view"
  - "sap"
semantic_en: "The I_BPEMPLOYMENTINDUSTRYTEXT view provides employment industry descriptions and short descriptions in various languages, useful for displaying industry information in business applications."
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
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPEMPLOYMENTINDUSTRYTEXT

**Bpemploymentindustrytext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `BusPartEmplrIndstryCode` | ✓ | |  | `ind_sector` |  |  |
| `BPEmploymentIndustryDesc` |  | |  | `text` |  |  |
| `BPEmploymentIndustryShortDesc` |  | |  | `text_short` |  |  |
| `_BPEmploymentIndustry` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPEmploymentIndustry` | `I_BPEmploymentIndustry` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLINDUSTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusPartEmplrIndstryCode',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY
                                        ],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT                
              }
@Analytics.dataExtraction.enabled: true              
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Employment Industry of BP - Text'

define view I_BPEmploymentIndustryText
  as select from tb038b
     inner join tb038 on tb038b.istype = tb038.istype and tb038.istdef = 'X'
  association [0..1] to I_BPEmploymentIndustry as _BPEmploymentIndustry on $projection.BusPartEmplrIndstryCode = _BPEmploymentIndustry.BusPartEmplrIndstryCode
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tb038b.spras      as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPEmploymentIndustry'
  key tb038b.ind_sector as BusPartEmplrIndstryCode,

      @Semantics.text: true
      tb038b.text       as BPEmploymentIndustryDesc,
      
      @Semantics.text: true
      tb038b.text_short as BPEmploymentIndustryShortDesc,
      
      _BPEmploymentIndustry,
      _Language
}
```
