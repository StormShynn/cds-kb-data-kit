---
name: I_MAINTOPERATIONSYSTCONDITION
description: Maintoperationsystcondition
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - pricing-condition
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTOPERATIONSYSTCONDITION

**Maintoperationsystcondition**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OperationSystemCondition` | ✓ | |  | `anlzu` |
| `ProdnWrkCtrIsRsrvdByPlntMaint` |  | |  | `kapao` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintOperationSystConditionT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Maintenance Operation System Condition'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION,
              technicalName: 'IMAINTOPSYSCOND',
              dataExtraction.enabled: true }
@ObjectModel: { representativeKey: 'OperationSystemCondition',
                usageType: {  dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S },
                resultSet.sizeCategory: #XS,
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                modelingPattern:  #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'MaintOperationSystemCondition'             
                }

@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true 
define view entity I_MaintOperationSystCondition
  as select from t357m
  association [0..*] to I_MaintOperationSystConditionT as _Text on _Text.OperationSystemCondition = $projection.OperationSystemCondition
{
      @ObjectModel.text.association: '_Text'
  key anlzu as OperationSystemCondition,
      kapao as ProdnWrkCtrIsRsrvdByPlntMaint,

      // Propagate association
      _Text
}
```
