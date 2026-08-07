---
name: I_INDUSTRYSECTORVH
description: Industrysectorvh
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_INDUSTRYSECTORVH

**Industrysectorvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndustrySector` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINDSECTORVHV'
@EndUserText.label: 'Industry Sector for Products'

@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'IndustrySector'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

define view I_Industrysectorvh  
    as select from I_IndustrySector as Industry
    
{   
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      key Industry.IndustrySector,
         /* Associations */
                @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: '_Text_2'
      }
          Industry._Text,     
          Industry._Text_2
    
}
```
