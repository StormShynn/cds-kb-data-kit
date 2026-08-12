---
name: I_RETURNSMANAGEMENTPROCESSSTEP
description: "Returnsmanagementprocessstep"
app_component: LO-ARM-2CL
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
  - LO
  - LO-ARM
  - interface-view
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSMANAGEMENTPROCESSSTEP

**Returnsmanagementprocessstep**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
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
| `RetsMgmtProcessStep` | ✓ | |  | `cast( step_id as msr_step_id preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RetsMgmtProcessStepText` | [0..*] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.representativeKey:'RetsMgmtProcessStep'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@AbapCatalog.entityBuffer.definitionAllowed:true
@Analytics.technicalName: 'IRMPROCESSSTEP'
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true,
              internalName:#LOCAL }
@EndUserText.label: 'Returns Process Step'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name:'ReturnsManagementProcessStep'
define view entity I_ReturnsManagementProcessStep
  as select from msr_i_step
  association [0..*] to I_RetsMgmtProcessStepText as _Text on $projection.RetsMgmtProcessStep = _Text.RetsMgmtProcessStep
{
      //key
      @ObjectModel.text.association: '_Text'
  key cast( step_id as msr_step_id preserving type ) as RetsMgmtProcessStep,

      _Text

}
```
