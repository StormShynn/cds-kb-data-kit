---
name: C_APFLEXIBLEAGING
description: This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APFLEXIBLEAGING')/$value
semantic_en: This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?
semantic_vi: Aging Analysis Smart Business App — CDS view tiêu dùng dựa trên I_APFlexibleAging.
keywords:
  - aging
  - analysis
  - smart
  - business
  - app
  - company
  - code
  - transaction
  - currency
  - account
  - supplier
  - accounting
  - document
  - category
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
# C_APFLEXIBLEAGING

**This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APFLEXIBLEAGING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Document Status |
| `AgingGridText` |  | |  |  | `CHAR(20)` | Aging Grid Text |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `GLAccountLongName` |  | |  | `_GLAccount._Text[1:Language = $parameters.P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `AccountingDocumentCategoryName` |  | |  | `_AccountingDocumentCategory._Text[1:Language = $parameters.P_Language].AccountingDocumentCategoryName` | `CHAR(60)` | Short Text for Fixed Values |
| `SpecialGLCodeName` |  | |  | `_SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName` | `CHAR(30)` | Long Text for Special G/L Indicators |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ChartOfAccountsName` |  | |  | `_ChartOfAccounts._Text[1:Language = $parameters.P_Language].ChartOfAccountsName` | `CHAR(50)` | Chart of Accounts Description |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
| `SupplierAccountGroupName` |  | |  | `_SupplierAccountGroup._SupplierAccountGroupText[1:Language = $parameters.P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency_E` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Not Overdue Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy_E` |  | |  |  | `CURR(23)` | Total Overdue Amount in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APFLEXIBLEAGING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APFLEXIBLEAGING')/$value)*

```abap
@EndUserText.label: 'Aging Analysis Smart Business App'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true 
@OData.publish: true
@AbapCatalog.sqlViewName: 'CAPFLXBLAGING'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations: true
define view C_APFlexibleAging 
// Corresponds to calculation view 'sap.hba.r.sfin700.AccountsPayableFlexibleAgingQuery'
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
    P_KeyDate : sydate,
    
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE 
    P_Language : sylangu,
    
    @Consumption.defaultValue: '30'
    P_AgingGridMeasureInDays : farp_aging_grid_measure,

    @Consumption.defaultValue: '4'
    P_NumberOfAgingGridColumns : farp_number_of_grid_columns, 
    
    @Consumption.defaultValue: 'EUR'    
    P_DisplayCurrency : vdm_v_display_currency,
    
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType', element: 'ExchangeRateType' } }]  
    P_ExchangeRateType : kurst
as select from
I_APFlexibleAging(
    P_KeyDate : :P_KeyDate, 
    P_AgingGridMeasureInDays : :P_AgingGridMeasureInDays, 
    P_NumberOfAgingGridColumns : :P_NumberOfAgingGridColumns, 
    P_DisplayCurrency : :P_DisplayCurrency,
    P_ExchangeRateType: :P_ExchangeRateType) 
{    
    CompanyCode,
    TransactionCurrency,
    GLAccount,
    Supplier,
    AccountingDocumentCategory,
    AgingGridText,
    SpecialGLCode,
    ExchangeRateType,
    
    _CompanyCode.CompanyCodeName as CompanyCodeName ,
    _GLAccount._Text[1:Language = $parameters.P_Language].GLAccountLongName as GLAccountLongName,
    _Supplier.SupplierName as SupplierName,
    _AccountingDocumentCategory._Text[1:Language = $parameters.P_Language].AccountingDocumentCategoryName as AccountingDocumentCategoryName,
    _SpecialGLCode._Text[1:Language = :P_Language].SpecialGLCodeLongName as SpecialGLCodeName,

    ChartOfAccounts,
    _ChartOfAccounts._Text[1:Language = $parameters.P_Language].ChartOfAccountsName as ChartOfAccountsName,
    SupplierAccountGroup,
    _SupplierAccountGroup._SupplierAccountGroupText[1:Language = $parameters.P_Language].AccountGroupName as SupplierAccountGroupName, 
    
    @Semantics.currencyCode:true    
    DisplayCurrency,
    
    @DefaultAggregation: #SUM  
    @Semantics.amount.currencyCode: 'DisplayCurrency'        
    AmountInDisplayCurrency_E, 
       
    @DefaultAggregation: #SUM
    @Semantics.amount.currencyCode: 'DisplayCurrency'   
    TotalNotOvrdAmtInDspCrcy,
      
    @DefaultAggregation: #SUM
    @Semantics.amount.currencyCode: 'DisplayCurrency'   
    TotalOverdueAmtInDspCrcy_E
    
    //@DefaultAggregation: #SUM
    //NumberOfOpenItems    

};
```
