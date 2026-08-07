---
name: I_APISWITHCLOUDDEVSUCCESSOR
description: Apiswithclouddevsuccessor
app_component: BC-SRV-APS-EXT-REL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - component:BC-SRV-APS-EXT-REL
  - lob:Basis Components
---
# I_APISWITHCLOUDDEVSUCCESSOR

**Apiswithclouddevsuccessor**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-REL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PredecessorObjectType` | ✓ | |  | `sub_object_type` |
| `PredecessorObjectName` | ✓ | |  | `sub_object_name` |
| `PredecessorObjectDirectoryType` | ✓ | |  | `object_type` |
| `PredecessorObjectDirectoryName` | ✓ | |  | `object_name` |
| `SuccessorObjectType` | ✓ | |  | `successor_object_type` |
| `SuccessorObjectName` | ✓ | |  | `successor_object_key` |
| `SuccessorObjectDirectoryType` | ✓ | |  | `successor_tadir_object` |
| `SuccessorObjectDirectoryName` | ✓ | |  | `successor_tadir_obj_name` |
| `SuccessorConceptName` |  | |  | `successor_concept_name` |
| `SuccessorCategory` |  | |  | `cast('O' as ars_successor_category preserving type)` |
| `PredecessorReleaseState` |  | |  | `release_state` |
| `PredecessorReleaseStateDescr` |  | | `_text` | `description` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_text` | `v_ars_release_state` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'APIs with Cloud Development Successors'
define view entity I_APIsWithCloudDevSuccessor
  // Option 1: Predecessor has one or more successors for cloud development
  as select from ars_w_api_state               as predecessor
    inner join   ARS_API_SUCCESSORS_FOR_C1_SCP as successor           on  predecessor.object_type     = successor.tadir_object
                                                                      and predecessor.object_name     = successor.tadir_obj_name
                                                                      and predecessor.sub_object_type = successor.object_type
                                                                      and predecessor.sub_object_name = successor.object_key
    inner join   ARS_RUNTIME_API_STATE         as cloud_dev_successor on  cloud_dev_successor.object_type               = successor.successor_tadir_object
                                                                      and cloud_dev_successor.object_name               = successor.successor_tadir_obj_name
                                                                      and cloud_dev_successor.sub_object_type           = successor.successor_object_type
                                                                      and cloud_dev_successor.sub_object_name           = successor.successor_object_key
                                                                      and cloud_dev_successor.compatibility_contract    = 'C1' // System-internal use
                                                                      and cloud_dev_successor.use_in_sap_cloud_platform = 'X'  // Use in cloud development
                                                                      and cloud_dev_successor.release_state             = 'RELEASED'
  association [0..1] to v_ars_release_state as _text on _text.state = predecessor.release_state
{
  key predecessor.sub_object_type                         as PredecessorObjectType,
  key predecessor.sub_object_name                         as PredecessorObjectName,
  key predecessor.object_type                             as PredecessorObjectDirectoryType,
  key predecessor.object_name                             as PredecessorObjectDirectoryName,
  key successor.successor_object_type                     as SuccessorObjectType,
  key successor.successor_object_key                      as SuccessorObjectName,
  key successor.successor_tadir_object                    as SuccessorObjectDirectoryType,
  key successor.successor_tadir_obj_name                  as SuccessorObjectDirectoryName,
      predecessor.successor_concept_name                  as SuccessorConceptName,
      cast('O' as ars_successor_category preserving type) as SuccessorCategory, // Object
      predecessor.release_state                           as PredecessorReleaseState,
      _text.description                                   as PredecessorReleaseStateDescr
}
where
       predecessor.compatibility_contract    = 'C1' // System-internal use
  and  predecessor.use_in_sap_cloud_platform = 'X' // Use in cloud development
  and(
       predecessor.successor_classification  = '1' // One object
    or predecessor.successor_classification  = 'N' // Multiple objects
  )

// Option 2: Predecessor was replaced by a concept
union select from ars_w_api_state as predecessor
association [0..1] to v_ars_release_state as _text on _text.state = predecessor.release_state
{
  key predecessor.sub_object_type                         as PredecessorObjectType,
  key predecessor.sub_object_name                         as PredecessorObjectName,
  key predecessor.object_type                             as PredecessorObjectDirectoryType,
  key predecessor.object_name                             as PredecessorObjectDirectoryName,
  key ''                                                  as SuccessorObjectType,
  key ''                                                  as SuccessorObjectName,
  key ''                                                  as SuccessorObjectDirectoryType,
  key ''                                                  as SuccessorObjectDirectoryName,
      predecessor.successor_concept_name                  as SuccessorConceptName,
      cast('C' as ars_successor_category preserving type) as SuccessorCategory, // Concept
      predecessor.release_state                           as PredecessorReleaseState,
      _text.description                                   as PredecessorReleaseStateDescr
}
where
      predecessor.compatibility_contract    = 'C1' // System-internal use
  and predecessor.use_in_sap_cloud_platform = 'X' // Use in cloud development
  and predecessor.successor_classification  = 'X' // Concept
```
