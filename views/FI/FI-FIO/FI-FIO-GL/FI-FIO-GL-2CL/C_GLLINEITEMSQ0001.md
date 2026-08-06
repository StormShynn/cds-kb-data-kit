---
name: C_GLLINEITEMSQ0001
description: This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLLINEITEMSQ0001')/$value
semantic_en: This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?
keywords:
  - Journal Entry Analyzer
  - Journal Entry Analyzer
  - Journal Entry Analyzer
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
  - metadata-only
---
# C_GLLINEITEMSQ0001

**This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLLINEITEMSQ0001')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `JrnlEntrAltvFYConsecutiveID` | `CHAR(10)` | Shifted Fiscal Year Consecutive ID |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `BalanceTransactionCurrency` | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `AmountInFunctionalCurrency` | `CURR(23)` | Amount in Functional Currency |
| `AmountInBalanceTransacCrcy` | `CURR(23)` | Amount in Balance Transaction Currency |
| `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `DebitAmountInCoCodeCrcy` | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInGlobalCrcy` | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFunctionalCrcy` | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` | `CURR(23)` | Credit Amount in Functional Currency |
| `DebitAmountInTransCrcy` | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInBalanceTransCrcy` | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInFreeDefinedCrcy1` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDefinedCrcy4` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDefinedCrcy4` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDefinedCrcy5` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDefinedCrcy5` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDefinedCrcy6` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDefinedCrcy6` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDefinedCrcy7` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDefinedCrcy7` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDefinedCrcy8` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDefinedCrcy8` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `AdditionalQuantity1Unit` | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity2Unit` | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity3Unit` | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity1` | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2` | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3` | `QUAN(23)` | Additional Quantity 3 |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `Quantity` | `QUAN(23)` | Quantity |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `OffsettingAccount` | `CHAR(10)` | Offsetting Account |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `TransactionTypeDetermination` | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `CreationDate` | `DATS(8)` | Creation Date |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `Material` | `CHAR(40)` | Material Number |
| `Product` | `CHAR(40)` | Product |
| `Plant` | `CHAR(4)` | Plant |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxCountry` | `CHAR(3)` | Tax Reporting Country/Region |
| `HouseBank` | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` | `DATS(8)` | Asset Value Date |
| `InventorySpecialStockValnType` | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` | `CHAR(1)` | Inventory Special Stock Type |
| `InventoryValuationType` | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `OffsettingAccountType` | `CHAR(1)` | Offsetting Account Type |
| `LineItemIsCompleted` | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` | `CHAR(2)` | Controlling Object Class |
| `PartnerControllingObjectClass` | `CHAR(2)` | Partner Controlling Object Class |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `OperatingConcern` | `CHAR(4)` | Operating Concern |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `AccountAssignment` | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `AssetDepreciationArea` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `BusinessProcess` | `CHAR(12)` | Business Process |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ControllingObjectDebitType` | `NUMC(1)` | Controlling Object Debit Type |
| `CostEstimate` | `NUMC(12)` | Cost Estimate |
| `CostObject` | `CHAR(12)` | Cost Object |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerServiceNotification` | `CHAR(12)` | Customer Service Notification |
| `DepreciationFiscalPeriod` | `NUMC(3)` | Fiscal Period of Depreciation |
| `EliminationProfitCenter` | `CHAR(10)` | Elimination Profit Center |
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `Fund` | `CHAR(10)` | Fund |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` | `CHAR(20)` | Grant |
| `GroupFixedAsset` | `CHAR(4)` | Group Asset Subnumber |
| `GroupMasterFixedAsset` | `CHAR(12)` | Group Asset |
| `InventorySpclStkSalesDocItm` | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStkSalesDocument` | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStockWBSElement` | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InvtrySpclStockWBSElmntExtID` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpecialStockSupplier` | `CHAR(10)` | Supplier of Inventory Special Stock |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityGroup` | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureEquityType` | `CHAR(3)` | Joint Venture Equity Type |
| `LogicalSystem` | `CHAR(10)` | Logical System |
| `MaterialGroup` | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginObjectType` | `NUMC(2)` | Type of Origin Object |
| `PartnerAccountAssignment` | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessProcess` | `CHAR(12)` | Partner Business Process |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerCostObject` | `CHAR(12)` | Partner Cost Object |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerOrder` | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` | `NUMC(2)` | Partner Order Category |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` | `CHAR(24)` | Partner Project External ID |
| `PartnerProjectNetwork` | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` | `CHAR(4)` | Partner Project Network Activity |
| `PartnerSalesDocument` | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` | `NUMC(6)` | Partner Sales Document Item |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElement` | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `PredecessorReferenceDocCntxt` | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` | `CHAR(10)` | Predecessor Reference Document |
| `Project` | `CHAR(24)` | Project |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `ProjectNetwork` | `CHAR(12)` | Network Number for Account Assignment |
| `QuantityIsIncomplete` | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `RelatedNetworkActivity` | `CHAR(4)` | Related Network Activity |
| `ReversalReferenceDocument` | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` | `CHAR(10)` | Reversal Reference Document Context |
| `SenderAccountAssignment` | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` | `CHAR(2)` | Account Assignment Type in Sender System |
| `SenderGLAccount` | `CHAR(10)` | Sender G/L Account |
| `SettlementReferenceDate` | `DATS(8)` | Settlement Reference Date |
| `SoldMaterial` | `CHAR(40)` | Sold Material |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `LastChangeDateTime` | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` | `DEC(15)` | Creation Date Time |
| `AssetAcctTransClassfctn` | `CHAR(2)` | Transaction Type Category |
| `InvtrySpclStockWBSElmntIntID` | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `AccrualObjectType` | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualValueDate` | `DATS(8)` | Accrual Value Date |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
