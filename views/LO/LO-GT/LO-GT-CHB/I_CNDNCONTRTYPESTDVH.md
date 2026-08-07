---
name: I_CNDNCONTRTYPESTDVH
description: "Cndncontrtypestdvh"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRTYPESTDVH

**Cndncontrtypestdvh**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_Text' ],
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  dataCategory:          #VALUE_HELP,
  representativeKey:     'CndnContrType',
  modelingPattern:       #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #S
  }
} 
@Analytics.technicalName: 'IWCBCCTYPE_SVH'
@Search.searchable: true
@Consumption.ranked: true
@Analytics: {
  internalName: #LOCAL
}
@EndUserText.label: 'Condition Contract Type'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CndnContrTypeStdVH
  as select from I_CndnContrType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
      @UI.textArrangement: #TEXT_FIRST
  key CndnContrType,

      /* Associations */
      _Text
}
```
