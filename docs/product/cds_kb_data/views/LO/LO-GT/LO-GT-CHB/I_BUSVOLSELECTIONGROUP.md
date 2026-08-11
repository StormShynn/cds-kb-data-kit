---
name: I_BUSVOLSELECTIONGROUP
description: "This CDS view exposes fixed values of the Business Volume Selection Groups field. This is a customizing table, values to be input by the user."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUP')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Selection Groups field. This is a customizing table, values to be input by the user."
semantic_vi: "Business Volume Selection Group — CDS view cơ bản dựa trên wb2_c_sel_grp."
keywords:
  - "business"
  - "volume"
  - "selection"
  - "group"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLSELECTIONGROUP

**This CDS view exposes fixed values of the Business Volume Selection Groups field. This is a customizing table, values to be input by the user.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolSelectionGroup` | ✓ | |  | `selection_group` | `CHAR(4)` | Selection Group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusVolSelectionGroupText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUP')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IBUSVOLSELGRP',
  compiler.compareFilter: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 001
  },
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'BusVolSelectionGroup',
   sapObjectNodeType.name: 'BusinessVolumeSelectionGroup',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities : [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@EndUserText.label: 'Business Volume Selection Group'
@Metadata.ignorePropagatedAnnotations: true

define view I_BusVolSelectionGroup
  as select from wb2_c_sel_grp as BusVolSelectionGroup
  association [0..*] to I_BusVolSelectionGroupText as _Text on $projection.BusVolSelectionGroup = _Text.BusVolSelectionGroup
{
      @ObjectModel.text.association: '_Text'
  key BusVolSelectionGroup.selection_group as BusVolSelectionGroup,

      //Associations
      _Text
}
```
