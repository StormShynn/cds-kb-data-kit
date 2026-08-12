---
name: I_FACILITYCONTRACT
description: "This CDS view meets the prerequisites for answering the following business questions: What is the credit line with a counterparty or syndicate counterparty on the key date? What is the credit line with a counterparty or syndicate counterparty in the specified currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYCONTRACT')/$value
semantic_en: "This CDS view meets the prerequisites for answering the following business questions: What is the credit line with a counterparty or syndicate counterparty on the key date? What is the credit line with a counterparty or syndicate counterparty in the specified currency?"
semantic_vi: "Treasury Facility Contract — CDS view tổng hợp dựa trên P_Ftr_Asgn_Utilize."
keywords:
  - "treasury"
  - "facility"
  - "contract"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "date"
  - "counterparty"
  - "syndicated"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - contract
---
# I_FACILITYCONTRACT

**This CDS view meets the prerequisites for answering the following business questions: What is the credit line with a counterparty or syndicate counterparty on the key date? What is the credit line with a counterparty or syndicate counterparty in the specified currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYCONTRACT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` | ✓ | |  |  | `DATS(8)` | Key Date |
| `Counterparty` | ✓ | | `_FinancialTransaction` | `Counterparty` | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `FinInstrTransactionCategory` |  | | `_FinancialTransaction` | `FinInstrTransactionCategory` | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | | `_FinancialTransaction` | `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | | `_FinancialTransaction` | `FinancialInstrTransactionType` | `CHAR(3)` | Financial Instrument Transaction Type |
| `Portfolio` |  | | `_FinancialTransaction` | `Portfolio` | `CHAR(10)` | Portfolio |
| `FinancialInstrumentAssignment` |  | | `_FinancialTransaction` | `FinancialInstrumentAssignment` | `CHAR(18)` | Free Assignment of Financial Transaction |
| `FinancialInstrumentReference` |  | | `_FinancialTransaction` | `FinancialInstrumentReference` | `CHAR(16)` | Free Internal Reference of Financial Transaction |
| `FinancialInstrCharacteristic` |  | | `_FinancialTransaction` | `FinancialInstrCharacteristic` | `CHAR(25)` | Free Characteristic of Financial Transaction |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TotalAmountInTransactionCrcy` |  | |  | `TotalAmount` | `CURR(17)` | Credit Line in Transaction Currency |
| `_FinancialTransaction` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_SynCounterparty` | | ✓ | | | | |
| `_FinInstrTransCat` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_KeyDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialTransaction` | `I_FinancialTransaction` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Counterparty` | `I_BusinessPartner` | [0..1] |
| `_SynCounterparty` | `I_BusinessPartner` | [0..1] |
| `_FinInstrTransCat` | `I_FinInstrTransCat` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_KeyDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYCONTRACT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYCONTRACT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Treasury Facility Contract'
@AbapCatalog: {
  sqlViewName: 'IFACCONTRACT',
  compiler.compareFilter: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   representativeKey: 'FinancialTransaction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   }
}
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FacilityContract 
    with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                  : vdm_v_key_date
    as select from P_Ftr_Asgn_Utilize(
        P_StartDate                  : $parameters.P_KeyDate,
        P_EndDate                    : $parameters.P_KeyDate,
        P_CrdtLineReportingFrequency : 'D') as Utilization
    association [0..1] to I_FinancialTransaction     as _FinancialTransaction         
                                                     on _FinancialTransaction.CompanyCode          = Utilization.CompanyCode
                                                    and _FinancialTransaction.FinancialTransaction = Utilization.FinancialTransaction
    association [0..1] to I_CompanyCode              as _CompanyCode   
                                                     on $projection.CompanyCode                    = _CompanyCode.CompanyCode
    association [0..1] to I_BusinessPartner         as _Counterparty
                                                     on $projection.counterparty                   = _Counterparty.BusinessPartner
    association [0..1] to I_BusinessPartner         as _SynCounterparty
                                                     on $projection.SyndicatedCounterparty          = _SynCounterparty.BusinessPartner                                                   
    association [0..1] to I_FinInstrTransCat         as _FinInstrTransCat
                                                     on _FinInstrTransCat.FinancialInstrProductCategory = '560'
                                                    and _FinInstrTransCat.FinInstrTransactionCategory   = $projection.fininstrtransactioncategory   
//    association [0..1] to I_TreasuryPortfolio        as _Portfolio                  
 //                                                    on  $projection.CompanyCode = _Portfolio.CompanyCode
 //                                                   and  $projection.portfolio   = _Portfolio.Portfolio
    association [0..1] to I_Currency                 as _TransactionCurrency         
                                                     on $projection.TransactionCurrency                 = _TransactionCurrency.Currency     
    association [1..1] to I_CalendarDate             as _KeyDate               
                                                     on $projection.KeyDate = _KeyDate.CalendarDate
{
//key info of facility contract    
    @ObjectModel.foreignKey.association: '_CompanyCode'
    key Utilization.CompanyCode,
    key Utilization.FinancialTransaction,
    @ObjectModel.foreignKey.association: '_KeyDate' 
    key Utilization.KeyDate,
    @ObjectModel.foreignKey.association: '_Counterparty'    
    key _FinancialTransaction.Counterparty,
    @ObjectModel.foreignKey.association: '_SynCounterparty'  
    key Utilization.SyndicatedCounterparty,
    
 //properties from financial transaction    
    @ObjectModel.foreignKey.association: '_FinInstrTransCat'
        _FinancialTransaction.FinInstrTransactionCategory,       
        _FinancialTransaction.FinancialInstrumentProductType,
        _FinancialTransaction.FinancialInstrTransactionType,
//    @ObjectModel.foreignKey.association: '_Portfolio'    
        _FinancialTransaction.Portfolio,
        _FinancialTransaction.FinancialInstrumentAssignment, 
        _FinancialTransaction.FinancialInstrumentReference,
        _FinancialTransaction.FinancialInstrCharacteristic,
//facility credit amount
        @Semantics.currencyCode:true
        @ObjectModel.foreignKey.association: '_TransactionCurrency'   
        Utilization.TransactionCurrency,
        @Semantics.amount.currencyCode: 'TransactionCurrency'     
        Utilization.TotalAmount as TotalAmountInTransactionCrcy,

        _FinancialTransaction,
        _CompanyCode, 
        _Counterparty,
        _SynCounterparty,
        _FinInstrTransCat,
 //       _Portfolio,
        _KeyDate,
        _TransactionCurrency  
}  
group by 
        Utilization.CompanyCode,
        Utilization.FinancialTransaction,
        Utilization.KeyDate,
        _FinancialTransaction.Counterparty,
        Utilization.SyndicatedCounterparty,  
        _FinancialTransaction.FinancialInstrumentProductType,
        _FinancialTransaction.FinancialInstrTransactionType,
        _FinancialTransaction.FinInstrTransactionCategory,              
        _FinancialTransaction.Portfolio,
        _FinancialTransaction.FinancialInstrumentAssignment, 
        _FinancialTransaction.FinancialInstrumentReference,
        _FinancialTransaction.FinancialInstrCharacteristic,
        Utilization.TotalAmount,
        Utilization.TransactionCurrency
```
