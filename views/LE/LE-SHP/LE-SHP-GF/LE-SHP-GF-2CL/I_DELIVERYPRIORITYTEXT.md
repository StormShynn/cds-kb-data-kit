---
name: I_DELIVERYPRIORITYTEXT
description: Deliveryprioritytext
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - delivery
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYPRIORITYTEXT

**Deliveryprioritytext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DeliveryPriority` | ✓ | |  | `lprio` |
| `Language` | ✓ | |  | `spras` |
| `DeliveryPriorityDesc` |  | |  | `bezei` |
| `_DeliveryPriority` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryPriority` | `I_DeliveryPriority` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'DeliveryPriorityText'
@ObjectModel.representativeKey: 'DeliveryPriority'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Priority - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEDELIVPRIOT'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@Search.searchable: true

define view I_DeliveryPriorityText
as select from
tprit
association [0..1] to I_DeliveryPriority as _DeliveryPriority on $projection.DeliveryPriority = _DeliveryPriority.DeliveryPriority
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_DeliveryPriority'
    key lprio as DeliveryPriority,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text:true
    bezei as DeliveryPriorityDesc,

    //Associations
    _DeliveryPriority,
    _Language
};
```
