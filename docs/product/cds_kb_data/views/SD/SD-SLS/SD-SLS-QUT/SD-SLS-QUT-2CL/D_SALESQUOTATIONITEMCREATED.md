---
name: D_SALESQUOTATIONITEMCREATED
description: "D Salesquotationitemcreated"
semantic_vi: "View D_SALESQUOTATIONITEMCREATED hiển thị các sự kiện tạo đơn giá bán chi tiết, cung cấp dữ liệu về khi và cách tạo và cập nhật đơn giá bán. Nó được sử dụng để theo dõi các thay đổi chi tiết trong đơn giá bán."
keywords:
  - "sales quotation"
  - "đơn giá bán"
  - "event"
  - "tạo đơn giá bán"
  - "cập nhật đơn giá bán"
  - "sự kiện"
  - "sales quotation item"
  - "đơn giá bán chi tiết"
  - "sap"
  - "sd-sls-qut-2cl"
semantic_en: "The D_SALESQUOTATIONITEMCREATED view exposes sales quotation item creation events, providing data on when and how sales quotations are created and updated. It is used to track item-level changes in sales quotations."
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
# D_SALESQUOTATIONITEMCREATED

**D Salesquotationitemcreated**

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
@EndUserText.label: 'Sales Quotation Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationItemCreated
{
  @Event.raisedAt.dateTime   : true
  EventRaisedDateTime        : vdm_lastchangedon;

  SalesQuotationType         : auart_unv;

  SalesOrganization          : vkorg;

  DistributionChannel        : vtweg;

  OrganizationDivision       : spart;

  SoldToParty                : kunnr;

  SalesQuotationItemCategory : pstyv;

  Product                    : matnr;
}
```
