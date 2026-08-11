---
name: I_FUNCAREA3SUBDIVISIONT
description: "Third Subdivision Functional Area - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISIONT')/$value
semantic_en: "Third Subdivision Functional Area - Text"
semantic_vi: "Third Subdivision Functional Area - Text — CDS view giao diện (master data) dựa trên fmmdfnsub3t."
keywords:
  - "third"
  - "subdivision"
  - "functional"
  - "area"
  - "text"
  - "language"
  - "area3"
  - "func"
  - "desc"
  - "desc2"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNCAREA3SUBDIVISIONT

**Third Subdivision Functional Area - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FunctionalAreaSubdivisionID` | ✓ | |  | `str_id` | `CHAR(10)` | Master Data Subdivision ID |
| `FunctionalArea3Subdivision` | ✓ | |  | `fnsub3` | `CHAR(10)` | Substring 3 of Functional Area |
| `FuncArea3SubdivisionDesc` |  | |  | `fdshtxt` | `CHAR(50)` | Substring Description 1 |
| `FuncArea3SubdivisionDesc2` |  | |  | `fdlotxt` | `CHAR(50)` | Substring Description 2 |
| `_Language` | | ✓ | | | | |
| `_FuncArea3Subdivision` | | ✓ | | | | |
| `_FuncAreaSubdivisionID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FuncArea3Subdivision` | `I_FuncArea3Subdivision` | [0..1] |
| `_FuncAreaSubdivisionID` | `I_FuncAreaSubdivisionBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISIONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISIONT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREA3SUBT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling: {
  algorithm: #SESSION_VARIABLE,
  type: #CLIENT_DEPENDENT
 }
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  representativeKey: 'FunctionalArea3Subdivision',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ 
    #CDS_MODELING_ASSOCIATION_TARGET, 
    #CDS_MODELING_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ]
}  
@VDM.viewType: #BASIC
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Third Subdivision Functional Area - Text'
define view I_FuncArea3SubdivisionT
  as select from fmmdfnsub3t
  association [0..1] to I_Language                 as _Language              on  $projection.Language = _Language.Language
  association [0..1] to I_FuncArea3Subdivision     as _FuncArea3Subdivision  on  $projection.FunctionalAreaSubdivisionID = _FuncArea3Subdivision.FunctionalAreaSubdivisionID
                                                                             and $projection.FunctionalArea3Subdivision  = _FuncArea3Subdivision.FunctionalArea3Subdivision
  association [0..1] to I_FuncAreaSubdivisionBasic as _FuncAreaSubdivisionID on  $projection.FunctionalAreaSubdivisionID = _FuncAreaSubdivisionID.FunctionalAreaSubdivisionID

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_FuncAreaSubdivisionID'
      @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_FuncAreaSubdivisionIDStdVH',
                          element: 'FunctionalAreaSubdivisionID' }
             }]
  key str_id  as FunctionalAreaSubdivisionID,
      @ObjectModel.foreignKey.association: '_FuncArea3Subdivision'
      @ObjectModel.text.element: ['FuncArea3SubdivisionDesc']      
  key fnsub3  as FunctionalArea3Subdivision,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      fdshtxt as FuncArea3SubdivisionDesc,
      @Semantics.text: true
      fdlotxt as FuncArea3SubdivisionDesc2,

      _Language,
      _FuncArea3Subdivision,
      _FuncAreaSubdivisionID
}
```
