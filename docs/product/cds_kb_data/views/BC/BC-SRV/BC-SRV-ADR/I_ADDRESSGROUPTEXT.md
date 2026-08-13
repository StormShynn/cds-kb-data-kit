---
name: I_ADDRESSGROUPTEXT
description: "Addressgrouptext"
semantic_vi: "View I_ADDRESSGROUPTEXT hiển thị dữ liệu văn bản nhóm địa chỉ, được sử dụng để hiển thị thông tin mô tả về nhóm địa chỉ trong hệ thống. Nó thường được sử dụng khi hiển thị chi tiết nhóm địa chỉ."
keywords:
  - "address group"
  - "địa chỉ nhóm"
  - "address group text"
  - "văn bản nhóm địa chỉ"
  - "sap cds view"
  - "view i_addressgrouptext"
  - "address"
  - "text"
  - "group"
  - "sap basis components"
  - "bc-srv-adr"
semantic_en: "The I_ADDRESSGROUPTEXT view exposes address group text data, which is used to display descriptive information about address groups in the system. It is typically used when displaying address group details."
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
