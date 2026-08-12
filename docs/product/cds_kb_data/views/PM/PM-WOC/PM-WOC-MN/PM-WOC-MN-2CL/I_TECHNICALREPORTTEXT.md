---
name: I_TECHNICALREPORTTEXT
description: "Technicalreporttext"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_TECHNICALREPORTTEXT

**Technicalreporttext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CatalogProfile` | ✓ | |  | `rbnr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CatalogProfileText` |  | |  | `rbnrx` |  |  |
| `_Language` | | ✓ | | | | |
| `_TechnicalReport` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TechnicalReport` | `I_TechnicalReport` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Technical Report - Text'
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'ITECHREPTEXT'
@ObjectModel.representativeKey: 'CatalogProfile'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Search.searchable: true

@Metadata.ignorePropagatedAnnotations

@ObjectModel: { supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }
@Analytics.dataExtraction:{enabled: true,delta.changeDataCapture.automatic: true}
define view entity I_TechnicalReportText
  as select from t352b_t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_TechnicalReport as _TechnicalReport on $projection.CatalogProfile = _TechnicalReport.CatalogProfile
{
  
    @ObjectModel.foreignKey.association: '_TechnicalReport'
    @ObjectModel.text.element: ['CatalogProfileText']
  key t352b_t.rbnr  as CatalogProfile,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t352b_t.spras as Language,

      @Semantics.text: true
      @EndUserText.label: 'Catalog Profile Description'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      t352b_t.rbnrx as CatalogProfileText,

      _Language,
      _TechnicalReport
}
```
