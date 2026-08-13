---
name: D_SALESCONTRACTITEMDELETED
description: "D Salescontractitemdeleted"
semantic_vi: "View này hiển thị các sự kiện xóa mục trong hợp đồng bán hàng, cung cấp thông tin về thời điểm và lý do tại sao các mục đã bị xóa khỏi hợp đồng bán hàng. Nó có thể được sử dụng để theo dõi các thay đổi trong hợp đồng bán hàng theo thời gian."
keywords:
  - "sales contract"
  - "hợp đồng bán hàng"
  - "item deletion"
  - "xóa mục"
  - "sales contract item"
  - "mục hợp đồng bán hàng"
  - "event"
  - "sự kiện"
  - "sales organization"
  - "sales contract type"
  - "hợp đồng bán hàng loại"
  - "distribution channel"
semantic_en: "This view exposes sales contract item deletion events, providing information on when and why items were removed from a sales contract. It can be used to track changes to sales contracts over time."
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - sales-contract
  - contract
  - item-level
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# D_SALESCONTRACTITEMDELETED

**D Salescontractitemdeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesContractType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesContractItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Contract Item Deleted'
@ObjectModel.sapObjectNodeType.name: 'SalesContractItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractItemDeleted
{

  @Event.raisedAt.dateTime  : true
  EventRaisedDateTime       : vdm_lastchangedon;

  SalesContractType         : auart_unv;

  SalesOrganization         : vkorg;

  DistributionChannel       : vtweg;

  OrganizationDivision      : spart;

  SoldToParty               : kunnr;

  SalesContractItemCategory : pstyv;

  Product                   : matnr;
}
```
