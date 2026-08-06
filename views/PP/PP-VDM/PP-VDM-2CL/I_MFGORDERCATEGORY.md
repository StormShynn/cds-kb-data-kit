---
name: I_MFGORDERCATEGORY
description: Mfgordercategory
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
# I_MFGORDERCATEGORY

**Mfgordercategory**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ManufacturingOrderCategory` | `cast( cast(substring(l.domvalue_l, 1, 2) as abap.numc(2) ) as manufacturingordercategory preserving type)` |
| `DomainValue` | `l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MfgOrderCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPMFGORDCAT'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrderCategory'
@ObjectModel.semanticKey: ['ManufacturingOrderCategory']
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'ManufacturingOrderCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Category'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_MfgOrderCategory
  as select from dd07l as l
  association [0..*] to I_MfgOrderCategoryText as _Text on $projection.ManufacturingOrderCategory = _Text.ManufacturingOrderCategory
{
      @ObjectModel.text.association: '_Text'
  key cast( cast(substring(l.domvalue_l, 1, 2) as abap.numc(2) ) as manufacturingordercategory preserving type) as ManufacturingOrderCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
      l.domvalue_l as DomainValue,
      
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
  where l.domname  = 'MANUFACTURINGORDERCATEGORY'
  and   l.as4local = 'A'
  and   l.as4vers  = '0000';
```
