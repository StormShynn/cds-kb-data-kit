---
name: I_INSPLOTSUMMARYCONTROLTEXT
description: Insplotsummarycontroltext
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPLOTSUMMARYCONTROLTEXT

**Insplotsummarycontroltext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `sprache` |
| key `InspectionLotOrigin` | `herkunft` |
| key `InspLotSummaryControl` | `einwelos` |
| `InspLotSummaryControlTxt` | `kurztext` |
| `_Language` | *Association* |
| `_InspLotSummaryControl` | *Association* |
| `_InspectionLotOrigin` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspLotSummaryControl` | `I_InspLotSummaryControl` | [0..1] |
| `_InspectionLotOrigin` | `I_InspectionLotOrigin` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
    usageType: {
        dataClass:#MASTER ,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT
}
@Analytics.technicalName: 'ILOTSMRYCLTXT'
@EndUserText.label: 'Control of Inspection Lot Summary - Text'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
  [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'InspLotSummaryControl'
define view entity I_InspLotSummaryControlText
  as select from tq32c_t
  association [0..1] to I_Language              as _Language              on  $projection.Language = _Language.Language
  association [0..1] to I_InspLotSummaryControl as _InspLotSummaryControl on  $projection.InspectionLotOrigin   = _InspLotSummaryControl.InspectionLotOrigin
                                                                          and $projection.InspLotSummaryControl = _InspLotSummaryControl.InspLotSummaryControl
  association [0..1] to I_InspectionLotOrigin   as _InspectionLotOrigin   on $projection.InspectionLotOrigin = _InspectionLotOrigin.InspectionLotOrigin
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key sprache  as Language,
      
      @ObjectModel.foreignKey.association: '_InspectionLotOrigin'
  key herkunft as InspectionLotOrigin,
      
      @ObjectModel.foreignKey.association: '_InspLotSummaryControl'
  key einwelos as InspLotSummaryControl,
      @Semantics.text: true
      @Search : { defaultSearchElement: true,
                  fuzzinessThreshold: 0.8 }
      kurztext as InspLotSummaryControlTxt,

      _Language,
      _InspLotSummaryControl,
      _InspectionLotOrigin
}
```
