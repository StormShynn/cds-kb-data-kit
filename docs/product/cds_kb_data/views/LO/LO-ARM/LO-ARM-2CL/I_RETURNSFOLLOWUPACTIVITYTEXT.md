---
name: I_RETURNSFOLLOWUPACTIVITYTEXT
description: "Returnsfollowupactivitytext"
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
  - text-view
  - text
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSFOLLOWUPACTIVITYTEXT

**Returnsfollowupactivitytext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `ReturnsFollowUpActivityDesc` |  | |  | `case when FollowUpCustomerSpecific.fu_code_text is null or FollowUpCustomerSpecific.fu_code_text = '' then FollowUpDefault.fu_code_text else FollowUpCustomerSpecific.fu_code_text end` |  |  |
| `_FollowUpActivity` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FollowUpActivity` | `I_ReturnsFollowUpActivity` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory  : [ #NONE]
@Analytics.technicalName              : 'IRETFUCODETXT'
@AccessControl.authorizationCheck     : #NOT_REQUIRED
@EndUserText.label                    : 'Logistical Follow-Up Activities for Customer Returns - Text'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.usageType                : {
  serviceQuality : #A,
  sizeCategory   : #S,
  dataClass      : #CUSTOMIZING
}
@ObjectModel.representativeKey        : 'ReturnsFollowUpActivity'
@ObjectModel.dataCategory             : #TEXT
@ObjectModel.modelingPattern          : #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities    : [
  #LANGUAGE_DEPENDENT_TEXT,
  #SQL_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #CDS_MODELING_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE
]
@Analytics.dataExtraction.enabled: true
@VDM.viewType                         : #BASIC
@VDM.lifecycle.contract.type          : #PUBLIC_LOCAL_API

define view entity I_ReturnsFollowUpActivityText 
  as select from  msr_i_code_t                   as  FollowUpDefault 
  left outer to one join      msr_c_code_t                   as  FollowUpCustomerSpecific on FollowUpDefault.fu_code  = FollowUpCustomerSpecific.fu_code
                                                                                          and FollowUpDefault.spras   = FollowUpCustomerSpecific.spras

  association[0..1] to I_ReturnsFollowUpActivity as _FollowUpActivity         on $projection.ReturnsFollowUpActivity = _FollowUpActivity.ReturnsFollowUpActivity 
  association[0..1] to I_Language                as _Language                 on $projection.Language = _Language.Language 
{

  @ObjectModel.foreignKey.association : '_FollowUpActivity'
  key FollowUpDefault.fu_code as ReturnsFollowUpActivity,
  
  @ObjectModel.foreignKey.association : '_Language'
  @Semantics.language                 : true
  key FollowUpDefault.spras as Language,
  
  @Semantics.text                     : true
  case when FollowUpCustomerSpecific.fu_code_text is null or FollowUpCustomerSpecific.fu_code_text = '' then FollowUpDefault.fu_code_text else FollowUpCustomerSpecific.fu_code_text end as ReturnsFollowUpActivityDesc,
  
  _FollowUpActivity, 
  _Language
}
```
