---
name: I_SALESSCHEDGAGRMTSCHDLNHIST
description: Salesschedgagrmtschdlnhist
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTSCHDLNHIST

**Salesschedgagrmtschdlnhist**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesSchedulingAgreement` | `vbeln` |
| key `SalesSchedulingAgreementItem` | `posnr` |
| key `ScheduleLine` | `etenr` |
| key `IntDeliveryScheduleNumber` | `abrli` |
| key `SchedulingAgreementReleaseType` | `abart` |
| `SalesDelivDateCategory` | `prgrs` |
| `ConfirmedDeliveryDate` | `edatu` |
| `OrderQuantity` | `wmeng` |
| `OrderQuantityUnit` | `_SalesSchedgAgrmtItem.OrderQuantityUnit` |
| `_SalesSchedgAgrmt` | *Association* |
| `_SalesSchedgAgrmtItem` | *Association* |
| `_SalesSchedgAgrmtDelivSched` | *Association* |
| `_SalesSchedgAgrmtRelType` | *Association* |
| `_OrderQuantityUnit` | *Association* |
| `_SalesDelivdatecategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesSchedgAgrmt` | `I_SalesSchedgAgrmt` | [1..1] |
| `_SalesSchedgAgrmtItem` | `I_SalesSchedgAgrmtItem` | [1..1] |
| `_SalesSchedgAgrmtDelivSched` | `I_SalesSchedgAgrmtDelivSched` | [1..1] |
| `_SalesSchedgAgrmtRelType` | `I_SalesSchedgAgrmtRelType` | [0..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesDelivdatecategory` | `I_SalesDelivDateCategory` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Schedule Line History of Sales Scheduling Agreement'
@VDM.viewType:#BASIC
@AbapCatalog:{
  sqlViewName: 'ISDSASCHDLNHIST',
  compiler.compareFilter: true
}
@ObjectModel:{
  usageType:{
    dataClass: #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory: #XL
    },
  supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
}
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED
}
@Metadata:{
    ignorePropagatedAnnotations: true
}

define view I_SalesSchedgAgrmtSchdLnHist
  as select from vbeh
  association [1..1] to I_SalesSchedgAgrmt           as _SalesSchedgAgrmt           on  $projection.SalesSchedulingAgreement = _SalesSchedgAgrmt.SalesSchedulingAgreement
  association [1..1] to I_SalesSchedgAgrmtItem       as _SalesSchedgAgrmtItem       on  $projection.SalesSchedulingAgreement     = _SalesSchedgAgrmtItem.SalesSchedulingAgreement
                                                                                    and $projection.SalesSchedulingAgreementItem = _SalesSchedgAgrmtItem.SalesSchedulingAgreementItem
  association [1..1] to I_SalesSchedgAgrmtDelivSched as _SalesSchedgAgrmtDelivSched on  $projection.SalesSchedulingAgreement       = _SalesSchedgAgrmtDelivSched.SalesSchedulingAgreement
                                                                                    and $projection.SalesSchedulingAgreementItem   = _SalesSchedgAgrmtDelivSched.SalesSchedulingAgreementItem
                                                                                    and $projection.IntDeliveryScheduleNumber      = _SalesSchedgAgrmtDelivSched.IntDeliveryScheduleNumber
                                                                                    and $projection.SchedulingAgreementReleaseType = _SalesSchedgAgrmtDelivSched.SchedulingAgreementReleaseType
  association [0..1] to I_SalesSchedgAgrmtRelType    as _SalesSchedgAgrmtRelType    on  $projection.SchedulingAgreementReleaseType = _SalesSchedgAgrmtRelType.SchedulingAgreementReleaseType
  association [0..1] to I_UnitOfMeasure              as _OrderQuantityUnit          on  $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
  association [1..1] to I_SalesDelivDateCategory     as _SalesDelivdatecategory     on  $projection.SalesDelivDateCategory = _SalesDelivdatecategory.SalesDelivDateCategory
{
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmt'
  key vbeln                                   as SalesSchedulingAgreement,
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtItem'
  key posnr                                   as SalesSchedulingAgreementItem,
  key etenr                                   as ScheduleLine,
  key abrli                                   as IntDeliveryScheduleNumber,
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtRelType'
  key abart                                   as SchedulingAgreementReleaseType,
      @ObjectModel.foreignKey.association: '_SalesDelivdatecategory'
      prgrs                                   as SalesDelivDateCategory,
      edatu                                   as ConfirmedDeliveryDate,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      wmeng                                   as OrderQuantity,
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      @Semantics.unitOfMeasure: true
      _SalesSchedgAgrmtItem.OrderQuantityUnit as OrderQuantityUnit,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SalesSchedgAgrmt,
      _SalesSchedgAgrmtItem,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SalesSchedgAgrmtDelivSched,
      _SalesSchedgAgrmtRelType,
      _SalesDelivdatecategory,
      _OrderQuantityUnit

}
```
