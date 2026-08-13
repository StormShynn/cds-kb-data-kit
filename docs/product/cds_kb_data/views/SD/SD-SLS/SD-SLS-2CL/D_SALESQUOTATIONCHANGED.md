---
name: D_SALESQUOTATIONCHANGED
description: "D Salesquotationchanged"
semantic_vi: "View D_SALESQUOTATIONCHANGED hiển thị các sự kiện thay đổi đơn đặt hàng bán hàng, cho phép bạn theo dõi các thay đổi của đơn đặt hàng bán hàng trong thời gian thực."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán hàng"
  - "sales quotation change"
  - "sự kiện thay đổi đơn đặt hàng bán hàng"
  - "sap"
  - "sd"
  - "sales and distribution"
  - "sales quotation type"
  - "sales organization"
  - "distribution channel"
  - "organization division"
  - "sold to party"
semantic_en: "The D_SALESQUOTATIONCHANGED view exposes sales quotation change events, allowing you to track changes to sales quotations in real-time."
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
# D_SALESQUOTATIONCHANGED

**D Salesquotationchanged**

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
@EndUserText.label: 'Sales Quotation Changed'
@ObjectModel.sapObjectNodeType.name : 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationChanged 
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
