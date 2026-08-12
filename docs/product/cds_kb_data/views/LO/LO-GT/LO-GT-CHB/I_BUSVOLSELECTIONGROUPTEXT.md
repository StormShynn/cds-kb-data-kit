---
name: I_BUSVOLSELECTIONGROUPTEXT
description: "This CDS view exposes fixed values of the Business Volume Selection Groups field. This is a customizing table, values to be input by the user."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUPTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Business Volume Selection Groups field. This is a customizing table, values to be input by the user."
semantic_vi: "Business Volume Selection Group - Text — CDS view cơ bản dựa trên wb2_c_sel_grpt."
keywords:
  - "business"
  - "volume"
  - "selection"
  - "group"
  - "text"
  - "language"
  - "field"
  - "combn"
  - "type"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLSELECTIONGROUPTEXT

**This CDS view exposes fixed values of the Business Volume Selection Groups field. This is a customizing table, values to be input by the user.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BusVolSelectionGroup` | ✓ | |  | `selection_group` | `CHAR(4)` | Selection Group |
| `BusVolFieldCombnTypeDesc` |  | |  | `text` | `CHAR(40)` | Description |
| `_BusVolSelectionGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolSelectionGroup` | `I_BusVolSelectionGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLSELECTIONGROUPTEXT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IBUSVOLSELGRPT',
  compiler.compareFilter: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 002
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
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE],
   dataCategory: #TEXT,
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
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@EndUserText.label: 'Business Volume Selection Group - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_BusVolSelectionGroupText
  as select from wb2_c_sel_grpt
  association [0..1] to I_BusVolSelectionGroup as _BusVolSelectionGroup on $projection.BusVolSelectionGroup = _BusVolSelectionGroup.BusVolSelectionGroup
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras           as Language,
      @ObjectModel.foreignKey.association: '_BusVolSelectionGroup'
  key selection_group as BusVolSelectionGroup,
      @Semantics.text: true
      text            as BusVolFieldCombnTypeDesc,

      //Associations
      _BusVolSelectionGroup,
      _Language

}
```
