---
name: C_MAINTNOTIFRSKASSESSMENTQUERY
description: "This CDS view retrieves and counts the number of maintenance notification risk assessments. It allows filtering by maintenance notification characteristics, such as leading priority, consequence, prioritization profile, and likelihood. Additionally, you can also filter by related objects such as Equipment, Functional Location, and Maintenance Order. This CDS view provides the data to answer the following business questions: What data is available for maintenance notification risk assessment and related objects, such as Equipment, Functional Location, and Maintenance Order? How many maintenance notification risk assessments have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFRSKASSESSMENTQUERY')/$value
semantic_en: "This CDS view retrieves and counts the number of maintenance notification risk assessments. It allows filtering by maintenance notification characteristics, such as leading priority, consequence, prioritization profile, and likelihood. Additionally, you can also filter by related objects such as Equipment, Functional Location, and Maintenance Order. This CDS view provides the data to answer the following business questions: What data is available for maintenance notification risk assessment and related objects, such as Equipment, Functional Location, and Maintenance Order? How many maintenance notification risk assessments have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Maint Notification Risk Assessment Query — CDS view tiêu dùng (transactional data) dựa trên Maint Notification Risk Assessment Query."
keywords:
  - "maint"
  - "notification"
  - "risk"
  - "assessment"
  - "query"
  - "maintenance"
  - "event"
  - "cnsqnc"
  - "category"
  - "code"
  - "consequence"
  - "prioritization"
  - "profile"
  - "likelihood"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MN-2CL
  - consumption-view
  - lob:plant maintenance
  - notification
  - order
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# C_MAINTNOTIFRSKASSESSMENTQUERY

**This CDS view retrieves and counts the number of maintenance notification risk assessments. It allows filtering by maintenance notification characteristics, such as leading priority, consequence, prioritization profile, and likelihood. Additionally, you can also filter by related objects such as Equipment, Functional Location, and Maintenance Order. This CDS view provides the data to answer the following business questions: What data is available for maintenance notification risk assessment and related objects, such as Equipment, Functional Location, and Maintenance Order? How many maintenance notification risk assessments have been generated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFRSKASSESSMENTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `MaintEventCnsqncCategoryCode` |  | |  |  | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceCode` |  | |  |  | `NUMC(2)` | Consequence ID |
| `MaintEvtPrioritizationProfile` |  | |  |  | `CHAR(10)` | Prioritization Profile ID |
| `MaintEventLikelihoodCode` |  | |  |  | `NUMC(2)` | Likelihood ID |
| `MaintEventConsequenceGroup` |  | |  |  | `CHAR(10)` | Consequence Category Group ID |
| `MaintEventConsequenceIsLeading` |  | |  |  | `CHAR(1)` | Leading Consequence Indicator |
| `TechnicalObject` |  | |  |  | `CHAR(40)` | Technical Object |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | 30 Characters |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `NotificationType` |  | |  |  | `CHAR(2)` | Notification Type |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `NumberOfMaintNotifRisk` |  | |  |  | `INT4(10)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFRSKASSESSMENTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTNOTIFRSKASSESSMENTQUERY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED

@ObjectModel: {
  usageType: {
    serviceQuality: #D,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL },
  supportedCapabilities: [ #ANALYTICAL_QUERY ],
  modelingPattern: #ANALYTICAL_QUERY }

@EndUserText.label: 'Maint Notification Risk Assessment Query'

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #CONSUMPTION

@Analytics.technicalName: 'CMAINTNTFRSKASMQ'

define transient view entity C_MaintNotifRskAssessmentQuery
  provider contract analytical_query
  as projection on I_MaintNotifRskAssessmentCube

{
  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  MaintenanceNotification,

  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  MaintEventCnsqncCategoryCode,

  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  MaintEventConsequenceCode,

  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  MaintEvtPrioritizationProfile,

  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  MaintEventLikelihoodCode,

  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  MaintEventConsequenceGroup,

  @Consumption.filter.multipleSelections: false
  @Consumption.filter.selectionType: #SINGLE
  MaintEventConsequenceIsLeading,

  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  TechnicalObject,
  
  @EndUserText.label: 'Functional Location'
  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE  
  FunctionalLocation,

  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE
  Equipment,
  
  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE  
  MaintenancePlant,
  
  @Consumption.filter.multipleSelections: true  
  @Consumption.valueHelpDefinition: [ 
    { entity:  { name:    'I_MaintenanceNotificationType',
                 element: 'NotificationType' } }]
  NotificationType,
  
  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE  
  MaintenanceOrder,
  
  @Consumption.filter.multipleSelections: true
  @Consumption.filter.selectionType: #RANGE  
  MaintPriority,
  
  @EndUserText.label: 'Number of Notification Risk Assessments'
  @Aggregation.default:#SUM
  NumberOfMaintNotifRisk
}
```
