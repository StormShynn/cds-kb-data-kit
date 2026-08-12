---
name: I_ENTPROJECTROLETYPETEXT
description: "Entprojectroletypetext"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
