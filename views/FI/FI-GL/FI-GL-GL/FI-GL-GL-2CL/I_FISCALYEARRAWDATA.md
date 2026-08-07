---
name: I_FISCALYEARRAWDATA
description: Fiscalyearrawdata
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-2CL
  - lob:Finance
---
# I_FISCALYEARRAWDATA

**Fiscalyearrawdata**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  | `cast( t009c.periv as fis_periv preserving type )` |  |  |
| `FiscalYear` | ✓ | |  | `cast( t009c.bdatj as fins_gjahr_no_conv preserving type )` |  |  |
| `_FiscalYearVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Fiscal Year Raw Data'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING 

@Analytics.internalName: #LOCAL  

@ObjectModel.representativeKey: 'FiscalYear'
@Analytics.technicalName: 'IFIFSCLYEARRD' 
@Analytics:{
//    dataCategory: #DIMENSION,
    dataExtraction: { enabled: true } }
    
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
                                     
define view entity I_FiscalYearRawData as select distinct from t009c 

association [0..1] to I_FiscalYearVariant as _FiscalYearVariant on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant

{
@ObjectModel.foreignKey.association: '_FiscalYearVariant'  
key cast( t009c.periv as fis_periv preserving type )     as FiscalYearVariant,
key cast( t009c.bdatj as fins_gjahr_no_conv preserving type )  as FiscalYear,

_FiscalYearVariant
}
```
