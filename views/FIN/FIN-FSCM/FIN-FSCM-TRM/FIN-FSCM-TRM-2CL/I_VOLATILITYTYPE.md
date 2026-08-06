---
name: I_VOLATILITYTYPE
description: Volatilitytype
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
# I_VOLATILITYTYPE

**Volatilitytype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `VolatilityType` | `cast(atvo1.volart as tb_volart)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_VolatilityTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVOLATILITYTYPE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey:'VolatilityType'
@Analytics.internalName:#LOCAL
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Volatility Type'
@ObjectModel.sapObjectNodeType.name: 'MarketDataVolatilityType'
define view I_VolatilityType
  as select from atvo1
  association [0..*] to I_VolatilityTypeText as _Text on $projection.VolatilityType = _Text.VolatilityType
{
      //atvo1
      @ObjectModel.text.association: '_Text'

  key cast(atvo1.volart as tb_volart) as VolatilityType,

      _Text
}
```
