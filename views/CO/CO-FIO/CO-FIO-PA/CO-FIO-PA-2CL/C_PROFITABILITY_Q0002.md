---
name: C_PROFITABILITY_Q0002
description: "This CDS view provides the prerequisites for answering the following business question: What is the contribution margin for individual products?"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0002')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the contribution margin for individual products?"
semantic_vi: "Product Profitability — CDS view tiêu dùng dựa trên I_GLAccountLineItemSemTag."
keywords:
  - "Product Profitability"
  - "product"
  - "profitability"
  - "company"
  - "code"
  - "ledger"
  - "fiscal"
  - "year"
  - "period"
  - "profit"
  - "center"
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - product
---
# C_PROFITABILITY_Q0002

**This CDS view provides the prerequisites for answering the following business question: What is the contribution margin for individual products?**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0002')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
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
| `ContrbnMargin2AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin II |
| `AdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `ContrbnMargin3AmtInGlobCrcy` |  | |  |  | `CURR(23)` | Contribution Margin III |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  | `cast(BilledRevenueAmtInCoCodeCrcy as fins_billed_revenue_cccrcy preserving type )` | `CURR(23)` | Billed Revenue Amount in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  | `cast(SalesDeductionAmtInCoCodeCrcy as fins_sales_deduction_cccrcy preserving type )` | `CURR(23)` | Sales Deduction Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  | `cast(RevenueAdjustmentAmtInCCCrcy as fis_adj_rev_hsl preserving type )` | `CURR(23)` | Revenue Adjustment Amount in Company Code Currency |
| `RecognizedRevnAmtInCCCrcy` |  | |  | `cast(RecognizedRevnAmtInCCCrcy as fis_reco_rev_hsl preserving type )` | `CURR(23)` | Recognized Revenue Amount in Company Code Currency |
| `VarblCOGSAmtInCCCrcy` |  | |  | `cast(VarblCOGSAmtInCCCrcy as fins_cogs_variable_cccrcy preserving type )` | `CURR(23)` | COGS  - Variable Amount in Company Code Currency |
| `ContrbnMargin1AmtInCoCodeCrcy` |  | |  | `cast(ContrbnMargin1AmtInCoCodeCrcy as fins_cogs_contribmarg_1_cccrcy preserving type )` | `CURR(23)` | COGS - Contribution Margin 1 Amount in Company Code Currency |
| `FxdCOGSAmtInCCCrcy` |  | |  | `cast(FxdCOGSAmtInCCCrcy as fins_cogs_fixed_ccrcy preserving type )` | `CURR(23)` | COGS - Fixed Amount in Company Code Currency |
| `PriceDifferenceAmtInCCCrcy` |  | |  | `cast(PriceDifferenceAmtInCCCrcy as fins_price_differences_cccrcy preserving type )` | `CURR(23)` | COGS - Price Differences Amount in Company Code Currency |
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  | `cast(ContrbnMargin2AmtInCoCodeCrcy as fins_cogs_contribmarg_2_cccrcy preserving type )` | `CURR(23)` | COGS - Contribution Margin 2 Amount in Company Code Currency |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  | `cast(AdminOverheadAmtInCoCodeCrcy as fins_admin_overhead_cccrcy preserving type )` | `CURR(23)` | COGS - Administration Overhead Amt in Company Code Currency |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  | `cast(SalesOverheadAmtInCoCodeCrcy as fins_sales_overhead_cccrcy preserving type )` | `CURR(23)` | COGS - Sales Overhead Amount in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  | `cast(MarketingOvhdAmtInCoCodeCrcy as fins_marketing_overhead_cccrcy preserving type )` | `CURR(23)` | COGS - Marketing Overhead Amount in Company Code Currency |
| `RnDOverheadAmtInCCCrcy` |  | |  | `cast(RnDOverheadAmtInCCCrcy as fins_resear_dev_overhead_ccrcy preserving type )` | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  | `cast(ContrbnMargin3AmtInCoCodeCrcy as fins_cogs_contribmarg_3_cccrcy preserving type )` | `CURR(23)` | COGS - Contribution Margin 3 Amount in Company Code Currency |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Billed Quantity |
| `UnitContrbnMargAmtInGlobCrcy` |  | |  | `cast ( 0 as fins_margin_per_unit )` | `QUAN(23)` | Contribution Margin per Unit |
| `UnitContrbnMargAmtInCCCrcy` |  | |  | `cast ( 0 as fins_margin_per_unit_cccrcy )` | `CURR(23)` | COGS - Contribution Margin per Unit Amt in Company Code Crcy |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0002')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0002')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPROFQ0002'
@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Product Profitability'
@Metadata.allowExtensions: true

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

define view C_Profitability_Q0002
  with parameters
    
    @Consumption.valueHelpDefinition: [{
        entity: {
            name:    'I_FinancialStatementHierarchy',
            element: 'GLAccountHierarchy'
        }
        }]
