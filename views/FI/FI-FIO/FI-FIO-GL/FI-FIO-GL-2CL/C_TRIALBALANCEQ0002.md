---
name: C_TRIALBALANCEQ0002
description: This CDS view can compare balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0002')/$value
semantic_en: This CDS view can compare balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?
keywords:
  - Trial Balance Comparison
  - Trial Balance Comparison
  - Trial Balance Comparison
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
# C_TRIALBALANCEQ0002

**This CDS view can compare balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0002')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountHierarchy` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountHierarchyName` |  | |  |  | `CHAR(20)` | G/L Account Hierarchy Node Description |
| `PostingDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  |  | `CHAR(25)` | Name of the Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessAreaName` |  | |  |  | `CHAR(30)` | Business Area Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `SenderCostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFunctionalAreaName` |  | |  |  | `CHAR(25)` | Name of the Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessAreaName` |  | |  |  | `CHAR(30)` | Business Area Name |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerSegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `DebitCreditCodeName` |  | |  |  | `CHAR(60)` | Debit/Credit Code Name |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  |  | `CHAR(20)` | Document Type Name |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `PostingKeyName` |  | |  |  | `CHAR(20)` | Posting Key Name |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `EliminationProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `Material` |  | |  |  | `CHAR(40)` | Product (Deprecated) |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `MaterialName` |  | |  |  | `CHAR(40)` | Product Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `FinancialAccountTypeName` |  | |  |  | `CHAR(60)` | Financial Account Type Name |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStockWBSElement` |  | |  |  | `CHAR(24)` | WBS Element (external) of Valuated Special Inventory |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InvtrySpecialStockSupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `PartnerServiceDocumentType` |  | |  |  | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` |  | |  |  | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` |  | |  |  | `NUMC(6)` | Partner Service Document Item |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Product Sold (Deprecated) |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `MaterialGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerGroupName` |  | |  |  | `CHAR(20)` | Description |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Group Account Number |
| `CorporateGroupChartOfAccounts` |  | |  |  | `CHAR(4)` | Group Chart of Accts |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
| `FlowOfFundsLedgerFiscalYear` |  | |  |  | `NUMC(4)` | Funds of Flow Ledger Fiscal Year |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ComprnAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Company Code Currency |
| `DifferenceAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Difference Amount In Company Code Currency |
| `CoCodeCrcyDifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Company Code Currency |
| `StartingBalanceAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Starting Balance Amount In Company Code Currency |
| `ComprnStartingBalInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Company Code Currency |
| `StartingDiffAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Starting Bal Difference Amount In Company Code Currency |
| `CoCodeCrcyStartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Company Code Currency |
| `IntmdStrtBalAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `IntmdComprnStrtBalInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Company Code Currency |
| `IntmdEndingBalAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Company Code Currency |
| `EndingBalanceAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Company Code Currency |
| `IntmdOpeningBalAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Company Code Currency |
| `ComprnEndingBalInCoCodeCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Company Code Currency |
| `ToPostingDate` |  | |  |  | `DATS(8)` | Posting Date To |
| `ComprnToPostingDate` |  | |  |  | `DATS(8)` | Comparison Posting Date To |
| `FiscalPeriodDate` |  | |  |  | `CHAR(11)` | Fiscal Period Date |
| `ComprnFiscalPeriodDate` |  | |  |  | `CHAR(11)` | Comparison Fiscal Period Date |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ComprnAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Global Currency |
| `DifferenceAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Difference Amount In Global Currency |
| `GlobalCrcyDifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Global Currency |
| `StartingBalanceAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Starting Balance Amount In Global Currency |
| `ComprnStartingBalInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Global Currency |
| `StartingBalDiffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Starting Bal Difference Amount In Global Currency |
| `GlobalCrcyStartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Global Currency |
| `IntmdStrtgBalAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `IntmdComprnStrtgBalInGlobCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Global Currency |
| `IntmdEndingBalAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Global Currency |
| `EndingBalanceAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Global Currency |
| `IntmdComprnEndBalInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Global Currency |
| `ComprnEndingBalInGlobalCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Global Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `ComprnAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Functional Currency |
| `DifferenceAmtInFunctionalCrcy` |  | |  |  | `CURR(23)` | Difference Amount In Functional Currency |
| `FunctionalCrcyDifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Functional Currency |
| `StartingBalanceAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Starting Balance Amount In Functional Currency |
| `ComprnStartingBalInFuncnlCrcy` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Functional Currency |
| `StartingBalDiffAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Starting Bal Difference Amount In Functional Currency |
| `FunctionalCrcyStartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Functional Currency |
| `IntmdStrtgBalAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `IntmdComprnStrtgBalInFCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Functional Currency |
| `IntmdEndingBalAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Functional Currency |
| `EndingBalanceAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Functional Currency |
| `IntmdComprnEndBalInFuncnlCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Functional Currency |
| `ComprnEndingBalInFuncnlCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Functional Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `ComprnAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 1 |
| `DifferenceAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 1 |
| `FreeDfndCrcy1DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Freely Defined Currency 1 |
| `StartingBalAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 1 |
| `ComprnStrtgBalInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 1 |
| `StrtgBalDiffAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 1 |
| `FreeDfndCrcy1StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Freely Defined Currency 1 |
| `IntmdStrtgBalInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `IntmdComprnStrtgBalInFDCrcy1` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 1 |
| `IntmdEndingBalInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 1 |
| `EndingBalAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 1 |
| `IntmdComprnEndingBalInFDCrcy1` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 1 |
| `ComprnEndingBalInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `ComprnAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 2 |
| `DifferenceAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 2 |
| `FreeDfndCrcy2DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Freely Defined Currency 2 |
| `StartingBalAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 2 |
| `ComprnStrtgBalInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 2 |
| `StrtgBalDiffAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 2 |
| `FreeDfndCrcy2StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Freely Defined Currency 2 |
| `IntmdStrtgBalInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `IntmdComprnStrtgBalInFDCrcy2` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 2 |
| `IntmdEndingBalInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 2 |
| `EndingBalAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 2 |
| `IntmdComprnEndingBalInFDCrcy2` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 2 |
| `ComprnEndingBalInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `ComprnAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 3 |
| `DifferenceAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 3 |
| `FreeDfndCrcy3DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage In Freely Defined Currency 3 |
| `StartingBalAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 3 |
| `ComprnStrtgBalInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 3 |
| `StrtgBalDiffAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 3 |
| `FreeDfndCrcy3StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage In Freely Defined Currency 3 |
| `IntmdStrtgBalInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `IntmdComprnStrtgBalInFDCrcy3` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 3 |
| `IntmdEndingBalInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 3 |
| `EndingBalAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 3 |
| `IntmdComprnEndingBalInFDCrcy3` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 3 |
| `ComprnEndingBalInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `ComprnAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 4 |
| `DifferenceAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 4 |
| `FreeDfndCrcy4DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage In Freely Defined Currency 4 |
| `StartingBalAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 4 |
| `ComprnStrtgBalInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Comparison Starting Balance In Freely Defined Currency 4 |
| `StrtgBalDiffAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Freely Dfnd Currency 4 |
| `FreeDfndCrcy4StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage In Freely Defined Currency 4 |
| `IntmdStrtgBalInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `IntmdComprnStrtgBalInFDCrcy4` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 4 |
| `IntmdEndingBalInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 4 |
| `EndingBalAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 4 |
| `IntmdComprnEndingBalInFDCrcy4` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 4 |
| `ComprnEndingBalInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `ComprnAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 5 |
| `DifferenceAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 5 |
| `FreeDfndCrcy5DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage In Freely Defined Currency 5 |
| `StartingBalAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 5 |
| `ComprnStrtgBalInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Comparison Starting Balance In Freely Defined Currency 5 |
| `StrtgBalDiffAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 5 |
| `FreeDfndCrcy5StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage In Freely Defined Currency 5 |
| `IntmdStrtgBalInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `IntmdComprnStrtgBalInFDCrcy5` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 5 |
| `IntmdEndingBalInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 5 |
| `EndingBalAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 5 |
| `IntmdComprnEndingBalInFDCrcy5` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 5 |
| `ComprnEndingBalInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `ComprnAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 6 |
| `DifferenceAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 6 |
| `FreeDfndCrcy6DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage In Freely Defined Currency 6 |
| `StartingBalAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 6 |
| `ComprnStrtgBalInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Comparison Starting Balance In Freely Defined Currency 6 |
| `StrtgBalDiffAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Starting Difference Percent In Freely Dfnd Currency 6 |
| `FreeDfndCrcy6StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage In Freely Dfnd Currency 6 |
| `IntmdStrtgBalInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `IntmdComprnStrtgBalInFDCrcy6` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 6 |
| `IntmdEndingBalInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 6 |
| `EndingBalAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 6 |
| `IntmdComprnEndingBalInFDCrcy6` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 6 |
| `ComprnEndingBalInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `ComprnAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 7 |
| `DifferenceAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 7 |
| `FreeDfndCrcy7DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Freely Defined Currency 7 |
| `StartingBalAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 7 |
| `ComprnStrtgBalInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 7 |
| `StrtgBalDiffAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 7 |
| `FreeDfndCrcy7StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Freely Defined Currency 7 |
| `IntmdStrtgBalInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `IntmdComprnStrtgBalInFDCrcy7` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 7 |
| `IntmdEndingBalInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 7 |
| `EndingBalAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 7 |
| `IntmdComprnEndingBalInFDCrcy7` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 7 |
| `ComprnEndingBalInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `ComprnAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Comparison Amount in Freely Defined Currency 8 |
| `DifferenceAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Difference Amount In Freely Defined Currency 8 |
| `FreeDfndCrcy8DifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage In Freely Defined Currency 8 |
| `StartingBalAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 8 |
| `ComprnStrtgBalInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Comparison Starting Balance In Freely Defined Crcy 8 |
| `StrtgBalDiffAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Starting Bal Difference Amount In Freely Dfnd Crcy 8 |
| `FreeDfndCrcy8StartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage In Freely Dfnd Currency 8 |
| `IntmdStrtgBalInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `IntmdComprnStrtgBalInFDCrcy8` |  | |  |  | `CURR(23)` | Comparison Amount in Free Defined Currency 8 |
| `IntmdEndingBalInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Ending Balance in Free Defined Currency 8 |
| `EndingBalAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Ending Balance in Freely Defined Currency 8 |
| `IntmdComprnEndingBalInFDCrcy8` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 8 |
| `ComprnEndingBalInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 8 |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `ComprnAmountInBalTransCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Balance Transaction Currency |
| `DifferenceAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Difference Amount In Balance Transaction Currency |
| `BalTransCrcyDifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Balance Transaction Currency |
| `StartingBalAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Starting Balance Amount In Balance Transaction Currency |
| `ComprnStrtgBalInBalTransCrcy` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Balance Transaction Currency |
| `StrtgBalDiffAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Balance Trans Crcy |
| `BalTransCrcyStartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Balance Trans. Currency |
| `IntmdStrtgBalInBalTransCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `IntmdComprnStrtgBalInBTCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Balance Transaction Currency |
| `IntmdEndingBalInBalTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `EndingBalanceAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `IntmdComprnEndingBalInBTCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Balance Transaction Currency |
| `ComprnEndingBalInBalTransCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Balance Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `ComprnAmountInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Transaction Currency |
| `DifferenceAmtInTransCrcy` |  | |  |  | `CURR(23)` | Difference Amount In Transaction Currency |
| `TransCrcyDifferencePct` |  | |  |  | `DEC(23)` | Difference Percentage in Transaction Currency |
| `StartingBalAmtInTransCrcy` |  | |  |  | `CURR(23)` | Starting Balance Amount In Transaction Currency |
| `ComprnStrtgBalInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Starting Balance in Transaction Currency |
| `StartingBalDiffAmtInTransCrcy` |  | |  |  | `CURR(23)` | Starting Balance Difference Amount In Transaction Currency |
| `TransCrcyStartingDiffPct` |  | |  |  | `DEC(23)` | Starting Difference Percentage in Transaction Currency |
| `IntmdStrtgBalAmtInTransCrcy` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `IntmdComprnStrtgBalInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Amount in Transaction Currency |
| `IntmdEndingBalInTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Transaction Currency |
| `EndingBalanceAmtInTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Transaction Currency |
| `IntmdComprnEndgBalInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Transaction Currency |
| `ComprnEndingBalInTransCrcy` |  | |  |  | `CURR(23)` | Comparison Ending Balance in Transaction Currency |
| `EndgBalDiffAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Company Code Currency |
| `CoCodeCrcyEndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Company Code Currency |
| `EndgBalDiffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Global Currency |
| `GlobalCrcyEndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Global Currency |
| `EndgBalDiffAmtInFunctionalCrcy` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Functional Currency |
| `FunctionalCrcyEndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Functional Currency |
| `EndgBalDiffAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 1 |
| `FreeDfndCrcy1EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 1 |
| `EndgBalDiffAmtInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 2 |
| `FreeDfndCrcy2EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 2 |
| `EndgBalDiffAmtInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 3 |
| `FreeDfndCrcy3EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 3 |
| `EndgBalDiffAmtInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 4 |
| `FreeDfndCrcy4EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 4 |
| `EndgBalDiffAmtInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 5 |
| `FreeDfndCrcy5EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 5 |
| `EndgBalDiffAmtInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Ending Difference Percent in Freely Defined Crcy 6 |
| `FreeDfndCrcy6EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 6 |
| `EndgBalDiffAmtInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 7 |
| `FreeDfndCrcy7EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percent in Freely Defined Currency 7 |
| `EndgBalDiffAmtInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Ending Bal Difference Amount in Freely Defined Crcy 8 |
| `FreeDfndCrcy8EndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 8 |
| `EndgBalDiffAmtInBalTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Balance Transaction Crcy |
| `BalTransCrcyEndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Balance Transaction Currency |
| `EndgBalDiffAmtInTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance Difference Amount in Transaction Currency |
| `TransCrcyEndingDiffPct` |  | |  |  | `DEC(23)` | Ending Difference Percentage in Transaction Currency |
