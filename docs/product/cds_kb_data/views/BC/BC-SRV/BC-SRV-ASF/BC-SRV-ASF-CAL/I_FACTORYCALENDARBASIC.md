---
name: I_FACTORYCALENDARBASIC
description: "Factorycalendarbasic"
app_component: BC-SRV-ASF-CAL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - component:BC-SRV-ASF-CAL
  - lob:Basis Components
---
# I_FACTORYCALENDARBASIC

**Factorycalendarbasic**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendarID` | ✓ | |  |  | `CHAR(32)` | Factory calendar ID |
| `FactoryCalendarLegacyID` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `PublicHolidayCalendarID` |  | |  |  | `CHAR(32)` | Holiday calendar ID |
| `FctryCalMondayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalTuesdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalWednesdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalThursdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalFridayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalSaturdayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalSundayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalHolidayIsWorkingDay` |  | |  |  | `CHAR(1)` | Bit for workday |
| `FctryCalendarValidityStartDate` |  | |  |  | `DATS(8)` | Date (from) |
| `FactoryCalendarValidityEndDate` |  | |  |  | `DATS(8)` | Date (to) |
| `FactoryCalendarStartDateValue` |  | |  |  | `INT4(10)` | Factorydate |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FactoryCalendarBasicText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Factory Calendar'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'FactoryCalendarID'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S


define view entity I_FactoryCalendarBasic
  as select from R_FHC_FCAL_COMBINED
  
  association [0..*] to I_FactoryCalendarBasicText as _Text on $projection.FactoryCalendarID = _Text.FactoryCalendarID
  
{

      @ObjectModel.text.association: '_Text'
  key FactoryCalendarID,
      FactoryCalendarLegacyID,
      PublicHolidayCalendarID,
      FctryCalMondayIsWorkingDay,
      FctryCalTuesdayIsWorkingDay,
      FctryCalWednesdayIsWorkingDay,
      FctryCalThursdayIsWorkingDay,
      FctryCalFridayIsWorkingDay,
      FctryCalSaturdayIsWorkingDay,
      FctryCalSundayIsWorkingDay,
      FctryCalHolidayIsWorkingDay,
      FctryCalendarValidityStartDate,
      FactoryCalendarValidityEndDate,
      FactoryCalendarStartDateValue,
      
      _Text
      
}
```
