---
name: I_BUSSOLNORDITMFUPSUBSCRPNTP
description: "Bussolnorditmfupsubscrpntp"
semantic_vi: "View Bussolnorditmfupsubscrpntp hiển thị dữ liệu hóa đơn theo dõi đăng ký cho giải pháp kinh doanh, thường được sử dụng trong xử lý giao dịch trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "subscription billing"
  - "business solution"
  - "crm"
  - "transactional processing"
  - "crm-s4-sol-slo"
  - "lob other"
  - "subscription"
  - "billing"
  - "solution"
  - "order"
  - "đăng ký"
  - "hóa đơn"
semantic_en: "The Bussolnorditmfupsubscrpntp view exposes subscription billing data for business solutions, typically used in transactional processing within the CRM-S4-SOL-SLO component."
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
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMFUPSUBSCRPNTP

**Bussolnorditmfupsubscrpntp**

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
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `SubscrpnBillgSubscription` | ✓ | |  |  |  |  |
| `SubscrpnBillgSubscriptionItem` | ✓ | |  |  |  |  |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Item Follow up Subscription - TP'

define view entity I_BusSolnOrdItmFUPSubscrpnTP
  as projection on R_BusSolnOrdItmFUPSubscrpnTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key SubscrpnBillgSubscription,
  key SubscrpnBillgSubscriptionItem,

  /*    @Semantics.uuid: true
      ServiceDocumentItmRelationUUID,

      @Semantics.uuid: true
      BusSolnOrderItemCharUUID,*/

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
      //_BusSolnOrdFUPSubscription
}
```
