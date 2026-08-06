---
name: I_BR_CNAETEXT
description: BR Cnaetext
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CNAETEXT

**BR Cnaetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_BR_CNAEText.spras` |
| key `BR_CNAE` | `_BR_CNAEText.j_1bcnae` |
| `BR_CNAEDesc` | `cast(_BR_CNAEText.j_1bcnaex as logbr_cnae_desc)` |
| `_BR_CNAE` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CNAE` | `I_BR_CNAE` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRCNAETEXT'
@EndUserText.label: 'Brazil CNAE - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_CNAE'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@AbapCatalog.preserveKey:true
@Search.searchable: true

define view I_BR_CNAEText as select from j_1btcnaet as _BR_CNAEText
  association [1..1] to I_BR_CNAE  as _BR_CNAE  on $projection.BR_CNAE = _BR_CNAE.BR_CNAE
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key _BR_CNAEText.spras                      as Language,

      @ObjectModel.foreignKey.association: '_BR_CNAE'
  key _BR_CNAEText.j_1bcnae                   as BR_CNAE,

      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement:true
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(_BR_CNAEText.j_1bcnaex as logbr_cnae_desc) as BR_CNAEDesc,
      _BR_CNAE,
      _Language
}
where
  _BR_CNAEText.spras = $session.system_language
```
