---
name: D_DEBITMEMOREQORDBILLGSTSCHGD
description: "D Debitmemoreqordbillgstschgd"
semantic_vi: "Lịch sử thay đổi yêu cầu ghi nợ cho trạng thái hóa đơn, được sử dụng để theo dõi các thay đổi trạng thái hóa đơn của yêu cầu ghi nợ trong quá trình xử lý đơn hàng bán."
keywords:
  - "debit memo"
  - "đơn ghi nợ"
  - "billing status"
  - "trạng thái hóa đơn"
  - "sales order"
  - "đơn hàng bán"
  - "sap"
  - "sd-sls"
  - "cmr"
  - "change history"
semantic_en: "Debit memo request change history for billing status, used to track changes to billing status of debit memos in sales order processing."
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
# D_DEBITMEMOREQORDBILLGSTSCHGD

**D Debitmemoreqordbillgstschgd**

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
| `OverallOrdReltdBillgStatus` |  | |  | `fksak` |  |  |
| `PrevOvrlOrdReltdBillgStatus` |  | |  | `fksak` |  |  |

## Source Code

```abap
@EndUserText.label: 'Overall Ord-Reltd Billing Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqOrdBillgStsChgd
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      DebitMemoRequestType           : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element: 'PrevOvrlOrdReltdBillgStatus'
      OverallOrdReltdBillgStatus     : fksak;

      PrevOvrlOrdReltdBillgStatus    : fksak;

}
```
