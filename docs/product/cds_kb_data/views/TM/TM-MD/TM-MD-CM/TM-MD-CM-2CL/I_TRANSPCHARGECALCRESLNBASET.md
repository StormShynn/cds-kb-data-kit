---
name: I_TRANSPCHARGECALCRESLNBASET
description: "Transpchargecalcreslnbaset"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPCHARGECALCRESLNBASET

**Transpchargecalcreslnbaset**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeCalcReslnBase` | ✓ | |  | `cast(resolution_base as /scmtms/vdm_tcm_res_base preserving type)` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `TranspChargeCalcReslnBaseDesc` |  | |  | `cast(description as /scmtms/vdm_tcm_res_base_desc preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspChargeCalcReslnBase` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ICALCRESBASETEXT'
@EndUserText:   {label: 'Chrg Calculation Resolution Base - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChargeCalcReslnBase',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}

define view entity I_TranspChargeCalcReslnBaseT
  as select from /scmtms/c_resbst
  association        to parent I_TranspChargeCalcReslnBase as _TranspChargeCalcReslnBase on $projection.TranspChargeCalcReslnBase = _TranspChargeCalcReslnBase.TranspChargeCalcReslnBase
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspChargeCalcReslnBase'
  key cast(resolution_base as /scmtms/vdm_tcm_res_base preserving type)  as TranspChargeCalcReslnBase,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                                           as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(description as /scmtms/vdm_tcm_res_base_desc preserving type) as TranspChargeCalcReslnBaseDesc,

      /* Associations */
      _TranspChargeCalcReslnBase,
      _Language
}
```
