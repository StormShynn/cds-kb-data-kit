---
name: I_MRPCHANGEREQUESTPRIORITYTXT
description: Mrpchangerequestprioritytxt
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
# I_MRPCHANGEREQUESTPRIORITYTXT

**Mrpchangerequestprioritytxt**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `MRPRequestPriority` | ✓ | |  | `prioritycode` |  |  |
| `MRPRequestPriorityName` |  | |  | `prioritytext` |  |  |
| `_Language` | | ✓ | | | | |
| `_MRPRequestPriority` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'MRP Change Request Priority - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMRPCRPRICOT'
@ObjectModel.representativeKey: 'MRPRequestPriority'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                      
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_MRPChangeRequestPriorityTxt
  as select from mrp_cr_prio_t
  association        to parent I_MRPChangeRequestPriority as _MRPRequestPriority on $projection.MRPRequestPriority = _MRPRequestPriority.MRPRequestPriority
  association [0..1] to I_Language                       as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras         as Language,
      @ObjectModel.foreignKey.association: '_MRPRequestPriority'
      @ObjectModel.text.element: ['MRPRequestPriorityName']
  key prioritycode as MRPRequestPriority,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      prioritytext  as MRPRequestPriorityName,
      _MRPRequestPriority,
      _Language
}
```
