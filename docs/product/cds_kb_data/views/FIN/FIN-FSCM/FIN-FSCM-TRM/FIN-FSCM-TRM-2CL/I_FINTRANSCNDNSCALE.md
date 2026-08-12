---
name: I_FINTRANSCNDNSCALE
description: "This CDS view provides information about the conditions of financial transactions that have a scaled interest condition (the Interest Category field of the condition is set to 07 (Scaled: Interval) or 06 (Scaled: Incremental)). This CDS view provides the prerequisites for answering the following business questions: What are the lower and upper limits of a scaled condition item? What is the percentage of a scaled condition item?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSCALE')/$value
semantic_en: "This CDS view provides information about the conditions of financial transactions that have a scaled interest condition (the Interest Category field of the condition is set to 07 (Scaled: Interval) or 06 (Scaled: Incremental)). This CDS view provides the prerequisites for answering the following business questions: What are the lower and upper limits of a scaled condition item? What is the percentage of a scaled condition item?"
semantic_vi: "Fin Trans Condition Scaled Interest — CDS view giao diện dựa trên R_FinTransCashFlowActivity."
keywords:
  - "fin"
  - "trans"
  - "condition"
  - "scaled"
  - "interest"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "instrument"
  - "activity"
  - "direction"
  - "item"
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
# I_FINTRANSCNDNSCALE

