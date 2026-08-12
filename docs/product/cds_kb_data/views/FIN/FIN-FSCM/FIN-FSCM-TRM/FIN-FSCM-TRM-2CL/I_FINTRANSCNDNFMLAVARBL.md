---
name: I_FINTRANSCNDNFMLAVARBL
description: "This CDS view provides detailed information for formula-based conditions (the Interest Category field is filled with the value 04 (Formula)). This CDS view provides the prerequisites for answering the following business questions: What are the variables of the formula reference? What is the percentage rate of the condition item?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNFMLAVARBL')/$value
semantic_en: "This CDS view provides detailed information for formula-based conditions (the Interest Category field is filled with the value 04 (Formula)). This CDS view provides the prerequisites for answering the following business questions: What are the variables of the formula reference? What is the percentage rate of the condition item?"
semantic_vi: "Fin Trans Condition Formula Variable — CDS view giao diện dựa trên R_FinTransCashFlowActivity."
keywords:
  - "fin"
  - "trans"
  - "condition"
  - "formula"
  - "variable"
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
---
# I_FINTRANSCNDNFMLAVARBL

**This CDS view provides detailed information for formula-based conditions (the Interest Category field is filled with the value 04 (Formula)). This CDS view provides the prerequisites for answering the following business questions: What are the variables of the formula reference? What is the percentage rate of the condition item?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNFMLAVARBL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | ✓ | |  |  | `NUMC(5)` | Transaction Activity |
| `FinancialTransactionDirection` | ✓ | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinConditionItem` | ✓ | |  |  | `NUMC(4)` | Condition |
| `ConditionItemValidityStartDate` | ✓ | |  |  | `DATS(8)` | Condition Item Effective From |
| `FinConditionFormulaReference` | ✓ | |  |  | `CHAR(4)` | Formula Reference |
| `FinCndnFormulaVariable` | ✓ | |  |  | `CHAR(4)` | Variable Name |
| `FinancialInstrProductCategory` |  | | `_FinTrans` | `FinancialInstrProductCategory` | `NUMC(3)` | Financial Instrument Product Category |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `InterestReference` |  | |  |  | `CHAR(10)` | Reference Interest Rate |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_Activity` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |
| `_ReferenceInterestRate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_Activity` | `I_FinTransActivity` | [0..1] |
| `_Direction` | `I_FinTransactionDirection` | [0..1] |
| `_ReferenceInterestRate` | `I_ReferenceInterestRate` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNFMLAVARBL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNFMLAVARBL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSCNDNVAR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Condition Formula Variable'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FinTransCndnFmlaVarbl 
  //all activities containing conditions
  as select from R_FinTransCashFlowActivity as Activity
  //all conditions of these activities (within where-condition they can be restricted)
  inner join R_FinTransCndnFmlaVarbl as FormulaVariable on Activity.CompanyCode                 = FormulaVariable.CompanyCode
                                                       and Activity.FinancialTransaction        = FormulaVariable.FinancialTransaction
                                                       and Activity.FinancialInstrumentActivity = FormulaVariable.FinancialInstrumentActivity
// dimensions, containing for example text fields
  association [0..1] to I_CompanyCode              as _CompanyCode           on  $projection.CompanyCode                   = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction     as _FinTrans              on  $projection.CompanyCode                   = _FinTrans.CompanyCode
                                                                             and $projection.FinancialTransaction          = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransActivity         as _Activity              on  $projection.CompanyCode                   = _Activity.CompanyCode
                                                                             and $projection.FinancialTransaction          = _Activity.FinancialTransaction
                                                                             and $projection.FinancialInstrumentActivity   = _Activity.FinancialInstrumentActivity
  association [0..1] to I_FinTransactionDirection  as _Direction             on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
  association [0..1] to I_ReferenceInterestRate    as _ReferenceInterestRate on  $projection.InterestReference             = _ReferenceInterestRate.ReferenceInterestRate

{
  //exposed fields
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key FormulaVariable.CompanyCode                    as CompanyCode,
  @ObjectModel.foreignKey.association: '_FinTrans'
  key FormulaVariable.FinancialTransaction           as FinancialTransaction,
  @ObjectModel.foreignKey.association: '_Activity'
  key FormulaVariable.FinancialInstrumentActivity    as FinancialInstrumentActivity,
  @ObjectModel.foreignKey.association: '_Direction'
  key FormulaVariable.FinancialTransactionDirection  as FinancialTransactionDirection,
  key FormulaVariable.FinConditionItem               as FinConditionItem,
  key FormulaVariable.ConditionItemValidityStartDate as ConditionItemValidityStartDate,
  key FormulaVariable.FinConditionFormulaReference   as FinConditionFormulaReference,
  key FormulaVariable.FinCndnFormulaVariable         as FinCndnFormulaVariable,
  _FinTrans.FinancialInstrProductCategory            as FinancialInstrProductCategory,
  FormulaVariable.ConditionPercentageRate            as ConditionPercentageRate,
  @ObjectModel.foreignKey.association: '_ReferenceInterestRate'
  FormulaVariable.InterestReference                  as InterestReference,
  
  //exposed dimensions, containing for example text fields
  _CompanyCode,
  _FinTrans,
  _Activity,
  _Direction,
  _ReferenceInterestRate
}
```
