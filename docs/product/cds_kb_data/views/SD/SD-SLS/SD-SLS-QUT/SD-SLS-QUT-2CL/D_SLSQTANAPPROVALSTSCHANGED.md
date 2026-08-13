---
name: D_SLSQTANAPPROVALSTSCHANGED
description: "D Slsqtanapprovalstschanged"
semantic_vi: "View này hiển thị các thay đổi trạng thái phê duyệt đơn đặt hàng bán, cho phép bạn theo dõi khi trạng thái phê duyệt thay đổi cho đơn đặt hàng bán. Nó hữu ích cho việc theo dõi và phân tích quy trình phê duyệt đơn đặt hàng bán."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán"
  - "approval status"
  - "phê duyệt"
  - "sales quotation approval"
  - "trạng thái phê duyệt"
  - "approval process"
  - "quy trình phê duyệt"
  - "sales and distribution"
  - "bán hàng và phân phối"
semantic_en: "This view exposes sales quotation approval status changes, allowing you to track when approval status changes for sales quotations. It is useful for monitoring and analyzing sales quotation approval processes."
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - approval
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SLSQTANAPPROVALSTSCHANGED

**D Slsqtanapprovalstschanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesQuotationType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesDocApprovalStatus` |  | |  | `sd_apm_approval_status` |  |  |
| `PreviousSalesDocApprovalStatus` |  | |  | `sd_apm_approval_status` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Approval Status Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions     // **** enable extensibility ****
define abstract entity D_SlsQtanApprovalStsChanged
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime            : vdm_lastchangedon;

  SalesQuotationType             : auart_unv;

  SalesOrganization              : vkorg;

  DistributionChannel            : vtweg;

  OrganizationDivision           : spart;

  SoldToParty                    : kunnr;

  @Event.qualifiesEventType      : true
  @Event.previousValue.element   : 'PreviousSalesDocApprovalStatus'
  SalesDocApprovalStatus         : sd_apm_approval_status;

  PreviousSalesDocApprovalStatus : sd_apm_approval_status;
}
```