//    @Consumption.defaultValue: 'YPS2'
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea', 
          resultElement: 'CtrlgStdFinStatementVersion' }
    @AnalyticsDetails.query.variableSequence : 10
    P_GLAccountHierarchy : fins_sem_tag_hryid
        
  as select from I_GLAccountLineItemSemTag as I_GLAccountLineItemSemTag
{

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 40
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 90
  @AnalyticsDetails.query.display: #KEY
  Ledger,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.display: #KEY
  FiscalYear,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
  @AnalyticsDetails.query.display: #KEY
  FiscalPeriod,
  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldProduct,
  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.variableSequence : 70
  @AnalyticsDetails.query.display: #KEY_TEXT
  //SoldProductGroup as ProductGroup,    //Commented out due to jump to issue
  SoldProductGroup,
  @AnalyticsDetails.query.hidden: true
  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProductGroup, 
  @AnalyticsDetails.query.display: #KEY_TEXT
  Customer,
  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 60
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerGroup,
  
  // SalesOrder is superseded by the more general entity SalesDocument
  @UI : { hidden: true }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 80
  @AnalyticsDetails.query.display: #KEY
  SalesOrder,
  @AnalyticsDetails.query.display: #KEY
  SalesOrderItem,
  
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 82
  @AnalyticsDetails.query.display: #KEY
  SalesDocument,
  @AnalyticsDetails.query.display: #KEY
  SalesDocumentItem,
  
  
  @AnalyticsDetails.query.display: #KEY
  ConditionContract,  
  @AnalyticsDetails.query.display: #KEY
  FiscalYearPeriod,
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
  BusinessTransactionType,
  @AnalyticsDetails.query.display: #KEY
  GlobalCurrency,
  @AnalyticsDetails.query.display: #KEY  
  CompanyCodeCurrency,


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

 
// Key Figures in Company Code Currency 
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(BilledRevenueAmtInCoCodeCrcy as fins_billed_revenue_cccrcy preserving type ) as BilledRevenueAmtInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(SalesDeductionAmtInCoCodeCrcy as fins_sales_deduction_cccrcy preserving type ) as SalesDeductionAmtInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(RevenueAdjustmentAmtInCCCrcy as fis_adj_rev_hsl preserving type ) as RevenueAdjustmentAmtInCCCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(RecognizedRevnAmtInCCCrcy as fis_reco_rev_hsl preserving type ) as RecognizedRevnAmtInCCCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(VarblCOGSAmtInCCCrcy as fins_cogs_variable_cccrcy preserving type ) as VarblCOGSAmtInCCCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(ContrbnMargin1AmtInCoCodeCrcy as fins_cogs_contribmarg_1_cccrcy preserving type ) as ContrbnMargin1AmtInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(FxdCOGSAmtInCCCrcy as fins_cogs_fixed_ccrcy preserving type ) as FxdCOGSAmtInCCCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(PriceDifferenceAmtInCCCrcy as fins_price_differences_cccrcy preserving type ) as PriceDifferenceAmtInCCCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(ContrbnMargin2AmtInCoCodeCrcy as fins_cogs_contribmarg_2_cccrcy preserving type ) as ContrbnMargin2AmtInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(AdminOverheadAmtInCoCodeCrcy as fins_admin_overhead_cccrcy preserving type ) as AdminOverheadAmtInCoCodeCrcy, 
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(SalesOverheadAmtInCoCodeCrcy as fins_sales_overhead_cccrcy preserving type ) as SalesOverheadAmtInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(MarketingOvhdAmtInCoCodeCrcy as fins_marketing_overhead_cccrcy preserving type ) as MarketingOvhdAmtInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(RnDOverheadAmtInCCCrcy as fins_resear_dev_overhead_ccrcy preserving type ) as RnDOverheadAmtInCCCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  cast(ContrbnMargin3AmtInCoCodeCrcy as fins_cogs_contribmarg_3_cccrcy preserving type ) as ContrbnMargin3AmtInCoCodeCrcy,
 
// Additional key figures 
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  BilledValnQtyInCostSourceUnit,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.ContrbnMargin1AmtInGlobCrcy / $projection.BilledValnQtyInCostSourceUnit'
  @AnalyticsDetails.query.decimals: 2
  cast ( 0 as fins_margin_per_unit )                 as UnitContrbnMargAmtInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.ContrbnMargin1AmtInCoCodeCrcy / $projection.BilledValnQtyInCostSourceUnit'
  @AnalyticsDetails.query.decimals: 2
  cast ( 0 as fins_margin_per_unit_cccrcy )          as UnitContrbnMargAmtInCCCrcy  
}
where
      I_GLAccountLineItemSemTag.GLAccountHierarchy = $parameters.P_GLAccountHierarchy
  and SoldProduct                                 <> ''
  and AccountAssignmentType                        = 'EO'
```
