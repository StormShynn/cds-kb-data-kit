---
name: I_SRVCQTANPRICEELEMENTTP
description: Srvcqtanpriceelementtp
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANPRICEELEMENTTP

**Srvcqtanpriceelementtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceQuotation` | `ServiceQuotation` |
| key `PricingProcedureStep` | `PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionType` | `ConditionType` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionCurrency` | `ConditionCurrency` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionAmount` | `ConditionAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ConditionInactiveReason` | `ConditionInactiveReason` |
| `_ConditionQuantityUnit` | *Association* |
| `_ConditionInactiveReason` | *Association* |
| `_ServiceQuotationTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Quotation Price Element - TP'
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
                sizeCategory:   #L},
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]                  
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcQtanPriceElementTP
  as projection on R_SrvcQtanPriceElementTP
{
  key ServiceQuotation,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      ConditionType,
      ConditionRateValue,
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,
      TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      ConditionInactiveReason,
      
      /* Associations */
      _ConditionQuantityUnit,
      _ConditionInactiveReason,

      _ServiceQuotationTP : redirected to parent I_ServiceQuotationTP
}
```
