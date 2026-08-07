---
name: I_ML_BALANCE
description: Balance Summary for Material Ledger
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ML_BALANCE')/$value
semantic_en: Balance Summary for Material Ledger
tags:
  - CO
  - CO-PC
  - CO-PC-ML
  - CO-PC-ML-2CL
  - component:CO-PC-ML-2CL
  - interface-view
  - lob:controlling
  - material
  - metadata-only
---
# I_ML_BALANCE

**Balance Summary for Material Ledger**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ML_BALANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `MatlDocLatestPostgDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusinessTransactionTypeName` |  | |  |  | `CHAR(30)` | Business Transaction Type Name |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `ProductionOrder` |  | |  |  | `CHAR(12)` | Order ID |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `InventoryValuationCategory` |  | |  |  | `CHAR(1)` | Valuation Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MaterialLedgerProcessType` |  | |  |  | `CHAR(4)` | Material Ledger Process Type (Procurement/Consumption) |
| `MaterialLedgerCategory` |  | |  |  | `CHAR(2)` | Category in Material Ledger Update Structure |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `SlsPriceAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Price Amount in Company Code Currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `InventoryQty` |  | |  |  | `QUAN(23)` | Valuation Quantity |
