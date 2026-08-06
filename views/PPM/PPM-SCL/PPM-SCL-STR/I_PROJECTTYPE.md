---
name: I_PROJECTTYPE
description: Projecttype
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
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_PROJECTTYPE

**Projecttype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProjectType` | `tcj1.prart` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Projecttypetext` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPROJECTTYPE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel.representativeKey: 'ProjectType'
@EndUserText.label: 'Project Type'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION,  #EXTRACTION_DATA_SOURCE ]
@ObjectModel.resultSet.sizeCategory: #XS
//CE2202 CODELISTS SOTs name for  'ProjectType'
@ObjectModel.sapObjectNodeType.name: 'ProjectType'
//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

define view I_Projecttype
  as select from tcj1
  association [0..*] to I_Projecttypetext as _Text on $projection.ProjectType = _Text.ProjectType
{
  @ObjectModel.text.association: '_Text'
  key tcj1.prart as ProjectType,      
  _Text
}
```
