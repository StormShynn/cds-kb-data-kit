---
name: I_PRODUCTMARGINANALYSISCUBE
description: Product Margin - Cube
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTMARGINANALYSISCUBE')/$value
semantic_en: Product Margin - Cube
keywords:
  - Product Margin - Cube
  - Product Margin - Cube
  - Product Margin - Cube
tags:
  - CO
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# I_PRODUCTMARGINANALYSISCUBE

**Product Margin - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTMARGINANALYSISCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `CurrencyRole` | `CHAR(2)` | Currency Role |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `Plant` | `CHAR(4)` | Plant |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `TradingPartner` | `CHAR(6)` | Company ID of Trading Partner |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrderID` | `CHAR(12)` | Order ID |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `PostingDate` | `DATS(8)` | Posting Date |
| `Supplier` | `CHAR(10)` | Supplier |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` | `CHAR(10)` | Inventory Valuation Type |
| `Product` | `CHAR(40)` | Product |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `QuantityUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` | `QUAN(23)` | Quantity |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `Currency` | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Currency Role Currency |
| `FixedAmountInDspCrcy` | `CURR(23)` | Fixed Amount in Currency Role Currency |
| `InptPrVarcAmtInDspCrcy` | `CURR(23)` | Input Price Variance in Display Currency |
| `OutpPrVarcAmtInDspCrcy` | `CURR(23)` | Output Price Variance Amount in Display Currency |
| `InptQtyVarcAmtInDspCrcy` | `CURR(23)` | Input Quantity Variance Amount in Display Currency |
| `RsceUsgeVarcAmtInDspCrcy` | `CURR(23)` | Resource Usage Variance Amount in Display Currency |
| `LotSizeVarcAmtInDspCrcy` | `CURR(23)` | Lot Size Variance Amount in Display Currency |
| `InptRmngVarcAmtInDspCrcy` | `CURR(23)` | Remaining Variance Amount in Display Currency |
