---
name: I_PRODUCTPLANTSALESTP_2
description: Productplantsalestp 2
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
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTSALESTP_2

**Productplantsalestp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `Product` |
| key `Plant` | `Plant` |
| `LoadingGroup` | `LoadingGroup` |
| `CapPlanningQuantityInBaseUoM` | `CapPlanningQuantityInBaseUoM` |
| `ProdShipgProcgDurationInDays` | `ProdShipgProcgDurationInDays` |
| `WrkCentersShipgSetupTimeInDays` | `WrkCentersShipgSetupTimeInDays` |
| `ReplacementPartType` | `ReplacementPartType` |
| `AvailabilityCheckType` | `AvailabilityCheckType` |
| `BaseUnit` | `BaseUnit` |
| `_Product` | *Association* |
| `_ProductPlant` | *Association* |
| `_LoadingGroupText` | *Association* |
| `_ProductReplacementPartTypeT` | *Association* |
| `_BaseUnitOfMeasure` | *Association* |
| `_ProductDescription` | *Association* |
| `_BaseUnitOfMeasureText` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Sales - TP'
@Metadata.ignorePropagatedAnnotations: true
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
define view entity I_ProductPlantSalesTP_2
  as projection on R_ProductPlantSalesTP as ProductPlantSales
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      @ObjectModel.text.association: '_LoadingGroupText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LoadingGroup', element : 'LoadingGroup'} , useAsTemplate: true }]
      LoadingGroup,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CapPlanningQuantityInBaseUoM,
      ProdShipgProcgDurationInDays,
      WrkCentersShipgSetupTimeInDays,
      @ObjectModel.text.association: '_ProductReplacementPartTypeT'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRODUCTREPLACEMENTPARTTYPEVH', element : 'ReplacementPartType' } , useAsTemplate: true }]
      ReplacementPartType,
      AvailabilityCheckType,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _Product      : redirected to I_ProductTP_2,
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _LoadingGroupText,
      _ProductReplacementPartTypeT,
      _BaseUnitOfMeasure,
      _ProductDescription,
      _BaseUnitOfMeasureText
}
```
