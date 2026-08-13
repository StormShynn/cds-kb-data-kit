---
name: D_SALESQUOTATIONITEMCHANGED
description: "D Salesquotationitemchanged"
semantic_vi: "View này hiển thị các sự kiện thay đổi chi tiết đơn đặt hàng bán hàng, có thể được sử dụng để theo dõi các thay đổi được thực hiện trên từng chi tiết đơn đặt hàng bán hàng."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán hàng"
  - "sales quotation item"
  - "chi tiết đơn đặt hàng bán hàng"
  - "change event"
  - "sự kiện thay đổi"
  - "sap"
  - "sd-sls-qut-2cl"
  - "sales & distribution"
  - "lob:sales & distribution"
semantic_en: "This view exposes sales quotation item change events, which can be used to track changes made to individual items within a sales quotation."
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
# D_SALESQUOTATIONITEMCHANGED

**D Salesquotationitemchanged**

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
@EndUserText.label: 'Sales Quotation Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationItemChanged
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
