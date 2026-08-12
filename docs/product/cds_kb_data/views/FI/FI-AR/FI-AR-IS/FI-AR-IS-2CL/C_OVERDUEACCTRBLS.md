---
name: C_OVERDUEACCTRBLS
description: "This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Overdue Receivables Cube ( I_OverdueAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVERDUEACCTRBLS')/$value
semantic_en: "This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Overdue Receivables Cube ( I_OverdueAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports."
semantic_vi: "Overdue Accounts Receivables Smart Business App — CDS view tiêu dùng dựa trên I_OverdueAccountsReceivables."
keywords:
  - "overdue"
  - "accounts"
  - "receivables"
  - "smart"
  - "business"
  - "app"
  - "company"
  - "code"
  - "customer"
  - "interval"
  - "text"
  - "special"
  - "account"
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
# C_OVERDUEACCTRBLS

**This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Overdue Receivables Cube ( I_OverdueAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVERDUEACCTRBLS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `NetDueIntervalText` |  | |  |  | `CHAR(50)` | Net Due Date Interval |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `SpecialGLCodeName` |  | |  | `_SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName` | `CHAR(30)` | Long Text for Special G/L Indicators |
| `GLAccountLongName` |  | |  | `_GLAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `CreditSegmentName` |  | |  | `_CreditManagementSegment._Text[1:Language = :P_Language].CreditSegmentName` | `CHAR(50)` | Name of Credit Segment |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerCountryName` |  | |  | `_CustomerCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CustomerRegionName` |  | |  | `_CustomerRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ReconciliationAccountLongName` |  | |  | `_ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  | `_CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  | `_CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc` | `CHAR(20)` | Customer Classification Description |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditRiskClassName` |  | |  | `_CreditRiskClass._Text[1:Language = :P_Language].CreditRiskClassName` | `CHAR(40)` | Name of Risk Class |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NumberOfOpenItems` |  | |  |  | `INT4(10)` | Number of Items |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Overdue Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Not Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueLastIntvlAmtInDspCrcy` |  | |  |  | `CURR(23)` | Overdue Amount in Last Interval in Display Currency |
| `TotalAmountInDisplayCrcy` |  | |  | `0` | `FLTP(16)` |  |
| `OverdueReceivablesInPercent` |  | |  | `0` | `FLTP(16)` |  |
| `OverdueReceivablesRatio` |  | |  | `0` | `FLTP(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVERDUEACCTRBLS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVERDUEACCTRBLS')/$value)*

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #XXL //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #X //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@AbapCatalog.sqlViewName: 'COVRDUEACCTRBLS'
@EndUserText.label: 'Overdue Accounts Receivables Smart Business App'
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.query: true
@OData.publish: true
define view C_OverdueAcctRbls
  //as select from bseg
  //{
  //key bukrs

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
    P_KeyDate               : sydate,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              : sylangu,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency       : vdm_v_display_currency,

    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }                                     
                                      }]  
    P_ExchangeRateType      : kurst_curr,

    @Consumption.defaultValue: '30'
    P_NetDueInterval1InDays : farp_net_due_interval1,

    @Consumption.defaultValue: '60'
    P_NetDueInterval2InDays : farp_net_due_interval2,

    @Consumption.defaultValue: '90'
    P_NetDueInterval3InDays : farp_net_due_interval3

  as select from I_OverdueAccountsReceivables( P_KeyDate: :P_KeyDate,
                                               P_DisplayCurrency: :P_DisplayCurrency,
                                               P_ExchangeRateType: :P_ExchangeRateType,
                                               P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                               P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                               P_NetDueInterval3InDays: :P_NetDueInterval3InDays )
  // define 'sap:text' property in metadata annotations by stating stating the association to the property with annotation 'semantics.text:true'
  //         (e.g. 'Customer' and '_Customer.CustomerName as xyz')
  // define formulas for KPIs which shall be calculated after aggregation; will be executed by Analytical Engine off DB
{
      CompanyCode,
      Customer,
      NetDueIntervalText,
      SpecialGLCode,
      GLAccount,
      CreditSegment,

      _SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName                       as SpecialGLCodeName,
      _GLAccount._Text[1:Language = :P_Language].GLAccountLongName                               as GLAccountLongName,
      _CreditManagementSegment._Text[1:Language = :P_Language].CreditSegmentName                 as CreditSegmentName,

      _Company.CompanyCodeName                                                                   as CompanyCodeName,
      _Customer.CustomerName                                                                     as CustomerName,
      CustomerCountry,
      _CustomerCountry._Text[1:Language = :P_Language].CountryName                               as CustomerCountryName,
      CustomerRegion,
      _CustomerRegion._RegionText[1:Language = :P_Language].RegionName                           as CustomerRegionName,
      AccountingClerk,
      _AccountingClerk.AccountingClerkName                                                       as AccountingClerkName,
      ReconciliationAccount,
      _ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName                   as ReconciliationAccountLongName,
      ChartOfAccounts,
      
      CustomerAccountGroup                                                                       as CustomerAccountGroup,
      _CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName as CustomerAccountGroupName,
      CustomerClassification                                                                     as CustomerClassification,
      _CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc         as CustomerClassificationDesc,
      CreditRiskClass, 
      _CreditRiskClass._Text[1:Language = :P_Language].CreditRiskClassName                       as CreditRiskClassName,

      ExchangeRateType,

      @Semantics.currencyCode:true
      DisplayCurrency,

      @DefaultAggregation: #SUM
      NumberOfOpenItems,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      AmountInDisplayCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalOverdueAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalNotOvrdAmtInDspCrcy,
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
      NetDueLastIntvlAmtInDspCrcy,

      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: '(NetDueIntvl1AmtInDspCrcy + NetDueIntvl2AmtInDspCrcy + NetDueIntvl3AmtInDspCrcy + NetDueLastIntvlAmtInDspCrcy)'
      1.0                                                                                 as TotalAmountInDisplayCrcy, // best fitting GFN


      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0( $projection.TotalAmountInDisplayCrcy / AmountInDisplayCurrency)'
      1.0                                                                                 as OverdueReceivablesInPercent, // Best fitting GFN though result is not in percent

      @EndUserText.label: 'Overdue Receivables Ratio'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.OverdueReceivablesInPercent > 1 THEN 1 ELSE $projection.OverdueReceivablesInPercent END'
      @AnalyticsDetails.query.decimals: 4
      1.0                                                                                 as OverdueReceivablesRatio

      /*
          @DefaultAggregation: #FORMULA
          case when
                  AmountInDisplayCurrency !=  0
          then
              DIVISION( (
                            NetDueIntvl1AmtInDspCrcy
                          + NetDueIntvl2AmtInDspCrcy
                          + NetDueIntvl3AmtInDspCrcy
                          + NetDueIntvl4AmtInDspCrcy
                         ),
                        AmountInDisplayCurrency,
                  2
              )
          else
              100
          end as OverdueReceivablesRatio2
      */
}
```
