---
name: D_SRVCCONTRITEMPERFORMRENEWALP
description: "D Srvccontritemperformrenewalp"
semantic_vi: "View này hiển thị dữ liệu thực hiện lại hợp đồng dịch vụ vật tư, được sử dụng để theo dõi và quản lý các yêu cầu thực hiện lại hợp đồng dịch vụ vật tư. Nó thường được sử dụng bởi các nhà phát triển CRM để truy xuất và phân tích dữ liệu thực hiện lại hợp đồng dịch vụ vật tư."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "item-level"
  - "renewal"
  - "thực hiện lại"
  - "crm"
  - "sap"
  - "service contract item"
  - "hợp đồng dịch vụ vật tư"
  - "performance"
  - "độ hiệu suất"
semantic_en: "This view exposes service contract item performance renewal data, which is used to track and manage service contract item renewals. It is typically used by CRM developers to retrieve and analyze service contract item performance renewal data."
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRITEMPERFORMRENEWALP

**D Srvccontritemperformrenewalp**

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
| `SrvcContrItemDuration` |  | |  | `timedura` |  |  |
| `SrvcContrItemDurationUnit` |  | |  | `timeunitdu` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `crmt_po_number_sold` |  |  |
| `ServiceContractItemIsReleased` |  | |  | `crms4_serv_contr_auto_release` |  |  |

## Source Code

```abap
@EndUserText.label: 'Renew Service Contract Item'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] 
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define root abstract entity D_SrvcContrItemPerformRenewalP
{
  @Semantics.dateTime: true
  SrvcTransChgReqRcvdOnDateTime : timestamp;
  
  SrvcContrItemDuration         : timedura;
  
  SrvcContrItemDurationUnit     : timeunitdu;

  PurchaseOrderByCustomer       : crmt_po_number_sold;
    
  @Semantics.booleanIndicator: true
  ServiceContractItemIsReleased : crms4_serv_contr_auto_release;
}
```
