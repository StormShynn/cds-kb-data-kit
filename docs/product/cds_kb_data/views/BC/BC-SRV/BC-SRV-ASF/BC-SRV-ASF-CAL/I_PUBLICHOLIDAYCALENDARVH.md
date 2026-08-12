---
name: I_PUBLICHOLIDAYCALENDARVH
description: "Publicholidaycalendarvh"
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
  - value-help
  - component:BC-SRV-ASF-CAL
  - lob:Basis Components
---
# I_PUBLICHOLIDAYCALENDARVH

**Publicholidaycalendarvh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendarID` | ✓ | |  |  | `CHAR(32)` | Holiday calendar ID |
| `PublicHolidayCalendarLegacyID` |  | |  |  | `CHAR(2)` | Public Holiday Calendar |
| `PublHldayCalValidityStartDate` |  | |  |  | `DATS(8)` | Date (from) |
| `PublHldayCalValidityEndDate` |  | |  |  | `DATS(8)` | Date (to) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PublHolidayCalendarBasicText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Holiday Calendar'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PublicHolidayCalendarID'
@ObjectModel.supportedCapabilities:  [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S


define view entity I_PublicHolidayCalendarVH 
  as select from R_FHC_HCAL_COMBINED
    association [0..*] to I_PublHolidayCalendarBasicText as _Text 
      on $projection.PublicHolidayCalendarID = _Text.PublicHolidayCalendarID
  
{
      @ObjectModel.text.association: '_Text'
    key PublicHolidayCalendarID,
    
        PublicHolidayCalendarLegacyID,
        
        PublHldayCalValidityStartDate,
        PublHldayCalValidityEndDate,
      
      //association to I_PublHolidayCalendarBasicText
        _Text
        
}
```
