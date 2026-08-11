---
name: I_OPERATIONALACCTGDOCCUBE
description: "Operational Journal Entry Item - Cube"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONALACCTGDOCCUBE')/$value
semantic_en: "Operational Journal Entry Item - Cube"
semantic_vi: "Operational Journal Entry Item - Cube — CDS view giao diện dựa trên I_OperationalAcctgDocItem."
keywords:
  - "operational"
  - "journal"
  - "entry"
  - "item"
  - "cube"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "name"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_OPERATIONALACCTGDOCCUBE

**Operational Journal Entry Item - Cube**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONALACCTGDOCCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `CompanyCodeName` |  | |  | `cast( I_OperationalAcctgDocItem._CompanyCode.CompanyCodeName as fis_butxt preserving type )` | `CHAR(25)` | Company Code Name |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AccountingDocumentItemType` |  | |  |  | `CHAR(1)` | Identification of the Line Item |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingCreationDate` |  | |  |  | `DATS(8)` | Clearing Creation Date |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `IsCleared` |  | |  | `cast( ( case I_OperationalAcctgDocItem.ClearingDate when '00000000' then ' ' else 'X' end ) as fis_xaugp preserving type )` | `CHAR(1)` | Clearing Status: Is Cleared |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `SpecialGLTransactionType` |  | |  |  | `CHAR(1)` | Special G/L Transaction Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessAreaName` |  | |  | `cast( I_OperationalAcctgDocItem._BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )` | `CHAR(30)` | Business Area Name |
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
| `ControllingAreaName` |  | |  | `cast( I_OperationalAcctgDocItem._ControllingArea.ControllingAreaName as fis_bezei preserving type )` | `CHAR(25)` | Controlling Area Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  | `cast( I_OperationalAcctgDocItem._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_kostl_name preserving type )` | `CHAR(20)` | Cost Center Name |
| `Project` |  | |  | `cast( _WBSElementBasicData._Project.Project as fis_project preserving type )` | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  | `cast( _WBSElementBasicData._Project.ProjectExternalID as fis_projectext_no_conv preserving type )` | `CHAR(24)` | Project External ID |
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
| `GLAccountName` |  | |  | `cast( I_OperationalAcctgDocItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )` | `CHAR(30)` | G/L Account Name |
| `GLAccountLongName` |  | |  | `cast( I_OperationalAcctgDocItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat preserving type )` | `CHAR(50)` | G/L Account Long Name |
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
| `ProfitCenterName` |  | |  | `I_OperationalAcctgDocItem._ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
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
| `WBSElement` |  | |  | `cast( _WBSElementBasicData.WBSElement as fis_wbs preserving type )` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  | `cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` | `CHAR(24)` | WBS Element External ID |
| `ProfitabilitySegment` |  | |  | `cast( case when I_OperationalAcctgDocItem.ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` | `NUMC(10)` | Deprecated: Profitability Segment |
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
| `FunctionalAreaName` |  | |  | `cast( I_OperationalAcctgDocItem._FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )` | `CHAR(30)` | Functional Area Name |
| `CustomerIsInExecution` |  | |  |  | `CHAR(1)` | Customer Is In Execution |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` |  | |  | `_Segment._Text[1: Language = $session.system_language].SegmentName` | `CHAR(50)` | Segment Name |
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
| `AccountingDocumentCategoryName` |  | |  | `cast( I_OperationalAcctgDocItem._AccountingDocumentCategory._Text[1: Language = $session.system_language].AccountingDocumentCategoryName as fis_bstat_name preserving type )` | `CHAR(60)` | Journal Entry Category Name |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  | `I_OperationalAcctgDocItem._AccountingDocumentType._Text[1: Language = $session.system_language].AccountingDocumentTypeName` | `CHAR(20)` | Document Type Name |
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
| `_BusinessTransactionTypeText` | | ✓ | | | | |
| `_FinancialManagementAreaText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_AdditionalCurrencyRoles` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessTransactionTypeText` | `I_BusTransactionTypeText` | [0..*] |
| `_FinancialManagementAreaText` | `I_FinancialManagementAreaText` | [0..*] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementText` | `I_WBSElement` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_AdditionalCurrencyRoles` | `I_AdditionalCurrencyRoles` | [0..1] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_FundedProgram` | `I_FundedProgram` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_PartnerFund` | `I_Fund` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONALACCTGDOCCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPERATIONALACCTGDOCCUBE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Operational Journal Entry Item - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'AccountingDocumentItem'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
//@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIOPACCTGDOCCUB'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@AccessControl.personalData.blocking: #REQUIRED

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@AccessControl.privilegedAssociations: ['_AccountingDocumentTypeText','_BudgetPeriodText','_BusinessTransactionTypeText','_BusinessAreaText','_PartnerBusinessAreaText',
                                        '_BusinessProcessText','_ChartOfAccountsText','_OffsettingChartOfAccountsText','_PartnerCompanyText_2','_ControllingAreaText',
                                        '_CustomerText','_FinancialManagementAreaText','_FinancialAccountTypeText','_OffsettingAccountTypeText','_FixedAssetText',
                                        '_HouseBankAccountText','_LedgerText','_MasterFixedAssetText','_ProductText','_ProjectNetworkText','_PartnerSegmentText',
                                        '_SegmentText','_SupplierText','_WBSElementBasicDataText','_WBSElementExternalIDText']
// ]--GENERATED

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, 
//                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@AccessControl.auditFilter: #ENABLED                                     
define view entity I_OperationalAcctgDocCube
  as select from I_OperationalAcctgDocItem as I_OperationalAcctgDocItem
  /*inner join I_JournalEntry
                                                  on   I_OperationalAcctgDocItem.CompanyCode        = I_JournalEntry.CompanyCode
                                                  and  I_OperationalAcctgDocItem.AccountingDocument = I_JournalEntry.AccountingDocument
                                                  and  I_OperationalAcctgDocItem.FiscalYear         = I_JournalEntry.FiscalYear
  */
  association [0..*] to I_BusTransactionTypeText      as _BusinessTransactionTypeText   on $projection.BusinessTransactionType = _BusinessTransactionTypeText.BusinessTransactionType
  association [0..*] to I_FinancialManagementAreaText as _FinancialManagementAreaText   on $projection.FinancialManagementArea = _FinancialManagementAreaText.FinancialManagementArea
  association [0..*] to I_LedgerText                  as _LedgerText                    on $projection.Ledger = _LedgerText.Ledger
    
  association [0..1] to I_WBSElement                  as _WBSElement                    on $projection.WBSElement = _WBSElement.WBSElement
  association [0..1] to I_WBSElement                  as _WBSElementText                on $projection.WBSElement = _WBSElementText.WBSElement
  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData           on $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID  
  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicDataText       on $projection.WBSElementInternalID = _WBSElementBasicDataText.WBSElementInternalID 
  association [0..1] to I_WBSElementByExternalID      as _WBSElementExternalID          on $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID 
  association [0..1] to I_WBSElementByExternalID      as _WBSElementExternalIDText      on $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID 
  
