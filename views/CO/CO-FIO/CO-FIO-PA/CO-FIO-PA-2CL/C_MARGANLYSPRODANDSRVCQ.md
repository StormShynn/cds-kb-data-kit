---
name: C_MARGANLYSPRODANDSRVCQ
description: This CDS view provides analytical insights into the margins of products and services within a company. It aggregates and presents financial data related to revenue, costs, and margins, allowing you to analyse profitability across various dimensions such as company code, fiscal year, profit center, and customer. This CDS view provides the data to answer the following business questions: What are the margins for different products and services offered by the company? How do margins vary across different company codes and fiscal years? What is the recognized revenue and cost of goods sold (COGS) for specific profit centers? How do margins differ across various sales orders, service contracts, and business solution orders? What is the impact of deferred and accrued revenues and COGS on overall profitability? How do margins compare across different customer groups and sales districts? What are the financial impacts of reserves, such as imminent loss reserves and sales deduction reserves, on margins? How do down payments and manual contract accruals affect the financial performance of products and services? What is the percentage margin for recognized revenue, and how does it vary across different dimensions? How do different ledger fiscal years, and fiscal periods, impact the financial analysis of margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARGANLYSPRODANDSRVCQ')/$value
semantic_en: This CDS view provides analytical insights into the margins of products and services within a company. It aggregates and presents financial data related to revenue, costs, and margins, allowing you to analyse profitability across various dimensions such as company code, fiscal year, profit center, and customer. This CDS view provides the data to answer the following business questions: What are the margins for different products and services offered by the company? How do margins vary across different company codes and fiscal years? What is the recognized revenue and cost of goods sold (COGS) for specific profit centers? How do margins differ across various sales orders, service contracts, and business solution orders? What is the impact of deferred and accrued revenues and COGS on overall profitability? How do margins compare across different customer groups and sales districts? What are the financial impacts of reserves, such as imminent loss reserves and sales deduction reserves, on margins? How do down payments and manual contract accruals affect the financial performance of products and services? What is the percentage margin for recognized revenue, and how does it vary across different dimensions? How do different ledger fiscal years, and fiscal periods, impact the financial analysis of margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Product and Service Margins — CDS view tiêu dùng dựa trên I_MargAnlysProdAndSrvcCube.
keywords:
  - Product and Service Margins
  - product
  - and
  - service
  - margins
  - company
  - code
  - fiscal
  - year
  - ledger
  - period
tags:
  - CO
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - contract
  - customer
  - lob:controlling
  - lob:finance
  - order
  - payment
  - product
  - sales-order
  - bo:material
---
# C_MARGANLYSPRODANDSRVCQ

