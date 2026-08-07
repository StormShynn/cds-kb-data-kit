---
name: I_SLSCONTRACTVALIDITYPERDCATT
description: "Slscontractvalidityperdcatt"
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
  - contract
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SLSCONTRACTVALIDITYPERDCATT

**Slscontractvalidityperdcatt**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `SlsContractValidityPerdCatName` |  | |  | `bezei` |  |  |
| `_SalesContractValidityPerdCat` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContractValidityPerdCat` | `I_SlsContractValidityPerdCat` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    dataCategory: #TEXT,
    representativeKey: 'SalesContractValidityPerdCat',
    usageType:{
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
        },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
}
@EndUserText.label: 'Validity Period Category of Sales Contract - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog:{
    sqlViewName: 'ISDCTRVALPERCATT',
    buffering:{
        status: #ACTIVE,
        type: #FULL
        }
}
@Metadata.ignorePropagatedAnnotations:true

define view I_SlsContractValidityPerdCatT
as select from tvlzt

association[0..1] to I_SlsContractValidityPerdCat as _SalesContractValidityPerdCat on $projection.SalesContractValidityPerdCat = _SalesContractValidityPerdCat.SalesContractValidityPerdCat
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesContractValidityPerdCat'
    key vlaufk as SalesContractValidityPerdCat, 
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text: true 
    bezei as SlsContractValidityPerdCatName,
    
    //Associations
    _SalesContractValidityPerdCat,
    _Language
};
```
