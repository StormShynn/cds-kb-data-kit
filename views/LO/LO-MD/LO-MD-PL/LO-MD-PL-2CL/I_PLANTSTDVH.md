---
name: I_PLANTSTDVH
description: Plantstdvh
app_component: LO-MD-PL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-PL
  - interface-view
  - value-help
  - standard-value-help
  - plant
  - component:LO-MD-PL-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PLANTSTDVH

**Plantstdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-PL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `werks` |
| `PlantName` | `cast(name1 as werks_name)` |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Plant by Name'
@AccessControl: {
                  authorizationCheck: #NOT_REQUIRED,
                  personalData.blocking: #NOT_REQUIRED
                }
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #VALUE_HELP,
                representativeKey: 'Plant',
                supportedCapabilities: [#VALUE_HELP_PROVIDER]
              } 
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPLANTSTDVH'
@Search.searchable: true
@Consumption.ranked: true
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view entity I_PlantStdVH
  as select from t001w
{
      @ObjectModel.text.element: [ 'PlantName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key werks                     as Plant,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(name1 as werks_name) as PlantName
}
```
