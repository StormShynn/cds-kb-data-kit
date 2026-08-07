---
name: I_CNDNCONTRBUSVOLTBLGRP
description: Cndncontrbusvoltblgrp
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRBUSVOLTBLGRP

**Cndncontrbusvoltblgrp**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolTableGroup` | ✓ | |  | `bvtab_group` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CndnContrBusVolTblGrpText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Business Volume Table Group'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'BusVolTableGroup',
  sapObjectNodeType.name: 'BusinessVolumeTableGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@Metadata.ignorePropagatedAnnotations:true
define view entity I_CndnContrBusVolTblGrp
  as select from wb2_c_bvtab_grp
  association [0..*] to I_CndnContrBusVolTblGrpText as _Text on $projection.BusVolTableGroup = _Text.BusVolTableGroup
{
      @ObjectModel.text.association: '_Text'
  key bvtab_group as BusVolTableGroup,
      //Associations
      _Text
}
```
