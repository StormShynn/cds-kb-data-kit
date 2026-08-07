---
name: I_SUPLREVALOUTPUTSCORETYPETEXT
description: Suplrevaloutputscoretypetext
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - text-view
  - text
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALOUTPUTSCORETYPETEXT

**Suplrevaloutputscoretypetext**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |
| `SuplrEvalScoreOutputActionType` | ✓ | |  | `cast( domvalue_l as mmpur_ana_de_output_act_typ)` |
| `SuplrEvalScoreOutpActnTypeText` |  | |  | `cast(ddtext as mmpur_ana_de_output_act_typ_t)` |
| `_Language` | | ✓ | | |
| `_OutputScoreType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SuplrEvalScoreOutputActionType'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@AbapCatalog.sqlViewName: 'IMMSESOTPTTYPT'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Evaluation Output Score Type - Text' 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ] 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_SuplrEvalOutputScoreTypeText
  as select from dd07t

  association        to parent I_SuplrEvalOutputScoreType as _OutputScoreType on $projection.SuplrEvalScoreOutputActionType = _OutputScoreType.SuplrEvalScoreOutputActionType

  association [0..1] to I_Language                        as _Language        on $projection.Language = _Language.Language
{ 

       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  cast( ddlanguage as spras preserving type )        as Language,

       @ObjectModel.text.element: ['SuplrEvalScoreOutpActnTypeText']
  key  cast( domvalue_l   as mmpur_ana_de_output_act_typ) as SuplrEvalScoreOutputActionType,

       @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
       @Semantics.text: true
       cast(ddtext    as mmpur_ana_de_output_act_typ_t)   as SuplrEvalScoreOutpActnTypeText,
       _OutputScoreType,
       _Language
}
where
      domname    = 'MMPUR_ANA_DM_OUTPUT_ACT_TYP'
  and as4local   = 'A'
  and as4vers    = '0000'
```
