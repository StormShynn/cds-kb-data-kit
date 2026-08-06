---
name: I_SERIALNUMBERPROFILEVH
description: Serial NumberPROFILEVH
app_component: LO-MD-SN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-SN
  - interface-view
  - value-help
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNUMBERPROFILEVH

**Serial NumberPROFILEVH**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SerialNumberProfile` | `SerialNumberProfile` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: { 
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #NOT_REQUIRED
}
                  
@EndUserText.label: 'Serial number profile'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SerialNumberProfile'

@ObjectModel.supportedCapabilities: [ 
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #VALUE_HELP_PROVIDER
]

@VDM.viewType: #COMPOSITE

@Search.searchable: true
@Consumption.ranked: true
define view entity I_SerialNumberProfileVH
  as select from I_SerialNumberProfile
{

      @ObjectModel.text.element: ['SerialNumberProfileDescription']
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key SerialNumberProfile,
  
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      _Text[ Language = $session.system_language ].SerialNumberProfileDescription

}
```
