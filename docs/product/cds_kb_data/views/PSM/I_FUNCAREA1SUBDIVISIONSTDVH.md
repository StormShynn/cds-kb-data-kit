---
name: I_FUNCAREA1SUBDIVISIONSTDVH
description: "First Subdivision Functional Area"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONSTDVH')/$value
semantic_en: "First Subdivision Functional Area"
semantic_vi: "First Subdivision Functional Area — CDS view giao diện (master data) dựa trên I_FuncArea1Subdivision."
keywords:
  - "first"
  - "subdivision"
  - "functional"
  - "area"
  - "area1"
tags:
  - PSM
  - bo:companycode
  - component:PSM
  - interface-view
---
# I_FUNCAREA1SUBDIVISIONSTDVH

**First Subdivision Functional Area**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaSubdivisionID` | ✓ | |  |  | `CHAR(10)` | Master Data Subdivision ID |
| `FunctionalArea1Subdivision` | ✓ | |  |  | `CHAR(10)` | Substring 1 of Functional Area |
| `_Text` | | ✓ | | | | |
| `_FunctionalAreaSubdivisionID` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA1SUBDIVISIONSTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREAS1VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling: {
  algorithm: #SESSION_VARIABLE,
  type: #CLIENT_DEPENDENT
 }
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
      dataClass: #MASTER,
      serviceQuality: #A,
      sizeCategory: #M
    },
  representativeKey: 'FunctionalArea1Subdivision',
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ 
    #VALUE_HELP_PROVIDER 
  ],
  modelingPattern: #VALUE_HELP_PROVIDER
}
@Search.searchable: true
@EndUserText.label: 'First Subdivision Functional Area'
define view I_FuncArea1SubdivisionStdVH
  as select from I_FuncArea1Subdivision
  
{
      @ObjectModel.foreignKey.association: '_FunctionalAreaSubdivisionID'
      @Consumption.valueHelpDefinition: [ {
          entity: { name: 'I_FuncAreaSubdivisionIDStdVH', element: 'FunctionalAreaSubdivisionID' } } ]         
  key FunctionalAreaSubdivisionID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH  
      @ObjectModel.text.association: '_Text'
  key FunctionalArea1Subdivision,

      _Text,
      _FunctionalAreaSubdivisionID

}
```
