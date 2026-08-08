---
name: I_PROJECTDEMANDEXPENSETYPETEXT
description: "Projectdemandexpensetypetext"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - text-view
  - project
  - text
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDEXPENSETYPETEXT

**Projectdemandexpensetypetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandExpenseType` | ✓ | |  | `resource_id` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProjectDemandExpenseTypeText` |  | |  | `description` |  |  |
| `_ProjectDemandExpenseType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectDemandExpenseType` | `I_ProjectDemandExpenseType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType:#BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPrjDmndExpnTypeTxt'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Project Demand Expense Type - Text'
@ObjectModel.sapObjectNodeType.name:'ProjectDemandExpenseTypeText'
@ObjectModel.representativeKey: 'ProjectDemandExpenseType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}
define view entity I_ProjectDemandExpenseTypeText
  as select from /cpd/fc_res_t as Text

  association [1..1] to I_ProjectDemandExpenseType as _ProjectDemandExpenseType on $projection.ProjectDemandExpenseType = _ProjectDemandExpenseType.ProjectDemandExpenseType
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ProjectDemandExpenseType'
  key Text.resource_id as ProjectDemandExpenseType,

      @ObjectModel.foreignKey.association:'_Language'
      @Semantics.language: true
  key Text.spras       as Language,

      @Semantics.text : true
      Text.description as ProjectDemandExpenseTypeText,

      _Language,
      _ProjectDemandExpenseType
}
```
