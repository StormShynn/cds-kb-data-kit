---
name: I_PRODNRSCETOOLCATEGORY
description: "Prodnrscetoolcategory"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PRODNRSCETOOLCATEGORY

**Prodnrscetoolcategory**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdnRsceToolCategory` | ✓ | |  | `fhmar` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdnRsceToolCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTCATEGORY'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'ProdnRsceToolCategory'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.lifecycle.status: #DEPRECATED  // conversion exit on key field FHMAR
@VDM.lifecycle.successor: 'I_ProdnRsceToolCategory_2'
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Tool Category'

define view I_ProdnRsceToolCategory as select from tcf02 

    association [0..*] to I_ProdnRsceToolCategoryText as _Text on $projection.ProdnRsceToolCategory = _Text.ProdnRsceToolCategory

{
    @ObjectModel.text.association: '_Text'
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    key fhmar as ProdnRsceToolCategory,
     
    // Associations
    _Text  
};
```
