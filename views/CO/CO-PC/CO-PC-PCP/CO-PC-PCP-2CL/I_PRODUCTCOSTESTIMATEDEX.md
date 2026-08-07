---
name: I_PRODUCTCOSTESTIMATEDEX
description: "This CDS view provides the header information of cost estimates for materials, sales document items and other planning objects, containing the relevant dates, lot size, unit of measure and further costing-related information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEDEX')/$value
semantic_en: "This CDS view provides the header information of cost estimates for materials, sales document items and other planning objects, containing the relevant dates, lot size, unit of measure and further costing-related information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - bo:companycode
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - document
  - interface-view
  - lob:controlling
  - material
  - plan
  - metadata-only
---
# I_PRODUCTCOSTESTIMATEDEX

**This CDS view provides the header information of cost estimates for materials, sales document items and other planning objects, containing the relevant dates, lot size, unit of measure and further costing-related information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingReferenceObject` |  | |  |  | `CHAR(1)` | Reference Object |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `CostingType` |  | |  |  | `CHAR(2)` | Costing Type |
| `CostingDate` |  | |  |  | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` |  | |  |  | `NUMC(2)` | Costing Version |
| `ValuationVariant` |  | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` |  | |  |  | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostEstimateValidityStartDate` |  | |  |  | `DATS(8)` | Costing Date From |
| `CostEstimateValidityEndDate` |  | |  |  | `DATS(8)` | Costing Date To |
| `MaterialValuationDate` |  | |  |  | `DATS(8)` | Valuation Date of a Cost Estimate |
| `QuantityStructureDate` |  | |  |  | `DATS(8)` | Quantity Structure Date for Costing |
| `ProductionVersion` |  | |  |  | `CHAR(4)` | Production Version |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `ProductBOMUsage` |  | |  |  | `CHAR(1)` | BOM Usage |
| `AlternativeBillOfMaterial` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `CostingItemIsProductComp` |  | |  |  | `CHAR(1)` | Material Component |
| `CostEstIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator for Product Costing |
| `CostingLotSize` |  | |  |  | `QUAN(13)` | Lot Size for Product Costing |
| `ValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `CostEstimateCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CostEstimateCreationDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Created |
| `CostEstimateStatus` |  | |  |  | `CHAR(2)` | Costing Status |
| `CostEstimateIsReleased` |  | |  |  | `CHAR(1)` | Release of Standard Cost Estimate |
| `CostEstimateReleasedByUser` |  | |  |  | `CHAR(12)` | User Who Released Cost Estimate in Material Master Record |
| `CostEstimateReleaseDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Released in Material Master |
| `CostEstimateMarkingDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Marked |
| `CostEstimateMarkingUser` |  | |  |  | `CHAR(12)` | User Who Marked Cost Estimate in Material Master |
| `CostEstimateMarkedByUser` |  | |  |  | `CHAR(12)` | User Who Marked Cost Estimate in Material Master |
| `CostingErrorMessageType` |  | |  |  | `CHAR(1)` | Message Type |
| `CostEstIsMixedCosting` |  | |  |  | `CHAR(1)` | Mixed Costing Indicator |
| `CostEstimateIsForProcmtAltv` |  | |  |  | `CHAR(1)` | Cost Estimate for a Procurement Alternative |
| `ProcmtAltvCostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number of Procurement Alternative |
| `ProcessCategory` |  | |  |  | `CHAR(4)` | Process Category |
| `CostgMixingRatioValue` |  | |  |  | `DEC(13)` | Mixed Costing: Mixing Ratio |
| `ProcmtAltvValuationVariant` |  | |  |  | `CHAR(3)` | Valuation Variant of Procurement Alternative |
| `SpecialProcurementType` |  | |  |  | `CHAR(2)` | Special Procurement Key for the Costing Object |
| `MaterialProcurementType` |  | |  |  | `CHAR(1)` | Special procurement type |
| `SpecialProcurementPlant` |  | |  |  | `CHAR(4)` | Special Procurement Plant - Costing |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet for Calculating Overhead |
| `CostingOverheadType` |  | |  |  | `CHAR(1)` | Overhead Type |
| `MaterialValnStrategy` |  | |  |  | `CHAR(1)` | Valuation Strategy for Raw Materials and Purchased Parts |
| `MaterialValnPurgInfoRecdStrgy` |  | |  |  | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `CostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CostingOverheadGroup` |  | |  |  | `CHAR(10)` | Costing Overhead Group |
| `CostingOverhead` |  | |  |  | `CHAR(6)` | Overhead key |
| `PostingPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `PostingFiscalYear` |  | |  |  | `NUMC(4)` | Posting Date YYYY |
| `CostingErrorLogID` |  | |  |  | `NUMC(12)` | Error Management Number |
| `CostEstimateTransferControl` |  | |  |  | `CHAR(4)` | Transfer Control |
| `LowLevelCode` |  | |  |  | `CHAR(3)` | Low-Level Code |
| `CostEstimateCostingLevel` |  | |  |  | `NUMC(4)` | Costing Level |
| `CostComponentStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `AuxiliaryCostCompStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure for Auxiliary Cost Component Split |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `EstimatedCostCostingRun` |  | |  |  | `CHAR(8)` | Name of Costing Run |
| `EstimatedCostCostingRunDate` |  | |  |  | `DATS(8)` | Costing Run Date |
| `ConfiguredProduct` |  | |  |  | `CHAR(40)` | Configured Material (Variant) |
| `IsMaterialCostedWithQtyStruc` |  | |  |  | `CHAR(1)` | Material Is Costed with Quantity Structure |
