---
name: D_DEBITMEMOREQUESTITEMCREATED
description: "D Debitmemorequestitemcreated"
semantic_vi: "View này hiển thị các sự kiện tạo đơn đề nghị giảm giá chi tiết, cung cấp thông tin về tổ chức bán hàng, kênh phân phối và sản phẩm liên quan. Nó có thể được sử dụng để theo dõi và phân tích việc tạo đơn đề nghị giảm giá chi tiết trong quá trình bán hàng."
keywords:
  - "debit memo request"
  - "đơn đề nghị giảm giá"
  - "sales organization"
  - "tổ chức bán hàng"
  - "distribution channel"
  - "kênh phân phối"
  - "product"
  - "sản phẩm"
  - "sap"
  - "sales"
  - "dịch vụ bán hàng"
  - "ekko"
semantic_en: "This view exposes debit memo request item creation events, providing information on the sales organization, distribution channel, and product involved. It can be used to track and analyze debit memo request item creation in the sales process."
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_DEBITMEMOREQUESTITEMCREATED

**D Debitmemorequestitemcreated**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `DebitMemoRequestType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `DebitMemoRequestItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoRequestItemCreated
{

  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;

  DebitMemoRequestType          : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;

  DebitMemoRequestItemCategory  : pstyv;

  Product                       : matnr;
}
```
