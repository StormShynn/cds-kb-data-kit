---
name: I_CNSLDTNDOCUMENTTYPE_2
description: Cnsldtndocumenttype 2
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDOCUMENTTYPE_2

**Cnsldtndocumenttype 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDocumentType` | ✓ | |  | `cast(docty as fincs_documenttype preserving type )` |  |  |
| `PostingLevel` |  | |  | `cast(rlevl as fincs_postinglevel preserving type )` |  |  |
| `ConsolidationBalanceCheck` |  | |  | `cast(blchk as fincs_balancecheck preserving type )` |  |  |
| `CnsldtnOnlyManualPostgIsAllwd` |  | |  | `cast(mnpos as fincs_onlymanualpostgisallwd preserving type )` |  |  |
| `CnsldtnDocTypeBusinessAppl` |  | |  | `cast(cacta as fincs_doctypebusinessappl preserving type )` |  |  |
| `CnsldtnPostingIsInTransCrcy` |  | |  | `cast(tcind as fincs_postingisintranscrcy preserving type )` |  |  |
| `CnsldtnPostingIsInLocalCrcy` |  | |  | `cast(lcind as fincs_postingisinlocalcrcy preserving type )` |  |  |
| `CnsldtnPostingIsInGroupCrcy` |  | |  | `cast(gcind as fincs_postingisingroupcrcy preserving type )` |  |  |
| `CnsldtnPostingIsWithQuantities` |  | |  | `cast(qntin as fincs_postingiswithquantities preserving type )` |  |  |
| `ConsolidationPostingLevel` |  | |  | `cast(rlevl as fincs_postinglevel preserving type )` |  |  |
| `_PostingLevel` | | ✓ | | | | |
| `_PostingLevel_2` | | ✓ | | | | |
| `_DocTypeBusinessAppl` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_DocTypeHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PostingLevel` | `I_CnsldtnPostingLevel` | [0..1] |
| `_PostingLevel_2` | `I_CnsldtnPostingLevel_2` | [0..1] |
| `_DocTypeBusinessAppl` | `I_CnsldtnDocTypeBusinessAppl` | [0..1] |
| `_Text` | `I_CnsldtnDocumentTypeText_2` | [0..*] |
| `_DocTypeHierNode` | `I_CnsldtnDocTypeHierNode_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCDOCTYPE2',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationDocumentType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationDocumentType'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Document Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnDocumentType_2
  as select from tf500

  association [0..1] to I_CnsldtnPostingLevel        as _PostingLevel        on $projection.PostingLevel = _PostingLevel.PostingLevel

  association [0..1] to I_CnsldtnPostingLevel_2      as _PostingLevel_2      on $projection.ConsolidationPostingLevel = _PostingLevel_2.ConsolidationPostingLevel

  association [0..1] to I_CnsldtnDocTypeBusinessAppl as _DocTypeBusinessAppl on $projection.CnsldtnDocTypeBusinessAppl = _DocTypeBusinessAppl.CnsldtnDocTypeBusinessAppl

  association [0..*] to I_CnsldtnDocumentTypeText_2  as _Text                on $projection.ConsolidationDocumentType = _Text.ConsolidationDocumentType

  association [0..*] to I_CnsldtnDocTypeHierNode_2   as _DocTypeHierNode     on $projection.ConsolidationDocumentType = _DocTypeHierNode.ConsolidationDocumentType

{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_DocTypeHierNode'
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key cast(docty as fincs_documenttype preserving type )            as ConsolidationDocumentType,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ConsolidationPostingLevel'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ConsolidationPostingLevel'
      @ObjectModel.foreignKey.association: '_PostingLevel'
      cast(rlevl as fincs_postinglevel preserving type )            as PostingLevel,

      cast(blchk as fincs_balancecheck preserving type )            as ConsolidationBalanceCheck,

      cast(mnpos as fincs_onlymanualpostgisallwd preserving type )  as CnsldtnOnlyManualPostgIsAllwd,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnDocTypeBusinessAppl',
        foreignKey.association: '_DocTypeBusinessAppl' }
      cast(cacta as fincs_doctypebusinessappl preserving type )     as CnsldtnDocTypeBusinessAppl,

      cast(tcind as fincs_postingisintranscrcy preserving type )    as CnsldtnPostingIsInTransCrcy,

      cast(lcind as fincs_postingisinlocalcrcy preserving type )    as CnsldtnPostingIsInLocalCrcy,

      cast(gcind as fincs_postingisingroupcrcy preserving type )    as CnsldtnPostingIsInGroupCrcy,

      cast(qntin as fincs_postingiswithquantities preserving type ) as CnsldtnPostingIsWithQuantities,

      @ObjectModel.foreignKey.association: '_PostingLevel_2'
      cast(rlevl as fincs_postinglevel preserving type )            as ConsolidationPostingLevel,
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PostingLevel_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PostingLevel_2'
      _PostingLevel,
      _DocTypeBusinessAppl,
      _Text,
      _DocTypeHierNode,
      _PostingLevel_2
}
where
  dimen = 'Y1'
```
