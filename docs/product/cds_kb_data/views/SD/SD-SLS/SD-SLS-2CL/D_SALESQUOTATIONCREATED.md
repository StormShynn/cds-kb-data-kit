---
name: D_SALESQUOTATIONCREATED
description: "D Salesquotationcreated"
semantic_vi: "View D_SALESQUOTATIONCREATED hiển thị các sự kiện tạo đơn giá bán, cung cấp dữ liệu về khi và cách tạo đơn giá bán trong hệ thống. Nó có thể được sử dụng để phân tích các mẫu tạo đơn giá bán và tối ưu hóa quy trình bán hàng."
keywords:
  - "sales quotation"
  - "đơn giá bán"
  - "sales quotation creation"
  - "tạo đơn giá bán"
  - "sales process"
  - "quy trình bán hàng"
  - "sap sales"
  - "sales and distribution"
  - "sd-sls-2cl"
semantic_en: "The D_SALESQUOTATIONCREATED view exposes sales quotation creation events, providing data on when and how sales quotations are generated in the system. It can be used to analyze sales quotation creation patterns and optimize sales processes."
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
# D_SALESQUOTATIONCREATED

**D Salesquotationcreated**

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
@EndUserText.label: 'Sales Quotation Created'
@ObjectModel.sapObjectNodeType.name : 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationCreated 
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
