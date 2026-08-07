---
name: I_PRODUCTIONSCHEDGPROFILETEXT
description: Productionschedgprofiletext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - product
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSCHEDGPROFILETEXT

**Productionschedgprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionSchedulingProfile` | ✓ | |  | `co_prodprf` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductionSchedgProfileName` |  | |  | `prodprf_tx` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Profile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Profile` | `I_ProductionSchedulingProfile` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODNSCHEDPRTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductionSchedulingProfile'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Scheduling Profile - Text'

define view I_ProductionSchedgProfileText
  as select from tco43t as txt

  association [0..1] to I_Plant                       as _Plant    on  $projection.Plant = _Plant.Plant   
  association [0..1] to I_Language                    as _Language on  $projection.Language = _Language.Language
  association [1..1] to I_ProductionSchedulingProfile as _Profile  on  $projection.Plant                       = _Profile.Plant 
                                                                   and $projection.ProductionSchedulingProfile = _Profile.ProductionSchedulingProfile
{
      @ObjectModel.foreignKey.association: '_Profile'
      @ObjectModel.text.element: ['ProductionSchedgProfileName']
  key txt.co_prodprf as ProductionSchedulingProfile,
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks as Plant,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.prodprf_tx as ProductionSchedgProfileName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Profile,
      _Plant,
      _Language
};
```
