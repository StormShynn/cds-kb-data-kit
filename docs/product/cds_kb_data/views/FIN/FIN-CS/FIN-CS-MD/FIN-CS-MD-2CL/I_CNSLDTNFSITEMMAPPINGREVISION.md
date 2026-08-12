---
name: I_CNSLDTNFSITEMMAPPINGREVISION
description: "Cnsldtnfsitemmappingrevision"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMMAPPINGREVISION

**Cnsldtnfsitemmappingrevision**

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
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( _Source.ritclg as fincs_conschartofaccounts preserving type )` |  |  |
| `ChartOfAccounts` | ✓ | |  | `cast( _Source.ktopl as fincs_chartofaccounts preserving type )` |  |  |
| `CnsldtnFSItemMapping` | ✓ | |  | `cast( _Source.mapping_id as fincs_fsitemmapping preserving type )` |  |  |
| `CnsldtnFSItemMappingRevision` | ✓ | |  | `cast( _Source.revision as fincs_fsitemmappingrevision preserving type )` |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnFSItemMapping` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CnsldtnFSItemGLAccountMapping` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1..1] |
| `_CnsldtnFSItemMapping` | `I_CnsldtnFSItemMapping` | [1..1] |
| `_Text` | `I_CnsldtnFSItemMappgRevsnText` | [0..*] |
| `_CnsldtnFSItemGLAccountMapping` | `I_CnsldtnFSItemGLAccountMappg` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSFSITEMMAPPINGREVISION'
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
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnFSItemMappingRevision'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation FS Item Mapping Revision'
define view entity I_CnsldtnFSItemMappingRevision
  as select from fincs_fsimaprv as _Source

  association [1..1] to I_CnsldtnChartOfAccounts      as _CnsldtnChartOfAccounts        on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_ChartOfAccounts             as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [1..1] to I_CnsldtnFSItemMapping        as _CnsldtnFSItemMapping          on  $projection.CnsldtnFSItemMapping = _CnsldtnFSItemMapping.CnsldtnFSItemMapping

  association [0..*] to I_CnsldtnFSItemMappgRevsnText as _Text                          on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                                        and $projection.ChartOfAccounts              = _Text.ChartOfAccounts
                                                                                        and $projection.CnsldtnFSItemMapping         = _Text.CnsldtnFSItemMapping
                                                                                        and $projection.CnsldtnFSItemMappingRevision = _Text.CnsldtnFSItemMappingRevision

  association [0..*] to I_CnsldtnFSItemGLAccountMappg as _CnsldtnFSItemGLAccountMapping on  $projection.ConsolidationChartOfAccounts = _CnsldtnFSItemGLAccountMapping.ConsolidationChartOfAccounts
                                                                                        and $projection.ChartOfAccounts              = _CnsldtnFSItemGLAccountMapping.ChartOfAccounts
                                                                                        and $projection.CnsldtnFSItemMapping         = _CnsldtnFSItemGLAccountMapping.CnsldtnFSItemMapping
                                                                                        and $projection.CnsldtnFSItemMappingRevision = _CnsldtnFSItemGLAccountMapping.CnsldtnFSItemMappingRevision

{

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
  key cast( _Source.ritclg as fincs_conschartofaccounts preserving type )     as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key cast( _Source.ktopl as fincs_chartofaccounts preserving type )          as ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CnsldtnFSItemMapping'
  key cast( _Source.mapping_id as fincs_fsitemmapping preserving type )       as CnsldtnFSItemMapping,

      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key cast( _Source.revision as fincs_fsitemmappingrevision preserving type ) as CnsldtnFSItemMappingRevision,


      /* Associations */
      _CnsldtnChartOfAccounts,
      _ChartOfAccounts,
      _CnsldtnFSItemMapping,
      _Text,
      _CnsldtnFSItemGLAccountMapping

}
```
