---
name: C_GLACCOUNTLINEITEMQUERY
description: "The CDS entity C_GLAccountLineItemQuery functions as an analytical query for journal entry line items. It offers detailed insights into financial transactions: amounts in various currencies, fiscal periods, and ledger details. The entity supports analytical capabilities and is designed for use in reporting scenarios. Users can analyze financial data across dimensions such as company code, profit center, and segment. It also facilitates the evaluation of debit and credit amounts, transaction types, and account assignments. This CDS view provides the data to answer the following business questions: What are the journal entry line items for a specific fiscal year and company code? What is the debit and credit amount in various currencies for a given ledger? Which profit centers and segments are associated with specific journal entries? What is the posting date and fiscal period for a particular G/L account? Which journal entries are related to specific customers or suppliers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMQUERY')/$value
semantic_en: "The CDS entity C_GLAccountLineItemQuery functions as an analytical query for journal entry line items. It offers detailed insights into financial transactions: amounts in various currencies, fiscal periods, and ledger details. The entity supports analytical capabilities and is designed for use in reporting scenarios. Users can analyze financial data across dimensions such as company code, profit center, and segment. It also facilitates the evaluation of debit and credit amounts, transaction types, and account assignments. This CDS view provides the data to answer the following business questions: What are the journal entry line items for a specific fiscal year and company code? What is the debit and credit amount in various currencies for a given ledger? Which profit centers and segments are associated with specific journal entries? What is the posting date and fiscal period for a particular G/L account? Which journal entries are related to specific customers or suppliers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Journal Entry Analyzer Query — CDS view tiêu dùng dựa trên Journal Entry Analyzer Query."
keywords:
  - "Journal Entry Analyzer Query"
  - "journal"
  - "entry"
  - "analyzer"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "account"
  - "period"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-FIO-GL-2CL
  - consumption-view
  - customer
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - supplier
  - transaction
---
# C_GLACCOUNTLINEITEMQUERY

