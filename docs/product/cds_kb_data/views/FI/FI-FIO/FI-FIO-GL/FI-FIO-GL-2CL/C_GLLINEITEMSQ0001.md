---
name: C_GLLINEITEMSQ0001
description: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLLINEITEMSQ0001')/$value
semantic_en: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?"
semantic_vi: "Journal Entry Analyzer — CDS view tiêu dùng dựa trên I_GLAccountLineItemCube."
keywords:
  - "Journal Entry Analyzer"
  - "journal"
  - "entry"
  - "analyzer"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "fiscal"
  - "year"
  - "jrnl"
  - "entr"
  - "altv"
  - "consecutive"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_GLLINEITEMSQ0001

**This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLLINEITEMSQ0001')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `JrnlEntrAltvFYConsecutiveID` |  | |  |  | `CHAR(10)` | Shifted Fiscal Year Consecutive ID |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` |  | |  |  | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualValueDate` |  | |  |  | `DATS(8)` | Accrual Value Date |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLLINEITEMSQ0001')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLLINEITEMSQ0001')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIGLLITMQ0001'
@EndUserText.label: 'Journal Entry Analyzer'
@VDM.viewType: #CONSUMPTION

@Analytics.query: true
@OData.publish: true
@Analytics.settings.maxProcessingEffort: #HIGH

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

