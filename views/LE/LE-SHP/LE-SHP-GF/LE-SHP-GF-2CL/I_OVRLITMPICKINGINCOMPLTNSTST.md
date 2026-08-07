---
name: I_OVRLITMPICKINGINCOMPLTNSTST
description: Ovrlitmpickingincompltnstst
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_OVRLITMPICKINGINCOMPLTNSTST

**Ovrlitmpickingincompltnstst**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OvrlItmPickingIncompletionSts` | ✓ | |  | `statu` |
| `Language` | ✓ | |  | `spras` |
| `OvrlItmPickingIncompltnStsDesc` |  | |  | `bezei` |
| `_OvrlItmPickingIncompletionSts` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OvrlItmPickingIncompletionSts` | `I_OvrlItmPickingIncompltnSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'OvrlItmPickingIncompletionSts'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Ovrl Itm Picking Incompletion Sts - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDORITMPIKINCST'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_OvrlItmPickingIncompltnStsT
  as select from tvbst

  association [0..1] to I_OvrlItmPickingIncompltnSts as _OvrlItmPickingIncompletionSts on $projection.OvrlItmPickingIncompletionSts = _OvrlItmPickingIncompletionSts.OvrlItmPickingIncompletionSts
  association [0..1] to I_Language                   as _Language                      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_OvrlItmPickingIncompletionSts'
      @ObjectModel.text.element: ['OvrlItmPickingIncompltnStsDesc']
  key statu as OvrlItmPickingIncompletionSts,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      bezei as OvrlItmPickingIncompltnStsDesc,

      //Associations
      _OvrlItmPickingIncompletionSts,
      _Language
}
where
      tvbst.tbnam = 'LIKP'
  and tvbst.fdnam = 'UVPIS'
```
