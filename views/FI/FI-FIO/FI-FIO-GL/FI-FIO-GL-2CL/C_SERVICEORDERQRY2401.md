---
name: C_SERVICEORDERQRY2401
description: Service Orders Actuals
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQRY2401')/$value
semantic_en: Service Orders Actuals
semantic_vi: Service Orders Actuals — CDS view tiêu dùng dựa trên I_JournalEntryItemCube.
keywords:
  - Service Orders Actuals
  - service
  - orders
  - actuals
  - document
  - type
  - item
  - contract
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - order
---
# C_SERVICEORDERQRY2401

**Service Orders Actuals**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQRY2401')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `EmployeeFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SoldProductGroup` |  | |  | `cast(SoldProductGroup as fis_soldproductgroup preserving type)` | `CHAR(9)` | Sold Product Group |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQRY2401')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQRY2401')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFISERVORDQ2401'
@EndUserText.label: 'Service Orders Actuals'
@VDM.viewType: #CONSUMPTION
@OData.publish: true
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


define view C_ServiceOrderQry2401
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
 

       
as select from I_JournalEntryItemCube  as I_JournalEntryItemCube                                                                                      
{

------------------------------------------------------------------------------------------
-- ROWS
------------------------------------------------------------------------------------------
@AnalyticsDetails.query.variableSequence: 75
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ServiceDocumentType,

@AnalyticsDetails.query.variableSequence: 80
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
ServiceDocument,

@AnalyticsDetails.query.variableSequence: 85
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
ServiceDocumentItem,

@AnalyticsDetails.query.variableSequence: 90
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ServiceContract,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ServiceContractType,

@AnalyticsDetails.query.variableSequence: 91
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
ServiceContractItem,

@AnalyticsDetails.query.variableSequence: 96
@Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                                      hierarchyBinding : [  { type: #USER_INPUT, value: 'GLAccountHierarchy', variableSequence: 95 } ] }
@AnalyticsDetails.query.displayHierarchy: #FILTER
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
GLAccount,
_GLAccountInChartOfAccounts._Text[1:Language = $parameters.P_Language].GLAccountName,

------------------------------------------------------------------------------------------
-- FREE
------------------------------------------------------------------------------------------
@AnalyticsDetails.query.axis: #FREE
BaseUnit,   //runit

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
BillableControl,

@AnalyticsDetails.query.totals: #SHOW
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

@AnalyticsDetails.query.variableSequence: 40
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
CompanyCode,
_CompanyCode.CompanyCodeName,

CompanyCodeCurrency,

@AnalyticsDetails.query.variableSequence: 92
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Customer,

@AnalyticsDetails.query.variableSequence: 70
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CustomerGroup,

//@AnalyticsDetails.query.totals: #SHOW
//@AnalyticsDetails.query.display: #KEY_TEXT
//ControllingDebitCreditCode,  //CO_BELKZ

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
DistributionChannel,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
OrganizationDivision,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
Equipment,

@AnalyticsDetails.query.variableSequence: 30
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
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

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FunctionalArea,
_FunctionalArea._Text[1:Language = $parameters.P_Language].FunctionalAreaName,

GlobalCurrency,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
AccountingDocument,       //CO Doc No.
@AnalyticsDetails.query.totals: #SHOW
LedgerGLLineItem, 

@AnalyticsDetails.query.variableSequence: 20
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
@Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
@AnalyticsDetails.query.axis: #FREE
LedgerFiscalYear,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
TimeSheetOvertimeCategory,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerCostCtrActivityType,  // PartnerActivityType
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerCostCenter,
//@AnalyticsDetails.query.totals: #SHOW
//@AnalyticsDetails.query.display: #KEY_TEXT
//PartnerFunctionalArea,    
//@AnalyticsDetails.query.totals: #SHOW
//@AnalyticsDetails.query.display: #KEY_TEXT
//PartnerOrder,    
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerProfitCenter,
//@AnalyticsDetails.query.totals: #SHOW
//@AnalyticsDetails.query.display: #KEY_TEXT
//PartnerProject,
//@AnalyticsDetails.query.totals: #SHOW
//@AnalyticsDetails.query.display: #KEY_TEXT
//PartnerWBSElement,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PersonnelNumber,
//_Employment[1:EndDate >= $parameters.P_KeyDate and StartDate <= $parameters.P_KeyDate]._Employee.EmployeeFullName as
EmployeeFullName,

@AnalyticsDetails.query.totals: #SHOW
PostingDate,

//@AnalyticsDetails.query.totals: #SHOW
//AccountingDocumentItem,   //CO Doc Item No.

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Product, 

//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProduct'
//@AnalyticsDetails.query.totals: #SHOW
//@AnalyticsDetails.query.display: #KEY_TEXT
//SoldMaterial, //Product do not use any longer, use SoldProduct

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SoldProduct, //Product

@AnalyticsDetails.query.variableSequence: 50
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
ProfitCenter,
_ProfitCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and 
                      ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].ProfitCenterName,                   

@AnalyticsDetails.query.variableSequence: 60
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SalesOrganization,

//@AnalyticsDetails.query.variableSequence: 60
//@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//Segment,
//_Segment._Text[1:Language = $parameters.P_Language].SegmentName,

//@AnalyticsDetails.query.totals: #SHOW
//PartnerCompany,             // = TradingPartner

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
cast(SoldProductGroup as fis_soldproductgroup preserving type) as SoldProductGroup, 

TransactionCurrency,

//@AnalyticsDetails.query.totals: #SHOW
//WorkItem,
//_WorkPackageWorkItem.WorkItemName,

@AnalyticsDetails.query.display: #KEY_TEXT
CalendarYearMonth,
@AnalyticsDetails.query.display: #KEY_TEXT
CalendarYearQuarter,
@AnalyticsDetails.query.display: #KEY_TEXT
CalendarYearWeek,

@AnalyticsDetails.query.variableSequence: 100
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE 
@AnalyticsDetails.query.totals: #SHOW
BusinessSolutionOrder,

//@AnalyticsDetails.query.variableSequence: 101
//@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
BusinessSolutionOrderItem,

------------------------------------------------------------------------------------------
-- Key Figures
------------------------------------------------------------------------------------------

@AnalyticsDetails.query.axis: #COLUMNS
AmountInTransactionCurrency,  //WSL
    
@AnalyticsDetails.query.axis: #COLUMNS
AmountInCompanyCodeCurrency,  //HSL

@AnalyticsDetails.query.hidden : true
@AnalyticsDetails.query.axis: #COLUMNS
//CO Area Currency (RKCUR)
AmountInGlobalCurrency,      //KSL

@AnalyticsDetails.query.axis: #COLUMNS
Quantity

}  where Ledger = :P_Ledger and ControllingArea = :P_ControllingArea and ( AccountAssignmentType = 'SV' or AccountAssignmentType = 'SC' );
```
