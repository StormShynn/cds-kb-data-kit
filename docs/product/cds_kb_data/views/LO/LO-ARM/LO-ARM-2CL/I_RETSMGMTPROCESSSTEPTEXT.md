---
name: I_RETSMGMTPROCESSSTEPTEXT
description: "Retsmgmtprocesssteptext"
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - text-view
  - text
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETSMGMTPROCESSSTEPTEXT

**Retsmgmtprocesssteptext**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RetsMgmtProcessStep` | ✓ | |  | `cast( step_id as msr_step_id preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `RetsMgmtProcessStepDescription` |  | |  | `step_text` |  |  |
| `_ReturnsProcessStep` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnsProcessStep` | `I_ReturnsManagementProcessStep` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Returns Process Step - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true 
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT ]
//@AbapCatalog.entityBuffer.definitionAllowed:true
define view entity I_RetsMgmtProcessStepText
  as select from msr_i_step_t
  association [0..1] to I_ReturnsManagementProcessStep as _ReturnsProcessStep on $projection.RetsMgmtProcessStep = _ReturnsProcessStep.RetsMgmtProcessStep
  association [0..1] to I_Language                     as _Language           on $projection.Language = _Language.Language
{
      //Key
      @ObjectModel.foreignKey.association: '_ReturnsProcessStep'
      @ObjectModel.text.element: ['RetsMgmtProcessStepDescription']
  key cast( step_id as msr_step_id preserving type ) as RetsMgmtProcessStep,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras     as Language,

      //Name
      @Semantics.text: true
      step_text as RetsMgmtProcessStepDescription,
      //Associations
      _ReturnsProcessStep,
      _Language
}
```
