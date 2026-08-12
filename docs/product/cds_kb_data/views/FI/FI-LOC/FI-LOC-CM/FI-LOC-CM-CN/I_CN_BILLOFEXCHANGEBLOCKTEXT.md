---
name: I_CN_BILLOFEXCHANGEBLOCKTEXT
description: "CN Billofexchangeblocktext"
app_component: FI-LOC-CM-CN
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfExchangeIsBlocked` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as xfeld preserving type)` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type)` |  |  |
| `BillOfExchangeBlockingTypeText` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_BillOfExchangeBlock` | | ✓ | | | | |

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
