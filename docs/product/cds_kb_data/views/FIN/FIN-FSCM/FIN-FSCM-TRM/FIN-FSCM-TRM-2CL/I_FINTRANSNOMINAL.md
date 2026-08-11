---
name: I_FINTRANSNOMINAL
description: "This CDS view reads the nominal amount of a financial transaction at a key date from today's perspective. This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of a financial transaction?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSNOMINAL')/$value
semantic_en: "This CDS view reads the nominal amount of a financial transaction at a key date from today's perspective. This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of a financial transaction?"
semantic_vi: "Fin Trans Nominal Amount — CDS view giao diện dựa trên I_FinTransFlow."
keywords:
  - "fin"
  - "trans"
  - "nominal"
  - "amount"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "direction"
  - "flow"
  - "crcy"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FINTRANSNOMINAL

**This CDS view reads the nominal amount of a financial transaction at a key date from today's perspective. This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of a financial transaction?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSNOMINAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialTransactionDirection` | ✓ | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinTransFlowNomAmt` |  | |  | `sum( case when Flow.FinTransFlowPaytAmtDirection = '+' then Flow.FinTransFlowNomAmt else Flow.FinTransFlowNomAmt * -1 end )` | `CURR(18)` |  |
| `FinTransFlowNomAmtCrcy` |  | |  |  | `CUKY(5)` | Flow Nominal Amount Currency |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |
| `_NominalCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_Direction` | `I_FinTransactionDirection` | [0..1] |
| `_NominalCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSNOMINAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSNOMINAL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSNOMINAL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Nominal Amount'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

//view shall provide nominal data based on flows
define view I_FinTransNominal 
  with parameters
    //parameter needed to get nominal flows valid on key date
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate   : vdm_v_key_date
  //get data from cash flow
  as select from I_FinTransFlow as Flow
    inner join I_FinTransCurrentActivity as Activity on Flow.CompanyCode          = Activity.CompanyCode
                                                    and Flow.FinancialTransaction = Activity.FinancialTransaction
// dimensions, containing for example text fields
  association [0..1] to I_CompanyCode          as _CompanyCode     on  $projection.CompanyCode                   = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction as _FinTrans        on  $projection.CompanyCode                   = _FinTrans.CompanyCode
                                                                   and $projection.FinancialTransaction          = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransactionDirection  as _Direction   on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
  association [0..1] to I_Currency             as _NominalCurrency on  $projection.FinTransFlowNomAmtCrcy        = _NominalCurrency.Currency

{
// exposed fields
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key Flow.CompanyCode               as CompanyCode,
  @ObjectModel.foreignKey.association: '_FinTrans'
  key Flow.FinancialTransaction      as FinancialTransaction,
  @ObjectModel.foreignKey.association: '_Direction'
  key Flow.FinancialTransactionDirection 
                                     as FinancialTransactionDirection,
  @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'    
  sum( case when Flow.FinTransFlowPaytAmtDirection = '+'
            then Flow.FinTransFlowNomAmt 
            else Flow.FinTransFlowNomAmt * -1 
       end )                         as FinTransFlowNomAmt,
  @ObjectModel.foreignKey.association: '_NominalCurrency'
  Flow.FinTransFlowNomAmtCrcy        as FinTransFlowNomAmtCrcy,
// exposed dimensions
  _CompanyCode,
  _FinTrans,
  _Direction,
  _NominalCurrency
}
where 
  //all flows before key date
      Flow.FinTransFlowPaymentDate      <= $parameters.P_KeyDate
  //nominal relevant flow categories
  and (   Flow.FinTransFlowCategory = '10'
       or Flow.FinTransFlowCategory = '11'
       or Flow.FinTransFlowCategory = '12'
       or Flow.FinTransFlowCategory = '13'
       or Flow.FinTransFlowCategory = '14'
       or Flow.FinTransFlowCategory = '15'
       or Flow.FinTransFlowCategory = '16'
       or Flow.FinTransFlowCategory = '70'
       or Flow.FinTransFlowCategory = '71'
       or Flow.FinTransFlowCategory = '72'
       or Flow.FinTransFlowCategory = '73'
       or Flow.FinTransFlowCategory = '84'
       or Flow.FinTransFlowCategory = '85' )
  //only consider flow (and whole financial transaction) in case key date is before end of term / notice date
  and (   Activity.TermEndDate > $parameters.P_KeyDate
       or Activity.TermEndDate is initial )
  and (   Activity.FinTransNoticeDate is initial
       or Activity.FinTransNoticeDate > $parameters.P_KeyDate )
  and ( Flow.FinTransFlowPostingStatus <> '3' 
       and Flow.FinTransFlowPostingStatus <> '4' )    
  //group flows
group by Flow.CompanyCode, Flow.FinancialTransaction, Flow.FinancialTransactionDirection, Flow.FinTransFlowNomAmtCrcy
```
