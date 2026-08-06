---
name: I_TIMEZONE
description: Timezone
app_component: BC-SRV-TIM-TZ
software_component: SAP_BASIS
release_state: released
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
# I_TIMEZONE

**Timezone**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TimeZoneID` | `ttzz.tzone` |
| `TimeZoneRule` | `ttzz.zonerule` |
| `DaylightSavingRule` | `ttzz.dstrule` |
| `TimeZoneIsActive` | `ttzz.flagactive` |
| `_TimeZoneText` | *Association* |
| `_TimeZoneRule` | *Association* |
| `_DaylightSavingRule` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeZoneText` | `I_TimeZoneText` | [0..*] |
| `_TimeZoneRule` | `I_TimeZoneRule` | [0..1] |
| `_DaylightSavingRule` | `I_DaylightSavingRule` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ITIMEZONE'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : {dataCategory: #DIMENSION , dataExtraction.enabled : true}

@EndUserText.label: 'Time Zone'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true

@ObjectModel.representativeKey: 'TimeZoneID'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_TimeZone as select from ttzz 
    association [0..*] to I_TimeZoneText as _TimeZoneText
        on $projection.TimeZoneID = _TimeZoneText.TimeZoneID
    association [0..1] to I_TimeZoneRule as _TimeZoneRule
        on $projection.TimeZoneRule = _TimeZoneRule.TimeZoneRule
    association [0..1] to I_DaylightSavingRule as _DaylightSavingRule  
        on $projection.DaylightSavingRule = _DaylightSavingRule.DaylightSavingRule      
{
     @ObjectModel.text.association:'_TimeZoneText'
     @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
    key ttzz.tzone as TimeZoneID, 
    @ObjectModel.foreignKey.association: '_TimeZoneRule'
    ttzz.zonerule as TimeZoneRule, 
    @ObjectModel.foreignKey.association: '_DaylightSavingRule'
    ttzz.dstrule as DaylightSavingRule, 
    
    ttzz.flagactive as TimeZoneIsActive,
    
    _TimeZoneText,
    _TimeZoneRule,
    _DaylightSavingRule
}
```
