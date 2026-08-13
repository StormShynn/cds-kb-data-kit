---
name: I_BSORDITMSUBSCRPNPRICEPARAMTP
description: "Bsorditmsubscrpnpriceparamtp"
semantic_vi: "View Bsorditmsubscrpnpriceparamtp hiển thị các tham số giá trị đăng ký cho đơn hàng giải pháp kinh doanh, có thể được sử dụng để truy xuất và quản lý các tham số này trong các giao dịch CRM."
keywords:
  - "subscription pricing"
  - "business solution order"
  - "đăng ký giá trị"
  - "đơn hàng giải pháp kinh doanh"
  - "tham số giá trị đăng ký"
  - "tham số giá trị"
  - "crm"
  - "transactional processing"
  - "component:crm-s4-sol-slo"
  - "lob:other"
semantic_en: "The Bsorditmsubscrpnpriceparamtp view exposes subscription pricing parameters for business solution orders, which can be used to retrieve and manage these parameters in CRM transactions."
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
# I_BSORDITMSUBSCRPNPRICEPARAMTP

**Bsorditmsubscrpnpriceparamtp**

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
| `SubscrpnPrcgParameter` | ✓ | |  |  |  |  |
| `SubscrpnParameterDecimalValue` |  | |  |  |  |  |
| `SubscrpnPrcgParamValType` |  | |  |  |  |  |
| `SubscrpnParamDfltDecimalValue` |  | |  |  |  |  |
| `SubscrpnPrcgParamValIsSpcfd` |  | |  |  |  |  |
| `_SubscriptionBillingItem` | | ✓ | | | | |
| `_SubscriptionBilling` | | ✓ | | | | |
| `_SrvcSubscrpnParamValTypeText` | | ✓ | | | | |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

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

@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]

@EndUserText.label: 'Business Solution Order Item Subscrpn Price Parameter - TP'

define view entity I_BSOrdItmSubscrpnPriceParamTP
  as projection on R_BSOrdItmSubscrpnPriceParamTP
{
      @ObjectModel.foreignKey.association: '_SubscriptionBilling'
  key BusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_SubscriptionBillingItem'
  key BusinessSolutionOrderItem,
  key SubscrpnPrcgParameter,

      SubscrpnParameterDecimalValue,
      @ObjectModel.text.association: '_SrvcSubscrpnParamValTypeText'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcSubscrpnParamValType' , element:'SubscriptionParamValType'}, useAsTemplate: true  }]
      SubscrpnPrcgParamValType,
      SubscrpnParamDfltDecimalValue,

      @Semantics.booleanIndicator: true
      SubscrpnPrcgParamValIsSpcfd,

      // For Authorization
      _SubscriptionBillingItem,

      // Associations
      _SubscriptionBilling,
       _SrvcSubscrpnParamValTypeText,
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
}
```
