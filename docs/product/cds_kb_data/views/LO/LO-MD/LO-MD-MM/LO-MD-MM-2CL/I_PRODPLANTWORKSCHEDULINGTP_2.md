---
name: I_PRODPLANTWORKSCHEDULINGTP_2
description: "Prodplantworkschedulingtp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODPLANTWORKSCHEDULINGTP_2

**Prodplantworkschedulingtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ProductBaseQuantity` |  | |  |  |  |  |
| `UnlimitedOverDelivIsAllowed` |  | |  |  |  |  |
| `OverDeliveryTolerancePercent` |  | |  |  |  |  |
| `UnderDeliveryTolerancePercent` |  | |  |  |  |  |
| `ProductionInvtryManagedLoc` |  | |  |  |  |  |
| `ProductionOrderBatchCode` |  | |  |  |  |  |
| `ProdIsWithdrawnFrmProdnBin` |  | |  |  |  |  |
| `TransitionMatrixProductsGroup` |  | |  |  |  |  |
| `OrderChangeManagementProfile` |  | |  |  |  |  |
| `ProductComponentBackflushCode` |  | |  |  |  |  |
| `SetupAndTeardownTime` |  | |  |  |  |  |
| `ProductionSchedulingProfile` |  | |  |  |  |  |
| `TransitionTime` |  | |  |  |  |  |
| `ProcessingTimeInDays` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `ProductProductionQuantityUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProdnOrdBatDetnCodeText` | | ✓ | | | | |
| `_ProdComponentBackflushCodeT` | | ✓ | | | | |
| `_ProductProductionQuantityUnit` | | ✓ | | | | |
| `_BaseUnitOfMeasure` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |
| `_ProdProdnQuantityUnitText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Work Scheduling - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProdPlantWorkSchedulingTP_2
  as projection on R_ProdPlantWorkSchedulingTP as ProductPlantWorkScheduling
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ProductBaseQuantity,
      @Semantics.booleanIndicator: true
      UnlimitedOverDelivIsAllowed,
      OverDeliveryTolerancePercent,
      UnderDeliveryTolerancePercent,
      ProductionInvtryManagedLoc,
      @ObjectModel.text.association: '_ProdnOrdBatDetnCodeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRODNORDBATDETNCODEVALUEHELP', element : 'ProductionOrderBatchCode' } , useAsTemplate: true }]
      ProductionOrderBatchCode,
      @Semantics.booleanIndicator: true
      ProdIsWithdrawnFrmProdnBin,
      TransitionMatrixProductsGroup,
      OrderChangeManagementProfile,
      @ObjectModel.text.association: '_ProdComponentBackflushCodeT'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdComponentBackflushCodeVH', element : 'ProductComponentBackflushCode' } , useAsTemplate: true }]
      ProductComponentBackflushCode,
      SetupAndTeardownTime,
      ProductionSchedulingProfile,
      TransitionTime,
      ProcessingTimeInDays,
      ProductionSupervisor,
      @ObjectModel.text.association: '_ProdProdnQuantityUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      ProductProductionQuantityUnit,
      //  @Semantics.booleanIndicator: true
      //  HasProductionVersion,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _Product      : redirected to I_ProductTP_2,
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _ProdnOrdBatDetnCodeText,
      _ProdComponentBackflushCodeT,
      _ProductProductionQuantityUnit,
      _BaseUnitOfMeasure,
      _ProductDescription,
      _BaseUnitOfMeasureText,
      _ProdProdnQuantityUnitText
}
```