define view C_GLLineItemsQ0001
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu,
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate  : vdm_v_key_date

  as select from I_GLAccountLineItemCube as I_GLAccountLineItemCube
{

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
        resultElement: 'Ledger', binding: [
        { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
       }
  @AnalyticsDetails.query.variableSequence : 10
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Ledger,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,


  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 30
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #FREE
  LedgerFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  JrnlEntrAltvFYConsecutiveID,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 50
  @AnalyticsDetails.query.axis: #FREE
  FiscalPeriod,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  PostingDate,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 70
  @AnalyticsDetails.query.axis: #FREE
  FinancialTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  AccountingDocument,

  ///////////////////////////////////////////////////////////////////////
  // Measures - Amounts
  ///////////////////////////////////////////////////////////////////////
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  GlobalCurrency,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FunctionalCurrency,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  BalanceTransactionCurrency,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  TransactionCurrency,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency1,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency2,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency3,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency4,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency5,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency6,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency7,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency8,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Consumption.semanticObject: 'GLAccount'
  AmountInCompanyCodeCurrency,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Consumption.semanticObject: 'GLAccount'
  AmountInTransactionCurrency,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Consumption.semanticObject: 'GLAccount'
  AmountInGlobalCurrency,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
  AmountInFunctionalCurrency,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
  AmountInBalanceTransacCrcy,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
  AmountInFreeDefinedCurrency1,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
  AmountInFreeDefinedCurrency2,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
  AmountInFreeDefinedCurrency3,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
  AmountInFreeDefinedCurrency4,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
  AmountInFreeDefinedCurrency5,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
  AmountInFreeDefinedCurrency6,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
  AmountInFreeDefinedCurrency7,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
  AmountInFreeDefinedCurrency8,


  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  DebitAmountInCoCodeCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  CreditAmountInCoCodeCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  DebitAmountInGlobalCrcy,
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  CreditAmountInGlobalCrcy,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
  DebitAmountInFunctionalCrcy,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
  CreditAmountInFunctionalCrcy,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  DebitAmountInTransCrcy,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  CreditAmountInTransCrcy,
  @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  DebitAmountInBalanceTransCrcy,
  @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  CreditAmountInBalanceTransCrcy,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
  DebitAmountInFreeDefinedCrcy1,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
  CreditAmountInFreeDefinedCrcy1,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
  DebitAmountInFreeDefinedCrcy2,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
  CreditAmountInFreeDefinedCrcy2,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
  DebitAmountInFreeDefinedCrcy3,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
  CreditAmountInFreeDefinedCrcy3,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
  DebitAmountInFreeDefinedCrcy4,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
  CreditAmountInFreeDefinedCrcy4,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
  DebitAmountInFreeDefinedCrcy5,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
  CreditAmountInFreeDefinedCrcy5,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
  DebitAmountInFreeDefinedCrcy6,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
  CreditAmountInFreeDefinedCrcy6,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
  DebitAmountInFreeDefinedCrcy7,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
  CreditAmountInFreeDefinedCrcy7,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
  DebitAmountInFreeDefinedCrcy8,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
  CreditAmountInFreeDefinedCrcy8,

  ///////////////////////////////////////////////////////////////////////
  // Measures - Quantities
  ///////////////////////////////////////////////////////////////////////

  @Semantics.unitOfMeasure: true
  @AnalyticsDetails.query.axis: #FREE
  CostSourceUnit,
  @Semantics.unitOfMeasure: true
  @AnalyticsDetails.query.axis: #FREE
  BaseUnit,
  @Semantics.unitOfMeasure: true
  @AnalyticsDetails.query.axis: #FREE
  AdditionalQuantity1Unit,
  @Semantics.unitOfMeasure: true
  @AnalyticsDetails.query.axis: #FREE
  AdditionalQuantity2Unit,
  @Semantics.unitOfMeasure: true
  @AnalyticsDetails.query.axis: #FREE
  AdditionalQuantity3Unit,


  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
  AdditionalQuantity1,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
  AdditionalQuantity2,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
  AdditionalQuantity3,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
  ValuationQuantity,
  @AnalyticsDetails.query.hidden : true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  Quantity,



  ///////////////////////////////////////////////////////////////////////
  // Dimensions
  ///////////////////////////////////////////////////////////////////////


  @AnalyticsDetails.query.axis: #FREE
  DebitCreditCode,

  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentType,

  @AnalyticsDetails.query.axis: #FREE
  PostingKey,

  @AnalyticsDetails.query.axis: #FREE
  OffsettingAccount,

  @AnalyticsDetails.query.axis: #FREE
  AssignmentReference,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  DocumentDate,

  @AnalyticsDetails.query.axis: #FREE
  LedgerGLLineItem,
  @AnalyticsDetails.query.axis: #FREE
  TransactionTypeDetermination,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocCreatedByUser,
  @AnalyticsDetails.query.axis: #FREE
  CreationDate,
  @AnalyticsDetails.query.axis: #FREE
  ChartOfAccounts,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 35
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  AlternativeGLAccount,
  @AnalyticsDetails.query.axis: #FREE
  CountryChartOfAccounts,
  @AnalyticsDetails.query.axis: #FREE
  InvoiceReference,
  @AnalyticsDetails.query.axis: #FREE
  InvoiceReferenceFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  FollowOnDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  InvoiceItemReference,
  @AnalyticsDetails.query.axis: #FREE
  ReferencePurchaseOrderCategory,
  @AnalyticsDetails.query.axis: #FREE
  PurchasingDocument,
  @AnalyticsDetails.query.axis: #FREE
  PurchasingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  AccountAssignmentNumber,
  @AnalyticsDetails.query.axis: #FREE
  DocumentItemText,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SalesDocument'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SalesDocument'
  SalesOrder,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SalesDocumentItem'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SalesDocumentItem'
  SalesOrderItem,
  @AnalyticsDetails.query.axis: #FREE
  SalesDocument,
  @AnalyticsDetails.query.axis: #FREE
  SalesDocumentItem,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'Product'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'Product'
  @AnalyticsDetails.query.axis: #FREE
  Material, // do not use any longer, use Product
  @AnalyticsDetails.query.axis: #FREE
  Product,
  @AnalyticsDetails.query.axis: #FREE
  Plant,
  @AnalyticsDetails.query.axis: #FREE
  Supplier,
  @AnalyticsDetails.query.axis: #FREE
  Customer,
  @AnalyticsDetails.query.axis: #FREE
  FinancialAccountType,
  @AnalyticsDetails.query.axis: #FREE
  SpecialGLCode,
  @AnalyticsDetails.query.axis: #FREE
  TaxCode,
  @AnalyticsDetails.query.axis: #FREE
  TaxCountry,
  @AnalyticsDetails.query.axis: #FREE
  HouseBank,
  @AnalyticsDetails.query.axis: #FREE
  HouseBankAccount,
  @AnalyticsDetails.query.axis: #FREE
  IsOpenItemManaged,
  @AnalyticsDetails.query.axis: #FREE
  ClearingDate,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'ClearingJournalEntry'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'ClearingJournalEntry'
  @AnalyticsDetails.query.axis: #FREE
  ClearingAccountingDocument,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'ClearingJournalEntryFiscalYear'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
  @AnalyticsDetails.query.axis: #FREE
  ClearingDocFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  ClearingJournalEntry,
  @AnalyticsDetails.query.axis: #FREE
  ClearingJournalEntryFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  MasterFixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  FixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  AssetValueDate,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'InvtrySpecialStockValnType_2'
  InventorySpecialStockValnType,
  @AnalyticsDetails.query.axis: #FREE  
  InvtrySpecialStockValnType_2,
  @AnalyticsDetails.query.axis: #FREE
  InventorySpecialStockType,
  @AnalyticsDetails.query.axis: #FREE
  InventoryValuationType,
  @AnalyticsDetails.query.axis: #FREE
  ValuationArea,
  @AnalyticsDetails.query.axis: #FREE
  OffsettingAccountType,
  @AnalyticsDetails.query.axis: #FREE
  LineItemIsCompleted,
  @AnalyticsDetails.query.axis: #FREE
  PersonnelNumber,
  @AnalyticsDetails.query.axis: #FREE
  ControllingObjectClass,
  @AnalyticsDetails.query.axis: #FREE
  PartnerControllingObjectClass,
  @AnalyticsDetails.query.axis: #FREE
  PartnerCompany,
  @AnalyticsDetails.query.axis: #FREE
  CostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  OrderID,
  @AnalyticsDetails.query.axis: #FREE
  OrderCategory,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'WBSElementExternalID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'WBSElementExternalID'
  WBSElement,
  @AnalyticsDetails.query.axis: #FREE
  WBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  OperatingConcern,
  @AnalyticsDetails.query.axis: #FREE
  PartnerCostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  BillingDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  SalesOrganization,
  @AnalyticsDetails.query.axis: #FREE
  DistributionChannel,
  @AnalyticsDetails.query.axis: #FREE
  OrganizationDivision,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingArea,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  AccountAssignment,
  @AnalyticsDetails.query.axis: #FREE
  AccountAssignmentType,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentCategory,
  @AnalyticsDetails.query.axis: #FREE
  AssetDepreciationArea,
  @AnalyticsDetails.query.axis: #FREE
  BudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  BusinessProcess,
  @AnalyticsDetails.query.axis: #FREE
  BusinessTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  ControllingObjectDebitType,
  @AnalyticsDetails.query.axis: #FREE
  CostEstimate,
  @AnalyticsDetails.query.axis: #FREE
  CostObject,
  @AnalyticsDetails.query.axis: #FREE
  CustomerGroup,
  @AnalyticsDetails.query.axis: #FREE
  CustomerServiceNotification,
  @AnalyticsDetails.query.axis: #FREE
  DepreciationFiscalPeriod,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'ProfitCenter'
  EliminationProfitCenter,
  @AnalyticsDetails.query.axis: #FREE
  AssetTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  Fund,
  @AnalyticsDetails.query.axis: #FREE
  FinancialManagementArea,
  //  @AnalyticsDetails.query.axis: #FREE
  //  CommitmentItem,
  //  @AnalyticsDetails.query.axis: #FREE
  //  EarmarkedFundsDocument,
  //  @AnalyticsDetails.query.axis: #FREE
  //  EarmarkedFundsDocumentItem,
  //  @AnalyticsDetails.query.axis: #FREE
  //  FundsCenter,
  //  @AnalyticsDetails.query.axis: #FREE
  //  FundedProgram,
  @AnalyticsDetails.query.axis: #FREE
  GLAccountType,
  @AnalyticsDetails.query.axis: #FREE
  GrantID,
  @AnalyticsDetails.query.axis: #FREE
  GroupFixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  GroupMasterFixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  InventorySpclStkSalesDocItm,
  @AnalyticsDetails.query.axis: #FREE
  InventorySpclStkSalesDocument,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'InvtrySpclStockWBSElmntExtID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
  InventorySpclStockWBSElement,
  @AnalyticsDetails.query.axis: #FREE
  InvtrySpclStockWBSElmntExtID,
  @AnalyticsDetails.query.axis: #FREE
  InventorySpecialStockSupplier,
  @AnalyticsDetails.query.axis: #FREE
  IsReversal,
  @AnalyticsDetails.query.axis: #FREE
  IsReversed,
  @AnalyticsDetails.query.axis: #FREE
  IsSettled,
  @AnalyticsDetails.query.axis: #FREE
  IsSettlement,
  @AnalyticsDetails.query.axis: #FREE
  JointVenture,
  @AnalyticsDetails.query.axis: #FREE
  JointVentureCostRecoveryCode,
  @AnalyticsDetails.query.axis: #FREE
  JointVentureEquityGroup,
  @AnalyticsDetails.query.axis: #FREE
  JointVentureEquityType,
  @AnalyticsDetails.query.axis: #FREE
  LogicalSystem,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SoldProductGroup'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SoldProductGroup'
  @AnalyticsDetails.query.axis: #FREE
  MaterialGroup, // do not use any longer, use ProductGroup
  @AnalyticsDetails.query.axis: #FREE
  SoldProductGroup,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'CostCenter'
  OriginCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  OriginCostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  OriginObjectType,
  @AnalyticsDetails.query.axis: #FREE
  PartnerAccountAssignment,
  @AnalyticsDetails.query.axis: #FREE
  PartnerAccountAssignmentType,
  @AnalyticsDetails.query.axis: #FREE
  PartnerBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  PartnerBusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  PartnerBusinessProcess,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'CompanyCode'
  PartnerCompanyCode,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'CostCenter'
  PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  PartnerCostObject,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'FunctionalArea'
  PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  PartnerFund,
  @AnalyticsDetails.query.axis: #FREE
  PartnerGrant,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'PartnerOrder_2'
  //  @VDM.lifecycle.status:     #DEPRECATED
  //  @VDM.lifecycle.successor:  'PartnerOrder_2'
  PartnerOrder,
  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.axis: #FREE
  PartnerOrder_2,
  @AnalyticsDetails.query.axis: #FREE
  PartnerOrderCategory,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'ProfitCenter'
  PartnerProfitCenter,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerProjectExternalID'
  PartnerProject,
  @AnalyticsDetails.query.axis: #FREE
  PartnerProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  PartnerProjectNetwork,
  @AnalyticsDetails.query.axis: #FREE
  PartnerProjectNetworkActivity,
  @AnalyticsDetails.query.axis: #FREE
  PartnerSalesDocument,
  @AnalyticsDetails.query.axis: #FREE
  PartnerSalesDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  PartnerSegment,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerWBSElementExternalID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
  PartnerWBSElement,
  @AnalyticsDetails.query.axis: #FREE
  PartnerWBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocCntxt,
  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocItem,
  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocType,
  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocument,
  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'ProjectExternalID'
  Project,
  @AnalyticsDetails.query.axis: #FREE  
  ProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  ProjectNetwork,
  @AnalyticsDetails.query.axis: #FREE
  QuantityIsIncomplete,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocument,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentContext,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentItemGroup,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  RelatedNetworkActivity,
  @AnalyticsDetails.query.axis: #FREE
  ReversalReferenceDocument,
  @AnalyticsDetails.query.axis: #FREE
  ReversalReferenceDocumentCntxt,
  @AnalyticsDetails.query.axis: #FREE
  SenderAccountAssignment,
  @AnalyticsDetails.query.axis: #FREE
  SenderAccountAssignmentType,
  @AnalyticsDetails.query.axis: #FREE
  SenderGLAccount,
  @AnalyticsDetails.query.axis: #FREE
  SettlementReferenceDate,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SoldProduct'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SoldProduct'
  @AnalyticsDetails.query.axis: #FREE
  SoldMaterial, // do not use any longer, use SoldProduct
  @AnalyticsDetails.query.axis: #FREE
  SoldProduct,
  @AnalyticsDetails.query.axis: #FREE
  BusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  FiscalYear,
  //  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 55
  @AnalyticsDetails.query.axis: #FREE
  FiscalYearPeriod,
  @AnalyticsDetails.query.axis: #FREE
  // Has to be taken out for now to avoid a deadlock when entering a not valid fiscal year period
  //  @Consumption.filter.hidden: true
  //  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true}
  //  @Consumption.derivation: {
  //    lookupEntity: 'I_LedgerCompanyCodeCrcyRoles', resultElement: 'FiscalYearVariant',
  //      binding: [{targetElement: 'Ledger', type: #ELEMENT, value: 'Ledger'},
  //                {targetElement: 'CompanyCode', type: #ELEMENT, value: 'CompanyCode'}]
  //  }
  FiscalYearVariant,
  @AnalyticsDetails.query.axis: #FREE
  LastChangeDateTime,
  @AnalyticsDetails.query.axis: #FREE
  CreationDateTime,
  @AnalyticsDetails.query.axis: #FREE
  AssetAcctTransClassfctn,
  @AnalyticsDetails.query.axis: #FREE
  InvtrySpclStockWBSElmntIntID,
  @AnalyticsDetails.query.axis: #FREE
  AccrualObjectType,
  @AnalyticsDetails.query.axis: #FREE
  AccrualObject,
  @AnalyticsDetails.query.axis: #FREE
  AccrualSubobject,
  @AnalyticsDetails.query.axis: #FREE
  AccrualItemType,
  @AnalyticsDetails.query.axis: #FREE
  AccrualValueDate,
  
@AnalyticsDetails.query.axis: #FREE
CustomerSupplierCountry,

@AnalyticsDetails.query.axis: #FREE
CustomerSupplierIndustry

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FS  Universal Journal Entry: Fields for Financial Services
///////////////////////////////////////////////////////////////////////
// 2.5.24 remove annotation @Consumption.switched.id because of problems with "Custom Analytical Queries" app
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialServicesProductGroup,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialServicesBranch,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialDataSource    

};
```
