---
name: D_DEBITMEMOREQUESTDELETED
description: "D Debitmemorequestdeleted"
semantic_vi: "View D Debitmemorequestdeleted hiển thị các yêu cầu giảm giá đã xóa trong thành phần Sales và Distribution, cung cấp một bản ghi về các yêu cầu đã bị hủy bỏ hoặc xóa trước đây."
keywords:
  - "debit memo request"
  - "yêu cầu giảm giá"
  - "sales and distribution"
  - "thành phần sales và distribution"
  - "deleted records"
  - "bản ghi đã xóa"
  - "sap cds"
  - "cds view"
semantic_en: "The D Debitmemorequestdeleted view exposes deleted debit memo requests in the Sales and Distribution component, providing a record of past requests that were cancelled or deleted."
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_DEBITMEMOREQUESTDELETED

**D Debitmemorequestdeleted**

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

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoRequestDeleted
{
  @Event.raisedAt.dateTime : true
  EventRaisedDateTime      : vdm_lastchangedon;
   
  DebitMemoRequestType     : auart_unv;
   
  SalesOrganization        : vkorg;
   
  DistributionChannel      : vtweg;
   
  OrganizationDivision     : spart; 
   
  SoldToParty              : kunnr;
    
}
```
