---
name: C_PRODCOSTESTCOSTCOMPDEX
description: Product Cost Estimate Cost Component DEX
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTESTCOSTCOMPDEX')/$value
semantic_en: Product Cost Estimate Cost Component DEX
tags:
  - CO
  - bo:material
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - consumption-view
  - lob:controlling
  - product
  - metadata-only
---
# C_PRODCOSTESTCOSTCOMPDEX

**Product Cost Estimate Cost Component DEX**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTESTCOSTCOMPDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CostingReferenceObject` | `CHAR(1)` | Reference Object |
| `CostEstimate` | `NUMC(12)` | Cost Estimate |
| `CostingType` | `CHAR(2)` | Costing Type |
| `CostingDate` | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` | `NUMC(2)` | Costing Version |
| `ValuationVariant` | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `CostComponentStructure` | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `CostComponent` | `NUMC(3)` | Cost Component Number |
| `CostEstimateValidityStartDate` | `DATS(8)` | Costing Date From |
| `CostingVariant` | `CHAR(4)` | Costing Variant |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CostingLotSize` | `QUAN(13)` | Lot Size for Product Costing |
| `ValuationQuantityUnit` | `UNIT(3)` | Valuation Unit of Measure |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `ControllingAreaCurrency` | `CUKY(5)` | Global Currency |
| `TotalCostInCompanyCodeCurrency` | `CURR(23)` | Total Cost in Company Code Currency |
| `FixedCostInCompanyCodeCurrency` | `CURR(23)` | Fixed Cost in Company Code Currency |
| `TotalCostInCtrlgAreaCurrency` | `CURR(23)` | Total Cost in Controlling Area Currency |
| `FixedCostInCtrlgAreaCurrency` | `CURR(23)` | Fixed Cost in Controlling Area Currency |
| `CostCompIsForSalesAndAdminCost` | `CHAR(1)` | Cost Component for Sales and Administration Costs |
| `CostCompIsForCOGM` | `CHAR(1)` | Cost Component for Cost of Goods Manufactured |
| `CostCompIsForInvtryValuation` | `CHAR(1)` | Cost Component Relevant for Inventory Valuation |
