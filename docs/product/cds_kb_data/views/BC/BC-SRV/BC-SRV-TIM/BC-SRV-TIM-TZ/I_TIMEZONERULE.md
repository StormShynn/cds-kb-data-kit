---
name: I_TIMEZONERULE
description: "Timezonerule"
app_component: BC-SRV-TIM-TZ
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-TIM
  - interface-view
  - component:BC-SRV-TIM-TZ
  - lob:Basis Components
---
# I_TIMEZONERULE

**Timezonerule**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeZoneRule` | ✓ | |  | `zonerule` | `CHAR(6)` | Time Zone Rule |
| `UTCTimeZoneTimeDiff` |  | |  | `utcdiff` | `TIMS(6)` | Difference of time zone from UTC (w/o Summer time) |
| `UTCDifferenceSign` |  | |  | `utcsign` | `CHAR(1)` | Sign of the Difference from UTC (+ or -) |
| `TimeZoneRuleIsActive` |  | |  | `flagactive` | `CHAR(1)` | Time zones active |
| `_TimeZoneRuleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeZoneRuleText` | `I_TimeZoneRuleText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ITIMEZONERULE'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : {dataCategory: #DIMENSION , dataExtraction.enabled : true}

@EndUserText.label: 'Time Zone Rule'

@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true

@ObjectModel.representativeKey: 'TimeZoneRule'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_TimeZoneRule as select from ttzr
    association [0..*] to I_TimeZoneRuleText as _TimeZoneRuleText
        on $projection.TimeZoneRule = _TimeZoneRuleText.TimeZoneRule
 {
    @ObjectModel.text.association:'_TimeZoneRuleText'
    key ttzr.zonerule as TimeZoneRule, 
    
    ttzr.utcdiff as UTCTimeZoneTimeDiff,  
    
    ttzr.utcsign as UTCDifferenceSign, 
    
    ttzr.flagactive as TimeZoneRuleIsActive,
    
    _TimeZoneRuleText
}
```
