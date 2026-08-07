---
name: ZI_CARRIER_TECH_R
description: Carrier detail
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_carrier_tech_r.asddls
semantic_en: Carrier detail — CDS view.
semantic_vi: Carrier detail — CDS view dựa trên Carrier detail.
keywords:
  - carrier
  - detail
  - carrier_id
  - name
  - currency
  - code
tags:
  - CA
  - component:CA
  - lob:cross_application components
---
# ZI_CARRIER_TECH_R

**Carrier detail**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_carrier_tech_r.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CarrierId` | ✓ | |  | `carrier_id` |  |  |
| `Name` |  | |  | `name` |  |  |
| `CurrencyCode` |  | |  | `currency_code` |  |  |

## Source Code

*Source: [https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_carrier_tech_r.asddls](https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_carrier_tech_r.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Carrier detail'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
@Search.searchable: true
define view entity ZI_Carrier_TECH_R
  as select from /dmo/carrier
{
  key carrier_id    as CarrierId,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      name          as Name,
      currency_code as CurrencyCode

}
```
