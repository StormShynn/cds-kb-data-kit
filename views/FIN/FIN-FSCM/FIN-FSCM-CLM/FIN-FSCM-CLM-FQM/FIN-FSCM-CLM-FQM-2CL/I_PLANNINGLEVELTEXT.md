---
name: I_PLANNINGLEVELTEXT
description: "Planningleveltext"
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-CLM-FQM-2CL
  - lob:Other
---
# I_PLANNINGLEVELTEXT

**Planningleveltext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningLevel` | ✓ | |  | `ebene` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PlanningLevelDescription` |  | |  | `cast( ltext as fclm_pl_desc preserving type )` |  |  |
| `PlanningLevelName` |  | |  | `cast( ktext as fclm_pl_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Planning Level - Text' //same as DDL description
@ObjectModel.dataCategory:#TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IPLANNINGLEVELT'
@ObjectModel.representativeKey: 'PlanningLevel'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'CashFlowPlanningLevel'  
@ObjectModel.supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern:[ #ANALYTICAL_CUBE ]
define view I_PlanningLevelText //must start with "I_"; same as DDL source name in upper-camelcase notation
as select from  t036t as a
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{   
    @Search.defaultSearchElement: true
    key ebene as PlanningLevel,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
    key spras as Language,
    // Display long text instead of short text
    @Semantics.text: true
    @Search: {
      defaultSearchElement: true,
      ranking: #LOW,
      fuzzinessThreshold: 0.8
    }
    cast( ltext as fclm_pl_desc preserving type ) as PlanningLevelDescription,
    @Semantics.text: true
    cast( ktext as fclm_pl_name preserving type ) as PlanningLevelName,
    _Language
}
```
