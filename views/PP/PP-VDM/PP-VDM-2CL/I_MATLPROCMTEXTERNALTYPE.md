---
name: I_MATLPROCMTEXTERNALTYPE
description: Matlprocmtexternaltype
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
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MATLPROCMTEXTERNALTYPE

**Matlprocmtexternaltype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaterialProcurementExtType` | `typ.MaterialProcurementExtType` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MatlProcmtExternalTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMATPROCMTEXTTYP'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'MaterialProcurementExtType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Material Procurement External Type'

/*+[hideWarning] { "IDS" : ["KEY_CHECK"]  } */
define view entity I_MatlProcmtExternalType
  as select distinct from I_MatlProcmtExternalTypeText as typ

  association [0..*] to I_MatlProcmtExternalTypeText as _Text on $projection.MaterialProcurementExtType = _Text.MaterialProcurementExtType
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key typ.MaterialProcurementExtType,

      // Associations
      _Text
};
```
