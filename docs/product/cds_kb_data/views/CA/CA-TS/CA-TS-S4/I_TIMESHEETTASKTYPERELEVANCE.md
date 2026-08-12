---
name: I_TIMESHEETTASKTYPERELEVANCE
description: "Timesheettasktyperelevance"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-TS
  - interface-view
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETTASKTYPERELEVANCE

**Timesheettasktyperelevance**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeSheetTaskTypeRelevanceCode` | ✓ | |  | `cast(dd07l.domvalue_l as catsxt_tasktype_relevance)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TimeSheetTaskTypeRlvnceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITIMSHTASKTYPRLV'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'TimeSheetTaskTypeRelevanceCode'
@ObjectModel.usageType: {dataClass: #META, serviceQuality: #A, sizeCategory: #S}
@EndUserText.label: 'Task Type Relevance for Timesheet'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.sapObjectNodeType.name :'TimeSheetTaskTypeRelevanceCode'                                     
define view I_TimeSheetTaskTypeRelevance
  as select from dd07l
  association [0..*] to I_TimeSheetTaskTypeRlvnceText as _Text on $projection.TimeSheetTaskTypeRelevanceCode = _Text.TimeSheetTaskTypeRelevanceCode
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as catsxt_tasktype_relevance) as TimeSheetTaskTypeRelevanceCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                                    as DomainValue,
      
      _Text
}
where
      dd07l.domname  = 'CATSXT_TASKTYPE_RELEVANCE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
