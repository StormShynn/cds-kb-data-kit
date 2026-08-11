---
name: I_TECHNICALOBJECTSTDVH
description: "This CDS view helps you to filter records based on a technical object. It provides the data to answer the following business questions: How can you filter records based on a technical object? How can you filter records based on the type of technical object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TECHNICALOBJECTSTDVH')/$value
semantic_en: "This CDS view helps you to filter records based on a technical object. It provides the data to answer the following business questions: How can you filter records based on a technical object? How can you filter records based on the type of technical object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Technical Object — CDS view giao diện dựa trên I_TechnicalObject."
keywords:
  - "technical"
  - "object"
  - "tech"
  - "equip"
  - "funcnl"
  - "maint"
  - "acct"
  - "assgmt"
  - "nmbr"
  - "authorization"
  - "group"
  - "maintenance"
  - "planner"
tags:
  - PM
  - bo:companycode
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
---
# I_TECHNICALOBJECTSTDVH

**This CDS view helps you to filter records based on a technical object. It provides the data to answer the following business questions: How can you filter records based on a technical object? How can you filter records based on the type of technical object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TECHNICALOBJECTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechnicalObject` | ✓ | |  |  | `CHAR(40)` | Technical Object |
| `TechObjIsEquipOrFuncnlLoc` | ✓ | |  |  | `CHAR(20)` | Technical Object Type |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `_TechObjIsEquipOrFuncnlLocT` | | ✓ | | | | |
| `_TechnicalObjectText` | | ✓ | | | | |
| `_TechObjIsEquipOrFuncnlLoc` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechObjIsEquipOrFuncnlLocT` | `I_TechObjIsEquipOrFuncnlLocT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TECHNICALOBJECTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TECHNICALOBJECTSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ITO__VH'
@ObjectModel.representativeKey: 'TechnicalObject'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_TechnicalObjectText','_LocationAccountAssignment']

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Technical Object'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

define view entity I_TechnicalObjectStdVH as select from I_TechnicalObject
  association[0..*] to I_TechObjIsEquipOrFuncnlLocT as _TechObjIsEquipOrFuncnlLocT on _TechObjIsEquipOrFuncnlLocT.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc {
  @ObjectModel.text.association: '_TechnicalObjectText'
  key TechnicalObject,
  @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
  @ObjectModel.text.association: '_TechObjIsEquipOrFuncnlLocT'
  @UI.textArrangement: #TEXT_ONLY
  @UI.hidden: true -- to prevent technical values 'EAMS_FL' and 'EAMS_EQUI' from showing up.
  key TechObjIsEquipOrFuncnlLoc,

  _TechnicalObjectText,
  @Consumption.hidden: true
  MaintObjectLocAcctAssgmtNmbr,
  @Consumption.hidden: true
  AuthorizationGroup,
  @Consumption.hidden: true
  MaintenancePlannerGroup,
  @Consumption.hidden: true
  MaintenancePlanningPlant,

  @Consumption.hidden: true
  _TechObjIsEquipOrFuncnlLoc,
  @Consumption.filter.hidden: true
  _TechObjIsEquipOrFuncnlLocT,
  @Consumption.hidden: true
  _LocationAccountAssignment
}
```
