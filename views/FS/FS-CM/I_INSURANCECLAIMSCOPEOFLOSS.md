---
name: I_INSURANCECLAIMSCOPEOFLOSS
description: Insuranceclaimscopeofloss
app_component: FS-CM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-CM
  - interface-view
  - component:FS-CM
  - lob:Other
---
# I_INSURANCECLAIMSCOPEOFLOSS

**Insuranceclaimscopeofloss**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InsurClmDamageCategory` | ✓ | |  | `damcat` |
| `InsurClmScopeOfLoss` | ✓ | |  | `losstype` |
| `_DamageCategory` | | ✓ | | |
| `_ClaimScopeOfLossTxt` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DamageCategory` | `I_InsuranceClaimDamageCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Insurance Claim Scope Of Loss'
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICScopeOfLoss'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'InsurClmScopeOfLoss',
  sapObjectNodeType.name: 'InsuranceClaimScopeOfLoss', 
  resultSet.sizeCategory: #XS,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
define root view entity I_InsuranceClaimScopeOfLoss as select from ticl101 
    composition [0..*] of I_InsuranceClaimScopeOfLossTxt as _ClaimScopeOfLossTxt
    
  association [0..1] to I_InsuranceClaimDamageCategory as _DamageCategory on $projection.InsurClmDamageCategory = _DamageCategory.InsurClmDamageCategory
{
  @ObjectModel.foreignKey.association: '_DamageCategory'
  key damcat  as InsurClmDamageCategory,
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key losstype as InsurClmScopeOfLoss,
  
  //Associations
  _ClaimScopeOfLossTxt,
  _DamageCategory  
}
```
