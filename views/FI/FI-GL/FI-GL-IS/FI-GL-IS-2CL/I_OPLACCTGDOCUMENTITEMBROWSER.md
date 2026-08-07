---
name: I_OPLACCTGDOCUMENTITEMBROWSER
description: Operational Item for Browser
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPLACCTGDOCUMENTITEMBROWSER')/$value
semantic_en: Operational Item for Browser
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_OPLACCTGDOCUMENTITEMBROWSER

**Operational Item for Browser**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPLACCTGDOCUMENTITEMBROWSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentCatGroup` |  | |  |  | `CHAR(1)` | Journal Entry Category Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingCreationDate` |  | |  |  | `DATS(8)` | Clearing Creation Date |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `SpecialGLTransactionType` |  | |  |  | `CHAR(1)` | Special G/L Transaction Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
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
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
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
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
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
| `DunningBlockingReason` |  | |  |  | `CHAR(1)` | Dunning Blocking Reason |
| `LastDunningDate` |  | |  |  | `DATS(8)` | Date of Last Dunning Notice |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `DunningArea` |  | |  |  | `CHAR(2)` | Dunning Area |
| `WithholdingTaxCertificate` |  | |  |  | `CHAR(10)` | Withholding Tax Certificate |
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
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
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
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Is EU Triangular Deal |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CompanyCodeCurrencyDetnMethod` |  | |  |  | `CHAR(1)` | Company Code Currency Determination Method |
| `ClearingIsReversed` |  | |  |  | `CHAR(1)` | Clearing Is Reversed |
| `PaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment Method Supplement |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
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
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CustomerIsInExecution` |  | |  |  | `CHAR(1)` | Customer Is In Execution |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
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
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `NetDueDate` |  | |  |  | `DATS(8)` | Due Date for Net Payment |
| `CashDiscount1DueDate` |  | |  |  | `DATS(8)` | Due Date for Cash Discount 1 |
| `CashDiscount2DueDate` |  | |  |  | `DATS(8)` | Cash Discount 2 Due Date |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
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
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `TaxAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Signed Tax Amount in Company Code Currency |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Company Code Currency |
| `ValuationDiffAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Valuation Difference Amount In Company Code Currency |
| `CashDiscountAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Cash Discount Amount in Company Code Currency |
| `InvoiceAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Invoice Amount in Company Code Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
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
| `AbsoluteQuantity` |  | |  |  | `QUAN(23)` | Absolute Quantity |
| `GoodsMovementEntryUnit` |  | |  |  | `UNIT(3)` | Unit of entry |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(23)` | Quantity in Entry Unit |
| `PurchasingDocumentPriceUnit` |  | |  |  | `UNIT(3)` | Purchasing Document Price Unit |
| `PurchaseOrderQty` |  | |  |  | `QUAN(23)` | Purchase Order Quantity |
| `MaterialPriceUnitQty` |  | |  |  | `DEC(5)` | Material Price Unit Quantity |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Ledger Group |
| `NumberOfItems` |  | |  |  | `DEC(12)` | Number of Items |
| `ClearingStatusSelection` |  | |  |  | `CHAR(1)` | Clearing Status Selection |
