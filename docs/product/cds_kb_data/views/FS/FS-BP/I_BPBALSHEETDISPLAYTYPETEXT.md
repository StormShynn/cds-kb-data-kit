---
name: I_BPBALSHEETDISPLAYTYPETEXT
description: "Bpbalsheetdisplaytypetext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
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
# I_BPBALSHEETDISPLAYTYPETEXT

**Bpbalsheetdisplaytypetext**

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
| `BPBalanceSheetDisplayType` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_bal_flg )` |  |  |
| `BPBalanceSheetDisplayTypeDesc` |  | |  | `ddtext` |  |  |
| `_BPBalanceSheetDisplayType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPBalanceSheetDisplayType` | `I_BPBalanceSheetDisplayType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Balance Sheet Display for BP - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'BPBalanceSheetDisplayType'
}
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_BPBalSheetDisplayTypeText
  as select from dd07t
  association [0..1] to I_BPBalanceSheetDisplayType as _BPBalanceSheetDisplayType on $projection.BPBalanceSheetDisplayType = _BPBalanceSheetDisplayType.BPBalanceSheetDisplayType
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                        as Language,

      @ObjectModel.text.element: ['BPBalanceSheetDisplayTypeDesc']
      @ObjectModel.foreignKey.association: '_BPBalanceSheetDisplayType'
  key cast ( dd07t.domvalue_l as bp_bal_flg ) as BPBalanceSheetDisplayType,
      @Semantics.text: true
      dd07t.ddtext                            as BPBalanceSheetDisplayTypeDesc,

      _BPBalanceSheetDisplayType,
      _Language
}
where
      dd07t.domname  = 'BP_BAL_FLG'
  and dd07t.as4local = 'A'
```
