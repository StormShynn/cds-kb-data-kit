---
name: I_ACTIVEADDRESSREPRESENTATION
description: "Activeaddressrepresentation"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressRepresentationCode` | ✓ | |  |  | `CHAR(1)` | Version ID for International Addresses |
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
