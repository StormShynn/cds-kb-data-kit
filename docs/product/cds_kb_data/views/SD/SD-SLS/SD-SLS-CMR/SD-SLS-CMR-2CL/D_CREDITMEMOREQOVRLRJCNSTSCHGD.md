---
name: D_CREDITMEMOREQOVRLRJCNSTSCHGD
description: "D Creditmemoreqovrlrjcnstschgd"
semantic_vi: "View D_CREDITMEMOREQOVRLRJCNSTSCHGD hiển thị dữ liệu yêu cầu giảm giá, bao gồm trạng thái từ chối tài liệu tổng thể, có thể được sử dụng để phân tích và quản lý yêu cầu giảm giá trong bán hàng và phân phối."
keywords:
  - "credit memo"
  - "yêu cầu giảm giá"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "document rejection"
  - "trạng thái từ chối tài liệu"
  - "sap"
  - "sd"
  - "sles"
  - "cmr"
semantic_en: "The D_CREDITMEMOREQOVRLRJCNSTSCHGD view exposes credit memo request data, including overall document rejection status, which can be used to analyze and manage credit memo requests in sales and distribution."
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
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_CREDITMEMOREQOVRLRJCNSTSCHGD

**D Creditmemoreqovrlrjcnstschgd**

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
| `OverallSDDocumentRejectionSts` |  | |  | `abstk` |  |  |
| `PreviousOvrlSDDocRejectionSts` |  | |  | `abstk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Ovrl Rjcn Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoReqOvrlRjcnStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;

      CreditMemoRequestType         : auart_unv;

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
