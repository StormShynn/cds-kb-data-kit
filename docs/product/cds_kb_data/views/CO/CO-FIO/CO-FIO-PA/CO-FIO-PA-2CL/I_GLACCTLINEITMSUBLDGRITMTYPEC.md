---
name: I_GLACCTLINEITMSUBLDGRITMTYPEC
description: "General Ledger Account Line Item based on SubLedger Item Type - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTLINEITMSUBLDGRITMTYPEC')/$value
semantic_en: "General Ledger Account Line Item based on SubLedger Item Type - Cube"
semantic_vi: "G/L Account Line Item based on SubLedger Item Type - Cube — CDS view giao diện dựa trên I_GLAccountLineItem."
keywords:
  - "GL Account Line Item Calculated Based on SubLedger Item Type"
  - "g/l"
  - "account"
  - "line"
  - "item"
  - "based"
  - "subledger"
  - "type"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
tags:
  - CO
  - account
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
---
# I_GLACCTLINEITMSUBLDGRITMTYPEC

**General Ledger Account Line Item based on SubLedger Item Type - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTLINEITMSUBLDGRITMTYPEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` | ✓ | |  | `cast ( cast( '' as abap.char( 10 ) ) as fins_sem_tag preserving type )` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Project` |  | |  | `cast( Project as fis_project_no_conv preserving type )` | `CHAR(24)` | Project |
| `WBSElement` |  | |  | `cast( WBSElement as fis_wbs_no_conv preserving type )` | `CHAR(24)` | WBS Element |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Company Currency |
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `InptPriceVarcAmtInGlobCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09130' then cast (AmountInGlobalCurrency * (-1) as fin_inptprvarcamt_in_globcrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_inptprvarcamt_in_globcrcy) end` | `CURR(23)` | Input Price Variance Amount in Global Currency |
| `InptQtyVarcAmtInGlobCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09131' then cast (AmountInGlobalCurrency * (-1) as fin_inptqtyvarcamt_in_globcrcy ) else cast ( cast ('0' as abap.curr( 23,2)) as fin_inptqtyvarcamt_in_globcrcy ) end` | `CURR(23)` | Input Quantity Variance Amount in Global Currency |
| `RsceUsgeVarcAmtInGlobCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09132' then cast (AmountInGlobalCurrency * (-1) as fin_rsceusgevarcamt_in_glbcrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_rsceusgevarcamt_in_glbcrcy ) end` | `CURR(23)` | Resource Usage Variance Amount in Global Currency |
| `LotSizeVarcAmtInGlobCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09139' then cast (AmountInGlobalCurrency * (-1) as fin_lotsizevarcamt_in_globcrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_lotsizevarcamt_in_globcrcy ) end` | `CURR(23)` | Lot Size Variance Amount in Global Currency |
| `InputRmngVarcAmtInGlobCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09140' then cast (AmountInGlobalCurrency * (-1) as fin_inptrmngvarcamt_in_glbcrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_inptrmngvarcamt_in_glbcrcy) end` | `CURR(23)` | Remaining Variance Amount in Global Currency |
| `OutpPriceVarcAmtInGlobCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09138' then cast (AmountInGlobalCurrency * (-1) as fins_outpprvarcamt_in_glbcrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fins_outpprvarcamt_in_glbcrcy) end` | `CURR(23)` | Output Price Variance Amount in Global Currency |
| `InptPriceVarcAmtInCoCodeCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09130' then cast (AmountInCompanyCodeCurrency * (-1) as fin_inptprvarcamt_in_cccrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_inptprvarcamt_in_cccrcy) end` | `CURR(23)` | Input Price Variance Amount in Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09131' then cast (AmountInCompanyCodeCurrency * (-1) as fin_inptqtyvarcamt_in_cccrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_inptqtyvarcamt_in_cccrcy) end` | `CURR(23)` | Input Quantity Variance Amount in Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09132' then cast (AmountInCompanyCodeCurrency * (-1) as fin_rsceusgevarcamt_in_cccrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_rsceusgevarcamt_in_cccrcy) end` | `CURR(23)` | Resource Usage Variance Amount in Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09139' then cast (AmountInCompanyCodeCurrency * (-1) as fin_lotsizevarcamt_in_cccrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_lotsizevarcamt_in_cccrcy) end` | `CURR(23)` | Lot Size Variance Amount in Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09140' then cast (AmountInCompanyCodeCurrency * (-1) as fin_inptrmngvarcamt_in_cccrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fin_inptrmngvarcamt_in_cccrcy) end` | `CURR(23)` | Remaining Variance Amount in Company Code Currency |
| `OutpPrVarcAmtInCoCodeCrcy` |  | |  | `case when SubLedgerAcctLineItemType = '09138' then cast (AmountInCompanyCodeCurrency * (-1) as fins_outpprvarcamt_in_cccrcy) else cast ( cast ('0' as abap.curr( 23,2)) as fins_outpprvarcamt_in_cccrcy) end` | `CURR(23)` | Output Price Variance Amount in Company Code Currency |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `_SemanticTag` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
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
| `_FiscalYear` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
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
| `_SemanticTag` | `I_SemanticTag` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTLINEITMSUBLDGRITMTYPEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTLINEITMSUBLDGRITMTYPEC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGLSUBLDGITP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'G/L Account Line Item based on SubLedger Item Type - Cube'
@Metadata.allowExtensions: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@Analytics.internalName: #LOCAL
@Search.searchable: false
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]

