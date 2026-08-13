---
name: D_SLSSCHEDGAGREEMENTCREATED
description: "D Slsschedgagreementcreated"
semantic_vi: "View này hiển thị dữ liệu tạo thỏa thuận sắp xếp bán hàng, có thể sử dụng để theo dõi và phân tích sự kiện tạo thỏa thuận sắp xếp bán hàng."
keywords:
  - "sales scheduling agreement"
  - "thỏa thuận sắp xếp bán hàng"
  - "sales scheduling agreement creation"
  - "tạo thỏa thuận sắp xếp bán hàng"
  - "sap sd"
  - "sd sls"
  - "sales and distribution"
  - "dịch vụ bán hàng"
  - "scheduling agreement"
semantic_en: "This view exposes sales scheduling agreement creation data, which can be used to track and analyze sales scheduling agreement creation events."
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
# D_SLSSCHEDGAGREEMENTCREATED

**D Slsschedgagreementcreated**

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
@EndUserText.label: 'Sales Scheduling Agreement Created'
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreement'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgreementCreated
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
