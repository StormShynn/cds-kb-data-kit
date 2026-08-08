---
name: I_BR_NFFREIGHTNATURETEXT
description: "BR Nffreightnaturetext"
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
  - freight
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFFREIGHTNATURETEXT

**BR Nffreightnaturetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_NFFreightNature` | ✓ | |  | `cast ( domvalue_l as logbr_ind_nat_frt )` |  |  |
| `BR_NFFreightNatureDesc` |  | |  | `cast ( ddtext as logbr_ind_nat_frt_desc preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_BR_NFFreightNature` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFFreightNature` | `I_BR_NFFreightNature` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Freight Nature Indicator - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRNFFRTNATRTEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_NFFreightNature'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true

define view I_BR_NFFreightNatureText as select from dd07t
  association [1..1] to I_BR_NFFreightNature as _BR_NFFreightNature on $projection.BR_NFFreightNature = _BR_NFFreightNature.BR_NFFreightNature
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language: true
  key cast( ddlanguage as spras preserving type) as Language,
  
  @ObjectModel.foreignKey.association: '_BR_NFFreightNature'
  key cast ( domvalue_l as logbr_ind_nat_frt ) as BR_NFFreightNature,
  
  @Search.fuzzinessThreshold: 0.8
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Semantics.text: true
  cast ( ddtext as logbr_ind_nat_frt_desc preserving type) as BR_NFFreightNatureDesc,
  
  @Consumption.hidden: true
  dd07t.domvalue_l as DomainValue,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
  _BR_NFFreightNature,
  _Language
}
where domname = 'LOGBR_IND_NAT_FRT' and as4local = 'A'
```
