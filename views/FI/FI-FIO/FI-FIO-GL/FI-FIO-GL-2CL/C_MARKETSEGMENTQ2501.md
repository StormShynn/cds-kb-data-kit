---
name: C_MARKETSEGMENTQ2501
description: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts per customer group, material group, and G/L account in transaction currency? What are the actual amounts per customer group, material group, and G/L account in company code currency? What are the actual amounts per customer group, material group, and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTQ2501')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts per customer group, material group, and G/L account in transaction currency? What are the actual amounts per customer group, material group, and G/L account in company code currency? What are the actual amounts per customer group, material group, and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
semantic_vi: Market Segments Actuals — CDS view tiêu dùng dựa trên I_JournalEntryItemCube.
keywords:
  - Market Segments Actuals
  - market
  - segments
  - actuals
  - customer
  - group
  - sold
  - product
  - account
  - cost
  - activity
  - type
  - business
  - transaction
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
  - material
  - transaction
---
# C_MARKETSEGMENTQ2501

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts per customer group, material group, and G/L account in transaction currency? What are the actual amounts per customer group, material group, and G/L account in company code currency? What are the actual amounts per customer group, material group, and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTQ2501')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  | `cast(MaterialGroup as matkl preserving type)` | `CHAR(9)` | Material Group |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `EmployeeFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `SoldMaterial` |  | |  | `cast(SoldMaterial as fis_sold_material preserving type)` | `CHAR(40)` | Sold Material |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `WorkItemName` |  | | `_WorkPackageWorkItem` | `WorkItemName` | `CHAR(40)` | Work Item Name |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTQ2501')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTQ2501')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIMARKSEGMQ2501'
@EndUserText.label: 'Market Segments Actuals'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED


