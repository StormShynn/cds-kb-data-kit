---
name: I_PROJECTDEMANDTYPE
description: "Projectdemandtype"
app_component: PPM-SCL-DMN
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
  - PPM-SCL-DMN
  - interface-view
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDTYPE

**Projectdemandtype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
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
| `ProjectDemandType` | ✓ | |  | `demand_type` |  |  |
| `ProjectDemandCategory` |  | |  | `category` |  |  |
| `_Text` | | ✓ | | | | |
| `_ProjectDemandCategory` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@AccessControl: {
    authorizationCheck:     #NOT_REQUIRED,
    personalData.blocking:  #NOT_REQUIRED
}

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDTYPE',
    compiler.compareFilter: true
}

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
   representativeKey: 'ProjectDemandType',
   sapObjectNodeType.name: 'ProjectDemandType',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #S
   },
   resultSet.sizeCategory: #XS
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@EndUserText.label: 'Project Demand Type'

define view I_ProjectDemandType
  as select from dmnd_proj_type
  composition [0..*] of I_ProjectDemandTypeText as _Text 
  association to parent I_ProjectDemandCategory as _ProjectDemandCategory on $projection.ProjectDemandCategory = _ProjectDemandCategory.ProjectDemandCategory
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key demand_type as ProjectDemandType,

      @ObjectModel.foreignKey.association: '_ProjectDemandCategory'
      category    as ProjectDemandCategory,

      //@ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      //@ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
      //                                #TO_COMPOSITION_ROOT]
      _ProjectDemandCategory
}
```
