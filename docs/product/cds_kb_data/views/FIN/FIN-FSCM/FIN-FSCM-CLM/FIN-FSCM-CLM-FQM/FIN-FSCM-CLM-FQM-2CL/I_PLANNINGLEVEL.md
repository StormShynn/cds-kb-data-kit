---
name: I_PLANNINGLEVEL
description: "Planninglevel"
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - component:FIN-FSCM-CLM-FQM-2CL
  - lob:Other
---
# I_PLANNINGLEVEL

**Planninglevel**

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
| `PlanningLevelSourceSymbol` |  | |  | `orign` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningLevelText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Planning Level' //same as DDL description
@Analytics.dataCategory: #DIMENSION //or #CUBE or #FACT
@VDM.viewType: #BASIC
@Search.searchable: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IPLANNINGLEVEL' //must start with "I"
@ObjectModel.representativeKey: 'PlanningLevel'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'CashFlowPlanningLevel'
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:[ #ANALYTICAL_CUBE ]
define view I_PlanningLevel //must start with "I_"; same as DDL source name in upper-camelcase notation
as select from t036
association[0..*] to I_PlanningLevelText as _Text on $projection.PlanningLevel = _Text.PlanningLevel
{
   @Search.defaultSearchElement: true
   @ObjectModel.text.association: '_Text'
   key ebene as PlanningLevel,
   //orign as ResourceSectionType, // add by Shiwei 2017.8.10
   orign as PlanningLevelSourceSymbol,
   _Text
}
```
