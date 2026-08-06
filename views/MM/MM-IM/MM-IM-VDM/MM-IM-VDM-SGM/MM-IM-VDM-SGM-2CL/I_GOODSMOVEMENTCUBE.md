---
name: I_GOODSMOVEMENTCUBE
description: Goods MovementCUBE
app_component: MM-IM-VDM-SGM-2CL
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
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_GOODSMOVEMENTCUBE

**Goods MovementCUBE**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| key `MaterialDocument` | `MaterialDocument` |
| key `MaterialDocumentItem` | `MaterialDocumentItem` |
| key `MaterialDocumentRecordType` | `MaterialDocumentRecordType` |
| `Plant` | `Plant` |
| `StorageLocation` | `StorageLocation` |
| `Material` | `Material` |
| `Batch` | `Batch` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `InventoryStockType` | `InventoryStockType` |
| `StockOwner` | `StockOwner` |
| `CompanyCode` | `CompanyCode` |
| `InventorySpecialStockValnType` | `InventorySpecialStockValnType` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `MaterialBaseUnit` | `MaterialBaseUnit` |
| `IsReversalMovementType` | `IsReversalMovementType` |
| `MaterialGroup` | `I_AugmentedGoodsMovement._Material.MaterialGroup` |
| `MaterialType` | `I_AugmentedGoodsMovement._Material.MaterialType` |
| `IssuingOrReceivingPlant` | `IssuingOrReceivingPlant` |
| `IssuingOrReceivingStorageLoc` | `IssuingOrReceivingStorageLoc` |
| `IssgOrRcvgMaterial` | `IssgOrRcvgMaterial` |
| `IssgOrRcvgBatch` | `IssgOrRcvgBatch` |
| `IssgOrRcvgSpclStockInd` | `IssgOrRcvgSpclStockInd` |
| `IssuingOrReceivingStockType` | `IssuingOrReceivingStockType` |
| `ResourceID` | `ResourceID` |
| `IssgOrRcvgResourceID` | `IssgOrRcvgResourceID` |
| `GoodsMovementIsCancelled` | `GoodsMovementIsCancelled` |
| `GoodsMovementCancellationType` | `GoodsMovementCancellationType` |
| `DocumentDate` | `DocumentDate` |
| `PostingDate` | `PostingDate` |
| `FiscalYearVariant` | `FiscalYearVariant` |
| `FiscalYear` | `FiscalYear` |
| `FiscalYearPeriod` | `FiscalYearPeriod` |
| `YearDay` | `YearDay` |
| `YearWeek` | `YearWeek` |
| `YearMonth` | `YearMonth` |
| `YearQuarter` | `YearQuarter` |
| `CalendarQuarter` | `CalendarQuarter` |
| `CalendarMonth` | `CalendarMonth` |
| `CalendarWeek` | `CalendarWeek` |
| `CalendarDay` | `CalendarDay` |
| `WeekDay` | `WeekDay` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `SalesOrderScheduleLine` | `SalesOrderScheduleLine` |
| `PurchaseOrder` | `PurchaseOrder` |
| `PurchaseOrderItem` | `PurchaseOrderItem` |
| `DeliveryDocument` | `DeliveryDocument` |
| `DeliveryDocumentItem` | `DeliveryDocumentItem` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `ManufacturingOrder` | `ManufacturingOrder` |
| `ManufacturingOrderItem` | `ManufacturingOrderItem` |
| `PurchasingGroup` | `I_AugmentedGoodsMovement._PurchaseOrder.PurchasingGroup` |
| `PurchasingOrganization` | `cast(I_AugmentedGoodsMovement._PurchaseOrder.PurchasingOrganization as nsdm_ekorg preserving type)` |
| `SalesOrganization` | `I_AugmentedGoodsMovement._SalesOrder.SalesOrganization` |
| `DistributionChannel` | `I_AugmentedGoodsMovement._SalesOrder.DistributionChannel` |
| `OrganizationDivision` | `cast(I_AugmentedGoodsMovement._SalesOrder.OrganizationDivision as nsdm_sales_division preserving type)` |
| `SalesGroup` | `I_AugmentedGoodsMovement._SalesOrder.SalesGroup` |
| `GoodsMovementType` | `GoodsMovementType` |
| `GoodsMovementReasonCode` | `GoodsMovementReasonCode` |
| `InventoryValuationType` | `InventoryValuationType` |
| `Supplier` | `Supplier` |
| `Customer` | `Customer` |
| `AccountAssignmentCategory` | `AccountAssignmentCategory` |
| `CostObject` | `CostObject` |
| `CostCenter` | `CostCenter` |
| `ControllingArea` | `ControllingArea` |
| `ProfitabilitySegment` | `ProfitabilitySegment` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `ProfitCenter` | `ProfitCenter` |
| `GLAccount` | `GLAccount` |
| `FunctionalArea` | `FunctionalArea` |
| `StockChangeCategory` | `StockChangeCategory` |
| `IsEffectiveGoodsMovement` | `IsEffectiveGoodsMovement` |
| `IsConsumptionMovement` | `IsConsumptionMovement` |
| `IsCrossPlantTransfer` | `IsCrossPlantTransfer` |
| `IsStorageLocChangeByTransf` | `IsStorageLocChangeByTransf` |
| `IsMaterialChangeByTransf` | `IsMaterialChangeByTransf` |
| `IsBatchChangeByTransf` | `IsBatchChangeByTransf` |
| `IsSpclStkTypeChangeByTransf` | `IsSpclStkTypeChangeByTransf` |
| `IsStockTypeChangeByTransf` | `IsStockTypeChangeByTransf` |
| `NumberOfGoodsMovements` | `NumberOfGoodsMovements` |
| `NumberOfGoodsIssues` | `NumberOfGoodsIssues` |
| `NumberOfGoodsReceipts` | `NumberOfGoodsReceipts` |
| `GoodsMovementStkAmtInCCCrcy` | `GoodsMovementStkAmtInCCCrcy` |
| `GoodsMvtCnsmpnAmtInCCCrcy` | `GoodsMvtCnsmpnAmtInCCCrcy` |
| `GoodsIssueAmountInCoCodeCrcy` | `GoodsIssueAmountInCoCodeCrcy` |
| `GoodsReceiptAmountInCoCodeCrcy` | `GoodsReceiptAmountInCoCodeCrcy` |
| `MatlStkChangeQtyInBaseUnit` | `MatlStkChangeQtyInBaseUnit` |
| `MatlCnsmpnQtyInMatlBaseUnit` | `MatlCnsmpnQtyInMatlBaseUnit` |
| `MinCnsmpnQtyInBaseUnit` | `cast( abs(MatlCnsmpnQtyInMatlBaseUnit) as nsdm_min_cons_qty preserving type)` |
| `MaxCnsmpnQtyInBaseUnit` | `cast( abs(MatlCnsmpnQtyInMatlBaseUnit) as nsdm_max_cons_qty preserving type)` |
| `GoodsIssueQtyInBaseUnit` | `GoodsIssueQtyInBaseUnit` |
| `MinGoodsIssueQtyInBaseUnit` | `cast( abs(GoodsIssueQtyInBaseUnit) as nsdm_min_gi_qty preserving type)` |
| `MaxGoodsIssueQtyInBaseUnit` | `cast( abs(GoodsIssueQtyInBaseUnit) as nsdm_max_gi_qty preserving type)` |
| `GoodsReceiptQtyInBaseUnit` | `GoodsReceiptQtyInBaseUnit` |
| `MinGoodsRcptQtyInBaseUnit` | `cast( abs(GoodsReceiptQtyInBaseUnit) as nsdm_min_gr_qty preserving type)` |
| `MaxGoodsRcptQtyInBaseUnit` | `cast( abs(GoodsReceiptQtyInBaseUnit) as nsdm_max_gr_qty preserving type)` |
| `TotalGdsMvtQtyInBaseUnit` | `TotalGdsMvtQtyInBaseUnit` |
| `FirstGoodsMovementPostingDate` | `cast ( PostingDate as nsdm_first_mvt_posting_date preserving type)` |
| `LastGoodsMovementPostingDate` | `cast ( PostingDate as nsdm_last_mvt_posting_date preserving type)` |
| `IsStorLocAuthznCheckActive` | `IsStorLocAuthznCheckActive` |
| `IsIssgOrRcvgStorLocAuthChkActv` | `IsIssgOrRcvgStorLocAuthChkActv` |
| `_PurchasingGroup` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesGroup` | *Association* |
| `_Product` | *Association* |
| `_ProductPlant` | *Association* |
| `_Batch` | *Association* |
| `_MaterialType` | *Association* |
| `_MaterialGroup` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_Material` | *Association* |
| `_InventorySpecialStockType` | *Association* |
| `_InventoryStockType` | *Association* |
| `_IssgOrRcvgMaterial` | *Association* |
| `_IssuingOrReceivingPlant` | *Association* |
| `_IssuingOrReceivingStorageLoc` | *Association* |
| `_IssgOrRcvgSpclStockInd` | *Association* |
| `_IssuingOrReceivingStockType` | *Association* |
| `_CostCenter` | *Association* |
| `_ControllingArea` | *Association* |
| `_AccountAssignmentCategory` | *Association* |
| `_ProfitCenter` | *Association* |
| `_GLAccount` | *Association* |
| `_FunctionalArea` | *Association* |
| `_GoodsMovementType` | *Association* |
| `_GoodsMovementReasonCode` | *Association* |
| `_InventoryValuationType` | *Association* |
| `_CompanyCode` | *Association* |
| `_Currency` | *Association* |
| `_MaterialBaseUnit` | *Association* |
| `_StockChangeCategory` | *Association* |
| `_Customer` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |
| `_CustomerCompanyByPlant` | *Association* |
| `_BPStockOwner` | *Association* |
| `_ResourceBasic` | *Association* |
| `_IssgOrRcvgResourceBasic` | *Association* |
| `_CancelationType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_ProcessExtension` | `E_MaterialDocumentItem` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductPlant` | `I_ProductPlant` | [1..1] |
| `_Batch` | `I_Batch` | [1..1] |
| `_MaterialType` | `I_MaterialType` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Analytics of Goods Movements - Cube'
@AccessControl: {
                  authorizationCheck: #CHECK,
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED,
                  auditFilter: #ENABLED
                }
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
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
@Analytics.dataCategory: #CUBE
@Analytics.technicalName: 'IGOODSMVMTCUBE'
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view entity I_GoodsMovementCube 
  as select from I_AugmentedGoodsMovement 
  
  association [0..1] to I_PurchasingGroup           as _PurchasingGroup               on  $projection.purchasinggroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_PurchasingOrganization    as _PurchasingOrganization        on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_SalesOrganization         as _SalesOrganization             on  $projection.salesorganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel       as _DistributionChannel           on  $projection.distributionchannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                  as _Division                      on  $projection.OrganizationDivision = _Division.Division
  association [0..1] to I_SalesGroup                as _SalesGroup                    on  $projection.salesgroup = _SalesGroup.SalesGroup
  association [1..1] to E_MaterialDocumentItem      as _ProcessExtension              on  $projection.MaterialDocument = _ProcessExtension.MaterialDocument
                                                                                      and $projection.MaterialDocumentYear = _ProcessExtension.MaterialDocumentYear
                                                                                      and $projection.MaterialDocumentItem = _ProcessExtension.MaterialDocumentItem
                                                                                      and $projection.MaterialDocumentRecordType = _ProcessExtension.MaterialDocumentRecordType

 // Datasource extensibility
  association [1..1] to I_Product          as _Product          on  $projection.Material = _Product.Product
  association [1..1] to I_ProductPlant     as _ProductPlant     on  $projection.Material = _ProductPlant.Product 
                                                                and $projection.Plant    = _ProductPlant.Plant 
  association [1..1] to I_Batch            as _Batch            on  $projection.Material = _Batch.Material          
                                                                and $projection.Plant    = _Batch.Plant                                                                                                                                                  
                                                                and $projection.Batch    = _Batch.Batch  
  association [0..1] to I_MaterialType  as _MaterialType        on $projection.materialtype = _MaterialType.MaterialType
  association [0..1] to I_MaterialGroup as _MaterialGroup       on $projection.materialgroup = _MaterialGroup.MaterialGroup                                                             

{
  
  @Semantics.calendar.year: true
  key MaterialDocumentYear,
  key MaterialDocument,
  key MaterialDocumentItem,
  @Consumption.filter.hidden: true
  key MaterialDocumentRecordType,
    
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      Batch,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventoryStockType'
      InventoryStockType,
      @ObjectModel.foreignKey.association: '_BPStockOwner'
      StockOwner,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      InventorySpecialStockValnType,
      CompanyCodeCurrency,
      MaterialBaseUnit,
      IsReversalMovementType,
      
      // externally associated properties required for drill-down
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      I_AugmentedGoodsMovement._Material.MaterialGroup,
      @ObjectModel.foreignKey.association: '_MaterialType'
      I_AugmentedGoodsMovement._Material.MaterialType,
      
      // Stock Transfers
      // We do not show the plant nor storage location due to access restrictions which would have to be in place on the target
      // and might filter rows which would otherwise bis visible. As long as an property based access restriction does not
      // exist in CDS, we will go for this way.
      @ObjectModel.foreignKey.association: '_IssuingOrReceivingPlant'
      IssuingOrReceivingPlant,
      @ObjectModel.foreignKey.association: '_IssuingOrReceivingStorageLoc'
      IssuingOrReceivingStorageLoc,
      @ObjectModel.foreignKey.association: '_IssgOrRcvgMaterial'
      IssgOrRcvgMaterial,
      IssgOrRcvgBatch,
      @ObjectModel.foreignKey.association: '_IssgOrRcvgSpclStockInd'
      IssgOrRcvgSpclStockInd,
      @ObjectModel.foreignKey.association: '_IssuingOrReceivingStockType'
      IssuingOrReceivingStockType,
      
      ResourceID,
      IssgOrRcvgResourceID,
      
      // Cancellation information
      GoodsMovementIsCancelled,
      @ObjectModel.foreignKey.association: '_CancelationType'
      GoodsMovementCancellationType,
      
      // Periods & Times
      @Semantics.businessDate.at: true
      DocumentDate,
      @Semantics.businessDate.at: true
      PostingDate,
      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,
      FiscalYear,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      YearDay,
      @Semantics.calendar.yearWeek: true
      YearWeek,
      @Semantics.calendar.yearMonth: true
      YearMonth,
      @Semantics.calendar.yearQuarter: true
      YearQuarter,
      @Semantics.calendar.quarter: true
      CalendarQuarter,
      @Semantics.calendar.month: true
      CalendarMonth,
      @Semantics.calendar.week: true
      CalendarWeek,
      @Semantics.calendar.dayOfYear: true
      CalendarDay,
      WeekDay,      
      
      // Reference Documents - must not refer to transaction dimension views (target dimension DLC would not be considered!)
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,
      PurchaseOrder,
      PurchaseOrderItem,
      DeliveryDocument,
      DeliveryDocumentItem,
      WBSElementInternalID,
      ManufacturingOrder,
      ManufacturingOrderItem,
      
      // Master Data fields out of the Reference Documents
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      I_AugmentedGoodsMovement._PurchaseOrder.PurchasingGroup,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      cast(I_AugmentedGoodsMovement._PurchaseOrder.PurchasingOrganization as nsdm_ekorg preserving type) as PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      I_AugmentedGoodsMovement._SalesOrder.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      I_AugmentedGoodsMovement._SalesOrder.DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      cast(I_AugmentedGoodsMovement._SalesOrder.OrganizationDivision as nsdm_sales_division preserving type) as OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      I_AugmentedGoodsMovement._SalesOrder.SalesGroup,
      
      // Other
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      GoodsMovementType,
      @ObjectModel.foreignKey.association: '_GoodsMovementReasonCode'
      GoodsMovementReasonCode,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      InventoryValuationType,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      AccountAssignmentCategory,
      CostObject,
      CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'  
      ControllingArea, // required to fulfill requirement to expose the full key (for cost center association)  
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2,
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_GLAccount'
      GLAccount,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      
      // Classifications
      @ObjectModel.foreignKey.association: '_StockChangeCategory'
      StockChangeCategory,
      IsEffectiveGoodsMovement,
      IsConsumptionMovement,
      IsCrossPlantTransfer,
      IsStorageLocChangeByTransf,
      IsMaterialChangeByTransf,
      IsBatchChangeByTransf,
      IsSpclStkTypeChangeByTransf,
      IsStockTypeChangeByTransf,
      
      // Counts
      @DefaultAggregation: #SUM
      NumberOfGoodsMovements,
      @DefaultAggregation: #SUM
      NumberOfGoodsIssues,
      @DefaultAggregation: #SUM
      NumberOfGoodsReceipts,
      
      // Amounts
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GoodsMovementStkAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GoodsMvtCnsmpnAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GoodsIssueAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GoodsReceiptAmountInCoCodeCrcy,
      
      // Quantities
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      MatlStkChangeQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      MatlCnsmpnQtyInMatlBaseUnit,      
      
      // Consumption Quantity KPIs
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MIN
      cast( abs(MatlCnsmpnQtyInMatlBaseUnit) as nsdm_min_cons_qty preserving type) as MinCnsmpnQtyInBaseUnit, 
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MAX
      cast( abs(MatlCnsmpnQtyInMatlBaseUnit) as nsdm_max_cons_qty preserving type) as MaxCnsmpnQtyInBaseUnit, 
           
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      GoodsIssueQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MIN
      cast( abs(GoodsIssueQtyInBaseUnit) as nsdm_min_gi_qty preserving type) as MinGoodsIssueQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MAX
      cast( abs(GoodsIssueQtyInBaseUnit) as nsdm_max_gi_qty preserving type) as MaxGoodsIssueQtyInBaseUnit,
            
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      GoodsReceiptQtyInBaseUnit,   
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MIN
      cast( abs(GoodsReceiptQtyInBaseUnit) as nsdm_min_gr_qty preserving type) as MinGoodsRcptQtyInBaseUnit,   
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MAX
      cast( abs(GoodsReceiptQtyInBaseUnit) as nsdm_max_gr_qty preserving type) as MaxGoodsRcptQtyInBaseUnit,   

      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      TotalGdsMvtQtyInBaseUnit,      
      
      // Times
      @DefaultAggregation: #MIN
      cast ( PostingDate as nsdm_first_mvt_posting_date preserving type) as FirstGoodsMovementPostingDate,
      @DefaultAggregation: #MAX
      cast ( PostingDate as nsdm_last_mvt_posting_date preserving type) as LastGoodsMovementPostingDate,
      
      // Authorization check relevant fields
      @Consumption.hidden: true
      IsStorLocAuthznCheckActive,
      @Consumption.hidden: true
      IsIssgOrRcvgStorLocAuthChkActv,
      
      // Master Data Associations of the Dimension View
      _Plant,
      _StorageLocation,
      _Material,
      _MaterialGroup,
      _MaterialType,
      _InventorySpecialStockType,
      _InventoryStockType,
      _IssgOrRcvgMaterial,
      _IssuingOrReceivingPlant,
      _IssuingOrReceivingStorageLoc,
      _IssgOrRcvgSpclStockInd,
      _IssuingOrReceivingStockType,
      _CostCenter,
      _ControllingArea,
      _AccountAssignmentCategory,
      _ProfitCenter,
      _GLAccount,
      _FunctionalArea,
      
      _GoodsMovementType,
      _GoodsMovementReasonCode,
      _InventoryValuationType,
      _CompanyCode,
      _Currency,
      _MaterialBaseUnit,
      _StockChangeCategory,
      
      // additionally defined associations
      _Customer,
      _Supplier,
      _SupplierCompanyByPlant,
      _CustomerCompanyByPlant,
      _BPStockOwner,
      _PurchasingGroup,
      _PurchasingOrganization,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesGroup,
      
      _ResourceBasic,
      _IssgOrRcvgResourceBasic,
      _CancelationType,
      
     // Datasource extensibility
     @Consumption.filter.hidden: true
     _Product,
     @Consumption.filter.hidden: true
     _ProductPlant, 
     @Consumption.filter.hidden: true
     _Batch          
      
}
```
