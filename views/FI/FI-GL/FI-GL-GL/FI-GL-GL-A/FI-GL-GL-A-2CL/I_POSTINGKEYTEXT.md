---
name: I_POSTINGKEYTEXT
description: Postingkeytext
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
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_POSTINGKEYTEXT

**Postingkeytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `PostingKey` | ✓ | |  | `cast(tbslt.bschl as fis_bschl preserving type)` |
| `PostingKeyName` |  | |  | `cast (tbslt.ltext as fis_bschl_name preserving type )` |
| `_Language` | | ✓ | | |
| `_PostingKey` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping: 
        
            [
              {
                table: 'tbslt',
                role: #MAIN,
                viewElement: ['Language', 'PostingKey'],
                tableElement: ['spras', 'bschl'],
                 filter: [ { operator: #EQ, tableElement: 'umskz', value: '' } ]
              }
            ] 
        }
    }
}
@EndUserText.label: 'Posting Key - Text'
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'PostingKey',
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }                               
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true 
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

define view entity I_PostingKeyText as select from tbslt

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association [1..1] to I_PostingKey as _PostingKey on $projection.PostingKey = _PostingKey.PostingKey

{

@Semantics.language   
key tbslt.spras as Language,
key cast(tbslt.bschl as fis_bschl preserving type) as PostingKey,
@Semantics.text
@Search.defaultSearchElement: true
@Search.fuzzinessThreshold: 0.8 
@Search.ranking: #LOW  
cast (tbslt.ltext as fis_bschl_name preserving type ) as PostingKeyName,

@ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT ]
_PostingKey,
_Language

} where umskz = '' ;
```
