---
name: I_TRSYCSHFLOWDEBTINVMTCODET
description: Trsycshflowdebtinvmtcodet
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYCSHFLOWDEBTINVMTCODET

**Trsycshflowdebtinvmtcodet**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TrsyCshFlowDebtInvmtCode` | `cast(left(domvalue_l, 1) as ftr_debt_invest_indicator preserving type)` |
| key `Language` | `DomainText.ddlanguage` |
| `TrsyCshFlowDebtInvmtCodeName` | `DomainText.ddtext` |
| `_TrsyCshFlowDebtInvmtCode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrsyCshFlowDebtInvmtCode` | `I_TrsyCshFlowDebtInvmtCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDIINDCT'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TrsyCshFlowDebtInvmtCode'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory:  #S
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE,  #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern : [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Debt Investment Indicator - Text'
define view I_TrsyCshFlowDebtInvmtCodeT
  as select from dd07t as DomainText
  association [0..1] to I_TrsyCshFlowDebtInvmtCode as _TrsyCshFlowDebtInvmtCode on $projection.TrsyCshFlowDebtInvmtCode = _TrsyCshFlowDebtInvmtCode.TrsyCshFlowDebtInvmtCode
  association [0..1] to I_Language                 as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TrsyCshFlowDebtInvmtCode'
      @ObjectModel.text.element: 'TrsyCshFlowDebtInvmtCodeName'
  key cast(left(domvalue_l, 1) as ftr_debt_invest_indicator preserving type)              as TrsyCshFlowDebtInvmtCode,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key DomainText.ddlanguage                                         as Language,

      @Semantics.text: true
      DomainText.ddtext                                             as TrsyCshFlowDebtInvmtCodeName,

      _Language,
      _TrsyCshFlowDebtInvmtCode
}
where
      DomainText.domname  = 'FTR_DEBT_INVEST_INDICATOR'
  and DomainText.as4local = 'A'
```
