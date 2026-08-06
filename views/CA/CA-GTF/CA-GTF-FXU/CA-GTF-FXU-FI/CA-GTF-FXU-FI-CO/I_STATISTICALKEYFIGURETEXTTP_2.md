---
name: I_STATISTICALKEYFIGURETEXTTP_2
description: Statisticalkeyfiguretexttp 2
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - text
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# I_STATISTICALKEYFIGURETEXTTP_2

**Statisticalkeyfiguretexttp 2**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `Language` |
| key `ControllingArea` | `ControllingArea` |
| key `StatisticalKeyFigure` | `StatisticalKeyFigure` |
| `LanguageForEdit` | `LanguageForEdit` |
| `StatisticalKeyFigureName` | `StatisticalKeyFigureName` |
| `_StatisticalKeyFigureTP` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Statistical Key Figure - Text TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  dataCategory: #TEXT,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #ORGANIZATIONAL
  }
}
@ObjectModel.representativeKey: 'StatisticalKeyFigure'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_StatisticalKeyFigureTextTP_2
  as projection on R_StatisticalKeyFigureTextTP
{
      @Semantics.language: true
  key Language,
  key ControllingArea,
  key StatisticalKeyFigure,

      @ObjectModel.editableFieldFor: 'Language'
      LanguageForEdit,

      @Semantics.text: true
      StatisticalKeyFigureName,

      /* Associations */
      _StatisticalKeyFigureTP : redirected to parent I_StatisticalKeyFigureTP_2
}
```
