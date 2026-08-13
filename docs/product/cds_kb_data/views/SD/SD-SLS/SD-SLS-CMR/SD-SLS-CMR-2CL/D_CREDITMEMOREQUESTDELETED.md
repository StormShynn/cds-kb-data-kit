---
name: D_CREDITMEMOREQUESTDELETED
description: "D Creditmemorequestdeleted"
semantic_vi: "View D_CREDITMEMOREQUESTDELETED hiển thị dữ liệu yêu cầu giảm giá đã xóa, có thể sử dụng để theo dõi và phân tích yêu cầu giảm giá đã xóa trong quá trình bán hàng."
keywords:
  - "credit memo request"
  - "yêu cầu giảm giá"
  - "sales process"
  - "quá trình bán hàng"
  - "deleted data"
  - "dữ liệu đã xóa"
  - "sap sales"
  - "bán hàng sap"
  - "sd-sls-cmr-2cl"
semantic_en: "The D_CREDITMEMOREQUESTDELETED view exposes deleted credit memo requests data, which can be used to track and analyze deleted credit memo requests in the sales process."
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_CREDITMEMOREQUESTDELETED

**D Creditmemorequestdeleted**

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

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestDeleted 
{
    @Event.raisedAt.dateTime: true
    EventRaisedDateTime               : vdm_lastchangedon;
      
    CreditMemoRequestType             : auart_unv;

    SalesOrganization                 : vkorg;

    DistributionChannel               : vtweg;

    OrganizationDivision              : spart; 

    SoldToParty                       : kunnr;  
}
```
