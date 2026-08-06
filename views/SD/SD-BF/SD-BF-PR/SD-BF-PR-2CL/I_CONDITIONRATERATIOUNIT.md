---
name: I_CONDITIONRATERATIOUNIT
description: Conditionrateratiounit
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing-condition
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONRATERATIOUNIT

**Conditionrateratiounit**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConditionRateRatioUnit` | `ConditionRateRatioUnit.ConditionRateRatioUnit` |
| `UnitOfMeasureISOCode` | `ConditionRateRatioUnit.UnitOfMeasureISOCode` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Condition Rate Ratio Unit'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@Analytics.internalName: #LOCAL
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'ConditionRateRatioUnit'

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
define view entity I_ConditionRateRatioUnit
  as select from R_ConditionRateRatioUnit as ConditionRateRatioUnit
{
  key ConditionRateRatioUnit.ConditionRateRatioUnit,
      @ObjectModel.foreignKey.association: '_ISOCode'
      ConditionRateRatioUnit.UnitOfMeasureISOCode,
      ConditionRateRatioUnit._ISOCode
}
```
