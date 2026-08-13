---
name: D_SRVCCONTRCHANGESOLDTOPARTYP
description: "D Srvccontrchangesoldtopartyp"
semantic_vi: "View D_SRVCCONTRCHANGESOLDTOPARTYP hiển thị dữ liệu lịch sử thay đổi hợp đồng dịch vụ liên quan đến khách hàng bán hàng, giúp bạn theo dõi các thay đổi được thực hiện đối với hợp đồng dịch vụ theo thời gian."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "sold-to party"
  - "khách hàng bán hàng"
  - "service contract change"
  - "thay đổi hợp đồng dịch vụ"
  - "crm"
  - "sap cds"
  - "cds view"
  - "hợp đồng dịch vụ lịch sử"
semantic_en: "The D_SRVCCONTRCHANGESOLDTOPARTYP view exposes service contract change history data related to sold-to parties, allowing you to track changes made to service contracts over time."
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRCHANGESOLDTOPARTYP

**D Srvccontrchangesoldtopartyp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcTransChgReqRcvdOnDateTime` |  | |  | `timestamp` |  |  |
| `EffectiveDate` |  | |  | `datum` |  |  |
| `SoldToParty` |  | |  | `crmt_sold_to_part` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `crmt_po_number_sold` |  |  |
| `ServiceContractIsReleased` |  | |  | `crms4_stat_released` |  |  |

## Source Code

```abap
@EndUserText.label: 'Change Sold-to Party for Srvc Contract'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] 
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define root abstract entity D_SrvcContrChangeSoldToPartyP 
{  
  @Semantics.dateTime: true
  SrvcTransChgReqRcvdOnDateTime : timestamp;
  
  EffectiveDate                 : datum;
  
  SoldToParty                   : crmt_sold_to_part;

  PurchaseOrderByCustomer       : crmt_po_number_sold;
    
  @Semantics.booleanIndicator: true
  ServiceContractIsReleased     : crms4_stat_released;
}
```
