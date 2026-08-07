---
name: I_FINTRANSFLOWCATEGORY
description: "Fintransflowcategory"
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWCATEGORY

**Fintransflowcategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransFlowCategory` | ✓ | |  | `cast( sbktyp as ftr_flow_category preserving type )` |  |  |
| `_FlowCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FlowCategoryText` | `I_FinTransFlowCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFTFLOWCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Flow Category'
@ObjectModel.representativeKey: 'FinTransFlowCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true  
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'FinTransactionFlowCategory'

define view I_FinTransFlowCategory 
  as select from at07
  association [0..*] to I_FinTransFlowCategoryText as _FlowCategoryText on $projection.FinTransFlowCategory = _FlowCategoryText.FinTransFlowCategory
{
  @ObjectModel.text.association: '_FlowCategoryText'
  key cast( sbktyp as ftr_flow_category preserving type ) as FinTransFlowCategory,
  
  _FlowCategoryText  
}
where sbkklas = '1'
  and sbktypb = 'X'
```
