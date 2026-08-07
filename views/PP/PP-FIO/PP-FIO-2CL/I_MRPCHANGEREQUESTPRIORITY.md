---
name: I_MRPCHANGEREQUESTPRIORITY
description: "Mrpchangerequestpriority"
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - interface-view
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# I_MRPCHANGEREQUESTPRIORITY

**Mrpchangerequestpriority**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPRequestPriority` | ✓ | |  | `prioritycode` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMRPCRPRICO'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'MRP Change Request Priority'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'MRPRequestPriority'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name:'MRPChangeRequestPriority'

define root view entity I_MRPChangeRequestPriority
  as select from mrp_cr_priority
  composition [0..*] of I_MRPChangeRequestPriorityTxt as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key prioritycode as MRPRequestPriority,
      _Text
}
```
