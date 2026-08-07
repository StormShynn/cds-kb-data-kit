---
name: C_SERVICEMARGINQUERY
description: "This CDS view provides analytical insights into the service margin by aggregating and calculating various financial metrics related to revenue, costs, and margins. It allows you to filter and analyze data based on multiple dimensions such as company code, fiscal period, customer, product, and more, to understand the financial performance of services rendered. This CDS view provides the data to answer the following business questions: What is the recognized margin for services provided within a specific company code or fiscal period? How do billed revenue and revenue adjustments contribute to the overall revenue amount in company code currency? What are the recognized costs associated with services, and how do cost adjustments impact the total cost amount? How do deferred and accrued revenues and costs affect the financial statements? What are the reserves for imminent loss, sales deductions, and unrealized costs, and how do they impact the overall financial performance? How do different service document types and customer groups affect the service margin? What is the impact of specific products or product groups on the service margin? How do various account assignment types and profit centres contribute to the financial outcomes of services rendered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEMARGINQUERY')/$value
semantic_en: "This CDS view provides analytical insights into the service margin by aggregating and calculating various financial metrics related to revenue, costs, and margins. It allows you to filter and analyze data based on multiple dimensions such as company code, fiscal period, customer, product, and more, to understand the financial performance of services rendered. This CDS view provides the data to answer the following business questions: What is the recognized margin for services provided within a specific company code or fiscal period? How do billed revenue and revenue adjustments contribute to the overall revenue amount in company code currency? What are the recognized costs associated with services, and how do cost adjustments impact the total cost amount? How do deferred and accrued revenues and costs affect the financial statements? What are the reserves for imminent loss, sales deductions, and unrealized costs, and how do they impact the overall financial performance? How do different service document types and customer groups affect the service margin? What is the impact of specific products or product groups on the service margin? How do various account assignment types and profit centres contribute to the financial outcomes of services rendered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Service Margin - Query — CDS view tiêu dùng dựa trên Service Margin - Query."
keywords:
  - "Service Margin - Query"
  - "service"
  - "margin"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "document"
  - "type"
  - "customer"
tags:
  - CO
  - account
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - document
  - lob:controlling
  - lob:finance
  - product
---
# C_SERVICEMARGINQUERY

