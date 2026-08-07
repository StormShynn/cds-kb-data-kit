---
name: C_PRODUCTPROFITABILITYQUERY
description: This CDS view provides insights into product profitability by analyzing production variances. It allows you to evaluate the financial performance by examining various key figures related to revenue, cost of goods sold, and contribution margins, in both global and company code currencies. The view supports detailed analysis by different dimensions, such as company code, fiscal year, product, customer, and sales organization. This CDS view provides the data to answer the following business questions: What is the profitability of products considering production variances? How do production variances impact the contribution margins of products? What are the revenue and cost figures for products in both global and company code currencies? How do different dimensions such as company code, fiscal year, and product group affect product profitability? What are the detailed components of price differences, such as input price variance and resource usage variance? How do sales deductions and revenue adjustments affect recognized revenue? What is the contribution margin per unit for products in global currency? How does the profitability of products vary across different sales organizations and customer groups? What is the margin percentage in global currency relative to recognized revenue? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTPROFITABILITYQUERY')/$value
semantic_en: This CDS view provides insights into product profitability by analyzing production variances. It allows you to evaluate the financial performance by examining various key figures related to revenue, cost of goods sold, and contribution margins, in both global and company code currencies. The view supports detailed analysis by different dimensions, such as company code, fiscal year, product, customer, and sales organization. This CDS view provides the data to answer the following business questions: What is the profitability of products considering production variances? How do production variances impact the contribution margins of products? What are the revenue and cost figures for products in both global and company code currencies? How do different dimensions such as company code, fiscal year, and product group affect product profitability? What are the detailed components of price differences, such as input price variance and resource usage variance? How do sales deductions and revenue adjustments affect recognized revenue? What is the contribution margin per unit for products in global currency? How does the profitability of products vary across different sales organizations and customer groups? What is the margin percentage in global currency relative to recognized revenue? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Product Profitability with Production Variances - Qry — CDS view tiêu dùng dựa trên I_ProfitabilityCube.
keywords:
  - Product Profitability with Production Variances
  - product
  - profitability
  - with
  - production
  - variances
  - qry
  - ledger
  - company
  - code
  - fiscal
  - year
  - period
  - profit
  - center
tags:
  - CO
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - lob:controlling
  - lob:finance
  - product
  - bo:companycode
---
# C_PRODUCTPROFITABILITYQUERY

**This CDS view provides insights into product profitability by analyzing production variances. It allows you to evaluate the financial performance by examining various key figures related to revenue, cost of goods sold, and contribution margins, in both global and company code currencies. The view supports detailed analysis by different dimensions, such as company code, fiscal year, product, customer, and sales organization. This CDS view provides the data to answer the following business questions: What is the profitability of products considering production variances? How do production variances impact the contribution margins of products? What are the revenue and cost figures for products in both global and company code currencies? How do different dimensions such as company code, fiscal year, and product group affect product profitability? What are the detailed components of price differences, such as input price variance and resource usage variance? How do sales deductions and revenue adjustments affect recognized revenue? What is the contribution margin per unit for products in global currency? How does the profitability of products vary across different sales organizations and customer groups? What is the margin percentage in global currency relative to recognized revenue? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTPROFITABILITYQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
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
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `RevenueAdjustAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `VarblCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Variable |
| `ContrbnMargin1AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin I |
| `FxdCOGSAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Fixed |
| `PriceDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Price Differences |
| `InptPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Global Currency |
| `InptQtyVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Global Currency |
| `RsceUsgeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Global Currency |
| `LotSizeVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Global Currency |
| `InputRmngVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Global Currency |
| `ContrbnMargin2AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin II |
| `AdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `ContrbnMargin3AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin III |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Deduction Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment Amount in Company Code Currency |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount in Company Code Currency |
| `VarblCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS  - Variable Amount in Company Code Currency |
| `ContrbnMargin1AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 1 Amount in Company Code Currency |
| `FxdCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Fixed Amount in Company Code Currency |
| `PriceDifferenceAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Price Differences Amount in Company Code Currency |
| `InptPriceVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Price Variance Amount in Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Company Code Currency |
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 2 Amount in Company Code Currency |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Administration Overhead Amt in Company Code Currency |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Sales Overhead Amount in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Marketing Overhead Amount in Company Code Currency |
| `RnDOverheadAmtInCCCrcy` |  | |  |  | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | COGS - Contribution Margin 3 Amount in Company Code Currency |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Billed Quantity |
| `UnitContrbnMargAmtInGlobCrcy` |  | |  | `cast ( 0 as fins_margin_per_unit )` | `QUAN(23)` | Contribution Margin per Unit |
| `UnitContrbnMargAmtInCCCrcy` |  | |  | `cast ( 0 as fins_margin_per_unit_cccrcy )` | `CURR(23)` | COGS - Contribution Margin per Unit Amt in Company Code Crcy |
| `OutpPriceVarcAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Global Currency |
| `OutpPrVarcAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Company Code Currency |
| `GlobalCurrencyMarginInPercent` |  | |  | `cast ( 0 as fins_trr_margininpct )` | `DEC(5)` | Margin in Percent |
| `MarginInPct` |  | |  | `cast ( 0 as fins_trr_margininpct_cccrcy )` | `DEC(5)` | Margin in Percent |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTPROFITABILITYQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTPROFITABILITYQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPRDPROFBIQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY 
@EndUserText.label: 'Product Profitability with Production Variances - Qry'
@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@Metadata.allowExtensions: true
@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_ProductProfitabilityQuery 
  with parameters
    @Consumption.valueHelpDefinition: [{
        entity: {
            name:    'I_FinancialStatementHierarchy',
            element: 'GLAccountHierarchy'
        }
        }]
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
          resultElement: 'CtrlgStdFinStatementVersion' }
    @AnalyticsDetails.query.variableSequence : 10
    @Consumption.defaultValue: 'YPS2'
    P_GLAccountHierarchy : fins_sem_tag_hryid
  as select from I_ProfitabilityCube(
                 P_GLAccountHierarchy : :P_GLAccountHierarchy
                 ) as I_ProfitabilityCube
{
      @Consumption.derivation: { lookupEntity: 'I_Ledger',
        resultElement: 'Ledger', binding: [
        { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
       }
      @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 20
      @AnalyticsDetails.query.display: #KEY
  key Ledger,
      @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,
      @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 40
      @AnalyticsDetails.query.display: #KEY
  key FiscalYear,
      @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 50
      @AnalyticsDetails.query.display: #KEY_TEXT
  key FiscalPeriod,
      //  key AccountingDocument,
      //  key LedgerGLLineItem,
      @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 80
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_ProfitCenterStdVH',
                   element: 'ProfitCenter' }
      }]
      ProfitCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldProduct,
      @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.variableSequence : 70
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldProductGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Customer,
      @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 60
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerGroup,
      
      @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 90
      @AnalyticsDetails.query.display: #KEY
      SalesDocument,
      @AnalyticsDetails.query.display: #KEY
      SalesDocumentItem,

      //@AnalyticsDetails.query.display: #KEY
      //ConditionContract,
      //@AnalyticsDetails.query.display: #KEY
      //FiscalYearPeriod,
      @AnalyticsDetails.query.display: #KEY_TEXT
      GLAccount,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerSupplierCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerSupplierIndustry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShipToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToParty,
      @AnalyticsDetails.query.display: #KEY
      ControllingArea,
      //@AnalyticsDetails.query.display: #KEY
      //BusinessTransactionType,
      //@AnalyticsDetails.query.display: #KEY
      //SubLedgerAcctLineItemType,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @Semantics.unitOfMeasure:true
      BaseUnit,
      
      OrderID,  
      //OrderType,
      OrderCategory,
      Plant,
      Project,
      Segment,
      WBSElement,

