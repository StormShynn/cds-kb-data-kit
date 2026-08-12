---
name: I_BR_ICMSEXEMPTIONREASONTEXT
description: "BR Icmsexemptionreasontext"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
