---
name: C_MAINTORDERCOMPONENTDEX
description: "Maintenance Order Component"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERCOMPONENTDEX')/$value
semantic_en: "Maintenance Order Component"
semantic_vi: "Maintenance Order Component — CDS view tiêu dùng dựa trên I_MaintenanceOrderComponent_2."
keywords:
  - "maintenance"
  - "order"
  - "component"
  - "reservation"
  - "item"
  - "type"
  - "operation"
tags:
  - PM
  - bo:purchaseorder
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDERCOMPONENTDEX

**Maintenance Order Component**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERCOMPONENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  | `NUMC(10)` | Number of reservation/dependent requirements |
| `ReservationItem` | ✓ | |  |  | `NUMC(4)` | Item Number of Reservation / Dependent Requirements |
| `ReservationType` | ✓ | |  |  | `CHAR(1)` | Record type |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceOrderOperation` |  | |  |  | `CHAR(4)` | Maintenance Order Operation |
| `MaintenanceOrderSubOperation` |  | |  |  | `CHAR(4)` | Maintenance Order Suboperation |
| `MaintOrderComponentInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `MaintenanceOrderComponent` |  | |  |  | `CHAR(4)` | BOM item number |
| `ResvnPurchasingDocumentNumber` |  | |  |  | `NUMC(2)` | Index counter for direct procurement elements |
| `ReservationIsFinallyIssued` |  | |  |  | `CHAR(1)` | Final Issue for Reservation |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ComponentDescription` |  | |  |  | `CHAR(40)` | BOM Item Text (Line 1) |
| `MaintComponentItemCategory` |  | |  |  | `CHAR(1)` | Item category (bill of material) |
| `MaintOrdOpCompRequisitioner` |  | |  |  | `CHAR(12)` | Name of requisitioner/requester |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `RequirementQuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Requirement Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `QuantityInUnitOfEntry` |  | |  |  | `QUAN(13)` | Quantity in unit of entry |
| `UnitOfEntry` |  | |  |  | `UNIT(3)` | Unit of entry |
| `MaintOrderCompDebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `PurReqnOrResvnGeneration` |  | |  |  | `CHAR(1)` | Purchase Requisition or Reservation Generation |
| `MaterialCompIsProcuredDirectly` |  | |  |  | `CHAR(1)` | Checkbox |
| `RequirementDate` |  | |  |  | `DATS(8)` | Requirements date for the component |
| `RequirementTime` |  | |  |  | `TIMS(6)` | Time that reservation quantity required |
| `ProductTypeCode` |  | |  |  | `CHAR(2)` | Product Type Group |
| `ServicePerformer` |  | |  |  | `CHAR(10)` | Service Performer |
| `PerformancePeriodStartDate` |  | |  |  | `DATS(8)` | Start Date for Period of Performance |
| `PerformancePeriodEndDate` |  | |  |  | `DATS(8)` | End Date for Period of Performance |
| `PerformancePeriodStartTime` |  | |  |  | `TIMS(6)` | Start Time for a Lean Service |
| `PerformancePeriodEndTime` |  | |  |  | `TIMS(6)` | End Time for a Lean Service |
| `LeanServiceDuration` |  | |  |  | `QUAN(5)` | Duration of Lean Service |
| `LeanServiceDurationUnit` |  | |  |  | `UNIT(3)` | Duration Unit for a Lean Service |
| `DistributionFunction` |  | |  |  | `CHAR(3)` | Distribution function |
| `MaintOrdCompDeliveryDateAdjmt` |  | |  |  | `CHAR(1)` | Align Component Requirement Date |
| `SrvcSchedgIsAlignedWthOpWrkCtr` |  | |  |  | `CHAR(1)` | Align scheduling with work center operating hours |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `PurchaseRequisitionItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Requisition |
| `MaintOrderRoutingNumber` |  | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `MaintOrderOperationCounter` |  | |  |  | `NUMC(8)` | Internal counter |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `GoodsMovementIsAllowed` |  | |  |  | `CHAR(1)` | Goods Movement for Reservation Allowed |
| `MaintenanceOrderComponentBatch` |  | |  |  | `CHAR(10)` | Batch Number |
| `MaintOrdOpComponentGLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `MaintOrdOpCompCostingRelevancy` |  | |  |  | `CHAR(1)` | Indicator for Relevancy to Costing |
| `MaintCompAltvProdUsgeRateInPct` |  | |  |  | `DEC(3)` | Usage Probability in % (Alternative Item) |
| `MaintOrderOpComponentSortText` |  | |  |  | `CHAR(10)` | Sort String |
| `MaintOrdOpCompIsBulkProduct` |  | |  |  | `CHAR(1)` | Indicator: Bulk Material |
| `MaterialProvisionType` |  | |  |  | `CHAR(1)` | Material Provision Indicator |
| `MaintOrdOpCompAssgdWBSElmntInt` |  | |  |  | `NUMC(8)` | WBS Element |
| `MaintOrderOpComponentPrice` |  | |  |  | `CURR(15)` | Price in component currency |
| `MaintOrdOpCompPriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit |
| `MatlCompIsMarkedForBackflush` |  | |  |  | `CHAR(1)` | Indicator: Backflush |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `DeliveryTimeInDays` |  | |  |  | `DEC(3)` | Delivery time in days |
| `MaintOrdOpCompGdsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `MaintOrdOpCompUnloadingPtTxt` |  | |  |  | `CHAR(25)` | Unloading Point |
| `GoodsReceiptDurationInWorkDays` |  | |  |  | `DEC(3)` | Goods receipt processing time in days |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `OperationLeadTimeOffset` |  | |  |  | `DEC(3)` | Lead-time offset for operation |
| `OpsLeadTimeOffsetUnit` |  | |  |  | `UNIT(3)` | Unit for lead-time offset for operation |
| `ResponsiblePurchaseOrg` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `MaintOrdCompPurOutlineAgrmtItm` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Item is deleted |
| `OverallLimitAmount` |  | |  |  | `CURR(13)` | Overall Limit |
| `ExpectedOverallLimitAmount` |  | |  |  | `CURR(13)` | Expected Value of Overall Limit |
| `QuantityIsFixed` |  | |  |  | `CHAR(1)` | Quantity is fixed |
| `MaintOrdOpComponentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `MaintOrdOpCompProcmtTrckgNmbr` |  | |  |  | `CHAR(10)` | Requirement Tracking Number |
| `MaintOrdOpCompSpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `VariableSizeDimension1` |  | |  |  | `QUAN(13)` | Size 1 |
| `VariableSizeDimensionUnit` |  | |  |  | `UNIT(3)` | Unit of measure for sizes 1 to 3 |
| `VariableSizeCompFormulaKey` |  | |  |  | `CHAR(2)` | Formula Key for Variable-Size Items |
| `VariableSizeDimension2` |  | |  |  | `QUAN(13)` | Size 2 |
| `NumberOfVariableSizeItem` |  | |  |  | `INT4(10)` | Number of Variable-Size Items |
| `VariableSizeDimension3` |  | |  |  | `QUAN(13)` | Size 3 |
| `VariableSizeItemQuantity` |  | |  |  | `QUAN(13)` | Variable-Size Item Quantity per Piece (PC) |
| `VariableSizeComponentUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Variable-Size Item |
| `RqmtDateIsEnteredManually` |  | |  |  | `CHAR(1)` | Manual Maintenance of Requirement Date |
| `SupplierProduct` |  | |  |  | `CHAR(35)` | Material Number Used by Supplier |
| `MaintOrdCompCmtdQtyIsKept` |  | |  |  | `CHAR(1)` | Keep Committed Quantities of Stock Components |
| `MaintOrdOpCompPurOutlineAgrmt` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `MaintOrdOpCompProcmtCatalog` |  | |  |  | `CHAR(20)` | Identifier for allowed catalogs |
| `MaintOrdOpCompProcmtCatalogItm` |  | |  |  | `CHAR(40)` | Product ID in Catalog |
| `QuantityWithdrawnInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity withdrawn |
| `ConfirmedAvailableQuantity` |  | |  |  | `QUAN(15)` | Available Quantity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERCOMPONENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERCOMPONENTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Maintenance Order Component'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED}
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'MaintOrderOperationComponent2'

@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
        delta.changeDataCapture: {
            mapping:[
                      {
                        table: 'RESB', role: #MAIN,
                        viewElement: ['Reservation','ReservationItem','ReservationType'],
                        tableElement: ['RSNUM', 'RSPOS', 'RSART']
                      },
                      {
                        table: 'rsdb', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['Reservation','ReservationItem','ReservationType','ResvnPurchasingDocumentNumber'],
                        tableElement: ['RSNUM', 'RSPOS', 'RSART', 'RSINZ']
                      },
                      {
                        table: 'rsadd', role:  #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['Reservation','ReservationItem','ReservationType'],
                        tableElement: ['RSNUM', 'RSPOS', 'RSART']
                      }
                    ]
                 }
              }
          }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/

define view entity C_MaintOrderComponentDEX
  as select from I_MaintenanceOrderComponent_2 as _MaintenanceOrderComponent
{
      //keys as underlying main table resb
  key Reservation,
  key ReservationItem,
  key ReservationType,
      //exposing additional keys
      MaintenanceOrder,
      MaintenanceOrderOperation,
      MaintenanceOrderSubOperation,
      MaintOrderComponentInternalID,
      MaintenanceOrderComponent,
      ResvnPurchasingDocumentNumber,

      // Order Header. Header data will be exposed via SONT MaintenanceOrder
      //      _MaintenanceOrderDEX.FunctionalLocation                                           as FunctionalLocation,
      //      _MaintenanceOrderDEX.Equipment                                                    as Equipment,
      //      _MaintenanceOrderDEX.Assembly                                                     as Assembly,
      //      _MaintenanceOrderDEX.MaintenanceActivityType                                      as MaintenanceActivityType,
      //      _MaintenanceOrderDEX.MaintenancePlannerGroup                                      as MaintenancePlannerGroup,
      //      _MaintenanceOrderDEX.MaintenancePlanningPlant                                     as MaintenancePlanningPlant,
      //      _MaintenanceOrderDEX.MaintenanceOrderType                                         as MaintenanceOrderType,
      //      _MaintenanceOrderDEX.MaintenancePlant                                             as MaintenancePlant,
      //      _MaintenanceOrderDEX.MaintObjectLocAcctAssgmtNmbr                                 as MaintObjectLocAcctAssgmtNmbr,
      //
      //      @Semantics.systemDate.createdAt: true
      //      _MaintenanceOrder._Order.CreationDate,
      //      @Semantics.systemDateTime.lastChangedAt: true
      //      _MaintenanceOrderDEX.LastChangeDateTime,
      //
      //      _MaintenanceOrderDEX.MaintOrdProcessPhaseCode                                        as MaintOrdProcessPhaseCode,
      //      _MaintenanceOrderDEX.MaintOrdProcessSubPhaseCode                                     as MaintOrdProcessSubPhaseCode,
      //      _MaintenanceOrderDEX.LatestAcceptableCompletionDate                                  as LatestAcceptableCompletionDate,
      //      _MaintenanceOrder.PrevLtstAccptblCompletionDate                                   as PrevLtstAccptblCompletionDate,
      //      _MaintenanceOrderDEX.MaintOrderProcessingContext                                     as MaintOrderProcessingContext,
      //      cast ( _MaintenanceOrder._WBSElement.WBSElement as vdm_ps_posid preserving type ) as WBSElement,
      //       _MaintenanceOrderDEX.ControllingArea,
      //      _MaintenanceOrderDEX.ResponsibleCostCenter,

      //Reservation and other
      ReservationIsFinallyIssued,
      Plant,
      StorageLocation,
      Material,
      ComponentDescription,
      MaintComponentItemCategory,
      MaintOrdOpCompRequisitioner,
      MaterialGroup,
      Supplier,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequirementQuantityInBaseUnit,
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'UnitOfEntry'
      QuantityInUnitOfEntry,
      UnitOfEntry,
      MaintOrderCompDebitCreditCode,
      @Semantics.booleanIndicator: true
      PurReqnOrResvnGeneration,
      @EndUserText.label: 'Direct Procurement Indicator'
      MaterialCompIsProcuredDirectly,
      RequirementDate,
      RequirementTime,
      ProductTypeCode,
      ServicePerformer,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      PerformancePeriodStartTime,
      PerformancePeriodEndTime,
      @Semantics.quantity.unitOfMeasure: 'LeanServiceDurationUnit'
      LeanServiceDuration,
      LeanServiceDurationUnit,
      DistributionFunction,
      MaintOrdCompDeliveryDateAdjmt,
      SrvcSchedgIsAlignedWthOpWrkCtr,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      MaintOrderRoutingNumber,
      MaintOrderOperationCounter,
      GoodsMovementType,
      GoodsMovementIsAllowed,

      MaintenanceOrderComponentBatch,
      MaintOrdOpComponentGLAccount,
      MaintOrdOpCompCostingRelevancy,
      MaintCompAltvProdUsgeRateInPct,
      MaintOrderOpComponentSortText,
      MaintOrdOpCompIsBulkProduct,
      MaterialProvisionType,
      MaintOrdOpCompAssgdWBSElmntInt,
      @Semantics.amount.currencyCode: 'MaintOrdOpComponentCurrency'
      MaintOrderOpComponentPrice,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaintOrdOpCompPriceUnitQty,
      MatlCompIsMarkedForBackflush,
      PurchasingGroup,
      DeliveryTimeInDays,
      MaintOrdOpCompGdsRecipientName,
      MaintOrdOpCompUnloadingPtTxt,
      GoodsReceiptDurationInWorkDays,
      PurchasingInfoRecord,
      OperationLeadTimeOffset,
      OpsLeadTimeOffsetUnit,
      ResponsiblePurchaseOrg,
      MaintOrdCompPurOutlineAgrmtItm,
      IsDeleted,
      @Semantics.amount.currencyCode: 'MaintOrdOpComponentCurrency'
      OverallLimitAmount,
      @Semantics.amount.currencyCode: 'MaintOrdOpComponentCurrency'
      ExpectedOverallLimitAmount,
      QuantityIsFixed,
      MaintOrdOpComponentCurrency,
      MaintOrdOpCompProcmtTrckgNmbr,
      MaintOrdOpCompSpecialStockType,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      VariableSizeDimension1,
      VariableSizeDimensionUnit,
      VariableSizeCompFormulaKey,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      VariableSizeDimension2,
      NumberOfVariableSizeItem,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      VariableSizeDimension3,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      VariableSizeItemQuantity,
      VariableSizeComponentUnit,
      RqmtDateIsEnteredManually,
      SupplierProduct,
      MaintOrdCompCmtdQtyIsKept,
      MaintOrdOpCompPurOutlineAgrmt,
      MaintOrdOpCompProcmtCatalog,
      MaintOrdOpCompProcmtCatalogItm,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QuantityWithdrawnInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfirmedAvailableQuantity

}
//where
//  _StatusObjectActiveStatus [1: StatusCode = 'I0013'].StatusCode is null // mark for deletion based on system status
```
