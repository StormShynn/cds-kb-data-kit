---
name: I_DELIVERYBLOCKREASON
description: Deliveryblockreason
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
  - delivery
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYBLOCKREASON

**Deliveryblockreason**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DeliveryBlockReason` | ✓ | |  | `lifsp` |
| `DeliveryDueListBlock` |  | |  | `spevi` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DeliveryBlockReasonText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'DeliveryBlockReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'DeliveryBlockReason'
@EndUserText.label: 'Delivery Block Reason'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEDELIVBLKRSN'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'DeliveryBlockReason'

define view I_DeliveryBlockReason
  as select from tvls
  association [0..*] to I_DeliveryBlockReasonText as _Text on $projection.DeliveryBlockReason = _Text.DeliveryBlockReason
{
      @ObjectModel.text.association: '_Text'
      @Consumption.filter.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
  key lifsp as DeliveryBlockReason,
      @Consumption.valueHelpDefault.display:false
      spevi as DeliveryDueListBlock,

      @Consumption.filter.hidden: true
      _Text
};
```
