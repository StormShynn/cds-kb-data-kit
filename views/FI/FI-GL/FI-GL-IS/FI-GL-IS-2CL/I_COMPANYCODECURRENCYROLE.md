---
name: I_COMPANYCODECURRENCYROLE
description: "Company CodeCURRENCYROLE"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - company-code
  - currency
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_COMPANYCODECURRENCYROLE

**Company CodeCURRENCYROLE**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CurrencyRole` | ✓ | |  | `curtype` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `_Currency` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CurrencyRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CurrencyRole` | `I_CurrencyRole` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IFICCCUR' 
@VDM.viewType: #BASIC
@EndUserText.label: 'Currency Role of Company Code'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true }    
@ObjectModel: { usageType.sizeCategory: #S,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #A,
                representativeKey: 'CurrencyRole',
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'CompanyCodeCurrencyRole'  }                  
@Metadata.ignorePropagatedAnnotations: true

define view entity I_Companycodecurrencyrole as select from finsc_001a_rep as comp_finsc_001a

association [0..1] to I_Currency     as _Currency     on comp_finsc_001a.waers = _Currency.Currency 
association [0..1] to I_CompanyCode  as _CompanyCode  on comp_finsc_001a.bukrs = _CompanyCode.CompanyCode 
association [0..1] to I_CurrencyRole as _CurrencyRole on comp_finsc_001a.curtype = _CurrencyRole.CurrencyRole 
{
@ObjectModel.foreignKey.association: '_CompanyCode'
 key comp_finsc_001a.bukrs as CompanyCode,
 @ObjectModel.foreignKey.association: '_CurrencyRole'
 key comp_finsc_001a.curtype as CurrencyRole, 
 comp_finsc_001a.waers as Currency,
      
_CompanyCode,
_CurrencyRole,
_Currency
}
```
