---
name: I_CALENDARMONTHVH
description: "Calendarmonthvh"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - value-help
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_CALENDARMONTHVH

**Calendarmonthvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarMonth` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICALENDARMONTHVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@EndUserText.label: 'Value Help CDS for Calendar Month'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #L
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
define view I_CalendarMonthVH
  as select from I_CalendarMonth
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key CalendarMonth,
      _Text
}
```
