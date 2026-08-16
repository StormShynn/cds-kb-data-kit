---
name: I_BR_ICMSEXEMPTIONREASONTEXT
description: "BR Icmsexemptionreasontext"
semantic_vi: "Cung cấp văn bản lý do miễn trừ ICMS, được sử dụng để hiển thị mô tả trong các ngôn ngữ khác nhau."
keywords:
  - "icms"
  - "exemption reason"
  - "text view"
  - "language"
  - "fi-loc-lo-br"
  - "finance"
  - "lob"
  - "component"
  - "sap cds view"
semantic_en: "Provides exemption reason text for ICMS, used to display descriptions in various languages."
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
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ICMSEXEMPTIONREASONTEXT

**BR Icmsexemptionreasontext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_ICMSExemptionReason` | ✓ | |  | `cast( substring(domvalue_l, 1, 2) as logbr_icmsexemptionreason preserving type )` |  |  |
| `BR_ICMSExemptionReasonDesc` |  | |  | `ddtext` |  |  |
| `_BR_ICMSExemptionReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_ICMSExemptionReason` | `I_BR_ICMSExemptionReason` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS Exemption Reason - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSEXEMPT'
@ObjectModel.representativeKey: 'BR_ICMSExemptionReason'
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

define view I_BR_ICMSExemptionReasonText as select from dd07t
  association [1..1] to I_BR_ICMSExemptionReason as _BR_ICMSExemptionReason on $projection.BR_ICMSExemptionReason = _BR_ICMSExemptionReason.BR_ICMSExemptionReason
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_ICMSExemptionReason'
  key cast( substring(domvalue_l, 1, 2) as logbr_icmsexemptionreason preserving type ) as BR_ICMSExemptionReason, 
  @Semantics.text
  ddtext as BR_ICMSExemptionReasonDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_ICMSExemptionReason,
  _Language  
}
where domname = 'J_1B_ICMS_EXEM_REASON' and as4local = 'A'
```
