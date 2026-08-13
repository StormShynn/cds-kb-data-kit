---
name: D_DBTMMREQTOTCRDTCHKSTSCHGD
description: "D Dbtmmreqtotcrdtchkstschgd"
semantic_vi: "CDS view D_DBTMMREQTOTCRDTCHKSTSCHGD hiển thị tổng yêu cầu thanh toán và trạng thái kiểm tra tín dụng thay đổi, có thể được sử dụng để phân tích và theo dõi thay đổi trạng thái kiểm tra tín dụng cho yêu cầu thanh toán."
keywords:
  - "debit memo request"
  - "yêu cầu thanh toán"
  - "credit check"
  - "kiểm tra tín dụng"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "sap"
  - "sd-sls-cmr"
  - "component:sd-sls-cmr-2cl"
  - "lob:sales & distribution"
semantic_en: "The D_DBTMMREQTOTCRDTCHKSTSCHGD CDS view exposes debit memo request totals and credit check status changes, which can be used to analyze and track changes in credit check status for debit memo requests."
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
# D_DBTMMREQTOTCRDTCHKSTSCHGD

**D Dbtmmreqtotcrdtchkstschgd**

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
| `TotalCreditCheckStatus` |  | |  | `cmgst` |  |  |
| `PreviousTotalCreditCheckStatus` |  | |  | `cmgst` |  |  |

## Source Code

```abap
@EndUserText.label: 'Total Credit Check Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DbtMmReqTotCrdtChkStsChgd
{
  
      EventRaisedDateTime            : vdm_lastchangedon;

      DebitMemoRequestType           : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousTotalCreditCheckStatus'
      TotalCreditCheckStatus         : cmgst;

      PreviousTotalCreditCheckStatus : cmgst;
}
```
