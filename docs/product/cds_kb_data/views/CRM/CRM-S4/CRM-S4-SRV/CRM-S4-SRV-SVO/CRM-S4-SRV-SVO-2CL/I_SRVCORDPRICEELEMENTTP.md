---
name: I_SRVCORDPRICEELEMENTTP
description: "Srvcordpriceelementtp"
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDPRICEELEMENTTP

**Srvcordpriceelementtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `_ConditionQuantityUnit` | | ✓ | | | | |
| `_ConditionInactiveReason` | | ✓ | | | | |
| `_ServiceOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Pricing Element - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdPriceElementTP 
as projection on R_SrvcOrdPriceElementTP {
  key ServiceOrder,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      ConditionType,
      ConditionRateValue,
      ConditionCurrency, 
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'    
      ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,
      TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      ConditionInactiveReason,
      /* Associations */
      _ConditionQuantityUnit,
      _ConditionInactiveReason,
      _ServiceOrderTP : redirected to parent I_ServiceOrderTP
}
```
