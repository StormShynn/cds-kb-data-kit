---
name: D_PURGSOURCELISTCHANGED_2
description: "D Purgsourcelistchanged 2"
semantic_vi: "View D_PURGSOURCELISTCHANGED_2 hiển thị các thay đổi trong danh sách nguồn mua hàng, bao gồm các cập nhật nhà cung cấp và ngày hiệu lực, có thể được sử dụng để theo dõi các thay đổi trong danh sách nguồn mua hàng theo thời gian."
keywords:
  - "purchasing source list"
  - "đơn mua hàng"
  - "thay đổi nguồn mua"
  - "cập nhật nhà cung cấp"
  - "ngày hiệu lực"
  - "purchasing organization"
  - "purchase order unit"
  - "ekko"
  - "mm-pur"
  - "mm-pur-sq"
semantic_en: "The D_PURGSOURCELISTCHANGED_2 view exposes changes to purchasing source lists, including supplier and validity date updates, which can be used to track changes to purchasing source lists over time."
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
# D_PURGSOURCELISTCHANGED_2

**D Purgsourcelistchanged 2**

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
| `NewValueOfValidityStartDate` |  | |  | `bdatu` |  |  |
| `NewValueOfValidityEndDate` |  | |  | `bdatu` |  |  |
| `SupplierNewValue` |  | |  | `lifnr` |  |  |
| `PurchasingOrganizationNewValue` |  | |  | `ekorg` |  |  |
| `PurchaseOrderUnit` |  | |  | `meins` |  |  |
| `OldValueOfValidityStartDate` |  | |  | `bdatu` |  |  |
| `OldValueOfValidityEndDate` |  | |  | `bdatu` |  |  |
| `SupplierOldValue` |  | |  | `lifnr` |  |  |
| `PurchasingOrganizationOldValue` |  | |  | `ekorg` |  |  |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchasingSourceList'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label:  'Purchasing Source list Changed'
define abstract entity D_PurgSourceListChanged_2
{
  key SourceListRecord               : dzeord;
      SourceListCreationDate         : erdat;
      SourceListCreatedByUser        : ernam;
      @Event.previousValue.element   :'OldValueOfValidityStartDate'
      NewValueOfValidityStartDate    : bdatu;
      @Event.previousValue.element   :'OldValueOfValidityEndDate'
      NewValueOfValidityEndDate      : bdatu;
      @Event.previousValue.element   :'SupplierOldValue'
      SupplierNewValue               : lifnr;
      @Event.previousValue.element   :'PurchasingOrganizationOldValue'
      PurchasingOrganizationNewValue : ekorg;
      PurchaseOrderUnit              : meins;
      OldValueOfValidityStartDate    : bdatu;
      OldValueOfValidityEndDate      : bdatu;
      SupplierOldValue               : lifnr;
      PurchasingOrganizationOldValue : ekorg;
 
}
```
