---
name: I_REINTEGOBJECTUSAGECLFNTEXT
description: "Real Estate Integ Obj Usage Clfn - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFNTEXT')/$value
semantic_en: "Real Estate Integ Obj Usage Clfn - Text"
semantic_vi: "Real Estate Integ Obj Usage Clfn - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "real"
  - "estate"
  - "integ"
  - "obj"
  - "usage"
  - "clfn"
  - "text"
  - "language"
  - "object"
  - "domain"
  - "value"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJECTUSAGECLFNTEXT

**Real Estate Integ Obj Usage Clfn - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `REIntegObjectUsageClfn` | ✓ | |  | `cast(domvalue_l as reipiousageclassification )` | `CHAR(1)` | Usage Classification |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `REIntegObjectUsageClfnText` |  | |  | `cast( ddtext as recadesc60 preserving type )` | `CHAR(60)` | RE Description 60 Characters |
| `_Language` | | ✓ | | | | |
| `_REIntegObjectUsageClfn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFNTEXT')/$value)*

```abap
@EndUserText.label: 'Real Estate Integ Obj Usage Clfn - Text'
@AbapCatalog.sqlViewName: 'IREINTOBJUSACLT'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REIntegObjectUsageClfn'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
 
define view I_REIntegObjectUsageClfnText as select from dd07t 
association to parent I_REIntegObjectUsageClfn as _REIntegObjectUsageClfn
    on $projection.REIntegObjectUsageClfn = _REIntegObjectUsageClfn.REIntegObjectUsageClfn
association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language{
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @ObjectModel.foreignKey.association: '_REIntegObjectUsageClfn'
    @ObjectModel.text.element: ['REIntegObjectUsageClfnText']
    key cast(domvalue_l as reipiousageclassification ) as REIntegObjectUsageClfn,
        
    @Consumption.hidden: true
    domvalue_l as DomainValue,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text: true
    cast( ddtext as recadesc60 preserving type ) as REIntegObjectUsageClfnText,
    _REIntegObjectUsageClfn,   
    _Language
    
}
where
      domname  = 'REIPIOUSAGECLASSIFICATION'
  and as4local = 'A'
  and as4vers  = '0000'
```
