---
name: D_CREDITMEMOREQUESTITEMDELETED
description: "D Creditmemorequestitemdeleted"
semantic_vi: "CDS view D_CREDITMEMOREQUESTITEMDELETED hiển thị các mục yêu cầu biên bản giảm giá đã bị xóa, có thể được sử dụng để theo dõi các thay đổi trong các đơn đặt hàng bán hàng hoặc để kiểm tra các mục đã bị xóa trong quá trình bán hàng."
keywords:
  - "credit memo"
  - "đơn giảm giá"
  - "sales order"
  - "đơn đặt hàng bán hàng"
  - "deleted item"
  - "mục đã bị xóa"
  - "sales process"
  - "quá trình bán hàng"
  - "sap"
  - "sd"
  - "sles"
  - "cmr"
semantic_en: "The D_CREDITMEMOREQUESTITEMDELETED CDS view exposes deleted credit memo request items, which can be used to track changes to sales orders or to audit deleted items in the sales process."
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - credit
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_CREDITMEMOREQUESTITEMDELETED

**D Creditmemorequestitemdeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `CreditMemoRequestType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `CreditMemoRequestItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestItemDeleted
{

  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;

  CreditMemoRequestType         : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;

  CreditMemoRequestItemCategory : pstyv;

  Product                       : matnr;
}
```
