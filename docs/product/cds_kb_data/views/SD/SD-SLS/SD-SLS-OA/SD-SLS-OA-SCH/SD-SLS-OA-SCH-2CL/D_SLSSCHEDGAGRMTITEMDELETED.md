---
name: D_SLSSCHEDGAGRMTITEMDELETED
description: "D Slsschedgagrmtitemdeleted"
semantic_vi: "View này hiển thị dữ liệu mục hàng thỏa thuận lịch trình bán hàng đã bị xóa, có thể được sử dụng để theo dõi và phân tích thay đổi trong thỏa thuận bán hàng theo thời gian."
keywords:
  - "sales schedule agreement"
  - "thỏa thuận lịch trình bán hàng"
  - "deleted item"
  - "item đã bị xóa"
  - "sales organization"
  - "sales schedule agreement item"
  - "mục hàng thỏa thuận lịch trình bán hàng"
  - "sap sd"
  - "sd-sls-oa-sch-2cl"
semantic_en: "This view exposes deleted sales schedule agreement items data, which can be used to track and analyze changes to sales agreements over time."
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
  - item-level
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# D_SLSSCHEDGAGRMTITEMDELETED

**D Slsschedgagrmtitemdeleted**

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
| `SalesSchedgAgrmtItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Item Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreementItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgrmtItemDeleted
{

  @Event.raisedAt.dateTime     : true
  EventRaisedDateTime          : vdm_lastchangedon;

  SalesSchedgAgrmtType         : auart_unv;

  SalesOrganization            : vkorg;

  DistributionChannel          : vtweg;

  OrganizationDivision         : spart;

  SoldToParty                  : kunnr;

  SalesSchedgAgrmtItemCategory : pstyv;

  Product                      : matnr;
}
```
