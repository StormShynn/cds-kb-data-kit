---
name: I_PROJECTDEMANDEXPENSETYPE
description: "Projectdemandexpensetype"
app_component: PPM-SCL-DMN
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
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDEXPENSETYPE

**Projectdemandexpensetype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
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
| `ProjectDemandExpenseType` | ✓ | |  | `resource_id` |  |  |
| `_ExpenseTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExpenseTypeText` | `I_ProjectDemandExpenseTypeText` | [0..*] |

## Source Code

```abap
@VDM.viewType:#BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Project Demand Expense Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'ProjectDemandExpenseType'
@ObjectModel.sapObjectNodeType.name:'ProjectDemandExpenseType'
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}

define view entity I_ProjectDemandExpenseType
  as select from /cpd/fc_res
  association [0..*] to I_ProjectDemandExpenseTypeText as _ExpenseTypeText on $projection.ProjectDemandExpenseType = _ExpenseTypeText.ProjectDemandExpenseType

{
       @ObjectModel.text.association: '_ExpenseTypeText'
  key  resource_id as ProjectDemandExpenseType,

       _ExpenseTypeText
}
```
