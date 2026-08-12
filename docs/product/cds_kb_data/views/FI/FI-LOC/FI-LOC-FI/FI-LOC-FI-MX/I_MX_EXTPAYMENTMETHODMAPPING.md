---
name: I_MX_EXTPAYMENTMETHODMAPPING
description: "MX Extpaymentmethodmapping"
app_component: FI-LOC-FI-MX
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - payment
  - component:FI-LOC-FI-MX
  - lob:Finance
---
# I_MX_EXTPAYMENTMETHODMAPPING

**MX Extpaymentmethodmapping**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-MX` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentMethod` | ✓ | |  | `zlsch` |  |  |
| `MX_ExternalPaymentMethod` |  | |  | `ext_payt_meth` |  |  |
| `MX_ExtPaymentMethodDescription` |  | |  | `_Text[1:Language = $session.system_language].DomainText` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MasterDataDomainValueText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  preserveKey: true,
  sqlViewName: 'IMXPAYTMETHMAP'
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'External Payment Method Mapping for MX'
@ObjectModel.representativeKey: 'PaymentMethod'
@ObjectModel.usageType: { 
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S 
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view I_MX_ExtPaymentMethodMapping
  as select from fimx_paymeth_map
  association [0..*] to I_MasterDataDomainValueText as _Text on  _Text.Name        = 'FIMX_EXTERNAL_PAYMENT_METHOD'
                                                             and _Text.DomainValue = $projection.MX_ExternalPaymentMethod
{
  key zlsch                                                   as PaymentMethod,
      ext_payt_meth                                           as MX_ExternalPaymentMethod,
      @ObjectModel.text.association: '_DomainText' 
      _Text[1:Language = $session.system_language].DomainText as MX_ExtPaymentMethodDescription
}
```
