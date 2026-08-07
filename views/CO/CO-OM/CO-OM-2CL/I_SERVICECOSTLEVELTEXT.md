---
name: I_SERVICECOSTLEVELTEXT
description: Servicecostleveltext
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - text-view
  - service
  - text
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTLEVELTEXT

**Servicecostleveltext**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceCostLevel` | ✓ | |  | `srv_cost_level` |
| `Language` | ✓ | |  | `langu` |
| `ServiceCostLevelName` |  | |  | `name` |
| `ServiceCostLevelShortName` |  | |  | `short_name` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRV_COST_LVL_T'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Service Cost Level - Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

//@ClientDependent: true
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ServiceCostLevel'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT             ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Search.searchable: true

define view I_ServiceCostLevelText
  as select from fcoc_sc_levelt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key srv_cost_level as ServiceCostLevel,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu          as Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      name           as ServiceCostLevelName,
      short_name     as ServiceCostLevelShortName,

      _Language
}
```
