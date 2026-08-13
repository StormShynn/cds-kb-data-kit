---
name: I_BUSSOLNORDUSERSTATUSTP
description: "Bussolnorduserstatustp"
semantic_vi: "View Bussolnorduserstatustp hiển thị dữ liệu trạng thái người dùng cho đơn hàng giải pháp kinh doanh, có liên quan đến xử lý giao dịch trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "crm"
  - "business solution order"
  - "user status"
  - "transactional processing"
  - "status profile"
  - "crm-s4-sol-slo"
  - "bussolnorduserstatustp"
  - "đơn hàng giải pháp kinh doanh"
  - "trạng thái người dùng"
semantic_en: "The Bussolnorduserstatustp CDS view exposes business solution order user status data, which is relevant for transactional processing in CRM-S4-SOL-SLO component."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - status
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDUSERSTATUSTP

**Bussolnorduserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `UserStatus` | ✓ | |  |  |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_UserStatusText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
    }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Business Solution Order User Status - TP'
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BusSolnOrdUserStatusTP
  as projection on R_BusSolnOrdUserStatusTP
{

  key BusinessSolutionOrder,
  @ObjectModel.text.association: '_UserStatusText'
  key UserStatus,
      
      StatusProfile,

      // Associations
      _BusinessSolutionOrderTP : redirected to parent I_BusinessSolutionOrderTP,
      _StatusCode,
      _StatusProfile,
      _UserStatusText
}
```
