---
name: I_GLACCOUNTLINEITEMCUBE
description: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Line Item CDS view, in this G/L Account Line Item Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value
semantic_en: "This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Line Item CDS view, in this G/L Account Line Item Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?"
semantic_vi: "G/L Account Line Item - Cube — CDS view giao diện dựa trên I_GLAccountLineItem."
keywords:
  - "G/L Account Line Items Cube"
  - "g/l"
  - "account"
  - "line"
  - "item"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_GLACCOUNTLINEITEMCUBE

**This CDS view provides access to all details of a journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. The most important attributes of business entities are included, such as group G/L account or cost center responsible. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. Compared to the G/L Account Line Item CDS view, in this G/L Account Line Item Cube CDS view, additionally to the identifiers, the names of master data or configuration data is included. This CDS view provides the prerequisites for answering the following business questions: What are the details for a single posting? What postings have accumulated on a cost center during the year? What is the balance of a G/L account as of today?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  | `cast( I_GLAccountLineItem.FiscalYear as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `JrnlEntrAltvFYConsecutiveID` |  | |  |  | `CHAR(10)` | Shifted Fiscal Year Consecutive ID |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CorporateGroupChartOfAccounts` |  | |  |  | `CHAR(4)` | Group Chart of Accts |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Group Account Number |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
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
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `ComponentBreakdown` |  | |  |  | `CHAR(16)` | Component Breakdown |
| `CompBreakdownScaleNumerator` |  | |  |  | `DEC(23)` | Component Breakdown Scale Numerator |
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
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountName` |  | |  |  | `CHAR(80)` | Name of Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `WBSElementExternalID` |  | |  | `cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )` | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  | `cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv )` | `CHAR(24)` | Partner WBS Element External ID |
| `WBSElement` |  | |  | `cast( I_GLAccountLineItem.WBSElement as fis_wbs )` | `CHAR(24)` | WBS Element |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ControllingBusTransacType` |  | |  |  | `CHAR(4)` | CO Business Transaction |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `PartnerServiceDocumentType` |  | |  |  | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` |  | |  |  | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` |  | |  |  | `NUMC(6)` | Partner Service Document Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `CommitmentItem` |  | |  |  | `CHAR(24)` | Commitment Item |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Earmarked Funds Document |
| `EarmarkedFundsDocumentItem` |  | |  |  | `NUMC(3)` | Earmarked Funds Document Item |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InvtrySpclStockWBSElmntExtID` |  | |  | `cast( _InvtrySpclStockWBSElmntBD.WBSElementExternalID as fis_invspstock_wbsext_no_conv )` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpclStockWBSElement` |  | |  | `cast( _InvtrySpclStockWBSElmntBD.WBSElement as fis_invspstock_wbs )` | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVenturePartner` |  | |  |  | `CHAR(10)` | Joint Venture Partner |
| `JointVentureBillingType` |  | |  |  | `CHAR(2)` | Joint Venture Billing Type |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `JointVentureProductionDate` |  | |  |  | `DATS(8)` | Joint Venture Production Date |
| `JointVentureBillingDate` |  | |  |  | `DATS(8)` | Joint Venture Billing Date |
| `JointVentureOperationalDate` |  | |  |  | `DATS(8)` | Joint Venture Operational Date |
| `CutbackRun` |  | |  |  | `DEC(21)` | Cutback Run |
| `JointVentureAccountingActivity` |  | |  |  | `CHAR(2)` | Joint Venture Accounting Activity |
| `PartnerVenture` |  | |  |  | `CHAR(6)` | Partner Venture |
| `PartnerEquityGroup` |  | |  |  | `CHAR(3)` | Partner Equity Group |
| `SenderCostRecoveryCode` |  | |  |  | `CHAR(2)` | Sender Cost Recovery Code |
| `CutbackAccount` |  | |  |  | `CHAR(10)` | Cutback Account |
| `CutbackCostObject` |  | |  |  | `CHAR(22)` | Cutback Cost Object |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `RealEstateBuilding` |  | |  |  | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` |  | |  |  | `CHAR(8)` | Real Estate Property |
| `RERentalObject` |  | |  |  | `CHAR(8)` | RE Rental Object |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Service Charge Key |
| `RESettlementUnitID` |  | |  |  | `CHAR(5)` | RE Settlement Unit |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `REPartnerBusinessEntity` |  | |  |  | `CHAR(8)` | RE Partner Business Entity |
| `RealEstatePartnerBuilding` |  | |  |  | `CHAR(8)` | Real Estate Partner Building |
| `RealEstatePartnerProperty` |  | |  |  | `CHAR(8)` | Real Estate Partner Property |
| `REPartnerRentalObject` |  | |  |  | `CHAR(8)` | RE Partner Rental Object |
| `RealEstatePartnerContract` |  | |  |  | `CHAR(13)` | Real Estate Partner Contract |
| `REPartnerServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Partner Service Charge Key |
| `REPartnerSettlementUnitID` |  | |  |  | `CHAR(5)` | RE Partner Settlement Unit |
| `PartnerSettlementReferenceDate` |  | |  |  | `DATS(8)` | Partner Reference Date for Settlement |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginProduct` |  | |  |  | `CHAR(40)` | Origin Product |
| `VarianceOriginGLAccount` |  | |  |  | `CHAR(10)` | Origin G/L Account of a Variance |
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
| `PartnerProject` |  | |  | `cast( I_GLAccountLineItem.PartnerProject as fis_part_project )` | `CHAR(24)` | Partner Project |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElement` |  | |  | `cast( I_GLAccountLineItem.PartnerWBSElement as fis_partner_wbs )` | `CHAR(24)` | Partner WBS Element |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Journal Entry Item Obsolete Reason |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `ProjectExternalID` |  | |  | `cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )` | `CHAR(24)` | Project External ID |
| `PartnerProjectExternalID` |  | |  | `cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv )` | `CHAR(24)` | Partner Project External ID |
| `Project` |  | |  | `cast( I_GLAccountLineItem.Project as fis_project )` | `CHAR(24)` | Project |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
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
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `OriginSenderObject` |  | |  |  | `CHAR(22)` | Origin Sender Object |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualValueDate` |  | |  |  | `DATS(8)` | Accrual Value Date |
| `FinancialValuationObjectType` |  | |  |  | `CHAR(4)` | Financial Valuation Object Type |
| `FinancialValuationObject` |  | |  |  | `CHAR(32)` | Financial Valuation Object |
| `FinancialValuationSubobject` |  | |  |  | `CHAR(32)` | Financial Valuation Subobject |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Credit Risk Class |
| `OrderSuboperation` |  | |  |  | `CHAR(4)` | Order Suboperation |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `SuperiorOrder` |  | |  |  | `CHAR(12)` | Number of Superior Order |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `CnsldtnFinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `CnsldtnSubitemCategory` |  | |  |  | `CHAR(3)` | Consolidation Subitem Category |
| `CnsldtnSubitem` |  | |  |  | `CHAR(10)` | Consolidation Subitem |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
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
| `ControllingObjectCurrency` |  | |  |  | `CUKY(5)` | CO Object Currency |
| `AmountInObjectCurrency` |  | |  |  | `CURR(23)` | Amount in Object Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
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
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `GrpValnFixedAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Amount in Global Currency |
| `PrftCtrValnFxdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Amount in Global Currency |
| `TotalPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Total Price Variance in Global Currency |
| `GrpValnTotPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Total Price Variance in Global Currency |
| `PrftCtrValnTotPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Total Price Variance in Global Cur. |
| `FixedPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Price Variance in Global Currency |
| `GrpValnFixedPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Price Variance in Global Currency |
| `PrftCtrValnFxdPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Price Variance in Global Cur. |
| `FixedQuantity` |  | |  |  | `QUAN(23)` | Fixed Quantity |
| `ValuationFixedQuantity` |  | |  |  | `QUAN(23)` | Valuation Fixed Quantity |
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
| `EmployeeFullName` |  | |  | `case when ( I_GLAccountLineItem.PersonnelNumber <> '00000000' ) then cast( 'XXXXX' as bu_name1tx ) end` | `CHAR(80)` | Full Name |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `_CorporateGroupAccount` | | ✓ | | | | |
| `_CorporateGroupChartOfAccounts` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerWBSElementText` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_PartnerWBSElemntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntBD` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectText` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerProjectText` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElmntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscData` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscDataT` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_ProjectBasicDataText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_FinServicesProductGroup` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_ProjectInternalID` | | ✓ | | | | |
| `_ProjectInternalIDText` | | ✓ | | | | |
| `_PartnerProjectInternalID` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElementInternalIDText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CorporateGroupAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CorporateGroupChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_HouseBankAccount` | `I_HouseBankAccount` | [0..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementText` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElementText` | `I_WBSElement` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElemntBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStockWBSElmntBD` | `I_WBSElementBasicData` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectText` | `I_Project` | [0..1] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerProjectText` | `I_Project` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElmntBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStkWBSElmntBscData` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStkWBSElmntBscDataT` | `I_WBSElementBasicData` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_ProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElemntExtrnalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_InvtrySpclStockWBSElmntExtID` | `I_WBSElementByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjctExtrnalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_FinServicesProductGroup` | `I_FinServicesProductGroup` | [0..1] |
| `_FinancialServicesBranch` | `I_FinancialServicesBranch` | [0..1] |
| `_FinancialDataSource` | `I_FinancialDataSource` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMCUBE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@Analytics.technicalName: 'IFIGLLITMCUBE'
@AccessControl: { authorizationCheck: #CHECK,
                 personalData.blocking: #REQUIRED }
@Analytics: { dataCategory: #CUBE }
@EndUserText.label: 'G/L Account Line Item - Cube'
@ObjectModel: { representativeKey: 'LedgerGLLineItem',
                usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions: true }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true


define view entity I_GLAccountLineItemCube


  //with parameters
  //P_KeyDate : sydate,

  as select from I_GLAccountLineItem as I_GLAccountLineItem


  //association [0..1] to I_ControllingArea             as _ControllingArea              on $projection.ControllingArea  = _ControllingArea.ControllingArea
  //association [0..1] to I_Ledger                      as _Ledger                       on $projection.Ledger           = _Ledger.Ledger
  //association [0..1] to I_CompanyCode                 as _CompanyCode                  on $projection.CompanyCode      = _CompanyCode.CompanyCode
  //association [0..1] to I_GLAccountInChartOfAccounts  as _GLAccountInChartOfAccounts   on $projection.GLAccount        = _GLAccountInChartOfAccounts.GLAccount
  //                                                                                    and $projection.ChartOfAccounts  = _GLAccountInChartOfAccounts.ChartOfAccounts
  //association [0..*] to I_CostCenterDetail            as _CostCenterDetail             on $projection.ControllingArea  = _CostCenterDetail.ControllingArea
  //                                                                                    and $projection.CostCenter = _CostCenterDetail.CostCenter
  //association [0..1] to I_CompanyCode              as _CompanyCodeDetail        on  $projection.PartnerCompany = _CompanyCodeDetail.CompanyCode
  //association [0..1] to I_FinancialTransactionType as _FinancialTransactionType on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType
  association [0..1] to I_GLAccountInChartOfAccounts as _CorporateGroupAccount         on  $projection.CorporateGroupChartOfAccounts = _CorporateGroupAccount.ChartOfAccounts
                                                                                       and $projection.CorporateGroupAccount         = _CorporateGroupAccount.GLAccount
  association [0..1] to I_ChartOfAccounts            as _CorporateGroupChartOfAccounts on  $projection.CorporateGroupChartOfAccounts = _CorporateGroupChartOfAccounts.ChartOfAccounts
  association [0..1] to I_Housebank                  as _HouseBank                     on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                                       and $projection.HouseBank   = _HouseBank.HouseBank

  association [0..1] to I_HouseBankAccount           as _HouseBankAccount              on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                                       and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                                       and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount

  //////////////////////////////////////////////////////////////////////////////////
  //@API.element.releaseState: #DEPRECATED   (old I-view or wrong association-name)
  //////////////////////////////////////////////////////////////////////////////////

  association [0..1] to I_WBSElement                 as _WBSElement                    on  $projection.WBSElement = _WBSElement.WBSElement
  association [0..1] to I_WBSElement                 as _WBSElementText                on  $projection.WBSElement = _WBSElementText.WBSElement
  association [0..1] to I_WBSElement                 as _PartnerWBSElement             on  $projection.PartnerWBSElement = _PartnerWBSElement.WBSElement
  association [0..1] to I_WBSElement                 as _PartnerWBSElementText         on  $projection.PartnerWBSElement = _PartnerWBSElementText.WBSElement
  association [0..1] to I_WBSElement                 as _InventorySpclStockWBSElement  on  $projection.InventorySpclStockWBSElement = _InventorySpclStockWBSElement.WBSElement

  association [0..1] to I_WBSElementBasicData        as _PartnerWBSElemntBasicDataText on  $projection.PartnerWBSElementInternalID = _PartnerWBSElemntBasicDataText.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _InvtrySpclStockWBSElmntBD     on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStockWBSElmntBD.WBSElementInternalID

  association [0..1] to I_Project                    as _Project                       on  $projection.Project = _Project.Project
  association [0..1] to I_Project                    as _ProjectText                   on  $projection.Project = _ProjectText.Project
  association [0..1] to I_Project                    as _PartnerProject                on  $projection.PartnerProject = _PartnerProject.Project
  association [0..1] to I_Project                    as _PartnerProjectText            on  $projection.PartnerProject = _PartnerProjectText.Project


  //////////////////////////////////////////////////////////////
  //@API.element.successor for #DEPRECATED   (new Name)
  //////////////////////////////////////////////////////////////
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicDataText       on  $projection.WBSElementInternalID = _WBSElementBasicDataText.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _PartnerWBSElementBasicData    on  $projection.PartnerWBSElementInternalID = _PartnerWBSElementBasicData.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _PartnerWBSElmntBasicDataText  on  $projection.PartnerWBSElementInternalID = _PartnerWBSElmntBasicDataText.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _InvtrySpclStkWBSElmntBscData  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStkWBSElmntBscData.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData        as _InvtrySpclStkWBSElmntBscDataT on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStkWBSElmntBscDataT.WBSElementInternalID

  association [0..1] to I_ProjectBasicData           as _ProjectBasicData              on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
  association [0..1] to I_ProjectBasicData           as _ProjectBasicDataText          on  $projection.ProjectInternalID = _ProjectBasicDataText.ProjectInternalID
  association [0..1] to I_ProjectBasicData           as _PartnerProjectBasicData       on  $projection.PartnerProjectInternalID = _PartnerProjectBasicData.ProjectInternalID
  association [0..1] to I_ProjectBasicData           as _PartnerProjectBasicDataText   on  $projection.PartnerProjectInternalID = _PartnerProjectBasicDataText.ProjectInternalID


  //////////////////////////////////////////////////////////////
  //new  associations
  //////////////////////////////////////////////////////////////
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalIDText      on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _PartnerWBSElementExternalID   on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _PartnerWBSElemntExtrnalIDText on  $projection.PartnerWBSElementExternalID = _PartnerWBSElemntExtrnalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _InvtrySpclStockWBSElmntExtID  on  $projection.InvtrySpclStockWBSElmntExtID = _InvtrySpclStockWBSElmntExtID.WBSElementExternalID

  association [0..1] to I_ProjectByExternalID        as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalIDText         on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _PartnerProjectExternalID      on  $projection.PartnerProjectExternalID = _PartnerProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _PartnerProjctExtrnalIDText    on  $projection.PartnerProjectExternalID = _PartnerProjctExtrnalIDText.ProjectExternalID

  association [0..1] to I_FinServicesProductGroup    as _FinServicesProductGroup       on  $projection.FinancialServicesProductGroup = _FinServicesProductGroup.FinancialServicesProductGroup
  association [0..1] to I_FinancialServicesBranch    as _FinancialServicesBranch       on  $projection.FinancialServicesBranch = _FinancialServicesBranch.FinancialServicesBranch
  association [0..1] to I_FinancialDataSource        as _FinancialDataSource           on  $projection.FinancialDataSource = _FinancialDataSource.FinancialDataSource
  association [0..1] to I_CustomerSupplierIndustry   as _CustomerSupplierIndustry      on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustry.Industry

  association [0..1] to I_OperationalAcctgDocItem    as _OperationalAcctgDocItem       on  $projection.CompanyCode            = _OperationalAcctgDocItem.CompanyCode
                                                                                       and $projection.FiscalYear             = _OperationalAcctgDocItem.FiscalYear
                                                                                       and $projection.AccountingDocument     = _OperationalAcctgDocItem.AccountingDocument
                                                                                       and $projection.AccountingDocumentItem = _OperationalAcctgDocItem.AccountingDocumentItem

  association [1..1] to I_CalendarMonth              as _CalendarMonth                 on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter            as _CalendarQuarter               on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1] to I_YearMonth                  as _CalendarYearMonth             on  $projection.CalendarYearMonth = _CalendarYearMonth.YearMonth

  association of exact one to exact one E_JournalEntryItem  as _Extension              on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                                       and $projection.CompanyCode        = _Extension.CompanyCode
                                                                                       and $projection.FiscalYear         = _Extension.FiscalYear
                                                                                       and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                                       and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

{

      @ObjectModel.foreignKey.association: '_Ledger'
      //      @Consumption.filter.mandatory: true
      //      @Analytics.constraints.filter: #UNIQUE_PER_CELL
  key I_GLAccountLineItem.Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key I_GLAccountLineItem.SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_GLAccountLineItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      //      @Semantics.fiscal.year: true
  key cast( I_GLAccountLineItem.FiscalYear as fis_gjahr_no_conv preserving type )              as FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key I_GLAccountLineItem.AccountingDocument,
  key I_GLAccountLineItem.LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      I_GLAccountLineItem.LedgerFiscalYear,
      I_GLAccountLineItem.GLRecordType,
      I_GLAccountLineItem.JrnlEntrAltvFYConsecutiveID,

      //      cast(AccountingDocument as fis_belnr)     as JournalEntry,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_GLAccountLineItem.ControllingArea,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      I_GLAccountLineItem.ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      I_GLAccountLineItem.GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
      I_GLAccountLineItem.CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      I_GLAccountLineItem.ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      I_GLAccountLineItem.FunctionalArea,
      //    _CostCenter._CostCenterDetail
      //       [1: ValidityEndDate   >= $parameters.P_KeyDate and
      //           ValidityStartDate <= $parameters.P_KeyDate].CostCenter as CostCenterDetail,
      // Document Information

      I_GLAccountLineItem.AccountingDocumentItem,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      I_GLAccountLineItem.DebitCreditCode,

      // Time Characteristics
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      //0FISCPER3 doesn’t support text, variant is unknown. We can’t use T009C since there 0FISCPER3 is not compound to 0FISCVARNT.
      @Semantics.fiscal.period: true
      I_GLAccountLineItem.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      I_GLAccountLineItem.FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      @Semantics.fiscal.yearPeriod: true
      I_GLAccountLineItem.FiscalYearPeriod,
      //      @Semantics.businessDate.at: true
      I_GLAccountLineItem.PostingDate,
      //      @Semantics.businessDate.at: true
      I_GLAccountLineItem.DocumentDate,

      //  free fields

      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      I_GLAccountLineItem.AccountingDocumentType,
      //      cast(AccountingDocumentType as fis_blart) as JournalEntryType,
      I_GLAccountLineItem.AssignmentReference,
      @ObjectModel.foreignKey.association: '_PostingKey'
      I_GLAccountLineItem.PostingKey,
      I_GLAccountLineItem.TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      I_GLAccountLineItem.SubLedgerAcctLineItemType,
      //      @ObjectModel.foreignKey.association: '_User'
      I_GLAccountLineItem.AccountingDocCreatedByUser,
      //      @Semantics.businessDate.lastChangedAt: true
      I_GLAccountLineItem.LastChangeDateTime,
      I_GLAccountLineItem.CreationDateTime,
      --    cast(CreationDate as FIS_CPDAT) as CreationDate,
      //      @Semantics.businessDate.createdAt: true
      I_GLAccountLineItem.CreationDate,

      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      I_GLAccountLineItem.AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      I_GLAccountLineItem.CountryChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CorporateGroupChartOfAccounts'
      I_GLAccountLineItem._ChartOfAccounts.CorporateGroupChartOfAccounts                       as CorporateGroupChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CorporateGroupAccount'
      I_GLAccountLineItem._GLAccountInChartOfAccounts.CorporateGroupAccount                    as CorporateGroupAccount,
      I_GLAccountLineItem._GLAccountInChartOfAccounts.IsBalanceSheetAccount,
      I_GLAccountLineItem.InvoiceReference,
      @Semantics.fiscal.year: true
      I_GLAccountLineItem.InvoiceReferenceFiscalYear,
      I_GLAccountLineItem.FollowOnDocumentType,
      I_GLAccountLineItem.InvoiceItemReference,
      I_GLAccountLineItem.ReferencePurchaseOrderCategory,
      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      I_GLAccountLineItem.PurchasingDocument,
      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      I_GLAccountLineItem.PurchasingDocumentItem,
      I_GLAccountLineItem.AccountAssignmentNumber,
      I_GLAccountLineItem.DocumentItemText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocument'
      @ObjectModel.foreignKey.association: '_SalesOrder'
      I_GLAccountLineItem.SalesOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocumentItem'
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      I_GLAccountLineItem.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      I_GLAccountLineItem.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      I_GLAccountLineItem.SalesDocumentItem,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      @ObjectModel.foreignKey.association: '_Material'
      I_GLAccountLineItem.Material, // do not use any longer, use Product
      @ObjectModel.foreignKey.association: '_Product'
      I_GLAccountLineItem.Product,
      @ObjectModel.foreignKey.association: '_Plant'
      I_GLAccountLineItem.Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      I_GLAccountLineItem.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      I_GLAccountLineItem.Customer,
      I_GLAccountLineItem.ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      I_GLAccountLineItem.ConditionContract,
      
      I_GLAccountLineItem.ComponentBreakdown,
      I_GLAccountLineItem.CompBreakdownScaleNumerator,      

      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      I_GLAccountLineItem.FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      I_GLAccountLineItem.SpecialGLCode,
      //      @ObjectModel.foreignKey.association: '_TaxCode'
      I_GLAccountLineItem.TaxCode,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      I_GLAccountLineItem.TaxCountry,
      @ObjectModel.foreignKey.association: '_HouseBank'
      I_GLAccountLineItem.HouseBank,
      //      cast ('xxxxx' as farp_hbkid)                                                                       as HouseBank, // masked due to EU-Datenschutz-Grundverordnung
      @ObjectModel.foreignKey.association: '_HouseBankAccount'
      I_GLAccountLineItem.HouseBankAccount,
      //      cast ('xxxxx' as fac_hktid )                                                                       as HouseBankAccount, // masked due to EU-Datenschutz-Grundverordnung
      //      @Semantics.booleanIndicator
      I_GLAccountLineItem.IsOpenItemManaged,
      I_GLAccountLineItem.ClearingDate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      I_GLAccountLineItem.ClearingAccountingDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      @Semantics.fiscal.year: true
      I_GLAccountLineItem.ClearingDocFiscalYear,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      I_GLAccountLineItem.ClearingJournalEntry,
      @Semantics.fiscal.year: true
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      I_GLAccountLineItem.ClearingJournalEntryFiscalYear,

      I_GLAccountLineItem.ValueDate,

      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      I_GLAccountLineItem.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      I_GLAccountLineItem.FixedAsset,
      AssetValueDate,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      I_GLAccountLineItem.AssetTransactionType,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpecialStockValnType_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      I_GLAccountLineItem.InventorySpecialStockValnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InventorySpclStockValnType'
      I_GLAccountLineItem.InvtrySpecialStockValnType_2,

      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      I_GLAccountLineItem.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      I_GLAccountLineItem.InventoryValuationType,
      @ObjectModel.foreignKey.association: '_Purreqvaluationarea'
      I_GLAccountLineItem.ValuationArea,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      I_GLAccountLineItem.OffsettingAccount,
      I_GLAccountLineItem._OffsettingAccountWithBP.OffsettingAccountName                       as OffsettingAccountName,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      I_GLAccountLineItem.OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      I_GLAccountLineItem.OffsettingChartOfAccounts,
      I_GLAccountLineItem.LineItemIsCompleted,
      I_GLAccountLineItem.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      I_GLAccountLineItem.ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      I_GLAccountLineItem.PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      I_GLAccountLineItem.PartnerCompany,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      I_GLAccountLineItem.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      I_GLAccountLineItem.OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      I_GLAccountLineItem.OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      I_GLAccountLineItem.WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      I_GLAccountLineItem.PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )                  as WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv )   as PartnerWBSElementExternalID,

      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementExternalID'
      cast( I_GLAccountLineItem.WBSElement as fis_wbs )                                        as WBSElement,

      @ObjectModel.foreignKey.association: '_OperatingConcern'
      I_GLAccountLineItem.OperatingConcern,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      I_GLAccountLineItem.PartnerCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      I_GLAccountLineItem.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      I_GLAccountLineItem.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      I_GLAccountLineItem.DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItem.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Segment'
      I_GLAccountLineItem.Segment,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      I_GLAccountLineItem.BusinessArea,


      I_GLAccountLineItem.AccountAssignment,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      I_GLAccountLineItem.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      I_GLAccountLineItem.AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_MovementCategory'
      I_GLAccountLineItem.AssetAcctTransClassfctn,
      I_GLAccountLineItem.AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      I_GLAccountLineItem.BudgetPeriod,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      I_GLAccountLineItem.BusinessProcess,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      I_GLAccountLineItem.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      I_GLAccountLineItem.BusinessTransactionType,
      I_GLAccountLineItem.ControllingBusTransacType,
      I_GLAccountLineItem.ControllingObjectDebitType,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      I_GLAccountLineItem.ControllingDebitCreditCode,
      I_GLAccountLineItem.CostEstimate,
      I_GLAccountLineItem.CostObject,
      @ObjectModel.foreignKey.association: '_BillableControl'
      I_GLAccountLineItem.BillableControl,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      I_GLAccountLineItem.CustomerGroup,
      I_GLAccountLineItem.CustomerServiceNotification,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      I_GLAccountLineItem.ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      I_GLAccountLineItem.ServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      I_GLAccountLineItem.ServiceDocumentItem,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
      I_GLAccountLineItem.PartnerServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocument'
      I_GLAccountLineItem.PartnerServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
      I_GLAccountLineItem.PartnerServiceDocumentItem,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ServiceContractTypeStdVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      I_GLAccountLineItem.ServiceContractType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceContractVH',
                           element: 'ServiceContract' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContract'
      I_GLAccountLineItem.ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      I_GLAccountLineItem.ServiceContractItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      I_GLAccountLineItem.TimeSheetOvertimeCategory,

      I_GLAccountLineItem.DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_EliminationProfitCenter'
      I_GLAccountLineItem.EliminationProfitCenter,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      I_GLAccountLineItem.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_Fund'
      I_GLAccountLineItem.Fund,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      I_GLAccountLineItem.FinancialManagementArea,
      I_GLAccountLineItem.CommitmentItem,
      I_GLAccountLineItem.EarmarkedFundsDocument,
      I_GLAccountLineItem.EarmarkedFundsDocumentItem,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      I_GLAccountLineItem.GLAccountType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      I_GLAccountLineItem.GrantID,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      I_GLAccountLineItem.GroupFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      I_GLAccountLineItem.GroupMasterFixedAsset,

      I_GLAccountLineItem.AssetClass,

      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      I_GLAccountLineItem.InventorySpclStkSalesDocItm,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      I_GLAccountLineItem.InventorySpclStkSalesDocument,
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
      I_GLAccountLineItem.InvtrySpclStockWBSElmntIntID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
      cast( _InvtrySpclStockWBSElmntBD.WBSElementExternalID as fis_invspstock_wbsext_no_conv ) as InvtrySpclStockWBSElmntExtID,

      @ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpclStockWBSElmntExtID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
      cast( _InvtrySpclStockWBSElmntBD.WBSElement as fis_invspstock_wbs )                      as InventorySpclStockWBSElement, //  as InventorySpecialStockWBSElement,

      @ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
      I_GLAccountLineItem.InventorySpecialStockSupplier,
      I_GLAccountLineItem.IsReversal,
      I_GLAccountLineItem.IsReversed,
      I_GLAccountLineItem.IsSettled,
      I_GLAccountLineItem.IsSettlement,
      I_GLAccountLineItem.JointVenture,
      I_GLAccountLineItem.JointVentureEquityGroup,
      I_GLAccountLineItem.JointVentureCostRecoveryCode,
      I_GLAccountLineItem.JointVenturePartner,
      I_GLAccountLineItem.JointVentureBillingType,
      I_GLAccountLineItem.JointVentureEquityType,
      I_GLAccountLineItem.JointVentureProductionDate,
      I_GLAccountLineItem.JointVentureBillingDate,
      I_GLAccountLineItem.JointVentureOperationalDate,
      I_GLAccountLineItem.CutbackRun,
      I_GLAccountLineItem.JointVentureAccountingActivity,
      I_GLAccountLineItem.PartnerVenture,
      I_GLAccountLineItem.PartnerEquityGroup,
      I_GLAccountLineItem.SenderCostRecoveryCode,
      I_GLAccountLineItem.CutbackAccount,
      I_GLAccountLineItem.CutbackCostObject,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
      ///////////////////////////////////////////////////////////////////////
      I_GLAccountLineItem.REBusinessEntity,
      I_GLAccountLineItem.RealEstateBuilding,
      I_GLAccountLineItem.RealEstateProperty,
      I_GLAccountLineItem.RERentalObject,
      I_GLAccountLineItem.RealEstateContract,
      I_GLAccountLineItem.REServiceChargeKey,
      I_GLAccountLineItem.RESettlementUnitID,
      I_GLAccountLineItem.SettlementReferenceDate,
      I_GLAccountLineItem.REPartnerBusinessEntity,
      I_GLAccountLineItem.RealEstatePartnerBuilding,
      I_GLAccountLineItem.RealEstatePartnerProperty,
      I_GLAccountLineItem.REPartnerRentalObject,
      I_GLAccountLineItem.RealEstatePartnerContract,
      I_GLAccountLineItem.REPartnerServiceChargeKey,
      I_GLAccountLineItem.REPartnerSettlementUnitID,
      I_GLAccountLineItem.PartnerSettlementReferenceDate,

      @ObjectModel.foreignKey.association: '_LogicalSystem'
      I_GLAccountLineItem.LogicalSystem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProductGroup'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroup'
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      I_GLAccountLineItem.MaterialGroup, // do not use any longer, use SoldProductGroup
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      I_GLAccountLineItem.SoldProductGroup,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      I_GLAccountLineItem.OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      I_GLAccountLineItem.OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      I_GLAccountLineItem.OriginCostCtrActivityType,
      I_GLAccountLineItem.OriginProduct,
      I_GLAccountLineItem.VarianceOriginGLAccount,
      I_GLAccountLineItem.OriginObjectType,
      I_GLAccountLineItem.PartnerAccountAssignment,
      I_GLAccountLineItem.PartnerAccountAssignmentType,
      I_GLAccountLineItem.PartnerBudgetPeriod,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      I_GLAccountLineItem.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      I_GLAccountLineItem.PartnerBusinessProcess,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      I_GLAccountLineItem.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      I_GLAccountLineItem.PartnerCostCenter,
      I_GLAccountLineItem.PartnerCostObject,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      I_GLAccountLineItem.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerFund'
      I_GLAccountLineItem.PartnerFund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      I_GLAccountLineItem.PartnerGrant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      I_GLAccountLineItem.PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      I_GLAccountLineItem.PartnerOrder_2,
      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      I_GLAccountLineItem.PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      I_GLAccountLineItem.PartnerProfitCenter,

      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerProjectExternalID'
      cast( I_GLAccountLineItem.PartnerProject as fis_part_project )                           as PartnerProject,

      I_GLAccountLineItem.PartnerProjectNetwork,
      I_GLAccountLineItem.PartnerProjectNetworkActivity,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      I_GLAccountLineItem.PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      PartnerSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      I_GLAccountLineItem.PartnerSegment,

      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerWBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
      cast( I_GLAccountLineItem.PartnerWBSElement as fis_partner_wbs )                         as PartnerWBSElement,

      I_GLAccountLineItem.PredecessorReferenceDocCntxt,
      I_GLAccountLineItem.PredecessorReferenceDocItem,
      @ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
      I_GLAccountLineItem.PredecessorReferenceDocType,
      I_GLAccountLineItem.PredecessorReferenceDocument,

      I_GLAccountLineItem.SourceReferenceDocumentType,
      I_GLAccountLineItem.SourceReferenceDocumentCntxt,
      I_GLAccountLineItem.SourceReferenceDocument,
      I_GLAccountLineItem.SourceReferenceDocumentItem,
      I_GLAccountLineItem.SourceReferenceDocSubitem,
      I_GLAccountLineItem.IsCommitment,
      I_GLAccountLineItem.JrnlEntryItemObsoleteReason,

      @ObjectModel.foreignKey.association: '_ProjectInternalID'
      I_GLAccountLineItem.ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      I_GLAccountLineItem.PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )                    as ProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv )        as PartnerProjectExternalID,

      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'ProjectExternalID'
      cast( I_GLAccountLineItem.Project as fis_project )                                       as Project,

      @ObjectModel.foreignKey.association: '_ProjectNetwork'
      I_GLAccountLineItem.ProjectNetwork,
      I_GLAccountLineItem.WorkPackage,
      I_GLAccountLineItem.WorkItem,
      I_GLAccountLineItem.QuantityIsIncomplete,
      I_GLAccountLineItem.ReferenceDocument,
      I_GLAccountLineItem.ReferenceDocumentContext,
      I_GLAccountLineItem.ReferenceDocumentItem,
      I_GLAccountLineItem.ReferenceDocumentItemGroup,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      I_GLAccountLineItem.ReferenceDocumentType,
      I_GLAccountLineItem.RelatedNetworkActivity,
      I_GLAccountLineItem.ReversalReferenceDocument,
      I_GLAccountLineItem.ReversalReferenceDocumentCntxt,
      I_GLAccountLineItem.SenderAccountAssignment,
      I_GLAccountLineItem.SenderAccountAssignmentType,
      //@ObjectModel.foreignKey.association: '_SenderGLAccount'
      I_GLAccountLineItem.SenderGLAccount,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProduct'
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      I_GLAccountLineItem.SoldMaterial, // do not use any longer, use SoldProduct
      @ObjectModel.foreignKey.association: '_SoldProduct'
      I_GLAccountLineItem.SoldProduct,
      I_GLAccountLineItem.CostOriginGroup,
      @ObjectModel.foreignKey.association: '_OriginSenderObject'
      I_GLAccountLineItem.OriginSenderObject,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      I_GLAccountLineItem.CostAnalysisResource,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      I_GLAccountLineItem.CustomerSupplierCountry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      I_GLAccountLineItem.CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItem.SalesDistrict,
      I_GLAccountLineItem.BillToParty,
      I_GLAccountLineItem.ShipToParty,
      I_GLAccountLineItem.CustomerSupplierCorporateGroup,
      @ObjectModel.foreignKey.association: '_FundsCenter'
      I_GLAccountLineItem.FundsCenter,
      I_GLAccountLineItem.FundedProgram,
      I_GLAccountLineItem.IsStatisticalOrder,
      I_GLAccountLineItem.IsStatisticalCostCenter,
      I_GLAccountLineItem.IsStatisticalSalesDocument,
      I_GLAccountLineItem.WBSIsStatisticalWBSElement,
      I_GLAccountLineItem.WorkCenterInternalID,
      I_GLAccountLineItem.OrderOperation,
      I_GLAccountLineItem.OrderItem,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
      ///////////////////////////////////////////////////////////////////////
      //   AccrualObject      --(1:N)-->  AccrualSubobject  --(1:N)-->  Accrual(Subobject)Item (this field is not stored in ACDOCA)
      //   AccrualObjectType                                            AccrualItemType  are the corresponding types
      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualObjectType'
      I_GLAccountLineItem.AccrualObjectType,

      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualObject'
      I_GLAccountLineItem.AccrualObject,

      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualSubobject'
      I_GLAccountLineItem.AccrualSubobject,

      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_AccrualItemType'
      I_GLAccountLineItem.AccrualItemType,

      I_GLAccountLineItem.AccrualValueDate,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VAL STRU  0 0 Universal Journal Entry: Fields for Fin. Valuation Object
      ///////////////////////////////////////////////////////////////////////
      I_GLAccountLineItem.FinancialValuationObjectType,
      I_GLAccountLineItem.FinancialValuationObject,
      I_GLAccountLineItem.FinancialValuationSubobject,
      I_GLAccountLineItem.NetDueDate,
      I_GLAccountLineItem.CreditRiskClass,


      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      // @ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'
      I_GLAccountLineItem.OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      I_GLAccountLineItem.Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      I_GLAccountLineItem.FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      I_GLAccountLineItem.Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      I_GLAccountLineItem.MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      I_GLAccountLineItem.MaintenanceOrderPlanningCode,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      I_GLAccountLineItem.MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      I_GLAccountLineItem.MaintPriority,
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      I_GLAccountLineItem.SuperiorOrder,
      @ObjectModel.foreignKey.association: '_ProductGroup_2'
      I_GLAccountLineItem.ProductGroup,
      I_GLAccountLineItem.MaintenanceOrderIsPlanned,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FS  Universal Journal Entry: Fields for Financial Services
      ///////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FinServicesProductGroup'
      I_GLAccountLineItem.FinancialServicesProductGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FinancialServicesBranch'
      I_GLAccountLineItem.FinancialServicesBranch,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FinancialDataSource'
      I_GLAccountLineItem.FinancialDataSource,


      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FINCS   Universal Journal Entry: Fields for Group Reporting
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_ConsolidationUnit'
      I_GLAccountLineItem.ConsolidationUnit,
      @ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'
      I_GLAccountLineItem.PartnerConsolidationUnit,
      @ObjectModel.foreignKey.association: '_Company'
      I_GLAccountLineItem.Company,
      @ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts'
      I_GLAccountLineItem.ConsolidationChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem'
      I_GLAccountLineItem.CnsldtnFinancialStatementItem,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory'
      I_GLAccountLineItem.CnsldtnSubitemCategory,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitem'
      I_GLAccountLineItem.CnsldtnSubitem,



      ////    @EndUserText.label: 'Debit Amount in Company Code Currency'
      //    @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //    @Aggregation.default: #SUM
      ////    @AnalyticsDetails.query.axis: #COLUMNS
      //    case when DebitCreditCode ='S' then cast (AmountInCompanyCodeCurrency as FIS_DR_HSL) else cast (0 as FIS_DR_HSL) end as DebitAmountInCoCodeCrcy,
      //
      ////    @EndUserText.label: 'Credit Amount in Company Code Currency'
      //    @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //    @Aggregation.default: #SUM
      ////    @AnalyticsDetails.query.axis: #COLUMNS
      //    case when DebitCreditCode ='H' then cast (AmountInCompanyCodeCurrency as FIS_CR_HSL) else cast (0 as FIS_CR_HSL) end as CreditAmountInCoCodeCrcy,

      ///////////////////////////////////////////////////////////////////////////////
      // Currency and Amount Fields
      ///////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      I_GLAccountLineItem.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.DebitAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.CreditAmountInCoCodeCrcy,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      I_GLAccountLineItem.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.AmountInTransactionCurrency,


      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      I_GLAccountLineItem.GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.AmountInGlobalCurrency,

      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      I_GLAccountLineItem.FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.AmountInFunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.DebitAmountInFunctionalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.CreditAmountInFunctionalCrcy,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      I_GLAccountLineItem.FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      I_GLAccountLineItem.FreeDefinedCurrency2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      I_GLAccountLineItem.FreeDefinedCurrency3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      I_GLAccountLineItem.FreeDefinedCurrency4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      I_GLAccountLineItem.FreeDefinedCurrency5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      I_GLAccountLineItem.FreeDefinedCurrency6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      I_GLAccountLineItem.FreeDefinedCurrency7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      I_GLAccountLineItem.FreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency8,

      I_GLAccountLineItem.ControllingObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      I_GLAccountLineItem.AmountInObjectCurrency,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      I_GLAccountLineItem.BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItem.Quantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      I_GLAccountLineItem.CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItem.ValuationQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      I_GLAccountLineItem.AdditionalQuantity1Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      I_GLAccountLineItem.AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      I_GLAccountLineItem.AdditionalQuantity2Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      I_GLAccountLineItem.AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      I_GLAccountLineItem.AdditionalQuantity3Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      I_GLAccountLineItem.AdditionalQuantity3,


      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.DebitAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.CreditAmountInTransCrcy,

      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      I_GLAccountLineItem.BalanceTransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.AmountInBalanceTransacCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.CreditAmountInBalanceTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.DebitAmountInBalanceTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.DebitAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.CreditAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy8,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy8,

      ////////////////////////////////////
      // NEW
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.GrpValnFixedAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.PrftCtrValnFxdAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.TotalPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.GrpValnTotPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.PrftCtrValnTotPrcVarcInGlbCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.FixedPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.GrpValnFixedPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.PrftCtrValnFxdPrcVarcInGlbCrcy,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItem.FixedQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItem.ValuationFixedQuantity,
      ////////////////////////////////////

      ///////////////////////////////////////////////////////////////////////////////
      // Fields from associations
      ///////////////////////////////////////////////////////////////////////////////

      I_GLAccountLineItem.CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      I_GLAccountLineItem.CalendarQuarter,
      I_GLAccountLineItem.CalendarYearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      I_GLAccountLineItem.CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      I_GLAccountLineItem.CalendarYearMonth,
      I_GLAccountLineItem.CalendarWeek,
      I_GLAccountLineItem.CalendarYearWeek,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalQuarter                                    as FiscalQuarter,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalWeek                                       as FiscalWeek,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalYearQuarter                                as FiscalYearQuarter,
      I_GLAccountLineItem._FiscalCalendarDate.FiscalYearWeek                                   as FiscalYearWeek,
      //    _Employment._Employee.EmployeeFullName,
      //_PersonWorkAgreement_1.PersonFullName  as EmployeeFullName,       27.07.2020
      // cast( 'XXXXX' as bu_name1tx ) as EmployeeFullName,
      case when ( I_GLAccountLineItem.PersonnelNumber <> '00000000' ) then cast( 'XXXXX' as bu_name1tx )
      //                                                              else cast( '' as bu_name1tx )
      end                                                                                      as EmployeeFullName,

      ///////////////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////////////

      I_GLAccountLineItem._JournalEntry,
      _OperationalAcctgDocItem,
      I_GLAccountLineItem._CompanyCode,
      I_GLAccountLineItem._FiscalYear,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_FiscalPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      I_GLAccountLineItem._FiscalPeriod,
      I_GLAccountLineItem._FiscalPeriodForVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_LedgerFiscalYearForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
      I_GLAccountLineItem._LedgerFiscalYear,
      I_GLAccountLineItem._LedgerFiscalYearForVariant,
      I_GLAccountLineItem._FiscalYearVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_FiscalYearPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
      I_GLAccountLineItem._FiscalYearPeriod,
      I_GLAccountLineItem._FiscalYearPeriodForVariant,

      I_GLAccountLineItem._ControllingArea,
      I_GLAccountLineItem._BalanceTransactionCurrency,
      I_GLAccountLineItem._TransactionCurrency,
      I_GLAccountLineItem._CompanyCodeCurrency,
      I_GLAccountLineItem._GlobalCurrency,
      I_GLAccountLineItem._FunctionalCurrency,
      I_GLAccountLineItem._FreeDefinedCurrency1,
      I_GLAccountLineItem._FreeDefinedCurrency2,
      I_GLAccountLineItem._FreeDefinedCurrency3,
      I_GLAccountLineItem._FreeDefinedCurrency4,
      I_GLAccountLineItem._FreeDefinedCurrency5,
      I_GLAccountLineItem._FreeDefinedCurrency6,
      I_GLAccountLineItem._FreeDefinedCurrency7,
      I_GLAccountLineItem._FreeDefinedCurrency8,
      I_GLAccountLineItem._BaseUnit,
      I_GLAccountLineItem._CostSourceUnit,
      I_GLAccountLineItem._AdditionalQuantity1Unit,
      I_GLAccountLineItem._AdditionalQuantity2Unit,
      I_GLAccountLineItem._AdditionalQuantity3Unit,
      I_GLAccountLineItem._Segment,
      I_GLAccountLineItem._ProfitCenter,
      I_GLAccountLineItem._CurrentProfitCenter,
      I_GLAccountLineItem._CostCenter,
      I_GLAccountLineItem._CurrentCostCenter,
      I_GLAccountLineItem._AccountAssignmentType,


      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectExternalID'
      _Project,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectExternalIDText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectExternalIDText'
      @UI.hidden: true
      _ProjectText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectExternalID'
      _PartnerProject,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjctExtrnalIDText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjctExtrnalIDText'
      @Consumption.hidden: true
      _PartnerProjectText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicData'
      _ProjectInternalID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicDataText'
      @UI.hidden: true
      _ProjectInternalIDText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectBasicData'
      _PartnerProjectInternalID,

      _ProjectBasicData,
      @UI.hidden: true
      _ProjectBasicDataText,
      _PartnerProjectBasicData,
      @UI.hidden: true
      _PartnerProjectBasicDataText,

      _ProjectExternalID,
      _ProjectExternalIDText,
      _PartnerProjectExternalID,
      _PartnerProjctExtrnalIDText,


      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_WBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_WBSElementExternalID'
      _WBSElement,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_WBSElementExternalIDText'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_WBSElementExternalIDText'
      @UI.hidden: true
      _WBSElementText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerWBSElementExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerWBSElementExternalID'
      _PartnerWBSElement,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerWBSElemntExtrnalIDText'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerWBSElemntExtrnalIDText'
      @UI.hidden: true
      _PartnerWBSElementText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerWBSElmntBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerWBSElmntBasicDataText'
      @UI.hidden: true
      _PartnerWBSElemntBasicDataText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStockWBSElmntExtID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStockWBSElmntExtID'
      _InventorySpclStockWBSElement,

      //@API.element.releaseState: #DEPRECATED
      //@API.element.successor:    '_InvtrySpclStkWBSElmntBscDataT'
      //@VDM.lifecycle.status:    #DEPRECATED
      //@VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscDataT'
      //@UI.hidden: true
      //_InvtrySpclStockWBSElmntText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData'
      _WBSElementInternalID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicDataText'
      @UI.hidden: true
      _WBSElementInternalIDText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscData'
      _InvtrySpclStockWBSElmntIntID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscData'
      _InvtrySpclStockWBSElmntBD,

      _WBSElementBasicData,
      @UI.hidden: true
      _WBSElementBasicDataText,

      _PartnerWBSElementBasicData,
      @UI.hidden: true
      _PartnerWBSElmntBasicDataText,

      _InvtrySpclStkWBSElmntBscData,
      @UI.hidden: true
      _InvtrySpclStkWBSElmntBscDataT,

      _WBSElementExternalID,
      _WBSElementExternalIDText,
      _PartnerWBSElementExternalID,
      _PartnerWBSElemntExtrnalIDText,
      _InvtrySpclStockWBSElmntExtID,


      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_Product'
      I_GLAccountLineItem._Material,
      I_GLAccountLineItem._Product,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProduct'
      I_GLAccountLineItem._SoldMaterial,
      I_GLAccountLineItem._SoldProduct,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      I_GLAccountLineItem._MaterialGroup,
      //@API.element.releaseState: #DEPRECATED                   not allowed
      //@API.element.successor:    '_SoldProductGroup_2'         not allowed
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      I_GLAccountLineItem._SoldProductGroup,
      I_GLAccountLineItem._SoldProductGroup_2,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProductGroup_2'
      I_GLAccountLineItem._ProductGroup,
      I_GLAccountLineItem._ProductGroup_2,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocument'
      I_GLAccountLineItem._SalesOrder,
      I_GLAccountLineItem._SalesDocument,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocumentItem'
      I_GLAccountLineItem._SalesOrderItem,
      I_GLAccountLineItem._SalesDocumentItem,

      I_GLAccountLineItem._ProjectNetwork,
      I_GLAccountLineItem._InternalOrder,
      I_GLAccountLineItem._Order,
      I_GLAccountLineItem._BusinessArea,
      I_GLAccountLineItem._FunctionalArea,
      I_GLAccountLineItem._CostCtrActivityType,
      I_GLAccountLineItem._CostAnalysisResource,
      I_GLAccountLineItem._BusinessProcess,
      I_GLAccountLineItem._OrderCategory,
      I_GLAccountLineItem._ControllingObjectClass,

      I_GLAccountLineItem._GLAccountInChartOfAccounts,
      I_GLAccountLineItem._GLAccountInCompanyCode,
      I_GLAccountLineItem._ChartOfAccounts,
      I_GLAccountLineItem._AccountingDocumentType,
      I_GLAccountLineItem._FinancialAccountType,
      I_GLAccountLineItem._DebitCreditCode,
      I_GLAccountLineItem._Plant,
      I_GLAccountLineItem._Ledger,
      I_GLAccountLineItem._SourceLedger,

      I_GLAccountLineItem._Customer,
      I_GLAccountLineItem._CustomerCompany,
      I_GLAccountLineItem._CustomerGroup,
      I_GLAccountLineItem._Supplier,
      I_GLAccountLineItem._SupplierCompany,

      // _Order,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PersonWorkAgreement_1'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
      I_GLAccountLineItem._Employment,
      I_GLAccountLineItem._PersonWorkAgreement_1,

      I_GLAccountLineItem._PostingKey,
      I_GLAccountLineItem._SubLedgerAccLineItemType,
      I_GLAccountLineItem._AccountingDocumentCategory,
      I_GLAccountLineItem._FinancialTransactionType,
      I_GLAccountLineItem._BusinessTransactionCategory,
      I_GLAccountLineItem._BusinessTransactionType,
      I_GLAccountLineItem._ReferenceDocumentType,
      I_GLAccountLineItem._PredecessorReferenceDocType,

      I_GLAccountLineItem._PartnerControllingObjectClass,
      I_GLAccountLineItem._PartnerCostCenter,
      I_GLAccountLineItem._PartnerProfitCenter,
      I_GLAccountLineItem._PartnerBusinessArea,
      I_GLAccountLineItem._PartnerFunctionalArea,
      I_GLAccountLineItem._PartnerCompanyCode,
      I_GLAccountLineItem._PartnerSegment,
      I_GLAccountLineItem._PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerOrder_2'
      I_GLAccountLineItem._PartnerOrder,
      I_GLAccountLineItem._PartnerOrder_2,
      I_GLAccountLineItem._PartnerOrderCategory,
      I_GLAccountLineItem._PartnerSalesDocument,
      I_GLAccountLineItem._PartnerSalesDocumentItem,
      I_GLAccountLineItem._PartnerBusinessProcess,

      I_GLAccountLineItem._User,

      I_GLAccountLineItem._EliminationProfitCenter,

      //_ControllingObject,
      I_GLAccountLineItem._ControllingDebitCreditCode,
      I_GLAccountLineItem._GLAccountType,
      I_GLAccountLineItem._OffsettingAccountType,
      I_GLAccountLineItem._OffsettingChartOfAccounts,
      I_GLAccountLineItem._OffsettingAccount,
      I_GLAccountLineItem._OffsettingAccountWithBP,
      I_GLAccountLineItem._AlternativeGLAccount,
      //_SenderGLAccount,
      I_GLAccountLineItem._CountryChartOfAccounts,
      _CorporateGroupChartOfAccounts,
      _CorporateGroupAccount,
      I_GLAccountLineItem._PurchasingDocument,
      I_GLAccountLineItem._PurchasingDocumentItem,

      I_GLAccountLineItem._SpecialGLCode,
      I_GLAccountLineItem._TaxCode,
      I_GLAccountLineItem._TaxCountry,
      I_GLAccountLineItem._HouseBank,
      I_GLAccountLineItem._HouseBankAccount,

      I_GLAccountLineItem._ClearingJrnlEntryFiscalYear,
      I_GLAccountLineItem._ClearingJournalEntry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ClearingJournalEntry'
      I_GLAccountLineItem._ClearingAccountingDocument,

      I_GLAccountLineItem._MasterFixedAsset,
      I_GLAccountLineItem._FixedAsset,
      I_GLAccountLineItem._GroupMasterFixedAsset,
      I_GLAccountLineItem._GroupFixedAsset,
      I_GLAccountLineItem._MovementCategory,
      I_GLAccountLineItem._AssetTransactionType,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InventorySpclStockValnType'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_InventorySpclStockValnType'
      I_GLAccountLineItem._InventorySpecialStockValnType,
      I_GLAccountLineItem._InventorySpclStockValnType,

      I_GLAccountLineItem._InventorySpecialStockType,
      I_GLAccountLineItem._InventorySpclStkSalesDocument,
      I_GLAccountLineItem._InventorySpclStkSalesDocItm,
      I_GLAccountLineItem._InventorySpecialStockSupplier,
      I_GLAccountLineItem._InventoryValuationType,

      I_GLAccountLineItem._OriginSenderObject,
      I_GLAccountLineItem._OriginCostCenter,
      I_GLAccountLineItem._OriginProfitCenter,
      I_GLAccountLineItem._OriginCostCtrActivityType,
      I_GLAccountLineItem._CostOriginGroup,
      //_RelatedNetworkActivity,
      //_PartnerProjectNetworkActivity,

      I_GLAccountLineItem._BillingDocumentType,
      I_GLAccountLineItem._SalesOrganization,
      I_GLAccountLineItem._DistributionChannel,
      I_GLAccountLineItem._Division,
      I_GLAccountLineItem._CustomerSupplierCountry,
      I_GLAccountLineItem._SalesDistrict,
      I_GLAccountLineItem._BillToParty,
      I_GLAccountLineItem._ShipToParty,

      I_GLAccountLineItem._FundsCenter,
      I_GLAccountLineItem._Fund,
      I_GLAccountLineItem._Grant,
      I_GLAccountLineItem._PartnerFund,
      I_GLAccountLineItem._PartnerGrant,
      I_GLAccountLineItem._FinancialManagementArea,
      //_FundedProgram
      I_GLAccountLineItem._BudgetPeriod,

      I_GLAccountLineItem._LogicalSystem,

      I_GLAccountLineItem._OperatingConcern,

      I_GLAccountLineItem._PartnerCompany,

      I_GLAccountLineItem._PurReqValuationArea,
      I_GLAccountLineItem._WorkCenter,

      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      I_GLAccountLineItem._BillableControl,
      I_GLAccountLineItem._ConditionContract,
      I_GLAccountLineItem._Equipment,
      I_GLAccountLineItem._FunctionalLocation,
      I_GLAccountLineItem._MaintenanceActivityType,
      I_GLAccountLineItem._MaintOrdPlngDegreeCode,
      I_GLAccountLineItem._PMNotificationPriorityType,
      I_GLAccountLineItem._PMNotificationPriority,
      //_MaintenanceOrderSubOperation,
      I_GLAccountLineItem._Assembly,
      I_GLAccountLineItem._SuperiorOrder,
      I_GLAccountLineItem._ServiceDocumentType,
      I_GLAccountLineItem._ServiceDocument,
      I_GLAccountLineItem._ServiceDocumentItem,
      I_GLAccountLineItem._PartnerServiceDocumentType,
      I_GLAccountLineItem._PartnerServiceDocument,
      I_GLAccountLineItem._PartnerServiceDocumentItem,
      I_GLAccountLineItem._ServiceContract,
      I_GLAccountLineItem._ServiceContractItem,
      I_GLAccountLineItem._ServiceContractType,

      I_GLAccountLineItem._WorkPackage,
      I_GLAccountLineItem._WorkPackageWorkItem,
      I_GLAccountLineItem._TimeSheetOvertimeCat,

      I_GLAccountLineItem._AccrualObjectType,
      I_GLAccountLineItem._AccrualObject,
      I_GLAccountLineItem._AccrualSubobject,
      I_GLAccountLineItem._AccrualItemType,

      _FinServicesProductGroup,
      _FinancialServicesBranch,
      _FinancialDataSource,
      _CustomerSupplierIndustry,

      I_GLAccountLineItem._CreditRiskClass,
      I_GLAccountLineItem._FinValuationObjectType,

      I_GLAccountLineItem._ConsolidationUnit,
      I_GLAccountLineItem._PartnerConsolidationUnit,
      I_GLAccountLineItem._Company,
      I_GLAccountLineItem._ConsolidationChartOfAccounts,
      I_GLAccountLineItem._CnsldtnFinancialStatementItem,
      I_GLAccountLineItem._CnsldtnSubitemCategory,
      I_GLAccountLineItem._CnsldtnSubitem,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_GLAccountLineItem.GLAccountAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_GLAccountLineItem.SupplierBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_GLAccountLineItem.CustomerBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_GLAccountLineItem.AcctgDocTypeAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_GLAccountLineItem.OrderType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      I_GLAccountLineItem.SalesOrderType

      //_Extension  Extensions must be local

}
```
