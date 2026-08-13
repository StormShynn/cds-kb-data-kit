---
name: I_ADDRNONDELIVERABLEREASONVH
description: "Addrnondeliverablereasonvh"
semantic_vi: "CDS view I_ADDRNONDELIVERABLEREASONVH cung cấp danh sách lý do không thể giao địa chỉ, có thể được sử dụng để lọc hoặc xác minh dữ liệu địa chỉ trong các ứng dụng kinh doanh khác nhau."
keywords:
  - "address"
  - "non-deliverable"
  - "reason"
  - "address validation"
  - "địa chỉ"
  - "lý do không thể giao"
  - "xác minh địa chỉ"
semantic_en: "The I_ADDRNONDELIVERABLEREASONVH CDS view provides a list of non-deliverable address reasons, which can be used to filter or validate address data in various business applications."
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
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRNONDELIVERABLEREASONVH

**Addrnondeliverablereasonvh**

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
| `AddressNonDeliverableReason` | ✓ | |  |  | `CHAR(4)` | Not Deliverable Flag |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Address Non Deliverable Reason'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_AddrNonDeliverableReasonVH as select from I_AddressNonDeliverableReason
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
  key AddressNonDeliverableReason,
      _Text
}
```
