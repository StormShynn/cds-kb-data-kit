---
name: I_FUNCAREA2SUBDIVISIONT
description: "Second Subdivision Functional Area - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONT')/$value
semantic_en: "Second Subdivision Functional Area - Text"
semantic_vi: "Second Subdivision Functional Area - Text — CDS view giao diện (master data) dựa trên fmmdfnsub2t."
keywords:
  - "second"
  - "subdivision"
  - "functional"
  - "area"
  - "text"
  - "language"
  - "area2"
  - "func"
  - "desc"
  - "desc2"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNCAREA2SUBDIVISIONT

**Second Subdivision Functional Area - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FunctionalAreaSubdivisionID` | ✓ | |  | `str_id` | `CHAR(10)` | Master Data Subdivision ID |
| `FunctionalArea2Subdivision` | ✓ | |  | `fnsub2` | `CHAR(10)` | Substring 2 of Functional Area |
| `FuncArea2SubdivisionDesc` |  | |  | `fdshtxt` | `CHAR(50)` | Substring Description 1 |
| `FuncArea2SubdivisionDesc2` |  | |  | `fdlotxt` | `CHAR(50)` | Substring Description 2 |
| `_Language` | | ✓ | | | | |
| `_FuncArea2Subdivision` | | ✓ | | | | |
| `_FuncAreaSubdivisionID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FuncArea2Subdivision` | `I_FuncArea2Subdivision` | [0..1] |
| `_FuncAreaSubdivisionID` | `I_FuncAreaSubdivisionBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREA2SUBT'
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
  representativeKey: 'FunctionalArea2Subdivision',
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
@EndUserText.label: 'Second Subdivision Functional Area - Text'
define view I_FuncArea2SubdivisionT
  as select from fmmdfnsub2t
  association [0..1] to I_Language                 as _Language              on  $projection.Language = _Language.Language
  association [0..1] to I_FuncArea2Subdivision     as _FuncArea2Subdivision  on  $projection.FunctionalAreaSubdivisionID = _FuncArea2Subdivision.FunctionalAreaSubdivisionID
                                                                             and $projection.FunctionalArea2Subdivision  = _FuncArea2Subdivision.FunctionalArea2Subdivision
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
      @ObjectModel.foreignKey.association: '_FuncArea2Subdivision'
      @ObjectModel.text.element: ['FuncArea2SubdivisionDesc']      
  key fnsub2  as FunctionalArea2Subdivision,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      fdshtxt as FuncArea2SubdivisionDesc,
      @Semantics.text: true
      fdlotxt as FuncArea2SubdivisionDesc2,

      _Language,
      _FuncArea2Subdivision,
      _FuncAreaSubdivisionID
}
```
