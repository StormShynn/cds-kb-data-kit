---
name: I_RETURNSFOLLOWUPACTIVITY
description: "Returnsfollowupactivity"
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
# I_RETURNSFOLLOWUPACTIVITY

**Returnsfollowupactivity**

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
