---
name: I_BR_PAYMENTINTEGRATIONTYPE
description: "BR Paymentintegrationtype"
semantic_vi: "View I_BR_PAYMENTINTEGRATIONTYPE hiển thị các loại tích hợp thanh toán được sử dụng trong các giao dịch tài chính, thường được truy cập khi thiết lập hoặc khắc phục sự cố hệ thống thanh toán."
keywords:
  - "payment integration"
  - "thanh toán tích hợp"
  - "financial transactions"
  - "giao dịch tài chính"
  - "payment systems"
  - "hệ thống thanh toán"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo-br"
semantic_en: "The I_BR_PAYMENTINTEGRATIONTYPE view exposes payment integration types used in financial transactions, typically accessed when setting up or troubleshooting payment systems."
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
# I_BR_PAYMENTINTEGRATIONTYPE

**BR Paymentintegrationtype**

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
| `PaymentSystemIntegrationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_tpintegra preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_PaytIntegrationTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Integration Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRTPINTEGRA'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentSystemIntegrationType'
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
define view I_BR_PaymentIntegrationType as select from dd07l
  association [0..*] to I_BR_PaytIntegrationTypeText as _Text on $projection.PaymentSystemIntegrationType = _Text.PaymentSystemIntegrationType
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_tpintegra preserving type ) as PaymentSystemIntegrationType, 
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname = 'J_1BNFE_TPINTEGRA' 
  and as4local = 'A'
```
