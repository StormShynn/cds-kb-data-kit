---
name: I_BPGERASTRGLNRSTRCDASTQTATEXT
description: "Bpgerastrglnrstrcdastqtatext"
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
# I_BPGERASTRGLNRSTRCDASTQTATEXT

**Bpgerastrglnrstrcdastqtatext**

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
| `BPGerAstRglnRestrictedAstQuota` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_entity_quota )` |  |  |
| `BPGerAstRglnRstrcdAstQtaDesc` |  | |  | `ddtext` |  |  |
| `_BPGerAstRglnRstrcdAstQta` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPGerAstRglnRstrcdAstQta` | `I_BPGerAstRglnRstrcdAstQta` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPGERASTRGLNTXT',
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
                representativeKey: 'BPGerAstRglnRestrictedAstQuota'
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'BP Asset Regulation - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPGerAstRglnRstrcdAstQtaText
  as select from dd07t
  association [0..1] to I_BPGerAstRglnRstrcdAstQta as _BPGerAstRglnRstrcdAstQta on $projection.BPGerAstRglnRestrictedAstQuota = _BPGerAstRglnRstrcdAstQta.BPGerAstRglnRestrictedAstQuota
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                             as Language,

      @ObjectModel.text.element: ['BPGerAstRglnRstrcdAstQtaDesc']
      @ObjectModel.foreignKey.association: '_BPGerAstRglnRstrcdAstQta'
  key cast ( dd07t.domvalue_l as bp_entity_quota ) as BPGerAstRglnRestrictedAstQuota,
      @Semantics.text: true
      dd07t.ddtext                                 as BPGerAstRglnRstrcdAstQtaDesc,

      _BPGerAstRglnRstrcdAstQta,
      _Language
}
where
      dd07t.domname  = 'BP_ENTITY_QUOTA'
  and dd07t.as4local = 'A'
```
