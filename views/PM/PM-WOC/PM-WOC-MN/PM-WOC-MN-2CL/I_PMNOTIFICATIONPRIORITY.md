---
name: I_PMNOTIFICATIONPRIORITY
description: Pmnotificationpriority
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
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_PMNOTIFICATIONPRIORITY

**Pmnotificationpriority**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintPriority` | ✓ | |  | `priok` |
| `MaintPriorityType` | ✓ | |  | `artpr` |
| `MaintPriorityColorCode` |  | |  | `cast (priocc as abap.int1)` |
| `_Text` | | ✓ | | |
| `_PMNotificationPriorityType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PMNotificationPriorityText` | [0..*] |
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Notification Priority'
@Analytics: { dataCategory: #DIMENSION, 
  dataExtraction : { enabled: true , 
  delta.changeDataCapture.automatic: true } 
}
@VDM.viewType: #BASIC

@AbapCatalog.sqlViewName: 'IPMNOTIFPRIORITY'
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.representativeKey: 'MaintPriority'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

@Search.searchable: true
@Consumption.ranked: true

@ObjectModel.sapObjectNodeType.name:'NotificationPriority'
define view I_PMNotificationPriority
as select from t356 
association [0..*] to I_PMNotificationPriorityText as _Text on t356.artpr = _Text.MaintPriorityType and t356.priok = _Text.MaintPriority
association [0..1] to I_PMNotificationPriorityType as _PMNotificationPriorityType on $projection.MaintPriorityType = _PMNotificationPriorityType.MaintPriorityType
{
    @Search: { defaultSearchElement: true, ranking: #HIGH }  
    @ObjectModel.text.association: '_Text'
    @UI.textArrangement: #TEXT_FIRST
    key t356.priok as MaintPriority,
    @Search: { defaultSearchElement: true, ranking: #HIGH }    
    @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
    key artpr as MaintPriorityType,  
    @UI.hidden: true
    @Consumption.filter.hidden: true
    cast (priocc as abap.int1) as MaintPriorityColorCode,
          
    // Propagate association     
    _Text,
    _PMNotificationPriorityType
}
```
