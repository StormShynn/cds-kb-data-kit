---
name: D_DEBITMEMOREQOVRLRJCNSTSCHGD
description: "D Debitmemoreqovrlrjcnstschgd"
semantic_vi: "View D Debitmemoreqovrlrjcnstschgd hiển thị dữ liệu yêu cầu giảm tiền, bao gồm trạng thái từ chối tài liệu tổng thể, có thể được sử dụng để phân tích và quản lý yêu cầu giảm tiền trong bán hàng và phân phối."
keywords:
  - "debit memo request"
  - "yêu cầu giảm tiền"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "overall document rejection status"
  - "trạng thái từ chối tài liệu tổng thể"
  - "sap cds view"
  - "view d debitmemoreqovrlrjcnstschgd"
  - "sales organization"
  - "distribution channel"
  - "organization division"
semantic_en: "The D Debitmemoreqovrlrjcnstschgd CDS view exposes debit memo request data, including overall document rejection status, which can be used to analyze and manage debit memo requests in sales and distribution."
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
# D_DEBITMEMOREQOVRLRJCNSTSCHGD

**D Debitmemoreqovrlrjcnstschgd**

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
| `OverallSDDocumentRejectionSts` |  | |  | `abstk` |  |  |
| `PreviousOvrlSDDocRejectionSts` |  | |  | `abstk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Overall Rejection Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqOvrlRjcnStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;

      DebitMemoRequestType          : auart_unv;

      SalesOrganization             : vkorg;

      DistributionChannel           : vtweg;

      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;
      
      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousOvrlSDDocRejectionSts'
      OverallSDDocumentRejectionSts : abstk;

      PreviousOvrlSDDocRejectionSts : abstk; 

}
```
