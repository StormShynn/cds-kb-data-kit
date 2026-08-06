---
name: I_FINCNDNCONDITIONCATEGORYTEXT
description: Fincndnconditioncategorytext
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINCNDNCONDITIONCATEGORYTEXT

**Fincndnconditioncategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `FinConditionConditionCategory` | `cast( sbktyp as ftr_cndn_condition_category preserving type )` |
| `FinCndnConditionCategoryName` | `xbktyp` |
| `_Language` | *Association* |
| `_ConditionCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ConditionCategory` | `I_FinCndnConditionCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFCCONDCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Condition Condition Category - Text'
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'FinConditionConditionCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
define view I_FinCndnConditionCategoryText 
  as select from at07t
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language
  association [0..1] to I_FinCndnConditionCategory as _ConditionCategory on $projection.FinConditionConditionCategory = _ConditionCategory.FinConditionConditionCategory
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,
  @ObjectModel.foreignKey.association: '_ConditionCategory'
  key cast( sbktyp as ftr_cndn_condition_category preserving type ) as FinConditionConditionCategory,
  
  @Semantics.text: true
  xbktyp     as FinCndnConditionCategoryName,
  
  _Language,
  _ConditionCategory
}
where sbkklas = '1'
```
