---
name: I_LEADTIMEREDUCNSTRATEGYTEXT
description: "Leadtimereducnstrategytext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_LEADTIMEREDUCNSTRATEGYTEXT

**Leadtimereducnstrategytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `LeadTimeReductionStrategy` | ✓ | |  | `rstra` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `LeadTimeReductionStrategyName` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Strategy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Strategy` | `I_LeadTimeReductionStrategy` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPLTREDSTRTTEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'LeadTimeReductionStrategy'
@ObjectModel.sapObjectNodeType.name: 'LeadTimeReductionStrategyText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Lead Time Reduction Strategy - Text'

define view I_LeadTimeReducnStrategyText
  as select from t499p as txt
  association [0..1] to I_Language                  as _Language on  $projection.Language = _Language.Language
  association [1..1] to I_Plant                     as _Plant    on  $projection.Plant = _Plant.Plant
  association [1..1] to I_LeadTimeReductionStrategy as _Strategy on  $projection.LeadTimeReductionStrategy = _Strategy.LeadTimeReductionStrategy
                                                                 and $projection.Plant                     = _Strategy.Plant
{
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks as Plant,
      @ObjectModel.foreignKey.association: '_Strategy'
      @ObjectModel.text.element: ['LeadTimeReductionStrategyName']
  key txt.rstra as LeadTimeReductionStrategy,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.txt   as LeadTimeReductionStrategyName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
      _Strategy,
      _Plant,
      _Language
};
```
