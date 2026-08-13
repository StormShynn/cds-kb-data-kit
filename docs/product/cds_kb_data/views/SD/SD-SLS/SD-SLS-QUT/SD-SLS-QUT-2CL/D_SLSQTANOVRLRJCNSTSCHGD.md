---
name: D_SLSQTANOVRLRJCNSTSCHGD
description: "D Slsqtanovrlrjcnstschgd"
semantic_vi: "View này hiển thị các thay đổi trạng thái từ chối tài liệu đơn đặt hàng bán hàng tổng thể, có thể được sử dụng để theo dõi và phân tích các thay đổi trong trạng thái từ chối tài liệu đơn đặt hàng bán hàng tổng thể theo thời gian."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán hàng"
  - "tài liệu đơn đặt hàng"
  - "trạng thái từ chối"
  - "thay đổi trạng thái"
  - "sự thay đổi"
  - "sales quotation type"
  - "sales organization"
  - "distribution channel"
  - "organization division"
  - "sold to party"
  - "overall sddocument rejection status"
semantic_en: "This view exposes sales quotation overall document rejection status changes, which can be used to track and analyze changes in sales quotation document rejection status over time."
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
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SLSQTANOVRLRJCNSTSCHGD

**D Slsqtanovrlrjcnstschgd**

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
| `OverallSDDocumentRejectionSts` |  | |  | `abstk` |  |  |
| `PreviousOvrlSDDocRejectionSts` |  | |  | `abstk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Qtan Overall Rejection Sts Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanOvrlRjcnStsChgd
{
  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;  

  SalesQuotationType            : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;
  
  SoldToParty                   : kunnr;
  
  @Event.qualifiesEventType: true
  OverallSDDocumentRejectionSts : abstk;

  PreviousOvrlSDDocRejectionSts : abstk; 

}
```
