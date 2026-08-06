---
name: I_PRODUCTPROCMTPROFILE
description: Productprocmtprofile
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTPROCMTPROFILE

**Productprocmtprofile**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProcurementSubType` | `cast ( MaterialProcurementProfile as sobsl preserving type )` |
| key `Plant` | `Plant` |
| `_Text` | *Association* |
| `_Plant` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductProcmtProfileText` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDPRCMTPROF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel: {
  usageType : {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #CUSTOMIZING
    },
  representativeKey: 'ProcurementSubType',
  dataCategory: #VALUE_HELP
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Product Procurement Profile'
@ObjectModel.sapObjectNodeType.name:'ProcurementSubType'
@Consumption.ranked: true
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY ]
@Metadata.ignorePropagatedAnnotations: true

define view I_ProductProcmtProfile
  as select from I_MatlProcurementProfile

  association [0..*] to I_ProductProcmtProfileText as _Text  on  $projection.ProcurementSubType = _Text.ProcurementSubType
                                                             and $projection.Plant              = _Text.Plant

  association [0..1] to I_Plant                    as _Plant on  $projection.Plant = _Plant.Plant

{

      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key cast ( MaterialProcurementProfile as sobsl preserving type ) as ProcurementSubType,

      @Search.defaultSearchElement: true
      @Search.ranking: #MEDIUM
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.foreignKey.association: '_Plant'
      @Consumption.filter.hidden: true
  key Plant                                                        as Plant,

      _Text,
      _Plant

}
```
