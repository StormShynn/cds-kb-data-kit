---
name: C_JOINTVENTUREACCTGDTLQRY
description: Joint Venture Accounting Detail Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOINTVENTUREACCTGDTLQRY')/$value
semantic_en: Joint Venture Accounting Detail Query
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_JOINTVENTUREACCTGDTLQRY

**Joint Venture Accounting Detail Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOINTVENTUREACCTGDTLQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `JointVentureLineItem` | `CHAR(18)` | Joint Venture Record Number |
| `Ledger` | `CHAR(2)` | Ledger |
| `RecordType` | `CHAR(1)` | Record Type |
| `SpecialLedgerVersion` | `CHAR(3)` | Version |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalPeriod` | `NUMC(3)` | Posting Period |
| `Currency` | `CUKY(5)` | Currency Key |
| `UnitOfMeasure` | `UNIT(3)` | Base Unit of Measure |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `DocumentType` | `CHAR(1)` | Document Category |
| `AccountingDocument` | `CHAR(10)` | Accounting Document |
| `AccountingDocumentItem` | `NUMC(3)` | Line Item in Joint Venture Document |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `GLAccount` | `CHAR(10)` | Account Number |
| `JointVentureEquityGroup` | `CHAR(3)` | Equity Group |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `OriginOrder` | `CHAR(12)` | Order Number |
| `ProjectInternalID` | `NUMC(8)` | Internal WBS Element |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `MasterFixedAsset` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `JointVentureRecoveryCode` | `CHAR(2)` | Recovery Indicator |
| `Partner` | `CHAR(10)` | Partner account number |
| `InternalOrder` | `CHAR(12)` | Internal Order |
| `NetworkActivity` | `CHAR(4)` | Activity Number |
| `AdditionalQuantity1Unit` | `UNIT(3)` | Additional unit of measure |
| `DocumentItemText` | `CHAR(50)` | Description of Line Item |
| `IsAutomaticallyPosted` | `CHAR(1)` | Automatic Posting |
| `AccountingDocumentType` | `CHAR(2)` | Accounting Document Type |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `ValDateForCurrencyTranslation` | `DATS(8)` | Value Date for Currency Translation |
| `ValueDate` | `DATS(8)` | Value Date |
| `RefAccountingDocument` | `CHAR(10)` | Ref Accounting Document |
| `ReferenceDocumentFiscalYear` | `NUMC(4)` | Reference Doc Year |
| `RefJntVentureDocumentLineItem` | `NUMC(5)` | Ref JV Document Item |
| `ReferenceDocumentType` | `CHAR(1)` | Reference Doc Type |
| `BusinessTransactionDocItem` | `CHAR(4)` | Business Transaction |
| `RefAccountingDocumentItem` | `NUMC(3)` | Ref Accounting Document Line Item |
| `PayrollType` | `CHAR(2)` | Payroll Type |
| `AccountingDocCreatedByUser` | `CHAR(12)` | Created By |
| `DocumentDate` | `DATS(8)` | Document Date in Document |
| `TimeEntry` | `TIMS(6)` | Time of Entry |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `BillingMonth` | `DATS(8)` | Billing Month |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `TransactionTypeDetermination` | `CHAR(3)` | Transaction Key |
| `ActivityType` | `CHAR(6)` | Activity Type |
| `PRAAllocationFrequencyCode` | `CHAR(10)` | Allocation Cycle |
| `StartDate` | `DATS(8)` | Start Date |
| `Material` | `CHAR(40)` | Material Number |
| `ReferenceDocument` | `CHAR(10)` | Reference Document Number |
| `ReferenceBillingDocument` | `CHAR(10)` | Ref Billing Document |
| `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `PaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `ProductionMonth` | `DATS(8)` | Production Month (Date to find period and year) |
| `AmountInTransactionCurrency` | `CURR(17)` | Amount in Transaction Currency |
| `QuantityInBaseUnit` | `QUAN(15)` | Quantity in Base Unit |
| `AmountInCompanyCodeCurrency` | `CURR(17)` | Value in local currency |
| `AmountInGlobalCurrency` | `CURR(17)` | Value in group currency |