define view I_GLAcctLineItmSubLdgrItmTypeC
  as select from I_GLAccountLineItem
  association [0..1] to I_SemanticTag            as _SemanticTag                   on $projection.SemanticTag = _SemanticTag.SemanticTag
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
  key cast ( cast( '' as abap.char( 10 ) ) as fins_sem_tag preserving type )                  as SemanticTag,
      FiscalPeriod,
      
      @Semantics.fiscal.year: true
      LedgerFiscalYear,
      
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,

      SalesOrder,

      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      OrderCategory,      
      ConditionContract,
      @AnalyticsDetails.query.display: #KEY
      FiscalYearPeriod,
      // Test workaround
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,      
      //ChartOfAccounts, 
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerSupplierCountry,
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
      @AnalyticsDetails.query.display: #KEY
      BusinessTransactionType,
      SubLedgerAcctLineItemType,
      AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      CostSourceUnit,
      
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure:true
      BaseUnit,
      
//      FixedQuantity,
      
      OrderType,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      
      //@ObjectModel.foreignKey.association: '_Project'
      cast( Project as fis_project_no_conv preserving type ) as Project,
      //@ObjectModel.foreignKey.association: '_WBSElement'
      cast( WBSElement as fis_wbs_no_conv preserving type ) as WBSElement,
      //@ObjectModel.foreignKey.association: '_ProjectNetwork'
      ProjectNetwork,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,

      FiscalYearVariant,
      ServiceContract,
      ServiceContractItem,
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,
      ProviderContract,
      ProviderContractItem,
      ServiceContractType,
      ServiceDocument,
      ServiceDocumentItem,
      ServiceDocumentType,
      ProjectInternalID,
      
      BusinessArea,
      
      _FiscalYearVariant,
      _ServiceContractType,
      
      @Semantics.currencyCode:true
      GlobalCurrency,

      @Semantics.currencyCode:true
      CompanyCodeCurrency,

      @Semantics.currencyCode:true
      FreeDefinedCurrency1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      AmountInGlobalCurrency,
      
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      FixedAmountInCoCodeCrcy,
      
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      FixedAmountInGlobalCrcy,

      // Key Figures in Global Currency
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09130' then cast (AmountInGlobalCurrency * (-1) as fin_inptprvarcamt_in_globcrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_inptprvarcamt_in_globcrcy) end   as InptPriceVarcAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09131'  then cast (AmountInGlobalCurrency * (-1) as fin_inptqtyvarcamt_in_globcrcy )
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_inptqtyvarcamt_in_globcrcy ) end as InptQtyVarcAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09132' then cast (AmountInGlobalCurrency  * (-1) as fin_rsceusgevarcamt_in_glbcrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_rsceusgevarcamt_in_glbcrcy ) end as RsceUsgeVarcAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09139'  then cast (AmountInGlobalCurrency * (-1) as fin_lotsizevarcamt_in_globcrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_lotsizevarcamt_in_globcrcy ) end as LotSizeVarcAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09140'  then cast (AmountInGlobalCurrency * (-1) as fin_inptrmngvarcamt_in_glbcrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_inptrmngvarcamt_in_glbcrcy) end  as InputRmngVarcAmtInGlobCrcy,
      
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09138'  then cast (AmountInGlobalCurrency * (-1) as fins_outpprvarcamt_in_glbcrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fins_outpprvarcamt_in_glbcrcy) end   as OutpPriceVarcAmtInGlobCrcy,

      // Key Figures in Company Code Currency
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09130' then cast (AmountInCompanyCodeCurrency * (-1) as fin_inptprvarcamt_in_cccrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_inptprvarcamt_in_cccrcy) end     as InptPriceVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09131'  then cast (AmountInCompanyCodeCurrency * (-1) as fin_inptqtyvarcamt_in_cccrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_inptqtyvarcamt_in_cccrcy) end    as InptQtyVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09132' then cast (AmountInCompanyCodeCurrency * (-1) as fin_rsceusgevarcamt_in_cccrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_rsceusgevarcamt_in_cccrcy) end   as RsceUsgeVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09139'  then cast (AmountInCompanyCodeCurrency * (-1) as fin_lotsizevarcamt_in_cccrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_lotsizevarcamt_in_cccrcy) end    as LotSizeVarcAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09140'  then cast (AmountInCompanyCodeCurrency * (-1) as fin_inptrmngvarcamt_in_cccrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fin_inptrmngvarcamt_in_cccrcy) end   as InputRmngVarcAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      case when SubLedgerAcctLineItemType = '09138'  then cast (AmountInCompanyCodeCurrency * (-1) as fins_outpprvarcamt_in_cccrcy)
      else cast ( cast ('0' as abap.curr( 23,2))   as fins_outpprvarcamt_in_cccrcy) end   as OutpPrVarcAmtInCoCodeCrcy,

      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
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
      _SalesOrder,
      _SalesOrderItem,
      _Order,
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
      _DistributionChannel,
      _BaseUnit,
      _Segment,
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
      _LedgerFiscalYearForVariant

}
```
