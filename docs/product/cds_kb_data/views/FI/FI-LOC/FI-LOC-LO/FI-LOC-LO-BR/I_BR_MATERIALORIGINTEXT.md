---
name: I_BR_MATERIALORIGINTEXT
description: "BR Materialorigintext"
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
  - material
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:Material
---
# I_BR_MATERIALORIGINTEXT

**BR Materialorigintext**

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
| `BR_MaterialOrigin` | ✓ | |  | `cast ( domvalue_l as logbr_matorg )` |  |  |
| `BR_MaterialOriginDesc` |  | |  | `cast ( ddtext as logbr_matorgdesc preserving type)` |  |  |
| `_BR_MaterialOrigin` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_MaterialOrigin` | `I_BR_MaterialOrigin` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Material Origin - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRMATORGT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_MaterialOrigin'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@Search.searchable: true

define view I_BR_MaterialOriginText as select from dd07t
  association [1..1] to I_BR_MaterialOrigin as _BR_MaterialOrigin on $projection.BR_MaterialOrigin = _BR_MaterialOrigin.BR_MaterialOrigin
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  @Semantics.language: true
  key cast( ddlanguage as spras  preserving type ) as Language,
  
  @ObjectModel.foreignKey.association: '_BR_MaterialOrigin'
  key cast ( domvalue_l as logbr_matorg ) as BR_MaterialOrigin,
  
  @Search.defaultSearchElement:true
  @Search.ranking: #HIGH
  @Semantics.text: true
  cast ( ddtext as logbr_matorgdesc preserving type) as BR_MaterialOriginDesc,
  
  _BR_MaterialOrigin,
  _Language
}
where domname = 'J_1BMATORG' and as4local = 'A'
```
