---
name: I_PRAPAYMENTCYCLE
description: "PRA Payment Cycle"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTCYCLE')/$value
semantic_en: "PRA Payment Cycle"
semantic_vi: "PRA Payment Cycle — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "payment"
  - "cycle"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_PRAPAYMENTCYCLE

**PRA Payment Cycle**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTCYCLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentCycle` | ✓ | |  | `cast ( domvalue_l as /pra/pp_future_pay_flag )` | `CHAR(1)` | Payment Processing - Future Pay Flag |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAPaymentCycleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTCYCLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTCYCLE')/$value)*

```abap
@EndUserText.label: 'PRA Payment Cycle'
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPAYTCYC'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PaymentCycle'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAPaymentCycle'
define view I_PRAPaymentCycle
  as select from dd07l
  association [0..*] to I_PRAPaymentCycleText as _Text on $projection.PaymentCycle = _Text.PaymentCycle
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as /pra/pp_future_pay_flag ) as PaymentCycle,
      _Text
}
where
      domname  = '/PRA/PP_FUTURE_PAY_FLAG'
  and as4local = 'A'
```
