---
name: I_DAYLIGHTSAVINGRULE
description: "Daylightsavingrule"
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
# I_DAYLIGHTSAVINGRULE

**Daylightsavingrule**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DaylightSavingRule` | ✓ | |  | `dstrule` | `CHAR(6)` | Daylight Saving Time Rule |
| `DaylightSavingTimeDiff` |  | |  | `dstdiff` | `TIMS(6)` | Difference Between Daylight Saving Time and Winter Time |
| `DaylightSavingRuleIsActive` |  | |  | `flagactive` | `CHAR(1)` | Time zones active |
| `_DaylightSavingRuleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DaylightSavingRuleText` | `I_DaylightSavingRuleText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IDSTRULE'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : {dataCategory: #DIMENSION , dataExtraction.enabled : true}

@EndUserText.label: 'Daylight Saving Rule'

@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true

@ObjectModel.representativeKey: 'DaylightSavingRule'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_DaylightSavingRule as select from  ttzd 
    association [0..*] to I_DaylightSavingRuleText as _DaylightSavingRuleText
        on $projection.DaylightSavingRule = _DaylightSavingRuleText.DaylightSavingRule
{
    @ObjectModel.text.association:'_DaylightSavingRuleText'
    key ttzd.dstrule as DaylightSavingRule, 
    ttzd.dstdiff as DaylightSavingTimeDiff, 
    ttzd.flagactive as DaylightSavingRuleIsActive,
    _DaylightSavingRuleText
}
```
