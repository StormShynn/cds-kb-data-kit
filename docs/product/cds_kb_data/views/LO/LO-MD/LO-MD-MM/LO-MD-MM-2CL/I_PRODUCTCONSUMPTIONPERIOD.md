---
name: I_PRODUCTCONSUMPTIONPERIOD
description: "Productconsumptionperiod"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PRODUCTCONSUMPTIONPERIOD

**Productconsumptionperiod**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PeriodType` | ✓ | |  | `cast ( domvalue_l as perkz )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductConsumptionPeriodText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODPERKZ',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL
  }
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@EndUserText.label: 'Product Consumption Period'
@ObjectModel: {
  usageType : {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #META
    },
  resultSet.sizeCategory: #XS,
  representativeKey: 'PeriodType',
  dataCategory: #VALUE_HELP
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name:'ProductConsumptionPeriodType'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SEARCHABLE_ENTITY,
                                     #ANALYTICAL_DIMENSION ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_ProductConsumptionPeriod
  as select from dd07l
  association [0..*] to I_ProductConsumptionPeriodText as _Text on $projection.PeriodType = _Text.PeriodType
{

       @ObjectModel.text.association: '_Text'
  key  cast ( domvalue_l as perkz ) as PeriodType,
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
      dd07l.domname  = 'PERKZ'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
