---
name: I_CNSLDTNPOSTINGLEVELTEXT_2
description: "Cnsldtnpostingleveltext 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_CNSLDTNPOSTINGLEVELTEXT_2

**Cnsldtnpostingleveltext 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