//    expose to fix ATC error
      ChartOfAccounts,
  
      @AnalyticsDetails.query.display: #KEY
      GlobalCurrency,
      @AnalyticsDetails.query.display: #KEY
      CompanyCodeCurrency,
      // @Semantics.currencyCode:true
      // FreeDefinedCurrency1,


      // Key Figures in Global Currency
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      BilledRevenueAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      SalesDeductionAmountInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      RevenueAdjustAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      RecognizedRevnAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      VarblCOGSAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      ContrbnMargin1AmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      FxdCOGSAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      PriceDifferenceAmtInGlobCrcy,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInGlobCrcy'
      InptPriceVarcAmtInGlobCrcy,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInGlobCrcy'
      InptQtyVarcAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInGlobCrcy'
      RsceUsgeVarcAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInGlobCrcy'
      LotSizeVarcAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInGlobCrcy'
      InputRmngVarcAmtInGlobCrcy,
 
            
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      ContrbnMargin2AmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      AdminOverheadAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      SalesOverheadAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      MarketingOverheadAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      RnDOverheadAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      ContrbnMargin3AmtInGlobCrcy,

      //// Key Figures in Company Code Currency
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      BilledRevenueAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      SalesDeductionAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      RevenueAdjustmentAmtInCCCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      RecognizedRevnAmtInCCCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      VarblCOGSAmtInCCCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      ContrbnMargin1AmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      FxdCOGSAmtInCCCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      PriceDifferenceAmtInCCCrcy,
      
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
      InptPriceVarcAmtInCoCodeCrcy,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
      InptQtyVarcAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
      RsceUsgeVarcAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
      LotSizeVarcAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
      InputRmngVarcAmtInCoCodeCrcy,      
      
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      ContrbnMargin2AmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      AdminOverheadAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      SalesOverheadAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      MarketingOvhdAmtInCoCodeCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      RnDOverheadAmtInCCCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      ContrbnMargin3AmtInCoCodeCrcy,

      // Additional key figures
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      BilledValnQtyInCostSourceUnit,
      
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: '$projection.ContrbnMargin1AmtInGlobCrcy / $projection.BilledValnQtyInCostSourceUnit'
      @AnalyticsDetails.query.decimals: 2
      cast ( 0 as fins_margin_per_unit )        as UnitContrbnMargAmtInGlobCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: '$projection.ContrbnMargin1AmtInCoCodeCrcy / $projection.BilledValnQtyInCostSourceUnit'
      @AnalyticsDetails.query.decimals: 2
      cast ( 0 as fins_margin_per_unit_cccrcy ) as UnitContrbnMargAmtInCCCrcy,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInGlobCrcy'
      OutpPriceVarcAmtInGlobCrcy,
      
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
      OutpPrVarcAmtInCoCodeCrcy,
      
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: false
      @Aggregation.default: #FORMULA
      @AnalyticsDetails.query.formula: '$projection.ContrbnMargin2AmtInGlobCrcy / $projection.RecognizedRevnAmtInGlobCrcy * 100'
      @AnalyticsDetails.query.decimals: 2
      cast ( 0 as fins_trr_margininpct )                                  as GlobalCurrencyMarginInPercent,

      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.hidden: true
      @Aggregation.default: #FORMULA
      @AnalyticsDetails.query.formula: '$projection.ContrbnMargin2AmtInCoCodeCrcy / $projection.RecognizedRevnAmtInCCCrcy * 100'
      @AnalyticsDetails.query.decimals: 2
      cast ( 0 as fins_trr_margininpct_cccrcy )                           as MarginInPct,
  
      FiscalYearVariant,
      @Semantics.fiscal.year: true
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 100
      LedgerFiscalYear
      
}
where
  SoldProduct <> ''
```
