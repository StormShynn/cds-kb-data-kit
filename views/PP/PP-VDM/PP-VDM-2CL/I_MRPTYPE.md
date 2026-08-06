---
name: I_MRPTYPE
description: Mrptype
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPTYPE

**Mrptype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MRPType` | `typ.dismm` |
| `MRPProcedure` | `typ.disvf` |
| `_Text` | *Association* |
| `_MRPProcedure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MRPTypeText` | [0..*] |
| `_MRPProcedure` | `I_MRPProcedure` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPType'
@ObjectModel.semanticKey: ['MRPType']
@ObjectModel.sapObjectNodeType.name: 'MRPType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MRPType
  as select from t438a as typ
    
  association [0..*] to I_MRPTypeText  as _Text         on $projection.MRPType = _Text.MRPType
  association [0..1] to I_MRPProcedure as _MRPProcedure on $projection.MRPProcedure  = _MRPProcedure .MRPProcedure
{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key typ.dismm as MRPType,
      @ObjectModel.foreignKey.association: '_MRPProcedure'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPProcedure'
      typ.disvf as MRPProcedure,

      // Associations
      _MRPProcedure,
      _Text
};
```
