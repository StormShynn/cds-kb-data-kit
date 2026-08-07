---
name: I_SEMANTICTAGTEXT
description: Semantictagtext
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - text-view
  - text
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_SEMANTICTAGTEXT

**Semantictagtext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `SemanticTag` | ✓ | |  | `fins_sem_tag` |
| `SemanticTagName` |  | |  | `fins_sem_tag_name` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Semantic Tag - Text'
@AbapCatalog.sqlViewName: 'IFISEMTAGTEXT'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SemanticTag'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, 
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

define view I_SemanticTagText
  as select from finsc_sem_tag_n

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @Semantics.language
  key spras             as Language,
  key fins_sem_tag      as SemanticTag,
      @Semantics.text
      fins_sem_tag_name as SemanticTagName,
      //fins_sem_tag_longname as SemanticTagLongName,
      _Language
}
```
