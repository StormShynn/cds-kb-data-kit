---
name: C_WORKCENTERPRODCOSTQUERY
description: The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual input quantity, plan input quantity, and actual-plan input quantity difference. This CDS view also provides order master data information, such as order number, order category, work center, and operation. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled on work center/operation of orders (plan costs), and how many costs are invested on work center/operation of orders (actual costs)? What is the difference between plan costs and actual costs? How much material is scheduled before production process (plan input quantity), and how much material is invested in Goods Issue (actual input quantity)? What is the difference between plan input quantity and actual input quantity? What is the order master data information (order number, order category, work center, and operation, for example)
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WORKCENTERPRODCOSTQUERY')/$value
semantic_en: The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual input quantity, plan input quantity, and actual-plan input quantity difference. This CDS view also provides order master data information, such as order number, order category, work center, and operation. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled on work center/operation of orders (plan costs), and how many costs are invested on work center/operation of orders (actual costs)? What is the difference between plan costs and actual costs? How much material is scheduled before production process (plan input quantity), and how much material is invested in Goods Issue (actual input quantity)? What is the difference between plan input quantity and actual input quantity? What is the order master data information (order number, order category, work center, and operation, for example)
tags:
  - CO
  - bo:businesspartner
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-ORD
  - CO-PC-OBJ-ORD-2CL
  - component:CO-PC-OBJ-ORD-2CL
  - consumption-view
  - goods-issue
  - lob:controlling
  - master-data
  - material
  - order
  - plan
  - product
  - metadata-only
---
# C_WORKCENTERPRODCOSTQUERY

**The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual input quantity, plan input quantity, and actual-plan input quantity difference. This CDS view also provides order master data information, such as order number, order category, work center, and operation. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled on work center/operation of orders (plan costs), and how many costs are invested on work center/operation of orders (actual costs)? What is the difference between plan costs and actual costs? How much material is scheduled before production process (plan input quantity), and how much material is invested in Goods Issue (actual input quantity)? What is the difference between plan input quantity and actual input quantity? What is the order master data information (order number, order category, work center, and operation, for example)**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WORKCENTERPRODCOSTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Operation |
| `OrderID` |  | |  |  | `CHAR(12)` | Order |
| `GLAccount` |  | |  |  | `CHAR(10)` | General Ledger Account |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterText` |  | |  |  | `CHAR(40)` | Work Center Text |
| `MaterialName` |  | |  |  | `CHAR(40)` | Material Description |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Company Code Name |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OrderDescription` |  | |  |  | `CHAR(40)` | Order Description |
| `OrderTypeName` |  | |  |  | `CHAR(40)` | Name of an Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DebitPlanCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Cost Debit |
| `DebitPlnFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Fixed Cost Debit |
| `DebitPlnVarblCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Variable Cost Debit |
| `DebitActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Debit |
| `DebitActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Debit |
| `DebitActlVarblCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Variable Cost Debit |
| `DebitActlPlnDiffCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Cost Debit/Actual Cost Debit Variance |
| `ActualQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Actual Quantity |
| `PlanQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Plan Quantity |
| `ActlPlanDiffQuantity` |  | |  |  | `QUAN(23)` | Plan/Actual Quantity Variance |