//  association [0..1] to I_Project                      as _Project                       on $projection.Project = _Project.Project
//  association [0..1] to I_Project                      as _ProjectText                   on $projection.Project = _ProjectText.Project  
//  association [0..1] to I_ProjectBasicData             as _ProjectBasicData              on $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
//  association [0..1] to I_ProjectBasicData             as _ProjectBasicDataText          on $projection.ProjectInternalID = _ProjectBasicDataText.ProjectInternalID  

  association [0..1] to I_AdditionalCurrencyRoles     as _AdditionalCurrencyRoles      on  $projection.CompanyCode = _AdditionalCurrencyRoles.CompanyCode
                                                                                       and $projection.LedgerGroup = _AdditionalCurrencyRoles.LedgerGroup
                                                                                       and $projection.Ledger      = _AdditionalCurrencyRoles.Ledger

  association [0..*] to I_FundsCenter                 as _FundsCenter                  on  $projection.FinancialManagementArea = _FundsCenter.FinancialManagementArea
                                                                                       and $projection.FundsCenter             = _FundsCenter.FundsCenter                                                                                       
  association [0..1] to I_FundedProgram               as _FundedProgram                on  $projection.FinancialManagementArea = _FundedProgram.FinancialManagementArea
                                                                                       and $projection.FundedProgram           = _FundedProgram.FundedProgram                                
  association [0..1] to I_Fund                        as _Fund                         on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                       and $projection.Fund                    = _Fund.Fund
  association [0..1] to I_Fund                        as _PartnerFund                  on  $projection.FinancialManagementArea = _PartnerFund.FinancialManagementArea
                                                                                       and $projection.PartnerFund             = _PartnerFund.Fund
                                                                                  
{

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_CompanyCodeStdVH',
               element: 'CompanyCode' }
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_CompanyCode'
key I_OperationalAcctgDocItem.CompanyCode,
    @ObjectModel.foreignKey.association: '_FiscalYear'
key I_OperationalAcctgDocItem.FiscalYear,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_JournalEntryStdVH',
               element: 'AccountingDocument' },
    additionalBinding: [{ localElement: 'CompanyCode',
                          element: 'CompanyCode' },
                        { localElement: 'FiscalYear',
                          element: 'FiscalYear' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_JournalEntry'
key I_OperationalAcctgDocItem.AccountingDocument,
key I_OperationalAcctgDocItem.AccountingDocumentItem,

cast( I_OperationalAcctgDocItem._CompanyCode.CompanyCodeName as fis_butxt preserving type )                                                                                                                           as CompanyCodeName,

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_ChartOfAccountsStdVH',
               element: 'ChartOfAccounts' }
  }]
@ObjectModel.text.association: '_ChartOfAccountsText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_ChartOfAccounts'
I_OperationalAcctgDocItem.ChartOfAccounts,
I_OperationalAcctgDocItem.AccountingDocumentItemType,
I_OperationalAcctgDocItem.ClearingDate,
I_OperationalAcctgDocItem.ClearingCreationDate,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_AccountingDocumentStdVH',
               element: 'AccountingDocument' },
    additionalBinding: [{ localElement: 'CompanyCode',
                          element: 'CompanyCode' },
                        { localElement: 'FiscalYear',
                          element: 'FiscalYear' }]
  }]
// ]--GENERATED
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
I_OperationalAcctgDocItem.ClearingJournalEntryFiscalYear,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
I_OperationalAcctgDocItem.ClearingDocFiscalYear,

@Analytics.internalName: #LOCAL        
@ObjectModel.foreignKey.association: '_ClearingJournalEntry'
I_OperationalAcctgDocItem.ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry'      
@ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
I_OperationalAcctgDocItem.ClearingAccountingDocument,

//@Semantics.booleanIndicator
cast( ( case I_OperationalAcctgDocItem.ClearingDate when '00000000' then ' ' 
                                                    else 'X' 
        end ) 
as fis_xaugp preserving type ) as IsCleared,

@ObjectModel.foreignKey.association: '_PostingKey'
I_OperationalAcctgDocItem.PostingKey,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_FinancialAccountTypeStdVH',
               element: 'FinancialAccountType' }
  }]
@ObjectModel.text.association: '_FinancialAccountTypeText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_FinancialAccountType'
I_OperationalAcctgDocItem.FinancialAccountType,
@ObjectModel.foreignKey.association: '_SpecialGLCode'
I_OperationalAcctgDocItem.SpecialGLCode,
I_OperationalAcctgDocItem.SpecialGLTransactionType,
//zumsk,
@ObjectModel.foreignKey.association: '_DebitCreditCode'
I_OperationalAcctgDocItem.DebitCreditCode,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_BusinessAreaStdVH',
               element: 'BusinessArea' }
  }]
@ObjectModel.text.association: '_BusinessAreaText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_BusinessArea'
I_OperationalAcctgDocItem.BusinessArea,
cast( I_OperationalAcctgDocItem._BusinessArea._Text[1: Language = $session.system_language].BusinessAreaName as fis_busarea_name preserving type )                                                                    as BusinessAreaName,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_BusinessAreaStdVH',
               element: 'BusinessArea' }
  }]
@ObjectModel.text.association: '_PartnerBusinessAreaText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerBusinessArea'
I_OperationalAcctgDocItem.PartnerBusinessArea,
//      @ObjectModel.foreignKey.association: '_TaxCode'
I_OperationalAcctgDocItem.TaxCode,
I_OperationalAcctgDocItem.WithholdingTaxCode,
//shzuz,
//stekz,
@ObjectModel.foreignKey.association: '_TaxType'
I_OperationalAcctgDocItem.TaxType,
//txgrp,
I_OperationalAcctgDocItem.TransactionTypeDetermination,
//kursr,
I_OperationalAcctgDocItem.ValueDate,
I_OperationalAcctgDocItem.AssignmentReference,
I_OperationalAcctgDocItem.DocumentItemText,
//zinkz,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_CompanyCodeStdVH',
               element: 'CompanyCode' }
  }]
@ObjectModel.text.association: '_PartnerCompanyText_2'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerCompany_2'
I_OperationalAcctgDocItem.PartnerCompany,
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
I_OperationalAcctgDocItem.FinancialTransactionType,
I_OperationalAcctgDocItem.CorporateGroupAccount,
//vorgn,
I_OperationalAcctgDocItem.PlanningLevel,
//fdgrp,
//fdtag,
//fkont,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_ControllingArea',
               element: 'ControllingArea' }
  }]
