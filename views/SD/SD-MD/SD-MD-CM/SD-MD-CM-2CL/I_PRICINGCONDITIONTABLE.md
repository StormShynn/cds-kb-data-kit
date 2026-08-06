---
name: I_PRICINGCONDITIONTABLE
description: Pricing ConditionTABLE
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_PRICINGCONDITIONTABLE

**Pricing ConditionTABLE**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConditionUsage` | `t681.kvewe` |
| key `ConditionApplication` | `t681.kappl` |
| key `ConditionTable` | `cast ( t681.kotabnr as char03 )` |
| `PrcgCndnTableHasValidityPeriod` | `t681.ksdat` |
| `PrcgCndnTableHasReleaseStatus` | `I_PrcgCndnTblWithReleaseStatus.PrcgCndnTableHasReleaseStatus` |
| `_PricingConditionTableField` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingConditionTableField` | `I_PricingConditionTableField` | [0..*] |
| `_Text` | `I_PricingConditionTableText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNTABLE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Condition Table for Pricing'
define view I_PricingConditionTable
  as select from            t681
    left outer to many join I_PrcgCndnTblWithReleaseStatus on  t681.kvewe   = I_PrcgCndnTblWithReleaseStatus.ConditionUsage
                                                           and t681.kappl   = I_PrcgCndnTblWithReleaseStatus.ConditionApplication
                                                           and t681.kotabnr = I_PrcgCndnTblWithReleaseStatus.ConditionTable
  association [0..*] to I_PricingConditionTableField as _PricingConditionTableField on  $projection.ConditionUsage       = _PricingConditionTableField.ConditionUsage
                                                                                    and $projection.ConditionApplication = _PricingConditionTableField.ConditionApplication
                                                                                    and $projection.ConditionTable       = _PricingConditionTableField.ConditionTable
  association [0..*] to I_PricingConditionTableText  as _Text                       on  $projection.ConditionUsage       = _Text.ConditionUsage
                                                                                    and $projection.ConditionApplication = _Text.ConditionApplication
                                                                                    and $projection.ConditionTable       = _Text.ConditionTable


{
  key t681.kvewe                                                   as ConditionUsage,
  key t681.kappl                                                   as ConditionApplication,
      @ObjectModel.text.association: '_Text'
  key cast ( t681.kotabnr as char03 )                              as ConditionTable,
      t681.ksdat                                                   as PrcgCndnTableHasValidityPeriod,
      I_PrcgCndnTblWithReleaseStatus.PrcgCndnTableHasReleaseStatus as PrcgCndnTableHasReleaseStatus,
      _PricingConditionTableField,
      _Text
}
where
  t681.kvewe = 'A'
```
