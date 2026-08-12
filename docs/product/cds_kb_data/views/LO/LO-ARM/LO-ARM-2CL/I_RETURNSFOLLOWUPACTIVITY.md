---
name: I_RETURNSFOLLOWUPACTIVITY
description: "Returnsfollowupactivity"
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_RETURNSFOLLOWUPACTIVITY

**Returnsfollowupactivity**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReturnsFollowUpActivity` | ✓ | |  | `fu_code` |  |  |
| `_Text` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ReturnsFollowUpActivityText` | [0..1] |
| `_Text_2` | `I_ReturnsFollowUpActivityText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory  : [ #NONE]
@AccessControl.authorizationCheck     : #NOT_REQUIRED
@EndUserText.label                    : 'Logistical Follow-Up Activities for Customer Returns'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.usageType                : {
  serviceQuality : #A,
  sizeCategory   : #S,
  dataClass      : #CUSTOMIZING
}
@ObjectModel.representativeKey        : 'ReturnsFollowUpActivity'
@ObjectModel.modelingPattern          : #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities    : [
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #ANALYTICAL_DIMENSION,
  #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name   : 'ReturnsFollowUpActivity'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType                         : #BASIC
@VDM.lifecycle.contract.type          : #PUBLIC_LOCAL_API

define view entity I_ReturnsFollowUpActivity 
  as select from msr_i_code              as  FollowUpDefault
  inner join     msr_c_code              as  FollowUpCustomerSpecific     on FollowUpDefault.fu_code = FollowUpCustomerSpecific.fu_code

  association[0..1] to I_ReturnsFollowUpActivityText as _Text   on $projection.ReturnsFollowUpActivity = _Text.ReturnsFollowUpActivity and _Text.Language = $session.system_language 
  association[0..*] to I_ReturnsFollowUpActivityText as _Text_2 on $projection.ReturnsFollowUpActivity = _Text_2.ReturnsFollowUpActivity 
{

    @ObjectModel.text.association : '_Text_2'
    key FollowUpDefault.fu_code as ReturnsFollowUpActivity, 
    @API.element.releaseState: #DEPRECATED
    @API.element.successor: '_Text_2'
    _Text,
    _Text_2
}
where FollowUpCustomerSpecific.fu_code_active = 'X'
```
