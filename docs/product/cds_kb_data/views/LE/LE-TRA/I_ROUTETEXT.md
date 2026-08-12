---
name: I_ROUTETEXT
description: "Route Text"
app_component: LE-TRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROUTETEXT')/$value
semantic_en: "Route Text"
semantic_vi: "Route Text — CDS view giao diện dựa trên tvrot."
keywords:
  - "route"
  - "text"
  - "language"
  - "name"
tags:
  - LE
  - component:LE-TRA
  - interface-view
  - LE-TRA
  - lob:logistics execution
---
# I_ROUTETEXT

**Route Text**

| Property | Value |
|---|---|
| App Component | `LE-TRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROUTETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Route` | ✓ | |  | `route` | `CHAR(6)` | Route |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RouteName` |  | |  | `bezei` | `CHAR(40)` | Route Description |
| `_Route` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Route` | `I_Route` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROUTETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ROUTETEXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Route'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Route Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEROUTET'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Analytics.dataExtraction.enabled: true 
@Metadata.ignorePropagatedAnnotations:true

define view I_RouteText 
as select from 
tvrot
association[0..1] to I_Route as _Route on $projection.Route = _Route.Route
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
    @ObjectModel.foreignKey.association: '_Route'
    key route as Route,
        
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text
    bezei as RouteName,
    
    _Route,
    _Language
};
```
