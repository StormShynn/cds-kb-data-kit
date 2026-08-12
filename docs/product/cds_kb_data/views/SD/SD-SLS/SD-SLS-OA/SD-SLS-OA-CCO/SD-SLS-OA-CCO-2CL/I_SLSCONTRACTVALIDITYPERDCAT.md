---
name: I_SLSCONTRACTVALIDITYPERDCAT
description: "Slscontractvalidityperdcat"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - contract
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SLSCONTRACTVALIDITYPERDCAT

**Slscontractvalidityperdcat**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContractValidityPerdCat` | ✓ | |  | `vlaufk` |  |  |
| `NmbrOfSalesContractValdtyPerd` |  | |  | `vlaufz` |  |  |
| `SalesContractValidityPerdUnit` |  | |  | `vlauez` |  |  |
| `_Text` | | ✓ | | | | |
| `_SalesContractValidityPerdUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsContractValidityPerdCatT` | [0..*] |
| `_SalesContractValidityPerdUnit` | `I_SalesContrValdtyPerdUnit` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    representativeKey: 'SalesContractValidityPerdCat',
    usageType:{
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S 
        },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION],
    modelingPattern: #ANALYTICAL_DIMENSION
}
@EndUserText.label: 'Sales Contract Validity Period Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
    sqlViewName: 'ISDCTRVALPERCAT',
    buffering:{
        status: #ACTIVE,
        type: #FULL
        }
}
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'SalesContractValidityPerdCat'
define view I_SlsContractValidityPerdCat
as select from tvlz

association [0..*] to I_SlsContractValidityPerdCatT as _Text on $projection.SalesContractValidityPerdCat  = _Text.SalesContractValidityPerdCat
association [0..1] to I_SalesContrValdtyPerdUnit as _SalesContractValidityPerdUnit on $projection.SalesContractValidityPerdUnit  = _SalesContractValidityPerdUnit.SalesContractValidityPerdUnit
{
    @ObjectModel.text.association: '_Text'
    key vlaufk as SalesContractValidityPerdCat ,
    vlaufz as NmbrOfSalesContractValdtyPerd,
    @ObjectModel.foreignKey.association: '_SalesContractValidityPerdUnit'
    vlauez as SalesContractValidityPerdUnit,
    
    _Text,
    _SalesContractValidityPerdUnit
};
```
