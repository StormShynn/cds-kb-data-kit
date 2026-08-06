---
name: I_ADDLCOMPANYCODEINFORMATION
description: ADDLCompany CodeINFORMATION
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
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_ADDLCOMPANYCODEINFORMATION

**ADDLCompany CodeINFORMATION**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `t001z.bukrs` |
| key `CompanyCodeParameterType` | `t001z.party` |
| `CompanyCodeParameterValue` | `t001z.paval` |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Additional Specifications for Company Code'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOMPCODEADDLINF'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: { usageType.sizeCategory: #S,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CompanyCodeParameterType' }   
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey:true



define view I_AddlCompanyCodeInformation as select from t001z
 
association [0..1] to I_CompanyCode       as _CompanyCode        on $projection.CompanyCode = _CompanyCode.CompanyCode

{
    @ObjectModel.foreignKey.association: '_CompanyCode'
    key t001z.bukrs as CompanyCode,
    key t001z.party as CompanyCodeParameterType,
        t001z.paval as CompanyCodeParameterValue,
        
    _CompanyCode
}
```
