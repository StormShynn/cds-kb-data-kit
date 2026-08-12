---
name: I_FINCNDNCONDITIONCATEGORY
description: "Fincndnconditioncategory"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - pricing-condition
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINCNDNCONDITIONCATEGORY

**Fincndnconditioncategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinConditionConditionCategory` | ✓ | |  | `cast( sbktyp as ftr_cndn_condition_category preserving type )` |  |  |
| `_ConditionCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionCategoryText` | `I_FinCndnConditionCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFCCONDCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Condition Condition Category'
@ObjectModel.representativeKey: 'FinConditionConditionCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'FinTransConditionCategory'

define view I_FinCndnConditionCategory 
  as select from at07
  association [0..*] to I_FinCndnConditionCategoryText as _ConditionCategoryText on $projection.FinConditionConditionCategory = _ConditionCategoryText.FinConditionConditionCategory
{
  @ObjectModel.text.association: '_ConditionCategoryText'
  key cast( sbktyp as ftr_cndn_condition_category preserving type ) as FinConditionConditionCategory,
    
  _ConditionCategoryText  
}
where sbkklas = '1'
  and sbktypk = 'X'
```
