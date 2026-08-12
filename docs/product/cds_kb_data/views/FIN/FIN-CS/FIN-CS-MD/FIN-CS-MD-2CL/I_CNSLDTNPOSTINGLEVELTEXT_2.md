---
name: I_CNSLDTNPOSTINGLEVELTEXT_2
description: "Cnsldtnpostingleveltext 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPOSTINGLEVELTEXT_2

**Cnsldtnpostingleveltext 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainT.Language as spras preserving type )` |  |  |
| `PostingLevel` | ✓ | |  | `cast(left(_DomainT.DomainValue, 2) as fincs_postinglevel preserving type )` |  |  |
| `PostingLevelText` |  | | `_DomainT` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_PostingLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PostingLevel` | `I_CnsldtnPostingLevel` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCPLEVLT_2',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
  dataCategory: #TEXT,
  representativeKey: 'PostingLevel',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Posting Level - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnPostingLevelText_2
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_PLEVL') as _DomainT

  association [1..1] to I_CnsldtnPostingLevel as _PostingLevel on $projection.PostingLevel = _PostingLevel.PostingLevel

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_DomainT.Language as spras preserving type )                          as Language,

      @ObjectModel.foreignKey.association: '_PostingLevel'
  key cast(left(_DomainT.DomainValue, 2) as fincs_postinglevel preserving type ) as PostingLevel,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _DomainT.DomainValueText                                                   as PostingLevelText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _DomainT._Language,
      _PostingLevel
}
where
     _DomainT.DomainValue = ''
  or _DomainT.DomainValue = '00'
  or _DomainT.DomainValue = '01'
  or _DomainT.DomainValue = '0C'
  or _DomainT.DomainValue = '10'
  or _DomainT.DomainValue = '02'
  or _DomainT.DomainValue = '12'
  or _DomainT.DomainValue = '22'
  or _DomainT.DomainValue = '20'
  or _DomainT.DomainValue = '30';
```
