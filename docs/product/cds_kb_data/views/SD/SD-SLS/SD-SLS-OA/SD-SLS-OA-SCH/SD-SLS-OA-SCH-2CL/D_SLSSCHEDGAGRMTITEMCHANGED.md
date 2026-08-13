---
name: D_SLSSCHEDGAGRMTITEMCHANGED
description: "D Slsschedgagrmtitemchanged"
semantic_vi: "View này hiển thị các sự kiện thay đổi của thỏa thuận lịch trình bán hàng, cung cấp dữ liệu về khi và cách các mục thỏa thuận lịch trình bán hàng được cập nhật. Nó được sử dụng để theo dõi các thay đổi của thỏa thuận lịch trình bán hàng trong thời gian thực."
keywords:
  - "sales schedule agreement"
  - "thỏa thuận lịch trình bán hàng"
  - "item change"
  - "sự kiện thay đổi"
  - "sales organization"
  - "sales schedg agrmt type"
  - "sd-sls-oa-sch-2cl"
semantic_en: "This view exposes sales schedule agreement item change events, providing data on when and how sales schedule agreement items are updated. It is used to track changes to sales schedule agreement items in real-time."
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
# D_SLSSCHEDGAGRMTITEMCHANGED

**D Slsschedgagrmtitemchanged**

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
@EndUserText.label: 'Sales Scheduling Agreement Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreementItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgrmtItemChanged
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
