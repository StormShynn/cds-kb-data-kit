---
name: I_MAINTEVTCNSQNCCATEGORYGROUP
description: "Cons Categ Group of Maint Event"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUP')/$value
semantic_en: "Cons Categ Group of Maint Event"
semantic_vi: "Cons Categ Group of Maint Event — CDS view giao diện dựa trên eam_cnsqncid."
keywords:
  - "cons"
  - "categ"
  - "group"
  - "maint"
  - "event"
  - "consequence"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVTCNSQNCCATEGORYGROUP

**Cons Categ Group of Maint Event**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintEventConsequenceGroup` | ✓ | |  | `mainteventcnsqnc` | `CHAR(10)` | Consequence Category Group ID |
| `_MaintEvtCnsqncCategoryGroupT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintEvtCnsqncCategoryGroupT` | `I_MaintEvtCnsqncCategoryGroupT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUP')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cons Categ Group of Maint Event'

@VDM.viewType: #BASIC

@ObjectModel: {
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S },
  representativeKey: 'MaintEventConsequenceGroup',
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #ANALYTICAL_DIMENSION }

@Analytics: {
  technicalName: 'IMAINTEVTCNSCATGR',
  dataCategory: #DIMENSION,
  internalName: #LOCAL }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintEvtCnsqncCategoryGroup
  as select from eam_cnsqncid

  association [0..*] to I_MaintEvtCnsqncCategoryGroupT as _MaintEvtCnsqncCategoryGroupT on $projection.MaintEventConsequenceGroup = _MaintEvtCnsqncCategoryGroupT.MaintEventConsequenceGroup

{
      @ObjectModel.text.association: '_MaintEvtCnsqncCategoryGroupT'
  key mainteventcnsqnc as MaintEventConsequenceGroup,

      _MaintEvtCnsqncCategoryGroupT
}
```
