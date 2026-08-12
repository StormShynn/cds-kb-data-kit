---
name: C_APJRNLENTRITMAGINGGRID
description: "This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?"
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APJRNLENTRITMAGINGGRID')/$value
semantic_en: "This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?"
semantic_vi: "Aging grid of journal entry view of Accounts Payables — CDS view tiêu dùng dựa trên I_APJrnlEntrItmAgingGrid."
keywords:
  - "aging"
  - "grid"
  - "journal"
  - "entry"
  - "accounts"
  - "payables"
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
  - bo:plant
  - component:FI-AP-IS-2CL
  - consumption-view
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - lob:finance
  - supplier
---
# C_APJRNLENTRITMAGINGGRID

**This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APJRNLENTRITMAGINGGRID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `SupplierRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `NetDueIntervalText` |  | |  |  | `CHAR(50)` | Net Due Date Interval |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `SupplierCountryName` |  | |  | `_SupplierCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `SupplierRegionName` |  | |  | `_SupplierRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `SpecialGLCodeName` |  | |  | `_SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName` | `CHAR(30)` | Long Text for Special G/L Indicators |
| `ReconciliationAccountLongName` |  | |  | `_ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `GLAccountLongName` |  | |  | `_GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
| `SupplierAccountGroupName` |  | |  | `_SupplierAccountGroup._SupplierAccountGroupText[1:Language = :P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APJRNLENTRITMAGINGGRID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APJRNLENTRITMAGINGGRID')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CAPJEITMAGGRID'
@EndUserText.label: 'Aging grid of journal entry view of Accounts Payables'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.query: true
@OData.publish: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
define view C_APJrnlEntrItmAgingGrid
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
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType', element: 'ExchangeRateType' } }]
    P_ExchangeRateType      : kurst,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              : sylangu
    
  as select from I_APJrnlEntrItmAgingGrid(P_KeyDate:               :P_KeyDate,
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

      Supplier,
      GLAccount,
      SpecialGLCode,
      ProfitCenter,
      BusinessArea,
      Segment,      
      AssignmentReference,
      SupplierCountry,
      SupplierRegion,
      AccountingClerk,
      ReconciliationAccount,
      NetDueIntervalText,

      _Company.CompanyCodeName                                                                   as CompanyCodeName,
      _Supplier.SupplierName                                                                     as SupplierName,
      _SupplierCountry._Text[1:Language = :P_Language].CountryName                               as SupplierCountryName,
      _SupplierRegion._RegionText[1:Language = :P_Language].RegionName                           as SupplierRegionName,
      _AccountingClerk.AccountingClerkName                                                       as AccountingClerkName,
      _SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName                       as SpecialGLCodeName,
      _ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName                   as ReconciliationAccountLongName,
      _GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountLongName              as GLAccountLongName,
      
      SupplierAccountGroup                                                                       as SupplierAccountGroup,
      _SupplierAccountGroup._SupplierAccountGroupText[1:Language = :P_Language].AccountGroupName as SupplierAccountGroupName,
        
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
