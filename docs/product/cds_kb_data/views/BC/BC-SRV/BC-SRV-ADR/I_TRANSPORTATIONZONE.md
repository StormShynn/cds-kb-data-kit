---
name: I_TRANSPORTATIONZONE
description: "Transportationzone"
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
  - transport
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_TRANSPORTATIONZONE

**Transportationzone**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportZone` | ✓ | |  | `zone1` | `CHAR(10)` | Transportation zone to or from which the goods are delivered |
| `CountryCode` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `_Text` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TransportationZoneText` | [1..*] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'TransportZone'
@Analytics.technicalName: 'ITRANSPORTZONE'
@ObjectModel.sapObjectNodeType.name: 'TransportationZone'
@Search.searchable: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@EndUserText.label: 'Transportation Zone'

define view entity I_TransportationZone as select from tzone


   association [1..*] to I_TransportationZoneText as _Text    on  $projection.TransportZone       = _Text.TransportZone
                                                          and $projection.CountryCode = _Text.CountryCode
  association [0..1] to I_Country as _Country on $projection.CountryCode = _Country.Country

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key tzone.zone1 as TransportZone,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_Country'
  key tzone.land1 as CountryCode,
      @Consumption.filter.hidden: true
      _Country
      , _Text

}
```
