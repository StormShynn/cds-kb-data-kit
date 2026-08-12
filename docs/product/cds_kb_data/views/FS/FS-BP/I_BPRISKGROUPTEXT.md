---
name: I_BPRISKGROUPTEXT
description: "Bpriskgrouptext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
