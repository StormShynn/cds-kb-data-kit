---
name: I_OPERATIONEXTERNALPROCTEXT
description: "Operationexternalproctext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_OPERATIONEXTERNALPROCTEXT

**Operationexternalproctext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationExternalProcessing` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as lief preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `OperationExternalProcName` |  | |  | `ddtext` |  |  |
| `_ExternalProcessing` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExternalProcessing` | `I_OperationExternalProcessing` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPPOPEXTPROCTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'OperationExternalProcessing'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation External Processing - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_OperationExternalProcText
  as select from dd07t as t
  association [1..1] to I_OperationExternalProcessing as _ExternalProcessing on $projection.OperationExternalProcessing = _ExternalProcessing.OperationExternalProcessing 
  association [0..1] to I_Language                    as _Language           on $projection.Language = _Language.Language
  {
      @ObjectModel.foreignKey.association: '_ExternalProcessing'
      @ObjectModel.text.element: ['OperationExternalProcName']
  key cast(substring(t.domvalue_l, 1, 1) as lief preserving type) as OperationExternalProcessing,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                 as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t.ddtext                                                    as OperationExternalProcName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _ExternalProcessing,
      _Language
  }
  where t.domname = 'PPH_LIEF'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
