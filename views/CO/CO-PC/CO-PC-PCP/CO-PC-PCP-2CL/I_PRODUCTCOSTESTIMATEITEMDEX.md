---
name: I_PRODUCTCOSTESTIMATEITEMDEX
description: "This CDS view provides the results at item level of cost estimates for materials, sales document items and other planning objects. The information can be used to analyze the calculated costs and the origins of the costs. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEITEMDEX')/$value
semantic_en: "This CDS view provides the results at item level of cost estimates for materials, sales document items and other planning objects. The information can be used to analyze the calculated costs and the origins of the costs. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_PRODUCTCOSTESTIMATEITEMDEX

**This CDS view provides the results at item level of cost estimates for materials, sales document items and other planning objects. The information can be used to analyze the calculated costs and the origins of the costs. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingLedger` |  | |  |  | `CHAR(2)` | Ledger for Controlling Objects |
| `CostingReferenceObject` |  | |  |  | `CHAR(1)` | Reference Object |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `CostingType` |  | |  |  | `CHAR(2)` | Costing Type |
| `CostingDate` |  | |  |  | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` |  | |  |  | `NUMC(2)` | Costing Version |
| `ValuationVariant` |  | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` |  | |  |  | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `CostingItem` |  | |  |  | `NUMC(5)` | Unit Costing Line Item Number |
| `CostingItemCategory` |  | |  |  | `CHAR(1)` | Item Category |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number of Main Cost Component Split |
| `AuxiliaryCostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number of Auxiliary Cost Component Split |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `TotalPriceInGroupCrcy` |  | |  |  | `CURR(15)` | Total Price in Group Currency |
| `FixedPriceInGroupCrcy` |  | |  |  | `CURR(15)` | Fixed Price in Group Currency |
| `TotalAmountInGroupCrcy` |  | |  |  | `CURR(15)` | Total Value in Group Currency |
| `FixedAmountInGroupCurrency` |  | |  |  | `CURR(15)` | Fixed Value in Group Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TotalPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Total Price in Company Code Currency |
| `FixedPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Price in Company Code Currency |
| `TotalAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Total Amount in Company Code Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Amount in Company Code Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Quantity |
| `AssyScrapQuantityInValnQtyUnit` |  | |  |  | `QUAN(15)` | Scrap Quantity |
| `CompScrapQuantityInValnQtyUnit` |  | |  |  | `QUAN(15)` | Component Scrap Quantity |
| `CostingPriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit of Prices in Controlling Area Currency |
| `CostingPriceQtyUnit` |  | |  |  | `UNIT(3)` | Price Quantity Unit |
| `CostingObject` |  | |  |  | `NUMC(8)` | Object ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Operation` |  | |  |  | `CHAR(4)` | Operation or Phase Number |
| `CostingValuationStrategy` |  | |  |  | `CHAR(1)` | Valuation Strategy for Material Component |
| `MaterialValnPurgInfoRecdStrgy` |  | |  |  | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingInfoRecordCategory` |  | |  |  | `CHAR(1)` | Purchasing info record category |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `TransferCostEstimate` |  | |  |  | `NUMC(12)` | Transfer Cost Estimate |
| `TransferCostingType` |  | |  |  | `CHAR(2)` | Transfer Costing Type |
| `TransferCostingDate` |  | |  |  | `DATS(8)` | Transfer Costing Date |
| `TransferCostingVersion` |  | |  |  | `NUMC(2)` | Transfer Costing Version |
| `TransferValuationVariant` |  | |  |  | `CHAR(3)` | Transfer Valuation Variant |
| `CostEstIsMixedCosting` |  | |  |  | `CHAR(1)` | Mixed Costing Indicator |
| `CostgMixingRatioValue` |  | |  |  | `DEC(13)` | Mixing Ratio |
| `ProcmtAltvCostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number of Procurement Alternative |
| `BillOfMaterialItemNumber` |  | |  |  | `CHAR(4)` | Bill of Material Item Number |
| `CostingItemIsAssembly` |  | |  |  | `CHAR(1)` | Assembly Indicator for Item |
| `ValuationSegmentation` |  | |  |  | `CHAR(30)` | Valuation Segmentation Unit |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `LowLevelCode` |  | |  |  | `CHAR(3)` | Low-Level Code |
| `CostCompSplitIsExisting` |  | |  |  | `CHAR(1)` | Main Cost Component Split for KALKTAB Item Exists |
| `HasError` |  | |  |  | `CHAR(1)` | Error Indicator |
| `IsLotSizeIndependent` |  | |  |  | `CHAR(1)` | Lot-Size-Independent Indicator |
