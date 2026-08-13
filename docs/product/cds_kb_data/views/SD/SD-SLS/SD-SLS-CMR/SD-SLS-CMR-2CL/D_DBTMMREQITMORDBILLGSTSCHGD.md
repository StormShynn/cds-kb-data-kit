---
name: D_DBTMMREQITMORDBILLGSTSCHGD
description: "D Dbtmmreqitmordbillgstschgd"
semantic_vi: "View D_DBTMMREQITMORDBILLGSTSCHGD hiển thị các thay đổi trạng thái hóa đơn liên quan đến yêu cầu giảm giá đơn hàng, có thể được sử dụng để theo dõi các thay đổi trạng thái hóa đơn cho yêu cầu giảm giá trong bán hàng và phân phối."
keywords:
  - "debit memo request"
  - "thay đổi trạng thái hóa đơn"
  - "sales and distribution"
  - "sự kiện giảm giá"
  - "trạng thái hóa đơn liên quan"
  - "yêu cầu giảm giá"
  - "đơn hàng giảm giá"
  - "đơn mua hàng"
  - "ekko"
  - "sự kiện giảm giá đơn hàng"
semantic_en: "The D_DBTMMREQITMORDBILLGSTSCHGD view exposes debit memo request item order-related billing status changes, which can be used to track changes in billing status for debit memo requests in sales and distribution."
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
# D_DBTMMREQITMORDBILLGSTSCHGD

**D Dbtmmreqitmordbillgstschgd**

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
| `OrderRelatedBillingStatus` |  | |  | `fksaa` |  |  |
| `PrevOrderRelatedBillingStatus` |  | |  | `fksaa` |  |  |

## Source Code

```abap
@EndUserText.label: 'Item Ord-Reltd Billing Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DbtMmReqItmOrdBillgStsChgd
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
      @Event.previousValue.element: 'PrevOrderRelatedBillingStatus'
      OrderRelatedBillingStatus     : fksaa;
      
      PrevOrderRelatedBillingStatus : fksaa;
}
```
