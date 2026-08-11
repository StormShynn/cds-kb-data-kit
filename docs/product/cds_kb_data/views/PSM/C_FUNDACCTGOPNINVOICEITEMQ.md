---
name: C_FUNDACCTGOPNINVOICEITEMQ
description: "Open Customer and Vendor Invoice - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGOPNINVOICEITEMQ')/$value
semantic_en: "Open Customer and Vendor Invoice - Query"
semantic_vi: "Open Customer and Vendor Invoice - Query — CDS view tiêu dùng dựa trên I_FundAcctgLineItemCube."
keywords:
  - "open"
  - "customer"
  - "and"
  - "vendor"
  - "invoice"
  - "query"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - bo:billingdocument
  - component:PSM
  - consumption-view
  - customer
  - invoice
  - vendor
---
# C_FUNDACCTGOPNINVOICEITEMQ

**Open Customer and Vendor Invoice - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGOPNINVOICEITEMQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGOPNINVOICEITEMQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGOPNINVOICEITEMQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFAOPNINVCITMQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Open Customer and Vendor Invoice - Query'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@OData.publish: true
define view C_FundAcctgOpnInvoiceItemQ with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu,
    @AnalyticsDetails.query.variableSequence : 30
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate  : vdm_v_key_date,
    
    @AnalyticsDetails.query.variableSequence: 10
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCode', element: 'CompanyCode' }
                                     } ]
    @Consumption.derivation: { lookupEntity: 'I_UserSettingsForCompanyCode',
          resultElement: 'CompanyCode' }
    P_CompanyCode               : fis_bukrs,
    
    @AnalyticsDetails.query.variableSequence: 20
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' },
                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ]
                                     } ]
    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarYear', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
    P_FiscalYear                : fis_gjahr,
    
    @Consumption.hidden: false
    @AnalyticsDetails.query.variableSequence: 30
    @Consumption.valueHelpDefinition: [ { entity: {name : 'I_Ledger', element: 'Ledger' } } ]
    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    P_Ledger                    : fins_ledger

  as select from I_FundAcctgLineItemCube
{
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  key Ledger,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT  
  key SourceLedger,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,

  @AnalyticsDetails.query.axis: #FREE
  key FiscalYear,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  key AccountingDocument,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  key LedgerGLLineItem,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,

  @AnalyticsDetails.query.axis: #FREE
  LedgerFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  PostingDate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,
  
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  AmountInCompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,

  @AnalyticsDetails.query.axis: #FREE
  ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  Supplier,
  
  @AnalyticsDetails.query.axis: #FREE
  Customer,
  
  @AnalyticsDetails.query.axis: #FREE
  FinancialAccountType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ControllingArea,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Fund,
 
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT  
  FundType,

  @AnalyticsDetails.query.axis: #FREE
  FinancialManagementArea,

  @AnalyticsDetails.query.axis: #FREE
  GLAccountType,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GrantID,
 
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  GrantType,
  
  @AnalyticsDetails.query.axis: #FREE
  FiscalYearVariant
}
where ( PostingDate   <= $parameters.P_KeyDate )
  and ( ( ClearingDate > $parameters.P_KeyDate ) or ( ClearingDate = '00000000' ) )
  and ( FinancialAccountType = 'K' or FinancialAccountType = 'D' )
  and CompanyCode      = $parameters.P_CompanyCode 
  and LedgerFiscalYear = $parameters.P_FiscalYear
  and Ledger = $parameters.P_Ledger
```
