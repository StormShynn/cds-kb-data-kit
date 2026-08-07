---
name: C_MAINTORDERCOMPONENTDEX
description: Maintenance Order Component
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERCOMPONENTDEX')/$value
semantic_en: Maintenance Order Component
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
  - metadata-only
---
# C_MAINTORDERCOMPONENTDEX

**Maintenance Order Component**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERCOMPONENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` |  | |  |  | `NUMC(10)` | Number of reservation/dependent requirements |
| `ReservationItem` |  | |  |  | `NUMC(4)` | Item Number of Reservation / Dependent Requirements |
| `ReservationType` |  | |  |  | `CHAR(1)` | Record type |
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
