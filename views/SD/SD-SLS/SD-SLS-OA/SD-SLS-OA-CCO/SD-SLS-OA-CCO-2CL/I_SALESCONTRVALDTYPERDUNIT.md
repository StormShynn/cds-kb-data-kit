---
name: I_SALESCONTRVALDTYPERDUNIT
description: Salescontrvaldtyperdunit
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRVALDTYPERDUNIT

**Salescontrvaldtyperdunit**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesContractValidityPerdUnit` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesContrValdtyPerdUnitText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    representativeKey: 'SalesContractValidityPerdUnit',
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S 
        },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION],
    modelingPattern: #ANALYTICAL_DIMENSION
}
@EndUserText.label: 'Sales Contract Validity Period Unit'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCONTRVALPERU'
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.sapObjectNodeType.name: 'SalesContractValidityPerdUnit'
define view I_SalesContrValdtyPerdUnit 
as select from dd07l

association [0..*] to I_SalesContrValdtyPerdUnitText as _Text on $projection.SalesContractValidityPerdUnit = _Text.SalesContractValidityPerdUnit
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as SalesContractValidityPerdUnit ,
    
    _Text
}

where (dd07l.domname = 'KDZEH') and (dd07l.as4local = 'A');
```