**The CDS entity C_GLAccountLineItemQuery functions as an analytical query for journal entry line items. It offers detailed insights into financial transactions: amounts in various currencies, fiscal periods, and ledger details. The entity supports analytical capabilities and is designed for use in reporting scenarios. Users can analyze financial data across dimensions such as company code, profit center, and segment. It also facilitates the evaluation of debit and credit amounts, transaction types, and account assignments. This CDS view provides the data to answer the following business questions: What are the journal entry line items for a specific fiscal year and company code? What is the debit and credit amount in various currencies for a given ledger? Which profit centers and segments are associated with specific journal entries? What is the posting date and fiscal period for a particular G/L account? Which journal entries are related to specific customers or suppliers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInCompanyCodeCurrency` |  | |  | `curr_to_decfloat_amount(AmountInCompanyCodeCurrency)` | `DECF(34)` |  |
| `AmountInTransactionCurrency` |  | |  | `curr_to_decfloat_amount(AmountInTransactionCurrency)` | `DECF(34)` |  |
| `AmountInGlobalCurrency` |  | |  | `curr_to_decfloat_amount(AmountInGlobalCurrency)` | `DECF(34)` |  |
| `AmountInFunctionalCurrency` |  | |  | `curr_to_decfloat_amount(AmountInFunctionalCurrency)` | `DECF(34)` |  |
| `AmountInBalanceTransacCrcy` |  | |  | `curr_to_decfloat_amount(AmountInBalanceTransacCrcy)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency1` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency1)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency2` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency2)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency3` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency3)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency4` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency4)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency5` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency5)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency6` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency6)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency7` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency7)` | `DECF(34)` |  |
| `AmountInFreeDefinedCurrency8` |  | |  | `curr_to_decfloat_amount(AmountInFreeDefinedCurrency8)` | `DECF(34)` |  |
| `DebitAmountInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount(DebitAmountInCoCodeCrcy)` | `DECF(34)` |  |
| `CreditAmountInCoCodeCrcy` |  | |  | `curr_to_decfloat_amount(CreditAmountInCoCodeCrcy)` | `DECF(34)` |  |
| `DebitAmountInGlobalCrcy` |  | |  | `curr_to_decfloat_amount(DebitAmountInGlobalCrcy)` | `DECF(34)` |  |
| `CreditAmountInGlobalCrcy` |  | |  | `curr_to_decfloat_amount(CreditAmountInGlobalCrcy)` | `DECF(34)` |  |
| `DebitAmountInFunctionalCrcy` |  | |  | `curr_to_decfloat_amount(DebitAmountInFunctionalCrcy)` | `DECF(34)` |  |
| `CreditAmountInFunctionalCrcy` |  | |  | `curr_to_decfloat_amount(CreditAmountInFunctionalCrcy)` | `DECF(34)` |  |
| `DebitAmountInTransCrcy` |  | |  | `curr_to_decfloat_amount(DebitAmountInTransCrcy)` | `DECF(34)` |  |
| `CreditAmountInTransCrcy` |  | |  | `curr_to_decfloat_amount(CreditAmountInTransCrcy)` | `DECF(34)` |  |
| `DebitAmountInBalanceTransCrcy` |  | |  | `curr_to_decfloat_amount(DebitAmountInBalanceTransCrcy)` | `DECF(34)` |  |
| `CreditAmountInBalanceTransCrcy` |  | |  | `curr_to_decfloat_amount(CreditAmountInBalanceTransCrcy)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy1` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy1)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy1` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy1)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy2` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy2)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy2` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy2)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy3` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy3)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy3` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy3)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy4` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy4)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy4` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy4)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy5` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy5)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy5` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy5)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy6` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy6)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy6` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy6)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy7` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy7)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy7` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy7)` | `DECF(34)` |  |
| `DebitAmountInFreeDfndCrcy8` |  | |  | `curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy8)` | `DECF(34)` |  |
| `CreditAmountInFreeDfndCrcy8` |  | |  | `curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy8)` | `DECF(34)` |  |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
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
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `IsOpenItemManaged` |  | |  |  | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTLINEITEMQUERY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Journal Entry Analyzer Query'
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel: {
    usageType: {
        dataClass: #MIXED,
        sizeCategory: #XXL,
        serviceQuality: #D
    },
    supportedCapabilities:[#ANALYTICAL_QUERY ]
}
@AbapCatalog.extensibility:{
  extensible: true,
  elementSuffix:'JEA'
//  dataSources: ['_Extension'],
//  allowNewDatasources: false,
//  quota: {
//    maximumFields: 1000,
//    maximumBytes: 2500
//  }
 }

@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_GLITEMQ_VARIABLECHECK'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_GLITEMQ_IBN_EXIT'
define transient view entity C_GLAccountLineItemQuery
provider contract analytical_query
  with parameters
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    @AnalyticsDetails.query.variableSequence : 30
    P_KeyDate  : vdm_v_key_date,
    
    @AnalyticsDetails.variable: {  mandatory: false, selectionType: #SINGLE, multipleSelections: true, usageType: #FILTER }
    @EndUserText.label: 'Fiscal Year Variant'
    @Consumption.hidden: true
     @Consumption.derivation: {
      lookupEntity     : 'F_LdgrCoCodeFsclYrVariant',
      resultElement    : 'FiscalYearVariant',
//      resultAggregation:  #MAX,
      binding          :  [
        { targetElement: 'Ledger',      type: #ELEMENT, value: 'Ledger' },
        { targetElement: 'CompanyCode', type: #ELEMENT, value: 'CompanyCode' }]
    }    
    P_FiscalYearVariant: fis_periv
as projection on I_JournalEntryAnalyzerCube as I_JournalEntryAnalyzerCube
{

  @AnalyticsDetails.query.variableSequence : 10    
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'F_LeadingLedger', resultElement: 'Ledger' }
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement:#TEXT_LAST
  Ledger,

  @AnalyticsDetails.query.variableSequence : 20
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement:#TEXT_LAST
  @Consumption.semanticObject: 'CompanyCode'
  CompanyCode,

  @AnalyticsDetails.query.variableSequence: 50
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #SYSTEM_FIELD, value : '#SYSTEM_DATE' } ]
       }
  LedgerFiscalYear,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement:#TEXT_LAST
  @AnalyticsDetails.query.resultValueHelpSource:#QUERY
  @AnalyticsDetails.query.resultValuesSource:#CUBE
  @Consumption.semanticObject: 'GLAccount'
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND  
  GLAccount,


  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'FiscalPeriod'
  FiscalPeriod,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 70
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.derivation: { lookupEntity:      'F_GregorianCalDteFuncRngeVal',
                             resultElement:     'DateFunctionStartDate',
                             resultElementHigh: 'DateFunctionEndDate',
                             binding: [ { targetParameter: 'P_DateFunction', type: #CONSTANT,     value: 'PREVIOUSMONTH' } ] }
  //@AnalyticsDetails.query.totals: #SHOW
  PostingDate,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 80
  @AnalyticsDetails.query.axis: #FREE
  FinancialTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @Consumption.semanticObject: 'Segment'
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  @UI.textArrangement: #TEXT_LAST
  @Consumption.semanticObject: 'ProfitCenter'
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 99
  @Consumption.semanticObject: 'AccountingDocument'
  AccountingDocument,

  ///////////////////////////////////////////////////////////////////////
  // Measures - Amounts
  ///////////////////////////////////////////////////////////////////////

  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #FREE
  GlobalCurrency,

  @AnalyticsDetails.query.axis: #FREE
  FunctionalCurrency,

  @AnalyticsDetails.query.axis: #FREE
  BalanceTransactionCurrency,

  @AnalyticsDetails.query.axis: #FREE
  TransactionCurrency,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency1,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency2,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency3,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency4,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency5,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency6,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency7,

  @AnalyticsDetails.query.axis: #FREE
  FreeDefinedCurrency8,


  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  @Consumption.semanticObject: 'GLAccount'
  @EndUserText.label: 'Amount in Company Code Currency'  
  curr_to_decfloat_amount(AmountInCompanyCodeCurrency) as AmountInCompanyCodeCurrency,

  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @Consumption.semanticObject: 'GLAccount'
  @EndUserText.label: 'Amount in Transaction Currency'
  curr_to_decfloat_amount(AmountInTransactionCurrency) as AmountInTransactionCurrency,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Consumption.semanticObject: 'GLAccount'
  @EndUserText.label: 'Amount in Global Currency'
  curr_to_decfloat_amount(AmountInGlobalCurrency) as AmountInGlobalCurrency,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
  @EndUserText.label: 'Amount in Functional Currency'
  curr_to_decfloat_amount(AmountInFunctionalCurrency) as AmountInFunctionalCurrency,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
  curr_to_decfloat_amount(AmountInBalanceTransacCrcy) as AmountInBalanceTransacCrcy,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency1) as AmountInFreeDefinedCurrency1,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency2) as AmountInFreeDefinedCurrency2,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency3) as AmountInFreeDefinedCurrency3,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency4) as AmountInFreeDefinedCurrency4,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency5) as AmountInFreeDefinedCurrency5,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency6) as AmountInFreeDefinedCurrency6,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency7) as AmountInFreeDefinedCurrency7,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
  curr_to_decfloat_amount(AmountInFreeDefinedCurrency8) as AmountInFreeDefinedCurrency8,

  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(DebitAmountInCoCodeCrcy) as DebitAmountInCoCodeCrcy,
  
  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(CreditAmountInCoCodeCrcy) as CreditAmountInCoCodeCrcy,
  
  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(DebitAmountInGlobalCrcy) as DebitAmountInGlobalCrcy,
  
  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(CreditAmountInGlobalCrcy) as CreditAmountInGlobalCrcy,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
  curr_to_decfloat_amount(DebitAmountInFunctionalCrcy) as DebitAmountInFunctionalCrcy,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
  curr_to_decfloat_amount(CreditAmountInFunctionalCrcy) as CreditAmountInFunctionalCrcy,
  
  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(DebitAmountInTransCrcy) as DebitAmountInTransCrcy,
  
  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(CreditAmountInTransCrcy) as CreditAmountInTransCrcy,
  
  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(DebitAmountInBalanceTransCrcy) as DebitAmountInBalanceTransCrcy,
  
  @UI.hidden : true
  @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
  @Aggregation.default: #SUM
  curr_to_decfloat_amount(CreditAmountInBalanceTransCrcy) as CreditAmountInBalanceTransCrcy,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy1) as DebitAmountInFreeDfndCrcy1,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy1) as CreditAmountInFreeDfndCrcy1,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy2) as DebitAmountInFreeDfndCrcy2,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy2) as CreditAmountInFreeDfndCrcy2,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy3) as DebitAmountInFreeDfndCrcy3,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy3) as CreditAmountInFreeDfndCrcy3,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy4) as DebitAmountInFreeDfndCrcy4,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy4) as CreditAmountInFreeDfndCrcy4,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy5) as DebitAmountInFreeDfndCrcy5,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy5) as CreditAmountInFreeDfndCrcy5,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy6) as DebitAmountInFreeDfndCrcy6,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy6) as CreditAmountInFreeDfndCrcy6,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy7) as DebitAmountInFreeDfndCrcy7,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy7) as CreditAmountInFreeDfndCrcy7,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
  curr_to_decfloat_amount(DebitAmountInFreeDfndCrcy8) as DebitAmountInFreeDfndCrcy8,
  
  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
  curr_to_decfloat_amount(CreditAmountInFreeDfndCrcy8) as CreditAmountInFreeDfndCrcy8,


  ///////////////////////////////////////////////////////////////////////
  // Measures - Quantities
  ///////////////////////////////////////////////////////////////////////

  @AnalyticsDetails.query.axis: #FREE
  CostSourceUnit,

  @AnalyticsDetails.query.axis: #FREE
  BaseUnit,

  @AnalyticsDetails.query.axis: #FREE
  AdditionalQuantity1Unit,

  @AnalyticsDetails.query.axis: #FREE
  AdditionalQuantity2Unit,

  @AnalyticsDetails.query.axis: #FREE
  AdditionalQuantity3Unit,


  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
  AdditionalQuantity1,

  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
  AdditionalQuantity2,

  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
  AdditionalQuantity3,

  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
  ValuationQuantity,

  @UI.hidden : true
  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  Quantity,



  ///////////////////////////////////////////////////////////////////////
  // Dimensions
  ///////////////////////////////////////////////////////////////////////


  @AnalyticsDetails.query.axis: #FREE
  DebitCreditCode,

  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentType,

  @AnalyticsDetails.query.axis: #FREE
  PostingKey,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  OffsettingAccount,

  @AnalyticsDetails.query.axis: #FREE
  AssignmentReference,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  @Consumption.semanticObject: 'CostCenter'
  CostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'AccountingDocumentItem'
  AccountingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  DocumentDate,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'LedgerGLLineItem'
  LedgerGLLineItem,
  @AnalyticsDetails.query.axis: #FREE
  TransactionTypeDetermination,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocCreatedByUser,
  @AnalyticsDetails.query.axis: #FREE
  CreationDate,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'ChartOfAccounts'
  ChartOfAccounts,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 45
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  @AnalyticsDetails.query.axis: #FREE
  AlternativeGLAccount,
  @AnalyticsDetails.query.axis: #FREE
  CountryChartOfAccounts,
  @AnalyticsDetails.query.axis: #FREE
  InvoiceReference,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  InvoiceReferenceFiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  FollowOnDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  InvoiceItemReference,
  @AnalyticsDetails.query.axis: #FREE
  ReferencePurchaseOrderCategory,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'PurchasingDocument'
  PurchasingDocument,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'PurchasingDocumentItem'
  PurchasingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  AccountAssignmentNumber,
  @AnalyticsDetails.query.axis: #FREE
  DocumentItemText,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'SalesDocument'
  SalesDocument,
  @AnalyticsDetails.query.axis: #FREE
  SalesDocumentItem,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'Product'
  Product,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'Plant'
  Plant,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'Supplier'
  Supplier,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'Customer'
  Customer,
  @AnalyticsDetails.query.axis: #FREE
  FinancialAccountType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  SpecialGLCode,


  @AnalyticsDetails.query.axis: #FREE
  IsOpenItemManaged,
  @AnalyticsDetails.query.axis: #FREE
  ClearingDate,


  @AnalyticsDetails.query.axis: #FREE
  ClearingJournalEntry,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ClearingJournalEntryFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'FixedAsset'
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  MasterFixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'FixedAsset'
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  AssetValueDate,


  @AnalyticsDetails.query.axis: #FREE
  OffsettingAccountType,


  @AnalyticsDetails.query.axis: #FREE
  OrderID,
  @AnalyticsDetails.query.axis: #FREE
  OrderCategory,

  @AnalyticsDetails.query.axis: #FREE
  WBSElementExternalID,
  @Consumption.semanticObject: 'BillingDocumentType'
  @AnalyticsDetails.query.axis: #FREE
  BillingDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'SalesOrganization'
  SalesOrganization,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @Consumption.semanticObject: 'ControllingArea'
  ControllingArea,
  @AnalyticsDetails.query.axis: #FREE

  @UI.textArrangement: #TEXT_LAST
  @Consumption.semanticObject: 'FunctionalArea'
  FunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  AccountAssignment,
  @AnalyticsDetails.query.axis: #FREE
  AccountAssignmentType,
  @AnalyticsDetails.query.axis: #FREE
  AccountingDocumentCategory,
  @AnalyticsDetails.query.axis: #FREE
  AssetDepreciationArea,
  @AnalyticsDetails.query.axis: #FREE
  BusinessTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'CustomerGroup'
  CustomerGroup,
  @AnalyticsDetails.query.axis: #FREE
  DepreciationFiscalPeriod,
  @AnalyticsDetails.query.axis: #FREE
  AssetTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  GLAccountType,


  @AnalyticsDetails.query.axis: #FREE
  IsReversal,
  @AnalyticsDetails.query.axis: #FREE
  IsReversed,
  @AnalyticsDetails.query.axis: #FREE
  IsSettled,
  @AnalyticsDetails.query.axis: #FREE
  IsSettlement,


  @AnalyticsDetails.query.axis: #FREE
  SoldProductGroup,


  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocCntxt,
  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocItem,
  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocType,
  @AnalyticsDetails.query.axis: #FREE
  PredecessorReferenceDocument,

  @AnalyticsDetails.query.axis: #FREE  
  ProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocument,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentContext,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentItemGroup,
  @AnalyticsDetails.query.axis: #FREE
  ReferenceDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  ReversalReferenceDocument,
  @AnalyticsDetails.query.axis: #FREE
  ReversalReferenceDocumentCntxt,

  @AnalyticsDetails.query.axis: #FREE
  SoldProduct,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  @Consumption.semanticObject: 'FiscalYear'
  FiscalYear,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 65
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod, 
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'FiscalYearVariant'
  FiscalYearVariant,
  @AnalyticsDetails.query.axis: #FREE
  LastChangeDateTime,
  @AnalyticsDetails.query.axis: #FREE
  CreationDateTime,
  @AnalyticsDetails.query.axis: #FREE
  AssetAcctTransClassfctn,
  
@AnalyticsDetails.query.axis: #FREE
CustomerSupplierCountry

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FS  Universal Journal Entry: Fields for Financial Services
///////////////////////////////////////////////////////////////////////
// 2.5.24 remove annotation @Consumption.switched.id because of problems with "Custom Analytical Queries" app
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialServicesProductGroup,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialServicesBranch,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//FinancialDataSource    

}
where 
// Ledger = $parameters.P_Ledger 
//and  CompanyCode = $parameters.P_CompanyCode
FiscalYearVariant = $parameters.P_FiscalYearVariant
;
```
