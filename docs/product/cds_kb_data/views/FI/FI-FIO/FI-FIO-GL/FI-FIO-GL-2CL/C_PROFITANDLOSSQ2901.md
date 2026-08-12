---
name: C_PROFITANDLOSSQ2901
description: "This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each G/L account in transaction currency? What are the actual amounts for each G/L account in company code currency? What are the actual amounts for each G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics."
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSQ2901')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each G/L account in transaction currency? What are the actual amounts for each G/L account in company code currency? What are the actual amounts for each G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics."
semantic_vi: "Profit Loss Actuals — CDS view tiêu dùng dựa trên I_JournalEntryItemCube."
keywords:
  - "Profit Loss Actuals"
  - "profit"
  - "loss"
  - "actuals"
  - "account"
  - "cost"
  - "activity"
  - "type"
  - "base"
  - "unit"
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
# C_PROFITANDLOSSQ2901

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each G/L account in transaction currency? What are the actual amounts for each G/L account in company code currency? What are the actual amounts for each G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSQ2901')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `EmployeeFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  | `cast(MaterialGroup as matkl preserving type)` | `CHAR(9)` | Material Group |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SoldMaterial` |  | |  | `cast(SoldMaterial as fis_sold_material preserving type)` | `CHAR(40)` | Sold Material |
| `SoldProductGroup` |  | |  | `cast(SoldProductGroup as fis_soldproductgroup preserving type)` | `CHAR(9)` | Sold Product Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSQ2901')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSQ2901')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPROFLOSSQ2901'
@EndUserText.label: 'Profit Loss Actuals'
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


define view C_ProfitAndLossQ2901
with parameters
 
@Semantics.businessDate.at: true
@Environment.systemField: #SYSTEM_DATE
  P_KeyDate    : vdm_v_key_date,
  
@Consumption.hidden: true
@Environment.systemField: #SYSTEM_LANGUAGE
  P_Language   : sylangu,
  
@Consumption.hidden: true
@Environment.systemField: #USER
 P_BusinessUser: syuname,

@Consumption.hidden: true
@Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea', 
      resultElement: 'ControllingArea', 
      binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
 P_ControllingArea: kokrs,

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
P_Ledger: fins_ledger
       
as select from I_JournalEntryItemCube as I_JournalEntryItemCube  
{
------------------------------------------------------------------------------------------------------
-- ROWS
------------------------------------------------------------------------------------------------------
@AnalyticsDetails.query.variableSequence: 81
@Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_GLAccountHierarchyName', variableSequence: 80 } ] }
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
CostCtrActivityType,        // = ActivityType

@AnalyticsDetails.query.totals: #SHOW
BaseUnit,

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
@AnalyticsDetails.query.variableSequence: 35
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
@AnalyticsDetails.query.variableSequence: 30
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CompanyCode,

@AnalyticsDetails.query.totals: #SHOW
CompanyCodeCurrency,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CostCenter,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Customer,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CustomerGroup,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
DebitCreditCode,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
DistributionChannel,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
OrganizationDivision,

@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.variableSequence: 20
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
EmployeeFullName,

@AnalyticsDetails.query.variableSequence: 40
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
FunctionalArea,

@AnalyticsDetails.query.totals: #SHOW
GlobalCurrency,

@AnalyticsDetails.query.totals: #SHOW
AccountingDocument,

@AnalyticsDetails.query.totals: #SHOW
AccountingDocumentItem,

@AnalyticsDetails.query.axis: #FREE
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
@Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
@AnalyticsDetails.query.variableSequence: 10
LedgerFiscalYear,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'Product' 
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'Product'
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Material, // do not use any longer, use Product
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProductGroup' 
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProductGroup'
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
cast(MaterialGroup as matkl preserving type) as MaterialGroup, // do not use any longer, use SoldProductGroup

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
AccountAssignmentType, 

@AnalyticsDetails.query.totals: #SHOW
OrderID,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerCostCtrActivityType, // = PartnerActivityType

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerCostCenter,

@AnalyticsDetails.query.totals: #SHOW    
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerFunctionalArea,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerOrder_2 as PartnerOrder,

@AnalyticsDetails.query.totals: #SHOW    
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerProfitCenter,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerProjectExternalID'
PartnerProject,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerProjectExternalID,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
PartnerWBSElement,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerWBSElementExternalID,
//@AnalyticsDetails.query.totals: #SHOW    
//@AnalyticsDetails.query.axis: #FREE
//PartnerSegment,

@AnalyticsDetails.query.totals: #SHOW
PersonnelNumber,

@AnalyticsDetails.query.totals: #SHOW
PostingDate,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Product, 

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SoldProduct, 

@AnalyticsDetails.query.variableSequence: 60
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ProfitCenter,

@AnalyticsDetails.query.variableSequence: 70
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
// @AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectExternalID'
Project,

@AnalyticsDetails.query.variableSequence: 70
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ProjectExternalID,

//_Project.ProjectDescription,

@AnalyticsDetails.query.axis: #FREE
CostAnalysisResource,
_CostAnalysisResource[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostAnalysisResourceName,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SalesOrder,
@AnalyticsDetails.query.totals: #SHOW
SalesOrderItem,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SalesOrganization,

@AnalyticsDetails.query.variableSequence: 50
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Segment,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProduct' 
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProduct'
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
cast(SoldMaterial as fis_sold_material preserving type) as SoldMaterial, // do not use any longer, use SoldProduct

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
cast(SoldProductGroup as fis_soldproductgroup preserving type) as SoldProductGroup, 

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerCompany, //= TradingPartner

//@AnalyticsDetails.query.totals: #SHOW
//Plant,
//@AnalyticsDetails.query.totals: #SHOW
//@AnalyticsDetails.query.axis: #FREE
//Ledger,

//@AnalyticsDetails.query.totals: #SHOW
//LedgerGLLineItem,

//@AnalyticsDetails.query.axis: #FREE
//AlternativeGLAccount,
   
//AdditionalQuantity1Unit,
//AdditionalQuantity2Unit,
//AdditionalQuantity3Unit,
@AnalyticsDetails.query.totals: #SHOW
TransactionCurrency,


@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'
WBSElement,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
WBSElementExternalID,

//_WBSElement.WBSDescription,

@AnalyticsDetails.query.display: #KEY_TEXT
CalendarYearMonth,
@AnalyticsDetails.query.display: #KEY_TEXT
CalendarYearQuarter,
@AnalyticsDetails.query.display: #KEY_TEXT
CalendarYearWeek,

//Key Figures
@AnalyticsDetails.query.axis: #COLUMNS //WSL
AmountInTransactionCurrency,
    
@AnalyticsDetails.query.axis: #COLUMNS //HSL
AmountInCompanyCodeCurrency,

@AnalyticsDetails.query.axis: #COLUMNS //KSL
AmountInGlobalCurrency,


@AnalyticsDetails.query.axis: #FREE
Quantity

}  where Ledger = :P_Ledger and ControllingArea = :P_ControllingArea;
```
