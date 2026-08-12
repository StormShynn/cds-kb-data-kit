---
name: I_REINTEGOBJECTUSAGECLFN
description: "Real Estate Integ Object Usage Clfn"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFN')/$value
semantic_en: "Real Estate Integ Object Usage Clfn"
semantic_vi: "Real Estate Integ Object Usage Clfn — CDS view giao diện dựa trên dd07l."
keywords:
  - "real"
  - "estate"
  - "integ"
  - "object"
  - "usage"
  - "clfn"
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
# I_REINTEGOBJECTUSAGECLFN

**Real Estate Integ Object Usage Clfn**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REIntegObjectUsageClfn` | ✓ | |  | `cast(domvalue_l as reipiousageclassification )` | `CHAR(1)` | Usage Classification |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTUSAGECLFN')/$value)*

```abap
@EndUserText.label: 'Real Estate Integ Object Usage Clfn'
@AbapCatalog.sqlViewName: 'IREINTOBJUSACLFN'
@ObjectModel.representativeKey: 'REIntegObjectUsageClfn'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true
    }
}
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
 
define root view I_REIntegObjectUsageClfn as select from dd07l 
composition [0..*] of I_REIntegObjectUsageClfnText as _Text
{

    @ObjectModel.text.association: '_Text'
    key cast(domvalue_l as reipiousageclassification ) as REIntegObjectUsageClfn,
        
    @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
    domvalue_l as DomainValue,
       
    _Text
    
}
where
      domname  = 'REIPIOUSAGECLASSIFICATION'
  and as4local = 'A'
  and as4vers  = '0000'
```
