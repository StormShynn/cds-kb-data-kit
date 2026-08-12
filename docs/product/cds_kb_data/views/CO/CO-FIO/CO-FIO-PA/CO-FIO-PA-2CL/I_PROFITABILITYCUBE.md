---
name: I_PROFITABILITYCUBE
description: "General Ledger Account Line Item of Profitability - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROFITABILITYCUBE')/$value
semantic_en: "General Ledger Account Line Item of Profitability - Cube"
semantic_vi: "G/L Account Line Item of Profitability - Cube — CDS view giao diện dựa trên P_SemTagAndSubLedgerItem."
keywords:
  - "GL Account Line Item of Profitability - Cube"
  - "g/l"
  - "account"
  - "line"
  - "item"
  - "profitability"
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
  - CO
  - account
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
---
# I_PROFITABILITYCUBE

**General Ledger Account Line Item of Profitability - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROFITABILITYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `RevenueAdjustAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `VarblCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Variable |
| `ContrbnMargin1AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin I |
| `FxdCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Fixed |
| `PriceDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Price Differences |
| `ContrbnMargin2AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin II |
| `AdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `ContrbnMargin3AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin III |
| `InptPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Global Currency |
| `OutpPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Global Currency |
| `InptQtyVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Global Currency |
| `RsceUsgeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Global Currency |
| `LotSizeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Global Currency |
| `InputRmngVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Global Currency |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Deduction Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment Amount in Company Code Currency |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount in Company Code Currency |
| `VarblCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS  - Variable Amount in Company Code Currency |
| `ContrbnMargin1AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 1 Amount in Company Code Currency |
| `FxdCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Fixed Amount in Company Code Currency |
| `PriceDifferenceAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Price Differences Amount in Company Code Currency |
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 2 Amount in Company Code Currency |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Administration Overhead Amt in Company Code Currency |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Sales Overhead Amount in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Marketing Overhead Amount in Company Code Currency |
| `RnDOverheadAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 3 Amount in Company Code Currency |
| `InptPriceVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Company Code Currency |
| `OutpPrVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Company Code Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Billed Quantity |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `_OrganizationDivision` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROFITABILITYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROFITABILITYCUBE')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IPROFITABIC',
               compiler.compareFilter: true,
               buffering.status: #NOT_ALLOWED,
               preserveKey: true }
@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #REQUIRED
                 }
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: { representativeKey: 'LedgerGLLineItem',
                usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'G/L Account Line Item of Profitability - Cube'
define view I_ProfitabilityCube
  with parameters
    @Consumption.defaultValue: 'YPS2'
    P_GLAccountHierarchy : fins_sem_tag_hryid
  as select from P_SemTagAndSubLedgerItem(
                 P_GLAccountHierarchy : :P_GLAccountHierarchy
                 )
  association [0..1] to I_Division         as _OrganizationDivision  on  $projection.OrganizationDivision = _OrganizationDivision.Division
  association [0..1] to I_CustomerSupplierIndustry  as _CustomerSupplierIndustry  on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustry.Industry
  association [1..1] to E_JournalEntryItem as _Extension on  $projection.SourceLedger       = _Extension.SourceLedger
                                                         and $projection.CompanyCode        = _Extension.CompanyCode
                                                         and $projection.FiscalYear         = _Extension.FiscalYear
                                                         and $projection.AccountingDocument = _Extension.AccountingDocument
                                                         and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

{
      @ObjectModel.foreignKey.association: '_Ledger'
      @Environment.sql.passValue: true
  key Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Environment.sql.passValue: true
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      @Environment.sql.passValue: true
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      FiscalPeriod,
      
      FiscalYearVariant,
      @Semantics.fiscal.year: true
      LedgerFiscalYear,
      
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      @Environment.sql.passValue: true
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
  
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,

      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,  
      OrderCategory,
      //ConditionContract,
      //@AnalyticsDetails.query.display: #KEY
      //FiscalYearPeriod,  
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts' 
      GLAccount,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerSupplierCountry,
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToParty,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      // @AnalyticsDetails.query.display: #KEY
      //BusinessTransactionType,
     // SubLedgerAcctLineItemType,
      
      
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure:true
      BaseUnit,
      
      OrderType,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      
      //@ObjectModel.foreignKey.association: '_Project'
      Project,
      //@ObjectModel.foreignKey.association: '_WBSElement'
      WBSElement,
      //@ObjectModel.foreignKey.association: '_ProjectNetwork'
      ProjectNetwork,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
            
      LineIsSemTagCalculated,
      
      @Semantics.currencyCode:true
      CompanyCodeCurrency,
      @Semantics.currencyCode:true
      GlobalCurrency,
      //@Semantics.currencyCode:true
      //FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      AmountInGlobalCurrency,

      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      //AmountInFreeDefinedCurrency1,


      // Key Figures in Global Currency
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      BilledRevenueAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      SalesDeductionAmountInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      RevenueAdjustAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      RecognizedRevnAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      VarblCOGSAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ContrbnMargin1AmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      FxdCOGSAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      PriceDifferenceAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ContrbnMargin2AmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      AdminOverheadAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      SalesOverheadAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      MarketingOverheadAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      RnDOverheadAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ContrbnMargin3AmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      InptPriceVarcAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      OutpPriceVarcAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      InptQtyVarcAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      RsceUsgeVarcAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      LotSizeVarcAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      InputRmngVarcAmtInGlobCrcy,

      // Key Figures in Company Code Currency
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      BilledRevenueAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      SalesDeductionAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      RevenueAdjustmentAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      RecognizedRevnAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      VarblCOGSAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      ContrbnMargin1AmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      FxdCOGSAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      PriceDifferenceAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      ContrbnMargin2AmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      AdminOverheadAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      SalesOverheadAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      MarketingOvhdAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      RnDOverheadAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      ContrbnMargin3AmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      InptPriceVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      OutpPrVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      InptQtyVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      RsceUsgeVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      LotSizeVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      InputRmngVarcAmtInCoCodeCrcy,
  
      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      @Semantics.unitOfMeasure:true
      CostSourceUnit,
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      @Aggregation.default: #SUM
      BilledValnQtyInCostSourceUnit,
      
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      ServiceDocumentType,
      ServiceDocument,
      ValuationArea,
      AssetClass,
      PostingDate,
      
      _ServiceDocument,
      _CurrentProfitCenter,
      _AccountingDocumentType,
      _Supplier,
      _CurrentCostCenter,
      _CostCenter,
      _FinancialAccountType,

      _Ledger,
      _SourceLedger,
      _JournalEntry,
      _CompanyCode,
      _SemanticTag,
      _FiscalYear,
      _Customer,
      _CustomerGroup,
      _SoldProduct,
      _SoldProductGroup,
      _ProfitCenter,
      _ControllingArea,
      _CostSourceUnit,
      _SalesDocument,
      _Order,
      _DistributionChannel,
      _BaseUnit,
      _Segment,
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
      //_WBSElement,
      //_Project,
      //_ProjectNetwork,
      _FunctionalArea,
      _Plant,
      _SalesOrganization,
      _SalesDistrict,
      _CustomerSupplierCountry,
      _ShipToParty,
      _BillToParty,
      _OrganizationDivision,
      _CustomerSupplierIndustry,
      _LedgerFiscalYearForVariant
}
where
  AccountAssignmentType = 'EO'
```
