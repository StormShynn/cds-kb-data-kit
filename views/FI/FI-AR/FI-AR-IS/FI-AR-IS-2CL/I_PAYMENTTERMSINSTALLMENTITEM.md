---
name: I_PAYMENTTERMSINSTALLMENTITEM
description: Paymenttermsinstallmentitem
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - payment
  - item-level
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMSINSTALLMENTITEM

**Paymenttermsinstallmentitem**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentTerms` | `zterm` |
| key `PaymentTermsInstallmentItem` | `cast ( ratnr as farp_ratnr preserving type )` |
| `InstallmentItemPercent` | `ratpz` |
| `InstallmentItemPaymentTerms` | `cast ( ratzt as farp_ratzt preserving type )` |
| `_PaymentTerms` | *Association* |
| `_InstallmentItemPaymentTerms` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_InstallmentItemPaymentTerms` | `I_PaymentTerms` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Installment Items for Terms of Payment'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #M,
  usageType.dataClass: #CUSTOMIZING
}

@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC    
    }

define view entity I_PaymentTermsInstallmentItem as select from t052s

  association [0..1] to I_PaymentTerms as _PaymentTerms on $projection.PaymentTerms = _PaymentTerms.PaymentTerms
  association [0..1] to I_PaymentTerms as _InstallmentItemPaymentTerms on $projection.InstallmentItemPaymentTerms = _InstallmentItemPaymentTerms.PaymentTerms

{
  key zterm as PaymentTerms, 
  key cast ( ratnr as farp_ratnr preserving type ) as PaymentTermsInstallmentItem,
  ratpz as InstallmentItemPercent,
  cast ( ratzt as farp_ratzt preserving type ) as InstallmentItemPaymentTerms,
   
  _PaymentTerms,
  _InstallmentItemPaymentTerms
}
```
