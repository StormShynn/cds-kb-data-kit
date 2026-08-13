---
name: D_CUSTOMERRETURNITEMCHANGED
description: "D Customerreturnitemchanged"
semantic_vi: "View này hiển thị các sự kiện thay đổi của hàng trả lại khách hàng, cung cấp dữ liệu về khi và cách hàng trả lại khách hàng được sửa đổi. Nó có thể được sử dụng để theo dõi các thay đổi của hàng trả lại khách hàng theo thời gian thực."
keywords:
  - "customer return item"
  - "customer return item change"
  - "event"
  - "sales and distribution"
  - "customer"
  - "item-level"
  - "sales organization"
  - "distribution channel"
  - "organization division"
  - "sold-to party"
  - "customer return item category"
  - "product"
semantic_en: "This view exposes customer return item change events, providing data on when and how customer return items are modified. It can be used to track changes to customer return items in real-time."
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
# D_CUSTOMERRETURNITEMCHANGED

**D Customerreturnitemchanged**

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
@EndUserText.label: 'Returns Order Item Changed'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name: 'CustomerReturnItem'
define abstract entity D_CustomerReturnItemChanged 
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
