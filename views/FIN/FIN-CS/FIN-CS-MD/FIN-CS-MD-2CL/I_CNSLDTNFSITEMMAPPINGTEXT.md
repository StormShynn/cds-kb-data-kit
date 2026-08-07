---
name: I_CNSLDTNFSITEMMAPPINGTEXT
description: Cnsldtnfsitemmappingtext
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMMAPPINGTEXT

**Cnsldtnfsitemmappingtext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `langu` |
| `CnsldtnFSItemMapping` | ✓ | |  | `cast ( _Source.mapping_id as fincs_fsitemmapping preserving type )` |
| `CnsldtnFSItemMappingText` |  | |  | `cast ( _Source.mapping_text as fincs_fsitemmappingtext preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnFSItemMapping',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation FS Item Mapping - Text'
define view entity I_CnsldtnFSItemMappingText
  as select from fincs_fsimapt as _Source

  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language

{

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key _Source.langu                                                            as Language,

  key cast ( _Source.mapping_id as fincs_fsitemmapping preserving type )       as CnsldtnFSItemMapping,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      cast ( _Source.mapping_text as fincs_fsitemmappingtext preserving type ) as CnsldtnFSItemMappingText,

      /* Associations */
      _Language
}
```
