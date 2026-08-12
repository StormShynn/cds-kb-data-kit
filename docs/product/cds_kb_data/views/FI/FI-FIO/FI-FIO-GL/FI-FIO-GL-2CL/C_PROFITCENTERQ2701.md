---
name: C_PROFITCENTERQ2701
description: "This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each profit center and G/L account in transaction currency? What are the actual amounts for each profit center and G/L account in company code currency? What are the actual amounts for each profit center and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics."
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERQ2701')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each profit center and G/L account in transaction currency? What are the actual amounts for each profit center and G/L account in company code currency? What are the actual amounts for each profit center and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics."
semantic_vi: "Profit Centers Actuals — CDS view tiêu dùng dựa trên I_JournalEntryItemCube."
keywords:
  - "Profit Centers Actuals"
  - "profit"
  - "centers"
  - "actuals"
  - "center"
  - "account"
  - "cost"
  - "activity"
  - "type"
  - "business"
  - "transaction"
  - "calendar"
  - "month"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - transaction
---
# C_PROFITCENTERQ2701

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each profit center and G/L account in transaction currency? What are the actual amounts for each profit center and G/L account in company code currency? What are the actual amounts for each profit center and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERQ2701')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
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
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
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
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  | `cast(MaterialGroup as matkl preserving type)` | `CHAR(9)` | Material Group |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrganizationalChange` |  | |  |  | `CHAR(10)` | Orgl Change |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SoldMaterial` |  | |  | `cast(SoldMaterial as fis_sold_material preserving type)` | `CHAR(40)` | Sold Material |
| `SoldProductGroup` |  | |  | `cast(SoldProductGroup as fis_soldproductgroup preserving type)` | `CHAR(9)` | Sold Product Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERQ2701')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERQ2701')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPROFCTRQ2701'
@EndUserText.label: 'Profit Centers Actuals'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
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


define view C_ProfitCenterQ2701
  with parameters

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

  ------------------------------------------------------------------------------------------
  -- ROWS
  ------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.variableSequence: 50
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #ROWS
  ProfitCenter,

  @AnalyticsDetails.query.variableSequence: 95
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                          hierarchyBinding : [  { type: #USER_INPUT, value: 'GLAccountHierarchy', variableSequence: 90 } ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  GLAccount,
  _GLAccountInChartOfAccounts._Text[1:Language = $parameters.P_Language].GLAccountName,

  ------------------------------------------------------------------------------------------
  -- FREE
  ------------------------------------------------------------------------------------------
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
  @AnalyticsDetails.query.variableSequence: 40
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

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Customer,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CustomerGroup,
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

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,

  @AnalyticsDetails.query.totals: #SHOW
  GlobalCurrency,

  @AnalyticsDetails.query.totals: #SHOW
  AccountingDocument,

  @AnalyticsDetails.query.totals: #SHOW
  LedgerGLLineItem,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarYear', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
         }
  @AnalyticsDetails.query.variableSequence: 20
  LedgerFiscalYear,

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
  cast(MaterialGroup as matkl preserving type)                   as MaterialGroup, // do not use any longer, use SoldProductGroup

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountAssignmentType,

  @AnalyticsDetails.query.totals: #SHOW
  OrderID,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrganizationalChange,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginProfitCenter,

  @AnalyticsDetails.query.totals: #SHOW
  PartnerCostCtrActivityType,

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
  PartnerOrder_2                                                 as PartnerOrder,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProfitCenter,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProject,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerWBSElement,

  @AnalyticsDetails.query.totals: #SHOW
  PostingDate,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SoldProduct, //Product

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Project,
  //_Project.ProjectDescription,

  //@AnalyticsDetails.query.axis: #FREE
  //CostAnalysisResource,
  //@ObjectModel.text.element: 'CostAnalysisResourceName'
  //_CostAnalysisResource[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostAnalysisResourceName,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrder,
  @AnalyticsDetails.query.totals: #SHOW
  SalesOrderItem,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrganization,

  @AnalyticsDetails.query.variableSequence: 60
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'SoldProduct'
//  @VDM.lifecycle.status:    #DEPRECATED
//  @VDM.lifecycle.successor: 'SoldProduct'
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  cast(SoldMaterial as fis_sold_material preserving type)        as SoldMaterial, // do not use any longer, use SoldProduct

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  cast(SoldProductGroup as fis_soldproductgroup preserving type) as SoldProductGroup,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCompany, // = TradingPartner

  TransactionCurrency,

  @AnalyticsDetails.query.display: #KEY_TEXT
  WBSElement,
  //_WBSElement.WBSDescription,

  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearMonth,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYearWeek,

  ------------------------------------------------------------------------------------------
  -- Key Figures
  ------------------------------------------------------------------------------------------
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
      ControllingArea = :P_ControllingArea
  and Ledger          = :P_Ledger
```
