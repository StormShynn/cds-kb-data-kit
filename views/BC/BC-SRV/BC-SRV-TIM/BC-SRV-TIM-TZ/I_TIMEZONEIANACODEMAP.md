---
name: I_TIMEZONEIANACODEMAP
description: Timezoneianacodemap
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
# I_TIMEZONEIANACODEMAP

**Timezoneianacodemap**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TimeZoneIANACode` | ✓ | |  | `ianatzone` |
| `TimeZoneID` |  | |  | `tzone` |
| `IANACodeIsCustDefinedDefault` |  | |  | `flagdefault` |
| `IANACodeIsSAPDefinedDefault` |  | |  | `flagsapdefault` |
| `_TimeZone` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeZone` | `I_TimeZone` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Time Zone Code According to IANA Time Zone Database'
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}  
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel: {
  sapObjectNodeType.name: 'TimeZoneIANACode',
  representativeKey:      'TimeZoneIANACode',
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  supportedCapabilities:  [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                            #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TimeZoneIANACodeMap
  as select from tzonemap

  association [0..1] to I_TimeZone as _TimeZone on $projection.TimeZoneID = _TimeZone.TimeZoneID

{
      @Semantics.timeZone: true 
  key ianatzone      as TimeZoneIANACode,
      @ObjectModel.foreignKey.association: '_TimeZone'
      tzone          as TimeZoneID,
                        _TimeZone,
      @Semantics.booleanIndicator: true
      flagdefault    as IANACodeIsCustDefinedDefault,
      @Semantics.booleanIndicator: true
      flagsapdefault as IANACodeIsSAPDefinedDefault
}
```
