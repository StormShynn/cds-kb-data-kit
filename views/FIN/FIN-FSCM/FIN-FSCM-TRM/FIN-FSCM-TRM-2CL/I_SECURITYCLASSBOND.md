---
name: I_SECURITYCLASSBOND
description: Securityclassbond
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
# I_SECURITYCLASSBOND

**Securityclassbond**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SecurityClass` | `cast(ranl as ftr_gen_security_class preserving type)` |
| `BondClassification` | `swpklass` |
| `SecurityClassIssueStartDate` | `debeg` |
| `SecurityClassFinalDueDate` | `case when sanlf = '040' then dendf else cast( '00000000' as dendf ) end` |
| `ScrtyClCompatibleTermEndDate` | `case when sanlf = '042' then dendf else cast( '00000000' as dendf ) end` |
| `BondCertificateNominalAmount` | `bnoms` |
| `BondCertPerTrdgUnitNominalAmt` | `bnhae` |
| `ScrtyClCalcPeriodStartDate` | `calc_begin` |
| `ScrtyClExpectedTermEndDate` | `exp_mat_date` |
| `ScrtyClIsCalcdWthNomPerTrdgUnt` | `uqb_calc` |
| `ScrtyClTrancheClassification` | `tranche_classif` |
| `SecurityClassAssetPool` | `pool_id` |
| `ScrtyClCalculationRoundingRule` | `rounding_rule` |
| `ScrtyClIntrstCalcCuttingDays` | `batrt` |
| `SecurityClassIsSecondaryBond` | `cast(jnachr as ftr_sc_secondary_bond_ind preserving type )` |
| `IssueCurrency` | `_SecurityClassBasic.IssueCurrency` |
| `_SecurityClass` | *Association* |
| `_BondClassification` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_BondClassification` | `I_BondClassification` | [0..1] |
| `_SecurityClassBasic` | `I_SecurityClassBasic` | [0..1] |

## Source Code

```abap
// harmonized annotations
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true // only if required by ATC check
@AbapCatalog.sqlViewName: 'ISECBOND'
@AccessControl.authorizationCheck: #CHECK // according to XLS / DCL
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Security Class Bond'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityClass'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecurityClassBond'

define view I_SecurityClassBond
  as select from vwpanle

  association [0..1] to I_SecurityClass      as _SecurityClass      on $projection.SecurityClass = _SecurityClass.SecurityClass
  association [0..1] to I_BondClassification as _BondClassification on $projection.BondClassification = _BondClassification.BondClassification
  association [0..1] to I_SecurityClassBasic as _SecurityClassBasic on $projection.SecurityClass = _SecurityClassBasic.SecurityClass
{
  key cast(ranl as ftr_gen_security_class preserving type)       as SecurityClass,
      swpklass                                                   as BondClassification,
      debeg                                                      as SecurityClassIssueStartDate,
      case
        when sanlf = '040'
        then dendf
        else cast( '00000000' as dendf )
        end                                                      as SecurityClassFinalDueDate,
      case
        when sanlf = '042'
        then dendf
        else cast( '00000000' as dendf )
        end                                                      as ScrtyClCompatibleTermEndDate,
      @Semantics.amount.currencyCode:'IssueCurrency'
      bnoms                                                      as BondCertificateNominalAmount,
      @Semantics.amount.currencyCode:'IssueCurrency'
      bnhae                                                      as BondCertPerTrdgUnitNominalAmt,
      calc_begin                                                 as ScrtyClCalcPeriodStartDate,
      exp_mat_date                                               as ScrtyClExpectedTermEndDate,
      uqb_calc                                                   as ScrtyClIsCalcdWthNomPerTrdgUnt,
      tranche_classif                                            as ScrtyClTrancheClassification,
      pool_id                                                    as SecurityClassAssetPool,
      rounding_rule                                              as ScrtyClCalculationRoundingRule,
      batrt                                                      as ScrtyClIntrstCalcCuttingDays,
      @Semantics.booleanIndicator:true
      cast(jnachr as ftr_sc_secondary_bond_ind preserving type ) as SecurityClassIsSecondaryBond,
      _SecurityClassBasic.IssueCurrency                          as IssueCurrency,
      _SecurityClass,
      _BondClassification
}
```
