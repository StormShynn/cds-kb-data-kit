---
name: I_VOLATILITYPROFILE_2
description: Volatilityprofile 2
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
# I_VOLATILITYPROFILE_2

**Volatilityprofile 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `VolatilityProfile` | `profil` |
| key `ImpliedVolatilityIdentifier` | `vname` |
| `_ImpliedVolatilityIdentifier` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ImpliedVolatilityIdentifier` | `I_ImpliedVolatilityIdentifier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IVOLARPROFILE2'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@Analytics.internalName:#LOCAL
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'VolatilityProfile'
@EndUserText.label: 'Volatility Profile Information'
@ObjectModel.sapObjectNodeType.name: 'VolatilityProfile'
define view I_VolatilityProfile_2
  as select from atvo4
  association [1..1] to I_ImpliedVolatilityIdentifier as _ImpliedVolatilityIdentifier on $projection.ImpliedVolatilityIdentifier = _ImpliedVolatilityIdentifier.ImpliedVolatilityIdentifier

{


  key profil as VolatilityProfile,
      @ObjectModel.foreignKey.association: '_ImpliedVolatilityIdentifier'
  key vname  as ImpliedVolatilityIdentifier,

      _ImpliedVolatilityIdentifier


}
```