**This CDS view provides analytical insights into the margins of products and services within a company. It aggregates and presents financial data related to revenue, costs, and margins, allowing you to analyse profitability across various dimensions such as company code, fiscal year, profit center, and customer. This CDS view provides the data to answer the following business questions: What are the margins for different products and services offered by the company? How do margins vary across different company codes and fiscal years? What is the recognized revenue and cost of goods sold (COGS) for specific profit centers? How do margins differ across various sales orders, service contracts, and business solution orders? What is the impact of deferred and accrued revenues and COGS on overall profitability? How do margins compare across different customer groups and sales districts? What are the financial impacts of reserves, such as imminent loss reserves and sales deduction reserves, on margins? How do down payments and manual contract accruals affect the financial performance of products and services? What is the percentage margin for recognized revenue, and how does it vary across different dimensions? How do different ledger fiscal years, and fiscal periods, impact the financial analysis of margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARGANLYSPRODANDSRVCQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  | `cast( WBSElementExternalID as fis_wbsext_no_conv )` | `CHAR(24)` | WBS Element External ID |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `Reserves` |  | |  | `cast ( 0 as fins_trr_reserves )` | `CURR(23)` | Reserves |
| `ProjAndSlsOrdStkAmtInCCCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `DownPaymentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Customer Down Payment |
| `MnlContrAccrPnLItmAmtInCCCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals for Profit/Loss |
| `MarginInPct` |  | |  | `cast ( 0 as fins_trr_margininpct )` | `DEC(5)` | Margin in Percent |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARGANLYSPRODANDSRVCQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARGANLYSPRODANDSRVCQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPROSRVMARGIN'
@Analytics.query: true
@OData.publish: true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Product and Service Margins'
@Metadata.allowExtensions: true
@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_MargAnlysProdAndSrvcQ
  with parameters
    @Consumption.valueHelpDefinition: [{
        entity: {
            name:    'I_FinancialStatementHierarchy',
            element: 'GLAccountHierarchy'
        }
        }]
    @Consumption.defaultValue: 'YPS2'
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea', 
          resultElement: 'CtrlgStdFinStatementVersion' }
    @AnalyticsDetails.query.variableSequence : 10
    P_GLAccountHierarchy : fins_sem_tag_hryid
      
   as select from I_MargAnlysProdAndSrvcCube(P_GLAccountHierarchy :$parameters.P_GLAccountHierarchy)  as I_MargAnlysProdAndSrvcCube
{
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  @AnalyticsDetails.query.variableSequence : 30
  @Consumption.derivation: {
     lookupEntity:  'F_FsclYrDteFuncSglVal',
     resultElement: 'FiscalYear',
     binding: [
          { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALYEAR' },
          { targetParameter: 'P_FiscalYearVariant', type : #CONSTANT, value: 'K4' }
          ]
  }
  FiscalYear,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true, defaultValue: '0L' }
  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.display: #KEY
  Ledger,  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 40
  @AnalyticsDetails.query.display: #KEY
  @Consumption.derivation: {
     lookupEntity:  'F_FsclPerdDteFuncSglVal',
     resultElement: 'FiscalPeriod',
     binding: [
          { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALPERIOD' },
          { targetParameter: 'P_FiscalYearVariant', type : #CONSTANT, value: 'K4' }
          ]
  }
  FiscalPeriod,
  @AnalyticsDetails.query.display: #KEY
  @AnalyticsDetails.query.variableSequence : 40
  FiscalYearPeriod,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false , defaultValue: 'EO', defaultValueHigh: 'SV' } 
  @AnalyticsDetails.query.variableSequence : 60
  @AnalyticsDetails.query.display: #KEY
  AccountAssignmentType,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 70
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,
  @AnalyticsDetails.query.variableSequence : 80
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  BusinessSolutionOrder,
  @AnalyticsDetails.query.variableSequence : 90 
  @AnalyticsDetails.query.display: #KEY
  BusinessSolutionOrderItem,
  @AnalyticsDetails.query.variableSequence : 100
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  ServiceDocument,
  @AnalyticsDetails.query.variableSequence : 110
  @AnalyticsDetails.query.display: #KEY
  ServiceDocumentItem,
  @AnalyticsDetails.query.variableSequence : 120
  @AnalyticsDetails.query.display: #KEY
  ServiceDocumentType,
  @AnalyticsDetails.query.variableSequence : 130
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  ServiceContract,
  @AnalyticsDetails.query.variableSequence : 140
  @AnalyticsDetails.query.display: #KEY
  ServiceContractItem,
  @AnalyticsDetails.query.variableSequence : 150
  @AnalyticsDetails.query.display: #KEY
  ServiceContractType,
  @AnalyticsDetails.query.variableSequence : 160
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  SalesOrder,
  @AnalyticsDetails.query.variableSequence : 170
  @AnalyticsDetails.query.display: #KEY
  @ObjectModel.text.element: null
  SalesOrderItem,
  @AnalyticsDetails.query.variableSequence : 160
  @AnalyticsDetails.query.display: #KEY
  SalesDocument,
  @AnalyticsDetails.query.variableSequence : 170
  @AnalyticsDetails.query.display: #KEY
  @ObjectModel.text.element: null
  SalesDocumentItem,
  @AnalyticsDetails.query.variableSequence : 180
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  ProjectExternalID,
  @AnalyticsDetails.query.axis:#ROWS
  @AnalyticsDetails.query.variableSequence : 190
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldProductGroup,
  @AnalyticsDetails.query.variableSequence : 200
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldProduct,
  @AnalyticsDetails.query.variableSequence : 210
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerGroup,
  @AnalyticsDetails.query.variableSequence : 220
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  Customer,
  @AnalyticsDetails.query.variableSequence : 230
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  ProviderContract,
  @AnalyticsDetails.query.variableSequence : 240
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY
  ProviderContractItem,
  @AnalyticsDetails.query.variableSequence : 250
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesDistrict,
  
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,
  @AnalyticsDetails.query.display: #KEY_TEXT
  BillToParty,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerSupplierCountry,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DistributionChannel,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrganizationDivision,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Plant,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ShipToParty,
  
  //@Consumption.dynamicLabel: { label: ' WBS Element (Deprecated)'}
  //@Consumption.hidden: true
  //@AnalyticsDetails.query.hidden: true
  //@UI : { hidden: true }
  @AnalyticsDetails.query.display: #KEY_TEXT
  WBSElement,
  
  @AnalyticsDetails.query.display: #KEY_TEXT
  cast( WBSElementExternalID as fis_wbsext_no_conv ) as WBSElementExternalID,  //Convert to WBS Element External ID, refer to line items query C_JournalEntryItemBrowser
  
  ServicesRenderedDate,
  OrderID,
  
  CompanyCodeCurrency,
  BilledRevenueAmtInCoCodeCrcy,
  RecognizableCostAmtInCCCrcy,  
  RecognizedRevnAmtInCCCrcy,
  RecognizedCOGSAmtInCCCrcy,
  RecognizedMarginAmtInCCCrcy,
  RevenueAdjustmentAmtInCCCrcy,
  COGSAdjustmentAmtInCCCrcy,
  DeferredCOGSAmtInCCCrcy,
  DeferredRevenueAmtInCCCrcy,
  AccruedRevenueAmtInCCCrcy,
  AccruedCOGSAmtInCCCrcy,
  
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.formula: 'ImminentLossRsrvAmtInCCCrcy + SalesDeductReserveAmtInCCCrcy + UnrlzdCostsReserveAmtInCCCrcy'
  cast ( 0 as fins_trr_reserves ) as Reserves,
    
  ProjAndSlsOrdStkAmtInCCCrcy,

  DownPaymentAmtInCCCrcy,
  
  MnlContrAccrPnLItmAmtInCCCrcy,
  
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.RecognizedMarginAmtInCCCrcy / $projection.RecognizedRevnAmtInCCCrcy * 100'
  @AnalyticsDetails.query.decimals: 2
  cast ( 0 as fins_trr_margininpct )                                  as MarginInPct,

  
//exposed these two fields because some odd ATC check errors
  ChartOfAccounts,
  ControllingArea,
  BusinessTransactionType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerSupplierIndustry,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrganization,
  
  FiscalYearVariant,
  @Semantics.fiscal.year: true
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 260
  LedgerFiscalYear
}
```
