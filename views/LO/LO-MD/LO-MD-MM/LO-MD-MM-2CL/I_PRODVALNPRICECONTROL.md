---
name: I_PRODVALNPRICECONTROL
description: Prodvalnpricecontrol
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
# I_PRODVALNPRICECONTROL

**Prodvalnpricecontrol**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InventoryValuationProcedure` | `cast ( domvalue_l as vprsv )` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdValnPriceControlText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDVALNPRCCTRL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Prod Valn Price Control'
@ObjectModel: {
  usageType : {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #MASTER
    },
  resultSet.sizeCategory: #XS,
  representativeKey: 'InventoryValuationProcedure',
  dataCategory: #VALUE_HELP
}
@ObjectModel.sapObjectNodeType.name:'ProductPriceControl'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,                                        
                                        #SEARCHABLE_ENTITY ]
@Metadata.ignorePropagatedAnnotations: true
define view I_ProdValnPriceControl
  as select from dd07l
  association [0..*] to I_ProdValnPriceControlText as _Text on $projection.InventoryValuationProcedure = _Text.InventoryValuationProcedure
{
       @ObjectModel.text.association: '_Text'
  key  cast ( domvalue_l as vprsv ) as InventoryValuationProcedure,
       @Search: {
         defaultSearchElement: true,
         fuzzinessThreshold: 0.8,
         ranking: #HIGH
       }
       @Consumption.hidden: true
       domvalue_l                   as DomainValue,
       _Text
}
where
      dd07l.domname  = 'VPRSV'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
