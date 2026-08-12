---
name: I_BR_ICMSTAXSITUATION
description: "BR Icmstaxsituation"
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
  - tax
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ICMSTAXSITUATION

**BR Icmstaxsituation**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_ICMSTaxSituation` | ✓ | |  | `cast(case substring( domvalue_l, 1, 1 ) when 'A' then '41' when 'B' then '51' else concat(substring( domvalue_l, 1, 1 ), '0') end as logbr_taxsit)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_ICMSTaxSituationText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS Tax Situation'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSTAXSIT'
@ObjectModel.representativeKey: 'BR_ICMSTaxSituation'
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

define view I_BR_ICMSTaxSituation
  as select from dd07l
  association [0..*] to I_BR_ICMSTaxSituationText as _Text on $projection.BR_ICMSTaxSituation = _Text.BR_ICMSTaxSituation
{
      @ObjectModel.text.association: '_Text'
  key cast(case substring( domvalue_l, 1, 1 )
    when 'A' then '41'
    when 'B' then '51'
    else concat(substring( domvalue_l, 1, 1 ), '0')
  end as logbr_taxsit) as BR_ICMSTaxSituation,
      //cast( substring( domvalue_l, 1, 1 ) as logbr_taxsit preserving type ) as BR_ICMSTaxSituation,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
where
      domname  = 'J_1BTAXSIT'
  and as4local = 'A'
```
