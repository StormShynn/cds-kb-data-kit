---
name: I_BPGRPASSIGNMENTCATEGORYTEXT
description: "Bpgrpassignmentcategorytext"
semantic_vi: "Chỉ ra các mô tả nhóm giao việc kinh doanh cho ứng dụng FS-BP."
keywords:
  - "fs-bp"
  - "business group"
  - "assignment category"
  - "description"
  - "sap"
  - "cds view"
  - "fs"
  - "bp"
  - "category text"
  - "group assignment"
  - "kinh doanh"
  - "giao việc"
semantic_en: "Exposes business group assignment category descriptions for use in FS-BP application components."
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
# I_BPGRPASSIGNMENTCATEGORYTEXT

**Bpgrpassignmentcategorytext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BPGroupAssignmentCategory` | ✓ | |  | `cast ( dd07t.domvalue_l as vvgidtype_at )` |  |  |
| `BPGrpAssgmtCategoryDescription` |  | |  | `ddtext` |  |  |
| `_BPGrpAssignmentCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPGrpAssignmentCategory` | `I_BPGrpAssignmentCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPGRPASSGMTTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'BPGroupAssignmentCategory'
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Group Assignment Category - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPGrpAssignmentCategoryText
  as select from dd07t
  association [0..1] to I_BPGrpAssignmentCategory as _BPGrpAssignmentCategory on $projection.BPGroupAssignmentCategory = _BPGrpAssignmentCategory.BPGroupAssignmentCategory
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                           as Language,

      @ObjectModel.text.element: ['BPGrpAssgmtCategoryDescription']
      @ObjectModel.foreignKey.association: '_BPGrpAssignmentCategory'
  key cast ( dd07t.domvalue_l as vvgidtype_at ) as BPGroupAssignmentCategory,
      @Semantics.text: true
      dd07t.ddtext                               as BPGrpAssgmtCategoryDescription,

      _BPGrpAssignmentCategory,
      _Language
}
where
      dd07t.domname  = 'VVGIDTYPE_AT'
  and dd07t.as4local = 'A'
```
