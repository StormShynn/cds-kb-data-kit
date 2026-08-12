---
name: I_CONDITIONTYPE
description: "Conditiontype"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONTYPE

**Conditiontype**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionUsage` | ✓ | |  | `kvewe` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `ConditionType` | ✓ | |  | `kschl` |  |  |
| `_ConditionApplication` | | ✓ | | | | |
| `_ConditionUsage` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [0..1] |
| `_ConditionUsage` | `I_ConditionUsage` | [0..1] |
| `_Text` | `I_ConditionTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICONDITIONTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 001
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'Condition Type'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'ConditionType'
@Metadata.ignorePropagatedAnnotations:true
define view I_ConditionType
  as select from t685
  association [0..1] to I_ConditionApplication as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [0..1] to I_ConditionUsage       as _ConditionUsage       on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage
  association [0..*] to I_ConditionTypeText    as _Text                 on  $projection.ConditionType        = _Text.ConditionType
                                                                        and $projection.ConditionApplication = _Text.ConditionApplication
                                                                        and $projection.ConditionUsage       = _Text.ConditionUsage
{
      @ObjectModel.foreignKey.association: '_ConditionUsage'
  key kvewe as ConditionUsage,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key kappl as ConditionApplication,
      @ObjectModel.text.association: '_Text'
  key kschl as ConditionType,
      //  kozgf as
      _Text,
      _ConditionApplication,
      _ConditionUsage
}
```
