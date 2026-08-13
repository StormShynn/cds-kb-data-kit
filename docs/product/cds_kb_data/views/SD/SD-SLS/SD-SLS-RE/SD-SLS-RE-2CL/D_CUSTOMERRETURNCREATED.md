---
name: D_CUSTOMERRETURNCREATED
description: "D Customerreturncreated"
semantic_vi: "View D_CUSTOMERRETURNCREATED hiển thị dữ liệu trả hàng của khách hàng khi một đơn trả hàng được tạo, cung cấp thông tin về tổ chức bán hàng, kênh phân phối và khách hàng bán."
keywords:
  - "customer return"
  - "đơn trả hàng"
  - "sales organization"
  - "tổ chức bán hàng"
  - "distribution channel"
  - "kênh phân phối"
  - "sold-to party"
  - "khách hàng bán"
  - "sap"
  - "sd-sls-re-2cl"
semantic_en: "The D_CUSTOMERRETURNCREATED view exposes customer return data when a return is created, providing information on the sales organization, distribution channel, and sold-to party."
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
# D_CUSTOMERRETURNCREATED

**D Customerreturncreated**

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
@EndUserText.label: 'Returns Order Created'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CustomerReturn'
@Metadata.allowExtensions
define abstract entity D_CustomerReturnCreated 
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
