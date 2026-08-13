---
name: D_SRVCCONTRACTPERFORMRENEWALP
description: "D Srvccontractperformrenewalp"
semantic_vi: "View này hiển thị dữ liệu thực hiện lại hợp đồng dịch vụ, bao gồm trạng thái tạo và phát hành, cho việc quản lý hợp đồng dịch vụ CRM."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "crm"
  - "contract performance"
  - "thực hiện hợp đồng"
  - "renewal"
  - "phục hồi"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
semantic_en: "This view exposes service contract performance renewal data, including creation and release status, for use in CRM service contract management."
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - contract
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRACTPERFORMRENEWALP

**D Srvccontractperformrenewalp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NewServiceContractIsCreated` |  | |  | `crmt_boolean` |  |  |
| `SrvcTransChgReqRcvdOnDateTime` |  | |  | `timestamp` |  |  |
| `SrvcContrDuration` |  | |  | `timedura` |  |  |
| `SrvcContrDurationUnit` |  | |  | `timeunitdu` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `crmt_po_number_sold` |  |  |
| `ServiceContractIsReleased` |  | |  | `crms4_stat_released` |  |  |

## Source Code

```abap
@EndUserText.label: 'Renew Service Contract'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] 
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define root abstract entity D_SrvcContractPerformRenewalP 
{
  @Semantics.booleanIndicator: true
  NewServiceContractIsCreated   : crmt_boolean;
  
  @Semantics.dateTime: true
  SrvcTransChgReqRcvdOnDateTime : timestamp;
  
  SrvcContrDuration             : timedura;
  
  SrvcContrDurationUnit         : timeunitdu;

  PurchaseOrderByCustomer       : crmt_po_number_sold;
    
  @Semantics.booleanIndicator: true
  ServiceContractIsReleased     : crms4_stat_released;
}
```
