---
name: I_ADDRESSCOMMUNICATIONMETHOD
description: Addresscommunicationmethod
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
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSCOMMUNICATIONMETHOD

**Addresscommunicationmethod**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommunicationMediumType` | ✓ | |  | `comm_type` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddrCommunicationMethodText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Communication Method'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'CommunicationMediumType'
@Analytics.technicalName: 'IADCOMMMETHOD'
@ObjectModel.sapObjectNodeType.name: 'CommunicationMediumType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_AddressCommunicationMethod 
  as select from tsac 
  association [0..*] to I_AddrCommunicationMethodText as _Text on $projection.CommunicationMediumType = _Text.CommunicationMediumType {
  @ObjectModel.text.association: '_Text'
  key comm_type as CommunicationMediumType,
  /* Associations */
    _Text  
}
```
