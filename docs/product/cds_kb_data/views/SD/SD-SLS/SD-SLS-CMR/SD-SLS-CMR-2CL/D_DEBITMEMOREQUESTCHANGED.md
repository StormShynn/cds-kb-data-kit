---
name: D_DEBITMEMOREQUESTCHANGED
description: "D Debitmemorequestchanged"
semantic_vi: "View D_DEBITMEMOREQUESTCHANGED lưu trữ các thay đổi yêu cầu ghi nợ, thường được sử dụng khi phân tích hoặc kiểm toán các thay đổi trong yêu cầu ghi nợ trong thành phần Sales và Distribution."
keywords:
  - "debit memo request"
  - "yêu cầu ghi nợ"
  - "sales and distribution"
  - "thành phần sales và distribution"
  - "debit memo request change"
  - "thay đổi yêu cầu ghi nợ"
  - "sap sales and distribution"
  - "sales and distribution component"
  - "component sales và distribution"
  - "debit memo request changes"
semantic_en: "The D_DEBITMEMOREQUESTCHANGED view captures debit memo request changes, typically used when analyzing or auditing changes to debit memo requests in the Sales and Distribution component."
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
# D_DEBITMEMOREQUESTCHANGED

**D Debitmemorequestchanged**

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
@EndUserText.label: 'Debit Memo Request Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoRequestChanged 
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
