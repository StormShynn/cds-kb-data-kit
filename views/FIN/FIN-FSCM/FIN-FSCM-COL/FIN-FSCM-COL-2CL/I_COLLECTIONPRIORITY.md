---
name: I_COLLECTIONPRIORITY
description: Collectionpriority
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - collection
  - component:FIN-FSCM-COL-2CL
  - lob:Other
---
# I_COLLECTIONPRIORITY

**Collectionpriority**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CollectionPriority` | ✓ | |  | `cast(priority as udm_coll_priority preserving type)` |
| `ValuationThresholdPercent` |  | |  | `percentage_from` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollectionPriorityText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Collection Priority'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOLLPRIO'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CollectionPriority'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CollectionsPriority'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_CollectionPriority
  as select from udm_coll_prio
  association [0..*] to I_CollectionPriorityText as _Text on $projection.CollectionPriority = _Text.CollectionPriority
{
      @ObjectModel.text.association: '_Text'
  key cast(priority as udm_coll_priority preserving type) as CollectionPriority,
      percentage_from                                     as ValuationThresholdPercent,
      _Text
};
```
