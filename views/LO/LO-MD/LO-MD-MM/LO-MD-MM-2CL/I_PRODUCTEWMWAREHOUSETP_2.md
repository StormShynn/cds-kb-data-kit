---
name: I_PRODUCTEWMWAREHOUSETP_2
description: Productewmwarehousetp 2
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
  - warehouse
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTEWMWAREHOUSETP_2

**Productewmwarehousetp 2**

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
| key `EWMWarehouse` | `EWMWarehouse` |
| key `EntitledToDisposeParty` | `EntitledToDisposeParty` |
| `ProductInternalUUID` | `ProductInternalUUID` |
| `SupplyChainUnitUUID` | `SupplyChainUnitUUID` |
| `EWMPartyEntitledToDisposeUUID` | `EWMPartyEntitledToDisposeUUID` |
| `BaseUnit` | `BaseUnit` |
| `EWMProductProcessBlockProfile` | `EWMProductProcessBlockProfile` |
| `EWMProcessTypeControlCode` | `EWMProcessTypeControlCode` |
| `EWMProductLoadCategory` | `EWMProductLoadCategory` |
| `EWMStggAreaDeterminationGroup` | `EWMStggAreaDeterminationGroup` |
| `EWMIsCnsmpnRlvtForValAddedSrvc` | `EWMIsCnsmpnRlvtForValAddedSrvc` |
| `RequiredMinShelfLife` | `RequiredMinShelfLife` |
| `EWMPtwyControlStrategy` | `EWMPtwyControlStrategy` |
| `EWMStorageSectionMethod` | `EWMStorageSectionMethod` |
| `EWMStorageBinType` | `EWMStorageBinType` |
| `EWMBulkStorageMethod` | `EWMBulkStorageMethod` |
| `EWMStockRemovalControlStrategy` | `EWMStockRemovalControlStrategy` |
| `EWMStockDeterminationGroup` | `EWMStockDeterminationGroup` |
| `EWMProdTwoStepPickingRelevant` | `EWMProdTwoStepPickingRelevant` |
| `EWMSltgRequirementQuantity` | `EWMSltgRequirementQuantity` |
| `EWMSltgNumberOfSalesOrderItems` | `EWMSltgNumberOfSalesOrderItems` |
| `EWMSltgRecmddStorageQuantity` | `EWMSltgRecmddStorageQuantity` |
| `EWMSlottingWeightSizeCode` | `EWMSlottingWeightSizeCode` |
| `EWMSlottingVolumeSizeCode` | `EWMSlottingVolumeSizeCode` |
| `EWMSlottingLengthSizeCode` | `EWMSlottingLengthSizeCode` |
| `EWMSlottingWidthSizeCode` | `EWMSlottingWidthSizeCode` |
| `EWMSlottingHeightSizeCode` | `EWMSlottingHeightSizeCode` |
| `EWMPhysInventoryCountingCycle` | `EWMPhysInventoryCountingCycle` |
| `EWMProdBackflushWthdrwlMethod` | `EWMProdBackflushWthdrwlMethod` |
| `EWMKitQuantityCorrelation` | `EWMKitQuantityCorrelation` |
| `EWMQuantityAdjustmentProfile` | `EWMQuantityAdjustmentProfile` |
| `EWMMrchdsDistrQtyClassfctn` | `EWMMrchdsDistrQtyClassfctn` |
| `EWMPreferredUnit` | `EWMPreferredUnit` |
| `EWMQualityInspectionGroup` | `EWMQualityInspectionGroup` |
| `_BusinessPartner` | *Association* |
| `_Product` | *Association* |
| `_ProductEWMStorageType` | *Association* |
| `_BaseUnitOfMeasure` | *Association* |
| `_UnitOfMeasureText_2` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product EWM Warehouse - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
define view entity I_ProductEWMWarehouseTP_2
  as projection on R_ProductEWMWarehouseTP as ProductEWMWarehouse
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key EWMWarehouse,
  key EntitledToDisposeParty,

      @Semantics.uuid: true
      ProductInternalUUID,
      SupplyChainUnitUUID,
      EWMPartyEntitledToDisposeUUID,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,

      EWMProductProcessBlockProfile,
      EWMProcessTypeControlCode,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMProductLoadCategory,

      EWMStggAreaDeterminationGroup,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMIsCnsmpnRlvtForValAddedSrvc,

      RequiredMinShelfLife,

      EWMPtwyControlStrategy,
      EWMStorageSectionMethod,
      EWMStorageBinType,
      EWMBulkStorageMethod,
      EWMStockRemovalControlStrategy,
      EWMStockDeterminationGroup,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMProdTwoStepPickingRelevant,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSltgRequirementQuantity,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSltgNumberOfSalesOrderItems,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSltgRecmddStorageQuantity,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSlottingWeightSizeCode,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSlottingVolumeSizeCode,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSlottingLengthSizeCode,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSlottingWidthSizeCode,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMSlottingHeightSizeCode,

      EWMPhysInventoryCountingCycle,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMProdBackflushWthdrwlMethod,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMKitQuantityCorrelation,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMQuantityAdjustmentProfile,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      EWMMrchdsDistrQtyClassfctn,
      @ObjectModel.text.association: '_UnitOfMeasureText_2'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      EWMPreferredUnit,
      EWMQualityInspectionGroup,

      /*Associations*/
      _BusinessPartner,
      _Product               : redirected to parent I_ProductTP_2,
      _ProductEWMStorageType : redirected to composition child I_ProductEWMStorageTypeTP_2,
      _BaseUnitOfMeasure,
      _UnitOfMeasureText_2

}
```