@ObjectModel.text.association: '_ControllingAreaText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_ControllingArea'
I_OperationalAcctgDocItem.ControllingArea,
cast( I_OperationalAcctgDocItem._ControllingArea.ControllingAreaName as fis_bezei preserving type )                                                                                                                   as ControllingAreaName,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_CostCenterStdVH',
               element: 'CostCenter' },
    additionalBinding: [{ localElement: 'ControllingArea',
                          element: 'ControllingArea' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_CostCenter'
I_OperationalAcctgDocItem.CostCenter,
cast( I_OperationalAcctgDocItem._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].CostCenterName as fis_kostl_name preserving type ) as CostCenterName,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'ProjectExternalID'
//cast( COALESCE( _WBSElementBasicData._Project.Project , '' ) as fis_project ) as Project,
cast( _WBSElementBasicData._Project.Project as fis_project preserving type ) as Project,

//cast( COALESCE( _WBSElementBasicData._Project.ProjectExternalID , '' ) as fis_projectext_no_conv ) as ProjectExternalID,
cast( _WBSElementBasicData._Project.ProjectExternalID as fis_projectext_no_conv preserving type ) as ProjectExternalID,

@ObjectModel.foreignKey.association: '_Order'
I_OperationalAcctgDocItem.OrderID,
I_OperationalAcctgDocItem.BillingDocument,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_SalesDocumentStdVH',
               element: 'SalesDocument' }
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_SalesDoc'
I_OperationalAcctgDocItem.SalesDocument,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_SalesDocumentItemStdVH',
               element: 'SalesDocumentItem' },
    additionalBinding: [{ localElement: 'SalesDocument',
                          element: 'SalesDocument' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_SalesDocItem'
I_OperationalAcctgDocItem.SalesDocumentItem,
I_OperationalAcctgDocItem.ScheduleLine,

@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                     element: 'ServiceDocumentType' }
        }]
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
I_OperationalAcctgDocItem.ServiceDocumentType,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentVH',
                     element: 'ServiceDocument' }
        }]
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocument'
I_OperationalAcctgDocItem.ServiceDocument,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                     element: 'ServiceDocumentItem' }
        }]
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
I_OperationalAcctgDocItem.ServiceDocumentItem,

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_MasterFixedAssetStdVH',
               element: 'MasterFixedAsset' },
    additionalBinding: [{ localElement: 'CompanyCode',
                          element: 'CompanyCode' }]
  }]
@ObjectModel.text.association: '_MasterFixedAssetText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
I_OperationalAcctgDocItem.MasterFixedAsset,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_FixedAssetStdVH',
               element: 'FixedAsset' },
    additionalBinding: [{ localElement: 'CompanyCode',
                          element: 'CompanyCode' },
                        { localElement: 'MasterFixedAsset',
                          element: 'MasterFixedAsset' }]
  }]
@ObjectModel.text.association: '_FixedAssetText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_FixedAsset'
I_OperationalAcctgDocItem.FixedAsset,
@ObjectModel.foreignKey.association: '_AssetTransactionType'
I_OperationalAcctgDocItem.AssetTransactionType,
I_OperationalAcctgDocItem.AssetValueDate,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_PersWrkAgrmtSrchHelp',
               element: 'PersonWorkAgreement' }
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_Employment'
I_OperationalAcctgDocItem.PersonnelNumber,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsSalesRelated,
//xhres,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.LineItemDisplayIsEnabled,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsOpenItemManaged,
//xcpdd,
//xskst,
//xsauf,
//xspro,
//xserg,
//xfakt,
//xuman,
//xanet,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsNotCashDiscountLiable,
//xinve,
//xpanz,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsAutomaticallyCreated,
//xncop,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsUsedInPaymentTransaction,
I_OperationalAcctgDocItem.OperationalGLAccount,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_GLAcctInChtOfAcctsStdVH',
               element: 'GLAccount' },
    additionalBinding: [{ localElement: 'ChartOfAccounts',
                          element: 'ChartOfAccounts' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
I_OperationalAcctgDocItem.GLAccount,
cast( I_OperationalAcctgDocItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountName as fis_txt30_skat )                                                           as GLAccountName,
cast( I_OperationalAcctgDocItem._GLAccountInChartOfAccounts._Text[1: Language = $session.system_language].GLAccountLongName as fis_txt50_skat preserving type )                                                       as GLAccountLongName,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_Customer_VH',
               element: 'Customer' }
  }]
@ObjectModel.text.association: '_CustomerText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_Customer'
I_OperationalAcctgDocItem.Customer,
I_OperationalAcctgDocItem._Customer.CustomerName                                                                                                                                                                      as CustomerName,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_Supplier_VH',
               element: 'Supplier' }
  }]
@ObjectModel.text.association: '_SupplierText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_Supplier'
I_OperationalAcctgDocItem.Supplier,
I_OperationalAcctgDocItem._Supplier.SupplierName                                                                                                                                                                      as SupplierName,
I_OperationalAcctgDocItem.BranchAccount,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsBalanceSheetAccount,
I_OperationalAcctgDocItem.ProfitLossAccountType,
I_OperationalAcctgDocItem.SpecialGLAccountAssignment,
I_OperationalAcctgDocItem.DueCalculationBaseDate,
I_OperationalAcctgDocItem.PaymentTerms,
I_OperationalAcctgDocItem.CashDiscount1Days,
I_OperationalAcctgDocItem.CashDiscount2Days,
I_OperationalAcctgDocItem.NetPaymentDays,
I_OperationalAcctgDocItem.CashDiscount1Percent, //  ?????????
I_OperationalAcctgDocItem.CashDiscount2Percent, //  ??????
I_OperationalAcctgDocItem.PaymentMethod,
I_OperationalAcctgDocItem.PaymentBlockingReason,
I_OperationalAcctgDocItem.FixedCashDiscount,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_HouseBankStdVH',
               element: 'HouseBank' },
    additionalBinding: [{ localElement: 'CompanyCode',
                          element: 'CompanyCode' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_HouseBank'
I_OperationalAcctgDocItem.HouseBank,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_SuplrBkDetsByIntIdStdVH',
               element: 'BPBankAccountInternalID' },
    additionalBinding: [{ localElement: 'Supplier',
                          element: 'Supplier' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_SupplierBankDetails'
I_OperationalAcctgDocItem.BPBankAccountInternalID,
I_OperationalAcctgDocItem.TaxDistributionCode1,
I_OperationalAcctgDocItem.TaxDistributionCode2,
I_OperationalAcctgDocItem.TaxDistributionCode3,
I_OperationalAcctgDocItem.InvoiceReference,
I_OperationalAcctgDocItem.InvoiceReferenceFiscalYear,
I_OperationalAcctgDocItem.InvoiceItemReference,
I_OperationalAcctgDocItem.FollowOnDocumentType,
//zollt,
//zolld,
I_OperationalAcctgDocItem.StateCentralBankPaymentReason,
@ObjectModel.foreignKey.association: '_SupplyingCountry'
I_OperationalAcctgDocItem.SupplyingCountry,
//diekz,
I_OperationalAcctgDocItem.InvoiceList,
//SettlementFiscalYearPeriod,
//vrskz,
//vrsdt,
//disbn,
//disbj,
//disbz,
I_OperationalAcctgDocItem.BillOfExchangeUsage,
//anfbn,
//anfbj,
//anfbu,
//anfae,
//blnkz,
//blnpz,
I_OperationalAcctgDocItem.DunningKey,
I_OperationalAcctgDocItem.DunningBlockingReason,
I_OperationalAcctgDocItem.LastDunningDate,
I_OperationalAcctgDocItem.DunningLevel,
I_OperationalAcctgDocItem.DunningArea,
//esrnr,
//esrre,
//esrpz,
I_OperationalAcctgDocItem.WithholdingTaxCertificate,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_MaterialStdVH',
               element: 'Material' }
  }]
