---
name: I_PUBLHOLIDAYCALENDARBASICTEXT
description: "Publholidaycalendarbasictext"
app_component: BC-SRV-ASF-CAL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - text-view
  - text
  - component:BC-SRV-ASF-CAL
  - lob:Basis Components
---
# I_PUBLHOLIDAYCALENDARBASICTEXT

**Publholidaycalendarbasictext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendarLanguage` | ✓ | |  |  |  |  |
| `PublicHolidayCalendarID` | ✓ | |  |  |  |  |
| `PublHolidayCalendarDescription` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Holiday Calendar - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PublicHolidayCalendarID'
@ObjectModel.supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #M


define view entity I_PublHolidayCalendarBasicText 
  as select from R_FHC_HCAL_COMBINED_TEXT

{
      @Semantics.language:true
  key PublicHolidayCalendarLanguage           as PublicHolidayCalendarLanguage,
   
      @ObjectModel.text.element: ['PublHolidayCalendarDescription']
  key PublicHolidayCalendarID as PublicHolidayCalendarID,
  
      @Semantics.text:true
      PublHolidayCalendarDescription        as PublHolidayCalendarDescription
      
}
```
