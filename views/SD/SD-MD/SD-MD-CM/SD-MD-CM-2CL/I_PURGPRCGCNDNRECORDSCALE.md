---
name: I_PURGPRCGCNDNRECORDSCALE
description: Purgprcgcndnrecordscale
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
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PURGPRCGCNDNRECORDSCALE

**Purgprcgcndnrecordscale**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `'IPURGPRCGCNDNS'` | `sqlViewName: 'IPURGPRCGCNDNS'` |
| `true` | `compiler.compareFilter: true` |

## Source Code

```abap
@AbapCatalog:
{
  sqlViewName: 'IPURGPRCGCNDNS',
  compiler.compareFilter: true
}
@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@VDM:
{
  viewType: #BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@ObjectModel.usageType:
{
  sizeCategory: #XL,
  serviceQuality: #C,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Pricing Scale in Purchasing'


//P_PrcgCndnRecdQuantityScale:Get Purchasing Pricing Quantity Scale record from KONM
//P_PrcgCndnRecdValueScale:Get Purchasing Pricing Value Scale record from KONW
define view I_PurgPrcgCndnRecordScale
  as select from P_PrcgCndnRecdQuantityScale
  association [0..1] to I_PurgPrcgConditionRecord as _PurgPrcgConditionRecord on  $projection.ConditionRecord           = _PurgPrcgConditionRecord.ConditionRecord
                                                                              and $projection.ConditionSequentialNumber = _PurgPrcgConditionRecord.ConditionSequentialNumber
  association [0..1] to I_PurgPrcgCndnRecdSuplmnt as _PurgPrcgCndnRecdSuplmnt on  $projection.ConditionRecord           = _PurgPrcgCndnRecdSuplmnt.ConditionRecord
                                                                              and $projection.ConditionSequentialNumber = _PurgPrcgCndnRecdSuplmnt.ConditionSequentialNumber
{
  key ConditionRecord            as ConditionRecord,
  key ConditionSequentialNumber  as ConditionSequentialNumber,
  key ConditionScaleLine         as ConditionScaleLine,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity     as ConditionScaleQuantity,
      @Semantics.unitOfMeasure:true
      ConditionScaleQuantityUnit as ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      cast( '0' as kstbw )       as ConditionScaleAmount,
      @Semantics.currencyCode: true
      cast( ''  as konws )       as ConditionScaleAmountCurrency,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue         as ConditionRateValue,
      @Semantics.currencyCode: true
      ConditionRateValueUnit     as ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio         as ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      ConditionRateRatioUnit     as ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount        as ConditionRateAmount,
      @Semantics.currencyCode: true
      ConditionCurrency          as ConditionCurrency,

      _PurgPrcgConditionRecord,
      _PurgPrcgCndnRecdSuplmnt
}
union select from P_PrcgCndnRecdValueScale
association [0..1] to I_PurgPrcgConditionRecord as _PurgPrcgConditionRecord on  $projection.ConditionRecord           = _PurgPrcgConditionRecord.ConditionRecord
                                                                            and $projection.ConditionSequentialNumber = _PurgPrcgConditionRecord.ConditionSequentialNumber
association [0..1] to I_PurgPrcgCndnRecdSuplmnt as _PurgPrcgCndnRecdSuplmnt on  $projection.ConditionRecord           = _PurgPrcgCndnRecdSuplmnt.ConditionRecord
                                                                            and $projection.ConditionSequentialNumber = _PurgPrcgCndnRecdSuplmnt.ConditionSequentialNumber
{
  key ConditionRecord              as ConditionRecord,
  key ConditionSequentialNumber    as ConditionSequentialNumber,
  key ConditionScaleLine           as ConditionScaleLine,
      cast( '0' as kstbm )         as ConditionScaleQuantity,
      cast( ''  as konms )         as ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount         as ConditionScaleAmount,
      @Semantics.currencyCode: true
      ConditionScaleAmountCurrency as ConditionScaleAmountCurrency,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue           as ConditionRateValue,
      @Semantics.currencyCode: true
      ConditionRateValueUnit       as ConditionRateValueUnit,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio           as ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      ConditionRateRatioUnit       as ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionRateAmount          as ConditionRateAmount,
      @Semantics.currencyCode: true
      ConditionCurrency            as ConditionCurrency,


      _PurgPrcgConditionRecord,
      _PurgPrcgCndnRecdSuplmnt
}
```
