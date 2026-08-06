---
name: I_PHYSINVTRYCUBE
description: Physinvtrycube
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - analytical
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYCUBE

**Physinvtrycube**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FiscalYear` | `FiscalYear` |
| key `PhysicalInventoryDocument` | `PhysicalInventoryDocument` |
| key `PhysicalInventoryDocumentItem` | `PhysicalInventoryDocumentItem` |
| `Plant` | `Plant` |
| `StorageLocation` | `StorageLocation` |
| `Material` | `Material` |
| `RealProductBatch` | `RealProductBatch` |
| `Batch` | `Batch` |
| `ValuationType` | `ValuationType` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `PhysicalInventoryStockType` | `PhysicalInventoryStockType` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `ScheduleLine` | `ScheduleLine` |
| `Supplier` | `Supplier` |
| `Customer` | `Customer` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `PhysicalInventoryItemIsCounted` | `PhysicalInventoryItemIsCounted` |
| `PhysInvtryDifferenceIsPosted` | `PhysInvtryDifferenceIsPosted` |
| `PhysInvtryItemIsRecounted` | `PhysInvtryItemIsRecounted` |
| `PhysInvtryItemIsDeleted` | `PhysInvtryItemIsDeleted` |
| `CycleCountType` | `CycleCountType` |
| `PhysicalInventoryType` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryType` |
| `InventoryTransactionType` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.InventoryTransactionType` |
| `GoodsMovementType` | `GoodsMovementType` |
| `PostingIsBlockedForPhysInvtry` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PostingIsBlockedForPhysInvtry` |
| `PhysInvtryDocHasQtySnapshot` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysInvtryDocHasQtySnapshot` |
| `PhysicalInventoryLastCountDate` | `PhysicalInventoryLastCountDate` |
| `PostingDate` | `PostingDate` |
| `ReasonForPhysInvtryDifference` | `ReasonForPhysInvtryDifference` |
| `DocumentDate` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.DocumentDate` |
| `LastChangeDate` | `LastChangeDate` |
| `PhysInventoryPlannedCountDate` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysInventoryPlannedCountDate` |
| `FiscalPeriod` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.FiscalPeriod` |
| `PhysInvtryDiffIsDistributed` | `PhysInvtryDiffIsDistributed` |
| `Currency` | `Currency` |
| `PhysicalInventoryGroupType` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryGroupType` |
| `PhysicalInventoryGroup` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryGroup` |
| `PhysicalInventoryNumber` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryNumber` |
| `PhysicalInventoryDocumentDesc` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryDocumentDesc` |
| `PhysInventoryReferenceNumber` | `PhysInventoryReferenceNumber` |
| `MaterialDocumentYear` | `MaterialDocumentYear` |
| `MaterialDocument` | `MaterialDocument` |
| `MaterialDocumentItem` | `MaterialDocumentItem` |
| `PhysInvtryRecountDocument` | `PhysInvtryRecountDocument` |
| `IsValueOnlyMaterial` | `IsValueOnlyMaterial` |
| `IsHandledInAltvUnitOfMsr` | `IsHandledInAltvUnitOfMsr` |
| `ProductCategory` | `ProductCategory` |
| `CrossPlantConfigurableMaterial` | `CrossPlantConfigurableMaterial` |
| `SalesPriceValuationIsActive` | `I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.SalesPriceValuationIsActive` |
| `BookQtyBfrCountInMatlBaseUnit` | `BookQtyBfrCountInMatlBaseUnit` |
| `PhysicalInventoryItemIsZero` | `PhysicalInventoryItemIsZero` |
| `Quantity` | `Quantity` |
| `MaterialBaseUnit` | `MaterialBaseUnit` |
| `QuantityInUnitOfEntry` | `QuantityInUnitOfEntry` |
| `DifferenceQuantityInBaseUnit` | `DifferenceQuantityInBaseUnit` |
| `UnitOfEntry` | `UnitOfEntry` |
| `DiffSlsPrcAmtInCoCodeCrcy` | `DiffSlsPrcAmtInCoCodeCrcy` |
| `EnteredSlsAmtInCoCodeCrcy` | `EnteredSlsAmtInCoCodeCrcy` |
| `SlsPriceAmountInCoCodeCrcy` | `SlsPriceAmountInCoCodeCrcy` |
| `PhysInvtryCtAmtInCoCodeCrcy` | `PhysInvtryCtAmtInCoCodeCrcy` |
| `BookQtyAmountInCoCodeCrcy` | `BookQtyAmountInCoCodeCrcy` |
| `DifferenceAmountInCoCodeCrcy` | `DifferenceAmountInCoCodeCrcy` |
| `MaxAbsDiffAmountInCoCodeCrcy` | `MaxAbsDiffAmountInCoCodeCrcy` |
| `MinAbsDiffAmountInCoCodeCrcy` | `MinAbsDiffAmountInCoCodeCrcy` |
| `NumberOfPhysInvtryItems` | `NumberOfPhysInvtryItems` |
| `_PhysInvtryType` | *Association* |
| `_InventoryTransactionType` | *Association* |
| `_Product` | *Association* |
| `_ProductPlantExt` | *Association* |
| `_Batch` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_WBSElement` | *Association* |
| `_AdjmtPostingMovementType` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |
| `_Material` | *Association* |
| `_ProductPlant` | *Association* |
| `_ProductStorageLocation` | *Association* |
| `_CrossPlantConfigurableMatl` | *Association* |
| `_MaterialBaseUnit` | *Association* |
| `_Currency` | *Association* |
| `_UnitOfEntry` | *Association* |
| `_PhysicalInventoryStockType` | *Association* |
| `_ProductCategory` | *Association* |
| `_GoodsMovementType` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |
| `_CustomerCompanyByPlant` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PhysInvtryType` | `I_PhysInvtryType` | [0..1] |
| `_InventoryTransactionType` | `I_StockTakingTransactionType` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductPlantExt` | `I_ProductPlant` | [1..1] |
| `_Batch` | `I_Batch` | [1..1] |
| `_Extension` | `E_PhysInvtryDocumentItem` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Physical Inventory - Cube'
@AccessControl:{
                 authorizationCheck: #CHECK,
                 personalData.blocking: #BLOCKED_DATA_EXCLUDED
               }
@ObjectModel: {
                usageType: {
                             sizeCategory: #XL,
                             serviceQuality: #C,
                             dataClass:#TRANSACTIONAL
                           },
                modelingPattern: #ANALYTICAL_CUBE,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics:{
             dataCategory: #CUBE,
             internalName: #LOCAL,
             technicalName: 'IPHYINVTRYCUBE' 
           }
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view entity I_PhysInvtryCube
 as select from I_AugmentedPhysInvtryDocItem
 
    association [0..1] to I_PhysInvtryType             as _PhysInvtryType            on  $projection.PhysicalInventoryType = _PhysInvtryType.PhysicalInventoryType

    association [0..1] to I_StockTakingTransactionType as _InventoryTransactionType  on  $projection.InventoryTransactionType = _InventoryTransactionType.InventoryTransactionType
 
    // Datasource extensibility
    association [1..1] to I_Product          as _Product          on  $projection.Material = _Product.Product
    association [1..1] to I_ProductPlant     as _ProductPlantExt  on  $projection.Material = _ProductPlantExt.Product 
                                                                  and $projection.Plant    = _ProductPlantExt.Plant 
    association [1..1] to I_Batch            as _Batch            on  $projection.Material = _Batch.Material          
                                                                  and $projection.Plant    = _Batch.Plant                                                                                                                                                  
                                                                  and $projection.Batch    = _Batch.Batch  
    
    // Custom Fields extensibility  
    association [0..1] to E_PhysInvtryDocumentItem    as _Extension                  on  $projection.FiscalYear = _Extension.FiscalYear
                                                                                    and  $projection.PhysicalInventoryDocument = _Extension.PhysicalInventoryDocument
                                                                                    and  $projection.PhysicalInventoryDocumentItem = _Extension.PhysicalInventoryDocumentItem
                                                                           
  {
      // Key
      @Semantics.calendar.year: true
  key FiscalYear,
  key PhysicalInventoryDocument,
  key PhysicalInventoryDocumentItem,
      
      @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName: #GLOBAL                  //required because the app has an own component configuration UIBB defiend which uses the old SQL name of this filter
      Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      @Analytics.internalName: #GLOBAL                  //required because the app has an own component configuration UIBB defiend which uses the old SQL name of this filter
      StorageLocation,
      @ObjectModel.foreignKey.association: '_Material'  
      @Analytics.internalName: #GLOBAL                  //required because the app has an own component configuration UIBB defiend which uses the old SQL name of this filter
      Material,      
      RealProductBatch,
      Batch,
      ValuationType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_PhysicalInventoryStockType'     
      PhysicalInventoryStockType,
      @ObjectModel.foreignKey.association: null
      SalesOrder,
      @ObjectModel.foreignKey.association: null
      SalesOrderItem,
      @ObjectModel.foreignKey.association: null
      ScheduleLine,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      WBSElementInternalID,

      // Status
      PhysicalInventoryItemIsCounted,
      PhysInvtryDifferenceIsPosted,
      PhysInvtryItemIsRecounted,
      PhysInvtryItemIsDeleted, 

      // Process Types
      CycleCountType,
      @ObjectModel.foreignKey.association: '_PhysInvtryType'
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryType                as PhysicalInventoryType,
      @ObjectModel.foreignKey.association: '_InventoryTransactionType'
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.InventoryTransactionType             as InventoryTransactionType,       
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      GoodsMovementType,

      // Processing Data
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PostingIsBlockedForPhysInvtry        as PostingIsBlockedForPhysInvtry,  
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysInvtryDocHasQtySnapshot          as PhysInvtryDocHasQtySnapshot,    
      @Semantics.businessDate.at: true
      PhysicalInventoryLastCountDate,
      @Semantics.businessDate.at: true
      PostingDate,
      ReasonForPhysInvtryDifference,
      @Semantics.businessDate.at: true
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.DocumentDate                         as DocumentDate,
      @Semantics.businessDate.at: true                   
      LastChangeDate,
      @Semantics.businessDate.at: true
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysInventoryPlannedCountDate        as PhysInventoryPlannedCountDate, 
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.FiscalPeriod                         as FiscalPeriod,                                           
      PhysInvtryDiffIsDistributed,

      Currency,

      // References
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryGroupType           as PhysicalInventoryGroupType,     
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryGroup               as PhysicalInventoryGroup,         
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryNumber              as PhysicalInventoryNumber,        
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.PhysicalInventoryDocumentDesc        as PhysicalInventoryDocumentDesc,  
      PhysInventoryReferenceNumber,
      MaterialDocumentYear,
      MaterialDocument,
      MaterialDocumentItem,
      PhysInvtryRecountDocument,

      // Material Types
      IsValueOnlyMaterial,
      IsHandledInAltvUnitOfMsr,
      @ObjectModel.foreignKey.association: '_ProductCategory'
      ProductCategory,
      @ObjectModel.foreignKey.association: '_CrossPlantConfigurableMatl'
      CrossPlantConfigurableMaterial,
      I_AugmentedPhysInvtryDocItem._PhysInvtryDocHeader.SalesPriceValuationIsActive,     

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      BookQtyBfrCountInMatlBaseUnit,
      PhysicalInventoryItemIsZero,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      Quantity,
      @ObjectModel.foreignKey.association: '_MaterialBaseUnit'
      MaterialBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'UnitOfEntry'
      @DefaultAggregation:#SUM
      QuantityInUnitOfEntry,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      DifferenceQuantityInBaseUnit,
      @ObjectModel.foreignKey.association: '_UnitOfEntry'
      UnitOfEntry,
      
      // Amounts
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      DiffSlsPrcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      EnteredSlsAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      SlsPriceAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      PhysInvtryCtAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      BookQtyAmountInCoCodeCrcy,      
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #SUM
      DifferenceAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #MAX
      MaxAbsDiffAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @DefaultAggregation: #MIN
      MinAbsDiffAmountInCoCodeCrcy,

      // Counts
      @DefaultAggregation: #SUM
      NumberOfPhysInvtryItems,                                    
              
    _Plant,                 
    _StorageLocation,                     
    _InventorySpecialStockType,        
    _PhysInvtryType,            
    _InventoryTransactionType,        
    _WBSElement,                
    _AdjmtPostingMovementType,
    _Supplier,                  
    _Customer,   
    _Material,
    _ProductPlant,
    _ProductStorageLocation,
    _CrossPlantConfigurableMatl,
    _MaterialBaseUnit,
    _Currency,
    _UnitOfEntry,
    _PhysicalInventoryStockType,
    _ProductCategory,
    _GoodsMovementType,
    
    @Consumption.hidden: true
    _SupplierCompanyByPlant,
    @Consumption.hidden: true
    _CustomerCompanyByPlant,
      
    // Datasource extensibility
    @Consumption.filter.hidden: true
    _Product,
    @Consumption.filter.hidden: true
    _ProductPlantExt, 
    @Consumption.filter.hidden: true
    _Batch      
 }
```
