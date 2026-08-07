---
name: I_MFGORDEROPERATIONCOMPCUBE
description: Manufacturing Order Operation Component Cube
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://pastebin.com/TMcRKEEk
semantic_en: Manufacturing Order Operation Component Cube — Interface CDS view based on I_MfgOrderOperationComponent.
semantic_vi: Manufacturing Order Operation Component Cube — CDS view giao diện dựa trên I_MfgOrderOperationComponent.
keywords:
  - manufacturing
  - order
  - operation
  - component
  - cube
  - comp
  - comp.
  - type
  - sequence
tags:
  - AC
  - bo:productionorder
  - component:AC
  - interface-view
  - order
---
# I_MFGORDEROPERATIONCOMPCUBE

**Manufacturing Order Operation Component Cube**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://pastebin.com/TMcRKEEk) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  |  |  |  |
| `ManufacturingOrderSequence` |  | |  |  |  |  |
| `ManufacturingOrderOperation` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `OrderInternalBillOfOperations` |  | |  |  |  |  |
| `OrderIntBillOfOperationsItem` |  | |  |  |  |  |
| `AssemblyMRPController` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `OrderIsReleased` |  | |  |  |  |  |
| `OrderIsConfirmed` |  | |  |  |  |  |
| `OrderIsDeleted` |  | |  |  |  |  |
| `OrderIsTechnicallyCompleted` |  | |  |  |  |  |
| `OrderIsClosed` |  | |  |  |  |  |
| `OrderIsMarkedForDeletion` |  | |  |  |  |  |
| `ReservationItemText` |  | |  |  |  |  |
| `MatlCompRequirementDate` |  | |  |  |  |  |
| `MatlCompRequirementTime` |  | |  |  |  |  |
| `RequirementDateWeekDay` |  | |  | `ReportingDateWeekDay` |  |  |
| `RequirementDateWeek` |  | |  | `ReportingDateWeek` |  |  |
| `RequirementDateMonth` |  | |  | `ReportingDateMonth` |  |  |
| `RequirementDateYear` |  | |  | `ReportingDateYear` |  |  |
| `RequirementDateYearMonth` |  | |  | `cast(concat(repdate.ReportingDateYear, repdate.ReportingDateMonth) as vdm_yearmonth)` |  |  |
| `ReportingPeriod` |  | |  | `cast(repdate.ReportingPeriod as pph_reportingperiod preserving type)` |  |  |
| `RecordType` |  | |  |  |  |  |
| `RequirementType` |  | |  |  |  |  |
| `ReservationItemCreationCode` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `MatlCompIsMarkedForDeletion` |  | |  |  |  |  |
| `MaterialComponentIsMissing` |  | |  |  |  |  |
| `IsBulkMaterialComponent` |  | |  |  |  |  |
| `MaterialCompIsVariableSized` |  | |  |  |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |  |  |
| `MaterialCompIsAlternativeItem` |  | |  |  |  |  |
| `MaterialComponentIsPhantomItem` |  | |  |  |  |  |
| `MatlCompIsTextItem` |  | |  |  |  |  |
| `MatlCompDiscontinuationType` |  | |  |  |  |  |
| `MatlCompIsConfigurable` |  | |  |  |  |  |
| `UsageProbabilityPercent` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `MRPController` |  | |  | `cast(_MaterialPlant.MRPController as pph_dispo preserving type)` |  |  |
| `RequirementPlan` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `SDDocumentCategory` |  | | `_SalesDocumentBasic` | `SDDocumentCategory` |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterialInternalID` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  | `BOMItem` |  |  |
| `BillOfMaterialItemCategory` |  | |  | `BOMItemCategory` |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `BOMItemDescription` |  | |  |  |  |  |
| `BOMExplosionDateID` |  | |  | `BOMExplosion` |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `DeliveryDurationInDays` |  | |  |  |  |  |
| `GoodsMovementIsAllowed` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `SupplyArea` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `StorageType` |  | |  |  |  |  |
| `StorageBin` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `IsNetScrap` |  | |  |  |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `OperationScrapInPercent` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `RequiredQuantity` |  | |  | `cast(comp.RequiredQuantity as requirementquantity preserving type)` |  |  |
| `WithdrawnQuantity` |  | |  |  |  |  |
| `OpenQuantity` |  | |  | `(comp.RequiredQuantity - comp.WithdrawnQuantity)` |  |  |
| `DeviationQuantity` |  | |  | `cast((comp.WithdrawnQuantity - comp.RequiredQuantity) as deviationquantity)` |  |  |
| `ConfirmedAvailableQuantity` |  | |  |  |  |  |
| `OriginalDemandQuantity` |  | |  | `cast(Division( cast(comp.RequiredQuantity as abap.dec(16,5)),(1 + Division(comp.ComponentScrapInPercent,100,3)),3) as originaldemandquantity)` |  |  |
| `ExcessConsumptionQuantity` |  | |  | `cast(comp.WithdrawnQuantity - (Division( cast(comp.RequiredQuantity as abap.dec(16,5)),(1 + Division(comp.ComponentScrapInPercent,100,3)),3)) as excessconsumptionquantity)` |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `GoodsMovementEntryQty` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `WithdrawnQuantityAmount` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  | `cast(_CompanyCode.Currency as vdm_v_company_code_currency preserving type)` |  |  |
| `WithdrawnQtyAmountInCoCodeCry` |  | |  | `case when Currency = _CompanyCode.Currency then comp.WithdrawnQuantityAmount else cast(currency_conversion( amount => comp.WithdrawnQuantityAmount, source_currency => comp.Currency, round => 'X', target_currency => _CompanyCode.Currency, exchange_rate_date => comp.MatlCompRequirementDate, error_handling => 'SET_TO_NULL' ) as wihthdrawnamountcocurcy preserving type) end` |  |  |
| `FreeDefinedAmount1` |  | |  | `1` |  |  |
| `_GLAccount` | | ✓ | | | | |
| `_RequirementDate` | | ✓ | | | | |
| `_RequirementDateMonth` | | ✓ | | | | |
| `_RequirementDateYear` | | ✓ | | | | |
| `_RequirementDateWeekDay` | | ✓ | | | | |
| `_ReportingPeriod` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_Reservation` | | ✓ | | | | |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderSequence` | | ✓ | | | | |
| `_MfgOrderOperation` | | ✓ | | | | |
| `_MfgOrderOperationBySemanKey` | | ✓ | | | | |
| `_MfgOrderCategory` | | ✓ | | | | |
| `_MfgOrderType` | | ✓ | | | | |
| `_OrdInternalBillOfOperations` | | ✓ | | | | |
| `_ProductionPlant` | | ✓ | | | | |
| `_AssemblyMRPController` | | ✓ | | | | |
| `_ProductionSupervisor` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MaterialPlant` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_SupplyArea` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |
| `_BOMExplosion` | | ✓ | | | | |
| `_BOMItemCategory` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_PurchaseRequisition` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_RequirementDate` | `I_CalendarDate` | [1..1] |
| `_RequirementDateMonth` | `I_CalendarMonth` | [0..1] |
| `_RequirementDateYear` | `I_CalendarYear` | [0..1] |
| `_RequirementDateWeekDay` | `I_WeekDay` | [0..1] |
| `_ReportingPeriod` | `I_ReportingPeriod` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_SalesDocumentBasic` | `I_SalesDocumentBasic` | [0..1] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |

