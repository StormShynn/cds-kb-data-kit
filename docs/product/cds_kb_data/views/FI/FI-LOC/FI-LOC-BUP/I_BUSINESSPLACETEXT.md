---
name: I_BUSINESSPLACETEXT
description: "Businessplacetext"
app_component: FI-LOC-BUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-BUP
  - interface-view
  - text-view
  - text
  - component:FI-LOC-BUP
  - lob:Finance
---
# I_BUSINESSPLACETEXT

**Businessplacetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-BUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `BusinessPlace` | ✓ | |  | `branch` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `BusinessPlaceDescription` |  | |  | `name` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Place - Text'
@ObjectModel: { dataCategory: #TEXT, 
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }   
@ObjectModel.representativeKey: 'BusinessPlace'  
@Analytics.dataExtraction.enabled:true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name:'BusinessPlaceText'

define view entity I_BusinessPlaceText as select from j_1bbrancht
  association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode   as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,
  key branch as BusinessPlace,
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key language as Language,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  name as BusinessPlaceDescription,
  
  _Language,
  _CompanyCode
  
}
where
  bupla_type = ''
```
