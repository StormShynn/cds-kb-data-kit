---
name: I_FUNCAREA2SUBDIVISIONSTDVH
description: "Second Subdivision Functional Area"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONSTDVH')/$value
semantic_en: "Second Subdivision Functional Area"
semantic_vi: "Second Subdivision Functional Area — CDS view giao diện (master data) dựa trên I_FuncArea2Subdivision."
keywords:
  - "second"
  - "subdivision"
  - "functional"
  - "area"
  - "area2"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNCAREA2SUBDIVISIONSTDVH

**Second Subdivision Functional Area**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaSubdivisionID` | ✓ | |  |  | `CHAR(10)` | Master Data Subdivision ID |
| `FunctionalArea2Subdivision` | ✓ | |  |  | `CHAR(10)` | Substring 2 of Functional Area |
| `_Text` | | ✓ | | | | |
| `_FunctionalAreaSubdivisionID` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA2SUBDIVISIONSTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREAS2VH'
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
  representativeKey: 'FunctionalArea2Subdivision',
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ 
    #VALUE_HELP_PROVIDER 
  ],
  modelingPattern: #VALUE_HELP_PROVIDER
}
@Search.searchable: true
@EndUserText.label: 'Second Subdivision Functional Area'
define view I_FuncArea2SubdivisionStdVH
  as select from I_FuncArea2Subdivision
  
{
      @ObjectModel.foreignKey.association: '_FunctionalAreaSubdivisionID'
      @Consumption.valueHelpDefinition: [ {
          entity: { name: 'I_FuncAreaSubdivisionIDStdVH', element: 'FunctionalAreaSubdivisionID' } } ]         
  key FunctionalAreaSubdivisionID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH  
      @ObjectModel.text.association: '_Text'
  key FunctionalArea2Subdivision,

      _Text,
      _FunctionalAreaSubdivisionID

}
```
