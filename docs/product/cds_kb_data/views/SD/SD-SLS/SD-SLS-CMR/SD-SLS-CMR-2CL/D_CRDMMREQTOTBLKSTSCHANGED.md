---
name: D_CRDMMREQTOTBLKSTSCHANGED
description: "D Crdmmreqtotblkstschanged"
semantic_vi: "View D_CRDMMREQTOTBLKSTSCHANGED hiển thị các thay đổi trạng thái khối tổng cho yêu cầu giảm giá, cung cấp một bản ghi về khi và cách trạng thái thay đổi."
keywords:
  - "credit memo request"
  - "yêu cầu giảm giá"
  - "total block status"
  - "trạng thái khối tổng"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "sap sds"
  - "sds sap"
  - "sd-sls-cmr"
  - "sales order"
  - "đơn bán hàng"
  - "ekko"
semantic_en: "The D_CRDMMREQTOTBLKSTSCHANGED CDS view exposes total block status changes for credit memo requests, providing a record of when and how the status changed."
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
# D_CRDMMREQTOTBLKSTSCHANGED

**D Crdmmreqtotblkstschanged**

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
| `CreditMemoRequestType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `TotalBlockStatus` |  | |  | `spstg` |  |  |
| `PreviousTotalBlockStatus` |  | |  | `spstg` |  |  |

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Tot Blk Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CrdMmReqTotBlkStsChanged
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      CreditMemoRequestType          : auart_unv;

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
