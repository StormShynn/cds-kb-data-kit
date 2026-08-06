---
name: I_CN_BILLOFEXCHANGEBLOCKTEXT
description: CN Billofexchangeblocktext
app_component: FI-LOC-CM-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CM
  - interface-view
  - text-view
  - text
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# I_CN_BILLOFEXCHANGEBLOCKTEXT

**CN Billofexchangeblocktext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfExchangeIsBlocked` | `cast( substring(domvalue_l, 1, 1) as xfeld preserving type)` |
| key `Language` | `cast ( ddlanguage as spras preserving type)` |
| `BillOfExchangeBlockingTypeText` | `ddtext` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_BillOfExchangeBlock` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNBOEBLOCKT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Bill Of Exchange Block Indicator - Text'
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillOfExchangeIsBlocked'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #EXTRACTION_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/                                        
define view I_CN_BillOfExchangeBlockText as select from dd07t
  association to parent I_CN_BillOfExchangeBlockVH as _BillOfExchangeBlock
    on $projection.BillOfExchangeIsBlocked = _BillOfExchangeBlock.BillOfExchangeIsBlocked
  association [0..1] to I_Language as _Language 
    on $projection.Language = _Language.Language
{

  @ObjectModel.text.element: ['BillOfExchangeBlockingTypeText']
  @UI.textArrangement: #TEXT_ONLY
  key cast( substring(domvalue_l, 1, 1) as xfeld preserving type)   as BillOfExchangeIsBlocked,

  @Semantics.language: true  
  @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type)     as Language,

  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  @Semantics.text: true
  ddtext as BillOfExchangeBlockingTypeText,
  @Analytics.hidden: true
  @Consumption.hidden: true
  dd07t.domvalue_l as DomainValue,
  
  /* Associations */
  _BillOfExchangeBlock,
  _Language
}
where dd07t.domname = 'XFELD'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000';
```
