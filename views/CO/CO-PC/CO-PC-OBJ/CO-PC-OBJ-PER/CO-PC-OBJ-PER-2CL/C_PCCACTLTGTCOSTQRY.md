---
name: C_PCCACTLTGTCOSTQRY
description: Actual and Target Costs for PCC - Query
app_component: CO-PC-OBJ-PER-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value
semantic_en: Actual and Target Costs for PCC - Query
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-PER
  - CO-PC-OBJ-PER-2CL
  - component:CO-PC-OBJ-PER-2CL
  - consumption-view
  - lob:controlling
  - metadata-only
---
# C_PCCACTLTGTCOSTQRY

**Actual and Target Costs for PCC - Query**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-PER-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `OrderID` | `CHAR(12)` | Order ID |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `WorkCenterInternalID` | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` | `CHAR(4)` | Order Operation |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `Plant` | `CHAR(4)` | Plant |
| `Product` | `CHAR(40)` | Product |
| `UnitOfMeasure` | `UNIT(3)` | Cost Source Unit |
| `ProducedProduct` | `CHAR(40)` | Product |
| `WorkCenter` | `CHAR(8)` | Work Center |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `OrderType` | `CHAR(4)` | Order Type |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `DisplayCurrency` | `CUKY(5)` | Currency Key |
| `CreditActlCostInDspCrcy` | `CURR(23)` | Actual Cost Credit |
| `DebitActlCostInDspCrcy` | `CURR(23)` | Actual Cost Debit |
| `CrdtActlFxdCostInDspCrcy` | `CURR(23)` | Actual Fixed Cost Credit |
| `DebitActlFxdCostInDspCrcy` | `CURR(23)` | Actual Fixed Cost Debit |
| `ActualQtyInCostSourceUnit` | `QUAN(23)` | Actual Quantity |
| `CrdtTargetCostInDspCrcy` | `CURR(23)` | Target Cost Credit |
| `DebitTargetCostInDspCrcy` | `CURR(23)` | Target Cost Debit |
| `TargetQtyInCostSourceUnit` | `QUAN(23)` | Target Quantity |
