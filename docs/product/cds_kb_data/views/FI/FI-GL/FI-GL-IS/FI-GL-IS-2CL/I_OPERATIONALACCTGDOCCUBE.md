---
name: I_OPERATIONALACCTGDOCCUBE
description: "This CDS view is designed to provide a comprehensive analytical cube for operational journal entry items. It aggregates and organizes financial data from various accounting documents, allowing for detailed analysis and reporting. The view includes associations with multiple related entities to enrich the data with additional context, such as business transaction types, financial management areas, and ledger information. This CDS view provides the data to answer the following business questions: What are the detailed financial transactions recorded in the operational accounting documents? How can we analyze financial data across different currencies and units of measure? What is the status of clearing and reconciliation for specific accounting documents? What are the tax implications and calculations associated with specific journal entries? How can we track and report on financial transactions by various dimensions such as company code, cost center, profit center, and segment? How can we assess the impact of financial transactions on cash flow and payment processes? What are the relationships between different financial entities, such as customers, suppliers, and business areas, in the context of journal entries? How can we evaluate the financial performance and position of the organization using aggregated financial data? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONALACCTGDOCCUBE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analytical cube for operational journal entry items. It aggregates and organizes financial data from various accounting documents, allowing for detailed analysis and reporting. The view includes associations with multiple related entities to enrich the data with additional context, such as business transaction types, financial management areas, and ledger information. This CDS view provides the data to answer the following business questions: What are the detailed financial transactions recorded in the operational accounting documents? How can we analyze financial data across different currencies and units of measure? What is the status of clearing and reconciliation for specific accounting documents? What are the tax implications and calculations associated with specific journal entries? How can we track and report on financial transactions by various dimensions such as company code, cost center, profit center, and segment? How can we assess the impact of financial transactions on cash flow and payment processes? What are the relationships between different financial entities, such as customers, suppliers, and business areas, in the context of journal entries? How can we evaluate the financial performance and position of the organization using aggregated financial data? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - customer
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - payment
  - supplier
  - transaction
  - metadata-only
---
# I_OPERATIONALACCTGDOCCUBE

