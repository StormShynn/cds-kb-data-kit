---
name: D_SLSSCHEDGAGREEMENTDELETED
description: "D Slsschedgagreementdeleted"
semantic_vi: "View này hiển thị các thỏa thuận lập kế hoạch bán hàng đã xóa và dữ liệu liên quan, có thể được sử dụng để theo dõi và phân tích các thỏa thuận lập kế hoạch bán hàng đã xóa trong thành phần Sales và Distribution."
keywords:
  - "sales scheduling agreement"
  - "thỏa thuận lập kế hoạch bán hàng"
  - "deleted sales scheduling agreement"
  - "thỏa thuận lập kế hoạch bán hàng đã xóa"
  - "sap sales and distribution"
  - "sales and distribution"
  - "scheduling agreement"
  - "thỏa thuận lập kế hoạch"
  - "deleted agreement"
  - "thỏa thuận đã xóa"
  - "sales organization"
semantic_en: "This view exposes deleted sales scheduling agreements and their associated data, which can be used to track and analyze deleted sales scheduling agreements in the Sales and Distribution component."
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# D_SLSSCHEDGAGREEMENTDELETED

**D Slsschedgagreementdeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesSchedgAgrmtType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Deleted'
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreement'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgreementDeleted
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesSchedgAgrmtType : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;

}
```
