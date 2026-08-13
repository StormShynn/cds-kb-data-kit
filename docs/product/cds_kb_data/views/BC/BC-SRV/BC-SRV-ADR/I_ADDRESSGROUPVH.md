---
name: I_ADDRESSGROUPVH
description: "Addressgroupvh"
semantic_vi: "Cung cấp danh sách các nhóm địa chỉ, được sử dụng để phân loại và quản lý địa chỉ trong bối cảnh kinh doanh. View này có thể được sử dụng để lấy nhóm địa chỉ cho các ứng dụng kinh doanh khác nhau."
keywords:
  - "address group"
  - "nhóm địa chỉ"
  - "address management"
  - "quản lý địa chỉ"
  - "sap cds view"
  - "view i_addressgroupvh"
  - "bc-srv-adr"
semantic_en: "Provides a list of address groups, which are used to categorize and manage addresses in a business context. This view can be used to retrieve address groups for various business applications."
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
  - value-help
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSGROUPVH

**Addressgroupvh**

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
| `AddressGroup` | ✓ | |  |  | `CHAR(4)` | Address Group (Key) (Business Address Services) |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Address Group'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_AddressGroupVH
  as select from I_AddressGroup
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key AddressGroup,
      _Text
}
```
