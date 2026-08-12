---
name: I_MAINTOPERATIONSYSTCONDITION
description: "Maintoperationsystcondition"
app_component: PM-WOC-MN-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationSystemCondition` | ✓ | |  | `anlzu` |  |  |
| `ProdnWrkCtrIsRsrvdByPlntMaint` |  | |  | `kapao` |  |  |
| `_Text` | | ✓ | | | | |

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
