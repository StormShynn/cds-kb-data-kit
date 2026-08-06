---
name: I_SCHEDULINGREDUCTIONLEVEL
description: Schedulingreductionlevel
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_SCHEDULINGREDUCTIONLEVEL

**Schedulingreductionlevel**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SchedulingReductionLevel` | `cast(substring(l.domvalue_l, 1, 1) as redkz preserving type)` |
| `DomainValue` | `l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ISCHEDLGSREDNLVL'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'SchedulingReductionLevel'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'SchedulingReductionLevel'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Scheduling Reduction Level'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SchedulingReductionLevel
  as select from dd07l as l
  composition [0..*] of I_SchedulingReductionLevelText as _Text
{ 
    @ObjectModel.text.association: '_Text'
    // cast to data element  
    key cast(substring(l.domvalue_l, 1, 1) as redkz preserving type) as SchedulingReductionLevel,
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    l.domvalue_l                                                     as DomainValue,
  
    // Composition
    _Text
  }
  where l.domname = 'REDKZ'
    and l.as4local = 'A'
    and l.as4vers  = '0000';
```
