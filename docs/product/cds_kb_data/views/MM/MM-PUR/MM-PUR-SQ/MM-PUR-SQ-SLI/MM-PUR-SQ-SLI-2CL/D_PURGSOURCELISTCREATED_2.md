---
name: D_PURGSOURCELISTCREATED_2
description: "D Purgsourcelistcreated 2"
semantic_vi: "View D_PURGSOURCELISTCREATED_2 hiển thị danh sách nguồn danh sách được tạo trong mua hàng, bao gồm thông tin nhà cung cấp và tổ chức, và được sử dụng để theo dõi ngày tạo nguồn danh sách và người tạo."
keywords:
  - "purchasing"
  - "source list"
  - "supplier"
  - "organization"
  - "purchase order"
  - "đơn mua hàng"
  - "nhà cung cấp"
  - "tổ chức"
  - "sourcing"
  - "procurement"
  - "ekko"
  - "mm-pur-sq-sli-2cl"
semantic_en: "The D_PURGSOURCELISTCREATED_2 view exposes a list of created source lists in purchasing, including supplier and organization information, and is used to track source list creation dates and users."
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
# D_PURGSOURCELISTCREATED_2

**D Purgsourcelistcreated 2**

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
@EndUserText.label:  'Purchasing Source list Created'
define abstract entity D_PurgSourceListCreated_2
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
