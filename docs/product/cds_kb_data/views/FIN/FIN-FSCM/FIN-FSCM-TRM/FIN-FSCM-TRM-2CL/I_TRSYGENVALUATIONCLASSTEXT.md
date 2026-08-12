---
name: I_TRSYGENVALUATIONCLASSTEXT
description: "Trsygenvaluationclasstext"
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
  - text-view
  - text
  - environment-health-safety
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYGENVALUATIONCLASSTEXT

**Trsygenvaluationclasstext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `TreasuryGeneralValuationClass` | ✓ | |  | `cast(com_val_class as ftr_gen_fin_instr_val_class)` |  |  |
| `TrsyGeneralValuationClassName` |  | |  | `cast(com_val_cl_name as ftr_gen_fin_instr_val_cls_name)` |  |  |
| `_GeneralValuationClass` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GeneralValuationClass` | `I_TrsyGeneralValuationClass` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TreasuryGeneralValuationClass'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'TreasuryGeneralValuationClass'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE , #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Treasury General Valuation Class - Text'
@Search.searchable: true
@Consumption.ranked: true

define view entity I_TrsyGenValuationClassText
  as select from trgc_com_valcl_t

  association [0..1] to I_TrsyGeneralValuationClass as _GeneralValuationClass on $projection.TreasuryGeneralValuationClass = _GeneralValuationClass.TreasuryGeneralValuationClass
  association [0..1] to I_Language                  as _Language              on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                   as Language,

      @ObjectModel.foreignKey.association: '_GeneralValuationClass'
  key cast(com_val_class as ftr_gen_fin_instr_val_class)      as TreasuryGeneralValuationClass,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(com_val_cl_name as ftr_gen_fin_instr_val_cls_name) as TrsyGeneralValuationClassName,
      _GeneralValuationClass,
      _Language
}
```
