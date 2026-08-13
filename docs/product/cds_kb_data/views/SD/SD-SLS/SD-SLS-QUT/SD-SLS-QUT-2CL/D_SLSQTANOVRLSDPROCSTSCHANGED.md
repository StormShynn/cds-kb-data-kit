---
name: D_SLSQTANOVRLSDPROCSTSCHANGED
description: "D Slsqtanovrlsdprocstschanged"
semantic_vi: "View D_SLSQTANOVRLSDPROCSTSCHANGED lưu trữ các thay đổi trạng thái quá trình bán hàng tổng thể của các đề xuất bán hàng, cung cấp một bản ghi về thời điểm và cách trạng thái được cập nhật."
keywords:
  - "sales quotation"
  - "đề xuất bán hàng"
  - "overall sales process status"
  - "thay đổi trạng thái quá trình bán hàng"
  - "sales process"
  - "quá trình bán hàng"
  - "sales quotation type"
  - "loại đề xuất bán hàng"
  - "sap sales and distribution"
  - "sales and distribution"
  - "sd-sls-qut-2cl"
semantic_en: "The D_SLSQTANOVRLSDPROCSTSCHANGED view captures changes to the overall sales process status of sales quotations, providing a record of when and how the status was updated."
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
# D_SLSQTANOVRLSDPROCSTSCHANGED

**D Slsqtanovrlsdprocstschanged**

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
| `OverallSDProcessStatus` |  | |  | `gbstk` |  |  |
| `PreviousOverallSDProcessStatus` |  | |  | `gbstk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Qtan Overall SD Proc Sts Changed'
@ObjectModel.sapObjectNodeType.name:'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanOvrlSDProcStsChanged
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      SalesQuotationType             : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element: 'PreviousOverallSDProcessStatus'
      OverallSDProcessStatus         : gbstk;

      PreviousOverallSDProcessStatus : gbstk;

}
```