@ObjectModel.text.association: '_MaterialText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_Material'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'Product'
I_OperationalAcctgDocItem.Material, // do not use any longer, use Product
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_ProductVH',
               element: 'Product' }
  }]
@ObjectModel.text.association: '_ProductText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_Product'
I_OperationalAcctgDocItem.Product,
@ObjectModel.foreignKey.association: '_Plant'
I_OperationalAcctgDocItem.Plant,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_PurchasingDocumentStdVH',
               element: 'PurchasingDocument' }
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_PurchasingDocument'
I_OperationalAcctgDocItem.PurchasingDocument,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_PurchasingDocumentItemStdVH',
               element: 'PurchasingDocumentItem' },
    additionalBinding: [{ localElement: 'PurchasingDocument',
                          element: 'PurchasingDocument' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
I_OperationalAcctgDocItem.PurchasingDocumentItem,
I_OperationalAcctgDocItem.AccountAssignmentNumber,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsCompletelyDelivered,
I_OperationalAcctgDocItem.MaterialPriceControl,
@ObjectModel.foreignKey.association: '_ValuationArea'
I_OperationalAcctgDocItem.ValuationArea,
@ObjectModel.foreignKey.association: '_InventoryValuationType'
I_OperationalAcctgDocItem.InventoryValuationType,
//bustw,
//psalt,
//tbtkz,
//spgrp,
//spgrm,
//spgrt,
//spgrg,
//spgrv,
//spgrq,
I_OperationalAcctgDocItem.VATRegistration,
I_OperationalAcctgDocItem.DelivOfGoodsDestCountry,
//eglld,
@ObjectModel.foreignKey.association: '_PaymentDifferenceReason'
I_OperationalAcctgDocItem.PaymentDifferenceReason,
//ryacq,
//rpacq,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_ProfitCenterStdVH',
               element: 'ProfitCenter' },
    additionalBinding: [{ localElement: 'ControllingArea',
                          element: 'ControllingArea' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_ProfitCenter'
I_OperationalAcctgDocItem.ProfitCenter,
I_OperationalAcctgDocItem._ProfitCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date]._Text[1: Language = $session.system_language].ProfitCenterName                       as ProfitCenterName,
//xhkom,
I_OperationalAcctgDocItem.JointVenture,
I_OperationalAcctgDocItem.JointVentureCostRecoveryCode,
I_OperationalAcctgDocItem.JointVentureEquityGroup,
I_OperationalAcctgDocItem.JointVenturePartner,
I_OperationalAcctgDocItem.TreasuryContractType,
I_OperationalAcctgDocItem.AssetContract,
I_OperationalAcctgDocItem.CashFlowType,
//depot,
I_OperationalAcctgDocItem.TaxJurisdiction,

//@ObjectModel.foreignKey.association: '_REObjectByIntFinNumber'
I_OperationalAcctgDocItem.REInternalFinNumber,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'REInternalFinNumber'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'REInternalFinNumber'
I_OperationalAcctgDocItem.RealEstateObject,

I_OperationalAcctgDocItem.SettlementReferenceDate,
//popts,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'CommitmentItemShortID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'CommitmentItemShortID'
I_OperationalAcctgDocItem.CommitmentItem,
I_OperationalAcctgDocItem.CommitmentItemShortID,
I_OperationalAcctgDocItem.CostObject,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_ProjectNetworkStdVH',
               element: 'ProjectNetwork' }
  }]
@ObjectModel.text.association: '_ProjectNetworkText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_ProjectNetwork'
I_OperationalAcctgDocItem.ProjectNetwork,
I_OperationalAcctgDocItem.OrderInternalBillOfOperations,
I_OperationalAcctgDocItem.OrderIntBillOfOperationsItem,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_WBSElmntByIntKeyStdVH',
               element: 'WBSElementInternalID' }
  }]
@ObjectModel.text.association: '_WBSElementBasicDataText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_WBSElementInternalID'
I_OperationalAcctgDocItem.WBSElementInternalID,

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_WBSElementStdVH',
               element: 'WBSElement' }
  }]
@ObjectModel.text.association: '_WBSElementExternalIDText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_WBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'WBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'WBSElementExternalID'
//cast( COALESCE( _WBSElementBasicData.WBSElement , '' ) as fis_wbs ) as WBSElement,
cast( _WBSElementBasicData.WBSElement as fis_wbs preserving type ) as WBSElement,

//cast( COALESCE( _WBSElementBasicData.WBSElementExternalID , '' ) as fis_wbsext_no_conv ) as WBSElementExternalID,
cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type ) as WBSElementExternalID,

@API.element.releaseState: #DECOMMISSIONED
@API.element.successor:    'ProfitabilitySegment_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProfitabilitySegment_2'
cast( case when I_OperationalAcctgDocItem.ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )  as ProfitabilitySegment,
I_OperationalAcctgDocItem.ProfitabilitySegment_2, 

//pasubnr,
//spgrs,
//spgrc,
I_OperationalAcctgDocItem.JointVentureBillingType,
I_OperationalAcctgDocItem.JointVentureEquityType,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsEUTriangularDeal,
//lnran,
//      @ObjectModel.foreignKey.association: '_CostOriginGroup'
I_OperationalAcctgDocItem.CostOriginGroup,
I_OperationalAcctgDocItem.CompanyCodeCurrencyDetnMethod,
//glupm,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.ClearingIsReversed,
I_OperationalAcctgDocItem.PaymentMethodSupplement,
I_OperationalAcctgDocItem.AlternativeGLAccount,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FundsCenter'
I_OperationalAcctgDocItem.FundsCenter,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_Fund'
I_OperationalAcctgDocItem.Fund,
//stbuk,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_ProfitCenterStdVH',
               element: 'ProfitCenter' },
    additionalBinding: [{ localElement: 'ControllingArea',
                          element: 'ControllingArea' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerProfitCenter'
I_OperationalAcctgDocItem.PartnerProfitCenter,
I_OperationalAcctgDocItem.Reference1IDByBusinessPartner,
I_OperationalAcctgDocItem.Reference2IDByBusinessPartner,
//kblnr,
//kblpos,
//fkber,
//obzei,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.IsNegativePosting,
I_OperationalAcctgDocItem.PaymentCardItem,
I_OperationalAcctgDocItem.PaymentCardPaymentSettlement,
I_OperationalAcctgDocItem.CreditControlArea,
//empfb,
I_OperationalAcctgDocItem.Reference3IDByBusinessPartner,
I_OperationalAcctgDocItem.DataExchangeInstruction1,
I_OperationalAcctgDocItem.DataExchangeInstruction2,
I_OperationalAcctgDocItem.DataExchangeInstruction3,
I_OperationalAcctgDocItem.DataExchangeInstruction4,
//gricd,
I_OperationalAcctgDocItem.Region,
//gityp as EmploymentTaxDistrType,
I_OperationalAcctgDocItem.HasPaymentOrder,
I_OperationalAcctgDocItem.PaymentReference,
//idxsp,
//linfv,
//kontt,
//kontl,
//uebgdat,
I_OperationalAcctgDocItem.TaxDeterminationDate,
I_OperationalAcctgDocItem.ClearingItem,
I_OperationalAcctgDocItem.BusinessPlace,
I_OperationalAcctgDocItem.TaxSection,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_CostCenterActivityTypeStdVH',
               element: 'CostCtrActivityType' },
    additionalBinding: [{ localElement: 'ControllingArea',
                          element: 'ControllingArea' }]
  }]
