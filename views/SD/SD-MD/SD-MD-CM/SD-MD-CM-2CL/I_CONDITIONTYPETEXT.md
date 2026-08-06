---
name: I_CONDITIONTYPETEXT
description: Conditiontypetext
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONTYPETEXT

**Conditiontypetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `ConditionUsage` | `kvewe` |
| key `ConditionApplication` | `kappl` |
| key `ConditionType` | `kschl` |
| `ConditionTypeName` | `cast(vtext as vtxtm )` |
| `_ConditionApplication` | *Association* |
| `_ConditionUsage` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [0..1] |
| `_ConditionUsage` | `I_ConditionUsage` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICONDITIONTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Condition Type - Text'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 001
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ConditionType'
@Metadata.ignorePropagatedAnnotations:true
define view I_ConditionTypeText
  as select from t685t
  association [0..1] to I_ConditionApplication as _ConditionApplication on $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [0..1] to I_ConditionUsage       as _ConditionUsage       on $projection.ConditionUsage = _ConditionUsage.ConditionUsage
{
      @Semantics.language: true
  key spras                                as Language,
      @ObjectModel.foreignKey.association: '_ConditionUsage'
  key kvewe                                as ConditionUsage,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key kappl                                as ConditionApplication,
  key kschl                                as ConditionType,
      @Semantics.text: true
      cast(vtext as vtxtm )   as ConditionTypeName,
      _ConditionUsage,
      _ConditionApplication
}
```
