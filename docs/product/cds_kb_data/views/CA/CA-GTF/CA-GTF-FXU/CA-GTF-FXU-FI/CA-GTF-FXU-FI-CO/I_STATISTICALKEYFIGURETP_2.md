---
name: I_STATISTICALKEYFIGURETP_2
description: "Statisticalkeyfiguretp 2"
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# I_STATISTICALKEYFIGURETP_2

**Statisticalkeyfiguretp 2**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatisticalKeyFigure` | ✓ | |  |  |  |  |
| `ControllingArea` | ✓ | |  |  |  |  |
| `StatisticalKeyFigureForEdit` |  | |  |  |  |  |
| `ControllingAreaForEdit` |  | |  |  |  |  |
| `StatisticalKeyFigureName` |  | |  |  |  |  |
| `StstcKeyFigQuantityUnit` |  | |  |  |  |  |
| `StstcKeyFigCategory` |  | |  |  |  |  |
| `StstclKeyFigCreatedAtDateTime` |  | |  |  |  |  |
| `StstclKeyFigLastChgdAtDteTme` |  | |  |  |  |  |
| `StstclKeyFigureCreatedByUser` |  | |  |  |  |  |
| `StstclKeyFigLastChangedByUser` |  | |  |  |  |  |
| `_StatisticalKeyFigureTextTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Statistical Key Figure - TP'

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:{
  sapObjectNodeType.name: 'StatisticalKeyFigure',
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #ORGANIZATIONAL
  }
}
@ObjectModel.representativeKey: 'StatisticalKeyFigure'

define root view entity I_StatisticalKeyFigureTP_2
  provider contract transactional_interface
  as projection on R_StatisticalKeyFigureTP as StatisticalKeyFigureTP
{
      @ObjectModel.text.association: '_StatisticalKeyFigureTextTP'
  key StatisticalKeyFigure,
  key ControllingArea,

      @ObjectModel.editableFieldFor: 'StatisticalKeyFigure'
      StatisticalKeyFigureForEdit,
      @ObjectModel.editableFieldFor: 'ControllingArea'
      ControllingAreaForEdit,

      @Semantics.text:true
      StatisticalKeyFigureName,
      StstcKeyFigQuantityUnit,
      StstcKeyFigCategory,
      @Semantics: { dateTime: true,
                    systemDateTime.createdAt: true }
      StstclKeyFigCreatedAtDateTime,
      @Semantics: { dateTime: true,
                    systemDateTime.lastChangedAt:true }
      StstclKeyFigLastChgdAtDteTme,
      StstclKeyFigureCreatedByUser,
      StstclKeyFigLastChangedByUser,

      /* Compositions */
      _StatisticalKeyFigureTextTP : redirected to composition child I_StatisticalKeyFigureTextTP_2
}
```
