---
name: C_TRIALBALANCEQ0001
description: This CDS view can form balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are balances within the G/L account hierarchy? What is the revenue drilled down by profit center?
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0001')/$value
semantic_en: This CDS view can form balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are balances within the G/L account hierarchy? What is the revenue drilled down by profit center?
keywords:
  - Trial Balance
  - Trial Balance
  - Trial Balance
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
# C_TRIALBALANCEQ0001

**This CDS view can form balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What is the balance of a cost center for a specific time frame? What are balances within the G/L account hierarchy? What is the revenue drilled down by profit center?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0001')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountHierarchy` | `CHAR(10)` | G/L Account |
| `GLAccountHierarchyName` | `CHAR(20)` | G/L Account Hierarchy Node Description |
| `PostingDate` | `DATS(8)` | End Date of Fiscal Period |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `LogicalSystem` | `CHAR(10)` | Logical System |
| `ReferenceDocumentItemGroup` | `NUMC(6)` | Reference Document Item Group |
| `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettlement` | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `PredecessorReferenceDocType` | `CHAR(5)` | Predecessor Reference Document Type |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `BusinessAreaName` | `CHAR(30)` | Business Area Name |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` | `CHAR(25)` | Controlling Area Name |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` | `CHAR(50)` | Segment Name |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `SenderCostCenterName` | `CHAR(20)` | Cost Center Name |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerFunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessAreaName` | `CHAR(30)` | Business Area Name |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerSegmentName` | `CHAR(50)` | Segment Name |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `DebitCreditCodeName` | `CHAR(60)` | Debit/Credit Code Name |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` | `CHAR(20)` | Document Type Name |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `PostingKeyName` | `CHAR(20)` | Posting Key Name |
| `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `TransactionTypeDetermination` | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `EliminationProfitCenter` | `CHAR(10)` | Elimination Profit Center |
| `EliminationProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `OriginObjectType` | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` | `NUMC(2)` | Account Assignment Number |
| `Material` | `CHAR(40)` | Product (Deprecated) |
| `Product` | `CHAR(40)` | Product |
| `MaterialName` | `CHAR(40)` | Product Description |
| `Plant` | `CHAR(4)` | Plant |
| `PlantName` | `CHAR(30)` | Plant Name |
| `Supplier` | `CHAR(10)` | Supplier |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `FinancialAccountTypeName` | `CHAR(60)` | Financial Account Type Name |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingAccountingDocument` | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `AssetDepreciationArea` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `GroupMasterFixedAsset` | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` | `CHAR(4)` | Group Asset Subnumber |
| `InventorySpecialStockValnType` | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStockWBSElement` | `CHAR(24)` | WBS Element (external) of Valuated Special Inventory |
| `InvtrySpclStockWBSElmntExtID` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpecialStockSupplier` | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InvtrySpecialStockSupplierName` | `CHAR(80)` | Name of Supplier |
| `InventoryValuationType` | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `SenderGLAccount` | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` | `CHAR(2)` | Account Assignment Type in Sender System |
| `ControllingObjectDebitType` | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` | `CHAR(1)` | Offsetting Account Type |
| `LineItemIsCompleted` | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | `CHAR(6)` | Origin Cost Center Activity Type |
| `AccountAssignment` | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `ProjectNetwork` | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` | `CHAR(12)` | Business Process |
| `CostObject` | `CHAR(12)` | Cost Object |
| `CustomerServiceNotification` | `CHAR(12)` | Customer Service Notification |
| `OperatingConcern` | `CHAR(4)` | Operating Concern |
| `PartnerAccountAssignment` | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProject` | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` | `CHAR(24)` | Partner Project External ID |
| `PartnerSalesDocument` | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` | `CHAR(12)` | Partner Cost Object |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `PartnerServiceDocumentType` | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` | `NUMC(6)` | Partner Service Document Item |
| `ServiceContract` | `CHAR(10)` | Service Contract ID |
| `ServiceContractType` | `CHAR(4)` | Service Contract Type |
| `ServiceContractItem` | `NUMC(6)` | Service Contract Item ID |
| `TimeSheetOvertimeCategory` | `CHAR(4)` | Overtime Category |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `SoldMaterial` | `CHAR(40)` | Product Sold (Deprecated) |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `MaterialGroup` | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerGroupName` | `CHAR(20)` | Description |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | `CHAR(10)` | Fund |
| `FundsCenter` | `CHAR(16)` | Funds Management Center |
| `GrantID` | `CHAR(20)` | Grant |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` | `DATS(8)` | Settlement Reference Date |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `Project` | `CHAR(24)` | Project |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` | `CUKY(5)` | Freely Defined Currency 8 |
| `BalanceTransactionCurrency` | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `FiscalPeriodDate` | `CHAR(11)` | Fiscal Period Date |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` | `NUMC(6)` | Year Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` | `NUMC(6)` | Year Week |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `CorporateGroupAccount` | `CHAR(10)` | Group Account Number |
| `CorporateGroupChartOfAccounts` | `CHAR(4)` | Group Chart of Accts |
| `IsBalanceSheetAccount` | `CHAR(1)` | Is Balance Sheet Account |
| `FlowOfFundsLedgerFiscalYear` | `NUMC(4)` | Funds of Flow Ledger Fiscal Year |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `StartingBalanceAmtInCoCodeCrcy` | `CURR(23)` | Starting Balance Amount In Company Code Currency |
| `DebitAmountInCoCodeCrcy` | `CURR(23)` | Debit Balance in Company Code Currency |
| `CreditAmountInCoCodeCrcy` | `CURR(23)` | Credit Balance in Company Code Currency |
| `EndingBalanceAmtInCoCodeCrcy` | `CURR(23)` | Ending Balance in Company Code Currency |
| `IntmdEndingBalAmtInCoCodeCrcy` | `CURR(23)` | Ending Balance in Company Code Currency |
| `GLAcctDebitAmtInCoCodeCrcy` | `CURR(23)` | Debit Amount in Company Code Currency |
| `GLAcctCreditAmtInCoCodeCrcy` | `CURR(23)` | Credit Amount in Company Code Currency |
| `StartingBalanceAmtInGlobalCrcy` | `CURR(23)` | Starting Balance Amount In Global Currency |
| `DebitAmountInGlobalCrcy` | `CURR(23)` | Debit Balance in Global Currency |
| `CreditAmountInGlobalCrcy` | `CURR(23)` | Credit Balance in Global Currency |
| `EndingBalanceAmtInGlobalCrcy` | `CURR(23)` | Ending Balance in Global Currency |
| `IntmdEndingBalAmtInGlobalCrcy` | `CURR(23)` | Ending Balance in Global Currency |
| `IntmdDebitAmountInGlobalCrcy` | `CURR(23)` | Debit Amount in Global Currency |
| `IntmdCreditAmountInGlobalCrcy` | `CURR(23)` | Credit Amount in Global Currency |
| `StartingBalanceAmtInFuncnlCrcy` | `CURR(23)` | Starting Balance Amount In Functional Currency |
| `DebitAmountInFunctionalCrcy` | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` | `CURR(23)` | Credit Amount in Functional Currency |
| `EndingBalanceAmtInFuncnlCrcy` | `CURR(23)` | Ending Balance in Functional Currency |
| `IntmdEndingBalAmtInFuncnlCrcy` | `CURR(23)` | Ending Balance in Functional Currency |
| `IntmdDebitAmountInFuncnlCrcy` | `CURR(23)` | Debit Amount in Functional Currency |
| `IntmdCreditAmountInFuncnlCrcy` | `CURR(23)` | Credit Amount in Functional Currency |
| `StartingBalAmtInFreeDfndCrcy1` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy1` | `CURR(23)` | Debit Balance in Freely Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` | `CURR(23)` | Credit Balance in Freely Defined Currency 1 |
| `EndingBalAmtInFreeDfndCrcy1` | `CURR(23)` | Ending Balance in Freely Defined Currency 1 |
| `IntmdEndingBalInFreeDfndCrcy1` | `CURR(23)` | Ending Balance in Free Defined Currency 1 |
| `IntmdDebitAmtInFreeDfndCrcy1` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `IntmdCreditAmtInFreeDfndCrcy1` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `StartingBalAmtInFreeDfndCrcy2` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy2` | `CURR(23)` | Debit Balance in Freely Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` | `CURR(23)` | Credit Balance in Freely Defined Currency 2 |
| `EndingBalAmtInFreeDfndCrcy2` | `CURR(23)` | Ending Balance in Freely Defined Currency 2 |
| `IntmdEndingBalInFreeDfndCrcy2` | `CURR(23)` | Ending Balance in Free Defined Currency 2 |
| `IntmdDebitAmtInFreeDfndCrcy2` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `IntmdCreditAmtInFreeDfndCrcy2` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `StartingBalAmtInFreeDfndCrcy3` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 3 |
| `DebitAmountInFreeDefinedCrcy3` | `CURR(23)` | Debit Balance in Freely Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` | `CURR(23)` | Credit Balance in Freely Defined Currency 3 |
| `EndingBalAmtInFreeDfndCrcy3` | `CURR(23)` | Ending Balance in Freely Defined Currency 3 |
| `IntmdEndingBalInFreeDfndCrcy3` | `CURR(23)` | Ending Balance in Free Defined Currency 3 |
| `IntmdDebitAmtInFreeDfndCrcy3` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `IntmdCreditAmtInFreeDfndCrcy3` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `StartingBalAmtInFreeDfndCrcy4` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 4 |
| `DebitAmountInFreeDefinedCrcy4` | `CURR(23)` | Debit Balance in Freely Defined Currency 4 |
| `CreditAmountInFreeDefinedCrcy4` | `CURR(23)` | Credit Balance in Freely Defined Currency 4 |
| `EndingBalAmtInFreeDfndCrcy4` | `CURR(23)` | Ending Balance in Freely Defined Currency 4 |
| `IntmdEndingBalInFreeDfndCrcy4` | `CURR(23)` | Ending Balance in Free Defined Currency 4 |
| `IntmdDebitAmtInFreeDfndCrcy4` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `IntmdCreditAmtInFreeDfndCrcy4` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `StartingBalAmtInFreeDfndCrcy5` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 5 |
| `DebitAmountInFreeDefinedCrcy5` | `CURR(23)` | Debit Balance in Freely Defined Currency 5 |
| `CreditAmountInFreeDefinedCrcy5` | `CURR(23)` | Credit Balance in Freely Defined Currency 5 |
| `EndingBalAmtInFreeDfndCrcy5` | `CURR(23)` | Ending Balance in Freely Defined Currency 5 |
| `IntmdEndingBalInFreeDfndCrcy5` | `CURR(23)` | Ending Balance in Free Defined Currency 5 |
| `IntmdDebitAmtInFreeDfndCrcy5` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `IntmdCreditAmtInFreeDfndCrcy5` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `StartingBalAmtInFreeDfndCrcy6` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 6 |
| `DebitAmountInFreeDefinedCrcy6` | `CURR(23)` | Debit Balance in Freely Defined Currency 6 |
| `CreditAmountInFreeDefinedCrcy6` | `CURR(23)` | Credit Balance in Freely Defined Currency 6 |
| `EndingBalAmtInFreeDfndCrcy6` | `CURR(23)` | Ending Balance in Freely Defined Currency 6 |
| `IntmdEndingBalInFreeDfndCrcy6` | `CURR(23)` | Ending Balance in Free Defined Currency 6 |
| `IntmdDebitAmtInFreeDfndCrcy6` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `IntmdCreditAmtInFreeDfndCrcy6` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `StartingBalAmtInFreeDfndCrcy7` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 7 |
| `DebitAmountInFreeDefinedCrcy7` | `CURR(23)` | Debit Balance in Freely Defined Currency 7 |
| `CreditAmountInFreeDefinedCrcy7` | `CURR(23)` | Credit Balance in Freely Defined Currency 7 |
| `EndingBalAmtInFreeDfndCrcy7` | `CURR(23)` | Ending Balance in Freely Defined Currency 7 |
| `IntmdEndingBalInFreeDfndCrcy7` | `CURR(23)` | Ending Balance in Free Defined Currency 7 |
| `IntmdDebitAmtInFreeDfndCrcy7` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `IntmdCreditAmtInFreeDfndCrcy7` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `StartingBalAmtInFreeDfndCrcy8` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 8 |
| `DebitAmountInFreeDefinedCrcy8` | `CURR(23)` | Debit Balance in Freely Defined Currency 8 |
| `CreditAmountInFreeDefinedCrcy8` | `CURR(23)` | Credit Balance in Freely Defined Currency 8 |
| `EndingBalAmtInFreeDfndCrcy8` | `CURR(23)` | Ending Balance in Freely Defined Currency 8 |
| `IntmdEndingBalInFreeDfndCrcy8` | `CURR(23)` | Ending Balance in Free Defined Currency 8 |
| `IntmdDebitAmtInFreeDfndCrcy8` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `IntmdCreditAmtInFreeDfndCrcy8` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `StartingBalAmtInBalTransCrcy` | `CURR(23)` | Starting Balance Amount In Balance Transaction Currency |
| `DebitAmountInBalanceTransCrcy` | `CURR(23)` | Debit Balance in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` | `CURR(23)` | Credit Balance in Balance Transaction Currency |
| `EndingBalanceAmtInBalTransCrcy` | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `IntmdEndingBalInBalTransCrcy` | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `IntmdDebitAmtInBalTransCrcy` | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `IntmdCreditAmtInBalTransCrcy` | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `StartingBalanceAmtInTransCrcy` | `CURR(23)` | Starting Balance Amount In Transaction Currency |
| `DebitAmountInTransCrcy` | `CURR(23)` | Debit Balance in Transaction Currency |
| `CreditAmountInTransCrcy` | `CURR(23)` | Credit Balance in Transaction Currency |
| `EndingBalanceAmtInTransCrcy` | `CURR(23)` | Ending Balance in Transaction Currency |
| `IntmdEndingBalanceInTransCrcy` | `CURR(23)` | Ending Balance in Transaction Currency |
| `IntmdDebitAmtInTransCrcy` | `CURR(23)` | Debit Amount in Transaction Currency |
| `IntmdCreditAmountInTransCrcy` | `CURR(23)` | Credit Amount in Transaction Currency |
