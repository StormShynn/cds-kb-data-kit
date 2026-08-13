---
name: D_CRDMMREQOVRLSDPROCSTSCHGD
description: "D Crdmmreqovrlsdprocstschgd"
semantic_vi: "View này hiển thị các thay đổi trạng thái quá trình SD tổng thể cho yêu cầu giảm giá. Nó được sử dụng để theo dõi trạng thái của yêu cầu giảm giá trong quá trình bán hàng."
keywords:
  - "credit memo request"
  - "yêu cầu giảm giá"
  - "sales process"
  - "quá trình bán hàng"
  - "sd process status"
  - "trạng thái quá trình sd"
  - "sap sales"
  - "bán hàng sap"
  - "sales and distribution"
  - "bán hàng và phân phối"
semantic_en: "This view exposes overall SD process status changes for credit memo requests. It is used to track the status of credit memo requests in the sales process."
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
# D_CRDMMREQOVRLSDPROCSTSCHGD

**D Crdmmreqovrlsdprocstschgd**

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
| `OverallSDProcessStatus` |  | |  | `gbstk` |  |  |
| `PreviousOverallSDProcessStatus` |  | |  | `gbstk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Ovrl SD Proc Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CrdMmReqOvrlSDProcStsChgd
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      CreditMemoRequestType          : auart_unv;

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
