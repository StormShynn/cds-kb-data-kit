---
name: I_SLSPERFORMANCEDATASOURCETEXT
description: Slsperformancedatasourcetext
app_component: SD-ANA-SP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - SD-ANA-SP
  - interface-view
  - text-view
  - text
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# I_SLSPERFORMANCEDATASOURCETEXT

**Slsperformancedatasourcetext**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesPerformanceDataSource` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as sd_sp_data_source )` |
| `Language` | ✓ | |  | `ddlanguage` |
| `SalesPerformanceDataSourceText` |  | |  | `cast( ddtext as sd_sp_data_source_text )` |
| `_Language` | | ✓ | | |
| `_DataSource` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_DataSource` | `I_SalesPerformanceDataSource` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Performance Data Source - Text' 
@ObjectModel.representativeKey: 'SalesPerformanceDataSource'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName:'ISLSPERFDTASRCT'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY]
define view entity I_SlsPerformanceDataSourceText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SalesPerformanceDataSource as _DataSource on $projection.SalesPerformanceDataSource = _DataSource.SalesPerformanceDataSource
{
      @ObjectModel.foreignKey.association: '_DataSource'
  key cast ( substring( domvalue_l, 1, 1 ) as sd_sp_data_source ) as SalesPerformanceDataSource,
      @Semantics.language
  key ddlanguage                                                         as Language,
      @Semantics.text
      cast( ddtext as sd_sp_data_source_text ) as SalesPerformanceDataSourceText,
      
      //Association
      _DataSource,
      _Language
}
where
      domname  = 'SD_SP_DATA_SOURCE'
  and as4local = 'A'
```
