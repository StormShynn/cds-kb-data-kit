---
name: D_SLSSCHEDGAGREEMENTCHANGED
description: "D Slsschedgagreementchanged"
semantic_vi: "View này hiển thị các sự kiện thay đổi thỏa thuận lịch trình bán hàng, có thể được sử dụng để theo dõi các thay đổi trong thỏa thuận lịch trình bán hàng theo thời gian."
keywords:
  - "sales schedule agreement"
  - "thỏa thuận lịch trình bán hàng"
  - "schedule agreement change"
  - "sự kiện thay đổi thỏa thuận"
  - "sales organization"
  - "sales schedule"
  - "agreement change"
  - "thay đổi thỏa thuận"
  - "sales schedule agreement change event"
  - "sự kiện thay đổi thỏa thuận lịch trình bán hàng"
semantic_en: "This view exposes sales schedule agreement change events, which can be used to track changes to sales schedule agreements over time."
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
# D_SLSSCHEDGAGREEMENTCHANGED

**D Slsschedgagreementchanged**

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
@EndUserText.label: 'Sales Scheduling Agreement Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreement'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgreementChanged
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
