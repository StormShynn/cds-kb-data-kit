---
name: I_ACTIVEADDRESSREPRESENTATION
description: Activeaddressrepresentation
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
# I_ACTIVEADDRESSREPRESENTATION

**Activeaddressrepresentation**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressRepresentationCode` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ActiveAddressRepresentation` | `tsadvc` | [1..1] |
| `_ClientDependentAddrRep` | `tsadvc_clidep` | [0..1] |
| `_Text` | `I_AddressRepresentationText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@EndUserText.label: 'Representation of names of language scripts'
define view entity I_ActiveAddressRepresentation
  as select from I_AddressRepresentation as AddressRepresentation
  association [1..1] to tsadvc                      as _ActiveAddressRepresentation on $projection.AddressRepresentationCode = _ActiveAddressRepresentation.nation
  association [0..1] to tsadvc_clidep               as _ClientDependentAddrRep      on $projection.AddressRepresentationCode = _ClientDependentAddrRep.nation
  association [0..*] to I_AddressRepresentationText as _Text                        on $projection.AddressRepresentationCode = _Text.AddressRepresentationCode
{
      @ObjectModel.text.association: '_Text'
  key AddressRepresentation.AddressRepresentationCode,
      _Text
}
where
  (
        _ClientDependentAddrRep.nation      is not null
    and _ClientDependentAddrRep.active      = 'X'
  )
  or(
        _ClientDependentAddrRep.nation      is null
    and _ActiveAddressRepresentation.active = 'X'
  )
```