**This CDS view is designed to provide a comprehensive analytical cube for operational journal entry items. It aggregates and organizes financial data from various accounting documents, allowing for detailed analysis and reporting. The view includes associations with multiple related entities to enrich the data with additional context, such as business transaction types, financial management areas, and ledger information. This CDS view provides the data to answer the following business questions: What are the detailed financial transactions recorded in the operational accounting documents? How can we analyze financial data across different currencies and units of measure? What is the status of clearing and reconciliation for specific accounting documents? What are the tax implications and calculations associated with specific journal entries? How can we track and report on financial transactions by various dimensions such as company code, cost center, profit center, and segment? How can we assess the impact of financial transactions on cash flow and payment processes? What are the relationships between different financial entities, such as customers, suppliers, and business areas, in the context of journal entries? How can we evaluate the financial performance and position of the organization using aggregated financial data? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONALACCTGDOCCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Company Code Name |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AccountingDocumentItemType` |  | |  |  | `CHAR(1)` | Identification of the Line Item |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingCreationDate` |  | |  |  | `DATS(8)` | Clearing Creation Date |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `IsCleared` |  | |  |  | `CHAR(1)` | Clearing Status: Is Cleared |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `SpecialGLTransactionType` |  | |  |  | `CHAR(1)` | Special G/L Transaction Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessAreaName` |  | |  |  | `CHAR(30)` | Business Area Name |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `TaxType` |  | |  |  | `CHAR(1)` | Tax Type |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `CorporateGroupAccount` |  | |  |  | `CHAR(10)` | Corporate Group Account |
| `PlanningLevel` |  | |  |  | `CHAR(2)` | Planning Level |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ScheduleLine` |  | |  |  | `NUMC(4)` | Schedule Line |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `IsSalesRelated` |  | |  |  | `CHAR(1)` | Is Sales Related |
| `LineItemDisplayIsEnabled` |  | |  |  | `CHAR(1)` | Indicator: Can Line Items Be Displayed by Account? |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `IsNotCashDiscountLiable` |  | |  |  | `CHAR(1)` | Is Not Cash Discount Liable |
| `IsAutomaticallyCreated` |  | |  |  | `CHAR(1)` | Is Automatically Created |
| `IsUsedInPaymentTransaction` |  | |  |  | `CHAR(1)` | Is Used In Payment Transaction |
| `OperationalGLAccount` |  | |  |  | `CHAR(10)` | Operational General Ledger Account |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(30)` | G/L Account Name |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `BranchAccount` |  | |  |  | `CHAR(10)` | Branch Account |
| `IsBalanceSheetAccount` |  | |  |  | `CHAR(1)` | Is Balance Sheet Account |
| `ProfitLossAccountType` |  | |  |  | `CHAR(2)` | Profit Loss Account Type |
| `SpecialGLAccountAssignment` |  | |  |  | `CHAR(18)` | Assignment Number for Special G/L Accounts |
| `DueCalculationBaseDate` |  | |  |  | `DATS(8)` | Due Calculation Base Date |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `PaymentBlockingReason` |  | |  |  | `CHAR(1)` | Payment Blocking Reason |
| `FixedCashDiscount` |  | |  |  | `CHAR(1)` | Fixed Cash Discount |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `BPBankAccountInternalID` |  | |  |  | `CHAR(4)` | Business Partner Bank Account Internal ID |
| `TaxDistributionCode1` |  | |  |  | `CHAR(2)` | Tax Code 1 for Distribution |
| `TaxDistributionCode2` |  | |  |  | `CHAR(2)` | Tax Code 2 for Distribution |
| `TaxDistributionCode3` |  | |  |  | `CHAR(2)` | Tax Code 3 for Distribution |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `InvoiceList` |  | |  |  | `NUMC(8)` | Invoice List |
| `BillOfExchangeUsage` |  | |  |  | `CHAR(1)` | Bill of Exchange Usage Type |
| `DunningKey` |  | |  |  | `CHAR(1)` | Dunning Key |
| `DunningBlockingReason` |  | |  |  | `CHAR(1)` | Dunning Block Reason |
| `LastDunningDate` |  | |  |  | `DATS(8)` | Date of Last Dunning Notice |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `DunningArea` |  | |  |  | `CHAR(2)` | Dunning Area |
| `WithholdingTaxCertificate` |  | |  |  | `CHAR(10)` | Withholding Tax Certificate |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Sequential Number of Account Assignment |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | Is completely delivered |
| `MaterialPriceControl` |  | |  |  | `CHAR(1)` | Material Price Control Indicator |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration |
| `DelivOfGoodsDestCountry` |  | |  |  | `CHAR(3)` | Country/Region of Destination for Delivery of Goods |
| `PaymentDifferenceReason` |  | |  |  | `CHAR(3)` | Payment Difference Reason |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVenturePartner` |  | |  |  | `CHAR(10)` | Joint Venture Partner |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Treasury Contract Type |
| `AssetContract` |  | |  |  | `CHAR(13)` | Asset Contract |
| `CashFlowType` |  | |  |  | `CHAR(4)` | Flow Type |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | |  |  | `CHAR(8)` | Internal Key for Real Estate Object |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Reference Date for Settlement |
| `CommitmentItem` |  | |  |  | `CHAR(14)` | Commitment Item |
| `CommitmentItemShortID` |  | |  |  | `CHAR(14)` | Commitment Item ShortID |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `OrderInternalBillOfOperations` |  | |  |  | `NUMC(10)` | Order Internal Bill of Operations ID |
| `OrderIntBillOfOperationsItem` |  | |  |  | `NUMC(8)` | Order Internal Bill of Operations Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `JointVentureBillingType` |  | |  |  | `CHAR(2)` | Joint Venture Billing Type |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Is EU Triangular Deal |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CompanyCodeCurrencyDetnMethod` |  | |  |  | `CHAR(1)` | Company Code Currency Determination Method |
| `ClearingIsReversed` |  | |  |  | `CHAR(1)` | Clearing Is Reversed |
| `PaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment Method Supplement |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `Reference1IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 1 by Business Partner |
| `Reference2IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 2 by Business Partner |
| `IsNegativePosting` |  | |  |  | `CHAR(1)` | Is Negative Posting |
| `PaymentCardItem` |  | |  |  | `NUMC(3)` | Payment Card Item |
| `PaymentCardPaymentSettlement` |  | |  |  | `CHAR(10)` | Payment Card Payment Settlement |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `Reference3IDByBusinessPartner` |  | |  |  | `CHAR(20)` | ID of Reference 3 by Business Partner |
| `DataExchangeInstruction1` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 1 |
| `DataExchangeInstruction2` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 2 |
| `DataExchangeInstruction3` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 3 |
| `DataExchangeInstruction4` |  | |  |  | `NUMC(2)` | Data Exchange Instruction 4 |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `HasPaymentOrder` |  | |  |  | `CHAR(1)` | Indicator: Payment Order Exists for this Item |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `TaxDeterminationDate` |  | |  |  | `DATS(8)` | Date for Determination of Tax Rates |
| `ClearingItem` |  | |  |  | `DEC(5)` | Clearing Item |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `TaxSection` |  | |  |  | `CHAR(4)` | Tax Section |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `AccountsReceivableIsPledged` |  | |  |  | `CHAR(2)` | Accounts Receivable Is Pledged |
| `AcctsReceivablePledgingCode` |  | |  |  | `CHAR(2)` | Accounts Receivable Pledging Code |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` |  | |  |  | `CHAR(30)` | Functional Area Name |
| `CustomerIsInExecution` |  | |  |  | `CHAR(1)` | Customer Is In Execution |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `PaymentServiceProvider` |  | |  |  | `CHAR(4)` | Payment Service Provider |
| `PaymentRefByPaytSrvcProvider` |  | |  |  | `CHAR(35)` | Payment Reference by Payment Service Provider |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Original Reference Document |
| `ReferenceDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Reference Document |
| `AccountingDocumentItemRef` |  | |  |  | `NUMC(10)` | Journal Entry Line Item Reference |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AccountingDocumentCategoryName` |  | |  |  | `CHAR(60)` | Journal Entry Category Name |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  |  | `CHAR(20)` | Document Type Name |
| `NetDueDate` |  | |  |  | `DATS(8)` | Due Date for Net Payment |
| `CashDiscount1DueDate` |  | |  |  | `DATS(8)` | Due Date for Cash Discount 1 |
| `CashDiscount2DueDate` |  | |  |  | `DATS(8)` | Cash Discount 2 Due Date |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountName` |  | |  |  | `CHAR(80)` | Name of Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `BranchCode` |  | |  |  | `CHAR(5)` | Branch Code |
| `JointVentureProductionDate` |  | |  |  | `DATS(8)` | Joint Venture Production Date |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `TaxAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Signed Tax Amount in Company Code Currency |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Company Code Currency |
| `ValuationDiffAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Valuation Difference Amount In Company Code Currency |
| `CashDiscountAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Cash Discount Amount in Company Code Currency |
| `InvoiceAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Invoice Amount in Company Code Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `OriginalTaxBaseAmount` |  | |  |  | `CURR(23)` | Original Tax Base Amount in Transaction Currency |
| `TaxAmount` |  | |  |  | `CURR(23)` | Tax Amount in Transaction Currency |
| `TaxBaseAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Transaction Currency |
| `WithholdingTaxBaseAmount` |  | |  |  | `CURR(23)` | Withholding Tax Base Amount |
| `PlannedAmtInTransactionCrcy` |  | |  |  | `CURR(23)` | Planned Amount in Transaction Currency |
| `CashDiscountBaseAmount` |  | |  |  | `CURR(23)` | Cash Discount Base Amount |
| `CashDiscountAmount` |  | |  |  | `CURR(23)` | Cash Discount Amount |
| `NetPaymentAmount` |  | |  |  | `CURR(23)` | Net Payment Amount |
| `WithholdingTaxAmount` |  | |  |  | `CURR(23)` | Withholding Tax Amount |
| `WithholdingTaxExemptionAmt` |  | |  |  | `CURR(23)` | Withholding Tax-Exemption Amount |
| `InvoiceAmountInFrgnCurrency` |  | |  |  | `CURR(23)` | Invoice Amount in Foreign Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `AdditionalCurrency1` |  | |  |  | `CUKY(5)` | Additional Currency 1 |
| `ValuationDiffAmtInAddlCrcy1` |  | |  |  | `CURR(23)` | Valuation Difference Amount in Additional Currency 1 |
| `AmountInAdditionalCurrency1` |  | |  |  | `CURR(23)` | Amount in Additional Currency 1 |
| `AdditionalCurrency2` |  | |  |  | `CUKY(5)` | Additional Currency 2 |
| `AmountInAdditionalCurrency2` |  | |  |  | `CURR(23)` | Amount in Additional Currency 2 |
| `ValuationDiffAmtInAddlCrcy2` |  | |  |  | `CURR(23)` | Valuation Difference Amount in Additional Currency 2 |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Currency for Automatic Payment |
| `AmountInPaymentCurrency` |  | |  |  | `CURR(23)` | Amount in Payment Currency |
| `CreditControlAreaCurrency` |  | |  |  | `CUKY(5)` | Credit Control Area Currency |
| `HedgedAmount` |  | |  |  | `CURR(23)` | Credit Management: Hedged Amount |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `GoodsMovementEntryUnit` |  | |  |  | `UNIT(3)` | Unit of entry |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(23)` | Quantity in Entry Unit |
| `PurchasingDocumentPriceUnit` |  | |  |  | `UNIT(3)` | Purchasing Document Price Unit |
| `PurchaseOrderQty` |  | |  |  | `QUAN(23)` | Purchase Order Quantity |
| `MaterialPriceUnitQty` |  | |  |  | `DEC(5)` | Material Price Unit Quantity |
| `AbsoluteAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount in Company Code Currency |
| `AbsoluteAmountInTransacCrcy` |  | |  |  | `CURR(23)` | Absolute Amount in Transaction Currency |
| `AbsltAmtInAdditionalCurrency1` |  | |  |  | `CURR(23)` | Absolute Amount in Additional Currency 1 |
| `AbsltAmtInAdditionalCurrency2` |  | |  |  | `CURR(23)` | Absolute Amount in Additional Currency 2 |
| `AbsltAmtInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Absolute Amount in Balance Transaction Currency |
| `AbsltAmtInFunctionalCurrency` |  | |  |  | `CURR(23)` | Absolute Amount in Functional Currency |
| `AbsltAmountInPaymentCurrency` |  | |  |  | `CURR(23)` | Absolute Amount in Payment Currency |
| `HedgedAbsoluteAmount` |  | |  |  | `CURR(23)` | Hedged Absolute Amount |
| `PlannedAbsltAmtInTransCrcy` |  | |  |  | `CURR(23)` | Planned Absolute Amount in Transaction Currency |
| `CashDiscAbsltAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Cash Discount in Company Code Currency |
| `CashDiscountAbsoluteAmount` |  | |  |  | `CURR(23)` | Absolute Amount of Cash Discount |
| `CashDiscountAbsoluteBaseAmount` |  | |  |  | `CURR(23)` | Absolute Base Amount of Cash Discount |
| `InvoiceAbsltAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Invoice in Company Code Currency |
| `InvoiceAbsltAmtInFrgnCurrency` |  | |  |  | `CURR(23)` | Absolute Amount of Invoice in Foreign Currency |
| `NetPaymentAbsoluteAmount` |  | |  |  | `CURR(23)` | Absolute Amount of Net Payment |
| `NonDcblTaxAbsltAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Non-Deductible Tax in Company Code Crcy |
| `NonDcblTaxAbsltAmtInTransCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Non-Deductible Tax in Transaction Crcy |
| `TaxAbsltAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Tax in Company Code Currency |
| `TaxAbsoluteAmount` |  | |  |  | `CURR(23)` | Absolute Amount of Tax in Transaction Currency |
| `TaxAbsltAmtInAddlCurrency1` |  | |  |  | `CURR(23)` | Absolute Amount of Tax in Additional Currency 1 |
| `TaxAbsltAmtInAddlCurrency2` |  | |  |  | `CURR(23)` | Absolute Amount of Tax in Additional Currency 2 |
| `TaxAbsltBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Base Amount of Tax in Company Code Currency |
| `TaxAbsltBaseAmountInTransCrcy` |  | |  |  | `CURR(23)` | Absolute Base Amount of Tax in Transaction Currency |
| `OriglTxAbsltBaseAmountInCCCrcy` |  | |  |  | `CURR(23)` | Absolute Base Amount of Original Tax in CoCode Currency |
| `OriginalTaxAbsoluteBaseAmount` |  | |  |  | `CURR(23)` | Absolute Base Amount of Original Tax |
| `OriglTxAbsltBaseAmtInAddlCrcy1` |  | |  |  | `CURR(23)` | Absolute Base Amount of Original Tax in Additional Crcy 1 |
| `OriglTxAbsltBaseAmtInAddlCrcy2` |  | |  |  | `CURR(23)` | Absolute Base Amount of Original Tax in Additional Crcy 2 |
| `TaxBrkdwnAbsltAmt1InCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Tax Brkdown in Company Code Currency (1) |
| `TaxBrkdwnAbsltAmt2InCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Tax Brkdown in Company Code Currency (2) |
| `TaxBrkdwnAbsltAmt3InCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Tax Brkdown in Company Code Currency (3) |
| `TaxBrkdwnAbsltAmt1InTransCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Tax Breakdown in Transaction Currency (1) |
| `TaxBrkdwnAbsltAmt2InTransCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Tax Breakdown in Transaction Currency (2) |
| `TaxBrkdwnAbsltAmt3InTransCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Tax Breakdown in Transaction Currency (3) |
| `WithholdingTaxAbsoluteAmount` |  | |  |  | `CURR(23)` | Absolute Amount of Withholding Tax |
| `WithholdingTaxAbsoluteBaseAmt` |  | |  |  | `CURR(23)` | Absolute Base Amount of Withholding Tax |
| `WhldgTaxExemptionAbsltAmount` |  | |  |  | `CURR(23)` | Absolute Amount of Withholding Tax Exemption |
| `ValnDiffAbsltAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Absolute Amount of Valuation Difference in CoCode Crcy |
| `ValnDiffAbsltAmtInAddlCrcy1` |  | |  |  | `CURR(23)` | Absolute Amount of Valuation Difference in Additional Crcy 1 |
| `ValnDiffAbsltAmtInAddlCrcy2` |  | |  |  | `CURR(23)` | Absolute Amount of Valuation Difference in Additional Crcy 2 |
| `UnadjustedDebitCreditCode` |  | |  |  | `CHAR(1)` | Unadjusted Debit/Credit Code |
| `NumberOfItems` |  | |  |  | `DEC(12)` | Number of Items |
| `AccountingDocumentCreationDate` |  | |  |  | `DATS(8)` | Accounting Document Entry Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Change Date |
| `JournalEntryLastChangeDateTime` |  | |  |  | `DEC(15)` | Journal Entry Last Change Date Time |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `TransactionCode` |  | |  |  | `CHAR(20)` | Transaction Code |
| `IntercompanyTransaction` |  | |  |  | `CHAR(16)` | Intercompany Transaction Number |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Document Reference ID |
| `RecurringAccountingDocument` |  | |  |  | `CHAR(10)` | Recurring Journal Entry |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document |
| `ReverseDocumentFiscalYear` |  | |  |  | `NUMC(4)` | Reverse Document Fiscal Year |
| `AccountingDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `AbsoluteExchangeRate` |  | |  |  | `DEC(9)` | Absolute Exchange Rate |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `EffectiveExchangeRate` |  | |  |  | `DEC(12)` | Effective Exchange Rate |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BatchInputSession` |  | |  |  | `CHAR(12)` | Batch Input Session |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ReversalIsPlanned` |  | |  |  | `CHAR(1)` | Indicator: Reversal Is Planned for Document |
| `PlannedReversalDate` |  | |  |  | `DATS(8)` | Planned Date for the Reversal Posting |
| `TaxIsCalculatedAutomatically` |  | |  |  | `CHAR(1)` | Tax Is Automatically Calculated |
| `TaxBaseAmountIsNetAmount` |  | |  |  | `CHAR(1)` | Tax Base Amount is Net Amount |
| `SourceCompanyCode` |  | |  |  | `CHAR(4)` | Source Company Code |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `TaxAbsoluteExchangeRate` |  | |  |  | `DEC(9)` | Absolute Tax Exchange Rate |
| `TaxExchangeRate` |  | |  |  | `DEC(9)` | Tax Exchange Rate |
| `TaxExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Tax Exchange Rate Is Indirect Quotation |
| `TaxEffectiveExchangeRate` |  | |  |  | `DEC(12)` | Effective Tax Exchange Rate |
| `ReversalReason` |  | |  |  | `CHAR(2)` | Reason for Reversal or Inverse Posting |
| `Branch` |  | |  |  | `CHAR(4)` | Branch |
| `Reference1InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `InvoiceReceiptDate` |  | |  |  | `DATS(8)` | Invoice Receipt Date |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Ledger Group |
| `AlternativeReferenceDocument` |  | |  |  | `CHAR(26)` | Alternative Reference Document |
| `TaxReportingDate` |  | |  |  | `DATS(8)` | Tax Reporting Date |
| `AccountingDocumentClass` |  | |  |  | `CHAR(6)` | Accounting Document Class |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `LatePaymentReason` |  | |  |  | `CHAR(2)` | Late Payment Reason |
| `SalesDocumentCondition` |  | |  |  | `CHAR(10)` | Sales Document Condition |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
