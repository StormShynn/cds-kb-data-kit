---
name: I_PROJECTDEMANDCATEGORYTEXT
description: "Projectdemandcategorytext"
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
  - text-view
  - project
  - text
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDCATEGORYTEXT

**Projectdemandcategorytext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `ProjectDemandCategory` | ✓ | |  | `category` |  |  |
| `ProjectDemandCategoryName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProjectDemandCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@AccessControl: {
    authorizationCheck:     #NOT_REQUIRED,
    personalData.blocking:  #NOT_REQUIRED
}

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDCATGRYT',
    compiler.compareFilter: true
}

@Analytics.dataExtraction.enabled: true

@ObjectModel: {
   sapObjectNodeType.name: 'ProjectDemandCategoryText',
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   semanticKey:       [ 'ProjectDemandCategory' ],
   representativeKey: 'ProjectDemandCategory',
   dataCategory: #TEXT,
   usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #S
   }
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Demand Category - Text'

define view I_ProjectDemandCategoryText
  as select from dmnd_proj_catg_t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association to parent I_ProjectDemandCategory as _ProjectDemandCategory on $projection.ProjectDemandCategory = _ProjectDemandCategory.ProjectDemandCategory
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu       as Language,

      @ObjectModel.text.element: ['ProjectDemandCategoryName']
      @ObjectModel.foreignKey.association: '_ProjectDemandCategory'
  key category    as ProjectDemandCategory,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      description as ProjectDemandCategoryName,

      _Language,
      //@ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
      //                                #TO_COMPOSITION_ROOT]
      _ProjectDemandCategory

}
```
