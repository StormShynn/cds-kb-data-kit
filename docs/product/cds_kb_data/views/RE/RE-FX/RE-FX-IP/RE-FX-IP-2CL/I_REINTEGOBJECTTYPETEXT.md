---
name: I_REINTEGOBJECTTYPETEXT
description: "Real Estate Integ Object Type - Text"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTTYPETEXT')/$value
semantic_en: "Real Estate Integ Object Type - Text"
semantic_vi: "Real Estate Integ Object Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "real"
  - "estate"
  - "integ"
  - "object"
  - "type"
  - "text"
  - "language"
  - "integration"
  - "domain"
  - "value"
  - "name"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJECTTYPETEXT

**Real Estate Integ Object Type - Text**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `REIntegrationObjectType` | ✓ | |  | `cast(domvalue_l as reipobjecttype )` | `CHAR(4)` | Object Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `REIntegObjectTypeName` |  | |  | `cast( ddtext as recadesc60 preserving type )` | `CHAR(60)` | RE Description 60 Characters |
| `_Language` | | ✓ | | | | |
| `_REIntegObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Real Estate Integ Object Type - Text'
@AbapCatalog.sqlViewName: 'IREINTOBJECTTYPT'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REIntegrationObjectType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@Search.searchable: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
 
define view I_REIntegObjectTypeText as select from dd07t 
association to parent I_REIntegObjectType as _REIntegObjectType
    on $projection.REIntegrationObjectType = _REIntegObjectType.REIntegrationObjectType
association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language{
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @ObjectModel.foreignKey.association: '_REIntegObjectType'
    @ObjectModel.text.element: ['REIntegrationObjectType']
    key cast(domvalue_l as reipobjecttype ) as REIntegrationObjectType,
        
    @Consumption.hidden: true
    domvalue_l as DomainValue,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text: true
    cast( ddtext as recadesc60 preserving type ) as REIntegObjectTypeName,
    _REIntegObjectType,   
    _Language
    
}
where
      domname  = 'REIPOBJECTTYPE'
  and as4local = 'A'
  and as4vers  = '0000'
```
