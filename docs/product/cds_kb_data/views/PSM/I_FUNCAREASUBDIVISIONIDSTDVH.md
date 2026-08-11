---
name: I_FUNCAREASUBDIVISIONIDSTDVH
description: "Subdivision ID for Functional Area"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONIDSTDVH')/$value
semantic_en: "Subdivision ID for Functional Area"
semantic_vi: "Subdivision ID for Functional Area — CDS view giao diện dựa trên I_FuncAreaSubdivisionBasic."
keywords:
  - "subdivision"
  - "for"
  - "functional"
  - "area"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNCAREASUBDIVISIONIDSTDVH

**Subdivision ID for Functional Area**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONIDSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaSubdivisionID` | ✓ | |  |  | `CHAR(10)` | Functional Area Subdivision ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONIDSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONIDSTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREASBVH'
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
      dataClass: #META,
      serviceQuality: #A,
      sizeCategory: #M
    },
  representativeKey: 'FunctionalAreaSubdivisionID',
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ 
    #VALUE_HELP_PROVIDER 
  ],
  modelingPattern: #VALUE_HELP_PROVIDER
}
@Search.searchable: true
@EndUserText.label: 'Subdivision ID for Functional Area'

define view I_FuncAreaSubdivisionIDStdVH
  as select from I_FuncAreaSubdivisionBasic
  
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key FunctionalAreaSubdivisionID
}
```
