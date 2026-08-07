---
name: I_TIMEZONEIANACODESTDVH
description: Timezoneianacodestdvh
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
  - value-help
  - standard-value-help
  - component:BC-SRV-TIM-TZ
  - lob:Basis Components
---
# I_TIMEZONEIANACODESTDVH

**Timezoneianacodestdvh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeZoneIANACode` | ✓ | |  |  |  |  |
| `TimeZoneID` |  | |  |  |  |  |
| `_TimeZoneText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeZoneText` | `I_TimeZoneText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Time Zone Code According to IANA Time Zone Database'
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}  
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory:           #VALUE_HELP,
  sapObjectNodeType.name: 'TimeZoneIANACode',
  representativeKey:      'TimeZoneIANACode',
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  supportedCapabilities:  [ #VALUE_HELP_PROVIDER ],
  modelingPattern:          #VALUE_HELP_PROVIDER
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_TimeZoneIANACodeStdVH
  as select from I_TimeZoneIANACodeMap

  association [0..*] to I_TimeZoneText as _TimeZoneText on $projection.TimeZoneID = _TimeZoneText.TimeZoneID

{
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold:   0.8,
        ranking:              #HIGH
      }
      @Semantics.timeZone: true 
  key TimeZoneIANACode,
      @ObjectModel.text.association:       '_TimeZoneText'
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold:   0.8,
        ranking:              #LOW
      }
      @Consumption.valueHelpDefinition: [{entity: {name: 'I_TimeZone', element: 'TimeZoneID' }}]
      TimeZoneID,
      _TimeZoneText
}
```
