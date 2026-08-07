---
name: C_ARJRNLENTRITMAGINGGRID
description: "This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Accounts Receivables Aging Grid Cube (I_ARJrnlEntrItmAgingGrid). This query can be used in the key user tool KPI Design or Create Reports."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARJRNLENTRITMAGINGGRID')/$value
semantic_en: "This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Accounts Receivables Aging Grid Cube (I_ARJrnlEntrItmAgingGrid). This query can be used in the key user tool KPI Design or Create Reports."
semantic_vi: "Aging grid of journal entry view of Accounts Receivables — CDS view tiêu dùng dựa trên I_ARJrnlEntrItmAgingGrid."
keywords:
  - "aging"
  - "grid"
  - "journal"
  - "entry"
  - "accounts"
  - "receivables"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "ledger"
  - "line"
  - "item"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
---
# C_ARJRNLENTRITMAGINGGRID

**This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Accounts Receivables Aging Grid Cube (I_ARJrnlEntrItmAgingGrid). This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARJRNLENTRITMAGINGGRID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `NetDueIntervalText` |  | |  |  | `CHAR(50)` | Net Due Date Interval |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  | `_CustomerCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  | `_CustomerRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `SpecialGLCodeName` |  | |  | `_SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName` | `CHAR(30)` | Long Text for Special G/L Indicators |
| `ReconciliationAccountLongName` |  | |  | `_ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `GLAccountLongName` |  | |  | `_GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  | `_CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  | `_CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc` | `CHAR(20)` | Customer Classification Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotalAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Total Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Total Not Due Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Total Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueIntvl4AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 4th Due Period (Display Currency) |
| `FirstIntvlFutrDueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Future Amount in 1st Due Period (Display Currency) |
| `SecondIntvlFutrDueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Future Amount in 2nd Due Period (Display Currency) |
| `ThirdIntvlFutrDueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Future Amount in 3rd Due Period (Display Currency) |
| `FourthIntvlFutrDueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Futre Due Amount for Last Interval in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARJRNLENTRITMAGINGGRID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARJRNLENTRITMAGINGGRID')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CARJEITMAGGRID'
@EndUserText.label: 'Aging grid of journal entry view of Accounts Receivables'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.query: true
@OData.publish: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_ARJrnlEntrItmAgingGrid
  with parameters
  
    @EndUserText.label: 'Open on Key Date'
    @Consumption.defaultValue: 'TODAY'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name: 'C_GregorianCalSglDateFuncVH',
        element: 'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid,
    
    @Consumption.derivation: {
      lookupEntity: 'I_SglGregorianCalDateFunction',
      resultElement: 'DateFunctionStartDate',
      binding: [
        { targetParameter : 'P_DateFunction' ,
          type : #PARAMETER, value : 'P_DateFunction' }
      ]
    }
    @Consumption.hidden: true
    P_KeyDate               : vdm_v_key_date,

    @Consumption.defaultValue: '30'
    P_NetDueInterval1InDays : farp_net_due_interval1,

    @Consumption.defaultValue: '60'
    P_NetDueInterval2InDays : farp_net_due_interval2,

    @Consumption.defaultValue: '90'
    P_NetDueInterval3InDays : farp_net_due_interval3,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency       : vdm_v_display_currency,

    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }                                     
                                      }]  
    P_ExchangeRateType      : kurst,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              : sylangu
    
  as select from I_ARJrnlEntrItmAgingGrid(P_KeyDate:               :P_KeyDate,
                                          P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                          P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                          P_NetDueInterval3InDays: :P_NetDueInterval3InDays,
                                          P_DisplayCurrency:       :P_DisplayCurrency,
                                          P_ExchangeRateType:      :P_ExchangeRateType)
{
      CompanyCode,
      FiscalYear,
      AccountingDocument,
      LedgerGLLineItem,

      AccountingDocumentItem,

//      will be sorted as char (- 1, -10, -100, -2, -20, ...)  aos of now hence useless
//      NetDueArrearsDays,

      Customer,
      GLAccount,
      SpecialGLCode,
      ProfitCenter,
      BusinessArea,
      Segment,
      BillingDocument,
      AssignmentReference,
      CustomerCountry,
      CustomerRegion,
      AccountingClerk,
      ReconciliationAccount,
      NetDueIntervalText,

      _Company.CompanyCodeName                                                                   as CompanyCodeName,
      _Customer.CustomerName                                                                     as CustomerName,
      _CustomerCountry._Text[1:Language = :P_Language].CountryName                               as CustomerCountryName,
      _CustomerRegion._RegionText[1:Language = :P_Language].RegionName                           as CustomerRegionName,
      _AccountingClerk.AccountingClerkName                                                       as AccountingClerkName,
      _SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName                       as SpecialGLCodeName,
      _ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName                   as ReconciliationAccountLongName,
      _GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName              as GLAccountLongName,
      
      CustomerAccountGroup                                                                       as CustomerAccountGroup,
      _CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName as CustomerAccountGroupName,
      CustomerClassification                                                                     as CustomerClassification,
      _CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc         as CustomerClassificationDesc,

        
      @Semantics.currencyCode:true
      DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalAmountInDisplayCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalNotOvrdAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalOverdueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl1AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl2AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl3AmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetDueIntvl4AmtInDspCrcy,
       
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      FirstIntvlFutrDueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SecondIntvlFutrDueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      ThirdIntvlFutrDueAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      FourthIntvlFutrDueAmtInDspCrcy
}
```
