---
name: I_OPTIONPUTCALLCODETEXT
description: "Optionputcallcodetext"
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
