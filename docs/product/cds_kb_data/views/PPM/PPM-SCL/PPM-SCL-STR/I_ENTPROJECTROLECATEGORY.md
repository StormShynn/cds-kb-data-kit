---
name: I_ENTPROJECTROLECATEGORY
description: "Entprojectrolecategory"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_ENTPROJECTROLECATEGORY

**Entprojectrolecategory**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectRoleCategory` | ✓ | |  | `cast( dd07l.domvalue_l as /s4ppm/tv_role_category )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Role Category for Enterprise Projects'

@AccessControl: {
    authorizationCheck:     #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: { 
    sqlViewName: 'IENTPROJROLECAT',
    compiler.compareFilter: true,
    preserveKey:true,
    dataMaintenance: #RESTRICTED  
}

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
}

@ObjectModel: {
     compositionRoot: true,
     representativeKey: 'ProjectRoleCategory',
     dataCategory: #VALUE_HELP,
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE ],     
     usageType: {
        serviceQuality:  #A,
        dataClass:       #META,
        sizeCategory:    #S
    },
    resultSet.sizeCategory: #XS,
    sapObjectNodeType.name: 'EnterpriseProjectRoleCategory'
}

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view I_EntProjectRoleCategory as select from dd07l 
    composition [0..*] of I_EntProjectRoleCategoryText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as /s4ppm/tv_role_category ) as ProjectRoleCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      
      _Text
} 
where dd07l.domname  = 'DPR_PART_ROLE_CATEGORY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
