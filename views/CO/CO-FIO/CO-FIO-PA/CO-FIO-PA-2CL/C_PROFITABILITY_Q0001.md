---
name: C_PROFITABILITY_Q0001
description: This CDS view provides analytical insights into projects, including engagement projects and enterprise projects. The amount is calculated on company code currency. This CDS view provides the data to answer the following business questions: What is the revenue, cost, and margin of each project in company code currency? What is the ratio of margin to revenue? What are the breakdown key figures on a more detailed level, like product,customer, and sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value
semantic_en: This CDS view provides analytical insights into projects, including engagement projects and enterprise projects. The amount is calculated on company code currency. This CDS view provides the data to answer the following business questions: What is the revenue, cost, and margin of each project in company code currency? What is the ratio of margin to revenue? What are the breakdown key figures on a more detailed level, like product,customer, and sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Project Profitability — CDS view tiêu dùng dựa trên I_GLAccountLineItemSemTag.
keywords:
  - Project Profitability
  - project
  - profitability
  - company
  - code
  - external
  - element
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
  - project
  - bo:companycode
---
# C_PROFITABILITY_Q0001

**This CDS view provides analytical insights into projects, including engagement projects and enterprise projects. The amount is calculated on company code currency. This CDS view provides the data to answer the following business questions: What is the revenue, cost, and margin of each project in company code currency? What is the ratio of margin to revenue? What are the breakdown key figures on a more detailed level, like product,customer, and sales organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group (Deprecated) |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `EmployeeFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FiscalYearPeriod` |  | |  | `cast(FiscalYearPeriod as fis_jahrper_c_no_conv )` | `CHAR(7)` | Fiscal Year Period |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  | `cast ( BilledRevenueAmtInCoCodeCrcy as fins_trr_actrevn preserving type )` | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `AssetLiabilityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Asset/Liability Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `Reserves` |  | |  | `cast ( 0 as fins_trr_reserves )` | `CURR(23)` | Reserves |
| `ProjAndSlsOrdStkAmtInCCCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `MarginInPct` |  | |  | `cast ( 0 as fins_trr_margininpct )` | `DEC(5)` | Margin in Percent |
| `DownPaymentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Customer Down Payment |
| `MnlContrAccrPnLItmAmtInCCCrcy` |  | |  | `cast ( MnlContrAccrPnLItmAmtInCCCrcy as fins_mnlcontraccr )` | `CURR(23)` | Manual Contract Accruals for Profit/Loss |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITABILITY_Q0001')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPROFQ0001'
@Analytics.query: true
@VDM.viewType: #CONSUMPTION
//comment this annotation ,to replace generated service C_PROFITABILITY_Q0001_CDS with FCO_PROJECT_PROFITABILITY_OVW_SRV
//@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Project Profitability'

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@UI.chart: [{
    title: 'Recognized Margin',
    description: 'Recognized Margin',
    chartType: #COLUMN,
    dimensions:  [ 'CompanyCode' ],
    dimensionAttributes: [{
      dimension: 'CompanyCode',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedCOGSAmtInCCCrcy','RecognizedRevnAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedCOGSAmtInCCCrcy',
        role: #AXIS_1
      },{

        measure: 'RecognizedRevnAmtInCCCrcy',
        role: #AXIS_1
      }]
  },{
    qualifier: 'RecognizedMarginWaterfall',
    title: 'Recognized Margin',
    description: 'Recognized Margin',
    chartType: #COLUMN,
    dimensions:  [ 'CompanyCode' ],
    dimensionAttributes: [{
      dimension: 'CompanyCode',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedCOGSAmtInCCCrcy','RecognizedRevnAmtInCCCrcy'],
    measureAttributes: [{

        measure: 'RecognizedCOGSAmtInCCCrcy',
        role: #AXIS_1
      },{

        measure: 'RecognizedRevnAmtInCCCrcy',
        role: #AXIS_1
      }]
  },{
    qualifier: 'RecognizedRevenueDonut',
    title: 'Recognized Revenue By G/L Account',
    description: 'Recognized Revenue By G/L Account',
    chartType: #COLUMN,
    dimensions:  [ 'GLAccount' ],
    dimensionAttributes: [{
      dimension: 'GLAccount',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedRevnAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedRevnAmtInCCCrcy',
        role: #AXIS_1
      }]
  },{
    qualifier: 'RecognizedMarginByPC',
    title: 'Recognized Margin By Profit Center',
    description: 'Recognized Margin',
    chartType: #COLUMN,
    dimensions:  [ 'ProfitCenter' ],
    dimensionAttributes: [{
      dimension: 'ProfitCenter',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedMarginAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedMarginAmtInCCCrcy',
        role: #AXIS_1
      }]
  },{
    qualifier: 'RecognizedMarginByOPC',
    title: 'Recognized Margin By Origin ProfitCenter',
    description: 'Recognized Margin',
    chartType: #COLUMN,
    dimensions:  [ 'OriginProfitCenter' ],
    dimensionAttributes: [{
      dimension: 'OriginProfitCenter',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedMarginAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedMarginAmtInCCCrcy',
        role: #AXIS_1
      }]
  },{
    qualifier: 'RecognizedMarginScatterBySalesOrganzation',
    title: 'Recognized Margin By Sales Organzation',
    description: 'Recognized Margin By Sales Organzation',
    chartType: #SCATTER,
    dimensions:  [ 'SalesOrganization' ],
    dimensionAttributes: [{
      dimension: 'SalesOrganization',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedCOGSAmtInCCCrcy','RecognizedRevnAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedCOGSAmtInCCCrcy',
        role: #AXIS_2
      },{
        measure: 'RecognizedRevnAmtInCCCrcy',
        role: #AXIS_2
      }]
  },{
    qualifier: 'RecognizedMarginScatterByMaterialGroup',
    title: 'Recognized Margin By Product Sold Group',
    description: 'Recognized Margin By Product Sold Group',
    chartType: #SCATTER,
    dimensions:  [ 'MaterialGroup' ],
    dimensionAttributes: [{
      dimension: 'MaterialGroup',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedCOGSAmtInCCCrcy','RecognizedRevnAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedCOGSAmtInCCCrcy',
        role: #AXIS_2
      },{
        measure: 'RecognizedRevnAmtInCCCrcy',
        role: #AXIS_2
      }]
  },{
    qualifier: 'RecognizedMarginScatterByCustomerGroup',
    title: 'Recognized Margin By Customer Group',
    description: 'Recognized Margin By Customer Group',
    chartType: #SCATTER,
    dimensions:  [ 'CustomerGroup' ],
    dimensionAttributes: [{
      dimension: 'CustomerGroup',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedCOGSAmtInCCCrcy','RecognizedRevnAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedCOGSAmtInCCCrcy',
        role: #AXIS_2
      },{
        measure: 'RecognizedRevnAmtInCCCrcy',
        role: #AXIS_2
      }]
  },{
    qualifier: 'RecognizedMarginByResources',
    title: 'Recognized Margin By Resource',
    description: 'Recognized Margin By Resource',
    chartType: #COLUMN,
    dimensions:  [ 'CostAnalysisResource' ],
    dimensionAttributes: [{
      dimension: 'CostAnalysisResource',
      role: #CATEGORY
    }],
    measures:  [ 'RecognizedMarginAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'RecognizedMarginAmtInCCCrcy',
        role: #AXIS_2
      }]
  },{
    qualifier: 'WIPRevCOS',
    title: 'WIP By Company',
    description: 'WIP By Company',
    chartType: #COLUMN,
    dimensions:  [ 'CompanyCode' ],
    dimensionAttributes: [{
      dimension: 'CompanyCode',
      role: #SERIES
    }],
    measures:  [ 'AccruedCOGSAmtInCCCrcy', 'AccruedRevenueAmtInCCCrcy', 'DeferredCOGSAmtInCCCrcy', 'DeferredRevenueAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'DeferredCOGSAmtInCCCrcy', role: #AXIS_1
       }, {
        measure: 'AccruedCOGSAmtInCCCrcy',    role: #AXIS_1
       }, {
        measure: 'DeferredRevenueAmtInCCCrcy', role: #AXIS_1
       }, {
        measure: 'AccruedRevenueAmtInCCCrcy', role: #AXIS_1
      }]
  },{
    qualifier: 'WIPRevCOSByProdSoldGroup',
    title: 'WIP By Product Sold Group',
    description: 'WIP By Product Sold Group',
    chartType: #COLUMN,
    dimensions:  [ 'MaterialGroup' ],
    dimensionAttributes: [{
      dimension: 'MaterialGroup',
      role: #CATEGORY
    }],
    measures:  [ 'AccruedCOGSAmtInCCCrcy', 'AccruedRevenueAmtInCCCrcy', 'DeferredCOGSAmtInCCCrcy', 'DeferredRevenueAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'DeferredCOGSAmtInCCCrcy', role: #AXIS_1
       }, {
        measure: 'AccruedCOGSAmtInCCCrcy',    role: #AXIS_1
       }, {
        measure: 'DeferredRevenueAmtInCCCrcy', role: #AXIS_1
       }, {
        measure: 'AccruedRevenueAmtInCCCrcy', role: #AXIS_1
      }]
  },{
    qualifier: 'WIPRevCOSByCustomerGroup',
    title: 'WIP By Customer Group',
    description: 'WIP By Customer Group',
    chartType: #COLUMN,
    dimensions:  [ 'CustomerGroup' ],
    dimensionAttributes: [{
      dimension: 'CustomerGroup',
      role: #CATEGORY
    }],
    measures:  [ 'AccruedCOGSAmtInCCCrcy', 'AccruedRevenueAmtInCCCrcy', 'DeferredCOGSAmtInCCCrcy', 'DeferredRevenueAmtInCCCrcy'],
    measureAttributes: [{
        measure: 'DeferredCOGSAmtInCCCrcy', role: #AXIS_1
       }, {
        measure: 'AccruedCOGSAmtInCCCrcy',    role: #AXIS_1
       }, {
        measure: 'DeferredRevenueAmtInCCCrcy', role: #AXIS_1
       }, {
        measure: 'AccruedRevenueAmtInCCCrcy', role: #AXIS_1
      }]
  }]

@UI.presentationVariant: [{
    qualifier: 'TopProjectByMargin',
    sortOrder: [{
      by: 'RecognizedMarginAmtInCCCrcy',
      direction: #DESC
    }]
},
{
    qualifier: 'RecognizedMarginByCenter', //ProfitCenter
    sortOrder: [{
      by: 'RecognizedMarginAmtInCCCrcy',
      direction: #DESC
    }]
}]

@UI.selectionVariant:[{
    qualifier: 'CostByCostTags',
    id: 'CostByCostTags',
    text: 'Cost By Cost Tags',
    filter: 'SemanticTag in (COGS_PERT,TRAVELCST,SERVICECST,HRD_COST,LIC_COST,MATCST,COGS_OMAT,OVH_ADMIN,OTHERSMISC)'
},{
    qualifier: 'RecognizedMarginByResources',
    id: 'RecognizedMarginByResources',
    text: 'Recognized Margin By Resource',
    filter: 'CostAnalysisResource in (SAPACTCC,SAPACTI,SAPACTE,SAPACTECC,SAPEXPCC,SAPEXPI,SAPEXPE)'

},{
    qualifier: 'RecognizedRevenueDonut',
    id: 'RecognizedRevenueDonut',
    text: 'RecognizedRevenueDonut',
    filter: 'SemanticTag eq RECO_REV'
}]
define view C_Profitability_Q0001
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language           : sylangu,
    
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate            : sydate,
    
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
 // @UI.selectionField:{position: 10, exclude: false }
  @AnalyticsDetails.query.variableSequence : 20
  CompanyCode,
  //@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
 // @UI.selectionField:{position: 25, exclude: false }
  @UI.lineItem:[ {
     qualifier: 'TopProjectByMargin',
     position: 1,
     importance: #HIGH
  }]
  @AnalyticsDetails.query.hidden: true
  //@Consumption.hidden: true
  Project,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
 // @UI.selectionField:{position: 25, exclude: false }
  @UI.lineItem:[ {
     qualifier: 'TopProjectByMargin',
     position: 1,
     importance: #HIGH
  }]
  ProjectExternalID,
    //  @UI.lineItem:[ {
  //     qualifier: 'TopProjectByMargin',
  //     position: 1,
  //     importance: #HIGH
  //  }]
  //  @UI.selectionField:{position: 20, exclude: false }
  //  _Project.ProjectDescription                                                                       as ProjectDescription,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.hidden: true
  WBSElement,
  @AnalyticsDetails.query.totals: #SHOW
  WBSElementExternalID,
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 40
  //  @AnalyticsDetails.query.totals: #HIDE
  //@UI.selectionField:{position: 30, exclude: false }
  Ledger,
  @AnalyticsDetails.query.totals: #SHOW
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 50
  @Semantics.fiscal.period: true
  FiscalPeriod,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 60
  @AnalyticsDetails.query.totals: #SHOW
  //@UI.selectionField:{position: 15, exclude: false }
  @Semantics.fiscal.year: true
  @Consumption.derivation: {
     lookupEntity:  'F_FsclYrDteFuncSglVal',
     resultElement: 'FiscalYear',
     binding: [
          { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALYEAR' },
          { targetParameter: 'P_FiscalYearVariant', type : #CONSTANT, value: 'K4' }
          ]
  }
  FiscalYear,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  SoldProduct,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,
  MaterialGroup,
  CostAnalysisResource,
  ProfitCenter,
  OriginProfitCenter,
  Customer,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  CustomerGroup,
  CustomerSupplierIndustry,
  SalesOrganization,
  BusinessTransactionType,
  OrganizationDivision,
  EmployeeFullName,
  PersonnelNumber,
  BillableControl,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,
  

  @AnalyticsDetails.query.axis: #FREE
  SemanticTag,
  GLAccount,
  _GLAccountInChartOfAccounts._Text[1: Language = $parameters.P_Language ].GLAccountLongName,
  @Semantics.fiscal.yearPeriod: true
  cast(FiscalYearPeriod as fis_jahrper_c_no_conv )                    as FiscalYearPeriod,
  DocumentItemText,

  //  @UI.dataPoint:{
  //      title:'Amount in Company Code Currency',
  //      description: 'Amount in Company Code Currency',
  //      longDescription: 'Amount in Company Code Currency',
  //      criticalityCalculation: {
  //           improvementDirection: #MINIMIZE
  //      },
  //      valueFormat.numberOfFractionalDigits: 3,
  //      visualization: #NUMBER
  //  }
  //  cast ( -1 * AmountInCompanyCodeCurrency as fis_hsl )                                              as AmountInCompanyCodeCurrency,

  cast ( BilledRevenueAmtInCoCodeCrcy  as fins_trr_actrevn preserving type )           as BilledRevenueAmtInCoCodeCrcy,
  RecognizableCostAmtInCCCrcy,

  @UI.dataPoint:{
      title:'Recognized Revenue',
      description: 'Recognized Revenue',
      longDescription: 'Recognized Revenue Amount',
      criticalityCalculation: {
           improvementDirection: #MAXIMIZE
      },
      valueFormat.numberOfFractionalDigits: 3,
      visualization: #NUMBER
  }
  RecognizedRevnAmtInCCCrcy,

  @UI.dataPoint:{
      title:'Recognized COGS',
      description: 'Recognized COGS',
      longDescription: 'Recognized Cost Of Goods Sold',
      criticalityCalculation: {
           improvementDirection: #MINIMIZE
      },
      valueFormat.numberOfFractionalDigits: 3,
      visualization: #NUMBER
  }
  RecognizedCOGSAmtInCCCrcy,

  @UI.lineItem:[ {
      qualifier: 'TopProjectByMargin',
      position: 10,
      importance: #HIGH,
      type:#AS_DATAPOINT
    }]
  @UI.dataPoint:{
    title:'Recognized Margin',
    description: 'Recognized Margin',
    longDescription: 'Recognized Margin',
    criticalityCalculation: {
         improvementDirection: #MAXIMIZE
    },
    visualization: #BULLET_CHART,
    valueFormat.numberOfFractionalDigits: 3
  }
//  @UI.identification: {
//    importance: #HIGH,
//    type: #FOR_INTENT_BASED_NAVIGATION,
//    semanticObjectAction: 'analyzeProjectProfitability'
//  }
  @Consumption.semanticObject: 'Project'
  RecognizedMarginAmtInCCCrcy,

  @UI.dataPoint:{
      title:'Asset/Liability',
      description: 'Asset/Liability',
      longDescription: 'Asset/Liability',
      criticalityCalculation: {
           improvementDirection: #MAXIMIZE
      },
      valueFormat.numberOfFractionalDigits: 3,
      visualization: #NUMBER
  }
  @AnalyticsDetails.query.hidden: true
  AssetLiabilityAmtInCCCrcy,

  RevenueAdjustmentAmtInCCCrcy,
  COGSAdjustmentAmtInCCCrcy,

  DeferredCOGSAmtInCCCrcy,
  DeferredRevenueAmtInCCCrcy,
  AccruedRevenueAmtInCCCrcy,
  AccruedCOGSAmtInCCCrcy,

  //  @EndUserText.label: 'Reserves'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'ImminentLossRsrvAmtInCCCrcy + SalesDeductReserveAmtInCCCrcy + UnrlzdCostsReserveAmtInCCCrcy'
  cast ( 0 as fins_trr_reserves )                                     as Reserves,
  
  ProjAndSlsOrdStkAmtInCCCrcy,

  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.RecognizedMarginAmtInCCCrcy / $projection.RecognizedRevnAmtInCCCrcy * 100'
  @AnalyticsDetails.query.decimals: 2
  //  @EndUserText.label: 'Margin in Percent'
  //  @UI.lineItem:[ {
  //     qualifier: 'TopProjectByMargin',
  //     position: 20,
  //     importance: #HIGH,
  //        type:#AS_DATAPOINT
  //      }]
  @UI.dataPoint:{
    title:'MarginInPct',
    description: 'MarginInPct',
    longDescription: 'MarginInPct',
    criticalityCalculation: {
         improvementDirection: #MAXIMIZE
    },
    visualization: #DONUT
  }
  cast ( 0 as fins_trr_margininpct )                                  as MarginInPct
  
  ,
  DownPaymentAmtInCCCrcy,
  
  cast ( MnlContrAccrPnLItmAmtInCCCrcy as fins_mnlcontraccr ) as MnlContrAccrPnLItmAmtInCCCrcy

  ,
  SoldProductGroup,
  DistributionChannel
}
where
      AccountAssignmentType                        =  'PR'
  and I_GLAccountLineItemSemTag.GLAccountHierarchy = $parameters.P_GLAccountHierarchy
  and SemanticTag                                  <> 'NTINC_ALAC'
```
