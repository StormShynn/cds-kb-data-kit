---
name: I_TRANSPORTATIONZONETEXT
description: Transportationzonetext
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - transport
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_TRANSPORTATIONZONETEXT

**Transportationzonetext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportZone` | `zone1` |
| key `CountryCode` | `land1` |
| key `Language` | `spras` |
| `TransportZoneDescription` | `vtext` |

## Source Code

```abap
@VDM: {
//  private: false,
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'TransportZone',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ITRANSPZONETXT' 
@EndUserText.label: 'Transportation Zone - Text'

define view entity I_TransportationZoneText as select from tzont
{
  key zone1 as TransportZone,
  key land1 as CountryCode,
      @Semantics.language: true
  key spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      vtext as TransportZoneDescription
}
```
