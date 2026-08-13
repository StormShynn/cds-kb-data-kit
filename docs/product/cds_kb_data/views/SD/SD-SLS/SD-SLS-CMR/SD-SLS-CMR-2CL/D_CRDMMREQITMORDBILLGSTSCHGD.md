---
name: D_CRDMMREQITMORDBILLGSTSCHGD
description: "D Crdmmreqitmordbillgstschgd"
semantic_vi: "View D_CRDMMREQITMORDBILLGSTSCHGD hiển thị các thay đổi trạng thái hóa đơn liên quan đến yêu cầu giảm giá đơn hàng, có thể được sử dụng để theo dõi các thay đổi trạng thái hóa đơn cho yêu cầu giảm giá."
keywords:
  - "credit memo request"
  - "thay đổi trạng thái hóa đơn"
  - "order-related billing status"
  - "yêu cầu giảm giá"
  - "đơn hàng"
  - "trạng thái hóa đơn"
  - "sap"
  - "sd-sls-cmr"
  - "component:sd-sls-cmr-2cl"
  - "lob:sales & distribution"
semantic_en: "The D_CRDMMREQITMORDBILLGSTSCHGD view exposes credit memo request item order-related billing status changes, which can be used to track changes in billing status for credit memo requests."
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
# D_CRDMMREQITMORDBILLGSTSCHGD

**D Crdmmreqitmordbillgstschgd**

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
| `CreditMemoRequestItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |
| `OrderRelatedBillingStatus` |  | |  | `fksaa` |  |  |
| `PrevOrderRelatedBillingStatus` |  | |  | `fksaa` |  |  |

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Itm Ord-Reltd Billg Sts Chgd'                         
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CrdMmReqItmOrdBillgStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;
      
      CreditMemoRequestType         : auart_unv;
      
      SalesOrganization             : vkorg;
      
      DistributionChannel           : vtweg;
      
      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;

      CreditMemoRequestItemCategory : pstyv;

      Product                       : matnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PrevOrderRelatedBillingStatus'
      OrderRelatedBillingStatus     : fksaa;
      
      PrevOrderRelatedBillingStatus : fksaa;
}
```
