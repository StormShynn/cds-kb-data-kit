---
name: I_MDSUBSTNSTSTEXT
description: "Mdsubstnststext"
app_component: CA-EPT-SUB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-EPT
  - CA-EPT-SUB
  - interface-view
  - text-view
  - text
  - component:CA-EPT-SUB-2CL
  - lob:Cross-Application Components
---
# I_MDSUBSTNSTSTEXT

**Mdsubstnststext**

| Property | Value |
|---|---|
| App Component | `CA-EPT-SUB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type )` |  |  |
| `MDSubstnStatus` | ✓ | |  | `cast ( domvalue_l as md_substn_status )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `MDSubstnStatusDescription` |  | |  | `cast( ddtext as md_substn_status_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Master Data Substitution Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'MDSubStnStatus',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SEARCHABLE_ENTITY, 
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MDSubstnStsText
  as select from dd07t
  association        to parent I_MDSubstnSts as _Status   on $projection.MDSubstnStatus = _Status.MDSubstnStatus
  association [0..1] to I_Language           as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage  as spras preserving type )              as Language,

      @ObjectModel.foreignKey.association: '_Status'
      @ObjectModel.text.element: ['MDSubstnStatusDescription']
      
  key cast ( domvalue_l as md_substn_status )                  as MDSubstnStatus,

      @Consumption.hidden: true
      domvalue_l                                               as DomainValue,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      @Semantics.text: true
      cast( ddtext as md_substn_status_text  preserving type ) as MDSubstnStatusDescription,

      /* Associations */
      _Language,
      _Status
}
where
      domname  = 'MD_SUBSTN_STATUS'
  and as4local = 'A'
  and as4vers  = '0000'
```
