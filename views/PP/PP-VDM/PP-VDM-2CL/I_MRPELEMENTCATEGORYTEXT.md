---
name: I_MRPELEMENTCATEGORYTEXT
description: Mrpelementcategorytext
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
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPELEMENTCATEGORYTEXT

**Mrpelementcategorytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `Language` |
| key `MRPElementCategory` | `MRPElementCategory` |
| `MRPElementCategoryShortName` | `MRPElementCategoryShortName` |
| `MRPElementCategoryName` | `MRPElementCategoryName` |
| `MRPElementCategoryLongName` | `MRPElementCategoryLongName` |
| `_Language` | *Association* |
| `_MRPElementCategoryValue` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IMRPELEMCATTEXT'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {representativeKey: 'MRPElementCategory',
               dataCategory:    #TEXT,
               modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
               resultSet.sizeCategory: #XS,
               supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #LANGUAGE_DEPENDENT_TEXT,
                                       #SEARCHABLE_ENTITY,
                                       #SQL_DATA_SOURCE],
               usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #MIXED}}

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'MRP Element Category - Text'

define view entity I_MRPElementCategoryText
  as select from P_MRPElementCategory
  association to parent I_MRPElementCategory as _MRPElementCategoryValue on $projection.MRPElementCategory = _MRPElementCategoryValue.MRPElementCategory
  association [0..1] to I_Language           as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_MRPElementCategoryValue'
      @ObjectModel.text.element: ['MRPElementCategoryLongName']
  key MRPElementCategory,

      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      MRPElementCategoryShortName,    // CHAR6 text
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      MRPElementCategoryName,         // CHAR10 text
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      MRPElementCategoryLongName,     // CHAR60 text

     // Compositions
      _MRPElementCategoryValue,
      _Language
};
```
