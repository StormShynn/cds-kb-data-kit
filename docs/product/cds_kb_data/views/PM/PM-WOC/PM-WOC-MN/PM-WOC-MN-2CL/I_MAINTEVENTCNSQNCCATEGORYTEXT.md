---
name: I_MAINTEVENTCNSQNCCATEGORYTEXT
description: "Consequence Category Maint Event - Text"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYTEXT')/$value
semantic_en: "Consequence Category Maint Event - Text"
semantic_vi: "Consequence Category Maint Event - Text — CDS view giao diện dựa trên eam_cnsqnc_t."
keywords:
  - "consequence"
  - "category"
  - "maint"
  - "event"
  - "text"
  - "language"
  - "cnsqnc"
  - "code"
  - "title"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVENTCNSQNCCATEGORYTEXT

**Consequence Category Maint Event - Text**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `MaintEventCnsqncCategoryCode` | ✓ | |  | `mainteventcnsqnccode` | `NUMC(2)` | Consequence Category ID |
| `MaintEventCnsqncCategoryTitle` |  | |  | `mainteventcnsqnctitle` | `CHAR(40)` | Consequence Category Title |
| `MaintEvtCnsqncCategorySubTitle` |  | |  | `mainteventcnsqncsubtitle` | `CHAR(40)` | Consequence Category Subtitle |
| `_Language` | | ✓ | | | | |
| `_MaintEvtConsequenceCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MaintEvtConsequenceCategory` | `I_MaintEvtConsequenceCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Consequence Category Maint Event - Text'
@ObjectModel.representativeKey: 'MaintEventCnsqncCategoryCode'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A   --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ICNSQNCCATTEXT'

// for data extraction
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintEventCnsqncCategoryText
  as select from eam_cnsqnc_t
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
  association [0..1] to I_MaintEvtConsequenceCategory as _MaintEvtConsequenceCategory on $projection.MaintEventCnsqncCategoryCode = _MaintEvtConsequenceCategory.MaintEventCnsqncCategoryCode


{
      @Semantics.language:true    
      @ObjectModel.foreignKey.association: '_Language'        
  key language                 as Language,
      @ObjectModel.foreignKey.association: '_MaintEvtConsequenceCategory'
  key mainteventcnsqnccode     as MaintEventCnsqncCategoryCode,
      @Semantics.text:true
      mainteventcnsqnctitle    as MaintEventCnsqncCategoryTitle,
      mainteventcnsqncsubtitle as MaintEvtCnsqncCategorySubTitle,

      //Associations
      _Language,
      _MaintEvtConsequenceCategory



}
```
