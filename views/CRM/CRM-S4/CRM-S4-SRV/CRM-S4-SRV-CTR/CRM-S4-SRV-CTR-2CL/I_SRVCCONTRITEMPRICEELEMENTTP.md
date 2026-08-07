---
name: I_SRVCCONTRITEMPRICEELEMENTTP
description: Srvccontritempriceelementtp
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
# I_SRVCCONTRITEMPRICEELEMENTTP

**Srvccontritempriceelementtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |  |  |
| `ServiceContractItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `PrcgProcedureCounterForHeader` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `_ConditionQuantityUnit` | | ✓ | | | | |
| `_ConditionInactiveReason` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_ConditionInactiveReasonText` | | ✓ | | | | |
| `_ServiceContractItemTP` | | ✓ | | | | |
| `_ServiceContractTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Price Element - TP'
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
                serviceQuality: #C,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define view entity I_SrvcContrItemPriceElementTP as projection on R_SrvcContrItemPriceElementTP {
  key ServiceContract,
  key ServiceContractItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
  PrcgProcedureCounterForHeader,
  ConditionType,
  ConditionRateValue,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CurrencyStdVH', element: 'Currency' },
                                        useAsTemplate: true } ]
  @ObjectModel.text.association: '_CurrencyText'
  ConditionCurrency,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  ConditionQuantity,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' },
                                        useAsTemplate: true } ]
  @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
  @ObjectModel.text.association: '_UnitOfMeasureText'
  ConditionQuantityUnit,
  @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
  @ObjectModel.text.association: '_ConditionInactiveReasonText'
  ConditionInactiveReason,

  /* Associations */
  _ConditionQuantityUnit,
  _ConditionInactiveReason,
  _UnitOfMeasureText,
  _CurrencyText,
  _ConditionInactiveReasonText,
  _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
  _ServiceContractTP     : redirected to I_ServiceContractTP
}
```
