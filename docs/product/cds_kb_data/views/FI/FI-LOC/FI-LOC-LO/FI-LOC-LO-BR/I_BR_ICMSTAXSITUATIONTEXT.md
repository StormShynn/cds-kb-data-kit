---
name: I_BR_ICMSTAXSITUATIONTEXT
description: "BR Icmstaxsituationtext"
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
  - text-view
  - tax
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ICMSTAXSITUATIONTEXT

**BR Icmstaxsituationtext**

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
| `BR_ICMSTaxSituation` | ✓ | |  | `cast(case substring( domvalue_l, 1, 1 ) when 'A' then '41' when 'B' then '51' else concat(substring( domvalue_l, 1, 1 ), '0') end as logbr_taxsit)` |  |  |
| `BR_ICMSTaxSituationDesc` |  | |  | `cast(ddtext as logbr_icmstaxsituation preserving type)` |  |  |
| `_BR_ICMSTaxSituation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_ICMSTaxSituation` | `I_BR_ICMSTaxSituation` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS Tax Situation - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSTAXSITT'
@ObjectModel.representativeKey: 'BR_ICMSTaxSituation'
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

define view I_BR_ICMSTaxSituationText as select distinct from dd07t
  association [1..1] to I_BR_ICMSTaxSituation as _BR_ICMSTaxSituation on $projection.BR_ICMSTaxSituation = _BR_ICMSTaxSituation.BR_ICMSTaxSituation
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_ICMSTaxSituation'
  key cast(case substring( domvalue_l, 1, 1 )
    when 'A' then '41'
    when 'B' then '51'
    else concat(substring( domvalue_l, 1, 1 ), '0')
  end as logbr_taxsit) as BR_ICMSTaxSituation,
  //key cast( substring( domvalue_l, 1, 1 ) as logbr_taxsit preserving type ) as BR_ICMSTaxSituation,    
  @Semantics.text
  cast(ddtext as logbr_icmstaxsituation preserving type) as BR_ICMSTaxSituationDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]  
  _BR_ICMSTaxSituation, 
  _Language 
}
where domname = 'J_1BTAXSIT' 
  and as4local = 'A'
```