// ]--GENERATED
@ObjectModel.foreignKey.association: '_CostCtrActivityType'
I_OperationalAcctgDocItem.CostCtrActivityType,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'AcctsReceivablePledgingCode'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'AcctsReceivablePledgingCode'
I_OperationalAcctgDocItem.AccountsReceivableIsPledged,
I_OperationalAcctgDocItem.AcctsReceivablePledgingCode,

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_BusinessProcessStdVH',
               element: 'BusinessProcess' },
    additionalBinding: [{ localElement: 'ControllingArea',
                          element: 'ControllingArea' }]
  }]
@ObjectModel.text.association: '_BusinessProcessText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_BusinessProcess'
I_OperationalAcctgDocItem.BusinessProcess,
//pendays,
//penrc,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_Grant'
I_OperationalAcctgDocItem.GrantID,
@ObjectModel.foreignKey.association: '_FunctionalArea'
I_OperationalAcctgDocItem.FunctionalArea,
cast( I_OperationalAcctgDocItem._FunctionalArea._Text[1: Language = $session.system_language].FunctionalAreaName as fis_funcarea_name )                                                               as FunctionalAreaName,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem.CustomerIsInExecution,
//srtype,
//intreno,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FundedProgram'
I_OperationalAcctgDocItem.FundedProgram,
//ppa_ex_ind,
I_OperationalAcctgDocItem.LedgerGLLineItem,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_SegmentStdVH',
               element: 'Segment' }
  }]
@ObjectModel.text.association: '_SegmentText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_Segment'
I_OperationalAcctgDocItem.Segment,
_Segment._Text[1: Language = $session.system_language].SegmentName                                                                                                                          as SegmentName,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_SegmentStdVH',
               element: 'Segment' }
  }]
@ObjectModel.text.association: '_PartnerSegmentText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_PartnerSegment'
I_OperationalAcctgDocItem.PartnerSegment,
@ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
I_OperationalAcctgDocItem.PartnerFunctionalArea,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_HouseBankAccountStdVH',
               element: 'HouseBankAccount' },
    additionalBinding: [{ localElement: 'CompanyCode',
                          element: 'CompanyCode' },
                        { localElement: 'HouseBank',
                          element: 'HouseBank' }]
  }]
@ObjectModel.text.association: '_HouseBankAccountText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_HouseBankAccount'
I_OperationalAcctgDocItem.HouseBankAccount,
I_OperationalAcctgDocItem.CostElement,
//xlgclr,
//taxps as TaxDocumentItemNumber,
I_OperationalAcctgDocItem.PaymentServiceProvider,
I_OperationalAcctgDocItem.PaymentRefByPaytSrvcProvider,
I_OperationalAcctgDocItem.SEPAMandate,
//xfrge_bseg,
@ObjectModel.foreignKey.association: '_ReferenceDocumentType'
I_OperationalAcctgDocItem.ReferenceDocumentType,
I_OperationalAcctgDocItem.OriginalReferenceDocument,
I_OperationalAcctgDocItem.ReferenceDocumentLogicalSystem,
I_OperationalAcctgDocItem.AccountingDocumentItemRef,
//buzei_sender,
@ObjectModel.foreignKey.association: '_FiscalPeriod'
I_OperationalAcctgDocItem.FiscalPeriod,

@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
I_OperationalAcctgDocItem.AccountingDocumentCategory,
cast( I_OperationalAcctgDocItem._AccountingDocumentCategory._Text[1: Language = $session.system_language].AccountingDocumentCategoryName  as fis_bstat_name preserving type )                                         as AccountingDocumentCategoryName,

I_OperationalAcctgDocItem.PostingDate,
I_OperationalAcctgDocItem.DocumentDate,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_AccountingDocumentTypeStdVH',
               element: 'AccountingDocumentType' }
  }]
@ObjectModel.text.association: '_AccountingDocumentTypeText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
I_OperationalAcctgDocItem.AccountingDocumentType,
I_OperationalAcctgDocItem._AccountingDocumentType._Text[1: Language = $session.system_language].AccountingDocumentTypeName                                                                                            as AccountingDocumentTypeName,
I_OperationalAcctgDocItem.NetDueDate,
I_OperationalAcctgDocItem.CashDiscount1DueDate,
I_OperationalAcctgDocItem.CashDiscount2DueDate,
//fqftype,
//lqitem,
@ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
I_OperationalAcctgDocItem.OffsettingAccount,
I_OperationalAcctgDocItem._OffsettingAccountWithBP.OffsettingAccountName                                                                                                                                              as OffsettingAccountName,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_FinancialAccountTypeStdVH',
               element: 'FinancialAccountType' }
  }]
@ObjectModel.text.association: '_OffsettingAccountTypeText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_OffsettingAccountType'
I_OperationalAcctgDocItem.OffsettingAccountType,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_ChartOfAccountsStdVH',
               element: 'ChartOfAccounts' }
  }]
@ObjectModel.text.association: '_OffsettingChartOfAccountsText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
I_OperationalAcctgDocItem.OffsettingChartOfAccounts,
//ghkon,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerFund'
I_OperationalAcctgDocItem.PartnerFund,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerGrant'
I_OperationalAcctgDocItem.PartnerGrant,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_BudgetPeriodStdVH',
               element: 'BudgetPeriod' }
  }]
@ObjectModel.text.association: '_BudgetPeriodText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_BudgetPeriod'
I_OperationalAcctgDocItem.BudgetPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
I_OperationalAcctgDocItem.PartnerBudgetPeriod,
I_OperationalAcctgDocItem.BranchCode,
//perop_beg,
//perop_end,
//fastpay,
//ignr_ivref,
//fmfgus_key,
//fmxdocnr,
//fmxyear,
//fmxdocln,
//fmxzekkn,
I_OperationalAcctgDocItem.JointVentureProductionDate,

I_OperationalAcctgDocItem.PaymentReason,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
I_OperationalAcctgDocItem.CashLedgerCompanyCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerAccount'
I_OperationalAcctgDocItem.CashLedgerAccount,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
I_OperationalAcctgDocItem.PubSecBudgetAccountCoCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
I_OperationalAcctgDocItem.PubSecBudgetAccount,

@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
I_OperationalAcctgDocItem.CompanyCodeCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.AmountInCompanyCodeCurrency,

