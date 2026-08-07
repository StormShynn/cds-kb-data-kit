---
name: ZI_CDS_16_V2.DDLS
description: "Association Filter with Path Expression"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/amacarlupu/abapCloudGit_CDS/blob/64f04322a51d74ab636b5ea693a4690d26be0465/src/zi_cds_16_v2.ddls.asddls
semantic_en: "Association Filter with Path Expression — CDS view."
semantic_vi: "Association Filter with Path Expression — CDS view dựa trên Association Filter with Path Expression."
keywords:
  - "association"
  - "filter"
  - "with"
  - "path"
  - "expression"
  - "travel"
  - "price"
  - "currency"
tags:
  - FI
  - bo:companycode
  - component:FI
  - lob:finance
---
# ZI_CDS_16_V2.DDLS

**Association Filter with Path Expression**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/amacarlupu/abapCloudGit_CDS/blob/64f04322a51d74ab636b5ea693a4690d26be0465/src/zi_cds_16_v2.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TravelID` | ✓ | |  | `travel_id` |  |  |
| `Price` |  | |  | `total_price` |  |  |
| `Currency` |  | |  | `currency_code` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_CurrencyText` | [0..*] |

## Source Code

*Source: [https://github.com/amacarlupu/abapCloudGit_CDS/blob/64f04322a51d74ab636b5ea693a4690d26be0465/src/zi_cds_16_v2.ddls.asddls](https://github.com/amacarlupu/abapCloudGit_CDS/blob/64f04322a51d74ab636b5ea693a4690d26be0465/src/zi_cds_16_v2.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Association Filter with Path Expression'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity zi_cds_16_v2
  as select from /dmo/travel
  association [0..*] to I_CurrencyText as _Currency on _Currency.Currency = $projection.Currency
{
  key travel_id     as TravelID,
      @Semantics.amount.currencyCode: 'Currency'
      total_price   as Price,
      currency_code as Currency,
      //      _Currency[ Language = $session.system_language ].CurrencyName
     // Esta forma sobrescrime la cardinalidad del CDS, pero solo afecta a ese campo, no a toda la vista.
      _Currency[1: Language = $session.system_language ].CurrencyName
}
```
