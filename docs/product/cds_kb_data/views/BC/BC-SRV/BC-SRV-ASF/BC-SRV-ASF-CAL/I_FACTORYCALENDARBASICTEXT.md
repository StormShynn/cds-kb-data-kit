---
name: I_FACTORYCALENDARBASICTEXT
description: "Factorycalendarbasictext"
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
# I_FACTORYCALENDARBASICTEXT

**Factorycalendarbasictext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendarLanguage` | ✓ | |  |  |  |  |
| `FactoryCalendarID` | ✓ | |  |  |  |  |
| `FactoryCalendarDescription` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Factory Calendar - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@Consumption.ranked: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'FactoryCalendarID'
@ObjectModel.supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #M


define view entity I_FactoryCalendarBasicText 
  as select from R_FHC_FCAL_COMBINED_TEXT

{
      @Semantics.language:true
  key FactoryCalendarLanguage           as FactoryCalendarLanguage,
  
      @ObjectModel.text.element: ['FactoryCalendarDescription']
  key FactoryCalendarID                 as FactoryCalendarID,

      @Semantics.text:true
      FactoryCalendarDescription        as FactoryCalendarDescription

}
```
