---
name: I_PLANNEDORDERTYPE
description: Planned OrderTYPE
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
  - planned-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERTYPE

**Planned OrderTYPE**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrderType` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 4) as paart preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlannedOrderTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPPLNDORDTYPE'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'PlannedOrderType'
@ObjectModel.semanticKey: ['PlannedOrderType']
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'PlannedOrderType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Planned Order Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_PlannedOrderType
  as select from dd07l as l
  association [0..*] to I_PlannedOrderTypeText as _Text on $projection.PlannedOrderType = _Text.PlannedOrderType 
  {
    @ObjectModel.text.association: '_Text'
    // cast to data element  
    key cast(substring(l.domvalue_l, 1, 4) as paart preserving type) as PlannedOrderType,

    @Consumption.hidden: true
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    l.domvalue_l                                                     as DomainValue,

    // Associations
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
  }
  where l.domname = 'PAART'
    and l.as4local = 'A'
    and l.as4vers  = '0000';
```
