---
name: I_MATLPROCUREMENTCATEGORY
description: "Matlprocurementcategory"
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
# I_MATLPROCUREMENTCATEGORY

**Matlprocurementcategory**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialProcurementCategory` | ✓ | |  | `cast(substring(cat.domvalue_l, 1, 1) as pph_beskz preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MatlProcurementCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMATLPROCMCAT'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MaterialProcurementCategory'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'MaterialProcurementCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Procurement Category'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_MatlProcurementCategory
  as select from dd07l as cat
  association [0..*] to I_MatlProcurementCategoryText as _Text on $projection.MaterialProcurementCategory = _Text.MaterialProcurementCategory
{
      @ObjectModel.text.association: '_Text'
      // cast to data element
  key cast(substring(cat.domvalue_l, 1, 1) as pph_beskz preserving type) as MaterialProcurementCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      cat.domvalue_l                                                     as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
where cat.domname  = 'BESKZ'
  and cat.as4local = 'A'
  and cat.as4vers  = '0000';
```
