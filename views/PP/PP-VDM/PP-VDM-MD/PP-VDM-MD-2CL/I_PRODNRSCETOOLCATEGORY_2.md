---
name: I_PRODNRSCETOOLCATEGORY_2
description: Prodnrscetoolcategory 2
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLCATEGORY_2

**Prodnrscetoolcategory 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdnRsceToolCategory` | ✓ | |  | `cast(fhmar as mpe_fhmar preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdnRsceToolCategoryText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTCATEGORY2'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProdnRsceToolCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Tool Category'
@ObjectModel.sapObjectNodeType.name: 'ProductionResourceToolCategory'
@Analytics.dataExtraction.enabled: true
// Sucessor of I_ProdnRsceToolCategory w/o conversion exit of key field

define view I_ProdnRsceToolCategory_2 as select from tcf02 

    association [0..*] to I_ProdnRsceToolCategoryText_2 as _Text on $projection.ProdnRsceToolCategory = _Text.ProdnRsceToolCategory

{
    @ObjectModel.text.association: '_Text'
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    key cast(fhmar as mpe_fhmar preserving type) as ProdnRsceToolCategory,
     
    // Associations
    _Text  
};
```
