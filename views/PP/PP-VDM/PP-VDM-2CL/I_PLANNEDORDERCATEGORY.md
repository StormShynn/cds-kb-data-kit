---
name: I_PLANNEDORDERCATEGORY
description: Planned OrderCATEGORY
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
# I_PLANNEDORDERCATEGORY

**Planned OrderCATEGORY**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrderCategory` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as plannedordercategory preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlannedOrderCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPPLNDORDCAT'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'PlannedOrderCategory'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Planned Order Category Code'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_PlannedOrderCategory
  as select from dd07l as l
  
  association [0..*] to I_PlannedOrderCategoryText as _Text on $projection.PlannedOrderCategory = _Text.PlannedOrderCategory 
  {
    @ObjectModel.text.association: '_Text'
    // cast to data element  
    key cast(substring(l.domvalue_l, 1, 1) as plannedordercategory preserving type) as PlannedOrderCategory,
    
    @Consumption.hidden: true
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    l.domvalue_l                                                                    as DomainValue,

    // Associations
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]  
    _Text
  }
  where l.domname    = 'OBART' and
      ( l.domvalue_l = '1' or 
        l.domvalue_l = '6' ) and  //Planned Order categories only
        l.as4local   = 'A' and 
        l.as4vers  = '0000';
```
