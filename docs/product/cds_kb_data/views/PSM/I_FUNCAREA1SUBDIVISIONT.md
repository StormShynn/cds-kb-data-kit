---
name: I_FUNCAREA1SUBDIVISIONT
description: "First Subdivision Functional Area - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONT')/$value
semantic_en: "First Subdivision Functional Area - Text"
semantic_vi: "First Subdivision Functional Area - Text — CDS view giao diện (master data) dựa trên fmmdfnsub1t."
keywords:
  - "first"
  - "subdivision"
  - "functional"
  - "area"
  - "text"
  - "language"
  - "area1"
  - "func"
  - "desc"
  - "desc2"
tags:
  - PSM
  - bo:companycode
  - component:PSM
  - interface-view
---
# I_FUNCAREA1SUBDIVISIONT

**First Subdivision Functional Area - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FunctionalAreaSubdivisionID` | ✓ | |  | `str_id` | `CHAR(10)` | Master Data Subdivision ID |
| `FunctionalArea1Subdivision` | ✓ | |  | `fnsub1` | `CHAR(10)` | Substring 1 of Functional Area |
| `FuncArea1SubdivisionDesc` |  | |  | `fdshtxt` | `CHAR(50)` | Substring Description 1 |
| `FuncArea1SubdivisionDesc2` |  | |  | `fdlotxt` | `CHAR(50)` | Substring Description 2 |
| `_Language` | | ✓ | | | | |
| `_FuncArea1Subdivision` | | ✓ | | | | |
| `_FuncAreaSubdivisionID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FuncArea1Subdivision` | `I_FuncArea1Subdivision` | [0..1] |
| `_FuncAreaSubdivisionID` | `I_FuncAreaSubdivisionBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREA1SUBT'
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
  representativeKey: 'FunctionalArea1Subdivision',
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
@EndUserText.label: 'First Subdivision Functional Area - Text'
define view I_FuncArea1SubdivisionT
  as select from fmmdfnsub1t
  association [0..1] to I_Language                 as _Language              on  $projection.Language = _Language.Language
  association [0..1] to I_FuncArea1Subdivision     as _FuncArea1Subdivision  on  $projection.FunctionalAreaSubdivisionID = _FuncArea1Subdivision.FunctionalAreaSubdivisionID
                                                                             and $projection.FunctionalArea1Subdivision  = _FuncArea1Subdivision.FunctionalArea1Subdivision
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
      @ObjectModel.foreignKey.association: '_FuncArea1Subdivision'
      @ObjectModel.text.element: ['FuncArea1SubdivisionDesc']      
  key fnsub1  as FunctionalArea1Subdivision,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      fdshtxt as FuncArea1SubdivisionDesc,
      @Semantics.text: true
      fdlotxt as FuncArea1SubdivisionDesc2,

      _Language,
      _FuncArea1Subdivision,
      _FuncAreaSubdivisionID
}
```
