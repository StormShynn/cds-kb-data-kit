---
name: D_CREDITMEMOREQUESTITEMCREATED
description: "D Creditmemorequestitemcreated"
semantic_vi: "View D_CREDITMEMOREQUESTITEMCREATED hiển thị các sự kiện tạo yêu cầu giảm giá chi tiết trong thời gian thực, cho phép các nhà phát triển theo dõi và phản ứng với các thay đổi chi tiết trong quy trình bán hàng và phân phối."
keywords:
  - "credit memo request"
  - "item creation"
  - "sales and distribution"
  - "real-time"
  - "event-driven"
  - "sap cds"
  - "sd-sls-cmr-2cl"
  - "creditmemorequestitemcreated"
  - "lob:sales & distribution"
  - "component:sd-sls-cmr-2cl"
semantic_en: "The D_CREDITMEMOREQUESTITEMCREATED view exposes credit memo request item creation events in real-time, allowing developers to track and react to item-level changes in sales and distribution processes."
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
  - credit
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_CREDITMEMOREQUESTITEMCREATED

**D Creditmemorequestitemcreated**

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
| `CreditMemoRequestType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `CreditMemoRequestItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestItemCreated
{

  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;

  CreditMemoRequestType         : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;
  
  CreditMemoRequestItemCategory : pstyv;
  
  Product                       : matnr;
}
```
