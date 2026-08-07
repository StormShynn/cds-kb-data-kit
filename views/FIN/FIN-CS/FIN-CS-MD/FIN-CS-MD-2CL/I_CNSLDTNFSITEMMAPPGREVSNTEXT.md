---
name: I_CNSLDTNFSITEMMAPPGREVSNTEXT
description: "Cnsldtnfsitemmappgrevsntext"
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
# I_CNSLDTNFSITEMMAPPGREVSNTEXT

**Cnsldtnfsitemmappgrevsntext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `langu` |  |  |
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( _Source.ritclg as fincs_conschartofaccounts preserving type )` |  |  |
| `ChartOfAccounts` | ✓ | |  | `cast( _Source.ktopl as fincs_chartofaccounts preserving type )` |  |  |
| `CnsldtnFSItemMapping` | ✓ | |  | `cast( _Source.mapping_id as fincs_fsitemmapping preserving type )` |  |  |
| `CnsldtnFSItemMappingRevision` | ✓ | |  | `cast( _Source.revision as fincs_fsitemmappingrevision preserving type )` |  |  |
| `CnsldtnFSItemMappgRevisionText` |  | |  | `cast ( _Source.revision_text as fincs_fsitemmappgrevisiontext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnFSItemMapping` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1..1] |
| `_CnsldtnFSItemMapping` | `I_CnsldtnFSItemMapping` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSFSITEMMAPPGREVSNTEXT'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnFSItemMappingRevision',
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
@EndUserText.label: 'Cnsldtn FS Item Mapping Revision - Text'
define view entity I_CnsldtnFSItemMappgRevsnText
  as select from fincs_fsimaprvt as _Source

  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts on $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_ChartOfAccounts        as _ChartOfAccounts        on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [1..1] to I_CnsldtnFSItemMapping   as _CnsldtnFSItemMapping   on $projection.CnsldtnFSItemMapping = _CnsldtnFSItemMapping.CnsldtnFSItemMapping

{

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key _Source.langu                                                                   as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
  key cast( _Source.ritclg as fincs_conschartofaccounts preserving type )             as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key cast( _Source.ktopl as fincs_chartofaccounts preserving type )                  as ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CnsldtnFSItemMapping'
  key cast( _Source.mapping_id as fincs_fsitemmapping preserving type )               as CnsldtnFSItemMapping,

  key cast( _Source.revision as fincs_fsitemmappingrevision preserving type )         as CnsldtnFSItemMappingRevision,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      cast ( _Source.revision_text as fincs_fsitemmappgrevisiontext preserving type ) as CnsldtnFSItemMappgRevisionText,


      /* Associations */
      _Language,
      _CnsldtnChartOfAccounts,
      _ChartOfAccounts,
      _CnsldtnFSItemMapping
}
```
