---
name: I_FINTRANSAMTCUBE
description: "Fin Trans Amt - Cube"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSAMTCUBE')/$value
semantic_en: "Fin Trans Amt - Cube"
semantic_vi: "Fin Trans Amt - Cube — CDS view giao diện dựa trên I_FinTransAmount."
keywords:
  - "fin"
  - "trans"
  - "amt"
  - "cube"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "date"
  - "counterparty"
  - "bank"
  - "group"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_FINTRANSAMTCUBE

**Fin Trans Amt - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSAMTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` | ✓ | |  |  | `DATS(8)` | Key Date |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(18)` |  |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Valuation Currency |
| `FinTransProductGroup` |  | |  |  | `CHAR(4)` | Product Group for Financial Transaction |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `_FinancialTransaction` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_BankGroup` | | ✓ | | | | |
| `_BankGroup_2` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_FinancialInstrProdType` | | ✓ | | | | |
| `_FinancialInstrTransType` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialTransaction` | `I_FinancialTransaction` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_Counterparty` | `I_Ftr_Counterparty` | [1..1] |
| `_BankGroup` | `I_BusinessPartner` | [1..1] |
| `_BankGroup_2` | `I_BankGroup` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_FinancialInstrProdType` | `I_FinancialinstrProductType` | [1..1] |
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [1..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [1..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [1..1] |
| `_ProductGroup` | `I_FinTransProductGroup` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSAMTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSAMTCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSAMTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Amt - Cube'
define view I_FinTransAmtCube 
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_StartDate               : vdm_v_start_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate                 : vdm_v_end_date,
    P_FinTransAmtRptgFrequency : ftr_fintransdte_granularity
as select from I_FinTransAmount(P_StartDate : $parameters.P_StartDate,
                                P_EndDate   : $parameters.P_EndDate,
                                P_FinTransAmtRptgFrequency : $parameters.P_FinTransAmtRptgFrequency
                               ) as Trans 
    
    association [1..1] to I_FinancialTransaction        as _FinancialTransaction on _FinancialTransaction.CompanyCode          = $projection.CompanyCode
                                                                                and _FinancialTransaction.FinancialTransaction = $projection.FinancialTransaction
    association [1..1] to I_CompanyCode                 as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
    association [1..1] to I_CalendarDate                as _CalendarDate            on  $projection.KeyDate = _CalendarDate.CalendarDate 
    association [1..1] to I_Ftr_Counterparty            as _Counterparty            on  $projection.Counterparty = _Counterparty.BusinessPartner
    
    association [1..1] to I_BusinessPartner             as _BankGroup               on  $projection.BankGroup = _BankGroup.BusinessPartner
    association [1..1] to I_BankGroup                   as _BankGroup_2             on  $projection.BankGroup = _BankGroup_2.BusinessPartner
    association [1..1] to I_Currency                    as _TransactionCurrency     on  $projection.TransactionCurrency = _TransactionCurrency.Currency
    
    association [1..1] to I_FinancialinstrProductType   as _FinancialInstrProdType  on  $projection.FinancialInstrumentProductType = _FinancialInstrProdType.FinancialInstrumentProductType
    
    association [1..1] to I_FinancialInstrTransType     as _FinancialInstrTransType on  $projection.FinancialInstrTransactionType = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                   and  $projection.FinancialInstrumentProductType= _FinancialInstrTransType.FinancialInstrumentProductType
                                                                                   
    association [1..1] to I_TreasuryPortfolio           as _Portfolio               on  $projection.CompanyCode = _Portfolio.CompanyCode
                                                                                   and  $projection.Portfolio   = _Portfolio.Portfolio
    association [1..1] to I_SecurityAccount             as _SecurityAccount         on  $projection.SecurityAccount                = _SecurityAccount.SecurityAccount
                                                                                   and  $projection.CompanyCode                    = _SecurityAccount.CompanyCode                                                                                                                                               
    association [1..1] to I_FinTransProductGroup        as _ProductGroup         on  $projection.FinTransProductGroup = _ProductGroup.FinTransProductGroup                                                                        
{
        @ObjectModel.foreignKey.association: '_CompanyCode'
    key CompanyCode,
        @ObjectModel.foreignKey.association: '_FinancialTransaction'
    key FinancialTransaction,
        @ObjectModel.foreignKey.association: '_CalendarDate'
    key KeyDate,
        @ObjectModel.foreignKey.association: '_Counterparty' 
        Counterparty,
        @ObjectModel.foreignKey.association: '_BankGroup_2'
        BankGroup,
        @Semantics.amount.currencyCode: 'TransactionCurrency'
        @DefaultAggregation: #SUM
        AmountInTransactionCurrency,
        @ObjectModel.foreignKey.association: '_TransactionCurrency'
        TransactionCurrency,
        @ObjectModel.foreignKey.association: '_ProductGroup'
        FinTransProductGroup,
        @ObjectModel.foreignKey.association: '_FinancialInstrProdType'
        FinancialInstrumentProductType,
        @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
        FinancialInstrTransactionType,
        @ObjectModel.foreignKey.association: '_Portfolio'
        Portfolio,
        @ObjectModel.foreignKey.association: '_SecurityAccount'
        SecurityAccount,
        
        _FinancialTransaction,
        _CompanyCode,
        _CalendarDate,
        _Counterparty,
        @API.element.releaseState: #DEPRECATED
        @API.element.successor: '_BankGroup_2'
        @VDM.lifecycle.status: #DEPRECATED
        @VDM.lifecycle.successor: '_BankGroup_2'
        _BankGroup,
        _BankGroup_2,
        _TransactionCurrency,
        _FinancialInstrProdType,
        _FinancialInstrTransType,
        _Portfolio,
        _SecurityAccount,
        _ProductGroup
}
```
