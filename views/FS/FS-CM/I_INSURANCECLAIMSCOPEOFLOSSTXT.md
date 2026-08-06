---
name: I_INSURANCECLAIMSCOPEOFLOSSTXT
description: Insuranceclaimscopeoflosstxt
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
# I_INSURANCECLAIMSCOPEOFLOSSTXT

**Insuranceclaimscopeoflosstxt**

| Property | Value |
|---|---|
| App Component | `FS-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `langu` |
| key `InsurClmDamageCategory` | `damcat` |
| key `InsurClmScopeOfLoss` | `losstype` |
| `InsurClmScopeOfLossTxt` | `name` |
| `_DamageCategory` | *Association* |
| `_Language` | *Association* |
| `_ScopeOfLoss` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DamageCategory` | `I_InsuranceClaimDamageCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Insur Clm Scope Of Loss - Txt'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
              representativeKey: 'InsurClmScopeOfLoss',
              
              //  sapObjectNodeType.name: '',
                dataCategory: #TEXT,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER],
                usageType: {
                            serviceQuality: #A,
                            dataClass: #CUSTOMIZING,
                            sizeCategory: #S
                            }
}
@Analytics.technicalName: 'IScopeOfLossTxt'
@Metadata.ignorePropagatedAnnotations: true
@VDM : {
          lifecycle.contract.type: #PUBLIC_LOCAL_API,
          viewType: #BASIC
}
@OData.entityType.name: 'InsurClaimScopeOfLossTxt_Type' 
define view entity I_InsuranceClaimScopeOfLossTxt
  as select from ticl101t
  association to parent I_InsuranceClaimScopeOfLoss as _ScopeOfLoss       on $projection.InsurClmScopeOfLoss    = _ScopeOfLoss.InsurClmScopeOfLoss
                                                                         and $projection.InsurClmDamageCategory = _ScopeOfLoss.InsurClmDamageCategory
  association [0..1] to I_InsuranceClaimDamageCategory as _DamageCategory on $projection.InsurClmDamageCategory = _DamageCategory.InsurClmDamageCategory
  association [0..1] to I_Language as _Language                           on ticl101t.langu = _Language.Language
{

       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  langu as Language,
       @ObjectModel.foreignKey.association: '_DamageCategory'
  key  damcat as InsurClmDamageCategory,
       @ObjectModel.text.element: ['InsurClmScopeOfLossTxt']
  key  losstype as InsurClmScopeOfLoss,       
       @Semantics.text: true
       name as InsurClmScopeOfLossTxt,
       //Associations
       _Language,
       _ScopeOfLoss,
       _DamageCategory
}
```
