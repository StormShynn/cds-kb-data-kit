---
name: I_BR_ICMSEXEMPTIONREASON
description: BR Icmsexemptionreason
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BR_ICMSExemptionReason` | `cast( substring(domvalue_l, 1, 2) as logbr_icmsexemptionreason preserving type )` |
| `_Text` | *Association* |

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
