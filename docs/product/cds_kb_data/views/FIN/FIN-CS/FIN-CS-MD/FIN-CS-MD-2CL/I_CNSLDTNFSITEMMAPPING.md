---
name: I_CNSLDTNFSITEMMAPPING
description: "Cnsldtnfsitemmapping"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMMAPPING

**Cnsldtnfsitemmapping**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnFSItemMapping` | ✓ | |  | `cast ( _Source.mapping_id as fincs_fsitemmapping preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFSItemMappingText` | [0..*] |

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
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnFSItemMapping'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation FS Item Mapping'
define view entity I_CnsldtnFSItemMapping
  as select from fincs_fsimap as _Source

  association [0..*] to I_CnsldtnFSItemMappingText as _Text on $projection.CnsldtnFSItemMapping = _Text.CnsldtnFSItemMapping

{

      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key cast ( _Source.mapping_id as fincs_fsitemmapping preserving type ) as CnsldtnFSItemMapping,

      _Text

}
```
