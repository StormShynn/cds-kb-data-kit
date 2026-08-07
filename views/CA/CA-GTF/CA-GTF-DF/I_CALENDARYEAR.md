---
name: I_CALENDARYEAR
description: Calendaryear
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_CALENDARYEAR

**Calendaryear**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarYear` | ✓ | |  | `calendaryear` |  |  |
| `IsLeapYear` |  | |  | `isleapyear` |  |  |
| `NumberOfDays` |  | |  | `numberofdays` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CalendarYear'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ICALENDARYEAR'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Year'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_CalendarYear as select from scal_tt_year
{
    @Search.defaultSearchElement : true
    key scal_tt_year.calendaryear as CalendarYear,
    scal_tt_year.isleapyear as IsLeapYear,
    @Search.defaultSearchElement : true
    scal_tt_year.numberofdays as NumberOfDays
    //cast( concat(calendaryear, '0101') as abap.dats ) as FirstDayOfYearDate
}
```
