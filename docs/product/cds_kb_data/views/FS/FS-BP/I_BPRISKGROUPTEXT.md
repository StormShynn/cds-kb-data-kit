---
name: I_BPRISKGROUPTEXT
description: "Bpriskgrouptext"
semantic_vi: "Chứa mô tả nhóm rủi ro đối tác kinh doanh trong nhiều ngôn ngữ, hữu ích để hiển thị thông tin nhóm rủi ro cho người dùng theo ngôn ngữ yêu thích của họ."
keywords:
  - "business partner"
  - "risk group"
  - "description"
  - "language"
  - "sap"
  - "fs-bp"
  - "interface view"
  - "text view"
  - "text"
  - "component fs-bp"
  - "lob other"
semantic_en: "Exposes business partner risk group descriptions in multiple languages, useful for displaying risk group information to users in their preferred language."
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
# I_BPRISKGROUPTEXT

**Bpriskgrouptext**

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
| `BusinessPartnerRiskGroup` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_risk_group )` |  |  |
| `BPRiskGroupDescription` |  | |  | `ddtext` |  |  |
| `_BPRiskGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPRiskGroup` | `I_BPRiskGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRISKGROUPTXT',
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
                representativeKey: 'BusinessPartnerRiskGroup'
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Risk Group - Text'
define view I_BPRiskGroupText
  as select from dd07t
  association [0..1] to I_BPRiskGroup as _BPRiskGroup on $projection.BusinessPartnerRiskGroup = _BPRiskGroup.BusinessPartnerRiskGroup
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                           as Language,

      @ObjectModel.text.element: ['BPRiskGroupDescription']
      @ObjectModel.foreignKey.association: '_BPRiskGroup'
  key cast ( dd07t.domvalue_l as bp_risk_group ) as BusinessPartnerRiskGroup,
      @Semantics.text: true

      dd07t.ddtext                               as BPRiskGroupDescription,

      _BPRiskGroup,
      _Language
}
where
      dd07t.domname  = 'BP_RISK_GROUP'
  and dd07t.as4local = 'A'
```
