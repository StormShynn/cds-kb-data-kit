---
name: I_PROJECTTYPETEXT
description: Projecttypetext
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
# I_PROJECTTYPETEXT

**Projecttypetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProjectType` | `tcj1t.prart` |
| key `Language` | `tcj1t.langu` |
| `ProjectTypeName` | `tcj1t.pratx` |
| `_ProjectType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectType` | `I_Projecttype` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPROJTYPETEXT'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction.enabled: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ProjectType'
@EndUserText.label: 'Project Type - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'ProjectTypeText'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

define view I_Projecttypetext
  as select from tcj1t
  
  association [0..1] to I_Projecttype as _ProjectType on $projection.ProjectType = _ProjectType.ProjectType  
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ProjectType'
      @ObjectModel.text.element: ['ProjectTypeName']
  key tcj1t.prart as ProjectType,
      @Semantics.language : true
      @ObjectModel.foreignKey.association: '_Language'
  key tcj1t.langu as Language,
      @Semantics.text: true
      tcj1t.pratx as ProjectTypeName,
      _ProjectType,
      _Language
}
```
