---
name: I_PRODUCTPLANT
description: This CDS view helps to retrieve plant related data of products.
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANT')/$value
semantic_en: This CDS view helps to retrieve plant related data of products.
keywords:
  - Product Plant
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - plan
  - product
  - metadata-only
---
# I_PRODUCTPLANT

**This CDS view helps to retrieve plant related data of products.**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin of Material (Non-Preferential Ori.) |
| `RegionOfOrigin` |  | |  |  | `CHAR(3)` | Region of Origin of Material (Non-Preferential Origin) |
| `ProductionInvtryManagedLoc` |  | |  |  | `CHAR(4)` | Storage Location |
| `ProfileCode` |  | |  |  | `CHAR(2)` | Plant-Specific Material Status |
| `ProfileValidityStartDate` |  | |  |  | `DATS(8)` | Date from Which the Plant-Specific Material Status Is Valid |
| `AvailabilityCheckType` |  | |  |  | `CHAR(2)` | Checking Group for Availability Check |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PeriodType` |  | |  |  | `CHAR(1)` | Period Indicator |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Commodity` |  | |  |  | `CHAR(17)` | Commodity Code |
| `GoodsReceiptDuration` |  | |  |  | `DEC(3)` | Goods receipt processing time in days |
| `MaintenanceStatusName` |  | |  |  | `CHAR(15)` | Maintenance Status |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Flag Material for Deletion at Plant Level |
| `MRPType` |  | |  |  | `CHAR(2)` | MRP Type |
| `MRPResponsible` |  | |  |  | `CHAR(3)` | MRP Controller |
| `ABCIndicator` |  | |  |  | `CHAR(1)` | ABC Indicator |
| `MinimumLotSizeQuantity` |  | |  |  | `QUAN(13)` | Minimum Lot Size |
| `MaximumLotSizeQuantity` |  | |  |  | `QUAN(13)` | Maximum Lot Size |
| `FixedLotSizeQuantity` |  | |  |  | `QUAN(13)` | Fixed lot size |
| `ConsumptionTaxCtrlCode` |  | |  |  | `CHAR(16)` | Control code for consumption taxes in foreign trade |
| `IsCoProduct` |  | |  |  | `CHAR(1)` | Co-Product |
| `ProductIsConfigurable` |  | |  |  | `CHAR(40)` | Configurable Product |
| `ConfigurableProduct` |  | |  |  | `CHAR(40)` | Configurable Material |
| `StockDeterminationGroup` |  | |  |  | `CHAR(4)` | Stock determination group |
| `StockInTransferQuantity` |  | |  |  | `QUAN(13)` |  |
| `StockInTransitQuantity` |  | |  |  | `QUAN(13)` |  |
| `HasPostToInspectionStock` |  | |  |  | `CHAR(1)` | Has Post to Inspection Stock |
| `IsBatchManagementRequired` |  | |  |  | `CHAR(1)` | Batch Management Requirement Indicator for Plant |
| `SerialNumberProfile` |  | |  |  | `CHAR(4)` | Serial Number Profile |
| `IsNegativeStockAllowed` |  | |  |  | `CHAR(1)` | Negative stocks allowed in plant |
| `GoodsReceiptBlockedStockQty` |  | |  |  | `QUAN(13)` |  |
| `HasConsignmentCtrl` |  | |  |  | `CHAR(1)` | Consignment Control |
| `FiscalYearCurrentPeriod` |  | |  |  | `NUMC(4)` |  |
| `FiscalMonthCurrentPeriod` |  | |  |  | `NUMC(2)` |  |
| `IsPurgAcrossPurgGroup` |  | |  |  | `CHAR(1)` | Purchasing Across Purchasing Group |
| `IsInternalBatchManaged` |  | |  |  | `CHAR(1)` | Batch management indicator (internal) |
| `ProductCFOPCategory` |  | |  |  | `CHAR(2)` | Material CFOP Category |
| `ProductIsExciseTaxRelevant` |  | |  |  | `CHAR(1)` | Excise Tax Relevance Indicator |
| `UnderDelivToleranceLimit` |  | |  |  | `DEC(3)` | Underdelivery Tolerance Limit |
| `OverDelivToleranceLimit` |  | |  |  | `DEC(3)` | Overdelivery Tolerance Limit |
| `ProcurementType` |  | |  |  | `CHAR(1)` | Procurement Type |
| `SpecialProcurementType` |  | |  |  | `CHAR(2)` | Special Procurement Type |
| `ProductionSchedulingProfile` |  | |  |  | `CHAR(6)` | Production Scheduling Profile |
| `ProductionSupervisor` |  | |  |  | `CHAR(3)` | Production Supervisor |
| `SafetyStockQuantity` |  | |  |  | `QUAN(13)` | Safety Stock |
| `GoodsIssueUnit` |  | |  |  | `UNIT(3)` | Unit of Issue |
| `SourceOfSupplyCategory` |  | |  |  | `CHAR(1)` | Source of Supply |
| `ConsumptionReferenceProduct` |  | |  |  | `CHAR(40)` | Reference material for consumption |
| `ConsumptionReferencePlant` |  | |  |  | `CHAR(4)` | Reference plant for consumption |
| `ConsumptionRefUsageEndDate` |  | |  |  | `DATS(8)` | To date of the material to be copied for consumption |
| `ConsumptionQtyMultiplier` |  | |  |  | `DEC(4)` | Multiplier for reference material for consumption |
| `ProductUnitGroup` |  | |  |  | `CHAR(4)` | Unit of Measure Group |
| `DistrCntrDistributionProfile` |  | |  |  | `CHAR(3)` | Distribution profile of material in plant |
| `ConsignmentControl` |  | |  |  | `CHAR(1)` | Consignment Control |
| `GoodIssueProcessingDays` |  | |  |  | `DEC(3)` | Goods Issue Processing Time in Days |
| `PlannedDeliveryDurationInDays` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
| `IsActiveEntity` |  | |  |  | `CHAR(1)` | Draft - Indicator - Is active document |
| `ProductIsCriticalPrt` |  | |  |  | `CHAR(1)` | Indicator: Critical part |
| `ProductLogisticsHandlingGroup` |  | |  |  | `CHAR(4)` | Logistics handling group for workload calculation |
| `MaterialFreightGroup` |  | |  |  | `CHAR(8)` | Material Freight Group |
| `OriginalBatchReferenceMaterial` |  | |  |  | `CHAR(40)` | Reference Material for Original Batches |
| `OriglBatchManagementIsRequired` |  | |  |  | `CHAR(1)` | Indicator for Original Batch Management |
| `ProductConfiguration` |  | |  |  | `NUMC(18)` | Internal object number |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
