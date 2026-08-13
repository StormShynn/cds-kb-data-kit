---
name: D_CUSTOMERRETURNITEMCREATED
description: "D Customerreturnitemcreated"
semantic_vi: "View D_CUSTOMERRETURNITEMCREATED hiển thị dữ liệu tạo lại hàng của khách hàng, có thể sử dụng để theo dõi và phân tích lại hàng của khách hàng trong quá trình bán hàng."
keywords:
  - "customer return"
  - "đơn trả hàng"
  - "sales process"
  - "sự kiện tạo lại hàng"
  - "sự kiện bán hàng"
  - "sự kiện khách hàng"
  - "sự kiện sản phẩm"
  - "sự kiện phân phối"
semantic_en: "The D_CUSTOMERRETURNITEMCREATED view exposes customer return item creation data, which can be used to track and analyze customer returns in the sales process."
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
# D_CUSTOMERRETURNITEMCREATED

**D Customerreturnitemcreated**

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
@EndUserText.label: 'Returns Order Item Created'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name: 'CustomerReturnItem'
define abstract entity D_CustomerReturnItemCreated
{
      
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime          : vdm_lastchangedon;
        
      CustomerReturnType           : auart_unv;

      SalesOrganization            : vkorg;

      DistributionChannel          : vtweg;

      OrganizationDivision         : spart;
      
      SoldToParty                  : kunnr;
      
      CustomerReturnItemCategory   : pstyv;
      
      Product                      : matnr;
}
```
