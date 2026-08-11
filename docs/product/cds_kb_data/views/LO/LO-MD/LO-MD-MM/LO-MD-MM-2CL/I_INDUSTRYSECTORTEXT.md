---
name: I_INDUSTRYSECTORTEXT
description: "Industry Sector - Text"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDUSTRYSECTORTEXT')/$value
semantic_en: "Industry Sector - Text"
semantic_vi: "Industry Sector - Text — CDS view giao diện dựa trên t137t."
keywords:
  - "industry"
  - "sector"
  - "text"
  - "language"
  - "name"
tags:
  - LO
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_INDUSTRYSECTORTEXT

**Industry Sector - Text**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDUSTRYSECTORTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndustrySector` | ✓ | |  | `mbrsh` | `CHAR(1)` | Industry |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `IndustrySectorName` |  | |  | `mbbez` | `CHAR(25)` | Industry sector description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDUSTRYSECTORTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDUSTRYSECTORTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINDSECTORTXTV'
@AbapCatalog.preserveKey:true
@EndUserText.label: 'Industry Sector - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'IndustrySector'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE
]
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_IndustrySectorText_2'

define view I_IndustrySectorText
  as select from t137t as IndustryText
{
  key IndustryText.mbrsh as IndustrySector,

      @Semantics.language: true
  key IndustryText.spras as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #HIGH
      IndustryText.mbbez as IndustrySectorName
}
```
