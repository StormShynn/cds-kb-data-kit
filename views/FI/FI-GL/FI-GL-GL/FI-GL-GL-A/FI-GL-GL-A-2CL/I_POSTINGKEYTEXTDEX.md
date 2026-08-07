---
name: I_POSTINGKEYTEXTDEX
description: Postingkeytextdex
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - data-extraction
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_POSTINGKEYTEXTDEX

**Postingkeytextdex**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `PostingKey` | ✓ | |  | `cast(tbslt.bschl as fis_bschl preserving type)` |  |  |
| `SpecialGLCode` | ✓ | |  | `cast(tbslt.umskz as fac_umskz preserving type )` |  |  |
| `PostingKeyName` |  | |  | `cast (tbslt.ltext as fis_bschl_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataExtraction.enabled: true }
@EndUserText.label: 'Posting Key With Special General Leder Code - Text'
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'SpecialGLCode',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }                               
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true 
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

define view entity I_PostingKeyTextDEX as select from tbslt

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association [1..1] to I_PostingKey as _PostingKey on $projection.PostingKey = _PostingKey.PostingKey

{

@Semantics.language   
key tbslt.spras as Language,
@ObjectModel.foreignKey.association: '_PostingKey'
key cast(tbslt.bschl as fis_bschl preserving type) as PostingKey,
key cast(tbslt.umskz as fac_umskz preserving type ) as SpecialGLCode,
@Semantics.text
@Search.defaultSearchElement: true
@Search.fuzzinessThreshold: 0.8 
cast (tbslt.ltext as fis_bschl_name preserving type ) as PostingKeyName,

@ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT ]
_PostingKey,
_Language

}
```
