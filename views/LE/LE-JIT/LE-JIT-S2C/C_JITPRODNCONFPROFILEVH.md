---
name: C_JITPRODNCONFPROFILEVH
description: Jitprodnconfprofilevh
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - consumption-view
  - value-help
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# C_JITPRODNCONFPROFILEVH

**Jitprodnconfprofilevh**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITProdnConfProfile` | ✓ | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck           : #NOT_REQUIRED
@EndUserText.label                          : 'JIT Production Confirmation Profile'
@Metadata.ignorePropagatedAnnotations       : true
@ObjectModel    :{ dataCategory             : #VALUE_HELP,
                   representativeKey        : 'JITProdnConfProfile',                  
                   supportedCapabilities    : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                   semanticKey              : [ 'JITProdnConfProfile'],
                   usageType                : { dataClass               : #META,
                                                serviceQuality          : #A,
                                                sizeCategory            : #S
                                              }
                 }
@VDM.viewType                               : #CONSUMPTION
@Search.searchable                          : true
define view entity C_JITProdnConfProfileVH
  as select from I_JITProdnConfProfile
{
      @ObjectModel.text.element:[ 'JITProdnConfProfileDesc' ]
      @UI.textArrangement: #TEXT_ONLY
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  key JITProdnConfProfile,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _Text[1:Language = $session.system_language].JITProdnConfProfileDesc
}
```
