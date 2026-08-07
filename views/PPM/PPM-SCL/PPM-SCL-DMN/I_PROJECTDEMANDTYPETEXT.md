---
name: I_PROJECTDEMANDTYPETEXT
description: Projectdemandtypetext
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
# I_PROJECTDEMANDTYPETEXT

**Projectdemandtypetext**

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
| `ProjectDemandType` | ✓ | |  | `demand_type` |  |  |
| `ProjectDemandTypeName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProjectDemandType` | | ✓ | | | | |

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
    sqlViewName: 'IPROJDMNDTYPET',
    compiler.compareFilter: true
}

@Analytics.dataExtraction.enabled: true

@ObjectModel: {
   sapObjectNodeType.name: 'ProjectDemandTypeText',
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   representativeKey: 'ProjectDemandType',
   dataCategory: #TEXT,
   usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #S
   }
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@EndUserText.label: 'Project Demand Type - Text'
define view I_ProjectDemandTypeText
  as select from dmnd_proj_type_t
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language
  association        to parent I_ProjectDemandType as _ProjectDemandType on $projection.ProjectDemandType = _ProjectDemandType.ProjectDemandType
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu       as Language,

      @ObjectModel.text.element: ['ProjectDemandTypeName']
      @ObjectModel.foreignKey.association: '_ProjectDemandType'
  key demand_type as ProjectDemandType,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      description as ProjectDemandTypeName,
      
      _Language,
      
      _ProjectDemandType
      
}
where
  langu = $session.system_language
```
