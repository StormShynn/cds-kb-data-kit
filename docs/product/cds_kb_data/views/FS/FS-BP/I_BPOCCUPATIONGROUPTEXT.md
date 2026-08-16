---
name: I_BPOCCUPATIONGROUPTEXT
description: "Bpoccupationgrouptext"
semantic_vi: "View Bpoccupationgrouptext cung cấp mô tả văn bản của nhóm nghề nghiệp đối tác kinh doanh trong các ngôn ngữ khác nhau. Nó được sử dụng để lấy mô tả nhóm nghề nghiệp đối tác kinh doanh trong các ngôn ngữ khác nhau."
keywords:
  - "business partner"
  - "occupation group"
  - "description"
  - "language"
  - "text view"
  - "interface view"
  - "fs-bp"
  - "sap cds"
  - "business data"
  - "lob other"
  - "fs"
semantic_en: "The Bpoccupationgrouptext view provides text descriptions of business partner occupation groups in different languages. It is used to retrieve occupation group descriptions for business partners in various languages."
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
# I_BPOCCUPATIONGROUPTEXT

**Bpoccupationgrouptext**

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
| `BusinessPartnerOccupationGroup` | ✓ | |  | `jobgr` |  |  |
| `BPOccupationGroupDescription` |  | |  | `bez30` |  |  |
| `_BPOccupationGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPOccupationGroup` | `I_BPOccupationGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLOCCUPTEXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerOccupationGroup',
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
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Occupation Group of BP - Text'

define view I_BPOccupationGroupText
  as select from tb028t
  association [0..1] to I_BPOccupationGroup as _BPOccupationGroup on $projection.BusinessPartnerOccupationGroup = _BPOccupationGroup.BusinessPartnerOccupationGroup
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tb028t.spras as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPOccupationGroup'
  key tb028t.jobgr as BusinessPartnerOccupationGroup,

      @Semantics.text: true
      tb028t.bez30 as BPOccupationGroupDescription,

      _BPOccupationGroup,
      _Language
}
```
