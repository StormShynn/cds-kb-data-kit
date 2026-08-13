---
name: D_CREDITMEMOREQUESTCREATED
description: "D Creditmemorequestcreated"
semantic_vi: "View này hiển thị các sự kiện tạo yêu cầu hoàn tiền, có thể được sử dụng để theo dõi và phân tích yêu cầu hoàn tiền trong quá trình bán hàng."
keywords:
  - "credit memo request"
  - "yêu cầu hoàn tiền"
  - "sales process"
  - "quá trình bán hàng"
  - "credit memo"
  - "hoàn tiền"
  - "sales"
  - "bán hàng"
  - "sap"
  - "sd-sls-cmr"
  - "sd-sls-cmr-2cl"
semantic_en: "This view exposes credit memo request creation events, which can be used to track and analyze credit memo requests in the sales process."
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
# D_CREDITMEMOREQUESTCREATED

**D Creditmemorequestcreated**

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
@EndUserText.label: 'Credit Memo Request Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestCreated 
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
