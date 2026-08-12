---
name: I_CNSLDTNPOSTINGLEVELTEXT_3
description: "Cnsldtnpostingleveltext 3"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNPOSTINGLEVELTEXT_3

**Cnsldtnpostingleveltext 3**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_Source.Language as spras preserving type )` |  |  |
| `ConsolidationPostingLevel` | ✓ | |  | `cast(left(_Source.DomainValue, 2) as fincs_postinglevel preserving type )` |  |  |
| `ConsolidationPostingLevelText` |  | | `_Source` | `DomainValueText` |  |  |
| `DomainValue` |  | | `_Source` | `DomainValue` |  |  |
| `_PostingLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PostingLevel` | `I_CnsldtnPostingLevel_2` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'ConsolidationPostingLevel',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
   sapObjectNodeType.name: 'ConsolidationPostingLevelText'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Posting Level - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnPostingLevelText_3
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_PLEVL') as _Source

  association [1..1] to I_CnsldtnPostingLevel_2 as _PostingLevel on $projection.ConsolidationPostingLevel = _PostingLevel.ConsolidationPostingLevel

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_Source.Language as spras preserving type )                          as Language,

  key cast(left(_Source.DomainValue, 2) as fincs_postinglevel preserving type ) as ConsolidationPostingLevel,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _Source.DomainValueText                                                   as ConsolidationPostingLevelText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _Source.DomainValue,


      _Source._Language,
      _PostingLevel
}
where
     _Source.DomainValue = ''
  or _Source.DomainValue = '00'
  or _Source.DomainValue = '01'
  or _Source.DomainValue = '0C'
  or _Source.DomainValue = '10'
  or _Source.DomainValue = '02'
  or _Source.DomainValue = '12'
  or _Source.DomainValue = '22'
  or _Source.DomainValue = '20'
  or _Source.DomainValue = '30';
```
