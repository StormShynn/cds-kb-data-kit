---
name: D_CUSTOMERRETURNDELETED
description: "D Customerreturndeleted"
semantic_vi: "View này hiển thị các sự kiện xóa trả hàng của khách hàng, cung cấp thông tin về thời điểm và lý do tại sao một trả hàng của khách hàng đã bị xóa. Nó có thể được sử dụng để theo dõi và phân tích lịch sử xóa trả hàng của khách hàng."
keywords:
  - "customer return"
  - "trả hàng của khách hàng"
  - "delete"
  - "xóa"
  - "event"
  - "sự kiện"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "sap"
  - "sd-sls-re-2cl"
  - "customer"
  - "khách hàng"
semantic_en: "This view exposes customer return deletion events, providing information on when and why a customer return was deleted. It can be used to track and analyze customer return deletion history."
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
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# D_CUSTOMERRETURNDELETED

**D Customerreturndeleted**

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

## Source Code

```abap
@EndUserText.label: 'Returns Order Deleted'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name : 'CustomerReturn'
define abstract entity D_CustomerReturnDeleted 
{
  @Event.raisedAt.dateTime : true
  EventRaisedDateTime      : vdm_lastchangedon;    

  CustomerReturnType       : auart_unv;

  SalesOrganization        : vkorg;

  DistributionChannel      : vtweg;

  OrganizationDivision     : spart;

  SoldToParty              : kunnr; 
}
```
