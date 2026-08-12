---
name: C_CASHFLOWINDIRECTIFRS
description: "This CDS view provides data for cash flow statements using the indirect method based on IFRS. It summarizes cash flow data from operating activities, investing activities, and financing activities to determine the net cash flow of the relevant company codes in the specified fiscal periods. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWINDIRECTIFRS')/$value
semantic_en: "This CDS view provides data for cash flow statements using the indirect method based on IFRS. It summarizes cash flow data from operating activities, investing activities, and financing activities to determine the net cash flow of the relevant company codes in the specified fiscal periods. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cash Flow Statement - Indirect Method for IFRS — CDS view tiêu dùng dựa trên I_GLAccountLineItemSemTag."
keywords:
  - "cash"
  - "flow"
  - "statement"
  - "indirect"
  - "method"
  - "for"
  - "ifrs"
  - "account"
  - "hierarchy"
  - "company"
  - "code"
  - "ledger"
  - "fiscal"
  - "year"
  - "asset"
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-HIE-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - lob:finance
---
# C_CASHFLOWINDIRECTIFRS

**This CDS view provides data for cash flow statements using the indirect method based on IFRS. It summarizes cash flow data from operating activities, investing activities, and financing activities to determine the net cash flow of the relevant company codes in the specified fiscal periods. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWINDIRECTIFRS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetAccountingKeyFigure` |  | |  |  | `CHAR(10)` | Key Figure for Asset Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CashFlowAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `OperatingCashFlowAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `GLAcctNetIncomeAmtInCCCrcy` |  | |  | `PnLResultAmtInCCCrcy` | `CURR(23)` | Profit for the Period |
| `IncomeAdjustmentAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `OpgTngblAssetDeprAmtInCCCrcy` |  | |  | `plant and equipment' @AnalyticsDetails.query.axis: #ROWS @AnalyticsDetails.query.elementHierarchy.parent: 'IncomeAdjustmentAmount' TangibleAstDeprAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `OpgIntngblAstAmtznAmtInCCCrcy` |  | |  | `IntngblAssetAmtznAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `OpgFxdAstRtrmtAmtInCCCrcy` |  | |  | `FixedAssetRtrmtAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `AssetLiabilityAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `ProvisionAmtInCCCrcy` |  | |  | `ProvisionAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `InventoryAmtInCCCrcy` |  | |  | `InventoryAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `AcctsRblAmtInCCCrcy` |  | |  | `AcctsRblAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `AcctsOthRblAmtInCCCrcy` |  | |  | `AcctsOthRblAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `AcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Payable (Net) |
| `AcctsOthPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Accounts Other Payables (Net) |
| `OperatingActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net cash generated from continuing operating activities |
| `InvestingCashFlowAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `FixedAssetAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `TangibleAssetAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `TangibleAstAmtInCCCrcy` |  | |  | `TangibleAstAmtInCCCrcy* (-1)` | `CURR(28)` |  |
| `TangibleAstDeprAmtInCCCrcy` |  | |  |  | `CURR(23)` | Depreciation of Tangible Assets |
| `IntangibleAssetAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `IntangibleAstAmtInCCCrcy` |  | |  | `IntangibleAstAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `IntngblAssetAmtznAmtInCCCrcy` |  | |  |  | `CURR(23)` | Amortization of Intangible Assets |
| `InvstgFxdAstRtrmtAmtInCCCrcy` |  | |  | `FixedAssetRtrmtAmtInCCCrcy` | `CURR(23)` | Gain/Loss from Retirement of Fixed Assets |
| `LongTermInvmtAmtInCCCrcy` |  | |  | `LongTermInvmtAmtInCCCrcy * (-1)` | `CURR(28)` |  |
| `InvestingActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net cash used in continuing investing activities |
| `FinancingCashFlowAmount` |  | |  | `case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end` | `CURR(23)` | Amount in Company Code Currency |
| `CommonStockAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Common Stocks |
| `NotesReceivableAmtInCCCrcy` |  | |  |  | `CURR(23)` | Increase (Decrease) in Notes Receivable |
| `FinancingActyCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net cash generated from financing activities |
| `NetCashAmtInCCCrcy` |  | |  |  | `CURR(23)` | Net Cash Amount In CompanyCode Currency |
| `CashAndCashEqvlntAmtInCCCrcy` |  | |  |  | `CURR(23)` | Change (Increase/ Decrease) in cash and cash equivalents |
| `CashValidationBalAmtInCCCrcy` |  | |  | `0` | `INT1(3)` |  |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWINDIRECTIFRS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWINDIRECTIFRS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFICSHFLINDIFRS'
@EndUserText.label: 'Cash Flow Statement - Indirect Method for IFRS'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
//@OData.publish: true
//@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_QUERY ]

