---
name: I_PAYMENTCONDITION
description: "Paymentcondition"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - pricing-condition
  - payment
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PAYMENTCONDITION

**Paymentcondition**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentCondition` | ✓ | |  | `zahlkond` |  |  |
| `PaymentTerms` |  | |  | `cast( zterm as farp_dzterm preserving type)` |  |  |
| `FactoryCalendar` |  | |  | `cast( fcalid as cr_wfcid preserving type)` |  |  |
| `CreditMemoPaymentTerms` |  | |  | `cast( gterm as guzte preserving type)` |  |  |
| `_Text` | | ✓ | | | | |
| `_FactoryCal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentConditionText` | [0..*] |
| `_FactoryCal` | `I_FactoryCalendar` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Payment Condition'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'PaymentCondition',
                sapObjectNodeType.name: 'PaymentCondition',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_PaymentCondition
  as select from te052

  association [0..*] to I_PaymentConditionText as _Text       on $projection.PaymentCondition = _Text.PaymentCondition
  association [0..1] to I_FactoryCalendar      as _FactoryCal on $projection.FactoryCalendar = _FactoryCal.FactoryCalendar

{
      @ObjectModel.text.association: '_Text'
  key zahlkond                                    as PaymentCondition,

      cast( zterm as farp_dzterm preserving type) as PaymentTerms,
      @ObjectModel.foreignKey.association: '_FactoryCal'
      cast( fcalid as cr_wfcid preserving type)   as FactoryCalendar,
      cast( gterm as guzte preserving type)       as CreditMemoPaymentTerms,

      //corr_opt
      //g_corr_opt

      _Text,
      _FactoryCal
}
```
