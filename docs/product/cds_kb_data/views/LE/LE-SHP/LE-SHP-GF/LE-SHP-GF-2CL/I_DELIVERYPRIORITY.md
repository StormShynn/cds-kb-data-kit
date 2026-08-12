---
name: I_DELIVERYPRIORITY
description: "Deliverypriority"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYPRIORITY

**Deliverypriority**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryPriority` | ✓ | |  | `lprio` |  |  |
| `DeliveryPriorityDesc` |  | |  | `cast(_Text[1: Language=$session.system_language].DeliveryPriorityDesc as bezei30)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DeliveryPriorityText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'DeliveryPriority'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@EndUserText.label: 'Delivery Priority'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEDELIVPRIO'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'DeliveryPriority'

define view I_DeliveryPriority
  as select from tprio
  association [0..*] to I_DeliveryPriorityText as _Text on $projection.DeliveryPriority = _Text.DeliveryPriority
{
    @Search.defaultSearchElement:true
    @ObjectModel.text.association: '_Text'
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    key lprio                                                                         as DeliveryPriority,

    cast(_Text[1: Language=$session.system_language].DeliveryPriorityDesc as bezei30) as DeliveryPriorityDesc,

    _Text
};
```
