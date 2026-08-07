---
name: I_PRODCONSUMPTIONMODE
description: Prodconsumptionmode
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODCONSUMPTIONMODE

**Prodconsumptionmode**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdRqmtsConsumptionMode` | ✓ | |  | `cast( dd07l.domvalue_l as vrmod )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdConsumptionModeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODCONSPTMODE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Consumption Mode'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ProdRqmtsConsumptionMode'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'ProdRqmtsConsumptionMode'
@Consumption.ranked: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #VALUE_HELP_PROVIDER,
                                      #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_ProdConsumptionMode
  as select from dd07l
  association [0..*] to I_ProdConsumptionModeText as _Text on $projection.ProdRqmtsConsumptionMode = _Text.ProdRqmtsConsumptionMode
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as vrmod ) as ProdRqmtsConsumptionMode,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                  as DomainValue,
      _Text
}
where
      dd07l.domname  = 'VRMOD'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
