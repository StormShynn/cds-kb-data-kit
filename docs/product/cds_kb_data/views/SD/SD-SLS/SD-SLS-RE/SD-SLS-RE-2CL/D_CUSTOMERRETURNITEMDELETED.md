---
name: D_CUSTOMERRETURNITEMDELETED
description: "D Customerreturnitemdeleted"
semantic_vi: "View này hiển thị các sự kiện xóa hàng trả lại khách hàng, có thể được sử dụng để theo dõi và phân tích hoạt động xóa hàng trả lại khách hàng."
keywords:
  - "customer return item deletion"
  - "xóa hàng trả lại khách hàng"
  - "event"
  - "sự kiện"
  - "sales and distribution"
  - "sales distribution"
  - "sd"
  - "sd-sls"
  - "sd-sls-re"
  - "customer"
  - "item-level"
  - "sales organization"
semantic_en: "This view exposes customer return item deletion events, which can be used to track and analyze customer return item deletion activities."
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - customer
  - item-level
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# D_CUSTOMERRETURNITEMDELETED

**D Customerreturnitemdeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `CustomerReturnType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `CustomerReturnItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Returns Order Item Deleted'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name: 'CustomerReturnItem'
define abstract entity D_CustomerReturnItemDeleted 
{
  @Event.raisedAt.dateTime : true
  EventRaisedDateTime           : vdm_lastchangedon; 
  
  CustomerReturnType            : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;
  
  CustomerReturnItemCategory    : pstyv;
      
  Product                       : matnr;
}
```
