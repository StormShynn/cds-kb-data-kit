---
name: D_SALESQUOTATIONDELETED
description: "D Salesquotationdeleted"
semantic_vi: "View D_SALESQUOTATIONDELETED hiển thị các sự kiện xóa đơn đặt hàng bán hàng, cung cấp thông tin về thời điểm và lý do tại sao đơn đặt hàng bán hàng đã bị xóa. Nó có thể được sử dụng để theo dõi và phân tích lịch sử xóa đơn đặt hàng bán hàng."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán hàng"
  - "xóa đơn đặt hàng"
  - "event"
  - "history"
  - "sales"
  - "distribution"
  - "sap"
  - "sd-sls-2cl"
  - "sales & distribution"
semantic_en: "The D_SALESQUOTATIONDELETED view exposes sales quotation deletion events, providing information on when and why sales quotations were deleted. It can be used to track and analyze sales quotation deletion history."
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - sales-quotation
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# D_SALESQUOTATIONDELETED

**D Salesquotationdeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
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

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Deleted'
@ObjectModel.sapObjectNodeType.name: 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationDeleted 
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime            : vdm_lastchangedon;

  SalesQuotationType             : auart_unv;

  SalesOrganization              : vkorg;

  DistributionChannel            : vtweg;

  OrganizationDivision           : spart;

  SoldToParty                    : kunnr;
}
```
