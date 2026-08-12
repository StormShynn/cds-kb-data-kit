---
name: I_SALESCONTRVALDTYPERDUNITTEXT
description: "Salescontrvaldtyperdunittext"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - text-view
  - text
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRVALDTYPERDUNITTEXT

**Salescontrvaldtyperdunittext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContractValidityPerdUnit` | ✓ | |  | `substring(dd07t.domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SalesContrValdtyPerdUnitName` |  | |  | `ddtext` |  |  |
| `_SalesContractValidityPerdUnit` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContractValidityPerdUnit` | `I_SalesContrValdtyPerdUnit` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{
    dataCategory: #TEXT,
    representativeKey: 'SalesContractValidityPerdUnit',
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
        },
    supportedCapabilities: [#SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
}
@EndUserText.label: 'Unit of Sales Contract Validity Period - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCONTRVALPERUT'
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesContrValdtyPerdUnitText
as select from dd07t

association[0..1] to I_SalesContrValdtyPerdUnit as _SalesContractValidityPerdUnit on $projection.SalesContractValidityPerdUnit = _SalesContractValidityPerdUnit.SalesContractValidityPerdUnit
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesContractValidityPerdUnit'
    key substring(dd07t.domvalue_l, 1, 1) as SalesContractValidityPerdUnit,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as SalesContrValdtyPerdUnitName,
    
    //Associations
    _SalesContractValidityPerdUnit,
    _Language
} 
where (domname = 'KDZEH') and (as4local = 'A');
```
