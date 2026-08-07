---
name: I_ENTPROJECTROLECATEGORYTEXT
description: "Entprojectrolecategorytext"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
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
