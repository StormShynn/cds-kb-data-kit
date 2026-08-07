---
name: I_BUSSOLNORDPRICEELEMENTTP
description: Bussolnordpriceelementtp
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
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
# I_BUSSOLNORDPRICEELEMENTTP

**Bussolnordpriceelementtp**

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
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:  #MANDATORY,
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

@EndUserText.label: 'Solution Order Price Element - TP'
define view entity I_BusSolnOrdPriceElementTP 
as projection on R_BusSolnOrdPriceElementTP {
  
  key BusinessSolutionOrder,
  key PricingProcedureStep,
  key PricingProcedureCounter,
  ConditionType,
  ConditionRateValue,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  ConditionQuantity,
  
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasureStdVH' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_UnitOfMeasureText'
  ConditionQuantityUnit,
 // ConditionAmount,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CurrencyStdVH' , element:'Currency'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_CurrencyText'
  ConditionCurrency,
  PricingDocument,
  
  /* Associations */
  _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP,
  _UnitOfMeasureText,
  _CurrencyText
  
  
}
```
