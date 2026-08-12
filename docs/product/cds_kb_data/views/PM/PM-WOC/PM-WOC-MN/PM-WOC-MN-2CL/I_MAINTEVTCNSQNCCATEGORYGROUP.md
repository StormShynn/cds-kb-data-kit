---
name: I_MAINTEVTCNSQNCCATEGORYGROUP
description: "Cons Categ Group of Maint Event"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
