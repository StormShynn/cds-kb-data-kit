---
name: I_OPLACCTGDOCUMENTITEMBROWSER
description: "Operational Item for Browser"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPLACCTGDOCUMENTITEMBROWSER')/$value
semantic_en: "Operational Item for Browser"
semantic_vi: "Operational Item for Browser — CDS view giao diện dựa trên P_OperationalAcctgDocBrowser."
keywords:
  - "operational"
  - "item"
  - "for"
  - "browser"
  - "accounting"
  - "document"
  - "group"
  - "company"
  - "code"
  - "fiscal"
  - "year"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_OPLACCTGDOCUMENTITEMBROWSER

**Operational Item for Browser**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPLACCTGDOCUMENTITEMBROWSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentCatGroup` | ✓ | |  |  | `CHAR(1)` | Journal Entry Category Group |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
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
| `DunningBlockingReason` |  | |  |  | `CHAR(1)` | Dunning Block Reason |
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
| `ProfitabilitySegment` |  | |  | `cast( case when P_OperationalAcctgDocBrowser.ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( P_OperationalAcctgDocBrowser.ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` | `NUMC(10)` | Deprecated: Profitability Segment |
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
| `_AccountingDocumentCatGroup` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerCompany_2` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingDocumentCatGroup` | `I_AccountingDocumentCatGroup` | [0..1] |
| `_PartnerCompany` | `I_CompanyCode` | [0..1] |
| `_PartnerCompany_2` | `I_Partnercompany` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_FunctionalCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPLACCTGDOCUMENTITEMBROWSER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPLACCTGDOCUMENTITEMBROWSER')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Operational Item for Browser'

@AccessControl: {authorizationCheck: #CHECK,
                 personalData.blocking: #REQUIRED }
@VDM.viewType: #COMPOSITE
@ObjectModel: { representativeKey: 'AccountingDocumentItem',
                usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D, 
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #NONE }
@Analytics.technicalName: 'IFIOPACCTGDCBRWS'                
@Analytics: { internalName: #LOCAL }
@Metadata: { ignorePropagatedAnnotations: true,  
             allowExtensions:true }
@AccessControl.auditFilter: #ENABLED

define view entity I_OplAcctgDocumentItemBrowser 
            with parameters P_ClearingStatusSelection   : fis_clearingstatusselection  
                                                                                                        
as select from P_OperationalAcctgDocBrowser ( P_ClearingStatusSelection: $parameters.P_ClearingStatusSelection ) 

  association [0..1] to I_AccountingDocumentCatGroup   as _AccountingDocumentCatGroup      on  $projection.AccountingDocumentCatGroup = _AccountingDocumentCatGroup.AccountingDocumentCatGroup
  association [0..1] to I_CompanyCode                  as _PartnerCompany                  on  $projection.PartnerCompany = _PartnerCompany.CompanyCode
  association [0..1] to I_Partnercompany               as _PartnerCompany_2                on  $projection.PartnerCompany = _PartnerCompany_2.PartnerCompany  
  association [1..1] to I_Currency                     as _CompanyCodeCurrency             on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                     as _FunctionalCurrency              on  $projection.FunctionalCurrency = _FunctionalCurrency.Currency  
{  
@Consumption.hidden: true
@ObjectModel.foreignKey.association: '_AccountingDocumentCatGroup'
key P_OperationalAcctgDocBrowser.AccountingDocumentCatGroup,
@ObjectModel.foreignKey.association: '_CompanyCode'
key P_OperationalAcctgDocBrowser.CompanyCode,
@ObjectModel.foreignKey.association: '_FiscalYear'
key P_OperationalAcctgDocBrowser.FiscalYear,
@ObjectModel.foreignKey.association: '_JournalEntry'
key P_OperationalAcctgDocBrowser.AccountingDocument,
key P_OperationalAcctgDocBrowser.AccountingDocumentItem,


@ObjectModel.foreignKey.association: '_ChartOfAccounts'
P_OperationalAcctgDocBrowser.ChartOfAccounts,
P_OperationalAcctgDocBrowser.ClearingDate,
P_OperationalAcctgDocBrowser.ClearingCreationDate,
P_OperationalAcctgDocBrowser.ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry'
P_OperationalAcctgDocBrowser.ClearingAccountingDocument,

P_OperationalAcctgDocBrowser.PostingKey,
@ObjectModel.foreignKey.association: '_FinancialAccountType'
P_OperationalAcctgDocBrowser.FinancialAccountType,
P_OperationalAcctgDocBrowser.SpecialGLCode,
P_OperationalAcctgDocBrowser.SpecialGLTransactionType,
P_OperationalAcctgDocBrowser.DebitCreditCode,
@ObjectModel.foreignKey.association: '_BusinessArea'
P_OperationalAcctgDocBrowser.BusinessArea,
P_OperationalAcctgDocBrowser.PartnerBusinessArea,
P_OperationalAcctgDocBrowser.TaxCode,
P_OperationalAcctgDocBrowser.WithholdingTaxCode,
P_OperationalAcctgDocBrowser.TaxType,
P_OperationalAcctgDocBrowser.TransactionTypeDetermination,
P_OperationalAcctgDocBrowser.ValueDate,
P_OperationalAcctgDocBrowser.AssignmentReference,
P_OperationalAcctgDocBrowser.DocumentItemText,
P_OperationalAcctgDocBrowser.PartnerCompany,
P_OperationalAcctgDocBrowser.FinancialTransactionType,
P_OperationalAcctgDocBrowser.CorporateGroupAccount,
P_OperationalAcctgDocBrowser.PlanningLevel,
@ObjectModel.foreignKey.association: '_ControllingArea'
P_OperationalAcctgDocBrowser.ControllingArea,
@ObjectModel.foreignKey.association: '_CostCenter'
P_OperationalAcctgDocBrowser.CostCenter,
//ProjectInternalID,   -- to be retrieved later from WBS Element
@ObjectModel.foreignKey.association: '_Order' 
P_OperationalAcctgDocBrowser.OrderID,    
P_OperationalAcctgDocBrowser.BillingDocument,
P_OperationalAcctgDocBrowser.SalesDocument,
P_OperationalAcctgDocBrowser.SalesDocumentItem,
P_OperationalAcctgDocBrowser.ScheduleLine,
P_OperationalAcctgDocBrowser.ServiceDocumentType,
P_OperationalAcctgDocBrowser.ServiceDocument,
P_OperationalAcctgDocBrowser.ServiceDocumentItem,
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
P_OperationalAcctgDocBrowser.MasterFixedAsset,
@ObjectModel.foreignKey.association: '_FixedAsset'
P_OperationalAcctgDocBrowser.FixedAsset,
@ObjectModel.foreignKey.association: '_AssetTransactionType'
P_OperationalAcctgDocBrowser.AssetTransactionType,
P_OperationalAcctgDocBrowser.AssetValueDate,
P_OperationalAcctgDocBrowser.PersonnelNumber,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsSalesRelated,
//xhres,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.LineItemDisplayIsEnabled,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsOpenItemManaged,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsNotCashDiscountLiable,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsAutomaticallyCreated,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsUsedInPaymentTransaction,
P_OperationalAcctgDocBrowser.OperationalGLAccount,
@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
P_OperationalAcctgDocBrowser.GLAccount,
P_OperationalAcctgDocBrowser.Customer,
P_OperationalAcctgDocBrowser.Supplier,
P_OperationalAcctgDocBrowser.BranchAccount,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsBalanceSheetAccount,
P_OperationalAcctgDocBrowser.ProfitLossAccountType,
P_OperationalAcctgDocBrowser.SpecialGLAccountAssignment,
P_OperationalAcctgDocBrowser.DueCalculationBaseDate,
P_OperationalAcctgDocBrowser.PaymentTerms,
P_OperationalAcctgDocBrowser.CashDiscount1Days,
P_OperationalAcctgDocBrowser.CashDiscount2Days,
P_OperationalAcctgDocBrowser.NetPaymentDays,
P_OperationalAcctgDocBrowser.CashDiscount1Percent,   //  ?????????
P_OperationalAcctgDocBrowser.CashDiscount2Percent,  //  ??????
P_OperationalAcctgDocBrowser.PaymentMethod,
P_OperationalAcctgDocBrowser.PaymentBlockingReason,
P_OperationalAcctgDocBrowser.FixedCashDiscount,
P_OperationalAcctgDocBrowser.HouseBank,
P_OperationalAcctgDocBrowser.BPBankAccountInternalID,
P_OperationalAcctgDocBrowser.TaxDistributionCode1,
P_OperationalAcctgDocBrowser.TaxDistributionCode2,
P_OperationalAcctgDocBrowser.TaxDistributionCode3, 
P_OperationalAcctgDocBrowser.InvoiceReference,
P_OperationalAcctgDocBrowser.InvoiceReferenceFiscalYear,
P_OperationalAcctgDocBrowser.InvoiceItemReference,
P_OperationalAcctgDocBrowser.FollowOnDocumentType,
P_OperationalAcctgDocBrowser.StateCentralBankPaymentReason,
P_OperationalAcctgDocBrowser.SupplyingCountry,
P_OperationalAcctgDocBrowser.InvoiceList,
P_OperationalAcctgDocBrowser.BillOfExchangeUsage,
P_OperationalAcctgDocBrowser.DunningKey,
P_OperationalAcctgDocBrowser.DunningBlockingReason,
P_OperationalAcctgDocBrowser.LastDunningDate,
P_OperationalAcctgDocBrowser.DunningLevel,
P_OperationalAcctgDocBrowser.DunningArea,
P_OperationalAcctgDocBrowser.WithholdingTaxCertificate,
@ObjectModel.foreignKey.association: '_Product'
P_OperationalAcctgDocBrowser.Product,
@ObjectModel.foreignKey.association: '_Plant'
P_OperationalAcctgDocBrowser.Plant,
@ObjectModel.foreignKey.association: '_PurchasingDocument'
P_OperationalAcctgDocBrowser.PurchasingDocument,
@ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
P_OperationalAcctgDocBrowser.PurchasingDocumentItem,
P_OperationalAcctgDocBrowser.AccountAssignmentNumber,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsCompletelyDelivered,
P_OperationalAcctgDocBrowser.MaterialPriceControl,
@ObjectModel.foreignKey.association: '_ValuationArea'
P_OperationalAcctgDocBrowser.ValuationArea,
P_OperationalAcctgDocBrowser.InventoryValuationType,
P_OperationalAcctgDocBrowser.VATRegistration,
P_OperationalAcctgDocBrowser.DelivOfGoodsDestCountry,
P_OperationalAcctgDocBrowser.PaymentDifferenceReason,
@ObjectModel.foreignKey.association: '_ProfitCenter'
P_OperationalAcctgDocBrowser.ProfitCenter,
P_OperationalAcctgDocBrowser.JointVenture,
P_OperationalAcctgDocBrowser.JointVentureCostRecoveryCode,
P_OperationalAcctgDocBrowser.JointVentureEquityGroup,
P_OperationalAcctgDocBrowser.TreasuryContractType,
P_OperationalAcctgDocBrowser.AssetContract,
P_OperationalAcctgDocBrowser.CashFlowType,
//depot,
P_OperationalAcctgDocBrowser.TaxJurisdiction,

//@ObjectModel.foreignKey.association: '_REObjectByIntFinNumber'
P_OperationalAcctgDocBrowser.REInternalFinNumber,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'REInternalFinNumber'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'REInternalFinNumber'
P_OperationalAcctgDocBrowser.RealEstateObject,

P_OperationalAcctgDocBrowser.SettlementReferenceDate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'CommitmentItemShortID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'CommitmentItemShortID'
P_OperationalAcctgDocBrowser.CommitmentItem,
P_OperationalAcctgDocBrowser.CommitmentItemShortID,
P_OperationalAcctgDocBrowser.CostObject,
@ObjectModel.foreignKey.association: '_ProjectNetwork'
P_OperationalAcctgDocBrowser.ProjectNetwork,
P_OperationalAcctgDocBrowser.OrderInternalBillOfOperations,
P_OperationalAcctgDocBrowser.OrderIntBillOfOperationsItem,
P_OperationalAcctgDocBrowser.WBSElementInternalID,

@API.element.releaseState: #DECOMMISSIONED
@API.element.successor:    'ProfitabilitySegment_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProfitabilitySegment_2'
cast( case when P_OperationalAcctgDocBrowser.ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( P_OperationalAcctgDocBrowser.ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )  as ProfitabilitySegment,
P_OperationalAcctgDocBrowser.ProfitabilitySegment_2, 

P_OperationalAcctgDocBrowser.JointVentureEquityType,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsEUTriangularDeal,
P_OperationalAcctgDocBrowser.CostOriginGroup,
P_OperationalAcctgDocBrowser.CompanyCodeCurrencyDetnMethod,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.ClearingIsReversed,
P_OperationalAcctgDocBrowser.PaymentMethodSupplement,
P_OperationalAcctgDocBrowser.AlternativeGLAccount,
P_OperationalAcctgDocBrowser.PartnerProfitCenter,
P_OperationalAcctgDocBrowser.Reference1IDByBusinessPartner,
P_OperationalAcctgDocBrowser.Reference2IDByBusinessPartner,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.IsNegativePosting,
P_OperationalAcctgDocBrowser.PaymentCardItem,
P_OperationalAcctgDocBrowser.PaymentCardPaymentSettlement,
P_OperationalAcctgDocBrowser.CreditControlArea,
P_OperationalAcctgDocBrowser.Reference3IDByBusinessPartner,
P_OperationalAcctgDocBrowser.DataExchangeInstruction1,
P_OperationalAcctgDocBrowser.DataExchangeInstruction2,
P_OperationalAcctgDocBrowser.DataExchangeInstruction3,
P_OperationalAcctgDocBrowser.DataExchangeInstruction4,
P_OperationalAcctgDocBrowser.Region,
P_OperationalAcctgDocBrowser.HasPaymentOrder,
P_OperationalAcctgDocBrowser.PaymentReference,
P_OperationalAcctgDocBrowser.TaxDeterminationDate,
P_OperationalAcctgDocBrowser.ClearingItem,
P_OperationalAcctgDocBrowser.BusinessPlace,
P_OperationalAcctgDocBrowser.TaxSection,
@ObjectModel.foreignKey.association: '_CostCtrActivityType'
P_OperationalAcctgDocBrowser.CostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'AcctsReceivablePledgingCode'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'AcctsReceivablePledgingCode'
P_OperationalAcctgDocBrowser.AccountsReceivableIsPledged,
P_OperationalAcctgDocBrowser.AcctsReceivablePledgingCode,
@ObjectModel.foreignKey.association: '_BusinessProcess'
P_OperationalAcctgDocBrowser.BusinessProcess,
@ObjectModel.foreignKey.association: '_FunctionalArea'
P_OperationalAcctgDocBrowser.FunctionalArea,
//@Semantics.booleanIndicator
P_OperationalAcctgDocBrowser.CustomerIsInExecution,
P_OperationalAcctgDocBrowser.ClearingJournalEntryFiscalYear,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
P_OperationalAcctgDocBrowser.ClearingDocFiscalYear,
P_OperationalAcctgDocBrowser.LedgerGLLineItem,
@ObjectModel.foreignKey.association: '_Segment'
P_OperationalAcctgDocBrowser.Segment,
P_OperationalAcctgDocBrowser.PartnerSegment,
P_OperationalAcctgDocBrowser.PartnerFunctionalArea,
P_OperationalAcctgDocBrowser.HouseBankAccount,
P_OperationalAcctgDocBrowser.CostElement,
P_OperationalAcctgDocBrowser.PaymentServiceProvider,
P_OperationalAcctgDocBrowser.PaymentRefByPaytSrvcProvider,
P_OperationalAcctgDocBrowser.SEPAMandate,
P_OperationalAcctgDocBrowser.ReferenceDocumentType,
P_OperationalAcctgDocBrowser.OriginalReferenceDocument,
P_OperationalAcctgDocBrowser.ReferenceDocumentLogicalSystem,
P_OperationalAcctgDocBrowser.AccountingDocumentItemRef,
P_OperationalAcctgDocBrowser.FiscalPeriod,
P_OperationalAcctgDocBrowser.AccountingDocumentCategory,
P_OperationalAcctgDocBrowser.PostingDate,
P_OperationalAcctgDocBrowser.DocumentDate,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
P_OperationalAcctgDocBrowser.AccountingDocumentType,
P_OperationalAcctgDocBrowser.NetDueDate,
P_OperationalAcctgDocBrowser.CashDiscount1DueDate,
P_OperationalAcctgDocBrowser.CashDiscount2DueDate,
P_OperationalAcctgDocBrowser.OffsettingAccount,
P_OperationalAcctgDocBrowser.OffsettingAccountType,
P_OperationalAcctgDocBrowser.OffsettingChartOfAccounts,

@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
P_OperationalAcctgDocBrowser.CashLedgerCompanyCode,

@ObjectModel.foreignKey.association: '_CashLedgerAccount'
P_OperationalAcctgDocBrowser.CashLedgerAccount,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
//      @ObjectModel.text.association: '_FinancialManagementAreaText'
@ObjectModel.foreignKey.association: '_FinancialManagementArea'
P_OperationalAcctgDocBrowser.FinancialManagementArea,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FundsCenterStdVH',
                     element: 'FundsCenter' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
@ObjectModel.foreignKey.association: '_FundsCenter'
P_OperationalAcctgDocBrowser.FundsCenter,

@ObjectModel.foreignKey.association: '_FundedProgram'
P_OperationalAcctgDocBrowser.FundedProgram,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FundStdVH',
                     element: 'Fund' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
//      @ObjectModel.text.association: '_FundText'
@ObjectModel.foreignKey.association: '_Fund'
P_OperationalAcctgDocBrowser.Fund,

@Analytics.internalName: #LOCAL      
@ObjectModel.foreignKey.association: '_Grant'
P_OperationalAcctgDocBrowser.GrantID,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BudgetPeriodStdVH',
                     element: 'BudgetPeriod' }
        }]
//      @ObjectModel.text.association: '_BudgetPeriodText'
@ObjectModel.foreignKey.association: '_BudgetPeriod'
P_OperationalAcctgDocBrowser.BudgetPeriod,

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FundStdVH',
                     element: 'Fund' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
//      @ObjectModel.text.association: '_PartnerFundText'
@ObjectModel.foreignKey.association: '_PartnerFund'
P_OperationalAcctgDocBrowser.PartnerFund,

@Analytics.internalName: #LOCAL      
@ObjectModel.foreignKey.association: '_PartnerGrant'
P_OperationalAcctgDocBrowser.PartnerGrant,

@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
P_OperationalAcctgDocBrowser.PartnerBudgetPeriod,

@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
P_OperationalAcctgDocBrowser.PubSecBudgetAccount,

@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
P_OperationalAcctgDocBrowser.PubSecBudgetAccountCoCode,

P_OperationalAcctgDocBrowser.CompanyCodeCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } P_OperationalAcctgDocBrowser.AmountInCompanyCodeCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } P_OperationalAcctgDocBrowser.TaxAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } P_OperationalAcctgDocBrowser.TaxBaseAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } P_OperationalAcctgDocBrowser.ValuationDiffAmtInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } P_OperationalAcctgDocBrowser.CashDiscountAmtInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } P_OperationalAcctgDocBrowser.InvoiceAmtInCoCodeCrcy,

P_OperationalAcctgDocBrowser.FunctionalCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
P_OperationalAcctgDocBrowser.AmountInFunctionalCurrency,  

@ObjectModel.foreignKey.association: '_TransactionCurrency'
P_OperationalAcctgDocBrowser.TransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.AmountInTransactionCurrency, 

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.OriginalTaxBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.TaxAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.TaxBaseAmountInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.WithholdingTaxBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.PlannedAmtInTransactionCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.CashDiscountBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.CashDiscountAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.NetPaymentAmount,
 
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.WithholdingTaxAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.WithholdingTaxExemptionAmt,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_OperationalAcctgDocBrowser.InvoiceAmountInFrgnCurrency,

P_OperationalAcctgDocBrowser.BalanceTransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } P_OperationalAcctgDocBrowser.AmountInBalanceTransacCrcy,

P_OperationalAcctgDocBrowser.AdditionalCurrency1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } P_OperationalAcctgDocBrowser.ValuationDiffAmtInAddlCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } P_OperationalAcctgDocBrowser.AmountInAdditionalCurrency1,

P_OperationalAcctgDocBrowser.AdditionalCurrency2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } P_OperationalAcctgDocBrowser.AmountInAdditionalCurrency2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } P_OperationalAcctgDocBrowser.ValuationDiffAmtInAddlCrcy2,

P_OperationalAcctgDocBrowser.PaymentCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'PaymentCurrency'} } P_OperationalAcctgDocBrowser.AmountInPaymentCurrency,

P_OperationalAcctgDocBrowser.CreditControlAreaCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CreditControlAreaCurrency'} } P_OperationalAcctgDocBrowser.HedgedAmount,                                                                                                     
   
@ObjectModel.foreignKey.association: '_BaseUnit'
P_OperationalAcctgDocBrowser.BaseUnit,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
P_OperationalAcctgDocBrowser.Quantity,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} } P_OperationalAcctgDocBrowser.AbsoluteQuantity, 

P_OperationalAcctgDocBrowser.GoodsMovementEntryUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'GoodsMovementEntryUnit'} } P_OperationalAcctgDocBrowser.QuantityInEntryUnit,

P_OperationalAcctgDocBrowser.PurchasingDocumentPriceUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'PurchasingDocumentPriceUnit'} } P_OperationalAcctgDocBrowser.PurchaseOrderQty,

//      @DefaultAggregation: #NONE   // Is default for Type DEC unsigned and 0 decimals in SADL, in AE it will be treated as characteristic 
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
P_OperationalAcctgDocBrowser.MaterialPriceUnitQty,

P_OperationalAcctgDocBrowser.Ledger,
P_OperationalAcctgDocBrowser.LedgerGroup,

P_OperationalAcctgDocBrowser.NumberOfItems,

P_OperationalAcctgDocBrowser.ClearingStatusSelection,

    _AccountingDocumentCatGroup,
    P_OperationalAcctgDocBrowser._CompanyCode,
    _CompanyCodeCurrency,
    _FunctionalCurrency,
    P_OperationalAcctgDocBrowser._FiscalYear,
    P_OperationalAcctgDocBrowser._JournalEntry,
    P_OperationalAcctgDocBrowser._GLAccountInChartOfAccounts,
    P_OperationalAcctgDocBrowser._ChartOfAccounts,
    P_OperationalAcctgDocBrowser._PostingKey,
    P_OperationalAcctgDocBrowser._FinancialAccountType,
    P_OperationalAcctgDocBrowser._DebitCreditCode,
    P_OperationalAcctgDocBrowser._BusinessArea,
    P_OperationalAcctgDocBrowser._PartnerBusinessArea,
    P_OperationalAcctgDocBrowser._TaxType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerCompany_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerCompany_2'   
    _PartnerCompany,
    _PartnerCompany_2,
    P_OperationalAcctgDocBrowser._ControllingArea,
    P_OperationalAcctgDocBrowser._ProfitCenter,
    P_OperationalAcctgDocBrowser._CostCenter,
    P_OperationalAcctgDocBrowser._SupplyingCountry,
    P_OperationalAcctgDocBrowser._Product,
    P_OperationalAcctgDocBrowser._Plant,
    P_OperationalAcctgDocBrowser._BaseUnit,
    P_OperationalAcctgDocBrowser._InventoryValuationType,
    P_OperationalAcctgDocBrowser._PaymentDifferenceReason,
    P_OperationalAcctgDocBrowser._Segment,
    P_OperationalAcctgDocBrowser._PartnerSegment,
    P_OperationalAcctgDocBrowser._WBSElementBasicData,
    P_OperationalAcctgDocBrowser._AccountingDocumentType,
    P_OperationalAcctgDocBrowser._TransactionCurrency,
    P_OperationalAcctgDocBrowser._InternalOrder,
    P_OperationalAcctgDocBrowser._Order,
    P_OperationalAcctgDocBrowser._MasterFixedAsset,
    P_OperationalAcctgDocBrowser._FixedAsset,
    P_OperationalAcctgDocBrowser._AssetTransactionType,
    P_OperationalAcctgDocBrowser._PurchasingDocument,
    P_OperationalAcctgDocBrowser._PurchasingDocumentItem,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
    P_OperationalAcctgDocBrowser._ValuationArea,
    P_OperationalAcctgDocBrowser._ProjectNetwork,
    P_OperationalAcctgDocBrowser._CostCtrActivityType,
    P_OperationalAcctgDocBrowser._BusinessProcess,
    P_OperationalAcctgDocBrowser._FunctionalArea,

    P_OperationalAcctgDocBrowser._AdditionalCurrencyRoles,    
    
    P_OperationalAcctgDocBrowser._CurrentCostCenter,
    P_OperationalAcctgDocBrowser._CurrentProfitCenter,
    P_OperationalAcctgDocBrowser._Customer,
    P_OperationalAcctgDocBrowser._CustomerCompany,
    P_OperationalAcctgDocBrowser._GLAccountInCompanyCode,
    P_OperationalAcctgDocBrowser._SalesDocument,
    P_OperationalAcctgDocBrowser._ServiceDocument,
    P_OperationalAcctgDocBrowser._Supplier,       
    P_OperationalAcctgDocBrowser._SupplierCompany,       
    
    P_OperationalAcctgDocBrowser._FinancialManagementArea,
    P_OperationalAcctgDocBrowser._FundsCenter,
    P_OperationalAcctgDocBrowser._Fund,
    P_OperationalAcctgDocBrowser._PartnerFund,
    P_OperationalAcctgDocBrowser._FundedProgram,
    P_OperationalAcctgDocBrowser._CashLedgerCompanyCode,
    P_OperationalAcctgDocBrowser._CashLedgerAccount,
    P_OperationalAcctgDocBrowser._BudgetPeriod,
    P_OperationalAcctgDocBrowser._PartnerBudgetPeriod,
    P_OperationalAcctgDocBrowser._Grant,
    P_OperationalAcctgDocBrowser._PartnerGrant,
    P_OperationalAcctgDocBrowser._PubSecBudgetAccountCoCode,
    P_OperationalAcctgDocBrowser._PubSecBudgetAccount
    
//    _REObjectByIntFinNumber
}
```
