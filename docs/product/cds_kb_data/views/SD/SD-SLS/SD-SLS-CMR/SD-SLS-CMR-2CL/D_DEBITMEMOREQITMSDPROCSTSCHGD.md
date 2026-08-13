---
name: D_DEBITMEMOREQITMSDPROCSTSCHGD
description: "D Debitmemoreqitmsdprocstschgd"
semantic_vi: "View D_DEBITMEMOREQITMSDPROCSTSCHGD hiển thị các thay đổi trạng thái xử lý yêu cầu giảm giá trong SAP Sales và Distribution, thường được sử dụng để theo dõi các bản cập nhật trạng thái của yêu cầu giảm giá."
keywords:
  - "debit memo request"
  - "thay đổi trạng thái"
  - "sử dụng giảm giá"
  - "sản phẩm"
  - "đơn đặt hàng"
  - "đơn mua hàng"
  - "sự kiện"
  - "trạng thái"
  - "sự thay đổi"
  - "sự kiện giảm giá"
  - "sự kiện giảm giá sản phẩm"
semantic_en: "The D_DEBITMEMOREQITMSDPROCSTSCHGD view exposes debit memo request item processing status changes in SAP Sales and Distribution, typically used to track status updates of debit memo requests."
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
# D_DEBITMEMOREQITMSDPROCSTSCHGD

**D Debitmemoreqitmsdprocstschgd**

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
| `DebitMemoRequestItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |
| `SDProcessStatus` |  | |  | `gbsta` |  |  |
| `PreviousSDProcessStatus` |  | |  | `gbsta` |  |  |

## Source Code

```abap
@EndUserText.label: 'Item SD Process Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqItmSDProcStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;
      
      DebitMemoRequestType          : auart_unv;
      
      SalesOrganization             : vkorg;
      
      DistributionChannel           : vtweg;
      
      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;

      DebitMemoRequestItemCategory  : pstyv;

      Product                       : matnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousSDProcessStatus'
      SDProcessStatus               : gbsta;
      
      PreviousSDProcessStatus       : gbsta;
}
```