## Source Code

*Source: [https://pastebin.com/TMcRKEEk](https://pastebin.com/TMcRKEEk)*

```abap
@AbapCatalog.sqlViewName: 'IPPMFGORDOPCOMPC'
@AccessControl.authorizationCheck: #CHECK
@Analytics: {dataCategory: #CUBE, dataExtraction.enabled: true}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Operation Component Cube'

define view I_MfgOrderOperationCompCube
  as select from I_MfgOrderOperationComponent as comp
    inner join   P_PPH_ReportingDate3 as repdate on MatlCompRequirementDate = repdate.ReportingDate
    inner join   I_MfgOrderStatus     as status  on comp.ManufacturingOrder = status.ManufacturingOrder

  association [0..1] to I_GLAccount          as _GLAccount              on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                        and $projection.CompanyCode = _GLAccount.CompanyCode
  association [1..1] to I_CalendarDate       as _RequirementDate        on  $projection.MatlCompRequirementDate = _RequirementDate.CalendarDate
  association [0..1] to I_CalendarMonth      as _RequirementDateMonth   on  $projection.RequirementDateMonth = _RequirementDateMonth.CalendarMonth
  association [0..1] to I_CalendarYear       as _RequirementDateYear    on  $projection.RequirementDateYear = _RequirementDateYear.CalendarYear
  association [0..1] to I_WeekDay            as _RequirementDateWeekDay on  $projection.RequirementDateWeekDay = _RequirementDateWeekDay.WeekDay
  association [0..1] to I_ReportingPeriod    as _ReportingPeriod        on  $projection.ReportingPeriod = _ReportingPeriod.ReportingPeriod
  association [0..1] to I_Currency           as _CompanyCodeCurrency    on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_SalesDocumentBasic as _SalesDocumentBasic     on  $projection.SalesDocument = _SalesDocumentBasic.SalesDocument
  association [0..1] to I_SDDocumentCategory as _SDDocumentCategory     on  $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_MRPController      as _MRPController          on  $projection.Plant         = _MRPController.Plant
                                                                        and $projection.MRPController = _MRPController.MRPController
{
      // Key
      @ObjectModel.foreignKey.association: '_Reservation'
  key comp.Reservation,
      @ObjectModel.text.element: 'ReservationItemText'
  key comp.ReservationItem,

      // Order and operation data
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      comp.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      comp.ManufacturingOrderType,
      @ObjectModel.foreignKey.association: '_MfgOrder'
      comp.ManufacturingOrder,
      @ObjectModel.foreignKey.association: '_MfgOrderSequence'
      comp.ManufacturingOrderSequence,
      @ObjectModel.foreignKey.association: '_MfgOrderOperationBySemanKey'
      comp.ManufacturingOrderOperation,
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      comp.ProductionPlant,
      @ObjectModel.foreignKey.association: '_OrdInternalBillOfOperations'
      OrderInternalBillOfOperations,
      @ObjectModel.foreignKey.association: '_MfgOrderOperation'
      OrderIntBillOfOperationsItem,
      @ObjectModel.foreignKey.association: '_AssemblyMRPController'
      comp.AssemblyMRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      comp.ProductionSupervisor,

      //Order status
      status.OrderIsReleased  as OrderIsReleased,
      status.OrderIsConfirmed as OrderIsConfirmed,
      status.OrderIsDeleted as OrderIsDeleted,
      status.OrderIsTechnicallyCompleted as OrderIsTechnicallyCompleted,
      status.OrderIsClosed as OrderIsClosed,
      status.OrderIsMarkedForDeletion as OrderIsMarkedForDeletion,

      // Text
      @Semantics.text: true
      comp.ReservationItemText,

      // Date and Time
      @Semantics.businessDate.at: true
      comp.MatlCompRequirementDate,
      comp.MatlCompRequirementTime,
      @ObjectModel.foreignKey.association: '_RequirementDateWeekDay'
      repdate.ReportingDateWeekDay as RequirementDateWeekDay,
      @Semantics.calendar.week: true
      repdate.ReportingDateWeek    as RequirementDateWeek,
      @ObjectModel.foreignKey.association: '_RequirementDateMonth'
    //@Semantics.calendar.month: true
      repdate.ReportingDateMonth   as RequirementDateMonth,
      @Semantics.calendar.year: true
      repdate.ReportingDateYear    as RequirementDateYear,
      cast(concat(repdate.ReportingDateYear, repdate.ReportingDateMonth) as vdm_yearmonth) as RequirementDateYearMonth,
      @ObjectModel.foreignKey.association: '_ReportingPeriod'
      cast(repdate.ReportingPeriod as pph_reportingperiod preserving type) as ReportingPeriod,

      // Attributes
      comp.RecordType,
      comp.RequirementType,
      comp.ReservationItemCreationCode,
      comp.ReservationIsFinallyIssued,
      comp.MatlCompIsMarkedForDeletion,
      comp.MaterialComponentIsMissing,
      comp.IsBulkMaterialComponent,
      comp.MaterialCompIsVariableSized,
      comp.MatlCompIsMarkedForBackflush,
      comp.MaterialCompIsAlternativeItem,
      comp.MaterialComponentIsPhantomItem,
      comp.MatlCompIsTextItem,
      comp.MatlCompDiscontinuationType,
      comp.MatlCompIsConfigurable,
      comp.UsageProbabilityPercent,

      // Assignments
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      comp.MaterialGroup,
      @ObjectModel.foreignKey.association: '_Material'
      comp.Material,
      @ObjectModel.foreignKey.association: '_Plant'
      comp.Plant,
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(_MaterialPlant.MRPController as pph_dispo preserving type) as MRPController,
--    @ObjectModel.foreignKey.association: '_RequirementPlan'
      comp.RequirementPlan,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      comp.SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      comp.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      comp.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      comp.SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      _SalesDocumentBasic.SDDocumentCategory as SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_WBSElement'
      comp.WBSElementInternalID,
      comp.ProductConfiguration,

      // Assignments BOM
      comp.BillOfMaterialCategory,
      comp.BillOfMaterialInternalID,
      comp.BillOfMaterialVariant,
      @ObjectModel.text.element: 'BOMItemDescription'
      comp.BOMItem         as BillOfMaterialItemNodeNumber,
--    @ObjectModel.foreignKey.association: '_BOMItemCategory'
      comp.BOMItemCategory as BillOfMaterialItemCategory,
      @ObjectModel.text.element: 'BOMItemDescription'
      comp.BillOfMaterialItemNumber,
      @Semantics.text: true
      comp.BOMItemDescription,
      @ObjectModel.foreignKey.association: '_BOMExplosion'
      comp.BOMExplosion    as BOMExplosionDateID,

      // Assignments Purchasing
      comp.PurchasingInfoRecord,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      comp.PurchasingGroup,
--    @ObjectModel.foreignKey.association: '_PurchaseRequisition'
      comp.PurchaseRequisition,
--    @ObjectModel.foreignKey.association: '_PurchaseRequisitionItem'
      comp.PurchaseRequisitionItem,
--    @ObjectModel.foreignKey.association: '_PurchaseOrder'
      comp.PurchaseOrder,
--    @ObjectModel.foreignKey.association: '_PurchaseOrderItem'
      comp.PurchaseOrderItem,

      @Semantics.calendarItem.duration: true
      comp.DeliveryDurationInDays,

      // Goods movement data
      comp.GoodsMovementIsAllowed,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      comp.StorageLocation,
      comp.Batch,
--    @ObjectModel.foreignKey.association: '_DebitCreditCode'
      comp.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      comp.GoodsMovementType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      comp.InventorySpecialStockType,
      comp.InventorySpecialStockValnType,
      comp.ConsumptionPosting,
      @ObjectModel.foreignKey.association: '_SupplyArea'
      comp.SupplyArea,

      // Assignments WM
      @ObjectModel.foreignKey.association: '_Warehouse'
      comp.Warehouse,
      comp.StorageType,
      comp.StorageBin,

      // Assignments FI/CO
      @ObjectModel.foreignKey.association: '_BusinessArea'
      comp.BusinessArea,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      comp.CompanyCode,
      @ObjectModel.foreignKey.association: '_GLAccount'
      comp.GLAccount,
--    @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      comp.AccountAssignmentCategory,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      comp.FunctionalArea,

      // Quantities and UoM
      comp.QuantityIsFixed,
      comp.IsNetScrap,
      @DefaultAggregation: #MAX
      comp.ComponentScrapInPercent,
      @DefaultAggregation: #MAX
      comp.OperationScrapInPercent,
      @Semantics.unitOfMeasure: true
      comp.BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      cast(comp.RequiredQuantity as requirementquantity preserving type) as RequiredQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      comp.WithdrawnQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      (comp.RequiredQuantity - comp.WithdrawnQuantity) as OpenQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      cast((comp.WithdrawnQuantity - comp.RequiredQuantity) as deviationquantity) as DeviationQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      comp.ConfirmedAvailableQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      cast(Division( cast(comp.RequiredQuantity as abap.dec(16,5)),(1 + Division(comp.ComponentScrapInPercent,100,3)),3) as originaldemandquantity) as OriginalDemandQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: #SUM
      cast(comp.WithdrawnQuantity -
      (Division( cast(comp.RequiredQuantity as abap.dec(16,5)),(1 + Division(comp.ComponentScrapInPercent,100,3)),3)) as excessconsumptionquantity) as ExcessConsumptionQuantity,

      @Semantics.unitOfMeasure: true
      comp.EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @DefaultAggregation: #SUM
      comp.GoodsMovementEntryQty,

      // Amounts and Currencies
      @Semantics.currencyCode: true
      comp.Currency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      comp.WithdrawnQuantityAmount,

      @Semantics.currencyCode: true
      cast(_CompanyCode.Currency as vdm_v_company_code_currency preserving type) as CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      case
        when Currency = _CompanyCode.Currency
          then comp.WithdrawnQuantityAmount
        else
          cast(currency_conversion( amount => comp.WithdrawnQuantityAmount,
                            source_currency => comp.Currency,
                            round => 'X',
                            target_currency => _CompanyCode.Currency,
                            exchange_rate_date => comp.MatlCompRequirementDate,
                            error_handling => 'SET_TO_NULL' ) as wihthdrawnamountcocurcy preserving type)
      end as WithdrawnQtyAmountInCoCodeCry,
      @DefaultAggregation: #MAX
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      1 as FreeDefinedAmount1,   //Hilfsfeld

      // Associations
      _Reservation,
      _MfgOrder,
      _MfgOrderSequence,
      _MfgOrderOperation,
      _MfgOrderOperationBySemanKey,
      _MfgOrderCategory,
      _MfgOrderType,
      _OrdInternalBillOfOperations,
      _ProductionPlant,
      _AssemblyMRPController,
      _ProductionSupervisor,
      _MaterialGroup,
      _Material,
      _MaterialPlant,
      _Plant,
      _MRPController,
      _StorageLocation,
      _GoodsMovementType,
      _InventorySpecialStockType,
      _SupplyArea,
      _Warehouse,
      _BOMExplosion,
      _BOMItemCategory,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
      _SDDocumentCategory,
      _WBSElement,
      _PurchasingGroup,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _PurchaseRequisition,
      _PurchaseRequisitionItem,
      _CompanyCode,
      _BusinessArea,
      _FunctionalArea,
      _GLAccount,
      _BaseUnit,
      _EntryUnit,
      _Currency,
      _CompanyCodeCurrency,
      _RequirementDate,
      _RequirementDateMonth,
      _RequirementDateYear,
      _RequirementDateWeekDay,
      _ReportingPeriod
};
```
