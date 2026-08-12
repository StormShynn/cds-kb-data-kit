---
name: I_COLLECTIONGROUP
description: "Collectiongroup"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_COLLECTIONGROUP

**Collectiongroup**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionGroup` | ✓ | |  | `cast(coll_group as udm_coll_group preserving type)` |  |  |
| `CollectionStrategy` |  | |  | `coll_strategy` |  |  |
| `_Text` | | ✓ | | | | |
| `_CollectionsStrategy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollectionGroupText` | [0..*] |
| `_CollectionsStrategy` | `I_CollectionsStrategy` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Collection Group'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOLLGRP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CollectionGroup'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CollectionsGroup'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_CollectionGroup
  as select from udm_coll_grp
  association [0..*] to I_CollectionGroupText as _Text on $projection.CollectionGroup = _Text.CollectionGroup
  association [0..1] to I_CollectionsStrategy as _CollectionsStrategy on $projection.CollectionStrategy = _CollectionsStrategy.CollectionStrategy
{
      @ObjectModel.text.association: '_Text'
  key cast(coll_group as udm_coll_group preserving type) as CollectionGroup,
      coll_strategy                                      as CollectionStrategy,
      _Text,
      _CollectionsStrategy

};
```
