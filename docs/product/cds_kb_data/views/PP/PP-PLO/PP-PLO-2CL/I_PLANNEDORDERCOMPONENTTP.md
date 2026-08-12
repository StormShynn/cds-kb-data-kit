---
name: I_PLANNEDORDERCOMPONENTTP
description: "Planned OrderCOMPONENTTP"
app_component: PP-PLO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PLO
  - interface-view
  - transactional-processing
  - planned-order
  - component:PP-PLO-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERCOMPONENTTP

**Planned OrderCOMPONENTTP**

| Property | Value |
|---|---|
| App Component | `PP-PLO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrder` | ✓ | |  |  |  |  |
| `Reservation` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `BOMItem` |  | |  |  |  |  |
| `BOMItemDescription` |  | |  |  |  |  |
| `BOMItemDescriptionLine2` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BOMItemSorter` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `BillOfMaterialInternalID` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BOMItemCategory` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MatlCompRequirementDate` |  | |  |  |  |  |
| `GoodsMovementEntryQty` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `RequiredQuantity` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `SupplyArea` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `MaterialComponentIsPhantomItem` |  | |  |  |  |  |
| `OrderPathValue` |  | |  |  |  |  |
| `OrderLevelValue` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `AssemblyOrderPathValue` |  | |  |  |  |  |
| `AssemblyOrderLevelValue` |  | |  |  |  |  |
| `DiscontinuationGroup` |  | |  |  |  |  |
| `MatlCompDiscontinuationType` |  | |  |  |  |  |
| `MatlCompIsFollowUpMaterial` |  | |  |  |  |  |
| `FollowUpGroup` |  | |  |  |  |  |
| `FollowUpMaterial` |  | |  |  |  |  |
| `FollowUpMaterialIsNotActive` |  | |  |  |  |  |
| `PlannedOrderLastChangeDateTime` |  | |  |  |  |  |
| `ProductName` |  | |  |  |  |  |
| `MRPControllerName` |  | |  |  |  |  |
| `StorageLocationName` |  | |  |  |  |  |
| `ProductionSupplyAreaName` |  | |  |  |  |  |
| `PlantName` |  | |  |  |  |  |
| `FollowUpMaterialText` |  | |  |  |  |  |
| `DebitCreditCodeName` |  | |  |  |  |  |
| `AssemblyProductText` |  | |  |  |  |  |
| `BillOfMaterialItemCategoryDesc` |  | |  |  |  |  |
| `BillOfMaterialCategoryDesc` |  | |  |  |  |  |
| `I_PlannedOrderTP` |  | |  | `PlannedOrderComponent._PlannedOrder : redirected to parent I_PlannedOrderTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Interface for Component entity of BO PlannedOrder - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view entity I_PlannedOrderComponentTP
  as projection on R_PlannedOrderComponentTP as PlannedOrderComponent
{

  key PlannedOrderComponent.PlannedOrder,
  key PlannedOrderComponent.Reservation,
  key PlannedOrderComponent.ReservationItem,

      PlannedOrderComponent.BOMItem,
      PlannedOrderComponent.BOMItemDescription,
      PlannedOrderComponent.BOMItemDescriptionLine2, //potx2
      @ObjectModel.text.element: ['BillOfMaterialCategoryDesc']
      PlannedOrderComponent.BillOfMaterialCategory,
      PlannedOrderComponent.BOMItemSorter,
      PlannedOrderComponent.BillOfMaterialItemNumber,
      PlannedOrderComponent.BillOfMaterialInternalID,
      PlannedOrderComponent.BillOfMaterialVariant,
      @ObjectModel.text.element: ['BillOfMaterialItemCategoryDesc']
      PlannedOrderComponent.BOMItemCategory,
      @ObjectModel.text.element: ['ProductName']
      PlannedOrderComponent.Material,
      PlannedOrderComponent.MatlCompRequirementDate,

      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Consumption.filter.hidden: true
      PlannedOrderComponent.GoodsMovementEntryQty,
      //@Semantics.unitOfMeasure: true
      @Consumption.filter.hidden: true
      PlannedOrderComponent.EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Consumption.filter.hidden: true
      PlannedOrderComponent.RequiredQuantity,
      //@Semantics.unitOfMeasure: true
      @Consumption.filter.hidden: true
      PlannedOrderComponent.BaseUnit,
      //@Semantics.quantity.unitOfMeasure: 'BaseUnit'
      //PlannedOrderComponent.WithdrawnQuantity,      - PO in discussion
      @ObjectModel.text.element: ['DebitCreditCodeName']
      PlannedOrderComponent.DebitCreditCode,
      PlannedOrderComponent.ComponentScrapInPercent,
      PlannedOrderComponent.QuantityIsFixed,
      
      @ObjectModel.text.element: ['PlantName']
      PlannedOrderComponent.Plant,
      @ObjectModel.text.element: ['StorageLocationName']
      PlannedOrderComponent.StorageLocation,
      @ObjectModel.text.element: ['ProductionSupplyAreaName']
      PlannedOrderComponent.SupplyArea,
      @ObjectModel.text.element: ['MRPControllerName']
      PlannedOrderComponent.MRPController,

      PlannedOrderComponent.MaterialComponentIsPhantomItem,
      PlannedOrderComponent.OrderPathValue,
      PlannedOrderComponent.OrderLevelValue,
      @ObjectModel.text.element: ['AssemblyProductText']
      PlannedOrderComponent.Assembly,
      PlannedOrderComponent.AssemblyOrderPathValue,
      PlannedOrderComponent.AssemblyOrderLevelValue,

      PlannedOrderComponent.DiscontinuationGroup,
      PlannedOrderComponent.MatlCompDiscontinuationType,
      PlannedOrderComponent.MatlCompIsFollowUpMaterial,
      PlannedOrderComponent.FollowUpGroup,
      @ObjectModel.text.element: ['FollowUpMaterialText']     
      PlannedOrderComponent.FollowUpMaterial,
      PlannedOrderComponent.FollowUpMaterialIsNotActive,
      
      @Consumption.filter.hidden: true
      PlannedOrderComponent.PlannedOrderLastChangeDateTime,
      
     //exposing below fields for custom ui service
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrderComponent.ProductName,
      @Consumption.filter.hidden: true
      PlannedOrderComponent.MRPControllerName,
      @Consumption.filter.hidden: true 
      PlannedOrderComponent.StorageLocationName,
      @Consumption.filter.hidden: true
      PlannedOrderComponent.ProductionSupplyAreaName,
      @Consumption.filter.hidden: true
      PlannedOrderComponent.PlantName,
      @Consumption.filter.hidden: true
      @EndUserText.label: 'Follow Up Product Description'
      PlannedOrderComponent.FollowUpMaterialText,
      @Consumption.filter.hidden: true
      PlannedOrderComponent.DebitCreditCodeName,
      @Consumption.filter.hidden: true
      @EndUserText.label: 'Assembly Product Description'
      PlannedOrderComponent.AssemblyProductText,
      @Consumption.filter.hidden: true
      PlannedOrderComponent.BillOfMaterialItemCategoryDesc,
      @Consumption.filter.hidden: true
      PlannedOrderComponent.BillOfMaterialCategoryDesc,
      
      

      PlannedOrderComponent._PlannedOrder : redirected to parent I_PlannedOrderTP

}
```
