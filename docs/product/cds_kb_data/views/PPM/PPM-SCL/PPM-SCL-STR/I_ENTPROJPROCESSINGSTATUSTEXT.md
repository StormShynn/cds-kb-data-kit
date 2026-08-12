---
name: I_ENTPROJPROCESSINGSTATUSTEXT
description: "Entprojprocessingstatustext"
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
  - text-view
  - text
  - status
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJPROCESSINGSTATUSTEXT

**Entprojprocessingstatustext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ProcessingStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 2 ) as /s4ppm/tv_proc_status )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ProcessingStatusText` |  | |  | `cast ( ddtext as /s4ppm/tv_proc_status_text )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProcessingStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IENTPROJPROCST' 
@EndUserText.label: 'Processing Status for Ent Projects – Text'
@ObjectModel.representativeKey: 'ProcessingStatus'

@ObjectModel.resultSet.sizeCategory: #XS
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_EntProjProcessingStatusText 
  as select from dd07t
  association to parent I_EntProjProcessingStatus as _ProcessingStatus
    on $projection.ProcessingStatus = _ProcessingStatus.ProcessingStatus
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{ 
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_ProcessingStatus'
      @ObjectModel.text.element: ['ProcessingStatusText']
  key cast( substring( domvalue_l, 1, 2 ) as /s4ppm/tv_proc_status ) as ProcessingStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast ( ddtext as /s4ppm/tv_proc_status_text ) as ProcessingStatusText,  
      _ProcessingStatus, 
      _Language
}
where domname = 'DPR_PROC_STATUS' and as4local = 'A'
```
