---
name: D_DBTMMREQOVRLSDPROCSTSCHGD
description: "D Dbtmmreqovrlsdprocstschgd"
semantic_vi: "CDS view D_DBTMMREQOVRLSDPROCSTSCHGD cung cấp thông tin trạng thái thời gian thực của yêu cầu ghi nợ trên toàn bộ quá trình bán hàng, cho phép các nhà phát triển theo dõi các thay đổi trong trạng thái quá trình bán hàng."
keywords:
  - "debit memo request"
  - "yêu cầu ghi nợ"
  - "sales process status"
  - "trạng thái quá trình bán hàng"
  - "sd process status"
  - "tình trạng quá trình sd"
  - "sap sales"
  - "bán hàng sap"
  - "sales and distribution"
  - "bán hàng và phân phối"
semantic_en: "The D_DBTMMREQOVRLSDPROCSTSCHGD CDS view provides real-time status information of debit memo requests across the sales process, enabling developers to track changes in overall process status. It is useful for monitoring and analyzing sales process status changes."
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
# D_DBTMMREQOVRLSDPROCSTSCHGD

**D Dbtmmreqovrlsdprocstschgd**

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
| `OverallSDProcessStatus` |  | |  | `gbstk` |  |  |
| `PreviousOverallSDProcessStatus` |  | |  | `gbstk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Overall SD Process Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DbtMmReqOvrlSDProcStsChgd
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      DebitMemoRequestType           : auart_unv;

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
