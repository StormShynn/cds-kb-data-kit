---
name: I_ADDRESSMANAGEMENTURITYPEVH
description: Addressmanagementuritypevh
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
  - value-help
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSMANAGEMENTURITYPEVH

**Addressmanagementuritypevh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AddressManagementURIType` | ✓ | |  |  |
| `DomainValue` |  | |  |  |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Address Management URI Type'
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IADMNGURITYPEVH'
@ObjectModel.representativeKey: 'AddressManagementURIType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_AddressManagementURITypeVH
  as select from I_AddressManagementURIType
{
   @ObjectModel.text.association: '_Text'
  key AddressManagementURIType,
   @Search.defaultSearchElement: true
   @Consumption.hidden: true
   DomainValue,
   _Text
}
```
