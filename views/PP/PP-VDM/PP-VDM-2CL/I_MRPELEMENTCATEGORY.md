---
name: I_MRPELEMENTCATEGORY
description: Mrpelementcategory
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
# I_MRPELEMENTCATEGORY

**Mrpelementcategory**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPElementCategory` | ✓ | |  | `cast(MRPElementCategory as vdm_delkz preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION,
             internalName: #LOCAL}
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,
                                   #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER],
                representativeKey: 'MRPElementCategory',
                resultSet.sizeCategory: #XS,
                usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #MIXED}
               }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'MRP Element Category'

define root view entity I_MRPElementCategory
  as select from P_MRPElementCategory
  composition [0..*] of I_MRPElementCategoryText as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(MRPElementCategory as vdm_delkz preserving type) as MRPElementCategory,

      // Composition
      _Text
}
where 
      MRPElementCategory is not initial
  and Language = $session.system_language  //works as select distinct
```
