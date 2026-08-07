---
name: I_STANDARDWORKFORMULAPARAMTEXT
description: Standardworkformulaparamtext
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_STANDARDWORKFORMULAPARAMTEXT

**Standardworkformulaparamtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `StandardWorkFormulaParameter` | ✓ | |  | `cast(parid as pph_parid preserving type)` |
| `Language` | ✓ | |  | `spras` |
| `StandardWorkFormulaParamName` |  | |  | `cast(txtlg as pph_partxt preserving type)` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSTDWFMPARAMT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'StandardWorkFormulaParameter'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Standard Work Formula Parameter - Text'
@ObjectModel.sapObjectNodeType.name: 'StandardWorkFormulaParamText'
@Analytics.dataExtraction.enabled: true

define view I_StandardWorkFormulaParamText
  as select from tc20t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'StandardWorkFormulaParamName'
  key cast(parid as pph_parid preserving type)  as StandardWorkFormulaParameter,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                     as Language,
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}  
      @Semantics.text: true
      cast(txtlg as pph_partxt preserving type) as  StandardWorkFormulaParamName,

      -- Associations
      _Language
};
```
