---
name: I_OPTIONPUTCALLCODETEXT
description: "Optionputcallcodetext"
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_OPTIONPUTCALLCODETEXT

**Optionputcallcodetext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `OptionPutCallCode` | ✓ | |  | `cast(dd07t.domvalue_l as ti_sputcal)` |  |  |
| `OptionPutCallCodeName` |  | |  | `cast(dd07t.ddtext as ftr_gen_opt_put_call_code_name preserving type )` |  |  |
| `_OptionPutCallCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OptionPutCallCode` | `I_OptionPutCallCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true  
@AbapCatalog.preserveKey:true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'IOPTPUTCALLCDTXT' 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Option Put Call Code - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'OptionPutCallCode'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC 

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_OptionPutCallCodeText
  as select from dd07t

  association [0..1] to I_OptionPutCallCode as _OptionPutCallCode on $projection.OptionPutCallCode = _OptionPutCallCode.OptionPutCallCode
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{

      @Semantics.language: true
  key ddlanguage                                           as Language,
      @ObjectModel.text.element: 'OptionPutCallCodeName'
      @ObjectModel.foreignKey.association: '_OptionPutCallCode'
  key cast(dd07t.domvalue_l as ti_sputcal)  as OptionPutCallCode,
      @Semantics.text: true
      cast(dd07t.ddtext as ftr_gen_opt_put_call_code_name preserving type ) as OptionPutCallCodeName,
      _OptionPutCallCode,
      _Language

}
where
      dd07t.domname  = 'T_SPUTCAL'
  and dd07t.as4local = 'A'
```
