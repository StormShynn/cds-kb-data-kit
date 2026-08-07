---
name: I_PROJECTDEMANDCATEGORY
description: Projectdemandcategory
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
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDCATEGORY

**Projectdemandcategory**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjectDemandCategory` | ✓ | |  | `category` |
| `_Type` | | ✓ | | |
| `_Text` | | ✓ | | |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@AccessControl: {
    authorizationCheck:     #NOT_REQUIRED,
    personalData.blocking:  #NOT_REQUIRED
}

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDCATGRY',
    compiler.compareFilter: true
}

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}

@ObjectModel: {
  sapObjectNodeType.name: 'ProjectDemandCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
   compositionRoot:   true,
   representativeKey: 'ProjectDemandCategory',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #S
   }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Project Demand Category'

define root view I_ProjectDemandCategory
  as select from dmnd_proj_catgry
  composition [0..*] of I_ProjectDemandCategoryText as _Text
  composition [1..*] of I_ProjectDemandType         as _Type
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key category as ProjectDemandCategory,

      //@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Type,

      //@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
