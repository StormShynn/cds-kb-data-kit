---
name: I_ADDRESSREPRESENTATION
description: "Addressrepresentation"
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
# I_ADDRESSREPRESENTATION

**Addressrepresentation**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressRepresentationCode` | ✓ | |  | `nation` | `CHAR(1)` | Version ID for International Addresses |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddressRepresentationText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.representativeKey: 'AddressRepresentationCode'
@Analytics.technicalName: 'IADDRSCRPT'
@ObjectModel.sapObjectNodeType.name: 'AddressRepresentationCode'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@EndUserText.label: 'Represented names of language scripts'
define view entity I_AddressRepresentation
  as select from tsadv
  association [0..*] to I_AddressRepresentationText as _Text on $projection.AddressRepresentationCode = _Text.AddressRepresentationCode
{
      @ObjectModel.text.association: '_Text'
  key tsadv.nation as AddressRepresentationCode,
      _Text
}
```
