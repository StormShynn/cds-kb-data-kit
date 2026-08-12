---
name: I_DEFECTCODESTDVH
description: "Defectcodestdvh"
app_component: QM-QN-2CL
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
  - QM
  - QM-QN
  - interface-view
  - value-help
  - standard-value-help
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTCODESTDVH

**Defectcodestdvh**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
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
| `DefectCodeGroup` | ✓ | |  |  |  |  |
| `DefectCode` | ✓ | |  |  |  |  |
| `CodeIsInactive` |  | |  |  |  |  |
| `DefectCodeGroupAndCode` |  | |  | `cast( concat_with_space( DefectCodeGroup, DefectCode, 1) as qdefect_code_group_and_code preserving type )` |  |  |
| `CodeGroupStatus` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_DefectCodeGroup` | | ✓ | | | | |

## Source Code

```abap
@VDM: { 
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IDC__VH'
@ObjectModel.representativeKey: 'DefectCode'

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_Text','_DefectCodeGroup']

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Defect Code'

@Search.searchable: true
@Consumption.ranked: true
define view entity I_DefectCodeStdVH as select from I_DefectCode {
  @ObjectModel.foreignKey.association: '_DefectCodeGroup'
  @ObjectModel.text.element: [ 'DefectCodeGroupText' ]
  @Consumption.valueHelpDefinition: [ 
     { entity:  { name:    'I_DefectCodeGroupStdVH',
                  element: 'DefectCodeGroup' }
     }]
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  key DefectCodeGroup,
  
  @ObjectModel.text.element: ['DefectCodeText']
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  key DefectCode,
  
  @Semantics.text: true
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  _Text[ 1:Language = $session.system_language ].DefectCodeText,
  
  @Semantics.text:true
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  _DefectCodeGroup._Text[ 1:Language = $session.system_language ].DefectCodeGroupText,
  
  @Consumption.hidden: true
  CodeIsInactive,
  
  @ObjectModel.text.element: ['DefectCodeText']
  cast( concat_with_space( DefectCodeGroup, DefectCode, 1) as qdefect_code_group_and_code preserving type ) as DefectCodeGroupAndCode,
  
  _Text,

  // For authority check
  @Consumption.hidden: true
  CodeGroupStatus,
  @Consumption.hidden: true
  _DefectCodeGroup
}
```
