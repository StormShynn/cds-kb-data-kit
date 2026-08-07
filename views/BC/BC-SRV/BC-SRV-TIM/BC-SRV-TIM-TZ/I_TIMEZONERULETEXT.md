---
name: I_TIMEZONERULETEXT
description: Timezoneruletext
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
  - text-view
  - text
  - component:BC-SRV-TIM-TZ
  - lob:Basis Components
---
# I_TIMEZONERULETEXT

**Timezoneruletext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeZoneRule` | ✓ | |  | `zonerule` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `TimeZoneRuleText` |  | |  | `descript` |  |  |
| `_TimeZoneRule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeZoneRule` | `I_TimeZoneRule` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ITIMEZONERULETXT'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : { dataExtraction.enabled : true}

@EndUserText.label: 'Time Zone Rule Text'

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TimeZoneRule'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@VDM.viewType: #BASIC 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_TimeZoneRuleText as select from ttzrt 
    association [0..1] to I_TimeZoneRule as _TimeZoneRule
        on $projection.TimeZoneRule = _TimeZoneRule.TimeZoneRule
    association [0..1] to I_Language as _Language
        on $projection.Language = _Language.Language        
{
 
    @ObjectModel.foreignKey.association:'_TimeZoneRule'
    key ttzrt.zonerule as TimeZoneRule, 
    
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'   
    key ttzrt.language as Language, 
    
    @Semantics.text
    ttzrt.descript as TimeZoneRuleText,
    
    _TimeZoneRule,
    _Language
}
```
