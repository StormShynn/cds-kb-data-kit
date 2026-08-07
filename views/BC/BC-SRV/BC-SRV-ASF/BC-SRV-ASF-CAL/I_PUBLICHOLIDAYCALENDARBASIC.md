---
name: I_PUBLICHOLIDAYCALENDARBASIC
description: Publicholidaycalendarbasic
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
  - component:BC-SRV-ASF-CAL
  - lob:Basis Components
---
# I_PUBLICHOLIDAYCALENDARBASIC

**Publicholidaycalendarbasic**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendarID` | ✓ | |  |  |  |  |
| `PublicHolidayCalendarLegacyID` |  | |  |  |  |  |
| `PublHldayCalValidityStartDate` |  | |  |  |  |  |
| `PublHldayCalValidityEndDate` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_Assgn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PublHolidayCalendarBasicText` | [0..*] |
| `_Assgn` | `I_PublHldayCalendarAssignment` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Holiday Calendar'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'PublicHolidayCalendarID'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S


define view entity I_PublicHolidayCalendarBasic 
  as select from R_FHC_HCAL_COMBINED 
  
  association [0..*] to I_PublHolidayCalendarBasicText as _Text on $projection.PublicHolidayCalendarID = _Text.PublicHolidayCalendarID
  association [0..*] to I_PublHldayCalendarAssignment as _Assgn on $projection.PublicHolidayCalendarID = _Assgn.PublicHolidayCalendarID

{
        @ObjectModel.text.association: '_Text'
    key PublicHolidayCalendarID,
        PublicHolidayCalendarLegacyID,
        PublHldayCalValidityStartDate,
        PublHldayCalValidityEndDate,
        
        _Text,
        _Assgn
       
        
}
```