@ObjectModel.foreignKey.association: '_FunctionalCurrency'
I_OperationalAcctgDocItem.FunctionalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
I_OperationalAcctgDocItem.AmountInFunctionalCurrency,   

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } kzbtr_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } txbhw_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.TaxAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.TaxBaseAmountInCoCodeCrcy,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } hwzuz_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.ValuationDiffAmtInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.CashDiscountAmtInCoCodeCrcy,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } dmbt1_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } dmbt2_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } dmbt3_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } blnbt_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } navhw_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.InvoiceAmtInCoCodeCrcy,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } bonfb_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } nprei_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } rdiff_shl as CurrDiff,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } ppdiff_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } penlc1_shl,

@ObjectModel.foreignKey.association: '_TransactionCurrency'
I_OperationalAcctgDocItem.TransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.AmountInTransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.OriginalTaxBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.TaxAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.TaxBaseAmountInTransCrcy,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } fwzuz_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.WithholdingTaxBaseAmount,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } gbetr_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.PlannedAmtInTransactionCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.CashDiscountBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.CashDiscountAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.NetPaymentAmount,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } wrbt1_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } wrbt2_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } wrbt3_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.WithholdingTaxAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.WithholdingTaxExemptionAmt,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } navfw_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.InvoiceAmountInFrgnCurrency,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } bualt_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } sctax_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } sttax_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } penfc_shl,


@ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
I_OperationalAcctgDocItem.BalanceTransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
I_OperationalAcctgDocItem.AmountInBalanceTransacCrcy,


@ObjectModel.foreignKey.association: '_AdditionalCurrency1'
I_OperationalAcctgDocItem.AdditionalCurrency1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
I_OperationalAcctgDocItem.ValuationDiffAmtInAddlCrcy1,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } rdif2_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
I_OperationalAcctgDocItem.AmountInAdditionalCurrency1,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } dmb21_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } dmb22_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } dmb23_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } mwst2_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } navh2_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } sknt2_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } txbh2_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } ppdif2_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } penlc2_shl,

@ObjectModel.foreignKey.association: '_AdditionalCurrency2'
I_OperationalAcctgDocItem.AdditionalCurrency2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
I_OperationalAcctgDocItem.AmountInAdditionalCurrency2,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } dmb31_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } dmb32_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } dmb33_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } mwst3_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } navh3_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } sknt3_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
I_OperationalAcctgDocItem.ValuationDiffAmtInAddlCrcy2,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } rdif3_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } txbh3_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } ppdif3_shl,

//@DefaultAggregation: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } penlc3_shl,

@ObjectModel.foreignKey.association: '_PaymentCurrency'
I_OperationalAcctgDocItem.PaymentCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'PaymentCurrency'} }
I_OperationalAcctgDocItem.AmountInPaymentCurrency,

@ObjectModel.foreignKey.association: '_CreditControlAreaCurrency'
I_OperationalAcctgDocItem.CreditControlAreaCurrency,
//@Semantics: { amount : {currencyCode: 'CreditControlAreaCurrency'} } klibt_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CreditControlAreaCurrency'} }
I_OperationalAcctgDocItem.HedgedAmount,

@ObjectModel.foreignKey.association: '_BaseUnit'
I_OperationalAcctgDocItem.BaseUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
I_OperationalAcctgDocItem.Quantity,

@ObjectModel.foreignKey.association: '_GoodsMovementEntryUnit'
I_OperationalAcctgDocItem.GoodsMovementEntryUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'GoodsMovementEntryUnit'} }
I_OperationalAcctgDocItem.QuantityInEntryUnit,

@ObjectModel.foreignKey.association: '_PurchasingDocumentPriceUnit'
I_OperationalAcctgDocItem.PurchasingDocumentPriceUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'PurchasingDocumentPriceUnit'} }
I_OperationalAcctgDocItem.PurchaseOrderQty,

//      @DefaultAggregation: #NONE   // Is default for Type DEC unsigned and 0 decimals in SADL, in AE it will be treated as characteristic 
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
I_OperationalAcctgDocItem.MaterialPriceUnitQty,

///////////////////////////////////////////////////////////////////////////////
//Absolute Amount (Original BSEG Amounts)
///////////////////////////////////////////////////////////////////////////////
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.AbsoluteAmountInCoCodeCrcy ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.AbsoluteAmountInTransacCrcy ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
I_OperationalAcctgDocItem.AbsltAmtInAdditionalCurrency1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
I_OperationalAcctgDocItem.AbsltAmtInAdditionalCurrency2,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
I_OperationalAcctgDocItem.AbsltAmtInBalanceTransacCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
I_OperationalAcctgDocItem.AbsltAmtInFunctionalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'PaymentCurrency'} } 
I_OperationalAcctgDocItem.AbsltAmountInPaymentCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CreditControlAreaCurrency'} }                                                                                                       
I_OperationalAcctgDocItem.HedgedAbsoluteAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.PlannedAbsltAmtInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.CashDiscAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.CashDiscountAbsoluteAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.CashDiscountAbsoluteBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.InvoiceAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.InvoiceAbsltAmtInFrgnCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.NetPaymentAbsoluteAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.NonDcblTaxAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.NonDcblTaxAbsltAmtInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
I_OperationalAcctgDocItem.TaxAbsltAmountInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.TaxAbsoluteAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
I_OperationalAcctgDocItem.TaxAbsltAmtInAddlCurrency1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
I_OperationalAcctgDocItem.TaxAbsltAmtInAddlCurrency2,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.TaxAbsltBaseAmountInCoCodeCrcy ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.TaxAbsltBaseAmountInTransCrcy ,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.OriglTxAbsltBaseAmountInCCCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.OriginalTaxAbsoluteBaseAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
I_OperationalAcctgDocItem.OriglTxAbsltBaseAmtInAddlCrcy1 ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
I_OperationalAcctgDocItem.OriglTxAbsltBaseAmtInAddlCrcy2 ,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.TaxBrkdwnAbsltAmt1InCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.TaxBrkdwnAbsltAmt2InCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.TaxBrkdwnAbsltAmt3InCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.TaxBrkdwnAbsltAmt1InTransCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.TaxBrkdwnAbsltAmt2InTransCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
I_OperationalAcctgDocItem.TaxBrkdwnAbsltAmt3InTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.WithholdingTaxAbsoluteAmount ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.WithholdingTaxAbsoluteBaseAmt ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
I_OperationalAcctgDocItem.WhldgTaxExemptionAbsltAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
I_OperationalAcctgDocItem.ValnDiffAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
I_OperationalAcctgDocItem.ValnDiffAbsltAmtInAddlCrcy1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
I_OperationalAcctgDocItem.ValnDiffAbsltAmtInAddlCrcy2,

I_OperationalAcctgDocItem.UnadjustedDebitCreditCode,

@Aggregation.default: #SUM
I_OperationalAcctgDocItem.NumberOfItems,

