---
name: I_INSURANCECLAIMSCOPEOFLOSSTXT
description: "Insuranceclaimscopeoflosstxt"
app_component: FS-CM
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `InsurClmDamageCategory` | ✓ | |  | `damcat` |  |  |
| `InsurClmScopeOfLoss` | ✓ | |  | `losstype` |  |  |
| `InsurClmScopeOfLossTxt` |  | |  | `name` |  |  |
| `_DamageCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ScopeOfLoss` | | ✓ | | | | |

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
