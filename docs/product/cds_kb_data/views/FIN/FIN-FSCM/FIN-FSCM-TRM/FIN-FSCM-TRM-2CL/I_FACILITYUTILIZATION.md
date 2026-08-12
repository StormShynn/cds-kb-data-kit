---
name: I_FACILITYUTILIZATION
description: "This CDS view meets the prerequisites for answering the following business questions: What is the facility utilization with a counterparty or syndicate counterparty on the key date? What is the facility utilization with a counterparty or syndicate counterparty in the specified currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYUTILIZATION')/$value
semantic_en: "This CDS view meets the prerequisites for answering the following business questions: What is the facility utilization with a counterparty or syndicate counterparty on the key date? What is the facility utilization with a counterparty or syndicate counterparty in the specified currency?"
semantic_vi: "Treasury Facility Utilization — CDS view tổng hợp dựa trên P_Ftr_Asgn_Utilize."
keywords:
  - "treasury"
  - "facility"
  - "utilization"
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
---
# I_FACILITYUTILIZATION

**This CDS view meets the prerequisites for answering the following business questions: What is the facility utilization with a counterparty or syndicate counterparty on the key date? What is the facility utilization with a counterparty or syndicate counterparty in the specified currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYUTILIZATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` | ✓ | |  |  | `DATS(8)` | Key Date |
| `Counterparty` | ✓ | | `_FinancialTransaction` | `Counterparty` | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `DrawingCompanyCode` | ✓ | |  | `cast( substring(Utilization.PositionObject, 1, 4) as ftr_drawing_company_code preserving type )` | `CHAR(4)` | Drawing Company Code |
| `DrawingFinancialTransaction` | ✓ | |  | `cast( substring(Utilization.PositionObject, 5, 13) as ftr_drawing_fin_transaction preserving type )` | `CHAR(13)` | Drawing Financial Transaction |
| `FinancialInstrumentProductType` |  | | `_FinancialTransaction` | `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | | `_FinancialTransaction` | `FinancialInstrTransactionType` | `CHAR(3)` | Financial Instrument Transaction Type |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `UtilizedAmountInTransCrcy` |  | |  | `sum(Utilization.UtilizedChangeAmount)` | `CURR(17)` |  |
| `TotalAmountInTransactionCrcy` |  | |  | `TotalAmount` | `CURR(17)` | Credit Line in Transaction Currency |
| `_FinancialTransaction` | | ✓ | | | | |
| `_DrawingFinancialTransaction` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_DrawingCompanyCode` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_SynCounterparty` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_KeyDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialTransaction` | `I_FinancialTransaction` | [0..1] |
| `_DrawingFinancialTransaction` | `I_FinancialTransaction` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_DrawingCompanyCode` | `I_CompanyCode` | [0..1] |
| `_Counterparty` | `I_BusinessPartner` | [0..1] |
| `_SynCounterparty` | `I_BusinessPartner` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_KeyDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYUTILIZATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACILITYUTILIZATION')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Treasury Facility Utilization'
@AbapCatalog: {
  sqlViewName: 'IFACUTILIZATION',
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
     serviceQuality: #D,
     sizeCategory:   #XL
   }
}
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FacilityUtilization
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_StartDate : vdm_v_start_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate   : vdm_v_end_date
  as select from P_Ftr_Asgn_Utilize  (

                 P_StartDate                  : $parameters.P_StartDate,
                 P_EndDate                    : $parameters.P_EndDate,
                 P_CrdtLineReportingFrequency : 'D' ) as Utilization
  association [0..1] to I_FinancialTransaction as _FinancialTransaction        on  _FinancialTransaction.CompanyCode          = Utilization.CompanyCode
                                                                               and _FinancialTransaction.FinancialTransaction = Utilization.FinancialTransaction
  association [0..1] to I_FinancialTransaction as _DrawingFinancialTransaction on  _DrawingFinancialTransaction.CompanyCode          = $projection.DrawingCompanyCode
                                                                               and _DrawingFinancialTransaction.FinancialTransaction = $projection.DrawingFinancialTransaction
  association [0..1] to I_CompanyCode          as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode          as _DrawingCompanyCode          on  $projection.DrawingCompanyCode = _DrawingCompanyCode.CompanyCode
  association [0..1] to I_BusinessPartner      as _Counterparty                on  $projection.counterparty = _Counterparty.BusinessPartner
  association [0..1] to I_BusinessPartner      as _SynCounterparty             on  $projection.SyndicatedCounterparty = _SynCounterparty.BusinessPartner
  association [0..1] to I_Currency             as _TransactionCurrency         on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_CalendarDate         as _KeyDate                     on  $projection.KeyDate = _KeyDate.CalendarDate

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Utilization.CompanyCode,
  key Utilization.FinancialTransaction,
      @ObjectModel.foreignKey.association: '_KeyDate'
  key Utilization.KeyDate,
      @ObjectModel.foreignKey.association: '_Counterparty'
  key _FinancialTransaction.Counterparty,

      @ObjectModel.foreignKey.association: '_SynCounterparty'
  key Utilization.SyndicatedCounterparty,
      @ObjectModel.foreignKey.association: '_DrawingCompanyCode'
  key cast( substring(Utilization.PositionObject, 1, 4) as ftr_drawing_company_code preserving type )     as DrawingCompanyCode,
      @ObjectModel.foreignKey.association: '_DrawingFinancialTransaction'
  key cast( substring(Utilization.PositionObject, 5, 13) as ftr_drawing_fin_transaction preserving type ) as DrawingFinancialTransaction,

      _FinancialTransaction.FinancialInstrumentProductType,
      _FinancialTransaction.FinancialInstrTransactionType,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      Utilization.TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @DefaultAggregation: #SUM
      sum(Utilization.UtilizedChangeAmount)                                                               as UtilizedAmountInTransCrcy,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Utilization.TotalAmount                                                                             as TotalAmountInTransactionCrcy,

      _FinancialTransaction,
      _CompanyCode,
      _KeyDate,
      _Counterparty,
      _SynCounterparty,
      _DrawingCompanyCode,
      _DrawingFinancialTransaction,
      _TransactionCurrency
}
group by
  Utilization.CompanyCode,
  Utilization.FinancialTransaction,
  Utilization.KeyDate,
  _FinancialTransaction.Counterparty,
  Utilization.SyndicatedCounterparty,
  Utilization.PositionObject,
  _FinancialTransaction.FinancialInstrumentProductType,
  _FinancialTransaction.FinancialInstrTransactionType,
  Utilization.TotalAmount,
  Utilization.TransactionCurrency
```
