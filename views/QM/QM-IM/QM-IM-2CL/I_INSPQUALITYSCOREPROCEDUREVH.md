---
name: I_INSPQUALITYSCOREPROCEDUREVH
description: Inspqualityscoreprocedurevh
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
  - value-help
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPQUALITYSCOREPROCEDUREVH

**Inspqualityscoreprocedurevh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspQualityScoreProcedure` | `InspQualityScoreProcedure` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IINSPQLTYSCPROC'
@EndUserText.label: 'Quality Score Procedure'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #ORGANIZATIONAL
  },
  resultSet.sizeCategory: #XS,
  representativeKey: 'InspQualityScoreProcedure'
}
@Search.searchable: true
define view entity I_InspQualityScoreProcedureVH
  as select from I_InspQualityScoreProcedure
{
      @ObjectModel.text.element: ['InspQltyScoreProcedureTxt']
      @UI.textArrangement: #TEXT_ONLY
  key InspQualityScoreProcedure,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      _Text[1:Language=$session.system_language].InspQltyScoreProcedureTxt,
      _Text
}
```
