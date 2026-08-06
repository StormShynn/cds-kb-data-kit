---
name: I_ADDRESSOBJECTTYPE
description: Addressobjecttype
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
# I_ADDRESSOBJECTTYPE

**Addressobjecttype**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AddressObjectType` | `cast ( domvalue_l as ad_adrtype )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddressObjectTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'Address Object Type'
@ObjectModel.representativeKey: 'AddressObjectType'
@Analytics.technicalName: 'IADDROBJTYPE'
@ObjectModel.sapObjectNodeType.name: 'AddressObjectType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_AddressObjectType
  as select from dd07l
  association [0..*] to I_AddressObjectTypeText as _Text on $projection.AddressObjectType = _Text.AddressObjectType
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ad_adrtype ) as AddressObjectType,
      _Text
}
where
      as4local = 'A'
  and domname  = 'AD_ADRTYPE'
```
