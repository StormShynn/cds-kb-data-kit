---
name: I_BR_ICMSEXEMPTIONREASON
description: "BR Icmsexemptionreason"
semantic_vi: "View I_BR_ICMSEXEMPTIONREASON hiển thị lý do miễn trừ ICMS cho mục đích thuế Brazil, có liên quan khi xử lý giao dịch liên quan đến thuế trong thành phần FI-LOC-LO-BR."
keywords:
  - "icms exemption reason"
  - "lý do miễn trừ icms"
  - "fi-loc-lo-br"
  - "brazilian tax"
  - "thuế brazil"
  - "exemption reason"
  - "lý do miễn trừ"
  - "tax transaction"
  - "giao dịch thuế"
  - "sap fi-loc-lo-br"
semantic_en: "The I_BR_ICMSEXEMPTIONREASON view exposes ICMS exemption reasons for Brazilian tax purposes, which are relevant when processing tax-related transactions in the FI-LOC-LO-BR component."
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ICMSEXEMPTIONREASON

**BR Icmsexemptionreason**

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
| `BR_ICMSExemptionReason` | ✓ | |  | `cast( substring(domvalue_l, 1, 2) as logbr_icmsexemptionreason preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_ICMSExemptionReasonText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS Exemption Reason'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSEXEMP'
@ObjectModel.representativeKey: 'BR_ICMSExemptionReason'
@ObjectModel.compositionRoot: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true

define view I_BR_ICMSExemptionReason
  as select from dd07l
  association [0..*] to I_BR_ICMSExemptionReasonText as _Text on $projection.BR_ICMSExemptionReason = _Text.BR_ICMSExemptionReason
{
      @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1, 2) as logbr_icmsexemptionreason preserving type ) as BR_ICMSExemptionReason,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
where
      domname  = 'J_1B_ICMS_EXEM_REASON'
  and as4local = 'A'
```
