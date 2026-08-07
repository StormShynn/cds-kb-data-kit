---
name: I_AVGDAILYBALKEYFIGCUBE
description: "ADB Key Figures - Cube"
app_component: FI-GL-GL-ADB-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVGDAILYBALKEYFIGCUBE')/$value
semantic_en: "ADB Key Figures - Cube"
keywords:
  - "ADB Key Figures - Cube"
  - "ADB Key Figures - Cube"
  - "ADB Key Figures - Cube"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-ADB-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-ADB
  - FI-GL-GL-ADB-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_AVGDAILYBALKEYFIGCUBE

**ADB Key Figures - Cube**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-ADB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVGDAILYBALKEYFIGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FlowOfFundsLedgerFiscalYear` |  | |  |  | `NUMC(4)` | Funds of Flow Ledger Fiscal Year |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `ControllingBusTransacType` |  | |  |  | `CHAR(4)` | CO Business Transaction |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `TransactionSubitem` |  | |  |  | `NUMC(6)` | Partial Document to be balanced to zero |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Journal Entry Item Obsolete Reason |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
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
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `OriginSenderObject` |  | |  |  | `CHAR(22)` | Origin Sender Object |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
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
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  |  | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
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
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVenturePartner` |  | |  |  | `CHAR(10)` | Joint Venture Partner |
| `JointVentureBillingType` |  | |  |  | `CHAR(2)` | Joint Venture Billing Type |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `JointVentureProductionDate` |  | |  |  | `DATS(8)` | Joint Venture Production Date |
| `JointVentureBillingDate` |  | |  |  | `DATS(8)` | Joint Venture Billing Date |
| `JointVentureOperationalDate` |  | |  |  | `DATS(8)` | Joint Venture Operational Date |
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
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `CnsldtnFinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `CnsldtnSubitemCategory` |  | |  |  | `CHAR(3)` | Consolidation Subitem Category |
| `CnsldtnSubitem` |  | |  |  | `CHAR(10)` | Consolidation Subitem |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `PriorDayBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Prior Day Balance In Balance Transaction Currency |
| `CurDayActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Current Day Activity In Balance Transaction Currency |
| `PriorMonthBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Prior Month Balance In Balance Transaction Currency |
| `CurMonthActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Current Month Activity In Balance Transaction Currency |
| `YTDBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Balance Transaction Currency |
| `MTDAvgDailyBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Balance Transaction Currency |
| `QTDAvgDailyBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Balance Transaction Currency |
| `YTDAvgDailyBalInBalTransCrcy` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Balance Transaction Currency |
| `MTDAvgActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Balance Transaction Currency |
| `QTDActyAmtInBalTransCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date Acty In Balance Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `PriorDayBalInCCCrcy` |  | |  |  | `CURR(27)` | Prior Day Balance In Company Code Currency |
| `CurDayActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Current Day Activity In Company Code Currency |
| `PriorMonthBalInCCCrcy` |  | |  |  | `CURR(27)` | Prior Month Balance In Company Code Currency |
| `CurMonthActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Current Month Activity In Company Code Currency |
| `YTDBalInCCCrcy` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Company Code Currency |
| `MTDAvgDailyBalInCCCrcy` |  | |  |  | `CURR(27)` | Month-to-date ADB In Company Code Currency |
| `QTDAvgDailyBalInCCCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Company Code Currency |
| `YTDAvgDailyBalInCCCrcy` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Company Code Currency |
| `MTDAvgActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Activity In Company Code Currency |
| `QTDActyAmtInCCCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `PriorDayBalInGlobCrcy` |  | |  |  | `CURR(27)` | Prior Day Balance In Global Currency |
| `CurDayActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Current Day Activity In Global Currency |
| `PriorMonthBalInGlobCrcy` |  | |  |  | `CURR(27)` | Prior Month Balance In Global Currency |
| `CurMonthActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Current Month Activity In Global Currency |
| `YTDBalInGlobCrcy` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Global Currency |
| `MTDAvgDailyBalInGlobCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Daily Balances In Global Currency |
| `QTDAvgDailyBalInGlobCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Global Currency |
| `YTDAvgDailyBalInGlobCrcy` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Global Currency |
| `QTDActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Balance GLobal Currency |
| `MTDAvgActyAmtInGlobCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Activity In Balance Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `PriorDayBalInFuncnlCrcy` |  | |  |  | `CURR(27)` | Prior Day Balance In Functional Currency |
| `CurDayActyAmtInFuncnlCrcy` |  | |  |  | `CURR(27)` | Current Day Activity In Functional Currency |
| `PriorMonthBalInFuncnlCrcy` |  | |  |  | `CURR(27)` | Prior Month Balance In Functional Currency |
| `CurMonthActyAmtInFuncnlCrcy` |  | |  |  | `CURR(27)` | Current Month Activity In Functional Currency |
| `YTDBalInFuncnlCrcy` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Functional Currency |
| `MTDAvgDailyBalInFuncnlCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Daily Balances In Functional Currency |
| `QTDAvgDailyBalInFuncnlCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Functional Currency |
| `YTDAvgDailyBalInFuncnlCrcy` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Functional Currency |
| `QTDActyAmtInFuncnlCrcy` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Balance Functional Currency |
| `MTDAvgActyAmtInFuncnlCrcy` |  | |  |  | `CURR(27)` | Month-to-Date Average Activity In Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `PriorDayBalInFDCrcy1` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 1 |
| `CurDayActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 1 |
| `PriorMonthBalInFDCrcy1` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 1 |
| `CurMonthActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 1 |
| `YTDBalInFDCrcy1` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 1 |
| `MTDAvgDailyBalInFDCrcy1` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 1 |
| `QTDAvgDailyBalInFDCrcy1` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 1 |
| `YTDAvgDailyBalInFDCrcy1` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 1 |
| `MTDAvgActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 1 |
| `QTDActyAmtInFDCrcy1` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `PriorDayBalInFDCrcy2` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 2 |
| `CurDayActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 2 |
| `PriorMonthBalInFDCrcy2` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 2 |
| `CurMonthActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 2 |
| `YTDBalInFDCrcy2` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 2 |
| `MTDAvgDailyBalInFDCrcy2` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 2 |
| `QTDAvgDailyBalInFDCrcy2` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 2 |
| `YTDAvgDailyBalInFDCrcy2` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 2 |
| `MTDAvgActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 2 |
| `QTDActyAmtInFDCrcy2` |  | |  |  | `CURR(27)` | Quarter-to-Date Avg Activity In Free-Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `PriorDayBalInFDCrcy3` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 3 |
| `CurDayActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 3 |
| `PriorMonthBalInFDCrcy3` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 3 |
| `CurMonthActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 3 |
| `YTDBalInFDCrcy3` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 3 |
| `MTDAvgDailyBalInFDCrcy3` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 3 |
| `QTDAvgDailyBalInFDCrcy3` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 3 |
| `YTDAvgDailyBalInFDCrcy3` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 3 |
| `MTDAvgActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 3 |
| `QTDActyAmtInFDCrcy3` |  | |  |  | `CURR(27)` | Quarter-to-Date Avg Activity In Free-Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `PriorDayBalInFDCrcy4` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 4 |
| `CurDayActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 4 |
| `PriorMonthBalInFDCrcy4` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 4 |
| `CurMonthActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 4 |
| `YTDBalInFDCrcy4` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 4 |
| `MTDAvgDailyBalInFDCrcy4` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 4 |
| `QTDAvgDailyBalInFDCrcy4` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 4 |
| `YTDAvgDailyBalInFDCrcy4` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 4 |
| `MTDAvgActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 4 |
| `QTDActyAmtInFDCrcy4` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `PriorDayBalInFDCrcy5` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 5 |
| `CurDayActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 5 |
| `PriorMonthBalInFDCrcy5` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 5 |
| `CurMonthActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 5 |
| `YTDBalInFDCrcy5` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 5 |
| `MTDAvgDailyBalInFDCrcy5` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 5 |
| `QTDAvgDailyBalInFDCrcy5` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 5 |
| `YTDAvgDailyBalInFDCrcy5` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 5 |
| `MTDAvgActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 5 |
| `QTDActyAmtInFDCrcy5` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `PriorDayBalInFDCrcy6` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 6 |
| `CurDayActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 6 |
| `PriorMonthBalInFDCrcy6` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 6 |
| `CurMonthActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 6 |
| `YTDBalInFDCrcy6` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 6 |
| `MTDAvgDailyBalInFDCrcy6` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 6 |
| `QTDAvgDailyBalInFDCrcy6` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 6 |
| `YTDAvgDailyBalInFDCrcy6` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 6 |
| `MTDAvgActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 6 |
| `QTDActyAmtInFDCrcy6` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `PriorDayBalInFDCrcy7` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 7 |
| `CurDayActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 7 |
| `PriorMonthBalInFDCrcy7` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 7 |
| `CurMonthActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 7 |
| `YTDBalInFDCrcy7` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 7 |
| `MTDAvgDailyBalInFDCrcy7` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 7 |
| `QTDAvgDailyBalInFDCrcy7` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 7 |
| `YTDAvgDailyBalInFDCrcy7` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 7 |
| `MTDAvgActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 7 |
| `QTDActyAmtInFDCrcy7` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `PriorDayBalInFDCrcy8` |  | |  |  | `CURR(27)` | Prior Day Balance In Free-Defined Currency 8 |
| `CurDayActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Current Day Activity In Free-Defined Currency 8 |
| `PriorMonthBalInFDCrcy8` |  | |  |  | `CURR(27)` | Prior Month Balance In Free-Defined Currency 8 |
| `CurMonthActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Current Month Activity In Free-Defined Currency 8 |
| `YTDBalInFDCrcy8` |  | |  |  | `CURR(27)` | Year-to-Date Balance In Free-Defined Currency 8 |
| `MTDAvgDailyBalInFDCrcy8` |  | |  |  | `CURR(27)` | Month-to-Date ADB In Free-Defined Currency 8 |
| `QTDAvgDailyBalInFDCrcy8` |  | |  |  | `CURR(27)` | Quarter-to-Date ADB In Free-Defined Currency 8 |
| `YTDAvgDailyBalInFDCrcy8` |  | |  |  | `CURR(27)` | Year-to-Date ADB In Free-Defined Currency 8 |
| `MTDAvgActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Month-to-Date Avg Activity In Free-Defined Currency 8 |
| `QTDActyAmtInFDCrcy8` |  | |  |  | `CURR(27)` | Quarter-to-Date Activity In Free-Defined Currency 8 |
