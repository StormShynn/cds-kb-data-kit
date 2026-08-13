---
name: D_SLSSCHEDGAGRMTITEMCREATED
description: "D Slsschedgagrmtitemcreated"
semantic_vi: "View D_SLSSCHEDGAGRMTITEMCREATED hiển thị các sự kiện tạo thỏa thuận bán hàng theo lịch trình, cung cấp dữ liệu về thời điểm và cách tạo hoặc cập nhật thỏa thuận bán hàng theo lịch trình tại mức độ chi tiết của từng mặt hàng."
keywords:
  - "sales scheduling agreement"
  - "thỏa thuận bán hàng theo lịch trình"
  - "item creation"
  - "tạo mặt hàng"
  - "sales organization"
  - "sales scheduling agreement item"
  - "mặt hàng thỏa thuận bán hàng theo lịch trình"
  - "sap sales distribution"
  - "sds"
  - "sd-sls-oa-sch-2cl"
semantic_en: "The D_SLSSCHEDGAGRMTITEMCREATED view exposes sales scheduling agreement item creation events, providing data on when and how sales scheduling agreements are created or updated at the item level."
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
# D_SLSSCHEDGAGRMTITEMCREATED

**D Slsschedgagrmtitemcreated**

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
| `SalesSchedgAgrmtType` |  | |  | `vdm_sales_schedg_agrmt_type` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesSchedgAgrmtItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreementItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgrmtItemCreated
{
  @Event.raisedAt.dateTime     : true
  EventRaisedDateTime          : vdm_lastchangedon;

  SalesSchedgAgrmtType         : vdm_sales_schedg_agrmt_type;

  SalesOrganization            : vkorg;

  DistributionChannel          : vtweg;

  OrganizationDivision         : spart;

  SoldToParty                  : kunnr;

  SalesSchedgAgrmtItemCategory : pstyv;

  Product                      : matnr;
}
```
