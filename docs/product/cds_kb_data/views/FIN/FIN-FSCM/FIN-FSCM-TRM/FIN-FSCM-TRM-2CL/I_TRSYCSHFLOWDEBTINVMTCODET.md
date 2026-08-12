---
name: I_TRSYCSHFLOWDEBTINVMTCODET
description: "Trsycshflowdebtinvmtcodet"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrsyCshFlowDebtInvmtCode` | ✓ | |  | `cast(left(domvalue_l, 1) as ftr_debt_invest_indicator preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TrsyCshFlowDebtInvmtCodeName` |  | |  | `ddtext` |  |  |
| `_TrsyCshFlowDebtInvmtCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
