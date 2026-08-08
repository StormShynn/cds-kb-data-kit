---
name: I_CNSLDTNDOCUMENTTYPETEXT_2
description: "Cnsldtndocumenttypetext 2"
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
  - document
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDOCUMENTTYPETEXT_2

**Cnsldtndocumenttypetext 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(langu as spras preserving type )` |  |  |
| `ConsolidationDocumentType` | ✓ | |  | `cast(docty as fincs_documenttype preserving type )` |  |  |
| `ConsolidationDocumentTypeText` |  | |  | `cast(txt as fincs_description_text_30 preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_DocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_DocumentType` | `I_CnsldtnDocumentType_2` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCDOCTYPET2',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S },
  representativeKey: 'ConsolidationDocumentType',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,                          
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'ConsolidationDocumentTypeText'                        
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Document Type - Text'

define view I_CnsldtnDocumentTypeText_2
  as select from tf501

  association [1..1] to I_Language              as _Language     on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnDocumentType_2 as _DocumentType on $projection.ConsolidationDocumentType = _DocumentType.ConsolidationDocumentType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(langu as spras preserving type )                   as Language,

      @ObjectModel.foreignKey.association: '_DocumentType'
  key cast(docty as fincs_documenttype preserving type )      as ConsolidationDocumentType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(txt as fincs_description_text_30 preserving type ) as ConsolidationDocumentTypeText,

      _Language,
      _DocumentType
}
where
  dimen = 'Y1';
```