//blart as AccountingDocumentType,
I_OperationalAcctgDocItem._JournalEntry.AccountingDocumentCreationDate,
I_OperationalAcctgDocItem._JournalEntry.CreationTime,
//aedat,
I_OperationalAcctgDocItem._JournalEntry.LastChangeDate,
I_OperationalAcctgDocItem._JournalEntry.JournalEntryLastChangeDateTime,
I_OperationalAcctgDocItem._JournalEntry.ExchangeRateDate,
I_OperationalAcctgDocItem._JournalEntry.AccountingDocCreatedByUser,
I_OperationalAcctgDocItem._JournalEntry.TransactionCode,
I_OperationalAcctgDocItem._JournalEntry.IntercompanyTransaction,
I_OperationalAcctgDocItem._JournalEntry.DocumentReferenceID,
I_OperationalAcctgDocItem._JournalEntry.RecurringAccountingDocument,
I_OperationalAcctgDocItem._JournalEntry.ReverseDocument,
I_OperationalAcctgDocItem._JournalEntry.ReverseDocumentFiscalYear,
I_OperationalAcctgDocItem._JournalEntry.AccountingDocumentHeaderText,

//@Semantics.currencyCode:true
//waers as Currency,

I_OperationalAcctgDocItem._JournalEntry.AbsoluteExchangeRate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'AbsoluteExchangeRate'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'AbsoluteExchangeRate'
I_OperationalAcctgDocItem._JournalEntry.ExchangeRate, // ??????????????????????????????
I_OperationalAcctgDocItem._JournalEntry.ExchRateIsIndirectQuotation,
I_OperationalAcctgDocItem._JournalEntry.EffectiveExchangeRate,

//@Semantics.currencyCode:true
//kzwrs as GroupCurrency,
//kzkrs as GroupCurrencyExchangeRate,

//xnetb,
//frath,
//xrueb,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_BusTransTypeStdVH',
               element: 'BusinessTransactionType' }
  }]
@ObjectModel.text.association: '_BusinessTransactionTypeText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
I_OperationalAcctgDocItem._JournalEntry.BusinessTransactionType as BusinessTransactionType,
I_OperationalAcctgDocItem._JournalEntry.BatchInputSession,
//dokid,
//arcid,
//iblar,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_FinMgmtAreaStdVH',
               element: 'FinancialManagementArea' }
  }]
@ObjectModel.text.association: '_FinancialManagementAreaText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_FinancialManagementArea'
I_OperationalAcctgDocItem._JournalEntry.FinancialManagementArea as FinancialManagementArea,

//@Semantics.currencyCode:true
//hwaer as CompanyCodeCurrency,
//@Semantics.currencyCode:true
//hwae2 as AdditionalCurrency1,
//@Semantics.currencyCode:true
//hwae3 as AdditionalCurrency2,

//kurs2 as AdditionalCrcy1ExchangeRate,
//kurs3 as AdditionalCrcy2ExchangeRate,

//basw2,
//basw3,
//umrd2,
//umrd3,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem._JournalEntry.ReversalIsPlanned,
I_OperationalAcctgDocItem._JournalEntry.PlannedReversalDate,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem._JournalEntry.TaxIsCalculatedAutomatically,

//curt2 as AdditionalCurrency1Role,
//curt3 as AdditionalCurrency2Role,
//kuty2 as AddtionalCrcy1ExchangeRateType,
//kuty3 as AddtionalCrcy2ExchangeRateType,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem._JournalEntry.TaxBaseAmountIsNetAmount,
I_OperationalAcctgDocItem._JournalEntry.SourceCompanyCode,
//xusvr,
//duefl,
@ObjectModel.foreignKey.association: '_LogicalSystem'
I_OperationalAcctgDocItem._JournalEntry.LogicalSystem,

I_OperationalAcctgDocItem._JournalEntry.TaxAbsoluteExchangeRate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'TaxAbsoluteExchangeRate'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'TaxAbsoluteExchangeRate'
I_OperationalAcctgDocItem._JournalEntry.TaxExchangeRate, //  ????????????????????????????????????????
I_OperationalAcctgDocItem._JournalEntry.TaxExchRateIsIndirectQuotation,
I_OperationalAcctgDocItem._JournalEntry.TaxEffectiveExchangeRate,

//lotkz,
//xwvof,
I_OperationalAcctgDocItem._JournalEntry.ReversalReason,
//ppnam,
I_OperationalAcctgDocItem._JournalEntry.Branch,
//numpg,
//adisc,
I_OperationalAcctgDocItem._JournalEntry.Reference1InDocumentHeader,
I_OperationalAcctgDocItem._JournalEntry.Reference2InDocumentHeader,
I_OperationalAcctgDocItem._JournalEntry.InvoiceReceiptDate,
//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.valueHelpDefinition: [
  { entity:  { name:    'I_LedgerStdVH',
               element: 'Ledger' }
  }]
@ObjectModel.text.association: '_LedgerText'
// ]--GENERATED
@ObjectModel.foreignKey.association: '_Ledger'
I_OperationalAcctgDocItem._JournalEntry.Ledger as Ledger,
I_OperationalAcctgDocItem._JournalEntry.LedgerGroup as LedgerGroup,
//propmano,
I_OperationalAcctgDocItem._JournalEntry.AlternativeReferenceDocument,
I_OperationalAcctgDocItem._JournalEntry.TaxReportingDate,
I_OperationalAcctgDocItem._JournalEntry.AccountingDocumentClass,
//xsplit,
//cash_alloc,
//follow_on,
//xreorg,
//subset,
I_OperationalAcctgDocItem._JournalEntry.ExchangeRateType,
//kursx,
//kur2x,
//kur3x,
//xmca,
//resubmission,
//logsystem_sender,
//bukrs_sender,
//belnr_sender,
//gjahr_sender,
//ccins,
//ccnum,
I_OperationalAcctgDocItem._JournalEntry.LatePaymentReason,
I_OperationalAcctgDocItem._JournalEntry.SalesDocumentCondition,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem._JournalEntry.IsReversal,
//@Semantics.booleanIndicator
I_OperationalAcctgDocItem._JournalEntry.IsReversed,


I_OperationalAcctgDocItem._JournalEntry,
I_OperationalAcctgDocItem._CompanyCode,
I_OperationalAcctgDocItem._FiscalYear,
I_OperationalAcctgDocItem._ControllingArea,
I_OperationalAcctgDocItem._GLAccountInChartOfAccounts,
I_OperationalAcctgDocItem._GLAccountInCompanyCode,
I_OperationalAcctgDocItem._Segment,
I_OperationalAcctgDocItem._ProfitCenter,
I_OperationalAcctgDocItem._CurrentProfitCenter,
I_OperationalAcctgDocItem._CostCenter,
I_OperationalAcctgDocItem._CurrentCostCenter,
I_OperationalAcctgDocItem._Customer,
I_OperationalAcctgDocItem._CustomerCompany,
I_OperationalAcctgDocItem._Supplier,
I_OperationalAcctgDocItem._SupplierCompany,
I_OperationalAcctgDocItem._ChartOfAccounts,
I_OperationalAcctgDocItem._AccountingDocumentType,
I_OperationalAcctgDocItem._FinancialAccountType,
I_OperationalAcctgDocItem._FunctionalArea,
I_OperationalAcctgDocItem._BusinessArea,
I_OperationalAcctgDocItem._CompanyCodeCurrency,
I_OperationalAcctgDocItem._FunctionalCurrency,
I_OperationalAcctgDocItem._TransactionCurrency,
I_OperationalAcctgDocItem._BalanceTransactionCurrency,
I_OperationalAcctgDocItem._AdditionalCurrency1,
I_OperationalAcctgDocItem._AdditionalCurrency2,
I_OperationalAcctgDocItem._PaymentCurrency,
I_OperationalAcctgDocItem._CreditControlAreaCurrency,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_Product'
I_OperationalAcctgDocItem._Material,
I_OperationalAcctgDocItem._Product,
I_OperationalAcctgDocItem._Plant,
I_OperationalAcctgDocItem._BaseUnit,
I_OperationalAcctgDocItem._GoodsMovementEntryUnit,
I_OperationalAcctgDocItem._PurchasingDocumentPriceUnit,
I_OperationalAcctgDocItem._InternalOrder,
I_OperationalAcctgDocItem._Order,

