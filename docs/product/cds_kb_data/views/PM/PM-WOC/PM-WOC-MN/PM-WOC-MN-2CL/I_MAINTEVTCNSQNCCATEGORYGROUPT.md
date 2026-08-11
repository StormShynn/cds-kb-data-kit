---
name: I_MAINTEVTCNSQNCCATEGORYGROUPT
description: "Cons Categ Group of Maint Event - Text"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUPT')/$value
semantic_en: "Cons Categ Group of Maint Event - Text"
semantic_vi: "Cons Categ Group of Maint Event - Text — CDS view giao diện dựa trên eam_cnsqncid_t."
keywords:
  - "cons"
  - "categ"
  - "group"
  - "maint"
  - "event"
  - "text"
  - "language"
  - "consequence"
  - "cnsqnc"
  - "category"
  - "desc"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVTCNSQNCCATEGORYGROUPT

**Cons Categ Group of Maint Event - Text**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUPT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `MaintEventConsequenceGroup` | ✓ | |  | `mainteventcnsqnc` | `CHAR(10)` | Consequence Category Group ID |
| `MaintEvtCnsqncCategoryGrpDesc` |  | |  | `mainteventcnsqncdescription` | `CHAR(70)` | Consequence Category Description |
| `_Language` | | ✓ | | | | |
| `_MaintEvtCnsqncCategoryGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MaintEvtCnsqncCategoryGroup` | `I_MaintEvtCnsqncCategoryGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUPT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCNSQNCCATEGORYGROUPT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cons Categ Group of Maint Event - Text'

@VDM.viewType: #BASIC

@ObjectModel: {
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S },
  dataCategory: #TEXT,
  representativeKey: 'MaintEventConsequenceGroup',
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT }

@Analytics.technicalName: 'IMAINTEVTCNSCATGRT'

@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintEvtCnsqncCategoryGroupT
  as select from eam_cnsqncid_t

  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
  association [0..1] to I_MaintEvtCnsqncCategoryGroup as _MaintEvtCnsqncCategoryGroup on $projection.MaintEventConsequenceGroup = _MaintEvtCnsqncCategoryGroup.MaintEventConsequenceGroup

{
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key language                    as Language,
      @ObjectModel.foreignKey.association: '_MaintEvtCnsqncCategoryGroup'
  key mainteventcnsqnc            as MaintEventConsequenceGroup,
      @Semantics.text:true
      mainteventcnsqncdescription as MaintEvtCnsqncCategoryGrpDesc,

      _Language,
      _MaintEvtCnsqncCategoryGroup
}
```
