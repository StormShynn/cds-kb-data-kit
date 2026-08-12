---
name: I_ADDRESSGROUPTEXT
description: "Addressgrouptext"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - address
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSGROUPTEXT

**Addressgrouptext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `AddressGroup` | ✓ | |  | `addr_group` | `CHAR(4)` | Address Group (Key) (Business Address Services) |
| `AddressGroupName` |  | |  | `group_text` | `CHAR(40)` | Address group description |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Description of Address Group'
@ObjectModel.representativeKey: 'AddressGroup'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IADDRESSGROUPT'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_AddressGroupText
  as select from tsad7t
{
      @Semantics.language: true
  key langu      as Language,
  @EndUserText.label: 'Address Group'
  key addr_group as AddressGroup,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      group_text as AddressGroupName
}
```
