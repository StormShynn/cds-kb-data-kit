---
name: C_TRIALBALANCEQ0002
description: "This CDS view can compare balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0002')/$value
semantic_en: "This CDS view can compare balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?"
semantic_vi: "Trial Balance Comparison — CDS view tiêu dùng dựa trên I_GLAcctBalanceComprnCube."
keywords:
  - "Trial Balance Comparison"
  - "trial"
  - "balance"
  - "comparison"
  - "ledger"
  - "company"
  - "code"
  - "name"
  - "account"
  - "hierarchy"
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
  - bo:salesorder
---
# C_TRIALBALANCEQ0002

**This CDS view can compare balances for two time frames for various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances for two time frames? What is the balance of a cost center for two time frames? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center for two time frames?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0002')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountHierarchy` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountHierarchyName` |  | |  | `cast( _GLAccountInChartOfAccounts._Text[1: Language = $parameters.P_Language].GLAccountName as fis_racct_hierarchy_name preserving type )` | `CHAR(20)` | G/L Account Hierarchy Node Description |
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
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | | `_ControllingArea` | `ControllingAreaName` | `CHAR(25)` | Controlling Area Name |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `SenderCostCenterName` |  | |  | `_PartnerCostCenter[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostCenterName` | `CHAR(20)` | Cost Center Name |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProfitCenterName` |  | |  | `_PartnerProfitCenter[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFunctionalAreaName` |  | |  | `_PartnerFunctionalArea._Text[1:Language = $parameters.P_Language].FunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerBusinessAreaName` |  | |  | `_PartnerBusinessArea._Text[1:Language = $parameters.P_Language].BusinessAreaName` | `CHAR(30)` | Business Area Name |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerSegmentName` |  | |  | `_PartnerSegment._Text[1:Language = $parameters.P_Language].SegmentName` | `CHAR(50)` | Segment Name |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `PostingKeyName` |  | |  | `_PostingKey._PostingKeyText[1:Language = $parameters.P_Language].PostingKeyName` | `CHAR(20)` | Posting Key Name |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `EliminationProfitCenterName` |  | |  | `_EliminationProfitCenter[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
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
| `MaterialName` |  | |  | `_Product._Text[1:Language = $parameters.P_Language].ProductName` | `CHAR(40)` | Product Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
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
| `InvtrySpecialStockSupplierName` |  | | `_InventorySpecialStockSupplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
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
| `MaterialGroupName` |  | |  | `_SoldProductGroup_2._ProductGroupText[1:Language = $parameters.P_Language].ProductGroupName` | `CHAR(20)` | Product Group Description |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
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
| `AmountInCompanyCodeCurrency` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_hsl_ui )` | `CURR(23)` | Amount in Company Code Currency |
| `ComprnAmountInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_hsl_ui )` | `CURR(23)` | Comparison Amount in Company Code Currency |
| `DifferenceAmtInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_hsl )` | `CURR(23)` | Difference Amount In Company Code Currency |
| `CoCodeCrcyDifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_hsl_ui )` | `DEC(23)` | Difference Percentage in Company Code Currency |
| `StartingBalanceAmtInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_hsl_ui )` | `CURR(23)` | Starting Balance Amount In Company Code Currency |
| `ComprnStartingBalInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_hsl_ui )` | `CURR(23)` | Comparison Starting Balance in Company Code Currency |
| `StartingDiffAmtInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_hsl )` | `CURR(23)` | Starting Bal Difference Amount In Company Code Currency |
| `CoCodeCrcyStartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_hsl_ui )` | `DEC(23)` | Starting Difference Percentage in Company Code Currency |
| `IntmdStrtBalAmtInCoCodeCrcy` |  | |  | `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `IntmdComprnStrtBalInCoCodeCrcy` |  | |  | `ComprnAmountInCoCodeCrcy` | `CURR(23)` | Comparison Amount in Company Code Currency |
| `IntmdEndingBalAmtInCoCodeCrcy` |  | |  | `EndingBalanceAmtInCoCodeCrcy` | `CURR(23)` | Ending Balance in Company Code Currency |
| `EndingBalanceAmtInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_hsl_ui )` | `CURR(23)` | Ending Balance in Company Code Currency |
| `IntmdOpeningBalAmtInCoCodeCrcy` |  | |  | `ComprnEndingBalInCoCodeCrcy` | `CURR(23)` | Comparison Ending Balance in Company Code Currency |
| `ComprnEndingBalInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_hsl_ui )` | `CURR(23)` | Comparison Ending Balance in Company Code Currency |
| `ToPostingDate` |  | |  |  | `DATS(8)` | Posting Date To |
| `ComprnToPostingDate` |  | |  |  | `DATS(8)` | Comparison Posting Date To |
| `FiscalPeriodDate` |  | |  |  | `CHAR(11)` | Fiscal Period Date |
| `ComprnFiscalPeriodDate` |  | |  |  | `CHAR(11)` | Comparison Fiscal Period Date |
| `AmountInGlobalCurrency` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_ksl_ui )` | `CURR(23)` | Amount in Global Currency |
| `ComprnAmountInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_ksl_ui )` | `CURR(23)` | Comparison Amount in Global Currency |
| `DifferenceAmtInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_ksl )` | `CURR(23)` | Difference Amount In Global Currency |
| `GlobalCrcyDifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_ksl_ui )` | `DEC(23)` | Difference Percentage in Global Currency |
| `StartingBalanceAmtInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_ksl_ui )` | `CURR(23)` | Starting Balance Amount In Global Currency |
| `ComprnStartingBalInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_ksl_ui )` | `CURR(23)` | Comparison Starting Balance in Global Currency |
| `StartingBalDiffAmtInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_ksl )` | `CURR(23)` | Starting Bal Difference Amount In Global Currency |
| `GlobalCrcyStartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_ksl_ui )` | `DEC(23)` | Starting Difference Percentage in Global Currency |
| `IntmdStrtgBalAmtInGlobalCrcy` |  | |  | `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `IntmdComprnStrtgBalInGlobCrcy` |  | |  | `ComprnAmountInGlobalCrcy` | `CURR(23)` | Comparison Amount in Global Currency |
| `IntmdEndingBalAmtInGlobalCrcy` |  | |  | `EndingBalanceAmtInGlobalCrcy` | `CURR(23)` | Ending Balance in Global Currency |
| `EndingBalanceAmtInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_ksl_ui )` | `CURR(23)` | Ending Balance in Global Currency |
| `IntmdComprnEndBalInGlobalCrcy` |  | |  | `ComprnEndingBalInGlobalCrcy` | `CURR(23)` | Comparison Ending Balance in Global Currency |
| `ComprnEndingBalInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_ksl_ui )` | `CURR(23)` | Comparison Ending Balance in Global Currency |
| `AmountInFunctionalCurrency` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_fcsl_ui )` | `CURR(23)` | Amount in Functional Currency |
| `ComprnAmountInFunctionalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_fcsl_ui )` | `CURR(23)` | Comparison Amount in Functional Currency |
| `DifferenceAmtInFunctionalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_fcsl_ui )` | `CURR(23)` | Difference Amount In Functional Currency |
| `FunctionalCrcyDifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_fcsl_ui )` | `DEC(23)` | Difference Percentage in Functional Currency |
| `StartingBalanceAmtInFuncnlCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_fcsl_ui )` | `CURR(23)` | Starting Balance Amount In Functional Currency |
| `ComprnStartingBalInFuncnlCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_fcsl_ui )` | `CURR(23)` | Comparison Starting Balance in Functional Currency |
| `StartingBalDiffAmtInFuncnlCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_fcsl_ui )` | `CURR(23)` | Starting Bal Difference Amount In Functional Currency |
| `FunctionalCrcyStartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_fcsl_ui )` | `DEC(23)` | Starting Difference Percentage in Functional Currency |
| `IntmdStrtgBalAmtInFuncnlCrcy` |  | |  | `AmountInFunctionalCurrency` | `CURR(23)` | Amount in Functional Currency |
| `IntmdComprnStrtgBalInFCrcy` |  | |  | `ComprnAmountInFunctionalCrcy` | `CURR(23)` | Comparison Amount in Functional Currency |
| `IntmdEndingBalAmtInFuncnlCrcy` |  | |  | `EndingBalanceAmtInFuncnlCrcy` | `CURR(23)` | Ending Balance in Functional Currency |
| `EndingBalanceAmtInFuncnlCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_fcsl_ui )` | `CURR(23)` | Ending Balance in Functional Currency |
| `IntmdComprnEndBalInFuncnlCrcy` |  | |  | `ComprnEndingBalInFuncnlCrcy` | `CURR(23)` | Comparison Ending Balance in Functional Currency |
| `ComprnEndingBalInFuncnlCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_fcsl_ui )` | `CURR(23)` | Comparison Ending Balance in Functional Currency |
| `AmountInFreeDefinedCurrency1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_osl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `ComprnAmountInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_osl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 1 |
| `DifferenceAmtInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_osl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 1 |
| `FreeDfndCrcy1DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_osl_ui )` | `DEC(23)` | Difference Percentage in Freely Defined Currency 1 |
| `StartingBalAmtInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_osl_ui )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 1 |
| `ComprnStrtgBalInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_osl_ui )` | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 1 |
| `StrtgBalDiffAmtInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_osl )` | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 1 |
| `FreeDfndCrcy1StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_osl_ui )` | `DEC(23)` | Starting Difference Percentage in Freely Defined Currency 1 |
| `IntmdStrtgBalInFreeDfndCrcy1` |  | |  | `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `IntmdComprnStrtgBalInFDCrcy1` |  | |  | `ComprnAmountInFreeDfndCrcy1` | `CURR(23)` | Comparison Amount in Free Defined Currency 1 |
| `IntmdEndingBalInFreeDfndCrcy1` |  | |  | `EndingBalAmtInFreeDfndCrcy1` | `CURR(23)` | Ending Balance in Free Defined Currency 1 |
| `EndingBalAmtInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_osl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 1 |
| `IntmdComprnEndingBalInFDCrcy1` |  | |  | `ComprnEndingBalInFreeDfndCrcy1` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 1 |
| `ComprnEndingBalInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_osl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_vsl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `ComprnAmountInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_vsl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 2 |
| `DifferenceAmtInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_vsl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 2 |
| `FreeDfndCrcy2DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_vsl_ui )` | `DEC(23)` | Difference Percentage in Freely Defined Currency 2 |
| `StartingBalAmtInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_vsl_ui )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 2 |
| `ComprnStrtgBalInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_vsl_ui )` | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 2 |
| `StrtgBalDiffAmtInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_vsl )` | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 2 |
| `FreeDfndCrcy2StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_vsl_ui )` | `DEC(23)` | Starting Difference Percentage in Freely Defined Currency 2 |
| `IntmdStrtgBalInFreeDfndCrcy2` |  | |  | `AmountInFreeDefinedCurrency2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `IntmdComprnStrtgBalInFDCrcy2` |  | |  | `ComprnAmountInFreeDfndCrcy2` | `CURR(23)` | Comparison Amount in Free Defined Currency 2 |
| `IntmdEndingBalInFreeDfndCrcy2` |  | |  | `EndingBalAmtInFreeDfndCrcy2` | `CURR(23)` | Ending Balance in Free Defined Currency 2 |
| `EndingBalAmtInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_vsl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 2 |
| `IntmdComprnEndingBalInFDCrcy2` |  | |  | `ComprnEndingBalInFreeDfndCrcy2` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 2 |
| `ComprnEndingBalInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_vsl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_bsl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `ComprnAmountInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_bsl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 3 |
| `DifferenceAmtInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_bsl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 3 |
| `FreeDfndCrcy3DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_bsl )` | `DEC(23)` | Difference Percentage In Freely Defined Currency 3 |
| `StartingBalAmtInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_bsl_ui )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 3 |
| `ComprnStrtgBalInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_bsl_ui )` | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 3 |
| `StrtgBalDiffAmtInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_bsl )` | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 3 |
| `FreeDfndCrcy3StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_bsl )` | `DEC(23)` | Starting Difference Percentage In Freely Defined Currency 3 |
| `IntmdStrtgBalInFreeDfndCrcy3` |  | |  | `AmountInFreeDefinedCurrency3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `IntmdComprnStrtgBalInFDCrcy3` |  | |  | `ComprnAmountInFreeDfndCrcy3` | `CURR(23)` | Comparison Amount in Free Defined Currency 3 |
| `IntmdEndingBalInFreeDfndCrcy3` |  | |  | `EndingBalAmtInFreeDfndCrcy3` | `CURR(23)` | Ending Balance in Free Defined Currency 3 |
| `EndingBalAmtInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_bsl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 3 |
| `IntmdComprnEndingBalInFDCrcy3` |  | |  | `ComprnEndingBalInFreeDfndCrcy3` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 3 |
| `ComprnEndingBalInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_bsl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_csl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `ComprnAmountInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_csl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 4 |
| `DifferenceAmtInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_csl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 4 |
| `FreeDfndCrcy4DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_csl )` | `DEC(23)` | Difference Percentage In Freely Defined Currency 4 |
| `StartingBalAmtInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_csl )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 4 |
| `ComprnStrtgBalInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_csl )` | `CURR(23)` | Comparison Starting Balance In Freely Defined Currency 4 |
| `StrtgBalDiffAmtInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_csl )` | `CURR(23)` | Starting Balance Difference Amount In Freely Dfnd Currency 4 |
| `FreeDfndCrcy4StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_csl )` | `DEC(23)` | Starting Difference Percentage In Freely Defined Currency 4 |
| `IntmdStrtgBalInFreeDfndCrcy4` |  | |  | `AmountInFreeDefinedCurrency4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `IntmdComprnStrtgBalInFDCrcy4` |  | |  | `ComprnAmountInFreeDfndCrcy4` | `CURR(23)` | Comparison Amount in Free Defined Currency 4 |
| `IntmdEndingBalInFreeDfndCrcy4` |  | |  | `EndingBalAmtInFreeDfndCrcy4` | `CURR(23)` | Ending Balance in Free Defined Currency 4 |
| `EndingBalAmtInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_csl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 4 |
| `IntmdComprnEndingBalInFDCrcy4` |  | |  | `ComprnEndingBalInFreeDfndCrcy4` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 4 |
| `ComprnEndingBalInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_csl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_dsl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `ComprnAmountInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_dsl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 5 |
| `DifferenceAmtInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_dsl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 5 |
| `FreeDfndCrcy5DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_dsl )` | `DEC(23)` | Difference Percentage In Freely Defined Currency 5 |
| `StartingBalAmtInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_dsl )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 5 |
| `ComprnStrtgBalInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_dsl )` | `CURR(23)` | Comparison Starting Balance In Freely Defined Currency 5 |
| `StrtgBalDiffAmtInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_dsl )` | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 5 |
| `FreeDfndCrcy5StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_dsl )` | `DEC(23)` | Starting Difference Percentage In Freely Defined Currency 5 |
| `IntmdStrtgBalInFreeDfndCrcy5` |  | |  | `AmountInFreeDefinedCurrency5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `IntmdComprnStrtgBalInFDCrcy5` |  | |  | `ComprnAmountInFreeDfndCrcy5` | `CURR(23)` | Comparison Amount in Free Defined Currency 5 |
| `IntmdEndingBalInFreeDfndCrcy5` |  | |  | `EndingBalAmtInFreeDfndCrcy5` | `CURR(23)` | Ending Balance in Free Defined Currency 5 |
| `EndingBalAmtInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_dsl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 5 |
| `IntmdComprnEndingBalInFDCrcy5` |  | |  | `ComprnEndingBalInFreeDfndCrcy5` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 5 |
| `ComprnEndingBalInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_dsl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_esl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `ComprnAmountInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_esl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 6 |
| `DifferenceAmtInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_esl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 6 |
| `FreeDfndCrcy6DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_esl )` | `DEC(23)` | Difference Percentage In Freely Defined Currency 6 |
| `StartingBalAmtInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_esl )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 6 |
| `ComprnStrtgBalInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_esl )` | `CURR(23)` | Comparison Starting Balance In Freely Defined Currency 6 |
| `StrtgBalDiffAmtInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_esl )` | `CURR(23)` | Starting Difference Percent In Freely Dfnd Currency 6 |
| `FreeDfndCrcy6StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_esl )` | `DEC(23)` | Starting Difference Percentage In Freely Dfnd Currency 6 |
| `IntmdStrtgBalInFreeDfndCrcy6` |  | |  | `AmountInFreeDefinedCurrency6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `IntmdComprnStrtgBalInFDCrcy6` |  | |  | `ComprnAmountInFreeDfndCrcy6` | `CURR(23)` | Comparison Amount in Free Defined Currency 6 |
| `IntmdEndingBalInFreeDfndCrcy6` |  | |  | `EndingBalAmtInFreeDfndCrcy6` | `CURR(23)` | Ending Balance in Free Defined Currency 6 |
| `EndingBalAmtInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_esl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 6 |
| `IntmdComprnEndingBalInFDCrcy6` |  | |  | `ComprnEndingBalInFreeDfndCrcy6` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 6 |
| `ComprnEndingBalInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_esl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_fsl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `ComprnAmountInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_fsl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 7 |
| `DifferenceAmtInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_fsl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 7 |
| `FreeDfndCrcy7DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_fsl_ui )` | `DEC(23)` | Difference Percentage in Freely Defined Currency 7 |
| `StartingBalAmtInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_fsl_ui )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 7 |
| `ComprnStrtgBalInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_fsl_ui )` | `CURR(23)` | Comparison Starting Balance in Freely Defined Currency 7 |
| `StrtgBalDiffAmtInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_fsl )` | `CURR(23)` | Starting Balance Difference Amount In Freely Defined Crcy 7 |
| `FreeDfndCrcy7StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_fsl_ui )` | `DEC(23)` | Starting Difference Percentage in Freely Defined Currency 7 |
| `IntmdStrtgBalInFreeDfndCrcy7` |  | |  | `AmountInFreeDefinedCurrency7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `IntmdComprnStrtgBalInFDCrcy7` |  | |  | `ComprnAmountInFreeDfndCrcy7` | `CURR(23)` | Comparison Amount in Free Defined Currency 7 |
| `IntmdEndingBalInFreeDfndCrcy7` |  | |  | `EndingBalAmtInFreeDfndCrcy7` | `CURR(23)` | Ending Balance in Free Defined Currency 7 |
| `EndingBalAmtInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_fsl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 7 |
| `IntmdComprnEndingBalInFDCrcy7` |  | |  | `ComprnEndingBalInFreeDfndCrcy7` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 7 |
| `ComprnEndingBalInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_fsl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_gsl_ui )` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `ComprnAmountInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_gsl_ui )` | `CURR(23)` | Comparison Amount in Freely Defined Currency 8 |
| `DifferenceAmtInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_gsl )` | `CURR(23)` | Difference Amount In Freely Defined Currency 8 |
| `FreeDfndCrcy8DifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_gsl )` | `DEC(23)` | Difference Percentage In Freely Defined Currency 8 |
| `StartingBalAmtInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_gsl )` | `CURR(23)` | Starting Balance Amount In Freely Defined Currency 8 |
| `ComprnStrtgBalInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_gsl )` | `CURR(23)` | Comparison Starting Balance In Freely Defined Crcy 8 |
| `StrtgBalDiffAmtInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_gsl )` | `CURR(23)` | Starting Bal Difference Amount In Freely Dfnd Crcy 8 |
| `FreeDfndCrcy8StartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_gsl )` | `DEC(23)` | Starting Difference Percentage In Freely Dfnd Currency 8 |
| `IntmdStrtgBalInFreeDfndCrcy8` |  | |  | `AmountInFreeDefinedCurrency8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `IntmdComprnStrtgBalInFDCrcy8` |  | |  | `ComprnAmountInFreeDfndCrcy8` | `CURR(23)` | Comparison Amount in Free Defined Currency 8 |
| `IntmdEndingBalInFreeDfndCrcy8` |  | |  | `EndingBalAmtInFreeDfndCrcy8` | `CURR(23)` | Ending Balance in Free Defined Currency 8 |
| `EndingBalAmtInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_gsl_ui )` | `CURR(23)` | Ending Balance in Freely Defined Currency 8 |
| `IntmdComprnEndingBalInFDCrcy8` |  | |  | `ComprnEndingBalInFreeDfndCrcy8` | `CURR(23)` | Comparison Ending Balance in Free Defined Currency 8 |
| `ComprnEndingBalInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_gsl_ui )` | `CURR(23)` | Comparison Ending Balance in Freely Defined Currency 8 |
| `AmountInBalanceTransacCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_tsl_ui )` | `CURR(23)` | Amount in Balance Transaction Currency |
| `ComprnAmountInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_tsl_ui )` | `CURR(23)` | Comparison Amount in Balance Transaction Currency |
| `DifferenceAmtInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_tsl )` | `CURR(23)` | Difference Amount In Balance Transaction Currency |
| `BalTransCrcyDifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_tsl_ui )` | `DEC(23)` | Difference Percentage in Balance Transaction Currency |
| `StartingBalAmtInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_tsl_ui )` | `CURR(23)` | Starting Balance Amount In Balance Transaction Currency |
| `ComprnStrtgBalInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_tsl_ui )` | `CURR(23)` | Comparison Starting Balance in Balance Transaction Currency |
| `StrtgBalDiffAmtInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_tsl )` | `CURR(23)` | Starting Balance Difference Amount In Balance Trans Crcy |
| `BalTransCrcyStartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_tsl_ui )` | `DEC(23)` | Starting Difference Percentage in Balance Trans. Currency |
| `IntmdStrtgBalInBalTransCrcy` |  | |  | `AmountInBalanceTransacCrcy` | `CURR(23)` | Amount in Balance Transaction Currency |
| `IntmdComprnStrtgBalInBTCrcy` |  | |  | `ComprnAmountInBalTransCrcy` | `CURR(23)` | Comparison Amount in Balance Transaction Currency |
| `IntmdEndingBalInBalTransCrcy` |  | |  | `EndingBalanceAmtInBalTransCrcy` | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `EndingBalanceAmtInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_tsl_ui )` | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `IntmdComprnEndingBalInBTCrcy` |  | |  | `ComprnEndingBalInBalTransCrcy` | `CURR(23)` | Comparison Ending Balance in Balance Transaction Currency |
| `ComprnEndingBalInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_tsl_ui )` | `CURR(23)` | Comparison Ending Balance in Balance Transaction Currency |
| `AmountInTransactionCurrency` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_wsl_ui )` | `CURR(23)` | Amount in Transaction Currency |
| `ComprnAmountInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_wsl_ui )` | `CURR(23)` | Comparison Amount in Transaction Currency |
| `DifferenceAmtInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_wsl )` | `CURR(23)` | Difference Amount In Transaction Currency |
| `TransCrcyDifferencePct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_wsl_ui )` | `DEC(23)` | Difference Percentage in Transaction Currency |
| `StartingBalAmtInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_wsl_ui )` | `CURR(23)` | Starting Balance Amount In Transaction Currency |
| `ComprnStrtgBalInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_wsl_ui )` | `CURR(23)` | Comparison Starting Balance in Transaction Currency |
| `StartingBalDiffAmtInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_wsl )` | `CURR(23)` | Starting Balance Difference Amount In Transaction Currency |
| `TransCrcyStartingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_wsl_ui )` | `DEC(23)` | Starting Difference Percentage in Transaction Currency |
| `IntmdStrtgBalAmtInTransCrcy` |  | |  | `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `IntmdComprnStrtgBalInTransCrcy` |  | |  | `ComprnAmountInTransCrcy` | `CURR(23)` | Comparison Amount in Transaction Currency |
| `IntmdEndingBalInTransCrcy` |  | |  | `EndingBalanceAmtInTransCrcy` | `CURR(23)` | Ending Balance in Transaction Currency |
| `EndingBalanceAmtInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_wsl_ui )` | `CURR(23)` | Ending Balance in Transaction Currency |
| `IntmdComprnEndgBalInTransCrcy` |  | |  | `ComprnEndingBalInTransCrcy` | `CURR(23)` | Comparison Ending Balance in Transaction Currency |
| `ComprnEndingBalInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_wsl_ui )` | `CURR(23)` | Comparison Ending Balance in Transaction Currency |
| `EndgBalDiffAmtInCoCodeCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_hsl )` | `CURR(23)` | Ending Balance Difference Amount in Company Code Currency |
| `CoCodeCrcyEndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_hsl )` | `DEC(23)` | Ending Difference Percentage in Company Code Currency |
| `EndgBalDiffAmtInGlobalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_ksl )` | `CURR(23)` | Ending Balance Difference Amount in Global Currency |
| `GlobalCrcyEndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_ksl )` | `DEC(23)` | Ending Difference Percentage in Global Currency |
| `EndgBalDiffAmtInFunctionalCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_fccur )` | `CURR(23)` | Ending Balance Difference Amount in Functional Currency |
| `FunctionalCrcyEndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_fccur )` | `DEC(23)` | Ending Difference Percentage in Functional Currency |
| `EndgBalDiffAmtInFreeDfndCrcy1` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_osl )` | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 1 |
| `FreeDfndCrcy1EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_osl )` | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 1 |
| `EndgBalDiffAmtInFreeDfndCrcy2` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_vsl )` | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 2 |
| `FreeDfndCrcy2EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_vsl )` | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 2 |
| `EndgBalDiffAmtInFreeDfndCrcy3` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_bsl )` | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 3 |
| `FreeDfndCrcy3EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_bsl )` | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 3 |
| `EndgBalDiffAmtInFreeDfndCrcy4` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_csl )` | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 4 |
| `FreeDfndCrcy4EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_csl )` | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 4 |
| `EndgBalDiffAmtInFreeDfndCrcy5` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_dsl )` | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 5 |
| `FreeDfndCrcy5EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_dsl )` | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 5 |
| `EndgBalDiffAmtInFreeDfndCrcy6` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_esl )` | `CURR(23)` | Ending Difference Percent in Freely Defined Crcy 6 |
| `FreeDfndCrcy6EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_esl )` | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 6 |
| `EndgBalDiffAmtInFreeDfndCrcy7` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_fsl )` | `CURR(23)` | Ending Balance Difference Amount in Freely Defined Crcy 7 |
| `FreeDfndCrcy7EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_fsl )` | `DEC(23)` | Ending Difference Percent in Freely Defined Currency 7 |
| `EndgBalDiffAmtInFreeDfndCrcy8` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_gsl )` | `CURR(23)` | Ending Bal Difference Amount in Freely Defined Crcy 8 |
| `FreeDfndCrcy8EndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_gsl )` | `DEC(23)` | Ending Difference Percentage in Freely Defined Currency 8 |
| `EndgBalDiffAmtInBalTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_tsl )` | `CURR(23)` | Ending Balance Difference Amount in Balance Transaction Crcy |
| `BalTransCrcyEndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_tsl )` | `DEC(23)` | Ending Difference Percentage in Balance Transaction Currency |
| `EndgBalDiffAmtInTransCrcy` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_wsl )` | `CURR(23)` | Ending Balance Difference Amount in Transaction Currency |
| `TransCrcyEndingDiffPct` |  | |  | `cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_wsl )` | `DEC(23)` | Ending Difference Percentage in Transaction Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0002')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRIALBALANCEQ0002')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CFITRIALBALQ0002',
                preserveKey: true,
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED }
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics.query: true
@Analytics.settings.maxProcessingEffort: #HIGH 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Trial Balance Comparison'
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions: true }
@ObjectModel: { supportedCapabilities: [ #ANALYTICAL_QUERY ],
                modelingPattern: #ANALYTICAL_QUERY, 
                usageType: { sizeCategory: #XXL,
                             serviceQuality: #D,
                             dataClass: #MIXED } }
@VDM.viewType: #CONSUMPTION 
 

define view C_Trialbalanceq0002 with parameters 
@Consumption.hidden: true
@Environment.systemField: #SYSTEM_LANGUAGE
  P_Language              : sylangu,
@Consumption.hidden: true
@Environment.systemField: #SYSTEM_DATE
  P_KeyDate               : sydate,
//@Consumption.derivation: { lookupEntity: 'I_CalendarDate', 
//    resultElement: 'FirstDayofMonthDate', binding: [
//    { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
//   }    
@Consumption.derivation: { lookupEntity: 'I_CalendarDate', 
    resultElement: 'FirstDayofMonthDate', 
    binding: [
    { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_ToPostingDate' } ]
   }    
  P_FromPostingDate       : fis_budat_from,
//@Consumption.derivation: { lookupEntity: 'I_CalendarDate', 
//    resultElement: 'CalendarDate', binding: [      
//    { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
//   }  
@Consumption.derivation: { lookupEntity: 'I_MySessionContext', 
    resultElement: 'UserLocalDate', binding: [
    { targetElement : 'UserID' , type : #SYSTEM_FIELD, value : '#USER' } ]
   }    
  P_ToPostingDate         : fis_budat_to,      
  P_ComprnFromPostingDate : fis_comprn_budat_from,
  P_ComprnToPostingDate   : fis_comprn_budat_to 

as select from I_GLAcctBalanceComprnCube 
( P_FromPostingDate: $parameters.P_FromPostingDate, P_ToPostingDate: $parameters.P_ToPostingDate, 
  P_ComprnFromPostingDate: $parameters.P_ComprnFromPostingDate, P_ComprnToPostingDate: $parameters.P_ComprnToPostingDate )
as I_GLAcctBalanceComprnCube
{
// Filter/ Fixed Rows 
@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
@Consumption.derivation: { lookupEntity: 'I_LedgerStdVH', 
      resultElement: 'Ledger', binding: [
      { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
     }
@AnalyticsDetails.query.variableSequence : 10
@AnalyticsDetails.query.axis: #FREE
Ledger,

@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: true}
@AnalyticsDetails.query.variableSequence : 20
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
CompanyCode,
_CompanyCode.CompanyCodeName,

@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 30
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
GLAccount,
//_GLAccountInChartOfAccounts._Text[1: Language = $parameters.P_Language].GLAccountName,

@Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_GLAccountHierarchyName', variableSequence: 31 } ] }
@EndUserText.label: 'G/L Account Hierarchy Node'                         
GLAccountHierarchy,
cast( _GLAccountInChartOfAccounts._Text[1: Language = $parameters.P_Language].GLAccountName as fis_racct_hierarchy_name preserving type ) as GLAccountHierarchyName,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PostingDate,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalYear,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
LedgerFiscalYear,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//GLRecordType,
@Consumption.filter.hidden: true
@Consumption.filter: {selectionType: #SINGLE, multipleSelections: true} 
@Consumption.derivation: { lookupEntity: 'I_LedgerSourceLedger', 
      resultElement: 'SourceLedger', binding: [
      { targetElement : 'Ledger' , type : #ELEMENT, value : 'Ledger' } ]
     }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SourceLedger,

///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FinancialTransactionType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
BusinessTransactionType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ReferenceDocumentType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
LogicalSystem,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//ReferenceDocumentContext,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//ReferenceDocument,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//ReferenceDocumentItem,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ReferenceDocumentItemGroup,
//SUBTA,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
IsReversal,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
IsReversed,
//XTRUEREV,
//AWTYP_REV,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//ReversalReferenceDocumentCntxt,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//ReversalReferenceDocument,
//SUBTA_REV,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
IsSettlement,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
IsSettled,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PredecessorReferenceDocType,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//PredecessorReferenceDocCntxt,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//PredecessorReferenceDocument,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//PredecessorReferenceDocItem,
//PREC_SUBTA,

////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 70
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ProfitCenter,
_ProfitCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and 
                ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].ProfitCenterName,                
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 90
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FunctionalArea,
_FunctionalArea._Text[1:Language = $parameters.P_Language].FunctionalAreaName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 95
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
BusinessArea,
_BusinessArea._Text[1:Language = $parameters.P_Language].BusinessAreaName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 90
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ControllingArea,
_ControllingArea.ControllingAreaName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 80
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
Segment,
_Segment._Text[1:Language = $parameters.P_Language].SegmentName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 305
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerCostCenter,
_PartnerCostCenter[1:ValidityEndDate  >= $parameters.P_KeyDate and 
                     ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostCenterName as SenderCostCenterName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 310
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerProfitCenter,
_PartnerProfitCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and 
                       ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].ProfitCenterName as PartnerProfitCenterName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 315
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerFunctionalArea,
_PartnerFunctionalArea._Text[1:Language = $parameters.P_Language].FunctionalAreaName as PartnerFunctionalAreaName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 320
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerBusinessArea,
_PartnerBusinessArea._Text[1:Language = $parameters.P_Language].BusinessAreaName as PartnerBusinessAreaName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 325
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerCompany,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 330
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerSegment,
_PartnerSegment._Text[1:Language = $parameters.P_Language].SegmentName as PartnerSegmentName,

/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
DebitCreditCode,
_DebitCreditCode._Text[1:Language = $parameters.P_Language].DebitCreditCodeName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalYearVariant,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 990
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalYearPeriod,
//@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
//@AnalyticsDetails.query.variableSequence : 995
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//FiscalPeriod,
//bldat,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AccountingDocumentType,
_AccountingDocumentType._Text[1:Language = $parameters.P_Language].AccountingDocumentTypeName,
//buzei,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AssignmentReference,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PostingKey,
//_PostingKey._Text[1:Language = $parameters.P_Language].PostingKeyName,
_PostingKey._PostingKeyText[1:Language = $parameters.P_Language].PostingKeyName as PostingKeyName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AccountingDocumentCategory,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
TransactionTypeDetermination,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//SubLedgerAcctLineItemType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AccountingDocCreatedByUser,
//timestamp,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
EliminationProfitCenter,
_EliminationProfitCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and 
                       ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].ProfitCenterName as EliminationProfitCenterName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OriginObjectType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
GLAccountType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ChartOfAccounts,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 161
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
AlternativeGLAccount,
//_AlternativeGLAccount._Text[1: Language = $parameters.P_Language].GLAccountName as AlternativeGLAccountName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CountryChartOfAccounts,

///////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
//////////////////////////////////////////////////////////////////////////
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//InvoiceReference,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//InvoiceReferenceFiscalYear,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//FollowOnDocumentType,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//InvoiceItemReference,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//ReferencePurchaseOrderCategory,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PurchasingDocument,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PurchasingDocumentItem,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AccountAssignmentNumber,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//DocumentItemText,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 105
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'Product'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'Product'
Material,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 105
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
Product,
//_Material._Text[1:Language = $parameters.P_Language].MaterialName,
_Product._Text[1:Language = $parameters.P_Language].ProductName as MaterialName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 100
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
Plant,
_Plant.PlantName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
Supplier,
_Supplier.SupplierName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
Customer,
_Customer.CustomerName,


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
/////////////////////////////////////////////////////////////////////////
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FinancialAccountType,
_FinancialAccountType._Text[1:Language = $parameters.P_Language].FinancialAccountTypeName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SpecialGLCode,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
TaxCode,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
HouseBank,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
HouseBankAccount,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
IsOpenItemManaged,
//augdt,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'ClearingJournalEntry'
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ClearingAccountingDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear' 
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ClearingDocFiscalYear,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ClearingJournalEntry,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ClearingJournalEntryFiscalYear,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//IsCleared,


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AssetDepreciationArea,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 110
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
MasterFixedAsset,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 120
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FixedAsset,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AssetValueDate,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AssetTransactionType,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//AssetAcctTransClassfctn,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//DepreciationFiscalPeriod,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
GroupMasterFixedAsset,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 130
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
GroupFixedAsset,
//settlement_rule,

//////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
//////////////////////////////////////////////////////////////////////////
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//CostEstimate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpecialStockValnType_2'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'          
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InventorySpecialStockValnType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InvtrySpecialStockValnType_2,
//xobew,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InventorySpecialStockType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InventorySpclStkSalesDocument,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InventorySpclStkSalesDocItm,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpclStockWBSElmntExtID'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InventorySpclStockWBSElement,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InvtrySpclStockWBSElmntExtID,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InventorySpecialStockSupplier,
_InventorySpecialStockSupplier.SupplierName as InvtrySpecialStockSupplierName,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
InventoryValuationType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ValuationArea,

////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
//////////////////////////////////////////////////////////////////////////////
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SenderGLAccount,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SenderAccountAssignment,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SenderAccountAssignmentType,

////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//UtilsProfileConstcyChkGrp,
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//ControllingDebitCreditCode,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ControllingObjectDebitType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
QuantityIsIncomplete,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OffsettingAccount,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OffsettingAccountType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
LineItemIsCompleted,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 140
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PersonnelNumber,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ControllingObjectClass,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerCompanyCode,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerControllingObjectClass,
//aufnr_org,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 330
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OriginCostCenter,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 335
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OriginCostCtrActivityType,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 150
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AccountAssignment,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AccountAssignmentType,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 210
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ProjectNetwork,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
RelatedNetworkActivity,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 220
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
BusinessProcess,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 230
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CostObject,
//bemot,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CustomerServiceNotification,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ServiceDocumentType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ServiceDocument,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ServiceDocumentItem,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerServiceDocumentType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerServiceDocument,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerServiceDocumentItem,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OperatingConcern,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 340
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerAccountAssignment,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerAccountAssignmentType,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 345
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerCostCtrActivityType,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 350
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerOrder,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 355
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerOrderCategory,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerWBSElementExternalID'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 360
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerWBSElement,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW

PartnerWBSElementExternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerProjectExternalID'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'PartnerProjectExternalID'
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 365
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerProject,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW

PartnerProjectExternalID,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 370
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerSalesDocument,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerSalesDocumentItem,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 375
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerProjectNetwork,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerProjectNetworkActivity,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 380
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerBusinessProcess,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 385
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerCostObject,


//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 240
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
BillingDocumentType,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 250
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SalesOrganization,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 260
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
DistributionChannel,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 270
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OrganizationDivision,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 280
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProduct'      
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProduct'
SoldMaterial,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 280
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW

SoldProduct,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 290
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProductGroup'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProductGroup'
MaterialGroup,

@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 290
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SoldProductGroup,
@AnalyticsDetails.query.variableSequence : 290
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProductGroup'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProductGroup'

ProductGroup,
//_MaterialGroup._Text[1:Language = $parameters.P_Language].MaterialGroupName,
//_SoldProductGroup._Text[1:Language = $parameters.P_Language].MaterialGroupName as MaterialGroupName,
//_SoldProductGroup_2._ProductGroupText[1:Language = $parameters.P_Language].ProductGroupName as MaterialGroupName,
//_ProductGroup._Text[1:Language = $parameters.P_Language].MaterialGroupName,
_SoldProductGroup_2._ProductGroupText[1:Language = $parameters.P_Language].ProductGroupName as MaterialGroupName,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 300
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CustomerGroup,
_CustomerGroup._Text[1:Language = $parameters.P_Language].CustomerGroupName,

//////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
/////////////////////////////////////////////////////////////////////
//re_bukrs,
//re_account,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 385
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FinancialManagementArea,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 390
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
Fund,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 393
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FundsCenter,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 395
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
GrantID,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 400
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
BudgetPeriod,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 405
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerFund,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 410
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerGrant,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 415
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
PartnerBudgetPeriod,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
JointVenture,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
JointVentureEquityGroup,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
JointVentureCostRecoveryCode,
//vptnr,
//btype,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
JointVentureEquityType,
//prodper,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
///////////////////////////////////////////////////////////////////////
//swenr,
//sgenr,
//sgrnr,
//smenr,
//recnnr,
//snksl,
//sempsl,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SettlementReferenceDate,
//pswenr,
//psgenr,
//psgrnr,
//psmenr,
//precnnr,
//psnksl,
//psempsl,
//pdabrz,

@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 60
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CostCenter,
_CostCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and 
              ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostCenterName,

@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 160
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CostCtrActivityType,
//@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
//@AnalyticsDetails.query.variableSequence : 170
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//InternalOrder,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 180
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OrderID,
//@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 190
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
OrderCategory,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementExternalID'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'WBSElementExternalID'
//@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 200
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
WBSElement,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW

WBSElementExternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'ProjectExternalID'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'ProjectExternalID'
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 210
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
Project,
@Consumption.filter: {selectionType: #RANGE, multipleSelections: true }
@AnalyticsDetails.query.variableSequence : 211
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ProjectExternalID,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SalesDocument'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SalesDocument'  
SalesOrder,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SalesDocumentItem'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SalesDocumentItem' 
SalesOrderItem,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SalesDocument,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
SalesDocumentItem,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ClearingDate,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CalendarYear,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CalendarQuarter,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CalendarYearQuarter,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CalendarMonth,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CalendarYearMonth,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CalendarWeek,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CalendarYearWeek,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalQuarter,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalWeek,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalYearQuarter,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalYearWeek,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
CompanyCodeCurrency,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
GlobalCurrency,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FunctionalCurrency,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency1,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency2,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency3,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency4,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency5,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency6,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency7,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
FreeDefinedCurrency8,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
BalanceTransactionCurrency,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@Semantics.currencyCode:true
TransactionCurrency,

@Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
@AnalyticsDetails.query.variableSequence : 171
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CorporateGroupAccount,
//_GLAccountInChartOfAccounts._CorporateGroupAccountText[1: Language = $parameters.P_Language].GLAccountName as CorporateGroupAccountName,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CorporateGroupChartOfAccounts,


@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
@AnalyticsDetails.query.variableSequence : 999
@AnalyticsDetails.query.axis: #FREE
IsBalanceSheetAccount,

@Consumption.derivation: { lookupEntity: 'I_FsclYrIntvlDrvtnForComprnDte',
  resultElement: 'FromFiscalYear',
  resultElementHigh: 'ToFiscalYear',
  binding: [{ targetParameter : 'P_FromPostingDate' ,type : #PARAMETER, value : 'P_FromPostingDate' },
            { targetParameter : 'P_ToPostingDate' ,type : #PARAMETER, value : 'P_ToPostingDate' },
            { targetParameter : 'P_ComprnFromPostingDate' ,type : #PARAMETER, value : 'P_ComprnFromPostingDate' },
            { targetParameter : 'P_ComprnToPostingDate' ,type : #PARAMETER, value : 'P_ComprnToPostingDate' },
                     { targetElement: 'Ledger' , type : #ELEMENT, value : 'Ledger' }
//                     { targetElement: 'CompanyCode' , type : #ELEMENT, value : 'CompanyCode' }
  ]
  }
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false, hidden: true }
//@Consumption.hidden: true
//@AnalyticsDetails.query.hidden: true
FlowOfFundsLedgerFiscalYear,

@AnalyticsDetails.query.axis: #FREE
CustomerSupplierCountry,

@AnalyticsDetails.query.axis: #FREE
CustomerSupplierIndustry,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FS  Universal Journal Entry: Fields for Financial Services
///////////////////////////////////////////////////////////////////////
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialServicesProductGroup,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialServicesBranch,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialDataSource,    

////// Measures

// Amount and Comparison Amount has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Amount in CC Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtBalAmtInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_hsl_ui ) as AmountInCompanyCodeCurrency,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Comprn. Amount in CC'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtBalInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_hsl_ui ) as ComprnAmountInCoCodeCrcy,


@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Diff. Amount CC Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails.query.formula : '$projection.AmountInCompanyCodeCurrency - $projection.ComprnAmountInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_hsl ) as DifferenceAmtInCoCodeCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Diff. in % CC Crcy'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInCoCodeCrcy / $projection.ComprnAmountInCoCodeCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_hsl_ui ) as CoCodeCrcyDifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Start. Bal. CC Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInCoCodeCrcy - $projection.AmountInCompanyCodeCurrency' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_hsl_ui ) as StartingBalanceAmtInCoCodeCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Comprn. Start. Bal. CC'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInCoCodeCrcy - $projection.ComprnAmountInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_hsl_ui ) as ComprnStartingBalInCoCodeCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Diff. Start. Bal. CC'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails.query.formula : '$projection.StartingBalanceAmtInCoCodeCrcy - $projection.ComprnStartingBalInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_hsl ) as StartingDiffAmtInCoCodeCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Diff. % Start.Bal CC'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'CompanyCodeCurrency'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StartingDiffAmtInCoCodeCrcy / $projection.ComprnStartingBalInCoCodeCrcy) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_hsl_ui ) as CoCodeCrcyStartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@Consumption.hidden: true
AmountInCompanyCodeCurrency as IntmdStrtBalAmtInCoCodeCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@Consumption.hidden: true
ComprnAmountInCoCodeCrcy as IntmdComprnStrtBalInCoCodeCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@Consumption.hidden: true
EndingBalanceAmtInCoCodeCrcy as IntmdEndingBalAmtInCoCodeCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalAmtInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_hsl_ui ) as EndingBalanceAmtInCoCodeCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@Consumption.hidden: true
ComprnEndingBalInCoCodeCrcy as IntmdOpeningBalAmtInCoCodeCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdOpeningBalAmtInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_hsl_ui ) as ComprnEndingBalInCoCodeCrcy,  

//@AnalyticsDetails.query.axis: #FREE
//@EndUserText.label: 'Dont look at this column'
@Consumption.hidden: true
ToPostingDate,

//@AnalyticsDetails.query.axis: #FREE
//@EndUserText.label: 'Dont look at this column'
@Consumption.hidden: true
ComprnToPostingDate,

//@AnalyticsDetails.query.axis: #FREE
//@EndUserText.label: 'Dont look at this column'
@Consumption.hidden: true
FiscalPeriodDate,

//@AnalyticsDetails.query.axis: #FREE
//@EndUserText.label: 'Dont look at this column'
@Consumption.hidden: true
ComprnFiscalPeriodDate,


// Amount and Comparison Amount (Global Currency) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Glob Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalAmtInGlobalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_ksl_ui ) as AmountInGlobalCurrency,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Glob'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInGlobCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_ksl_ui ) as ComprnAmountInGlobalCrcy,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Glob Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails.query.formula : '$projection.AmountInGlobalCurrency - $projection.ComprnAmountInGlobalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_ksl ) as DifferenceAmtInGlobalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Global Crcy'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInGlobalCrcy / $projection.ComprnAmountInGlobalCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_ksl_ui ) as GlobalCrcyDifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Glob Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInGlobalCrcy - $projection.AmountInGlobalCurrency' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_ksl_ui ) as StartingBalanceAmtInGlobalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Glob'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInGlobalCrcy - $projection.ComprnAmountInGlobalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_ksl_ui ) as ComprnStartingBalInGlobalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Glob'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails.query.formula : '$projection.StartingBalanceAmtInGlobalCrcy - $projection.ComprnStartingBalInGlobalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_ksl ) as StartingBalDiffAmtInGlobalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Glob'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'GlobalCurrency'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StartingBalDiffAmtInGlobalCrcy  / $projection.ComprnStartingBalInGlobalCrcy) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_ksl_ui ) as GlobalCrcyStartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'GlobalCurrency'
@Consumption.hidden: true
AmountInGlobalCurrency as IntmdStrtgBalAmtInGlobalCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'GlobalCurrency'
@Consumption.hidden: true
ComprnAmountInGlobalCrcy as IntmdComprnStrtgBalInGlobCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'GlobalCurrency'
@Consumption.hidden: true
EndingBalanceAmtInGlobalCrcy as IntmdEndingBalAmtInGlobalCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalAmtInGlobalCrcy' cast( cast( 1 as abap.dec(23,2)) as  fis_end_bal_ksl_ui ) as EndingBalanceAmtInGlobalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'GlobalCurrency'
@Consumption.hidden: true
ComprnEndingBalInGlobalCrcy as IntmdComprnEndBalInGlobalCrcy, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndBalInGlobalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_ksl_ui ) as ComprnEndingBalInGlobalCrcy,



// Amount and Comparison Amount (Functional Currency) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalAmtInFuncnlCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_fcsl_ui ) as AmountInFunctionalCurrency,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_fcsl_ui ) as ComprnAmountInFunctionalCrcy,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@AnalyticsDetails.query.formula : '$projection.AmountInFunctionalCurrency - $projection.ComprnAmountInFunctionalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_fcsl_ui ) as DifferenceAmtInFunctionalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFunctionalCrcy / $projection.ComprnAmountInFunctionalCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_fcsl_ui ) as FunctionalCrcyDifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInFuncnlCrcy - $projection.AmountInFunctionalCurrency' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_fcsl_ui ) as StartingBalanceAmtInFuncnlCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFuncnlCrcy - $projection.ComprnAmountInFunctionalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_fcsl_ui ) as ComprnStartingBalInFuncnlCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@AnalyticsDetails.query.formula : '$projection.StartingBalanceAmtInFuncnlCrcy - $projection.ComprnStartingBalInFuncnlCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_fcsl_ui ) as StartingBalDiffAmtInFuncnlCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@DefaultAggregation: #FORMULA                                                                        
@AnalyticsDetails.query.formula : 'NDIV0($projection.StartingBalDiffAmtInFuncnlCrcy  / $projection.ComprnStartingBalInFuncnlCrcy) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_fcsl_ui ) as FunctionalCrcyStartingDiffPct,  

//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@Consumption.hidden: true
AmountInFunctionalCurrency as IntmdStrtgBalAmtInFuncnlCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@Consumption.hidden: true
ComprnAmountInFunctionalCrcy as IntmdComprnStrtgBalInFCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@Consumption.hidden: true
EndingBalanceAmtInFuncnlCrcy as IntmdEndingBalAmtInFuncnlCrcy,
@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalAmtInFuncnlCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_fcsl_ui ) as EndingBalanceAmtInFuncnlCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@Consumption.hidden: true
ComprnEndingBalInFuncnlCrcy as IntmdComprnEndBalInFuncnlCrcy, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndBalInFuncnlCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_fcsl_ui ) as ComprnEndingBalInFuncnlCrcy,


// Amount and Comparison Amount (FreeDefinedCurrency1) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_osl_ui ) as AmountInFreeDefinedCurrency1,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_osl_ui ) as ComprnAmountInFreeDfndCrcy1,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency1 - $projection.ComprnAmountInFreeDfndCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_osl ) as DifferenceAmtInFreeDfndCrcy1,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy1 / $projection.ComprnAmountInFreeDfndCrcy1 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_osl_ui ) as FreeDfndCrcy1DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy1 - $projection.AmountInFreeDefinedCurrency1' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_osl_ui ) as StartingBalAmtInFreeDfndCrcy1,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy1 - $projection.ComprnAmountInFreeDfndCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_osl_ui ) as ComprnStrtgBalInFreeDfndCrcy1,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy1 - $projection.ComprnStrtgBalInFreeDfndCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_osl ) as StrtgBalDiffAmtInFreeDfndCrcy1,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 1'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy1  / $projection.ComprnStrtgBalInFreeDfndCrcy1) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_osl_ui ) as FreeDfndCrcy1StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@Consumption.hidden: true
AmountInFreeDefinedCurrency1 as IntmdStrtgBalInFreeDfndCrcy1,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy1 as IntmdComprnStrtgBalInFDCrcy1,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy1 as IntmdEndingBalInFreeDfndCrcy1,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_osl_ui ) as EndingBalAmtInFreeDfndCrcy1,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy1 as IntmdComprnEndingBalInFDCrcy1, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_osl_ui ) as ComprnEndingBalInFreeDfndCrcy1,


// Amount and Comparison Amount (FreeDefinedCurrency2) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_vsl_ui ) as AmountInFreeDefinedCurrency2,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_vsl_ui ) as ComprnAmountInFreeDfndCrcy2,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency2 - $projection.ComprnAmountInFreeDfndCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_vsl ) as DifferenceAmtInFreeDfndCrcy2,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy2 / $projection.ComprnAmountInFreeDfndCrcy2 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_vsl_ui ) as FreeDfndCrcy2DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy2 - $projection.AmountInFreeDefinedCurrency2' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_vsl_ui ) as StartingBalAmtInFreeDfndCrcy2,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy2 - $projection.ComprnAmountInFreeDfndCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_vsl_ui ) as ComprnStrtgBalInFreeDfndCrcy2,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy2 - $projection.ComprnStrtgBalInFreeDfndCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_vsl ) as StrtgBalDiffAmtInFreeDfndCrcy2,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 2'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy2  / $projection.ComprnStrtgBalInFreeDfndCrcy2) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_vsl_ui ) as FreeDfndCrcy2StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@Consumption.hidden: true
AmountInFreeDefinedCurrency2 as IntmdStrtgBalInFreeDfndCrcy2,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy2 as IntmdComprnStrtgBalInFDCrcy2,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy2 as IntmdEndingBalInFreeDfndCrcy2,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_vsl_ui ) as EndingBalAmtInFreeDfndCrcy2,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy2 as IntmdComprnEndingBalInFDCrcy2, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_vsl_ui ) as ComprnEndingBalInFreeDfndCrcy2,


// Amount and Comparison Amount (FreeDefinedCurrency3) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_bsl_ui ) as AmountInFreeDefinedCurrency3,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_bsl_ui ) as ComprnAmountInFreeDfndCrcy3,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency3 - $projection.ComprnAmountInFreeDfndCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_bsl ) as DifferenceAmtInFreeDfndCrcy3,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy3 / $projection.ComprnAmountInFreeDfndCrcy3 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_bsl ) as FreeDfndCrcy3DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy3 - $projection.AmountInFreeDefinedCurrency3' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_bsl_ui ) as StartingBalAmtInFreeDfndCrcy3,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy3 - $projection.ComprnAmountInFreeDfndCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_bsl_ui ) as ComprnStrtgBalInFreeDfndCrcy3,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy3 - $projection.ComprnStrtgBalInFreeDfndCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_bsl ) as StrtgBalDiffAmtInFreeDfndCrcy3,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 3'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy3  / $projection.ComprnStrtgBalInFreeDfndCrcy3) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_bsl ) as FreeDfndCrcy3StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@Consumption.hidden: true
AmountInFreeDefinedCurrency3 as IntmdStrtgBalInFreeDfndCrcy3,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy3 as IntmdComprnStrtgBalInFDCrcy3,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy3 as IntmdEndingBalInFreeDfndCrcy3,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_bsl_ui ) as EndingBalAmtInFreeDfndCrcy3,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy3 as IntmdComprnEndingBalInFDCrcy3, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 3'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_bsl_ui ) as ComprnEndingBalInFreeDfndCrcy3,


// Amount and Comparison Amount (FreeDefinedCurrency4) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_csl_ui ) as AmountInFreeDefinedCurrency4,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_csl_ui ) as ComprnAmountInFreeDfndCrcy4,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency4 - $projection.ComprnAmountInFreeDfndCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_csl ) as DifferenceAmtInFreeDfndCrcy4,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy4 / $projection.ComprnAmountInFreeDfndCrcy4 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_csl ) as FreeDfndCrcy4DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy4 - $projection.AmountInFreeDefinedCurrency4' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_csl ) as StartingBalAmtInFreeDfndCrcy4,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy4 - $projection.ComprnAmountInFreeDfndCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_csl ) as ComprnStrtgBalInFreeDfndCrcy4,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy4 - $projection.ComprnStrtgBalInFreeDfndCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_csl ) as StrtgBalDiffAmtInFreeDfndCrcy4,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 4'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy4  / $projection.ComprnStrtgBalInFreeDfndCrcy4) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_csl ) as FreeDfndCrcy4StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@Consumption.hidden: true
AmountInFreeDefinedCurrency4 as IntmdStrtgBalInFreeDfndCrcy4,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy4 as IntmdComprnStrtgBalInFDCrcy4,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy4 as IntmdEndingBalInFreeDfndCrcy4,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_csl_ui ) as EndingBalAmtInFreeDfndCrcy4,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy4 as IntmdComprnEndingBalInFDCrcy4, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 4'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_csl_ui ) as ComprnEndingBalInFreeDfndCrcy4,


// Amount and Comparison Amount (FreeDefinedCurrency5) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_dsl_ui ) as AmountInFreeDefinedCurrency5,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_dsl_ui ) as ComprnAmountInFreeDfndCrcy5,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency5 - $projection.ComprnAmountInFreeDfndCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_dsl ) as DifferenceAmtInFreeDfndCrcy5,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy5 / $projection.ComprnAmountInFreeDfndCrcy5 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_dsl ) as FreeDfndCrcy5DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy5 - $projection.AmountInFreeDefinedCurrency5' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_dsl ) as StartingBalAmtInFreeDfndCrcy5,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy5 - $projection.ComprnAmountInFreeDfndCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_dsl ) as ComprnStrtgBalInFreeDfndCrcy5,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy5 - $projection.ComprnStrtgBalInFreeDfndCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_dsl ) as StrtgBalDiffAmtInFreeDfndCrcy5,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 5'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy5  / $projection.ComprnStrtgBalInFreeDfndCrcy5) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_dsl ) as FreeDfndCrcy5StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@Consumption.hidden: true
AmountInFreeDefinedCurrency5 as IntmdStrtgBalInFreeDfndCrcy5,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy5 as IntmdComprnStrtgBalInFDCrcy5,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy5 as IntmdEndingBalInFreeDfndCrcy5,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_dsl_ui ) as EndingBalAmtInFreeDfndCrcy5,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy5 as IntmdComprnEndingBalInFDCrcy5, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 5'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_dsl_ui ) as ComprnEndingBalInFreeDfndCrcy5,


// Amount and Comparison Amount (FreeDefinedCurrency6) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_esl_ui ) as AmountInFreeDefinedCurrency6,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_esl_ui ) as ComprnAmountInFreeDfndCrcy6,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency6 - $projection.ComprnAmountInFreeDfndCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_esl ) as DifferenceAmtInFreeDfndCrcy6,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy6 / $projection.ComprnAmountInFreeDfndCrcy6 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_esl ) as FreeDfndCrcy6DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy6 - $projection.AmountInFreeDefinedCurrency6' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_esl ) as StartingBalAmtInFreeDfndCrcy6,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy6 - $projection.ComprnAmountInFreeDfndCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_esl ) as ComprnStrtgBalInFreeDfndCrcy6,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy6 - $projection.ComprnStrtgBalInFreeDfndCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_esl ) as StrtgBalDiffAmtInFreeDfndCrcy6,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 6'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy6  / $projection.ComprnStrtgBalInFreeDfndCrcy6) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_esl ) as FreeDfndCrcy6StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@Consumption.hidden: true
AmountInFreeDefinedCurrency6 as IntmdStrtgBalInFreeDfndCrcy6,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy6 as IntmdComprnStrtgBalInFDCrcy6,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy6 as IntmdEndingBalInFreeDfndCrcy6,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_esl_ui ) as EndingBalAmtInFreeDfndCrcy6,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy6 as IntmdComprnEndingBalInFDCrcy6, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 6'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_esl_ui ) as ComprnEndingBalInFreeDfndCrcy6,


// Amount and Comparison Amount (FreeDefinedCurrency7) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_fsl_ui ) as AmountInFreeDefinedCurrency7,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_fsl_ui ) as ComprnAmountInFreeDfndCrcy7,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency7 - $projection.ComprnAmountInFreeDfndCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_fsl ) as DifferenceAmtInFreeDfndCrcy7,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy7 / $projection.ComprnAmountInFreeDfndCrcy7 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_fsl_ui ) as FreeDfndCrcy7DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy7 - $projection.AmountInFreeDefinedCurrency7' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_fsl_ui ) as StartingBalAmtInFreeDfndCrcy7,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy7 - $projection.ComprnAmountInFreeDfndCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_fsl_ui ) as ComprnStrtgBalInFreeDfndCrcy7,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy7 - $projection.ComprnStrtgBalInFreeDfndCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_fsl ) as StrtgBalDiffAmtInFreeDfndCrcy7,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 7'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy7  / $projection.ComprnStrtgBalInFreeDfndCrcy7) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_fsl_ui ) as FreeDfndCrcy7StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@Consumption.hidden: true
AmountInFreeDefinedCurrency7 as IntmdStrtgBalInFreeDfndCrcy7,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy7 as IntmdComprnStrtgBalInFDCrcy7,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy7 as IntmdEndingBalInFreeDfndCrcy7,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_fsl_ui ) as EndingBalAmtInFreeDfndCrcy7,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy7 as IntmdComprnEndingBalInFDCrcy7, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 7'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_fsl_ui ) as ComprnEndingBalInFreeDfndCrcy7,


// Amount and Comparison Amount (FreeDefinedCurrency8) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInFreeDfndCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_gsl_ui ) as AmountInFreeDefinedCurrency8,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInFDCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_gsl_ui ) as ComprnAmountInFreeDfndCrcy8,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails.query.formula : '$projection.AmountInFreeDefinedCurrency8 - $projection.ComprnAmountInFreeDfndCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_gsl ) as DifferenceAmtInFreeDfndCrcy8,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInFreeDfndCrcy8 / $projection.ComprnAmountInFreeDfndCrcy8 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_gsl ) as FreeDfndCrcy8DifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy8 - $projection.AmountInFreeDefinedCurrency8' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_gsl ) as StartingBalAmtInFreeDfndCrcy8,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInFreeDfndCrcy8 - $projection.ComprnAmountInFreeDfndCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_gsl ) as ComprnStrtgBalInFreeDfndCrcy8,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInFreeDfndCrcy8 - $projection.ComprnStrtgBalInFreeDfndCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_gsl ) as StrtgBalDiffAmtInFreeDfndCrcy8,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start.Bal Free Dfnd Crcy 8'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInFreeDfndCrcy8  / $projection.ComprnStrtgBalInFreeDfndCrcy8) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_gsl ) as FreeDfndCrcy8StartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@Consumption.hidden: true
AmountInFreeDefinedCurrency8 as IntmdStrtgBalInFreeDfndCrcy8,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@Consumption.hidden: true
ComprnAmountInFreeDfndCrcy8 as IntmdComprnStrtgBalInFDCrcy8,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@Consumption.hidden: true
EndingBalAmtInFreeDfndCrcy8 as IntmdEndingBalInFreeDfndCrcy8,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInFreeDfndCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_gsl_ui ) as EndingBalAmtInFreeDfndCrcy8,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@Consumption.hidden: true
ComprnEndingBalInFreeDfndCrcy8 as IntmdComprnEndingBalInFDCrcy8, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 8'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST,
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInFDCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_gsl_ui ) as ComprnEndingBalInFreeDfndCrcy8,


// Amount and Comparison Amount (Balance Transaction Currency) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in TB Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalInBalTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_tsl_ui ) as AmountInBalanceTransacCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in TB Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInBTCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_tsl_ui ) as ComprnAmountInBalTransCrcy,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. in TB Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.AmountInBalanceTransacCrcy - $projection.ComprnAmountInBalTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_tsl ) as DifferenceAmtInBalTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % TB Crcy'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInBalTransCrcy / $projection.ComprnAmountInBalTransCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_tsl_ui ) as BalTransCrcyDifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. TB Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInBalTransCrcy - $projection.AmountInBalanceTransacCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_tsl_ui ) as StartingBalAmtInBalTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. TB Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInBalTransCrcy - $projection.ComprnAmountInBalTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_tsl_ui ) as ComprnStrtgBalInBalTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. TB Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInBalTransCrcy - $projection.ComprnStrtgBalInBalTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_tsl ) as StrtgBalDiffAmtInBalTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start. Bal TB Crcy'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StrtgBalDiffAmtInBalTransCrcy  / $projection.ComprnStrtgBalInBalTransCrcy) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_tsl_ui ) as BalTransCrcyStartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@Consumption.hidden: true
AmountInBalanceTransacCrcy as IntmdStrtgBalInBalTransCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@Consumption.hidden: true
ComprnAmountInBalTransCrcy as IntmdComprnStrtgBalInBTCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@Consumption.hidden: true
EndingBalanceAmtInBalTransCrcy as IntmdEndingBalInBalTransCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInBalTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_tsl_ui ) as EndingBalanceAmtInBalTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@Consumption.hidden: true
ComprnEndingBalInBalTransCrcy as IntmdComprnEndingBalInBTCrcy, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndingBalInBTCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_tsl_ui ) as ComprnEndingBalInBalTransCrcy,


// Amount and Comparison Amount (Balance Transaction Currency) has an exception aggregation to make sure that LedgerFiscalYear is part of the select list
// this is necessary to push down the aggregation to the lowest level, since LedgerFiscalYear is part of the join condition of the FiscalCalenderDate
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Amount in Trans Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdStrtgBalAmtInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_wsl_ui ) as AmountInTransactionCurrency,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Amt. in Trans Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #SUM, 
                                      exceptionAggregationElements: ['LedgerFiscalYear']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnStrtgBalInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_wsl_ui ) as ComprnAmountInTransCrcy,


@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Amt. in Trans Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.AmountInTransactionCurrency - $projection.ComprnAmountInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_diff_amt_wsl ) as DifferenceAmtInTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Trans Crcy'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails.query.formula : 'NDIV0($projection.DifferenceAmtInTransCrcy / $projection.ComprnAmountInTransCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_diff_pct_wsl_ui ) as TransCrcyDifferencePct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Start. Bal. Trans Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInTransCrcy - $projection.AmountInTransactionCurrency' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_wsl_ui ) as StartingBalAmtInTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Comprn. Start. Bal. Trans Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.ComprnEndingBalInTransCrcy - $projection.ComprnAmountInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_start_bal_wsl_ui ) as ComprnStrtgBalInTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. Start. Bal. Trans Crcy'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.StartingBalAmtInTransCrcy - $projection.ComprnStrtgBalInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_start_bal_diff_wsl ) as StartingBalDiffAmtInTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
//@EndUserText.label: 'Diff. % Start. Bal Trans Crcy'
@DefaultAggregation: #FORMULA
//@Semantics.amount.currencyCode: 'TransactionCurrency'                                                                                  
@AnalyticsDetails.query.formula : 'NDIV0($projection.StartingBalDiffAmtInTransCrcy  / $projection.ComprnStrtgBalInTransCrcy) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_start_diff_pct_wsl_ui ) as TransCrcyStartingDiffPct,  


//Hidden Fields
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency'
@Consumption.hidden: true
AmountInTransactionCurrency as IntmdStrtgBalAmtInTransCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency'
@Consumption.hidden: true
ComprnAmountInTransCrcy as IntmdComprnStrtgBalInTransCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency'
@Consumption.hidden: true
EndingBalanceAmtInTransCrcy as IntmdEndingBalInTransCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['FiscalPeriodDate']
//                                      exceptionAggregationElements: ['ToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdEndingBalInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_wsl_ui ) as EndingBalanceAmtInTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Dont look at this column'
@DefaultAggregation: #SUM
@Semantics.amount.currencyCode: 'TransactionCurrency'
@Consumption.hidden: true
ComprnEndingBalInTransCrcy as IntmdComprnEndgBalInTransCrcy, 

@AnalyticsDetails.query.axis: #COLUMNS
//@EndUserText.label: 'Dont look at this column 2'
@DefaultAggregation: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
//@Consumption.hidden: true
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #LAST, 
                                      exceptionAggregationElements: ['ComprnFiscalPeriodDate']
//                                      exceptionAggregationElements: ['ComprnToPostingDate']
                                   }]
    }
@AnalyticsDetails.query.formula : '$projection.IntmdComprnEndgBalInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_comprn_end_bal_wsl_ui ) as ComprnEndingBalInTransCrcy,

// Ending Balance Difference Amount/Percentage measures
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInCoCodeCrcy - $projection.ComprnEndingBalInCoCodeCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_hsl ) as EndgBalDiffAmtInCoCodeCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInCoCodeCrcy / $projection.ComprnEndingBalInCoCodeCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_hsl ) as CoCodeCrcyEndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'GlobalCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInGlobalCrcy - $projection.ComprnEndingBalInGlobalCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_ksl ) as EndgBalDiffAmtInGlobalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInCoCodeCrcy / $projection.ComprnEndingBalInGlobalCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_ksl ) as GlobalCrcyEndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FunctionalCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInFuncnlCrcy - $projection.ComprnEndingBalInFuncnlCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_fccur ) as EndgBalDiffAmtInFunctionalCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFunctionalCrcy / $projection.ComprnEndingBalInFuncnlCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_fccur ) as FunctionalCrcyEndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy1 - $projection.ComprnEndingBalInFreeDfndCrcy1' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_osl ) as EndgBalDiffAmtInFreeDfndCrcy1,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy1 / $projection.ComprnEndingBalInFreeDfndCrcy1 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_osl ) as FreeDfndCrcy1EndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy2 - $projection.ComprnEndingBalInFreeDfndCrcy2' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_vsl ) as EndgBalDiffAmtInFreeDfndCrcy2,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy2 / $projection.ComprnEndingBalInFreeDfndCrcy2 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_vsl ) as FreeDfndCrcy2EndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy3 - $projection.ComprnEndingBalInFreeDfndCrcy3' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_bsl ) as EndgBalDiffAmtInFreeDfndCrcy3,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy3 / $projection.ComprnEndingBalInFreeDfndCrcy3 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_bsl ) as FreeDfndCrcy3EndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy4 - $projection.ComprnEndingBalInFreeDfndCrcy4' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_csl ) as EndgBalDiffAmtInFreeDfndCrcy4,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy4 / $projection.ComprnEndingBalInFreeDfndCrcy4 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_csl ) as FreeDfndCrcy4EndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy5 - $projection.ComprnEndingBalInFreeDfndCrcy5' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_dsl ) as EndgBalDiffAmtInFreeDfndCrcy5,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy5 / $projection.ComprnEndingBalInFreeDfndCrcy5 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_dsl ) as FreeDfndCrcy5EndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy6 - $projection.ComprnEndingBalInFreeDfndCrcy6' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_esl ) as EndgBalDiffAmtInFreeDfndCrcy6,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy6 / $projection.ComprnEndingBalInFreeDfndCrcy6 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_esl ) as FreeDfndCrcy6EndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy7 - $projection.ComprnEndingBalInFreeDfndCrcy7' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_fsl ) as EndgBalDiffAmtInFreeDfndCrcy7,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy7 / $projection.ComprnEndingBalInFreeDfndCrcy7 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_fsl ) as FreeDfndCrcy7EndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
@AnalyticsDetails.query.formula : '$projection.EndingBalAmtInFreeDfndCrcy8 - $projection.ComprnEndingBalInFreeDfndCrcy8' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_gsl ) as EndgBalDiffAmtInFreeDfndCrcy8,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInFreeDfndCrcy8 / $projection.ComprnEndingBalInFreeDfndCrcy8 ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_gsl ) as FreeDfndCrcy8EndingDiffPct,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInBalTransCrcy - $projection.ComprnEndingBalInBalTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_tsl ) as EndgBalDiffAmtInBalTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInBalTransCrcy / $projection.ComprnEndingBalInBalTransCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_tsl ) as BalTransCrcyEndingDiffPct,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@Semantics.amount.currencyCode: 'TransactionCurrency'
@AnalyticsDetails.query.formula : '$projection.EndingBalanceAmtInTransCrcy - $projection.ComprnEndingBalInTransCrcy' cast( cast( 1 as abap.dec(23,2)) as fis_end_bal_diff_wsl ) as EndgBalDiffAmtInTransCrcy,  

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden: true
@Aggregation.default: #FORMULA
@AnalyticsDetails.query.formula : 'NDIV0($projection.EndgBalDiffAmtInTransCrcy / $projection.ComprnEndingBalInTransCrcy ) * 100' cast( cast( 1 as abap.dec(23,2)) as fis_end_diff_pct_wsl ) as TransCrcyEndingDiffPct 


}
```
