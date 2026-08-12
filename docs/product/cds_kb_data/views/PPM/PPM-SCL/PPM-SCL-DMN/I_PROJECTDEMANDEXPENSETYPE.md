---
name: I_PROJECTDEMANDEXPENSETYPE
description: "Projectdemandexpensetype"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
