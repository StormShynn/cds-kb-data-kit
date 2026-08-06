---
name: I_SRVCCONTRITMBILLGREQITEMTP
description: Srvccontritmbillgreqitemtp
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITMBILLGREQITEMTP

**Srvccontritmbillgreqitemtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContract` | `ServiceContract` |
| key `ServiceContractItem` | `ServiceContractItem` |
| key `BillingRequestItem` | `BillingRequestItem` |
| `BillgReqItemBillingDateTime` | `BillgReqItemBillingDateTime` |
| `BillgReqItemBillingStatus` | `BillgReqItemBillingStatus` |
| `SettlementStartDateTime` | `SettlementStartDateTime` |
| `SettlementEndDateTime` | `SettlementEndDateTime` |
| `BillingPlanTimeZone` | `BillingPlanTimeZone` |
| `TransactionCurrency` | `TransactionCurrency` |
| `BillgReqItemNetAmount` | `BillgReqItemNetAmount` |
| `BillingBlockReason` | `BillingBlockReason` |
| `_ServiceContractItemTP` | *Association* |
| `_ServiceContractTP` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_BillgReqItmSettlmtStatusText` | *Association* |
| `_CurrencyText` | *Association* |
| `_BillingBlockReasonText` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Billg Request - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcContrItmBillgReqItemTP as projection on R_SrvcContrItmBillgReqItemTP {
  key ServiceContract,
  key ServiceContractItem,
  key BillingRequestItem,
  BillgReqItemBillingDateTime,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillgReqItmSettlmtStatus', element: 'BillgReqItemBillingStatus' },
                                        useAsTemplate: true } ]
  @ObjectModel.text.association: '_BillgReqItmSettlmtStatusText'
  BillgReqItemBillingStatus,
  SettlementStartDateTime,
  SettlementEndDateTime,
  BillingPlanTimeZone,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CurrencyStdVH', element: 'Currency' },
                                        useAsTemplate: true } ]
  @ObjectModel.foreignKey.association: '_TransactionCurrency'
  @ObjectModel.text.association: '_CurrencyText'
  TransactionCurrency,
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  BillgReqItemNetAmount,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingBlockReason', element: 'BillingBlockReason' },
                                              useAsTemplate: true } ]
  @ObjectModel.text.association: '_BillingBlockReasonText'
  BillingBlockReason,

  /* Associations */
  _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
  _ServiceContractTP     : redirected to I_ServiceContractTP,
  _TransactionCurrency,
  _BillgReqItmSettlmtStatusText,
  _CurrencyText,
  _BillingBlockReasonText
}
```
