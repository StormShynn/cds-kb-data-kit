---
name: I_PRODUCTIONORDERCOMPONENT
description: Production OrderCOMPONENT
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERCOMPONENT

**Production OrderCOMPONENT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Reservation` | `comp.Reservation` |
| key `ReservationItem` | `comp.ReservationItem` |
| key `ReservationRecordType` | `comp.RecordType` |
| `MaterialGroup` | `comp.MaterialGroup` |
| `Material` | `comp.Material` |
| `Plant` | `comp.Plant` |
| `ProductionOrderType` | `cast(comp.OrderType as vdm_prodnordertype preserving type)` |
| `ProductionOrder` | `cast(comp.OrderID as vdm_manufacturingorder preserving type)` |
| `ProductionOrderSequence` | `cast(comp.Sequence as vdm_prodnordersequence preserving type)` |
| `SequenceCategory` | `comp.SequenceCategory` |
| `ProductionOrderOperation` | `cast(comp.OrderOperation as vdm_prodnorderoperation preserving type)` |
| `ProductionPlant` | `comp.ProductionPlant` |
| `OrderInternalID` | `comp.OrderInternalID` |
| `OrderOperationInternalID` | `comp.OrderOperationInternalID` |
| `MatlCompRequirementDate` | `comp.MatlCompRequirementDate` |
| `MatlCompRequirementTime` | `comp.MatlCompRequirementTime` |
| `LatestRequirementDate` | `comp.LatestRequirementDate` |
| `ReservationIsFinallyIssued` | `comp.ReservationIsFinallyIssued` |
| `MatlCompIsMarkedForDeletion` | `comp.MatlCompIsMarkedForDeletion` |
| `MaterialComponentIsMissing` | `comp.MaterialComponentIsMissing` |
| `IsBulkMaterialComponent` | `comp.IsBulkMaterialComponent` |
| `MatlCompIsMarkedForBackflush` | `comp.MatlCompIsMarkedForBackflush` |
| `MatlCompIsTextItem` | `comp.MatlCompIsTextItem` |
| `MaterialPlanningRelevance` | `comp.MaterialPlanningRelevance` |
| `MatlCompIsConfigurable` | `comp.MatlCompIsConfigurable` |
| `MaterialComponentIsClassified` | `comp.MaterialComponentIsClassified` |
| `MaterialCompIsIntraMaterial` | `comp.MaterialCompIsIntraMaterial` |
| `MaterialIsDirectlyProduced` | `comp.MaterialIsDirectlyProduced` |
| `MaterialIsDirectlyProcured` | `comp.MaterialIsDirectlyProcured` |
| `MaterialComponentText` | `comp.MaterialComponentText` |
| `MaterialComponentSecondText` | `comp.MaterialComponentSecondText` |
| `MaterialComponentHasLongText` | `comp.MaterialComponentHasLongText` |
| `LongTextLanguage` | `comp.LongTextLanguage` |
| `RequirementType` | `comp.RequirementType` |
| `SalesOrder` | `comp.SalesOrder` |
| `SalesOrderItem` | `comp.SalesOrderItem` |
| `WBSElementInternalID` | `comp.WBSElementInternalID` |
| `ProductConfiguration` | `comp.ProductConfiguration` |
| `ChangeNumber` | `comp.ChangeNumber` |
| `MaterialRevisionLevel` | `comp.MaterialRevisionLevel` |
| `EffectivityParameterVariant` | `comp.EffectivityParameterVariant` |
| `MaterialComponentSortText` | `comp.MaterialComponentSortText` |
| `ObjectInternalID` | `comp.ObjectInternalID` |
| `BillOfMaterialCategory` | `comp.BillOfMaterialCategory` |
| `BillOfMaterialInternalID` | `comp.BillOfMaterialInternalID` |
| `BillOfMaterialVariant` | `comp.BillOfMaterialVariant` |
| `BillOfMaterialItemNodeNumber` | `comp.BOMItem` |
| `BillOfMaterialItemCategory` | `comp.BOMItemCategory` |
| `BillOfMaterialItemNumber` | `comp.BillOfMaterialItemNumber` |
| `PurchasingInfoRecord` | `comp.PurchasingInfoRecord` |
| `PurchasingGroup` | `comp.PurchasingGroup` |
| `PurchaseRequisition` | `comp.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `comp.PurchaseRequisitionItem` |
| `PurchasingDocument` | `cast(comp.PurchaseOrder as pph_ebeln preserving type)` |
| `PurchasingDocumentItem` | `cast(comp.PurchaseOrderItem as pph_ebelp preserving type)` |
| `Supplier` | `comp.Supplier` |
| `DeliveryDurationInDays` | `comp.DeliveryDurationInDays` |
| `MaterialGoodsReceiptDuration` | `comp.MaterialGoodsReceiptDuration` |
| `ExternalProcessingPrice` | `comp.ExternalProcessingPrice` |
| `NumberOfOperationPriceUnits` | `comp.NumberOfPriceUnits` |
| `GoodsMovementIsAllowed` | `comp.GoodsMovementIsAllowed` |
| `StorageLocation` | `comp.StorageLocation` |
| `DebitCreditCode` | `comp.DebitCreditCode` |
| `GoodsMovementType` | `comp.GoodsMovementType` |
| `InventorySpecialStockType` | `comp.InventorySpecialStockType` |
| `InventorySpecialStockValnType` | `comp.InventorySpecialStockValnType` |
| `ConsumptionPosting` | `comp.ConsumptionPosting` |
| `SupplyArea` | `comp.SupplyArea` |
| `GoodsRecipientName` | `comp.GoodsRecipientName` |
| `UnloadingPointName` | `comp.UnloadingPointName` |
| `StockSegment` | `comp.StockSegment` |
| `RequirementSegment` | `comp.RequirementSegment` |
| `MaterialStaging` | `comp.MaterialStaging` |
| `Batch` | `comp.Batch` |
| `BatchEntryDeterminationCode` | `comp.BatchEntryDeterminationCode` |
| `BatchSplitType` | `comp.BatchSplitType` |
| `BatchMasterReservationItem` | `comp.BatchMasterReservationItem` |
| `BatchClassification` | `comp.BatchClassification` |
| `MaterialCompCostingRelevancy` | `comp.MaterialCompCostingRelevancy` |
| `BusinessArea` | `comp.BusinessArea` |
| `CompanyCode` | `comp.CompanyCode` |
| `GLAccount` | `comp.GLAccount` |
| `FunctionalArea` | `comp.FunctionalArea` |
| `ControllingArea` | `comp.ControllingArea` |
| `AccountAssignmentCategory` | `comp.AccountAssignmentCategory` |
| `MaterialCompIsVariableSized` | `comp.MaterialCompIsVariableSized` |
| `VariableSizeItemUnit` | `comp.VariableSizeItemUnit` |
| `VariableSizeItemQuantity` | `comp.VariableSizeItemQuantity` |
| `VariableSizeComponentUnit` | `comp.VariableSizeComponentUnit` |
| `VariableSizeComponentQuantity` | `comp.VariableSizeComponentQuantity` |
| `VariableSizeDimensionUnit` | `comp.VariableSizeDimensionUnit` |
| `VariableSizeDimension1` | `comp.VariableSizeDimension1` |
| `VariableSizeDimension2` | `comp.VariableSizeDimension2` |
| `VariableSizeDimension3` | `comp.VariableSizeDimension3` |
| `VariableSizeCompFormulaKey` | `comp.VariableSizeCompFormulaKey` |
| `MaterialCompIsAlternativeItem` | `comp.MaterialCompIsAlternativeItem` |
| `AlternativeItemGroup` | `comp.AlternativeItemGroup` |
| `AlternativeItemStrategy` | `comp.AlternativeItemStrategy` |
| `AlternativeItemPriority` | `comp.AlternativeItemPriority` |
| `UsageProbabilityPercent` | `comp.UsageProbabilityPercent` |
| `AlternativeMstrReservationItem` | `comp.AlternativeMstrReservationItem` |
| `MaterialComponentIsPhantomItem` | `comp.MaterialComponentIsPhantomItem` |
| `OrderPathValue` | `comp.OrderPathValue` |
| `OrderLevelValue` | `comp.OrderLevelValue` |
| `Assembly` | `comp.Assembly` |
| `AssemblyOrderPathValue` | `comp.AssemblyOrderPathValue` |
| `AssemblyOrderLevelValue` | `comp.AssemblyOrderLevelValue` |
| `DiscontinuationGroup` | `comp.DiscontinuationGroup` |
| `MatlCompDiscontinuationType` | `comp.MatlCompDiscontinuationType` |
| `MatlCompIsFollowUpMaterial` | `comp.MatlCompIsFollowUpMaterial` |
| `FollowUpGroup` | `comp.FollowUpGroup` |
| `FollowUpMaterial` | `comp.FollowUpMaterial` |
| `FollowUpMaterialIsActive` | `comp.FollowUpMaterialIsActive` |
| `DiscontinuationMasterResvnItem` | `comp.DiscontinuationMasterResvnItem` |
| `LeadTimeOffset` | `comp.LeadTimeOffset` |
| `OperationLeadTimeOffsetUnit` | `comp.OperationLeadTimeOffsetUnit` |
| `OperationLeadTimeOffset` | `comp.OperationLeadTimeOffset` |
| `QuantityIsFixed` | `comp.QuantityIsFixed` |
| `ScrapQtyIsNetScrap` | `comp.IsNetScrap` |
| `ComponentScrapInPercent` | `comp.ComponentScrapInPercent` |
| `OperationScrapInPercent` | `comp.OperationScrapInPercent` |
| `MaterialQtyToBaseQtyNmrtr` | `comp.MaterialQtyToBaseQtyNmrtr` |
| `MaterialQtyToBaseQtyDnmntr` | `comp.MaterialQtyToBaseQtyDnmntr` |
| `BaseUnit` | `comp.BaseUnit` |
| `RequiredQuantity` | `comp.RequiredQuantity` |
| `WithdrawnQuantity` | `comp.WithdrawnQuantity` |
| `ConfirmedAvailableQuantity` | `comp.ConfirmedAvailableQuantity` |
| `MaterialCompOriginalQuantity` | `comp.MaterialCompOriginalQuantity` |
| `EntryUnit` | `comp.EntryUnit` |
| `GoodsMovementEntryQty` | `comp.GoodsMovementEntryQty` |
| `Currency` | `comp.Currency` |
| `WithdrawnQuantityAmount` | `comp.WithdrawnQuantityAmount` |
| `_Assembly` | `comp._PhantomAssembly` |
| `_Reservation` | *Association* |
| `_ReservationItem` | *Association* |
| `_ReservationRecordType` | *Association* |
| `_ProductionOrderType` | *Association* |
| `_ProductionOrderHeader` | *Association* |
| `_ProductionOrderSequence` | *Association* |
| `_ProductionOrderText` | *Association* |
| `_ProductionPlantText` | *Association* |
| `_PlantText` | *Association* |
| `_MaterialText` | *Association* |
| `_WBSElementText` | *Association* |
| `_StorageLocationText` | *Association* |
| `_SupplyAreaText` | *Association* |
| `_SupplierText` | *Association* |
| `_PurchasingGroupText` | *Association* |
| `_AssemblyText` | *Association* |
| `_FollowUpMaterialText` | *Association* |
| `_StatusObjectText` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_CompanyCodeText` | *Association* |
| `_ControllingAreaText` | *Association* |
| `_FunctionalAreaText` | *Association* |
| `_ProductionOrderOperation` | *Association* |
| `_LongText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Reservation` | `I_ReservationDocumentHeader` | [1..1] |
| `_ReservationItem` | `I_ReservationDocumentItem` | [1..1] |
| `_ReservationRecordType` | `I_ReservationDocRecordType` | [0..1] |
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_ProductionOrderHeader` | `I_ProductionOrder` | [1..1] |
| `_ProductionOrderSequence` | `I_ProductionOrderSequence` | [1..1] |
| `_Extension` | `E_ReservationDocumentItem` | [1..1] |
| `_ProductionOrderText` | `I_ProductionOrder` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_PlantText` | `I_Plant` | [0..1] |
| `_MaterialText` | `I_ProductText` | [0..*] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_SupplyAreaText` | `I_ProductionSupplyAreaText` | [0..*] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_PurchasingGroupText` | `I_PurchasingGroup` | [0..1] |
| `_AssemblyText` | `I_ProductText` | [0..*] |
| `_FollowUpMaterialText` | `I_ProductText` | [0..*] |
| `_StatusObjectText` | `I_StatusObject` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: ['_StatusObject', '_StatusObjectText']
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'resb',
                                          tableElement: ['rsnum'      , 'rspos'          , 'rsart'],
                                          viewElement:  ['Reservation', 'ReservationItem', 'ReservationRecordType']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ProductionOrder']
                                        } ] } }
@Analytics.technicalName: 'IPRODNORDERCOMP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderComponent'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Component'

define view entity I_ProductionOrderComponent 
  as select from I_OrderComponent as comp

  association [1..1] to I_ReservationDocumentHeader   as _Reservation               on  $projection.Reservation = _Reservation.Reservation
  association [1..1] to I_ReservationDocumentItem     as _ReservationItem           on  $projection.Reservation           = _ReservationItem.Reservation
                                                                                    and $projection.ReservationItem       = _ReservationItem.ReservationItem
                                                                                    and $projection.ReservationRecordType = _ReservationItem.RecordType
  association [0..1] to I_ReservationDocRecordType    as _ReservationRecordType     on  $projection.ReservationRecordType = _ReservationRecordType.RecordType
  association [1..1] to I_ProductionOrderType         as _ProductionOrderType       on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType

  -- SOT relations
  association [1..1] to I_ProductionOrder             as _ProductionOrderHeader     on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
  association [1..1] to I_ProductionOrderSequence     as _ProductionOrderSequence   on  $projection.ProductionOrder         = _ProductionOrderSequence.ProductionOrder
                                                                                    and $projection.ProductionOrderSequence = _ProductionOrderSequence.ProductionOrderSequence
  association to parent I_ProductionOrderOperation_2  as _ProductionOrderOperation  on  $projection.OrderInternalID          = _ProductionOrderOperation.OrderInternalID
                                                                                    and $projection.OrderOperationInternalID = _ProductionOrderOperation.OrderOperationInternalID
  composition [0..*] of I_ProdnOrderComponentLongText as _LongText

  -- to extension
  association [1..1] to E_ReservationDocumentItem     as _Extension                 on  $projection.Reservation           = _Extension.Reservation
                                                                                    and $projection.ReservationItem       = _Extension.ReservationItem
                                                                                    and $projection.ReservationRecordType = _Extension.RecordType
  -- start new associations for full coverage of text relations
  association [1..1] to I_ProductionOrder             as _ProductionOrderText       on  $projection.ProductionOrder = _ProductionOrderText.ProductionOrder
  association [1..1] to I_Plant                       as _ProductionPlantText       on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [0..1] to I_Plant                       as _PlantText                 on  $projection.Plant = _PlantText.Plant
  association [0..*] to I_ProductText                 as _MaterialText              on  $projection.Material = _MaterialText.Product
  association [0..1] to I_WBSElementBasicData         as _WBSElementText            on  $projection.WBSElementInternalID = _WBSElementText.WBSElementInternalID
  association [0..1] to I_StorageLocation             as _StorageLocationText       on  $projection.Plant           = _StorageLocationText.Plant
                                                                                    and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [0..*] to I_ProductionSupplyAreaText    as _SupplyAreaText            on  $projection.Plant      = _SupplyAreaText.Plant
                                                                                    and $projection.SupplyArea = _SupplyAreaText.ProductionSupplyArea
  association [0..1] to I_Supplier                    as _SupplierText              on  $projection.Supplier = _SupplierText.Supplier
  association [0..1] to I_PurchasingGroup             as _PurchasingGroupText       on  $projection.PurchasingGroup = _PurchasingGroupText.PurchasingGroup
  association [0..*] to I_ProductText                 as _AssemblyText              on  $projection.Assembly = _AssemblyText.Product
  association [0..*] to I_ProductText                 as _FollowUpMaterialText      on  $projection.FollowUpMaterial = _FollowUpMaterialText.Product
  association [1..1] to I_StatusObject                as _StatusObjectText          on  $projection.ObjectInternalID = _StatusObjectText.StatusObject
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText          on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                 as _CompanyCodeText           on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [0..1] to I_ControllingArea             as _ControllingAreaText       on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_FunctionalAreaText          as _FunctionalAreaText        on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea
-- end new associations for full coverage of text relations
{
      // Key
      @ObjectModel.foreignKey.association: '_Reservation'
  key comp.Reservation,
      @ObjectModel.text.element: ['MaterialComponentText']
  key comp.ReservationItem,
      @ObjectModel.foreignKey.association: '_ReservationRecordType'
  key comp.RecordType                                               as ReservationRecordType,

      //Material data
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      comp.MaterialGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      comp.Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      comp.Plant,

      // Order and Operation data
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(comp.OrderType as vdm_prodnordertype preserving type)           as ProductionOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      cast(comp.OrderID  as vdm_manufacturingorder preserving type)        as ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]
      cast(comp.Sequence as vdm_prodnordersequence preserving type)        as ProductionOrderSequence,
      @ObjectModel.foreignKey.association: '_SequenceCategory'
      comp.SequenceCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]      
      cast(comp.OrderOperation as vdm_prodnorderoperation preserving type) as ProductionOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      comp.ProductionPlant,
      comp.OrderInternalID,
      comp.OrderOperationInternalID,

      // Date and Time
      @Semantics.businessDate.at: true
      comp.MatlCompRequirementDate,
      comp.MatlCompRequirementTime,
      comp.LatestRequirementDate,

      // Attributes
      @Semantics.booleanIndicator: true
      comp.ReservationIsFinallyIssued,
      @Semantics.booleanIndicator: true
      comp.MatlCompIsMarkedForDeletion,
      @Semantics.booleanIndicator: true
      comp.MaterialComponentIsMissing,
      @Semantics.booleanIndicator: true
      comp.IsBulkMaterialComponent,
      @Semantics.booleanIndicator: true
      comp.MatlCompIsMarkedForBackflush,
      @Semantics.booleanIndicator: true
      comp.MatlCompIsTextItem,
      comp.MaterialPlanningRelevance,
      @Semantics.booleanIndicator: true
      comp.MatlCompIsConfigurable,
      comp.MaterialComponentIsClassified,
      @Semantics.booleanIndicator: true
      comp.MaterialCompIsIntraMaterial,
      @Semantics.booleanIndicator: true
      comp.MaterialIsDirectlyProduced,
      @Semantics.booleanIndicator: true
      comp.MaterialIsDirectlyProcured,

      // Text
      @Semantics.text: true
      comp.MaterialComponentText,
      @Semantics.text: true
      comp.MaterialComponentSecondText,
      @Semantics.booleanIndicator: true
      comp.MaterialComponentHasLongText, 
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      comp.LongTextLanguage,

      // Assignments
      @ObjectModel.foreignKey.association: '_RequirementType'
      comp.RequirementType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      comp.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      comp.SalesOrderItem,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      comp.WBSElementInternalID,
      comp.ProductConfiguration,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      comp.ChangeNumber,
      comp.MaterialRevisionLevel,
      comp.EffectivityParameterVariant,
      comp.MaterialComponentSortText,
      @ObjectModel.foreignKey.association: '_StatusObject'
      comp.ObjectInternalID,

      // Assignments BOM
      comp.BillOfMaterialCategory,
      comp.BillOfMaterialInternalID,
      comp.BillOfMaterialVariant,
      comp.BOMItem                                                  as BillOfMaterialItemNodeNumber,
      comp.BOMItemCategory                                          as BillOfMaterialItemCategory,
      comp.BillOfMaterialItemNumber,

      // Assignments Purchasing
      comp.PurchasingInfoRecord,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      comp.PurchasingGroup,
      comp.PurchaseRequisition,
      comp.PurchaseRequisitionItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingDocumentStdVH', element: 'PurchasingDocument' } } ] 
      cast(comp.PurchaseOrder     as pph_ebeln preserving type)     as PurchasingDocument,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PurchasingDocumentItemStdVH', element: 'PurchasingDocumentItem' } } ] 
      cast(comp.PurchaseOrderItem as pph_ebelp preserving type)     as PurchasingDocumentItem,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      @ObjectModel.foreignKey.association: '_Supplier'
      comp.Supplier,
      comp.DeliveryDurationInDays,
      comp.MaterialGoodsReceiptDuration,
      -- Price
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      comp.ExternalProcessingPrice,
      comp.NumberOfPriceUnits                                       as NumberOfOperationPriceUnits,   

      // Goods Movement data
      comp.GoodsMovementIsAllowed,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      comp.StorageLocation,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      comp.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      comp.GoodsMovementType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      comp.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      comp.InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      comp.ConsumptionPosting,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionSupplyAreaStdVH', element: 'ProductionSupplyArea' } } ]
      @ObjectModel.foreignKey.association: '_SupplyArea'
      @ObjectModel.text.association: '_SupplyAreaText'
      comp.SupplyArea,
      @Semantics.text: true
      comp.GoodsRecipientName,
      @Semantics.text: true
      comp.UnloadingPointName,
      comp.StockSegment,
      comp.RequirementSegment,
      comp.MaterialStaging,

      // Batch data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch'
      comp.Batch,
--    @ObjectModel.foreignKey.association: '_BatchEntryDetermination'         
      comp.BatchEntryDeterminationCode,
      @ObjectModel.foreignKey.association: '_BatchSplitType'      
      comp.BatchSplitType,
      comp.BatchMasterReservationItem,
      comp.BatchClassification,

      // Assignments FI/CO
      comp.MaterialCompCostingRelevancy,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      comp.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      comp.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' } } ]
      @ObjectModel.foreignKey.association: '_GLAccount'
      comp.GLAccount,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @ObjectModel.text.association: '_FunctionalAreaText'
      comp.FunctionalArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      comp.ControllingArea,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      comp.AccountAssignmentCategory,

      // Variable-size item data
      @Semantics.booleanIndicator: true
      comp.MaterialCompIsVariableSized,
      -- Item quantity (ROANZ and ROAME)
      @ObjectModel.foreignKey.association: '_VariableSizeItemUnit'
      comp.VariableSizeItemUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeItemUnit'
      @Aggregation.default: #SUM
      comp.VariableSizeItemQuantity,
      -- Component quantity (ROKME and ROMEN) 
      @ObjectModel.foreignKey.association: '_VariableSizeComponentUnit'
      comp.VariableSizeComponentUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      @Aggregation.default: #SUM
      comp.VariableSizeComponentQuantity,
      -- Dimensions (ROMEI and ROMSn)
      @ObjectModel.foreignKey.association: '_VariableSizeDimensionUnit'
      comp.VariableSizeDimensionUnit,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      comp.VariableSizeDimension1,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      comp.VariableSizeDimension2,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      @Aggregation.default: #MAX
      comp.VariableSizeDimension3,
      comp.VariableSizeCompFormulaKey,
 
      // Alternative item data
      @Semantics.booleanIndicator: true
      comp.MaterialCompIsAlternativeItem,
      comp.AlternativeItemGroup,
      comp.AlternativeItemStrategy,
      comp.AlternativeItemPriority,
      comp.UsageProbabilityPercent,
      comp.AlternativeMstrReservationItem,

      // Phantom assembly
      @Semantics.booleanIndicator: true
      comp.MaterialComponentIsPhantomItem,
      comp.OrderPathValue,
      comp.OrderLevelValue,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Assembly'
      @ObjectModel.text.association: '_AssemblyText'
      comp.Assembly,
      comp.AssemblyOrderPathValue,
      comp.AssemblyOrderLevelValue,

      // Discontinuation
      comp.DiscontinuationGroup,
      @ObjectModel.foreignKey.association: '_DiscontinuationType'
      comp.MatlCompDiscontinuationType,
      @Semantics.booleanIndicator: true
      comp.MatlCompIsFollowUpMaterial,
      comp.FollowUpGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_FollowUpMaterial'
      @ObjectModel.text.association: '_FollowUpMaterialText'
      comp.FollowUpMaterial,
      @Semantics.booleanIndicator: true
      comp.FollowUpMaterialIsActive,
      comp.DiscontinuationMasterResvnItem,

      // Lead-Time offset
      comp.LeadTimeOffset,
      @ObjectModel.foreignKey.association: '_OpLeadTimeOffsetUnit'
      comp.OperationLeadTimeOffsetUnit,
      comp.OperationLeadTimeOffset,

      // Quantities and UoM
      @Semantics.booleanIndicator: true
      comp.QuantityIsFixed,
      @Semantics.booleanIndicator: true
      comp.IsNetScrap                                               as ScrapQtyIsNetScrap,
      comp.ComponentScrapInPercent,
      comp.OperationScrapInPercent,
      comp.MaterialQtyToBaseQtyNmrtr,
      comp.MaterialQtyToBaseQtyDnmntr,
      -- Base unit
      @ObjectModel.foreignKey.association: '_BaseUnit'
      comp.BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.RequiredQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.WithdrawnQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.ConfirmedAvailableQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      comp.MaterialCompOriginalQuantity,
      -- Entry unit
      @ObjectModel.foreignKey.association: '_EntryUnit'
      comp.EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @Aggregation.default: #SUM
      comp.GoodsMovementEntryQty,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      comp.Currency,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      comp.WithdrawnQuantityAmount,
            
      // Associations
      _Reservation,
      _ReservationItem,
      _ReservationRecordType,
      _ProductionOrderType,
      comp._SequenceCategory,
      @Consumption.hidden: true
      comp._OrderInternalID,
      comp._ProductionPlant,
      comp._RequirementType,
      comp._MaterialGroup,
      comp._Material,
      comp._Product,
      comp._ProductPlant,
      comp._ProductStorageLocation,
      comp._Plant,
      comp._StorageLocation,
      comp._Batch,
      comp._BatchSplitType,
      comp._DebitCreditCode,
      comp._GoodsMovementType,
      comp._InventorySpecialStockType,
      comp._InventorySpecialStockValnType,
      comp._ConsumptionPosting,
      comp._SupplyArea,
      comp._FollowUpMaterial,
      comp._DiscontinuationType,
      comp._PhantomAssembly as _Assembly,
      comp._BOMItemCategory,
      comp._SalesOrder,
      comp._SalesOrderItem,
      comp._WBSElementBasicData,
      comp._EnterpriseProjectElement,
      comp._ChangeNumber,
      comp._MaterialRevisionLevel,
      comp._PurchasingGroup,
      comp._PurchasingInfoRecord,
      comp._PurchaseRequisition,
      comp._PurchaseRequisitionItem,
      comp._Supplier,
      comp._CompanyCode,
      comp._BusinessArea,
      comp._GLAccount,
      comp._ControllingArea,
      comp._FunctionalArea,
      comp._AccountAssignmentCategory,
      comp._OpLeadTimeOffsetUnit,
      comp._VariableSizeItemUnit,
      comp._VariableSizeComponentUnit,
      comp._VariableSizeDimensionUnit,
      comp._BaseUnit,
      comp._EntryUnit,
      comp._Currency,
      comp._StatusObject,
      comp._LongTextLanguage,
      -- Compositions
      _ProductionOrderHeader,
      _ProductionOrderSequence,
      _ProductionOrderOperation,
      _LongText,
      -- Text relations
      _ProductionOrderText,
      _PlantText,
      _ProductionPlantText,
      _MaterialText,
      _WBSElementText,
      _StorageLocationText,
      _SupplyAreaText,
      _SupplierText,
      _PurchasingGroupText,
      _AssemblyText,
      _FollowUpMaterialText,
      _StatusObjectText,
      _BusinessAreaText,
      _CompanyCodeText,
      _ControllingAreaText,
      _FunctionalAreaText
}
where
    comp.OrderCategory = '10' and
    comp.MaterialIsCoProduct =  '';  // no Co-Products
```
