---
name: I_ADDRESSMANAGEMENTURITYPE
description: Addressmanagementuritype
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
# I_ADDRESSMANAGEMENTURITYPE

**Addressmanagementuritype**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AddressManagementURIType` | ✓ | |  | `cast ( domvalue_l as ad_uritype )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddressManagementURITypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Address Management URI Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'AddressManagementURIType'
@Analytics.technicalName: 'IADMANAGEURITYPE'
@ObjectModel.sapObjectNodeType.name: 'AddressManagementURIType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_AddressManagementURIType
  as select from dd07l
  association [0..*] to I_AddressManagementURITypeText as _Text on $projection.AddressManagementURIType = _Text.AddressManagementURIType
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ad_uritype ) as AddressManagementURIType,
      domvalue_l                        as DomainValue,
      _Text
}
where
      as4local = 'A'
  and domname  = 'AD_URITYPE'
```
