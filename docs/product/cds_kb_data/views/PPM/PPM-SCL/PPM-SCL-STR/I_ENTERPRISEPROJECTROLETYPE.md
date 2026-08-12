---
name: I_ENTERPRISEPROJECTROLETYPE
description: "Enterpriseprojectroletype"
app_component: PPM-SCL-STR
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
  - PPM-SCL-STR
  - interface-view
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTERPRISEPROJECTROLETYPE

**Enterpriseprojectroletype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
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
| `ProjectRoleType` | ✓ | |  | `participant_role` |  |  |
| `ProjectRoleCategory` |  | |  | `role_category` |  |  |
| `PartnerFunction` |  | |  | `cast ( dpr_part_role.partner_function as /s4ppm/tv_partner_function preserving type )` |  |  |
| `_ProjectRoleTypeCategory` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectRoleTypeCategory` | `I_EntProjectRoleCategory` | [1..1] |
| `_PartnerFunction` | `I_PartnerFunction` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Role Type for Enterprise Projects'

@AccessControl: {
    authorizationCheck:     #PRIVILEGED_ONLY
}

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: { 
    sqlViewName: 'IENTPROJROLETYPE',
    compiler.compareFilter: true,
    preserveKey:true,
    dataMaintenance: #RESTRICTED  
}

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'ProjectRoleType',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #S
    },
    sapObjectNodeType.name: 'EnterpriseProjectRoleType' 
}

@Search.searchable: true

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view I_EnterpriseProjectRoleType as select from dpr_part_role
  composition [0..*] of I_EntProjectRoleTypeText       as _Text
  
  association [1..1] to I_EntProjectRoleCategory       as _ProjectRoleTypeCategory        on $projection.ProjectRoleCategory = _ProjectRoleTypeCategory.ProjectRoleCategory
  association [1..1] to I_PartnerFunction              as _PartnerFunction                on $projection.PartnerFunction     = _PartnerFunction.PartnerFunction
  
{
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @ObjectModel.text.association: '_Text'
  key participant_role  as ProjectRoleType,
  @ObjectModel.foreignKey.association: '_ProjectRoleTypeCategory'
  role_category         as ProjectRoleCategory,
  @ObjectModel.foreignKey.association: '_PartnerFunction'
  cast ( dpr_part_role.partner_function as /s4ppm/tv_partner_function preserving type ) as PartnerFunction,

  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text,
  
  _ProjectRoleTypeCategory,
  _PartnerFunction
}
```
