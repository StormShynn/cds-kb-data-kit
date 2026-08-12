---
name: I_SRVCCONFITEMPRICEELEMENTTP
description: "Srvcconfitempriceelementtp"
app_component: CRM-S4-SRV-SCO-2CL
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
  - item-level
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMPRICEELEMENTTP

**Srvcconfitempriceelementtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceConfirmation` | ✓ | |  |  |  |  |
| `ServiceConfirmationItem` | ✓ | |  |  |  |  |
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
| `_ServiceConfirmationItemTP` | | ✓ | | | | |
| `_SrvcConfTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Itm PrgElm - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel: {
   
   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_SrvcConfItemPriceElementTP as projection on R_SrvcConfItemPriceElementTP 
{
       
    
    key  ServiceConfirmation,
    key  ServiceConfirmationItem,
    key  PricingProcedureStep,
    key  PricingProcedureCounter,
         PrcgProcedureCounterForHeader,
         ConditionType,
         ConditionRateValue,
         ConditionCurrency,
         @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
         ConditionQuantity,
         ConditionQuantityUnit,
         @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
         ConditionInactiveReason,
         
      //Associations
        _ConditionQuantityUnit,
        _ConditionInactiveReason,
              
        _ServiceConfirmationItemTP : redirected to parent I_ServiceConfirmationItemTP,
        _SrvcConfTP : redirected to I_ServiceConfirmationTP

  
}
```
