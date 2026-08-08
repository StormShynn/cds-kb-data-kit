---
name: I_SRVCQTANITEMPRICEELEMENTTP
description: "Srvcqtanitempriceelementtp"
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
  - item-level
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANITEMPRICEELEMENTTP

**Srvcqtanitempriceelementtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |  |  |
| `ServiceQuotationItem` | ✓ | |  |  |  |  |
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
| `_ServiceQuotationItemTP` | | ✓ | | | | |
| `_ServiceQuotationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Quotation Item Price Element - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L},
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]                
}
define view entity I_SrvcQtanItemPriceElementTP
  as projection on R_SrvcQtanItemPriceElementTP
{
      @ObjectModel.foreignKey.association: '_ServiceQuotationTP'
  key ServiceQuotation,
      @ObjectModel.foreignKey.association: '_ServiceQuotationItemTP'
  key ServiceQuotationItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      PrcgProcedureCounterForHeader,
      ConditionType,
      ConditionRateValue,
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      ConditionInactiveReason,
      
      /* Associations */
      _ConditionQuantityUnit,
      _ConditionInactiveReason,

      _ServiceQuotationItemTP : redirected to parent I_ServiceQuotationItemTP,
      _ServiceQuotationTP     : redirected to I_ServiceQuotationTP
}
```
