---
name: D_DEBITMEMOREQTOTBLKSTSCHANGED
description: "D Debitmemoreqtotblkstschanged"
semantic_vi: "View D_DEBITMEMOREQTOTBLKSTSCHANGED hiển thị các thay đổi trạng thái khóa tổng số tiền yêu cầu ghi nợ, có thể được sử dụng để theo dõi các thay đổi trạng thái khóa của yêu cầu ghi nợ."
keywords:
  - "debit memo request"
  - "thay đổi trạng thái khóa"
  - "tổng số tiền"
  - "yêu cầu ghi nợ"
  - "sales and distribution"
  - "sales organization"
  - "distribution channel"
  - "organization division"
  - "sold to party"
  - "sap"
  - "sd"
  - "sd-sls"
semantic_en: "The D_DEBITMEMOREQTOTBLKSTSCHANGED view exposes debit memo request totals block status changes, which can be used to track changes in the block status of debit memo requests."
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
# D_DEBITMEMOREQTOTBLKSTSCHANGED

**D Debitmemoreqtotblkstschanged**

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
| `TotalBlockStatus` |  | |  | `spstg` |  |  |
| `PreviousTotalBlockStatus` |  | |  | `spstg` |  |  |

## Source Code

```abap
@EndUserText.label: 'Total Block Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqTotBlkStsChanged
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      DebitMemoRequestType           : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element: 'PreviousTotalBlockStatus'
      TotalBlockStatus               : spstg;

      PreviousTotalBlockStatus       : spstg;

}
```
