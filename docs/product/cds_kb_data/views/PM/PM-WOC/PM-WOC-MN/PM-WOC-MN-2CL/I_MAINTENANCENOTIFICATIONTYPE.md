---
name: I_MAINTENANCENOTIFICATIONTYPE
description: "Maintenance Notification Types"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCENOTIFICATIONTYPE')/$value
semantic_en: "Maintenance Notification Types"
semantic_vi: "Maintenance Notification Types — CDS view giao diện dựa trên I_PMNotificationType."
keywords:
  - "maintenance"
  - "notification"
  - "types"
  - "type"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - notification
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTENANCENOTIFICATIONTYPE

**Maintenance Notification Types**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCENOTIFICATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NotificationType` | ✓ | |  |  | `CHAR(2)` | Notification Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCENOTIFICATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCENOTIFICATIONTYPE')/$value)*

```abap
@Analytics: {
  dataCategory: #DIMENSION, 
  technicalName: 'IMAINTNOTTYPE',
  internalName: #LOCAL }
  
@EndUserText.label: 'Maintenance Notification Types'
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true }
  
@VDM.viewType: #BASIC

@ObjectModel: {
  representativeKey: 'NotificationType',
  usageType.dataClass: #CUSTOMIZING,
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #ANALYTICAL_DIMENSION }

@AccessControl: { 
  privilegedAssociations: ['_Text'],
  authorizationCheck: #MANDATORY }

@Search.searchable: true
define view entity I_MaintenanceNotificationType
  as select from I_PMNotificationType
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key NotificationType,
      _Text
}
where
  NotificationCategory = '01'
```
