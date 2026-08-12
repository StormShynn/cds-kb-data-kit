---
name: I_ENTPROJECTROLECATEGORYTEXT
description: "Entprojectrolecategorytext"
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
# I_ENTPROJECTROLECATEGORYTEXT

**Entprojectrolecategorytext**

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
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ProjectRoleCategory` | ✓ | |  | `cast( dd07t.domvalue_l as /s4ppm/tv_role_category )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ProjectRoleCategoryText` |  | |  | `cast( dd07t.ddtext as /s4ppm/tv_role_category_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_EntProjectRoleCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Role Category for Ent Projects - Text'

@AccessControl: {
    authorizationCheck:     #NOT_ALLOWED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
    sqlViewName: 'IENTPRJRLECATTXT',
    compiler.compareFilter: true,
    preserveKey:true,
    dataMaintenance: #RESTRICTED
}

@Analytics: {
    dataExtraction.enabled: true
}

@ObjectModel: {
     representativeKey: 'ProjectRoleCategory',
     dataCategory: #TEXT,
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ],
     usageType: {
        serviceQuality:  #A,
        dataClass:       #META,
        sizeCategory:    #S
    }
}

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_EntProjectRoleCategoryText
  as select from dd07t
  association        to parent I_EntProjectRoleCategory as _EntProjectRoleCategory on $projection.ProjectRoleCategory = _EntProjectRoleCategory.ProjectRoleCategory
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                    as Language,
      @ObjectModel.foreignKey.association: '_EntProjectRoleCategory'
      @ObjectModel.text.element: ['ProjectRoleCategoryText']
  key cast( dd07t.domvalue_l as /s4ppm/tv_role_category )                  as ProjectRoleCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as /s4ppm/tv_role_category_name preserving type ) as ProjectRoleCategoryText,

      _EntProjectRoleCategory,
      _Language
}
where
      dd07t.domname  = 'DPR_PART_ROLE_CATEGORY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
