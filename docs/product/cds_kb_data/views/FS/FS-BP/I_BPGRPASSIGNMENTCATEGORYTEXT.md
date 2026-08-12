---
name: I_BPGRPASSIGNMENTCATEGORYTEXT
description: "Bpgrpassignmentcategorytext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