define view C_CashFlowIndirectIFRS

  with parameters

    //    // ---> Variable gets hidden and is defaulted with the logon language
    //    @Consumption.hidden: true
    //    @Environment.systemField: #SYSTEM_LANGUAGE
    //    P_Language : sylangu,
    //    @Consumption.hidden: true
    //    @Environment.systemField: #SYSTEM_DATE
    //    P_KeyDate          : sydate,

    @Consumption.defaultValue: '001'
    @EndUserText.label: 'From Fiscal Period'
    P_FromFiscalPeriod : fins_fagl_fiscper_from,
    @Consumption.defaultValue: '012'
    @EndUserText.label: 'To Fiscal Period'
    P_ToFiscalPeriod   : fins_fagl_fiscper_to

  as select from I_GLAccountLineItemSemTag
{

      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
      @AnalyticsDetails.query.axis: #FREE
      @EndUserText.label: 'Financial Statement Version'
  key GLAccountHierarchy,
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
      @AnalyticsDetails.query.axis: #FREE
  key CompanyCode,
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
      @Consumption.derivation: {
        lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear',
        binding: [{ targetElement : 'CalendarDate' , type : #SYSTEM_FIELD, value : '#SYSTEM_DATE' } ]
      }
      @AnalyticsDetails.query.axis: #COLUMNS
  key LedgerFiscalYear,
      @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
      @Consumption.derivation: { lookupEntity: 'I_Ledger',
        resultElement: 'Ledger', binding: [{ targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]}
      @AnalyticsDetails.query.axis: #FREE
  key Ledger,

      @EndUserText.label: 'Asset Accounting Key Figure'
      @AnalyticsDetails.query.axis: #FREE
      AssetAccountingKeyFigure,

      @AnalyticsDetails.query.axis: #FREE
      @Semantics.fiscal.period
      FiscalPeriod,

      @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.axis: #FREE
      FiscalQuarter,

      DebitCreditCode,
      @EndUserText.label: 'Asset Transaction Type'
      AssetTransactionType,
      FinancialTransactionType,
      AccountingDocumentType,


      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      SemanticTag,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GLAccount,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      FunctionalArea,
      @AnalyticsDetails.query.axis: #FREE
      CostCenter,
      @AnalyticsDetails.query.axis: #FREE
      ProfitCenter,
      @AnalyticsDetails.query.axis: #FREE
      AccountingDocument,

      @AnalyticsDetails.query.axis: #FREE
      PostingDate,
      @AnalyticsDetails.query.axis: #FREE
      Segment,
      @AnalyticsDetails.query.axis: #FREE
      BusinessArea,

      @AnalyticsDetails.query.axis: #FREE
      CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      @Consumption.hidden: true
      @AnalyticsDetails.query.axis: #ROWS
      AmountInCompanyCodeCurrency,

      ///////////////////////////////////////////////////////////////////////
      // Key Figures
      ///////////////////////////////////////////////////////////////////////
      @EndUserText.label: 'Cash Flow Statement (Indirect Method)'
      @AnalyticsDetails.query.axis: #ROWS
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as CashFlowAmount,

      @EndUserText.label: 'Cash flow from Operating Activities'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as OperatingCashFlowAmount,

      @EndUserText.label: 'Profit for the period'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'OperatingCashFlowAmount'
      //GLAcctNetIncomeAmtInCCCrcy                                                                    as GLAcctNetIncomeAmtInCCCrcy,
      PnLResultAmtInCCCrcy                                                    as GLAcctNetIncomeAmtInCCCrcy,
      @EndUserText.label: 'Adjustments for income and expenses not involving cashflows'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'OperatingCashFlowAmount'
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as IncomeAdjustmentAmount,

      @EndUserText.label: 'Depreciation of property, plant and equipment'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'IncomeAdjustmentAmount'
      TangibleAstDeprAmtInCCCrcy * (-1)                                       as OpgTngblAssetDeprAmtInCCCrcy,

      @EndUserText.label: 'Amortization of intangible assets'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'IncomeAdjustmentAmount'
      IntngblAssetAmtznAmtInCCCrcy * (-1)                                     as OpgIntngblAstAmtznAmtInCCCrcy,

      @EndUserText.label: 'Gain/Loss from fixed asset retirement'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'IncomeAdjustmentAmount'
      FixedAssetRtrmtAmtInCCCrcy * (-1)                                       as OpgFxdAstRtrmtAmtInCCCrcy,

      @EndUserText.label: 'Changes in assets and liabilities'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'OperatingCashFlowAmount'
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as AssetLiabilityAmount,

      @EndUserText.label: 'Increase (Decrease) of provisions'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'AssetLiabilityAmount'
      ProvisionAmtInCCCrcy * (-1)                                             as ProvisionAmtInCCCrcy,

      @EndUserText.label: 'Increase (Decrease) of inventories'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'AssetLiabilityAmount'
      InventoryAmtInCCCrcy * (-1)                                             as InventoryAmtInCCCrcy,

      @EndUserText.label: 'Increase (Decrease) in accounts receivables (net)'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'AssetLiabilityAmount'
      AcctsRblAmtInCCCrcy * (-1)                                              as AcctsRblAmtInCCCrcy,

      @EndUserText.label: 'Increase (Decrease) in other receivables (net)'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'AssetLiabilityAmount'
      AcctsOthRblAmtInCCCrcy * (-1)                                           as AcctsOthRblAmtInCCCrcy,

      @EndUserText.label: 'Increase (Decrease) in accounts payables'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'AssetLiabilityAmount'
      AcctsPyblAmtInCCCrcy,

      @EndUserText.label: 'Increase (Decrease) in other payables'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'AssetLiabilityAmount'
      AcctsOthPyblAmtInCCCrcy,

      @EndUserText.label: 'Net cash generated from continuing operating activities'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      OperatingActyCashAmtInCCCrcy,

      @EndUserText.label: 'Cash Flow from Investing Activities'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as InvestingCashFlowAmount,

      @EndUserText.label: 'Purchase (Sale) of fixed assets'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'InvestingCashFlowAmount'
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as FixedAssetAmount,

      @EndUserText.label: 'Obsolete: Purchase (Sale) of TngbleAsts'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'FixedAssetAmount'
      @AnalyticsDetails.query.hidden: true
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as TangibleAssetAmount,

      @EndUserText.label: 'Purchase (Sale) of tangible assets'
      @AnalyticsDetails.query.axis: #ROWS
      //   @AnalyticsDetails.query.elementHierarchy.parent: 'TangibleAssetAmount'
      @AnalyticsDetails.query.elementHierarchy.parent: 'FixedAssetAmount'
      @AnalyticsDetails.query.formula : '(-1)*TangibleAstAmtInCCCrcy   + TangibleAstDeprAmtInCCCrcy'
      TangibleAstAmtInCCCrcy* (-1)                                            as TangibleAstAmtInCCCrcy,

      @EndUserText.label: 'Obsolete: Depreciation of TngbleAsts'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'TangibleAssetAmount'
      @AnalyticsDetails.query.hidden: true
      TangibleAstDeprAmtInCCCrcy                                              as TangibleAstDeprAmtInCCCrcy,

      @EndUserText.label: 'Obsolete: Purchase (Sale) of IntngblAsts'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'FixedAssetAmount'
      @AnalyticsDetails.query.hidden: true
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as IntangibleAssetAmount,

      @EndUserText.label: 'Purchase (Sale) of intangible assets'
      @AnalyticsDetails.query.axis: #ROWS
      //      @AnalyticsDetails.query.elementHierarchy.parent: 'IntangibleAssetAmount'
      @AnalyticsDetails.query.elementHierarchy.parent: 'FixedAssetAmount'
      @AnalyticsDetails.query.formula : '(-1)*IntangibleAstAmtInCCCrcy  + IntngblAssetAmtznAmtInCCCrcy'
      IntangibleAstAmtInCCCrcy * (-1)                                         as IntangibleAstAmtInCCCrcy,

      @EndUserText.label: 'Obsolete: Amortization of IntngblAsts'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'IntangibleAssetAmount'
      @AnalyticsDetails.query.hidden: true
      IntngblAssetAmtznAmtInCCCrcy                                            as IntngblAssetAmtznAmtInCCCrcy,

      @EndUserText.label: 'Gain/Loss from retirement of fixed assets'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'FixedAssetAmount'
      FixedAssetRtrmtAmtInCCCrcy                                              as InvstgFxdAstRtrmtAmtInCCCrcy,

      @EndUserText.label: 'Increase (Decrease) in long-term investments'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'InvestingCashFlowAmount'
      LongTermInvmtAmtInCCCrcy * (-1)                                         as LongTermInvmtAmtInCCCrcy,

      @EndUserText.label: 'Net cash used in continuing investing activities'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      InvestingActyCashAmtInCCCrcy,

      @EndUserText.label: 'Cash Flow from Financing Activities'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      case when SemanticTag = '*' then AmountInCompanyCodeCurrency else 0 end as FinancingCashFlowAmount,

      @EndUserText.label: 'Increase (Decrease) in common stocks'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'FinancingCashFlowAmount'
      CommonStockAmtInCCCrcy,


      @EndUserText.label: 'Increase (Decrease) in Borrowings'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'FinancingCashFlowAmount'
      NotesReceivableAmtInCCCrcy,

      @EndUserText.label: 'Net cash generated from financing activities'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      FinancingActyCashAmtInCCCrcy,

      @EndUserText.label: 'Net Cash Flow'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      NetCashAmtInCCCrcy,

      @EndUserText.label: 'Cash Flow Validation'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      CashAndCashEqvlntAmtInCCCrcy,

      @EndUserText.label: 'Validation Balance'
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.elementHierarchy.parent: 'CashFlowAmount'
      @AnalyticsDetails.query.formula: '$projection.NetCashAmtInCCCrcy - $projection.CashAndCashEqvlntAmtInCCCrcy'
      0                                                                       as CashValidationBalAmtInCCCrcy,

      //No where used, only add to fix ATC error
      ChartOfAccounts,
      FiscalYearVariant,
      FiscalYear,
      ControllingArea,
      _GLAccountInChartOfAccounts,
      _FiscalYearVariant,
      _FiscalYear,
      _ProfitCenter,
      _CostCenter

}
where
      AccountingDocumentCategory <> 'J'
  and FiscalPeriod               between $parameters.P_FromFiscalPeriod and $parameters.P_ToFiscalPeriod
```
