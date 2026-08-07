---
name: ZI_AIRPORT_TECH_VH
description: "Value help for airport"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_airport_tech_vh.asddls
semantic_en: "Value help for airport — CDS view."
semantic_vi: "Value help for airport — CDS view dựa trên Value help for airport."
keywords:
  - "value"
  - "help"
  - "for"
  - "airport"
  - "airport_id"
  - "name"
  - "city"
  - "country"
tags:
  - bo:purchaseorder
---
# ZI_AIRPORT_TECH_VH

**Value help for airport**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_airport_tech_vh.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AirportId` | ✓ | |  | `airport_id` |  |  |
| `Name` |  | |  | `name` |  |  |
| `City` |  | |  | `city` |  |  |
| `Country` |  | |  | `country` |  |  |

## Source Code

*Source: [https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_airport_tech_vh.asddls](https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_airport_tech_vh.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Value help for airport'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
@Search.searchable: true
define view entity ZI_airport_tech_VH
  as select from /dmo/airport
{
      @Search.defaultSearchElement: true
  key airport_id as AirportId,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      name       as Name,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      city       as City,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      country    as Country
}
```
