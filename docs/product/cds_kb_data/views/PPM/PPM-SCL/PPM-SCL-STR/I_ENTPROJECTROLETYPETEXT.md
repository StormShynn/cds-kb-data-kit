---
name: I_ENTPROJECTROLETYPETEXT
description: "Entprojectroletypetext"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - text-view
  - project
  - text
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTROLETYPETEXT

**Entprojectroletypetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `ProjectRoleType` | ✓ | |  | `participant_role` |  |  |
| `ProjectRoleTypeText` |  | |  | `role_text` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProjectRoleType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.dataMaintenance: #RESTRICTED
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IENTPRJRLTYTXT'

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.dataExtraction.enabled: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Role Type for Ent Projects - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProjectRoleType'

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: { serviceQuality: #A, dataClass: #CUSTOMIZING, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_EntProjectRoleTypeText
  as select from dpr_part_role_t

  association        to parent I_EnterpriseProjectRoleType as _ProjectRoleType on $projection.ProjectRoleType = _ProjectRoleType.ProjectRoleType
  association [0..1] to        I_Language                  as _Language        on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true       -- identifies the language  
  key langu             as Language,

      @ObjectModel.foreignKey.association: '_ProjectRoleType'
      @ObjectModel.text.element: [ 'ProjectRoleTypeText' ]
  key participant_role  as ProjectRoleType,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true           -- identifies the first text field
      role_text         as ProjectRoleTypeText,

      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT ]
      _ProjectRoleType,

      _Language
}
```
