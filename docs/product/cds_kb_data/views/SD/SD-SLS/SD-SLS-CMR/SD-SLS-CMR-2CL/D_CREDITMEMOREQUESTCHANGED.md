---
name: D_CREDITMEMOREQUESTCHANGED
description: "D Creditmemorequestchanged"
semantic_vi: "View này hiển thị dữ liệu thay đổi yêu cầu hoàn tiền, cho phép các nhà phát triển theo dõi các thay đổi đối với yêu cầu hoàn tiền trong thành phần Bán hàng và Phân phối."
keywords:
  - "credit memo request"
  - "yêu cầu hoàn tiền"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "credit memo"
  - "hoàn tiền"
  - "sap"
  - "sd-sls-cmr-2cl"
semantic_en: "This view exposes credit memo request change data, allowing developers to track changes to credit memo requests in the Sales and Distribution component."
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
# D_CREDITMEMOREQUESTCHANGED

**D Creditmemorequestchanged**

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
@EndUserText.label: 'Credit Memo Request Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestChanged 
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
