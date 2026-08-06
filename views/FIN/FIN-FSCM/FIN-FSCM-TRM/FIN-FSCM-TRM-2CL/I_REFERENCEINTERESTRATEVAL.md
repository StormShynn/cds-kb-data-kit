---
name: I_REFERENCEINTERESTRATEVAL
description: Referenceinterestrateval
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_REFERENCEINTERESTRATEVAL

**Referenceinterestrateval**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ReferenceInterestRate` | `ReferenceInterestRate.referenz` |
| key `EffectiveDate` | `cast(left(cast(99999999 - cast(cast(ReferenceInterestRate.datab as abap.numc(8)) as abap.dec(8)) as abap.char(13) ) ,8) as abap.dats)` |
| `EffectiveInterestRate` | `ReferenceInterestRate.zsoll` |
| `_ReferenceInterestRate` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReferenceInterestRate` | `I_ReferenceInterestRate` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREFIRVAL'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
    representativeKey: 'ReferenceInterestRate',
    usageType: {
        dataClass:  #MIXED,
        serviceQuality: #D,
        sizeCategory: #L
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@AbapCatalog.preserveKey:true
@EndUserText.label: 'Reference Interest Rate Value'
define view I_ReferenceInterestRateVal
  as select from t056p as ReferenceInterestRate
  association [1..1] to I_ReferenceInterestRate as _ReferenceInterestRate on $projection.ReferenceInterestRate = _ReferenceInterestRate.ReferenceInterestRate
{
  @ObjectModel.foreignKey.association: '_ReferenceInterestRate'
  key ReferenceInterestRate.referenz as ReferenceInterestRate,
  @Semantics.businessDate.from:true
  key cast(left(cast(99999999 - cast(cast(ReferenceInterestRate.datab as abap.numc(8)) as abap.dec(8)) as abap.char(13) ) ,8) as abap.dats) as EffectiveDate,
  ReferenceInterestRate.zsoll    as EffectiveInterestRate,
  
  _ReferenceInterestRate
}
```
