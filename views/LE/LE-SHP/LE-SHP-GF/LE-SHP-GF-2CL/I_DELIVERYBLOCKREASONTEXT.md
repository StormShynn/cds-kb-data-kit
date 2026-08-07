---
name: I_DELIVERYBLOCKREASONTEXT
description: Deliveryblockreasontext
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
# I_DELIVERYBLOCKREASONTEXT

**Deliveryblockreasontext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryBlockReason` | ✓ | |  | `lifsp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `DeliveryBlockReasonText` |  | |  | `vtext` |  |  |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DeliveryBlockReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS 
@Search.searchable: true
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'DeliveryBlockReason'
//Commented by VDM CDS Suite Plugin:@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Delivery Block Reason - Text'
//Commented by VDM CDS Suite Plugin:@Analytics: { dataCategory: #TEXT, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEDELIVBLKRSNT'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_DeliveryBlockReasonText
as
select from tvlst
association [0..1] to I_DeliveryBlockReason as _DeliveryBlockReason on $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
    key lifsp as DeliveryBlockReason,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Consumption.filter.hidden: true
    @Semantics.text:true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    vtext as DeliveryBlockReasonText,
    
    _DeliveryBlockReason,
    _Language
};
```
