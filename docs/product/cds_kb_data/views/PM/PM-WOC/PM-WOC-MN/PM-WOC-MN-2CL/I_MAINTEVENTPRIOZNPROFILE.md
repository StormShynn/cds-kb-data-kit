---
name: I_MAINTEVENTPRIOZNPROFILE
description: "Maintenance Event Prioritization Profile"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILE')/$value
semantic_en: "Maintenance Event Prioritization Profile"
semantic_vi: "Maintenance Event Prioritization Profile — CDS view giao diện dựa trên eam_prioznprfl."
keywords:
  - "maintenance"
  - "event"
  - "prioritization"
  - "profile"
  - "maint"
  - "config"
  - "deprecation"
  - "code"
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
# I_MAINTEVENTPRIOZNPROFILE

**Maintenance Event Prioritization Profile**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintEvtPrioritizationProfile` | ✓ | |  | `mainteventprioznprfl` | `CHAR(10)` | Prioritization Profile ID |
| `ConfigDeprecationCode` |  | |  | `configurationdeprecationcode` | `CHAR(1)` | Deprecated Entries |
| `_MaintEventPrioznProfileText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintEventPrioznProfileText` | `I_MaintEventPrioznProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTPRIOZNPROFILE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Event Prioritization Profile'
@ObjectModel.representativeKey: 'MaintEvtPrioritizationProfile'
@Analytics.technicalName: 'IMAINTPRIOPRFL'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A  --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S

// for data extraction
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]                                      
@ObjectModel.sapObjectNodeType.name: 'MaintenanceEventPrioznProfile'                                      
@Metadata.ignorePropagatedAnnotations: true
                                      
define view entity I_MaintEventPrioznProfile
  as select from eam_prioznprfl
  association [0..*] to I_MaintEventPrioznProfileText as _MaintEventPrioznProfileText 
   on $projection.MaintEvtPrioritizationProfile = _MaintEventPrioznProfileText.MaintEvtPrioritizationProfile

{
      @ObjectModel.text.association: '_MaintEventPrioznProfileText'
      key mainteventprioznprfl         as MaintEvtPrioritizationProfile,
    //  maintprioritytype            as MaintPriorityType,
      configurationdeprecationcode as ConfigDeprecationCode
      //Associations
     ,_MaintEventPrioznProfileText


}
```
