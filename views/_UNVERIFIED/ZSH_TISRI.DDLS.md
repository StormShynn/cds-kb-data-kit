---
name: ZSH_TISRI.DDLS
description: Tipos de Identificación Search Hepl Code
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Malvarez-Seidor/Seidor_ABAP/blob/f44ab56240658d1e0372ee4629510a187d2179b8/src/zsh_tisri.ddls.asddls
semantic_en: Tipos de Identificación Search Hepl Code — CDS view based on DDCDS_CUSTOMER_DOMAIN_VALUE_T.
semantic_vi: Tipos de Identificación Search Hepl Code — CDS view dựa trên DDCDS_CUSTOMER_DOMAIN_VALUE_T.
keywords:
  - tipos
  - identificación
  - search
  - hepl
  - code
  - domain_name
  - value_position
  - language
  - value_low
  - description
tags:
  - AC
  - bo:businesspartner
  - component:AC
---
# ZSH_TISRI.DDLS

**Tipos de Identificación Search Hepl Code**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Malvarez-Seidor/Seidor_ABAP/blob/f44ab56240658d1e0372ee4629510a187d2179b8/src/zsh_tisri.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `domain_name` | `domain_name` |
| key `value_position` | `value_position` |
| key `language` | `language` |
| `value_low` | `value_low` |
| `Description` | `text` |

## Source Code

*Source: [https://github.com/Malvarez-Seidor/Seidor_ABAP/blob/f44ab56240658d1e0372ee4629510a187d2179b8/src/zsh_tisri.ddls.asddls](https://github.com/Malvarez-Seidor/Seidor_ABAP/blob/f44ab56240658d1e0372ee4629510a187d2179b8/src/zsh_tisri.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZSH_I_TISRI'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tipos de Identificación Search Hepl Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
@Search.searchable: true
//@ObjectModel.resultSet.sizeCategory: #XS
define view ZSH_TISRI
  as select from DDCDS_CUSTOMER_DOMAIN_VALUE_T( p_domain_name: 'ZDD_TISRI')
{
  @Consumption.hidden: true
  key domain_name,
  //@Consumption.hidden: true
  key value_position,
      @Semantics.language: true
  key language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.element: [ 'Description' ]
      value_low,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      text as Description
}
```