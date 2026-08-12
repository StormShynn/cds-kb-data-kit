---
name: I_PRODUCTPLANTSTORAGETP_2
description: "Productplantstoragetp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_PRODUCTPLANTSTORAGETP_2

**Productplantstoragetp 2**

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
| `PhysInventoryForCycleCounting` |  | |  |  |  |  |
| `MaximumStoragePeriod` |  | |  |  |  |  |
| `ProdMaximumStoragePeriodUnit` |  | |  |  |  |  |
| `CycleCountingIndicatorIsFixed` |  | |  |  |  |  |
| `ProvisioningServiceLevel` |  | |  |  |  |  |
| `_ProductPlant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProdMaxStoragePeriodUnit` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Storage - TP'
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
define view entity I_ProductPlantStorageTP_2
  as projection on R_ProductPlantStorageTP as ProductPlantStorage
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      PhysInventoryForCycleCounting,
      @Semantics.quantity.unitOfMeasure: 'ProdMaximumStoragePeriodUnit'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      MaximumStoragePeriod,
      ProdMaximumStoragePeriodUnit,
      @Semantics.booleanIndicator: true
      CycleCountingIndicatorIsFixed,
      @Feature: 'SW:CMD_API_PRODUCT'
      ProvisioningServiceLevel,

      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2,
      _ProdMaxStoragePeriodUnit
}
```
