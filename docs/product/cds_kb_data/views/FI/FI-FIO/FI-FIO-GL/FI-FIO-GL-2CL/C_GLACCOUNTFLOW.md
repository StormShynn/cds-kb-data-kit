---
name: C_GLACCOUNTFLOW
description: "G/L Account Balance with Flow-Measure"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOW')/$value
semantic_en: "G/L Account Balance with Flow-Measure"
semantic_vi: "G/L Account Balance with Flow-Measure — CDS view tiêu dùng dựa trên I_GLAccountBalance."
keywords:
  - "G/L Account Balance with Flow-Measure"
  - "g/l"
  - "account"
  - "balance"
  - "with"
  - "flow"
  - "measure"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
tags:
  - FI
  - account
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_GLACCOUNTFLOW

**G/L Account Balance with Flow-Measure**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `GLAccountTypeFlowType` |  | |  |  | `CHAR(12)` | G/L Account Flow Type For G/L Account Type |
| `GLAccountFlowType` |  | |  |  | `CHAR(10)` | G/L Account Flow Type |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
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
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `FlowAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Flow Amount in Balance Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `FlowAmountInTransCrcy` |  | |  |  | `CURR(23)` | Flow Amount in Transaction Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `FlowAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Flow Amount in Company Code Currency |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FlowAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Flow Amount in Global Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FlowAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FlowAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FlowAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FlowAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FlowAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FlowAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FlowAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `FlowAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Flow Amount in Free Defined Currency 8 |
| `DebitAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Material` |  | |  | `cast( I_GLAccountBalance.Product as matnr preserving type )` | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
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
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InventorySpclStockWBSElement` |  | |  | `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `InvtrySpclStockWBSElmntExtID` |  | |  | `cast(I_GLAccountBalance._InvtrySpclStkWBSElmntBscData.WBSElementExternalID as fis_invspstock_wbsext_no_conv )` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
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
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElement` |  | |  | `cast( I_GLAccountBalance.WBSElement as fis_wbs preserving type )` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  | `cast( I_GLAccountBalance._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )` | `CHAR(24)` | WBS Element External ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `Project` |  | |  | `cast( I_GLAccountBalance.Project as fis_project preserving type )` | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  | `cast( I_GLAccountBalance._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )` | `CHAR(24)` | Project External ID |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  | `cast( I_GLAccountBalance.PartnerWBSElement as fis_partner_wbs preserving type )` | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  | `cast( I_GLAccountBalance._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv )` | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProject` |  | |  | `cast( I_GLAccountBalance.PartnerProject as fis_part_project preserving type )` | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  | `cast( I_GLAccountBalance._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv )` | `CHAR(24)` | Partner Project External ID |
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
| `SoldMaterial` |  | |  | `cast( I_GLAccountBalance.SoldProduct as fis_sold_material preserving type )` | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  | `cast( I_GLAccountBalance.SoldProductGroup as fins_matkl_pa preserving type )` | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
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
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTFLOW')/$value)*

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'CFIGLACCTFLOW'
@EndUserText.label: 'G/L Account Balance with Flow-Measure'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass:  #MIXED

@OData.publish: true

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]

define view C_GLAccountFlow
  as select from I_GLAccountBalance as I_GLAccountBalance
{
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SourceLedger,

  ------------------------------------------------------------------------------------------------------
  -- FREE
  ------------------------------------------------------------------------------------------------------
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_LedgerStdVH',
        resultElement: 'Ledger', binding: [
        { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
       }
  //    @Consumption.valueHelp: '_Ledger'
  @AnalyticsDetails.query.variableSequence: 10
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.Ledger,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @AnalyticsDetails.query.variableSequence: 20
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  //    @AnalyticsDetails.query.display: #KEY_TEXT
  I_GLAccountBalance.CompanyCode,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 30
  @AnalyticsDetails.query.axis: #ROWS
  //    @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  I_GLAccountBalance.GLAccount,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.LedgerFiscalYear,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.axis: #ROWS
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FiscalYearPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 51
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PostingDate,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  //  @Consumption.valueHelp: '_GLAccountTypeFlowType'
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountTypeFlowType' , element: 'GLAccountTypeFlowType' } }]
  @AnalyticsDetails.query.variableSequence : 70
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  I_GLAccountBalance.GLAccountTypeFlowType,

  //  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  //  @Consumption.valueHelp: '_GLAccountFlowType'
  //  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.axis: #ROWS
  //    @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountFlowType' , element: 'GLAccountFlowType' } }]
  I_GLAccountBalance.GLAccountFlowType,

  //    @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  //    @AnalyticsDetails.query.variableSequence : 60
  @AnalyticsDetails.query.axis: #ROWS
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.IsBalanceSheetAccount,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AccountingDocument,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.LedgerGLLineItem,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  //  @Consumption.valueHelp: '_GLAccountTypeFlowType'
  @AnalyticsDetails.query.variableSequence : 99
  @AnalyticsDetails.query.axis: #FREE
  //  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ChartOfAccounts,

  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  I_GLAccountBalance.ControllingArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FinancialTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.BusinessTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ReferenceDocumentType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.LogicalSystem,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ReferenceDocumentItemGroup,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.IsReversal,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.IsReversed,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.IsSettlement,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.IsSettled,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PredecessorReferenceDocType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CostCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FunctionalArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.BusinessArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.Segment,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerCostCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerFunctionalArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerBusinessArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerCompany,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerSegment,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.DebitCreditCode,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 52
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  //@Consumption.derivation: { lookupEntity: 'I_FiscalYearPeriodForLedger',
  //                           resultElement: 'FiscalYearVariant', binding: [
  //    { targetElement : 'CompanyCode' , type : #ELEMENT, value : 'CompanyCode' },
  //    { targetElement : 'Ledger' , type : #ELEMENT , value : 'Ledger'},
  //    { targetElement : 'FiscalYear' , type : #CONSTANT , value : '2018'} ,
  //    { targetElement : 'FiscalPeriod' , type : #CONSTANT , value : '001'} ]
  //   }
  I_GLAccountBalance.FiscalYearVariant,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AccountingDocumentType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AssignmentReference,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AccountingDocumentCategory,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PostingKey,

  ------------------------------------------------------------------------------------------------------
  -- MEASURES
  ------------------------------------------------------------------------------------------------------

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  @Semantics.currencyCode:true
  I_GLAccountBalance.BalanceTransactionCurrency as BalanceTransactionCurrency,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
  I_GLAccountBalance.AmountInBalanceTransacCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
  I_GLAccountBalance.FlowAmountInBalanceTransCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
  I_GLAccountBalance.DebitAmountInBalanceTransCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
  I_GLAccountBalance.CreditAmountInBalanceTransCrcy,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.TransactionCurrency as TransactionCurrency,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  I_GLAccountBalance.AmountInTransactionCurrency,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  I_GLAccountBalance.FlowAmountInTransCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  I_GLAccountBalance.DebitAmountInTransCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  I_GLAccountBalance.CreditAmountInTransCrcy,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CompanyCodeCurrency as CompanyCodeCurrency,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  I_GLAccountBalance.AmountInCompanyCodeCurrency,
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  I_GLAccountBalance.FlowAmountInCoCodeCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  I_GLAccountBalance.DebitAmountInCoCodeCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  I_GLAccountBalance.CreditAmountInCoCodeCrcy,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.GlobalCurrency as GlobalCurrency,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  I_GLAccountBalance.AmountInGlobalCurrency,
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  I_GLAccountBalance.FlowAmountInGlobalCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  I_GLAccountBalance.DebitAmountInGlobalCrcy,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  I_GLAccountBalance.CreditAmountInGlobalCrcy,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency1 as FreeDefinedCurrency1,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  I_GLAccountBalance.AmountInFreeDefinedCurrency1,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy1,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy1,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy1,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency2 as FreeDefinedCurrency2,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
  I_GLAccountBalance.AmountInFreeDefinedCurrency2,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy2,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy2,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy2,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency3 as FreeDefinedCurrency3,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
  I_GLAccountBalance.AmountInFreeDefinedCurrency3,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy3,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy3,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy3,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency4 as FreeDefinedCurrency4,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
  I_GLAccountBalance.AmountInFreeDefinedCurrency4,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy4,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy4,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy4,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency5 as FreeDefinedCurrency5,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
  I_GLAccountBalance.AmountInFreeDefinedCurrency5,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy5,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy5,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy5,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency6 as FreeDefinedCurrency6,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
  I_GLAccountBalance.AmountInFreeDefinedCurrency6,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy6,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy6,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy6,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency7 as FreeDefinedCurrency7,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
  I_GLAccountBalance.AmountInFreeDefinedCurrency7,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy7,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy7,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy7,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode:true
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FreeDefinedCurrency8 as FreeDefinedCurrency8,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
  I_GLAccountBalance.AmountInFreeDefinedCurrency8,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
  I_GLAccountBalance.FlowAmountInFreeDfndCrcy8,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
  I_GLAccountBalance.DebitAmountInFreeDfndCrcy8,
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
  I_GLAccountBalance.CreditAmountInFreeDfndCrcy8,
  ------------------------------------------------------------------------------------------------------
  -- MEASURES
  ------------------------------------------------------------------------------------------------------

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.TransactionTypeDetermination,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AccountingDocCreatedByUser,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.EliminationProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OriginObjectType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.GLAccountType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  I_GLAccountBalance.AlternativeGLAccount,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CountryChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PurchasingDocument,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PurchasingDocumentItem,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AccountAssignmentNumber,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SalesDocument'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SalesDocument'
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SalesOrder,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SalesDocumentItem'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SalesDocumentItem'
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SalesOrderItem,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SalesDocument,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SalesDocumentItem,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'Product'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'Product'
  //    @AnalyticsDetails.query.totals: #SHOW
  cast( I_GLAccountBalance.Product as matnr preserving type )                                                   as Material,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.Product,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.Plant,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.Supplier,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.Customer,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FinancialAccountType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SpecialGLCode,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.TaxCode,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.HouseBank,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.HouseBankAccount,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.IsOpenItemManaged,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'ClearingJournalEntry'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'ClearingJournalEntry'
  I_GLAccountBalance.ClearingAccountingDocument,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'ClearingJournalEntryFiscalYear'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
  I_GLAccountBalance.ClearingDocFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ClearingJournalEntry,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ClearingJournalEntryFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AssetDepreciationArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.MasterFixedAsset,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FixedAsset,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AssetValueDate,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AssetTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.GroupMasterFixedAsset,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.GroupFixedAsset,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'InvtrySpecialStockValnType_2'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'
  I_GLAccountBalance.InventorySpecialStockValnType,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.InvtrySpecialStockValnType_2,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.InventorySpecialStockType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.InventorySpclStkSalesDocument,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.InventorySpclStkSalesDocItm,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.InvtrySpclStockWBSElmntIntID,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'InvtrySpclStockWBSElmntExtID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance._InvtrySpclStkWBSElmntBscData.WBSElement                                                   as InventorySpclStockWBSElement,
  @AnalyticsDetails.query.axis: #FREE
  cast(I_GLAccountBalance._InvtrySpclStkWBSElmntBscData.WBSElementExternalID as fis_invspstock_wbsext_no_conv ) as InvtrySpclStockWBSElmntExtID,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.InventorySpecialStockSupplier,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.InventoryValuationType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ValuationArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SenderGLAccount,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SenderAccountAssignment,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SenderAccountAssignmentType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ControllingObjectDebitType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.QuantityIsIncomplete,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OffsettingAccount,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OffsettingAccountType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.LineItemIsCompleted,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PersonnelNumber,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ControllingObjectClass,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerCompanyCode,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerControllingObjectClass,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OriginCostCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OriginProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OriginCostCtrActivityType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AccountAssignment,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.AccountAssignmentType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CostCtrActivityType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OrderID,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OrderCategory,


  @AnalyticsDetails.query.axis: #FREE
  //      @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.WBSElementInternalID,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'WBSElementExternalID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'WBSElementExternalID'
  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance.WBSElement as fis_wbs preserving type )                                              as WBSElement,

  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )                    as WBSElementExternalID,


  @AnalyticsDetails.query.axis: #FREE
  //      @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ProjectInternalID,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'ProjectExternalID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'ProjectExternalID'
  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance.Project as fis_project preserving type )                                             as Project,

  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )                      as ProjectExternalID,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OperatingConcern,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.ProjectNetwork,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.RelatedNetworkActivity,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.BusinessProcess,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CostObject,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CustomerServiceNotification,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerAccountAssignment,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerAccountAssignmentType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.WorkPackage,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.WorkItem,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ServiceDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ServiceDocument,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ServiceDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ServiceContractType,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ServiceContract,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ServiceContractItem,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.TimeSheetOvertimeCategory,
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerCostCtrActivityType,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'PartnerOrder_2'
  //  @VDM.lifecycle.status:     #DEPRECATED
  //  @VDM.lifecycle.successor:  'PartnerOrder_2'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.PartnerOrder,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.PartnerOrder_2,
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerOrderCategory,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerWBSElementExternalID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance.PartnerWBSElement as fis_partner_wbs preserving type )                               as PartnerWBSElement,
  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv )     as PartnerWBSElementExternalID,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'PartnerProjectExternalID'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'PartnerProjectExternalID'
  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance.PartnerProject as fis_part_project preserving type )                                 as PartnerProject,
  @AnalyticsDetails.query.axis: #FREE
  cast( I_GLAccountBalance._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv )          as PartnerProjectExternalID,


  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerSalesDocument,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerSalesDocumentItem,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerProjectNetwork,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerProjectNetworkActivity,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerBusinessProcess,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerCostObject,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.BillingDocumentType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SalesOrganization,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.DistributionChannel,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.OrganizationDivision,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SoldProduct'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SoldProduct'
  //    @AnalyticsDetails.query.totals: #SHOW
  cast( I_GLAccountBalance.SoldProduct as fis_sold_material preserving type )                                   as SoldMaterial,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SoldProduct,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SoldProductGroup'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'SoldProductGroup'
  //    @AnalyticsDetails.query.totals: #SHOW
  cast( I_GLAccountBalance.SoldProductGroup as fins_matkl_pa preserving type )                                  as MaterialGroup,

  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.ProductGroup,
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SoldProductGroup,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CustomerGroup,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FinancialManagementArea,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.Fund,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.GrantID,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.BudgetPeriod,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerFund,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerGrant,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.PartnerBudgetPeriod,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FundsCenter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.FundedProgram,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.JointVenture,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.JointVentureEquityGroup,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.JointVentureCostRecoveryCode,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.JointVentureEquityType,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.SettlementReferenceDate,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CalendarYear,
  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CalendarQuarter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CalendarYearQuarter,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CalendarMonth,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CalendarYearMonth,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CalendarWeek,

  @AnalyticsDetails.query.axis: #FREE
  //    @AnalyticsDetails.query.totals: #SHOW
  I_GLAccountBalance.CalendarYearWeek,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.FiscalQuarter,

  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.FiscalWeek,

  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.FiscalYearQuarter,

  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.FiscalYearWeek,

  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.AccrualObjectType,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.AccrualObject,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.AccrualSubobject,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.AccrualItemType,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountBalance.AssetClass

}
```
