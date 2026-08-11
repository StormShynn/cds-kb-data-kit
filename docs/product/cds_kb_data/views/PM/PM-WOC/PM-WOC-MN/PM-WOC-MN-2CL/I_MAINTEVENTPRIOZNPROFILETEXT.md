---
name: I_MAINTEVENTPRIOZNPROFILETEXT
description: "Prioritization Profile Maint Evnt - Text"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILETEXT')/$value
semantic_en: "Prioritization Profile Maint Evnt - Text"
semantic_vi: "Prioritization Profile Maint Evnt - Text — CDS view giao diện dựa trên eam_prioznprfl_t."
keywords:
  - "prioritization"
  - "profile"
  - "maint"
  - "evnt"
  - "text"
  - "language"
  - "event"
  - "priozn"
  - "label"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVENTPRIOZNPROFILETEXT

**Prioritization Profile Maint Evnt - Text**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `MaintEvtPrioritizationProfile` | ✓ | |  | `mainteventprioznprfl` | `CHAR(10)` | Prioritization Profile ID |
| `MaintEventPrioznProfileLabel` |  | |  | `mainteventprioznprfllabel` | `CHAR(40)` | Prioritization Profile Name |
| `_Language` | | ✓ | | | | |
| `_MaintEventPrioznProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MaintEventPrioznProfile` | `I_MaintEventPrioznProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Prioritization Profile Maint Evnt - Text'
@ObjectModel.representativeKey: 'MaintEvtPrioritizationProfile'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A   --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMAINTPRIOPRFLT'

// for data extraction
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintEventPrioznProfileText
  as select from eam_prioznprfl_t

  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_MaintEventPrioznProfile as _MaintEventPrioznProfile on $projection.MaintEvtPrioritizationProfile = _MaintEventPrioznProfile.MaintEvtPrioritizationProfile

{

      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key language                  as Language,
      @ObjectModel.foreignKey.association: '_MaintEventPrioznProfile'
  key mainteventprioznprfl      as MaintEvtPrioritizationProfile,
      @Semantics.text:true
      mainteventprioznprfllabel as MaintEventPrioznProfileLabel,

      //Associations
      _Language,
      _MaintEventPrioznProfile


}
```
