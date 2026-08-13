---
name: D_PURGSOURCELISTDELETED_2
description: "D Purgsourcelistdeleted 2"
semantic_vi: "View D_PURGSOURCELISTDELETED_2 hiển thị danh sách nguồn đã xóa trong quy trình mua hàng, bao gồm thông tin nhà cung cấp và tổ chức. Nó được sử dụng để theo dõi và quản lý danh sách nguồn đã xóa."
keywords:
  - "purchasing"
  - "source list"
  - "deleted"
  - "supplier"
  - "organization"
  - "purchase order"
  - "đơn mua hàng"
  - "danh sách nguồn"
  - "nhà cung cấp"
  - "tổ chức"
  - "ekko"
  - "mm-pur-sq"
semantic_en: "The D_PURGSOURCELISTDELETED_2 CDS view exposes deleted source lists from the purchasing process, including supplier and organizational information. It is used to track and manage deleted source lists."
app_component: MM-PUR-SQ-SLI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - component:MM-PUR-SQ-SLI-2CL
  - lob:Sourcing & Procurement
---
# D_PURGSOURCELISTDELETED_2

**D Purgsourcelistdeleted 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `dzeord` |  | |  | `key SourceListRecord : dzeord` |  |  |
| `SourceListCreationDate` |  | |  | `erdat` |  |  |
| `SourceListCreatedByUser` |  | |  | `ernam` |  |  |
| `ValidityStartDate` |  | |  | `bdatu` |  |  |
| `ValidityEndDate` |  | |  | `bdatu` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchaseOrderUnit` |  | |  | `meins` |  |  |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchasingSourceList'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label:  'Purchasing Source list Deleted'
define abstract entity D_PurgSourceListDeleted_2
{
  key SourceListRecord        : dzeord;
      SourceListCreationDate  : erdat;
      SourceListCreatedByUser : ernam;
      ValidityStartDate       : bdatu;
      ValidityEndDate         : bdatu;
      Supplier                : lifnr;
      PurchasingOrganization  : ekorg;
      PurchaseOrderUnit       : meins;
 
}
```
