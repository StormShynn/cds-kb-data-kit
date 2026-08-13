---
name: D_SALESORDERDELETED
description: "D Sales OrderDELETED"
semantic_vi: "View D_SALESORDERDELETED hiển thị các sự kiện xóa đơn đặt hàng bán hàng, cung cấp thông tin về thời điểm và lý do đơn đặt hàng bán hàng được xóa."
keywords:
  - "sales order"
  - "đơn đặt hàng bán hàng"
  - "xóa đơn đặt hàng"
  - "sự kiện xóa"
  - "sales order deletion"
  - "event raised"
  - "sales order type"
  - "sales organization"
  - "distribution channel"
  - "organization division"
  - "sold to party"
semantic_en: "The D_SALESORDERDELETED CDS view exposes sales order deletion events, providing information on when and why a sales order was deleted."
app_component: SD-SLS-GF-BET-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - sales-order
  - component:SD-SLS-GF-BET-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# D_SALESORDERDELETED

**D Sales OrderDELETED**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-BET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesOrderType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Order Deleted'
@ObjectModel.sapObjectNodeType.name: 'SalesOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderDeleted
{
        
        @Event.raisedAt.dateTime: true
        EventRaisedDateTime               : vdm_lastchangedon;
      
        SalesOrderType                    : auart_unv;

        SalesOrganization                 : vkorg;

        DistributionChannel               : vtweg;

        OrganizationDivision              : spart; 

        SoldToParty                       : kunnr;
    
}
```
