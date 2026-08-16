---
name: I_BPGERASTRGLNRSTRCDASTQTATEXT
description: "Bpgerastrglnrstrcdastqtatext"
semantic_vi: "Chỉ ra các mô tả hạn chế cho hạn mức AST cho một ngôn ngữ và hạn mức AST. Sử dụng để lấy mô tả văn bản cho hạn chế hạn mức AST trong một ngôn ngữ cụ thể."
keywords:
  - "sap"
  - "cds"
  - "view"
  - "fs-bp"
  - "ast"
  - "quota"
  - "description"
  - "language"
  - "text"
  - "restricted"
  - "fs"
  - "lob-other"
semantic_en: "Exposes restricted AST quota descriptions for a given language and AST quota. Used to retrieve text descriptions for AST quota restrictions in a specific language."
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
# I_BPGERASTRGLNRSTRCDASTQTATEXT

**Bpgerastrglnrstrcdastqtatext**

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