**This CDS view provides information about the conditions of financial transactions that have a scaled interest condition (the Interest Category field of the condition is set to 07 (Scaled: Interval) or 06 (Scaled: Incremental)). This CDS view provides the prerequisites for answering the following business questions: What are the lower and upper limits of a scaled condition item? What is the percentage of a scaled condition item?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSCALE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | ✓ | |  |  | `NUMC(5)` | Transaction Activity |
| `FinancialTransactionDirection` | ✓ | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinConditionItem` | ✓ | |  |  | `NUMC(4)` | Condition |
| `ConditionItemValidityStartDate` | ✓ | |  |  | `DATS(8)` | Condition Item Effective From |
| `FinInstrConditionLogicGroup` | ✓ | |  |  | `NUMC(4)` | Condition Logic Group |
| `FinancialInstrProductCategory` |  | | `_FinTrans` | `FinancialInstrProductCategory` | `NUMC(3)` | Financial Instrument Product Category |
| `FinCndnScaleLowerLimitAmount` |  | |  |  | `CURR(23)` | Lower Limit for Amount |
| `FinCndnScaleUpperLimitAmount` |  | |  |  | `CURR(23)` | Upper Limit for Amt |
| `FinCndnLimitAmountCurrency` |  | |  |  | `CUKY(5)` | Limit Amount Currency |
| `FinConditionInterestCategory` |  | |  | `case when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) and Condition.ConditionPercentageRate is not initial then '02' when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) and Condition.FinConditionFormulaReference is not initial and Condition.FinConditionFormulaReference <> '0003' then '04' when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) and Condition.InterestReference is not initial then '03' end` | `NUMC(2)` |  |
| `ConditionPercentageRate` |  | |  | `case when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) and Condition.ConditionPercentageRate is not initial then Condition.ConditionPercentageRate end` | `DEC(10)` | Percentage rate for condition items |
| `InterestReference` |  | |  | `case when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) and Condition.InterestReference is not initial and ( Condition.FinConditionFormulaReference is initial or Condition.FinConditionFormulaReference = '0003' ) then Condition.InterestReference end` | `CHAR(10)` | Reference Interest Rate |
| `FinConditionFormulaReference` |  | |  | `case when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) and Condition.FinConditionFormulaReference is not initial then Condition.FinConditionFormulaReference end` | `CHAR(4)` | Formula Reference |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_Activity` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |
| `_LimitCurrency` | | ✓ | | | | |
| `_InterestCategory` | | ✓ | | | | |
| `_ReferenceInterestRate` | | ✓ | | | | |
| `_FormulaVariable` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_Activity` | `I_FinTransActivity` | [0..1] |
| `_Direction` | `I_FinTransactionDirection` | [0..1] |
| `_LimitCurrency` | `I_Currency` | [0..1] |
| `_InterestCategory` | `I_FinCndnInterestCategory` | [0..1] |
| `_ReferenceInterestRate` | `I_ReferenceInterestRate` | [0..1] |
| `_FormulaVariable` | `I_FinTransCndnFmlaVarbl` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSCALE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSCALE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSCNDNSCL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Condition Scaled Interest'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FinTransCndnScale
  //all activities containing conditions
  as select from R_FinTransCashFlowActivity as Activity
  //all conditions of these activities (within where-condition they can be restricted)
  inner join R_FinTransCondition as Condition on Activity.CompanyCode                 = Condition.CompanyCode
                                             and Activity.FinancialTransaction        = Condition.FinancialTransaction
                                             and Activity.FinancialInstrumentActivity = Condition.FinancialInstrumentActivity
// dimensions, containing for example text fields
  association [0..1] to I_CompanyCode             as _CompanyCode           on  $projection.CompanyCode                   = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction    as _FinTrans              on  $projection.CompanyCode                   = _FinTrans.CompanyCode
                                                                            and $projection.FinancialTransaction          = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransActivity        as _Activity              on  $projection.CompanyCode                   = _Activity.CompanyCode
                                                                            and $projection.FinancialTransaction          = _Activity.FinancialTransaction
                                                                            and $projection.FinancialInstrumentActivity   = _Activity.FinancialInstrumentActivity
  association [0..1] to I_FinTransactionDirection as _Direction             on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
  association [0..1] to I_Currency                as _LimitCurrency         on  $projection.FinCndnLimitAmountCurrency    = _LimitCurrency.Currency
  association [0..1] to I_FinCndnInterestCategory as _InterestCategory      on $projection.FinConditionInterestCategory   = _InterestCategory.FinConditionInterestCategory
  association [0..1] to I_ReferenceInterestRate   as _ReferenceInterestRate on $projection.InterestReference              = _ReferenceInterestRate.ReferenceInterestRate
  association [0..*] to I_FinTransCndnFmlaVarbl   as _FormulaVariable       on $projection.CompanyCode                    = _FormulaVariable.CompanyCode
                                                                            and $projection.FinancialTransaction           = _FormulaVariable.FinancialTransaction
                                                                            and $projection.FinancialInstrumentActivity    = _FormulaVariable.FinancialInstrumentActivity
                                                                            and $projection.FinancialTransactionDirection  = _FormulaVariable.FinancialTransactionDirection
                                                                            and $projection.FinConditionItem               = _FormulaVariable.FinConditionItem
                                                                            and $projection.ConditionItemValidityStartDate = _FormulaVariable.ConditionItemValidityStartDate
 

{
  //exposed fields
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key Condition.CompanyCode                    as CompanyCode,
  @ObjectModel.foreignKey.association: '_FinTrans'
  key Condition.FinancialTransaction           as FinancialTransaction,
  @ObjectModel.foreignKey.association: '_Activity'
  key Condition.FinancialInstrumentActivity    as FinancialInstrumentActivity,
  @ObjectModel.foreignKey.association: '_Direction'
  key Condition.FinancialTransactionDirection  as FinancialTransactionDirection,
  key Condition.FinConditionItem               as FinConditionItem,
  key Condition.ConditionItemValidityStartDate as ConditionItemValidityStartDate,
  key Condition.FinInstrConditionLogicGroup    as FinInstrConditionLogicGroup,
 
  _FinTrans.FinancialInstrProductCategory      as FinancialInstrProductCategory,
  @Semantics.amount.currencyCode: 'FinCndnLimitAmountCurrency'    
  Condition.FinCndnScaleLowerLimitAmount       as FinCndnScaleLowerLimitAmount,
  @Semantics.amount.currencyCode: 'FinCndnLimitAmountCurrency'    
  Condition.FinCndnScaleUpperLimitAmount       as FinCndnScaleUpperLimitAmount,
  @ObjectModel.foreignKey.association: '_LimitCurrency'
  @Semantics.currencyCode: true
  Condition.FinCndnLimitAmountCurrency         as FinCndnLimitAmountCurrency,
 
  @ObjectModel.foreignKey.association: '_InterestCategory'
  case 
    //fixed interest
    when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) 
     and Condition.ConditionPercentageRate is not initial
      then '02'
    //formula
    when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) 
     and Condition.FinConditionFormulaReference is not initial and Condition.FinConditionFormulaReference <> '0003'   
      then '04'
    //variable interest
    when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) 
     and Condition.InterestReference is not initial
      then '03'
  end                                          as FinConditionInterestCategory,

  case
    when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) 
     and Condition.ConditionPercentageRate is not initial
      then Condition.ConditionPercentageRate        
    end                                        as ConditionPercentageRate,
  @ObjectModel.foreignKey.association: '_ReferenceInterestRate'
  case
    when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) 
     and Condition.InterestReference is not initial
     and ( Condition.FinConditionFormulaReference is initial or Condition.FinConditionFormulaReference = '0003' )
      then Condition.InterestReference
  end                                          as InterestReference,
  case
    when ( Condition.FinConditionConditionCategory = '20' or Condition.FinConditionConditionCategory = '15' ) 
     and Condition.FinConditionFormulaReference is not initial
      then Condition.FinConditionFormulaReference
  end                                          as FinConditionFormulaReference,
  
  //exposed dimensions, containing for example text fields
  _CompanyCode,
  _FinTrans,
  _Activity,
  _Direction,
  _LimitCurrency,
  _InterestCategory,
  _ReferenceInterestRate,
  _FormulaVariable
}
where ( Condition.FinConditionInterestCategory = '06' or Condition.FinConditionInterestCategory = '07' )
  and ( Condition.FinConditionSubItem is initial or Condition.FinConditionSubItem = '00' )
```
