---
name: I_BPEMPLOYEEGROUPTEXT
description: "Bpemployeegrouptext"
semantic_vi: "View I_BPEMPLOYEEGROUPTEXT cung cấp mô tả văn bản cho nhóm nhân viên đối tác kinh doanh trong một ngôn ngữ cụ thể. Nó được sử dụng để lấy và hiển thị mô tả này trong các ứng dụng."
keywords:
  - "business partner"
  - "employee group"
  - "description"
  - "language"
  - "text view"
  - "interface view"
  - "fs-bp"
  - "sap cds"
  - "business partner employee group"
  - "bpemployee groupdescription"
semantic_en: "The I_BPEMPLOYEEGROUPTEXT view provides text descriptions for business partner employee groups in a specific language. It is used to retrieve and display these descriptions in applications."
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
# I_BPEMPLOYEEGROUPTEXT

**Bpemployeegrouptext**

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
| `Language` | ✓ | |  | `cast(tp05t.langu as langu preserving type)` |  |  |
| `BusinessPartnerEmployeeGroup` | ✓ | |  | `cast(tp05t.staff_grp as bp_staff_g preserving type)` |  |  |
| `BPEmployeeGroupDescription` |  | |  | `staff_gr_t` |  |  |
| `_BusinessPartnerEmployeeGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerEmployeeGroup` | `I_BusinessPartnerEmployeeGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Employee Group - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerEmployeeGroup',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_BPEmployeeGroupText
  as select from tp05t
  association [0..1] to I_BusinessPartnerEmployeeGroup as _BusinessPartnerEmployeeGroup on $projection.BusinessPartnerEmployeeGroup = _BusinessPartnerEmployeeGroup.BusinessPartnerEmployeeGroup
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp05t.langu as langu preserving type)               as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BusinessPartnerEmployeeGroup'
  key cast(tp05t.staff_grp as bp_staff_g preserving type)  as BusinessPartnerEmployeeGroup,

      @Semantics.text: true
      tp05t.staff_gr_t                                     as BPEmployeeGroupDescription,

      _BusinessPartnerEmployeeGroup,
      _Language
}
```
