---
name: I_INSPLOTDYNRULESTAGE
description: "Insplotdynrulestage"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPLOTDYNRULESTAGE

**Insplotdynrulestage**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspLotDynamicRule` | ✓ | |  | `cast( dynregel as vdm_qdynregel preserving type )` |  |  |
| `InspLotDynRuleStage` | ✓ | |  | `prstufe` |  |  |
| `InspectionSeverity` |  | |  | `prschaerfe` |  |  |
| `InspectionLotIsSkipped` |  | |  | `kzskip` |  |  |
| `InspectionsRqdToReduceStge` |  | |  | `anzprred` |  |  |
| `InspectionsToTightenStage` |  | |  | `anzprver` |  |  |
| `InspRejectionsToReduceStage` |  | |  | `anzrwred` |  |  |
| `InspRejectionsToTightenStage` |  | |  | `anzrwver` |  |  |
| `NextDynRuleStgeIfInspAccepted` |  | |  | `redstufe` |  |  |
| `NextDynRuleStgeIfInspRejected` |  | |  | `verstufe` |  |  |
| `InspLotDynRuleStageMaxSkips` |  | |  | `maxskipdr` |  |  |
| `_InspLotDynamicRule` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_InspectionSeverity` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspLotDynamicRule` | `I_InspLotDynamicRule` | [1..1] |
| `_Text` | `I_InspLotDynRuleStageText` | [0..*] |
| `_InspectionSeverity` | `I_InspectionSeverity` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Inspection Stage'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.sqlViewName: 'IINSPLTDYNRLSTG'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION    
@ObjectModel.representativeKey: 'InspLotDynRuleStage'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
define view I_InspLotDynRuleStage
  as select from qdps
  association [1..1] to I_InspLotDynamicRule      as _InspLotDynamicRule on  $projection.InspLotDynamicRule = _InspLotDynamicRule.InspLotDynamicRule
  association [0..*] to I_InspLotDynRuleStageText as _Text               on  $projection.InspLotDynamicRule  = _Text.InspLotDynamicRule
                                                                         and $projection.InspLotDynRuleStage = _Text.InspLotDynRuleStage
  association [0..1] to I_InspectionSeverity      as _InspectionSeverity on $projection.InspectionSeverity = _InspectionSeverity.InspectionSeverity                                                                         

{
      //--[ GENERATED:012:GlBfhyFV7kY4h7jYW0xcqG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_InspLotDynamicRuleStdVH',
                     element: 'InspLotDynamicRule' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspLotDynamicRule'
  key cast( dynregel as vdm_qdynregel preserving type ) as InspLotDynamicRule,
      @ObjectModel.text.association: '_Text'
  key prstufe  as InspLotDynRuleStage,
      prschaerfe as InspectionSeverity,
      @Semantics.booleanIndicator
      kzskip as InspectionLotIsSkipped,
      anzprred as InspectionsRqdToReduceStge,
      anzprver as InspectionsToTightenStage,
      anzrwred as InspRejectionsToReduceStage,
      anzrwver as InspRejectionsToTightenStage,
      redstufe as NextDynRuleStgeIfInspAccepted,
      verstufe as NextDynRuleStgeIfInspRejected,
      maxskipdr as InspLotDynRuleStageMaxSkips,
      
      //Associations
      _InspLotDynamicRule,
      _Text,
      _InspectionSeverity


}
```