define view C_MarketSegmentQ2501
  with parameters

    //P_PlanningCategory : fcom_category,

    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate         : vdm_v_key_date,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language        : sylangu,

    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser    : syuname,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
          resultElement: 'ControllingArea',
          binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
    @AnalyticsDetails.query.variableSequence: 5
    P_ControllingArea : kokrs,

    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    @AnalyticsDetails.query.variableSequence: 10
    P_Ledger          : fins_ledger

  as select from I_JournalEntryItemCube as I_JournalEntryItemCube
{

  ------------------------------------------------------------------------------------------------------
  -- ROWS
  ------------------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 70
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerGroup,

  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 75
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldProductGroup,

  @AnalyticsDetails.query.variableSequence: 91
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                          hierarchyBinding : [{type : #USER_INPUT, value : 'GLAccountHierarchyName', variableSequence: 90 } ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  GLAccount,
  _GLAccountInChartOfAccounts._Text[1:Language = $parameters.P_Language].GLAccountName,

  ------------------------------------------------------------------------------------------------------
  -- FREE
  ------------------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCtrActivityType,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarMonth,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarWeek,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYear,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true }
  @Consumption.derivation: { lookupEntity: 'I_ControllingArea',
    resultElement: 'ChartOfAccounts',
    binding:
    [
      {
        targetElement : 'ControllingArea' ,
        type : #PARAMETER,
        value : 'P_ControllingArea'
      }
    ]
  }
  @AnalyticsDetails.query.variableSequence: 45
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  //@Consumption.derivation: {
  //    lookupEntity: 'I_UserSettingsForCompanyCode',
  //    resultElement: 'CompanyCode',
  //    binding:
  //    [
  //      {
  //        targetElement : 'BusinessUser' ,
  //        type : #PARAMETER,
  //        value : 'P_BusinessUser'
  //      }
  //    ]
  //  }
  @AnalyticsDetails.query.variableSequence:50
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,

  @AnalyticsDetails.query.totals: #SHOW
  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,

  CostSourceUnit,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerSupplierCountry,

  @AnalyticsDetails.query.variableSequence: 80
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Customer,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  DistributionChannel,

  @AnalyticsDetails.query.display: #KEY_TEXT
  OrganizationDivision,
  //Division,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingDebitCreditCode,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 30
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalWeek,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearWeek,

  //@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true}
  //@Consumption.derivation: {
  //  lookupEntity: 'I_ControllingArea',
  //  resultElement: 'FiscalYearVariant',
  //  binding:
  //  [
  //    {
  //      targetElement : 'ControllingArea' ,
  //      type : #PARAMETER,
  //      value : 'P_ControllingArea'
  //    }
  //  ]
  //}
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearVariant,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,

  @AnalyticsDetails.query.totals: #SHOW
  GlobalCurrency,

  @AnalyticsDetails.query.totals: #SHOW
  AccountingDocument,

  @AnalyticsDetails.query.totals: #SHOW
  LedgerGLLineItem,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'Product'
//  @VDM.lifecycle.status:    #DEPRECATED
//  @VDM.lifecycle.successor: 'Product'
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Material, // do not use any longer, use Product

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SoldProductGroup'
//  @VDM.lifecycle.status:    #DEPRECATED
//  @VDM.lifecycle.successor: 'SoldProductGroup'
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  cast(MaterialGroup as matkl preserving type)            as MaterialGroup, // do not use any longer, use SoldProductGroup

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarYear', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
         }
  @AnalyticsDetails.query.variableSequence: 25
  LedgerFiscalYear,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountAssignmentType,

  @AnalyticsDetails.query.totals: #SHOW
  OrderID,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginProfitCenter,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCostCenter,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerFunctionalArea,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerOrder_2                                          as PartnerOrder,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProfitCenter,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProject,
  //@AnalyticsDetails.query.totals: #SHOW
  //@AnalyticsDetails.query.axis: #FREE
  //PartnerSegment,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerWBSElement,

  @AnalyticsDetails.query.totals: #SHOW
  PersonnelNumber,
  EmployeeFullName,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Plant,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldProduct,

  @AnalyticsDetails.query.variableSequence: 55
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Project,
  //_Project.ProjectDescription,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  CostAnalysisResource,
  _CostAnalysisResource[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostAnalysisResourceName,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesDistrict,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesDocument,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesDocumentItem,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SalesDocument'
//  @VDM.lifecycle.status:    #DEPRECATED
//  @VDM.lifecycle.successor: 'SalesDocument'
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrder, // do not use any longer, use SalesDocument
  
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SalesDocumentItem'  
//  @VDM.lifecycle.status:    #DEPRECATED
//  @VDM.lifecycle.successor: 'SalesDocumentItem'
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrderItem, // do not use any longer, use SalesDocumentItem

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrganization,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 65
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  ServiceDocument,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  ServiceDocumentItem,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  ServiceDocumentType,

//  @VDM.lifecycle.status:    #DEPRECATED
//  @VDM.lifecycle.successor: 'SoldProduct'
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SoldProduct'    
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  cast(SoldMaterial as fis_sold_material preserving type) as SoldMaterial, // do not use any longer, use SoldProduct

  //@AnalyticsDetails.query.axis: #FREE
  //@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  //@AnalyticsDetails.query.variableSequence: 85
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessSolutionOrder,     //SolutionOrder

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessSolutionOrderItem, //SolutionOrderItem

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCompany, // = TradingPartner

  TransactionCurrency,

  @AnalyticsDetails.query.display: #KEY_TEXT
  WBSElement,
  //_WBSElement.WBSDescription,


  @AnalyticsDetails.query.totals: #SHOW
  WorkItem,
  @Semantics.text: true
  _WorkPackageWorkItem.WorkItemName,

  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearMonth,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearWeek,

  //Key Figures
  //
  // Transaction Currency: WSL
  //
  @EndUserText.label: 'Actual Amount in Trans Crcy'
  //@AnalyticsDetails.query.hidden: true
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  AmountInTransactionCurrency,
  //case when PlanningCategory = 'ACT01' then AmountInTransactionCurrency
  //                      else cast( 0 as fins_vkcur12)
  //end as ActualAmountInTransactionCrcy,

  //@EndUserText.label: 'Plan Amount in Trans Crcy'
  //@AnalyticsDetails.query.hidden: true
  //@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  //@AnalyticsDetails.query.axis: #COLUMNS
  //case when PlanningCategory = :P_PlanningCategory then AmountInTransactionCurrency
  //                      else cast( '0' as fins_vhcur12)
  //end as PlanAmountInTransactionCrcy,

  //@EndUserText.label: 'Difference Actual Plan in Trans Crcy'
  //@DefaultAggregation : #FORMULA
  //@AnalyticsDetails.query.hidden: true
  //@AnalyticsDetails.query.formula : '$projection.ActualAmountInTransactionCrcy - $projection.PlanAmountInTransactionCrcy'
  //1 as DifferenceAmtInTransCrcy,

  //@EndUserText.label : 'Difference (%) TC'
  //@AnalyticsDetails.query.hidden: true
  //@AnalyticsDetails.query.decimals: 2
  //@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInTransactionCrcy > 0
  //                                   THEN ($projection.ActualAmountInTransactionCrcy - $projection.PlanAmountInTransactionCrcy) / $projection.ActualAmountInTransactionCrcy * 100
  //                                   ELSE NDIV0(($projection.PlanAmountInTransactionCrcy - $projection.ActualAmountInTransactionCrcy ) / $projection.ActualAmountInTransactionCrcy) * 100 END'
  //1 as TransCrcyDifferencePct,

  //
  // Company Code Currency: HSL
  //
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Actual Amount in Company Code Crcy'
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  AmountInCompanyCodeCurrency,
  //case when PlanningCategory = 'ACT01' then AmountInCompanyCodeCurrency
  //                      else cast( 0 as fins_vhcur12)
  //end as ActualAmountInCompanyCodeCrcy,

  //@AnalyticsDetails.query.axis: #COLUMNS
  //@EndUserText.label: 'Plan Amount in CC Crcy'
  //@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  //case when PlanningCategory = :P_PlanningCategory then AmountInCompanyCodeCurrency
  //                      else cast( '0' as fins_vhcur12)
  //end as PlanAmountInCompanyCodeCrcy,

  //@EndUserText.label: 'Difference Actual Plan in CC Crcy'
  //@DefaultAggregation : #FORMULA
  //@AnalyticsDetails.query.formula : '$projection.ActualAmountInCompanyCodeCrcy - $projection.PlanAmountInCompanyCodeCrcy'
  //1 as DifferenceAmtInCoCodeCrcy,

  //@EndUserText.label : 'Difference (%) CC'
  //@AnalyticsDetails.query.decimals: 2
  //@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInCompanyCodeCrcy > 0
  //                                   THEN ($projection.ActualAmountInCompanyCodeCrcy - $projection.PlanAmountInCompanyCodeCrcy) / $projection.ActualAmountInCompanyCodeCrcy * 100
  //                                   ELSE NDIV0(($projection.PlanAmountInCompanyCodeCrcy - $projection.ActualAmountInCompanyCodeCrcy ) / $projection.ActualAmountInCompanyCodeCrcy) * 100 END'
  //1 as CoCodeCrcyDifferencePct,

  //
  // Global Currency: KSL RKCUR
  //
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Actual Amount in Global Crcy'
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  AmountInGlobalCurrency,
  //case when PlanningCategory = 'ACT01' then AmountInGlobalCurrency
  //                      else cast( 0 as fins_vkcur12)
  //end as ActualAmountInGlobalCurrency,

  //@AnalyticsDetails.query.axis: #COLUMNS
  //@EndUserText.label: 'Plan Amount in Global Crcy'
  //@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  //case when PlanningCategory = :P_PlanningCategory then AmountInGlobalCurrency
  //                      else cast( '0' as fins_vkcur12)
  //end as PlanAmountInGlobalCurrency,

  //@EndUserText.label: 'Difference Actual Plan in Global Crcy'
  //@AnalyticsDetails.query.formula : '$projection.ActualAmountInGlobalCurrency - $projection.PlanAmountInGlobalCurrency'
  //0 as DifferenceAmtInGlobalCrcy,

  //@EndUserText.label : 'Difference (%) GC'
  //@AnalyticsDetails.query.decimals: 2
  //@AnalyticsDetails.query.formula :  'CASE WHEN $projection.ActualAmountInGlobalCurrency > 0
  //                                   THEN ($projection.ActualAmountInGlobalCurrency - $projection.PlanAmountInGlobalCurrency) / $projection.ActualAmountInGlobalCurrency * 100
  //                                   ELSE NDIV0(($projection.PlanAmountInGlobalCurrency - $projection.ActualAmountInGlobalCurrency ) / $projection.ActualAmountInGlobalCurrency) * 100 END'
  //1 as GlobalCrcyDifferencePct,

  //@AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  ValuationQuantity

}
where
      Ledger          = :P_Ledger
  and ControllingArea = :P_ControllingArea;
```
