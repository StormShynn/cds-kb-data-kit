---
name: I_PLANNEDORDERTP
description: "Planned OrderTP"
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
# I_PLANNEDORDERTP

**Planned OrderTP**

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
| `PlannedOrderType` |  | |  |  |  |  |
| `PlannedOrderProfile` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `MRPPlant` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `MaterialProcurementCategory` |  | |  |  |  |  |
| `MaterialProcurementType` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `TotalQuantity` |  | |  |  |  |  |
| `PlndOrderPlannedScrapQty` |  | |  |  |  |  |
| `GoodsReceiptQty` |  | |  |  |  |  |
| `IssuedQuantity` |  | |  |  |  |  |
| `PlndOrderPlannedStartDate` |  | |  |  |  |  |
| `PlndOrderPlannedStartTime` |  | |  |  |  |  |
| `PlndOrderPlannedEndDate` |  | |  |  |  |  |
| `PlndOrderPlannedEndTime` |  | |  |  |  |  |
| `PlannedOrderOpeningDate` |  | |  |  |  |  |
| `PlannedOrderLastChangeDateTime` |  | |  |  |  |  |
| `ProductionStartDate` |  | |  |  |  |  |
| `ProductionEndDate` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `WBSDescription` |  | |  |  |  |  |
| `PlannedOrderLongText` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `MRPControllerName` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `FixedSupplier` |  | |  |  |  |  |
| `QuotaArrangement` |  | |  |  |  |  |
| `QuotaArrangementItem` |  | |  |  |  |  |
| `PlannedOrderIsFirm` |  | |  |  |  |  |
| `PlannedOrderIsConvertible` |  | |  |  |  |  |
| `PlannedOrderBOMIsFixed` |  | |  |  |  |  |
| `PlannedOrderCapacityIsDsptchd` |  | |  |  |  |  |
| `CapacityRequirement` |  | |  |  |  |  |
| `BillOfOperationsVariant` |  | |  |  |  |  |
| `ScheduledBasicStartDate` |  | |  |  |  |  |
| `ScheduledBasicStartTime` |  | |  |  |  |  |
| `ScheduledBasicEndDate` |  | |  |  |  |  |
| `ScheduledBasicEndTime` |  | |  |  |  |  |
| `MaterialGoodsReceiptDuration` |  | |  |  |  |  |
| `MaterialName` |  | |  |  |  |  |
| `PlannedOrderTypeName` |  | |  |  |  |  |
| `MRPAreaText` |  | |  |  |  |  |
| `MRPPlantName` |  | |  |  |  |  |
| `ProductionPlantName` |  | |  |  |  |  |
| `MaterialProcurementCatName` |  | |  |  |  |  |
| `ProductionVersionText` |  | |  |  |  |  |
| `ProductionSupervisorName` |  | |  |  |  |  |
| `SupplierName` |  | |  |  |  |  |
| `CustomerName` |  | |  |  |  |  |
| `MaterialProcurementTypeName` |  | |  |  |  |  |
| `PurchasingOrganizationName` |  | |  |  |  |  |
| `StorageLocationName` |  | |  |  |  |  |
| `AcctAssignmentCategoryName` |  | |  |  |  |  |
| `I_PlannedOrderComponentTP` |  | |  | `PlannedOrder._PlannedOrderComponent : redirected to composition child I_PlannedOrderComponentTP` |  |  |
| `I_PlannedOrderCapacityTP` |  | |  | `PlannedOrder._PlannedOrderCapacity : redirected to composition child I_PlannedOrderCapacityTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Interface for the BO PlannedOrder - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.sapObjectNodeType.name: 'PlannedOrder'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
// @ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE]
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
define root view entity I_PlannedOrderTP
  provider contract transactional_interface
  as projection on R_PlannedOrderTP as PlannedOrder
  
{
      @ObjectModel.sapObjectNodeTypeReference: 'PlannedOrder'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' }, useAsTemplate: true } ]
  key PlannedOrder.PlannedOrder,
      @ObjectModel.text.element: ['PlannedOrderTypeName']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderType', element: 'PlannedOrderType' }, useAsTemplate: true } ]
      PlannedOrder.PlannedOrderType,
      @ObjectModel.text.element: ['PlannedOrderTypeName']
      @EndUserText.label: 'Planned Order Profile'
      PlannedOrder.PlannedOrderProfile,

      // BASIC INFORMATION
      @ObjectModel.text.element: ['MaterialName']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
      PlannedOrder.Material,
      @ObjectModel.text.element: ['ProductionPlantName']
      @Consumption.valueHelpDefinition: [{entity:{name:'I_PlantStdVH' , element: 'Plant'}, useAsTemplate: true }]
      @EndUserText.label: 'Production Plant'
      PlannedOrder.ProductionPlant,
      @ObjectModel.text.element: ['MRPPlantName']
      @Consumption.valueHelpDefinition: [{entity:{name:'I_PlantStdVH' , element: 'Plant'}, useAsTemplate: true }]
      @EndUserText.label: 'MRP Plant'
      PlannedOrder.MRPPlant,
      @ObjectModel.text.element: ['MRPAreaText']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' }, useAsTemplate: true  } ]
      PlannedOrder.MRPArea,
      @ObjectModel.text.element: ['ProductionVersionText']
      PlannedOrder.ProductionVersion,
      @ObjectModel.text.element: ['MaterialProcurementCatName']
      @Consumption.valueHelpDefinition: [{entity:{name:'I_MatlProcurementCategory' , element: 'MaterialProcurementCategory'}, useAsTemplate: true }]
      PlannedOrder.MaterialProcurementCategory,
      @ObjectModel.text.element: ['MaterialProcurementTypeName']
      PlannedOrder.MaterialProcurementType,
      @ObjectModel.text.element: ['StorageLocationName']
      PlannedOrder.StorageLocation,
      
    
      // Quantities and UoM
      //@Semantics.unitOfMeasure: true
      @Consumption.filter.hidden: true
      PlannedOrder.BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Consumption.filter.hidden: true
      PlannedOrder.TotalQuantity,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Consumption.filter.hidden: true
      PlannedOrder.PlndOrderPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Consumption.filter.hidden: true
      PlannedOrder.GoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Consumption.filter.hidden: true
      PlannedOrder.IssuedQuantity,

      //DATES/TIMES
      PlannedOrder.PlndOrderPlannedStartDate,
      PlannedOrder.PlndOrderPlannedStartTime,
      PlannedOrder.PlndOrderPlannedEndDate,
      PlannedOrder.PlndOrderPlannedEndTime,
      PlannedOrder.PlannedOrderOpeningDate,

      //@Semantics.systemDateTime.lastChangedAt: true
      @Consumption.filter.hidden: true
      PlannedOrder.PlannedOrderLastChangeDateTime,
      
      @EndUserText.label: 'Production Start Date'
      PlannedOrder.ProductionStartDate,
      PlannedOrder.ProductionEndDate,

      //ASSIGNMENTS
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' }, useAsTemplate: true ,
//      additionalBinding: [{localElement: 'SalesOrderItem', element: 'SalesOrderItem', usage: #FILTER_AND_RESULT }],
      distinctValues: true  }]                           
      @Consumption.filter:{ multipleSelections: true }  
      PlannedOrder.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' }, useAsTemplate: true,
      additionalBinding: [{localElement: 'SalesOrder', element: 'SalesOrder', usage: #FILTER_AND_RESULT }], distinctValues: true }]                       
      @Consumption.filter:{ multipleSelections: true }    
      PlannedOrder.SalesOrderItem,
      @ObjectModel.text.element: ['CustomerName']
      PlannedOrder.Customer,

      //      WBSElementInternalID,
      //@Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' }, useAsTemplate: true } ]
      @Consumption.filter.hidden: true
      PlannedOrder.WBSElementInternalID,
      //_WBSElement.WBSElement,
      //PlannedOrder._WBSElementBasic.WBSElementExternalID, -> TBD
      //@Semantics.text: true
      //PlannedOrder._WBSElementBasic.WBSDescription, -> TBD
      @ObjectModel.text.element: ['WBSDescription']
//    No C1 released for cloud development      
//    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementExternalID' }, useAsTemplate: true } ]
      PlannedOrder.WBSElementExternalID,
      PlannedOrder.WBSDescription,
      
      //Long Text
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.PlannedOrderLongText,
      @ObjectModel.text.element: ['AcctAssignmentCategoryName']
      @EndUserText.label: 'Acct Assignment Category Description'
      PlannedOrder.AccountAssignmentCategory,
      PlannedOrder.Reservation,

      //RESPONSIBILITIES
      @ObjectModel.text.element: ['MRPControllerName']
      @Consumption.valueHelpDefinition: [{entity:{name:'I_MRPControllerVH' , element: 'MRPController'}, useAsTemplate: true }]
      PlannedOrder.MRPController,
      @Consumption.filter.hidden: true
      PlannedOrder.MRPControllerName,
      @ObjectModel.text.element: ['ProductionSupervisorName']
//    No released value help available  
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlndOrderProdnSupervisorVH', element: 'ProductionSupervisor' }, useAsTemplate: true ,
      additionalBinding: [{localElement: 'MRPPlant', element: 'Plant', usage: #FILTER_AND_RESULT }], distinctValues: true }] 
      PlannedOrder.ProductionSupervisor,

      //PURCHASINGORGANIZATION
      @ObjectModel.text.element: ['PurchasingOrganizationName']
      PlannedOrder.PurchasingOrganization,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true  } ]
      @ObjectModel.text.element: ['SupplierName']
      PlannedOrder.FixedSupplier,
      
      // PlannedOrder.PurchasingDocument,     - PO in discussion
      // PlannedOrder.PurchasingDocumentItem, - PO in discussion
     
      PlannedOrder.QuotaArrangement,
      PlannedOrder.QuotaArrangementItem,

      // OTHERS
      PlannedOrder.PlannedOrderIsFirm,
//    no ValueHelp available      
//    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Indicator', element: 'IndicatorValue' } , useAsTemplate: true } ]
      PlannedOrder.PlannedOrderIsConvertible,
      PlannedOrder.PlannedOrderBOMIsFixed,
      PlannedOrder.PlannedOrderCapacityIsDsptchd,

      //CAPACITY
      PlannedOrder.CapacityRequirement,
      PlannedOrder.BillOfOperationsVariant,  //Make it READ ONLY in BDEF of R view
      
      //Production start/end date and time
      PlannedOrder.ScheduledBasicStartDate,
      PlannedOrder.ScheduledBasicStartTime,
      PlannedOrder.ScheduledBasicEndDate,
      PlannedOrder.ScheduledBasicEndTime,
      // Gr_processing Time
      PlannedOrder.MaterialGoodsReceiptDuration,
     //exposing below fields for custom ui service
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.MaterialName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.PlannedOrderTypeName,
//      @Semantics.text: true
//      PlannedOrder.PlannedOrderCategoryName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.MRPAreaText,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.MRPPlantName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.ProductionPlantName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.MaterialProcurementCatName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      @EndUserText.label: 'Prodn Version Text'
      PlannedOrder.ProductionVersionText,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      @EndUserText.label: 'Prodn Supervisor Name'
      PlannedOrder.ProductionSupervisorName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.SupplierName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.CustomerName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.MaterialProcurementTypeName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.PurchasingOrganizationName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.StorageLocationName,
      @Semantics.text: true
      @Consumption.filter.hidden: true
      PlannedOrder.AcctAssignmentCategoryName,
      
      
      /* Associations */
      PlannedOrder._Supplier, //for DCL purpose
      PlannedOrder._PlannedOrderComponent : redirected to composition child I_PlannedOrderComponentTP,
      PlannedOrder._PlannedOrderCapacity  : redirected to composition child I_PlannedOrderCapacityTP

}
```
