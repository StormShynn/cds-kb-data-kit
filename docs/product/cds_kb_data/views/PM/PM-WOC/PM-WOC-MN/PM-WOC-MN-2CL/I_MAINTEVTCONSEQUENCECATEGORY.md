---
name: I_MAINTEVTCONSEQUENCECATEGORY
description: "Consequence category of Maint Event"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCONSEQUENCECATEGORY')/$value
semantic_en: "Consequence category of Maint Event"
semantic_vi: "Consequence category of Maint Event — CDS view giao diện dựa trên eam_cnsqnc."
keywords:
  - "consequence"
  - "category"
  - "maint"
  - "event"
  - "cnsqnc"
  - "code"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVTCONSEQUENCECATEGORY

**Consequence category of Maint Event**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCONSEQUENCECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintEventCnsqncCategoryCode` | ✓ | |  | `mainteventcnsqnccode` | `NUMC(2)` | Consequence Category ID |
| `_MaintEventCnsqncCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintEventCnsqncCategoryText` | `I_MaintEventCnsqncCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCONSEQUENCECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVTCONSEQUENCECATEGORY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Consequence category of Maint Event'
@ObjectModel.representativeKey: 'MaintEventCnsqncCategoryCode'
@Analytics.technicalName: 'IMAINTEVTCNSCAT'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A   --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S

// for data extraction
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'MaintEventCnsqncCategory'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintEvtConsequenceCategory
  as select from eam_cnsqnc
  association [0..*] to I_MaintEventCnsqncCategoryText as _MaintEventCnsqncCategoryText 
      on $projection.MaintEventCnsqncCategoryCode = _MaintEventCnsqncCategoryText.MaintEventCnsqncCategoryCode

{
      @ObjectModel.text.association: '_MaintEventCnsqncCategoryText'
  key mainteventcnsqnccode as MaintEventCnsqncCategoryCode,
      //Associations
      _MaintEventCnsqncCategoryText

}
```
