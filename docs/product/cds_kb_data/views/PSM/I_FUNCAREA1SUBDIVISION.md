---
name: I_FUNCAREA1SUBDIVISION
description: "First Subdivision for Functional Area"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISION')/$value
semantic_en: "First Subdivision for Functional Area"
semantic_vi: "First Subdivision for Functional Area — CDS view cơ bản (master data) dựa trên fmmdfnsub1."
keywords:
  - "first"
  - "subdivision"
  - "for"
  - "functional"
  - "area"
  - "area1"
tags:
  - PSM
  - bo:companycode
  - component:PSM
  - interface-view
---
# I_FUNCAREA1SUBDIVISION

**First Subdivision for Functional Area**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaSubdivisionID` | ✓ | |  | `str_id` | `CHAR(10)` | Master Data Subdivision ID |
| `FunctionalArea1Subdivision` | ✓ | |  | `fnsub1` | `CHAR(10)` | Substring 1 of Functional Area |
| `_FunctionalAreaSubdivisionID` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FunctionalAreaSubdivisionID` | `I_FuncAreaSubdivisionBasic` | [0..1] |
| `_Text` | `I_FuncArea1SubdivisionT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREASUBC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling: {
  algorithm: #SESSION_VARIABLE,
  type: #CLIENT_DEPENDENT
 }
@AccessControl.authorizationCheck: #CHECK
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { 
  internalName: #LOCAL,
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel: {
  usageType: {
      dataClass: #MASTER,
      serviceQuality: #A,
      sizeCategory: #M
  },
  representativeKey: 'FunctionalArea1Subdivision',
  sapObjectNodeType: {
    name: 'FunctionalArea1Subdivision'
  },
  supportedCapabilities: [ 
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.allowExtensions:true
@Search.searchable: true
@EndUserText.label: 'First Subdivision for Functional Area'
define view I_FuncArea1Subdivision
  as select from fmmdfnsub1
  association [0..1] to I_FuncAreaSubdivisionBasic as _FunctionalAreaSubdivisionID on  $projection.FunctionalAreaSubdivisionID = _FunctionalAreaSubdivisionID.FunctionalAreaSubdivisionID
  association [0..*] to I_FuncArea1SubdivisionT    as _Text                        on  $projection.FunctionalAreaSubdivisionID = _Text.FunctionalAreaSubdivisionID
                                                                                   and $projection.FunctionalArea1Subdivision  = _Text.FunctionalArea1Subdivision
{
      @ObjectModel.foreignKey.association: '_FunctionalAreaSubdivisionID'      
  key str_id as FunctionalAreaSubdivisionID,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH  
      @ObjectModel.text.association: '_Text'
  key fnsub1 as FunctionalArea1Subdivision,

      _Text,
      _FunctionalAreaSubdivisionID
}
```
