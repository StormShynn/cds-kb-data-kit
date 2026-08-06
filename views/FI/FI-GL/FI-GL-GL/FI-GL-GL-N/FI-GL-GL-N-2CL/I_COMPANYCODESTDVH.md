---
name: I_COMPANYCODESTDVH
description: Company CodeSTDVH
app_component: FI-GL-GL-N-2CL
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
  - value-help
  - standard-value-help
  - company-code
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_COMPANYCODESTDVH

**Company CodeSTDVH**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `t001.bukrs` |
| `CompanyCodeName` | `t001.butxt` |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFICC__VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@VDM.viewType: #BASIC

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'CompanyCode',
                usageType.sizeCategory: #S,
                usageType.dataClass: #ORGANIZATIONAL,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Company Code'
define view I_CompanyCodeStdVH as select from t001 // direct select from T001 as field f_obsolete to be used in where condition
  
left outer to one join  P_UserParameter
//  on t001.mandt = P_UserParameter.mandt 
  on P_UserParameter.UserParameter = 'F_SHOW_OBSOLETE_T001'
{
  @ObjectModel.text.element: ['CompanyCodeName']
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key t001.bukrs    as CompanyCode,
  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #LOW }
  t001.butxt    as CompanyCodeName
} where P_UserParameter.UserParameterValue = 'X' or t001.f_obsolete <> 'X'
```