_WBSElementBasicData,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementExternalID'
_WBSElement,
_WBSElementExternalID,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_WBSElementBasicData'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementBasicData'
I_OperationalAcctgDocItem._WBSElementInternalID,

I_OperationalAcctgDocItem._AccountingDocumentCategory,

I_OperationalAcctgDocItem._PostingKey,
I_OperationalAcctgDocItem._DebitCreditCode,
I_OperationalAcctgDocItem._PartnerBusinessArea,
I_OperationalAcctgDocItem._TaxType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerCompany_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerCompany_2'
I_OperationalAcctgDocItem._PartnerCompany,
I_OperationalAcctgDocItem._PartnerCompany_2,
I_OperationalAcctgDocItem._SupplyingCountry,
I_OperationalAcctgDocItem._InventoryValuationType,
I_OperationalAcctgDocItem._PaymentDifferenceReason,
I_OperationalAcctgDocItem._PartnerSegment,
I_OperationalAcctgDocItem._SupplierBankDetails,

I_OperationalAcctgDocItem._ClearingJrnlEntryFiscalYear,
I_OperationalAcctgDocItem._ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ClearingJournalEntry'
I_OperationalAcctgDocItem._ClearingAccountingDocument,

I_OperationalAcctgDocItem._SpecialGLCode,
I_OperationalAcctgDocItem._TaxCode,
I_OperationalAcctgDocItem._FinancialTransactionType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDoc'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDoc'
I_OperationalAcctgDocItem._SalesDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocItem'
I_OperationalAcctgDocItem._SalesDocumentItem,
I_OperationalAcctgDocItem._SalesDoc,
I_OperationalAcctgDocItem._SalesDocItem,
I_OperationalAcctgDocItem._ServiceDocumentType,
I_OperationalAcctgDocItem._ServiceDocument,
I_OperationalAcctgDocItem._ServiceDocumentItem,
I_OperationalAcctgDocItem._MasterFixedAsset,
I_OperationalAcctgDocItem._FixedAsset,
I_OperationalAcctgDocItem._AssetTransactionType,

I_OperationalAcctgDocItem._PersonWorkAgreement_1,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PersonWorkAgreement_1'
I_OperationalAcctgDocItem._Employment,

I_OperationalAcctgDocItem._HouseBank,
I_OperationalAcctgDocItem._PurchasingDocument,
I_OperationalAcctgDocItem._PurchasingDocumentItem,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem._ValuationArea,
I_OperationalAcctgDocItem._ProjectNetwork,
I_OperationalAcctgDocItem._CostOriginGroup,
//      _AlternativeGLAccount,
I_OperationalAcctgDocItem._PartnerProfitCenter,
I_OperationalAcctgDocItem._CostCtrActivityType,
I_OperationalAcctgDocItem._BusinessProcess,
I_OperationalAcctgDocItem._PartnerFunctionalArea,
I_OperationalAcctgDocItem._HouseBankAccount,
I_OperationalAcctgDocItem._FiscalPeriod,
I_OperationalAcctgDocItem._ReferenceDocumentType,
I_OperationalAcctgDocItem._OffsettingAccountType,
I_OperationalAcctgDocItem._OffsettingChartOfAccounts,
I_OperationalAcctgDocItem._OffsettingAccount,
I_OperationalAcctgDocItem._OffsettingAccountWithBP,

I_OperationalAcctgDocItem._CashLedgerCompanyCode,
I_OperationalAcctgDocItem._CashLedgerAccount,
_FundsCenter,
_FundedProgram,
_Fund,
I_OperationalAcctgDocItem._Grant,
I_OperationalAcctgDocItem._BudgetPeriod,
_PartnerFund,
I_OperationalAcctgDocItem._PartnerGrant,
I_OperationalAcctgDocItem._PartnerBudgetPeriod,
I_OperationalAcctgDocItem._PubSecBudgetAccountCoCode,
I_OperationalAcctgDocItem._PubSecBudgetAccount,     

//_REObjectByIntFinNumber,

I_OperationalAcctgDocItem._JournalEntry._BusinessTransactionType,
I_OperationalAcctgDocItem._JournalEntry._FinancialManagementArea,
I_OperationalAcctgDocItem._JournalEntry._LogicalSystem,
I_OperationalAcctgDocItem._JournalEntry._Ledger,

_AdditionalCurrencyRoles,

@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem.GLAccountAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem.SupplierBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem.CustomerBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem.AcctgDocTypeAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem.OrderType,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem.SalesOrderType,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
I_OperationalAcctgDocItem.AssetClass,
I_OperationalAcctgDocItem._CostCenterText,
I_OperationalAcctgDocItem._FunctionalAreaText,
I_OperationalAcctgDocItem._ProfitCenterText,

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@Consumption.hidden: true
I_OperationalAcctgDocItem._AccountingDocumentTypeText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._BudgetPeriodText,
@Consumption.hidden: true
_BusinessTransactionTypeText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._BusinessAreaText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._PartnerBusinessAreaText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._BusinessProcessText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._ChartOfAccountsText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._OffsettingChartOfAccountsText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerCompanyText_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PartnerCompanyText_2'
@Consumption.hidden: true
I_OperationalAcctgDocItem._PartnerCompanyText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._PartnerCompanyText_2,
@Consumption.hidden: true
I_OperationalAcctgDocItem._ControllingAreaText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._CustomerText,
@Consumption.hidden: true
_FinancialManagementAreaText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._FinancialAccountTypeText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._OffsettingAccountTypeText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._FixedAssetText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._HouseBankAccountText,
@Consumption.hidden: true
_LedgerText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._MasterFixedAssetText,
@Consumption.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProductText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_ProductText'
I_OperationalAcctgDocItem._MaterialText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._ProductText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._ProjectNetworkText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._PartnerSegmentText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._SegmentText,
@Consumption.hidden: true
I_OperationalAcctgDocItem._SupplierText,
@Consumption.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementExternalIDText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementExternalIDText'
_WBSElementText,
@Consumption.hidden: true
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementBasicDataText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementBasicDataText'
I_OperationalAcctgDocItem._WBSElementInternalIDText,
_WBSElementExternalIDText,
@Consumption.hidden: true
_WBSElementBasicDataText
// ]--GENERATED

}
```