**This CDS view provides analytical insights into the service margin by aggregating and calculating various financial metrics related to revenue, costs, and margins. It allows you to filter and analyze data based on multiple dimensions such as company code, fiscal period, customer, product, and more, to understand the financial performance of services rendered. This CDS view provides the data to answer the following business questions: What is the recognized margin for services provided within a specific company code or fiscal period? How do billed revenue and revenue adjustments contribute to the overall revenue amount in company code currency? What are the recognized costs associated with services, and how do cost adjustments impact the total cost amount? How do deferred and accrued revenues and costs affect the financial statements? What are the reserves for imminent loss, sales deductions, and unrealized costs, and how do they impact the overall financial performance? How do different service document types and customer groups affect the service margin? What is the impact of specific products or product groups on the service margin? How do various account assignment types and profit centres contribute to the financial outcomes of services rendered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEMARGINQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Revenue Recognition Key |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `RecognizedMarginAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'REC_MARGIN' ) then InvertedAmtInCoCodeCurrency else null end as fins_trr_recmargin )` | `CURR(23)` | Recognized Margin |
| `RevenueAmountInCompanyCodeCrcy` |  | |  | `$projection.BilledRevenueAmtInCoCodeCrcy + $projection.RevenueAdjustmentAmtInCCCrcy` | `CURR(25)` |  |
| `CostAmountInCompanyCodeCrcy` |  | |  | `$projection.RecognizableCostAmtInCCCrcy +$projection.COGSAdjustmentAmtInCCCrcy` | `CURR(24)` |  |
| `MarginAmtInCoCodeCrcy` |  | |  | `$projection.RecognizedMarginAmtInCCCrcy` | `CURR(23)` | Recognized Margin |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'BILL_REV' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_actrevn )` | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'ACT_COST' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_actcost )` | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_REV' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_recrevn )` | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_reccogs )` | `CURR(23)` | Recognized COS |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'ADJ_REV' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_revnadjust )` | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'ADJ_COS' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_cogsadj )` | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'DEF_COST' ) then AmountInCompanyCodeCurrency else null end as fins_trr_defcogs )` | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'DEF_REV' ) then AmountInCompanyCodeCurrency else null end as fins_trr_defrevn )` | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'ACR_REV' ) then AmountInCompanyCodeCurrency else null end as fins_trr_accrevn )` | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'ACR_COST' ) then AmountInCompanyCodeCurrency else null end as fins_trr_acccogs )` | `CURR(23)` | Accrued COS |
| `ImminentLossRsrvAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'RES_MIL' ) then AmountInCompanyCodeCurrency else null end as fins_trr_resimmloss )` | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'RES_MASD' ) then AmountInCompanyCodeCurrency else null end as fins_trr_ressalesded )` | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'RES_MUC' ) then AmountInCompanyCodeCurrency else null end as fins_trr_unrealcosts )` | `CURR(23)` | Reserves for Unrealized Costs |
| `Reserves` |  | |  | `$projection.ImminentLossRsrvAmtInCCCrcy + $projection.SalesDeductReserveAmtInCCCrcy + $projection.UnrlzdCostsReserveAmtInCCCrcy` | `CURR(25)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEMARGINQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEMARGINQUERY')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Service Margin - Query'
define transient view entity C_ServiceMarginQuery
provider contract analytical_query
 with parameters
    @Consumption.defaultValue: 'YPS2'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_FINANCIALSTATEMENTHIERARCHY',
     element: 'GLAccountHierarchy'
         }
    }]
    @AnalyticsDetails.query.variableSequence : 10
    P_GLAccountHierarchy : fins_sem_tag_hryid,

    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
                               resultElement: 'FiscalYearVariant' }
    //@Consumption.defaultValue: 'K4'
    @Consumption.hidden: true
    @Semantics.fiscal.yearVariant: true
    P_FiscalYearVariant          : fis_periv,

    @Environment.systemField: #SYSTEM_DATE
    @Semantics.businessDate.at: true
    @AnalyticsDetails.query.variableSequence : 110
    P_KeyDate                    : vdm_v_key_date
    
as projection on I_ServiceMarginCube as I_ServiceMarginCube
{
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.variableSequence : 20
  @UI.textArrangement: #TEXT_LAST
  Ledger,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 30
  CompanyCode,
  
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 40
  ServiceDocumentType,

  @Consumption.filter: {selectionType: #INTERVAL, multipleSelections: true, mandatory: false}
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 50
  ServiceDocument,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 60
  Customer,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 70
  CustomerGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 80
  @UI.textArrangement: #TEXT_LAST
  @Semantics.fiscal.period: true
  FiscalPeriod,

  @UI.textArrangement: #TEXT_LAST
  @Semantics.fiscal.year: true
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 90
  @Consumption.derivation: {
     lookupEntity:  'F_FsclYrDteFuncSglVal',
     resultElement: 'FiscalYear',
     binding: [
          { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALYEAR' },
          { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' }
          ]
  }
  FiscalYear,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 100
  GLAccount,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 120
  SoldProduct,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 130
  SoldProductGroup,

  //@AnalyticsDetails.query.hidden: true
  @Consumption.hidden: true
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 140
  ProviderContract,

  @Consumption.hidden: true
  @UI.textArrangement: #TEXT_LAST
  ProviderContractItem,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 150
  ServiceContract,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 160
  BusinessSolutionOrder,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 170
  ProjectExternalID,
  
  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,
  
  @UI.textArrangement: #TEXT_LAST
  ResultAnalysisInternalID,
  
  @UI.textArrangement: #TEXT_LAST
  Product,
  
  @UI.textArrangement: #TEXT_LAST
  PartnerCostCtrActivityType,
  
  @UI.textArrangement: #TEXT_LAST
  PersonnelNumber,
  
  @UI.textArrangement: #TEXT_LAST
  ServicesRenderedDate,
  
  @UI.textArrangement: #TEXT_LAST
  BusinessTransactionType,
  
  @UI.textArrangement: #TEXT_LAST
  Equipment,
  
  @UI.textArrangement: #TEXT_LAST
  TimeSheetOvertimeCategory,
  
  @UI.textArrangement: #TEXT_LAST
  BillableControl,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 180
  ProfitCenter,
  
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 200
  AccountAssignmentType,

  @Semantics.fiscal.yearVariant: true
  @UI.textArrangement: #TEXT_LAST
  FiscalYearVariant,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  //@Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForVariant', element: 'FiscalYear' } }]
  //@Semantics.fiscal.year: true
  LedgerFiscalYear,

  @UI.textArrangement: #TEXT_LAST
  @Semantics.fiscal.yearPeriod: true
  FiscalYearPeriod,

  @UI.textArrangement: #TEXT_LAST
  AccountingDocument,

  @UI.textArrangement: #TEXT_LAST
  LedgerGLLineItem,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 190
  @UI.textArrangement: #TEXT_LAST
  SalesDocument,

  @Consumption.hidden: true
  SemanticTag,

  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,

  @UI.textArrangement: #TEXT_LAST
  @EndUserText.label: 'Country/Region'
  CustomerSupplierCountry,

  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierIndustry,

  @UI.textArrangement: #TEXT_LAST
  SalesDistrict,

  @UI.textArrangement: #TEXT_LAST
  ShipToParty,

  @UI.textArrangement: #TEXT_LAST
  BillToParty,

  @UI.textArrangement: #TEXT_LAST
  Segment,

  @UI.textArrangement: #TEXT_LAST
  ServiceContractItem,

  @UI.textArrangement: #TEXT_LAST
  ServiceContractType,
  
  @UI.textArrangement: #TEXT_LAST
  ServiceDocumentItem,

  @UI.textArrangement: #TEXT_LAST
  BusinessSolutionOrderItem,
  
  @UI.textArrangement: #TEXT_LAST
  GlobalCurrency,

  @UI.textArrangement: #TEXT_LAST
  CompanyCodeCurrency,
      
  //always set recognized margin at the very left position
  //@Consumption.hidden
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'REC_MARGIN' )  then InvertedAmtInCoCodeCurrency else null end as fins_trr_recmargin )      as RecognizedMarginAmtInCCCrcy,

  @EndUserText.label: 'Recognized Revenue'
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @AnalyticsDetails.query.elementHierarchy.parent: 'MarginAmtInCoCodeCrcy'
  @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: false
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  $projection.BilledRevenueAmtInCoCodeCrcy + $projection.RevenueAdjustmentAmtInCCCrcy as RevenueAmountInCompanyCodeCrcy,

  @EndUserText.label: 'Recognized Cost'
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @AnalyticsDetails.query.elementHierarchy.parent: 'MarginAmtInCoCodeCrcy'
  @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: false
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  $projection.RecognizableCostAmtInCCCrcy +$projection.COGSAdjustmentAmtInCCCrcy as CostAmountInCompanyCodeCrcy,
  //1 as CostAmountInCompanyCodeCrcy,


  @EndUserText.label: 'Recognized Margin'
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: false
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  $projection.RecognizedMarginAmtInCCCrcy as MarginAmtInCoCodeCrcy,


  @AnalyticsDetails.query.hidden: false
  @AnalyticsDetails.query.elementHierarchy.parent: 'RevenueAmountInCompanyCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  //@Consumption.semanticObject: 'MarketSegment'
  //@AnalyticsDetails.query.collisionHandling.semanticObject: #THIS
  cast( case when ( SemanticTag = 'BILL_REV' )  then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_actrevn )      as BilledRevenueAmtInCoCodeCrcy,

  @AnalyticsDetails.query.hidden: false
  @AnalyticsDetails.query.elementHierarchy.parent: 'CostAmountInCompanyCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'ACT_COST' )  then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_actcost )      as RecognizableCostAmtInCCCrcy,

  //@Consumption.hidden
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'RECO_REV' )  then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_recrevn )      as RecognizedRevnAmtInCCCrcy,

  //@Consumption.hidden
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'RECO_COS' )  then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_reccogs )      as RecognizedCOGSAmtInCCCrcy,

  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.elementHierarchy.parent: 'RevenueAmountInCompanyCodeCrcy'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'ADJ_REV' )  then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_revnadjust )      as RevenueAdjustmentAmtInCCCrcy,

  @AnalyticsDetails.query.hidden: false
  @AnalyticsDetails.query.elementHierarchy.parent: 'CostAmountInCompanyCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'ADJ_COS' )  then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_cogsadj )      as COGSAdjustmentAmtInCCCrcy,

  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'DEF_COST' )  then AmountInCompanyCodeCurrency else null end as fins_trr_defcogs )      as DeferredCOGSAmtInCCCrcy,

  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'DEF_REV' )  then AmountInCompanyCodeCurrency else null end as  fins_trr_defrevn )      as DeferredRevenueAmtInCCCrcy,

  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'ACR_REV' )  then AmountInCompanyCodeCurrency else null end as  fins_trr_accrevn )      as AccruedRevenueAmtInCCCrcy,

  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'ACR_COST' )  then AmountInCompanyCodeCurrency else null end as  fins_trr_acccogs )      as AccruedCOGSAmtInCCCrcy,

  //@AnalyticsDetails.query.hidden: true
  @Consumption.hidden
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'RES_MIL' )  then AmountInCompanyCodeCurrency else null end as  fins_trr_resimmloss )      as ImminentLossRsrvAmtInCCCrcy,

  //@AnalyticsDetails.query.hidden: true
  @Consumption.hidden
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'RES_MASD' )  then AmountInCompanyCodeCurrency else null end as  fins_trr_ressalesded )      as SalesDeductReserveAmtInCCCrcy,
  
  //@AnalyticsDetails.query.hidden: true
  @Consumption.hidden
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  cast( case when ( SemanticTag = 'RES_MUC' )  then AmountInCompanyCodeCurrency else null end as  fins_trr_unrealcosts )      as UnrlzdCostsReserveAmtInCCCrcy,

  @AnalyticsDetails.query.hidden: false
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Reserves'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  $projection.ImminentLossRsrvAmtInCCCrcy + $projection.SalesDeductReserveAmtInCCCrcy + $projection.UnrlzdCostsReserveAmtInCCCrcy  as Reserves
}
where
       GLAccountHierarchy    = $parameters.P_GLAccountHierarchy
```
