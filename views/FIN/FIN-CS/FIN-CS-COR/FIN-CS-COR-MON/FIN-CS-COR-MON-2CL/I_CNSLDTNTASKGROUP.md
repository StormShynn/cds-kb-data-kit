---
name: I_CNSLDTNTASKGROUP
description: Cnsldtntaskgroup
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTASKGROUP

**Cnsldtntaskgroup**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationTaskGroup` | ✓ | |  | `cast( acgr as fincs_taskgroup preserving type )` |
| `_Text` | | ✓ | | |
| `_CnsldtnTaskAssignment` | | ✓ | | |
| `_CnsldtnTaskPreceding` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnTaskGroupText` | [0..*] |
| `_CnsldtnTaskAssignment` | `I_CnsldtnTskGrpTskAssignment` | [0..*] |
| `_CnsldtnTaskPreceding` | `I_CnsldtnTskGrpTaskPreceding` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSTSKGRP',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata: { 
    ignorePropagatedAnnotations:true,
    allowExtensions:true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  representativeKey: 'ConsolidationTaskGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE
                          ],
  sapObjectNodeType.name: 'ConsolidationTaskGroup'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Task Group'
define view I_CnsldtnTaskGroup as 
  select from tf530
  
    association [0..*] to I_CnsldtnTaskGroupText        as _Text                   on $projection.ConsolidationTaskGroup = _Text.ConsolidationTaskGroup
    association [0..*] to I_CnsldtnTskGrpTskAssignment  as _CnsldtnTaskAssignment  on $projection.ConsolidationTaskGroup = _CnsldtnTaskAssignment.ConsolidationTaskGroup
    association [0..*] to I_CnsldtnTskGrpTaskPreceding  as _CnsldtnTaskPreceding   on $projection.ConsolidationTaskGroup = _CnsldtnTaskPreceding.ConsolidationTaskGroup
{
      @ObjectModel.text.association: '_Text'
      @Search:{
             defaultSearchElement: true,
             ranking: #HIGH,
             fuzzinessThreshold: 0.8
             }
  key cast( acgr as fincs_taskgroup preserving type ) as ConsolidationTaskGroup,
  
      _Text,
      _CnsldtnTaskAssignment,
      _CnsldtnTaskPreceding
} 
  where dimen = 'Y1'
```
