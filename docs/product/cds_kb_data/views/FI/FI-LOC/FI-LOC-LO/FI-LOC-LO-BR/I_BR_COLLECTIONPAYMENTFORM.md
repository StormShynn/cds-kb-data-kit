---
name: I_BR_COLLECTIONPAYMENTFORM
description: "BR Collectionpaymentform"
semantic_vi: "View I_BR_COLLECTIONPAYMENTFORM hiển thị các hình thức thanh toán thu hồi, được sử dụng trong thành phần FI-LOC-LO-BR cho các giao dịch tài chính."
keywords:
  - "collection payment form"
  - "hình thức thanh toán thu hồi"
  - "fi-loc-lo-br"
  - "financial transaction"
  - "thanh toán tài chính"
  - "payment form"
  - "form thanh toán"
  - "collection"
  - "thu hồi"
semantic_en: "The I_BR_COLLECTIONPAYMENTFORM CDS view exposes collection payment forms, which are used in the FI-LOC-LO-BR component for financial transactions."
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
  - collection
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_COLLECTIONPAYMENTFORM

**BR Collectionpaymentform**

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
| `PaymentForm` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_indpag preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CollectionPaymentFormText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Form Indicator'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCOLINDPAG'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'PaymentForm'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_BR_CollectionPaymentForm as select from dd07l
  association [0..*] to I_BR_CollectionPaymentFormText as _Text on $projection.PaymentForm = _Text.PaymentForm  
{  
    @ObjectModel.text.association: '_Text'
    key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as logbr_indpag preserving type ) as PaymentForm,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname = 'J_1B_PAY_FORM_IND' 
  and as4local = 'A'
```
