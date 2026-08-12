---
name: I_SLSCONTRACTVALIDITYPERDCAT
description: "Slscontractvalidityperdcat"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
