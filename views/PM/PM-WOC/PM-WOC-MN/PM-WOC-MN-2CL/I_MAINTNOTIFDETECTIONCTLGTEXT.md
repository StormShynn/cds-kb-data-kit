---
name: I_MAINTNOTIFDETECTIONCTLGTEXT
description: Maintnotifdetectionctlgtext
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTNOTIFDETECTIONCTLGTEXT

**Maintnotifdetectionctlgtext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintNotifDetectionCatalog` | ✓ | |  | `detectioncatalog` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `MaintNotifDetectionCatalogText` |  | |  | `cast( eam_detcat_t.detectioncatalogtext as detectioncatalogtext preserving type )` |  |  |

## Source Code

```abap
@EndUserText.label: 'Maint Notif Detection Catalog - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory: #TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT ,
  representativeKey: 'MaintNotifDetectionCatalog',
   usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A
  }
}
@Analytics.technicalName: 'IMAINTDETCATTEXT'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true
//  dataCategory: #DIMENSION
}
@Metadata.ignorePropagatedAnnotations
//@Search.searchable: true
define view entity I_MaintNotifDetectionCtlgText
  as select from eam_detcat_t
{
      //  @ObjectModel.foreignKey.association: '_MaintNotifDetCatalog'
      @ObjectModel.text.element: ['MaintNotifDetectionCatalogText']
  key eam_detcat_t.detectioncatalog                                                     as MaintNotifDetectionCatalog,
      //  @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key eam_detcat_t.language                                                             as Language,

      @Semantics.text: true
      @EndUserText.label: 'Maint Notification Detection Catalog'
//      @Search.defaultSearchElement: true
//      @Search.fuzzinessThreshold: 0.8
//      @Search.ranking: #HIGH
      cast( eam_detcat_t.detectioncatalogtext as detectioncatalogtext preserving type ) as MaintNotifDetectionCatalogText



}
```
