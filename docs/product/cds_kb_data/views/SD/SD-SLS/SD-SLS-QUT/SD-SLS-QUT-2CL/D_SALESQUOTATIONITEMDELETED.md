---
name: D_SALESQUOTATIONITEMDELETED
description: "D Salesquotationitemdeleted"
semantic_vi: "View D_SALESQUOTATIONITEMDELETED hiển thị các sự kiện xóa mục hàng trong đơn đặt hàng bán, cung cấp dữ liệu về thời điểm và lý do tại sao mục hàng được xóa khỏi đơn đặt hàng bán."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán"
  - "xóa mục hàng"
  - "event"
  - "sales quotation item"
  - "sales organization"
  - "distribution channel"
  - "organization division"
  - "sold-to party"
  - "sales quotation item category"
  - "product"
semantic_en: "The D_SALESQUOTATIONITEMDELETED view exposes sales quotation item deletion events, providing data on when and why items were removed from sales quotations."
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - sales-quotation
  - item-level
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SALESQUOTATIONITEMDELETED

**D Salesquotationitemdeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesQuotationType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesQuotationItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationItemDeleted
{
      @Event.raisedAt.dateTime     : true
      EventRaisedDateTime          : vdm_lastchangedon;
      
      SalesQuotationType           : auart_unv;

      SalesOrganization            : vkorg;

      DistributionChannel          : vtweg;

      OrganizationDivision         : spart;
      
      SoldToParty                  : kunnr;
      
      SalesQuotationItemCategory   : pstyv;
      
      Product                      : matnr;
}
```
