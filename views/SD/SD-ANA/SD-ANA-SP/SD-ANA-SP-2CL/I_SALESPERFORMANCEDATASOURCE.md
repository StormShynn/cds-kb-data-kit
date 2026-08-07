---
name: I_SALESPERFORMANCEDATASOURCE
description: "Salesperformancedatasource"
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
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# I_SALESPERFORMANCEDATASOURCE

**Salesperformancedatasource**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesPerformanceDataSource` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as sd_sp_data_source )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsPerformanceDataSourceText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Sales Performance Data Source' 
@ObjectModel.representativeKey: 'SalesPerformanceDataSource'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY]
define view entity I_SalesPerformanceDataSource
   as select from dd07l
   association [0..*] to I_SlsPerformanceDataSourceText as _Text  on $projection.SalesPerformanceDataSource = _Text.SalesPerformanceDataSource
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as sd_sp_data_source ) as SalesPerformanceDataSource,

    _Text
}
where domname  = 'SD_SP_DATA_SOURCE'
  and as4local = 'A'
```
