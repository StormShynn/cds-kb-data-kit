---
name: I_BR_PAYMENTMETHOD
description: "BR Paymentmethod"
semantic_vi: "View I_BR_PAYMENTMETHOD cung cấp thông tin về phương thức thanh toán được sử dụng trong ứng dụng component FI-LOC-LO-BR, có liên quan đến các giao dịch tài chính và xử lý thanh toán."
keywords:
  - "payment method"
  - "phương thức thanh toán"
  - "fi-loc-lo-br"
  - "financial transactions"
  - "giao dịch tài chính"
  - "payment processing"
  - "xử lý thanh toán"
  - "sap fi"
  - "fi-loc"
  - "fi-loc-lo"
semantic_en: "The I_BR_PAYMENTMETHOD view provides information about payment methods used in the FI-LOC-LO-BR application component, which is relevant for financial transactions and payment processing."
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
# I_BR_PAYMENTMETHOD

**BR Paymentmethod**

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
| `PaymentMethod` | ✓ | |  | `cast ( t_pag as logbr_tpag preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_PaymentMethodText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Method'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRTPAG'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentMethod'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_PaymentMethod as select from j_1bpag
  association [0..*] to I_BR_PaymentMethodText as _Text on $projection.PaymentMethod = _Text.PaymentMethod
{  
    @ObjectModel.text.association: '_Text'
    key cast ( t_pag as logbr_tpag preserving type ) as PaymentMethod, 
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
```
