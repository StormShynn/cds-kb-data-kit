---
name: I_BR_PAYMENTFORM
description: "BR Paymentform"
semantic_vi: "View I_BR_PAYMENTFORM CDS hiển thị dữ liệu hình thức thanh toán, có liên quan khi làm việc với các giao dịch liên quan đến thanh toán trong ứng dụng thành phần FI-LOC-LO-BR."
keywords:
  - "payment form"
  - "hình thức thanh toán"
  - "fi-loc-lo-br"
  - "sap cds view"
  - "view i_br_paymentform"
  - "payment data"
  - "thanh toán"
  - "finance"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
semantic_en: "The I_BR_PAYMENTFORM CDS view exposes payment form data, which is relevant when working with payment-related transactions in the FI-LOC-LO-BR application component."
app_component: FI-LOC-LO-BR
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
  - FI-LOC-LO
  - interface-view
  - payment
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_PAYMENTFORM

**BR Paymentform**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `PaymentForm` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_indpag preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_PaymentFormText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Form Indicator'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRINDPAG'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentForm'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_PaymentForm as select from dd07l
  association [0..*] to I_BR_PaymentFormText as _Text on $projection.PaymentForm = _Text.PaymentForm
{  
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_indpag preserving type ) as PaymentForm,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname = 'J_1BNFE_INDPAG' 
  and as4local = 'A'
```
