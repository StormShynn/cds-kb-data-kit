---
name: I_SUPLRCARRCONFEXPECTATION
description: Suplrcarrconfexpectation
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SUPLRCARRCONFEXPECTATION

**Suplrcarrconfexpectation**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrCarrierConfExpectation` | `cast (left(dd07l.domvalue_l, 1 ) as /spe/carrier_cnf preserving type )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog: { viewEnhancementCategory: [#NONE] }
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@EndUserText.label: 'Suplr Carrier Confirmation Expectation'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: { serviceQuality: #A,
               sizeCategory: #S,
               dataClass: #META },
  resultSet: { sizeCategory: #XS },
  representativeKey: 'SuplrCarrierConfExpectation',
  modelingPattern: #ANALYTICAL_DIMENSION,
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER ],
  sapObjectNodeType: { name: 'SuplrCarrierConfExpectation' } }
@Search.searchable: true
@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true,
              internalName: #LOCAL }
@Consumption.ranked: true

define root view entity I_SuplrCarrConfExpectation 
  as select from dd07l
  composition [0..*] of I_SuplrCarrConfExpectationT as _Text
{
    @ObjectModel.text.association: '_Text'
    @Semantics.booleanIndicator: true
    key cast (left(dd07l.domvalue_l, 1 ) as /spe/carrier_cnf  preserving type ) as SuplrCarrierConfExpectation,

    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    dd07l.domvalue_l                                                          as DomainValue,

    _Text
}
where
      dd07l.domname  = '/SPE/CARRIER_CONF'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
