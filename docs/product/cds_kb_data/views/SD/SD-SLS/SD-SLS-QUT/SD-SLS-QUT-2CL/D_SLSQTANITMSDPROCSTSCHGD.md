---
name: D_SLSQTANITMSDPROCSTSCHGD
description: "D Slsqtanitmsdprocstschgd"
semantic_vi: "View này hiển thị các thay đổi trạng thái xử lý đơn đặt hàng bán hàng, bao gồm trạng thái trước và sau khi thay đổi, và cung cấp thông tin về đơn đặt hàng bán hàng, mặt hàng và tổ chức. Nó có thể được sử dụng để theo dõi và phân tích các thay đổi trong trạng thái xử lý đơn đặt hàng bán hàng."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán hàng"
  - "sales quotation item"
  - "mặt hàng đơn đặt hàng bán hàng"
  - "processing status"
  - "trạng thái xử lý"
  - "sales organization"
  - "tổ chức bán hàng"
  - "sales quotation type"
  - "loại đơn đặt hàng bán hàng"
  - "sd process status"
  - "trạng thái quá trình sd"
semantic_en: "This view exposes sales quotation item processing status changes, including the status before and after the change, and provides information about the sales quotation, item, and organization. It can be used to track and analyze changes in sales quotation item processing status."
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
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SLSQTANITMSDPROCSTSCHGD

**D Slsqtanitmsdprocstschgd**

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
| `SDProcessStatus` |  | |  | `gbsta` |  |  |
| `PreviousSDProcessStatus` |  | |  | `gbsta` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Qtan Item SD Proc Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanItmSDProcStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime     : vdm_lastchangedon;

      SalesQuotationType      : auart_unv;

      SalesOrganization       : vkorg;

      DistributionChannel     : vtweg;

      OrganizationDivision    : spart;

      SoldToParty             : kunnr;

      SalesQuotationItemCategory  : pstyv;

      Product                 : matnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousSDProcessStatus'
      SDProcessStatus         : gbsta;

      PreviousSDProcessStatus : gbsta;

}
```
