---
name: I_BPLETTERSALUTATION
description: "Bplettersalutation"
semantic_vi: "View Bplettersalutation hiển thị các lời chào trong thư của đối tác kinh doanh, được sử dụng để chào hỏi đối tác kinh doanh trong thư và các tài liệu khác. Nó được sử dụng khi tạo hoặc cập nhật dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "letter salutation"
  - "đối tác kinh doanh"
  - "lời chào trong thư"
  - "business partner master data"
  - "cập nhật dữ liệu đối tác kinh doanh"
  - "sap"
  - "fs-bp"
  - "interface-view"
semantic_en: "The Bplettersalutation view exposes business partner letter salutations, which are used to address business partners in letters and other correspondence. It is used when creating or updating business partner master data."
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
# I_BPLETTERSALUTATION

**Bplettersalutation**

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
| `BPLetterSalutation` | ✓ | |  | `title_let` |  |  |
| `BusinessPartnerCategory` |  | |  | `type` |  |  |
| `_Text` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPLetterSalutationText` | [0..*] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLTRSALUTATION',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BPLetterSalutation',
                dataCategory: #VALUE_HELP,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPLetterSalutationCode',
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
             ignorePropagatedAnnotations: true //For C1 Release
           }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Letter Salutation of Business Partner'

define view I_BPLetterSalutation
  as select from tp02
  association [0..*] to I_BPLetterSalutationText  as _Text                    on $projection.BPLetterSalutation = _Text.BPLetterSalutation
  association [0..*] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on $projection.BPLetterSalutation = _BPFinancialServicesExtn.BPLetterSalutation
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp02.title_let as BPLetterSalutation,
      tp02.type as BusinessPartnerCategory,

      _Text,
      _BPFinancialServicesExtn
}
```
