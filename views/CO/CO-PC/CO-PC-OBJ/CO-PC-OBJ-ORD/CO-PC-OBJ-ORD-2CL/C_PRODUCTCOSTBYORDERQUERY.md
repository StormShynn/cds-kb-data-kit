---
name: C_PRODUCTCOSTBYORDERQUERY
description: The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual output quantity, plan output quantity, variance, and WIP. This CDS view also provides order master data information, such as order number, order category, and order description. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled for the order (plan costs), and how many costs are invested in the order (actual costs)? What is the difference between plan costs and actual costs? How many outputs are scheduled before production process (plan output quantity), and how many outputs are produced in Goods Receipt (actual output quantity)? What is the order master data information (order number, order category, and order description, for example)?
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTCOSTBYORDERQUERY')/$value
semantic_en: The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual output quantity, plan output quantity, variance, and WIP. This CDS view also provides order master data information, such as order number, order category, and order description. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled for the order (plan costs), and how many costs are invested in the order (actual costs)? What is the difference between plan costs and actual costs? How many outputs are scheduled before production process (plan output quantity), and how many outputs are produced in Goods Receipt (actual output quantity)? What is the order master data information (order number, order category, and order description, for example)?
tags:
  - CO
  - bo:businesspartner
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-ORD
  - CO-PC-OBJ-ORD-2CL
  - component:CO-PC-OBJ-ORD-2CL
  - consumption-view
  - goods-receipt
  - lob:controlling
  - master-data
  - order
  - plan
  - product
  - metadata-only
---
# C_PRODUCTCOSTBYORDERQUERY

**The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual output quantity, plan output quantity, variance, and WIP. This CDS view also provides order master data information, such as order number, order category, and order description. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled for the order (plan costs), and how many costs are invested in the order (actual costs)? What is the difference between plan costs and actual costs? How many outputs are scheduled before production process (plan output quantity), and how many outputs are produced in Goods Receipt (actual output quantity)? What is the order master data information (order number, order category, and order description, for example)?**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTCOSTBYORDERQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `OrderID` | `CHAR(12)` | Order Number |
| `OrderType` | `CHAR(4)` | Order Type |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `ReferenceOrder` | `CHAR(12)` | Reference Order Number |
| `ExternalOrder` | `CHAR(20)` | External Order Number |
| `OrderDescription` | `CHAR(40)` | Order Description |
| `OrderTypeName` | `CHAR(40)` | Name of an Order Type |
| `OrderCategoryName` | `CHAR(60)` | Order Category Name |
| `Plant` | `CHAR(4)` | Plant |
| `PlantName` | `CHAR(30)` | Plant Name |
| `ProductionUnit` | `UNIT(3)` | Output Unit of Measure |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` | `CHAR(25)` | Controlling Area Name |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Company Code Name |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CreationDate` | `DATS(8)` | Created On |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalWeek` | `NUMC(2)` | Fiscal Week |
| `Material` | `CHAR(40)` | Product |
| `MaterialName` | `CHAR(40)` | Material Description |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `ScheduledBasicEndDate` | `DATS(8)` | Scheduled Finish Date |
| `ScheduledReleaseDate` | `DATS(8)` | Scheduled Release Date |
| `ActualStartDate` | `DATS(8)` | Actual Start Date |
| `ConfirmedEndDate` | `DATS(8)` | Manufacturing Order Confirmed End Date |
| `ActualReleasedDate` | `DATS(8)` | Actual Release Date |
| `DisplayCurrency` | `CUKY(5)` | Currency |
| `ActlCostInDspCrcy` | `CURR(23)` | Total Actual Cost |
| `ActlVarblCostInDspCrcy` | `CURR(23)` | Actual Variable Cost |
| `ActlFixedCostInDspCrcy` | `CURR(23)` | Actual Fixed Cost |
| `PlanCostInDspCrcy` | `CURR(23)` | Total Plan Cost |
| `PlanFixedCostInDspCrcy` | `CURR(23)` | Plan Fixed Cost |
| `PlanVarblCostInDspCrcy` | `CURR(23)` | Plan Variable Cost |
| `InptPrVarcAmtInDspCrcy` | `CURR(23)` | Input Price Variance in Display Currency |
| `InptQtyVarcAmtInDspCrcy` | `CURR(23)` | Input Quantity Variance |
| `RsceUsgeVarcAmtInDspCrcy` | `CURR(23)` | Resource Usage Variance |
| `InptRmngVarcAmtInDspCrcy` | `CURR(23)` | Remaining Input Variance |
| `MixedPrVarcAmtInDspCrcy` | `CURR(23)` | Mixed-Price Variance |
| `OutpPrVarcAmtInDspCrcy` | `CURR(23)` | Output Price Variance |
| `LotSizeVarcAmtInDspCrcy` | `CURR(23)` | Lot Size Variance |
| `OutpQtyVarcAmtInDspCrcy` | `CURR(23)` | Output Quantity Variance |
| `OutpRmngVarcAmtInDspCrcy` | `CURR(23)` | Remaining Variance |
| `ScrapVarcAmtInDspCrcy` | `CURR(23)` | Scrap Variance |
| `CostVarianceInDspCrcy` | `CURR(23)` | Cost Variance |
| `WIPAmtInDisplayCurrency` | `CURR(23)` | Work In Process |
| `RsrvAmountInDisplayCrcy` | `CURR(23)` | Reserves for Unrealized Costs |
| `PlanOutputQuantity` | `QUAN(23)` | Plan Output Quantity |
| `ActualOutputQuantity` | `QUAN(23)` | Actual Output Quantity |
| `DebitActlPlnDiffCostInDspCrcy` | `CURR(23)` | Plan Cost Debit/Actual Cost Debit Variance |
