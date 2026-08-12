---
name: C_MAINTORDERWORKFLOWEMAIL
description: "Maintenance Order Details for WF"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERWORKFLOWEMAIL')/$value
semantic_en: "Maintenance Order Details for WF"
semantic_vi: "Maintenance Order Details for WF — CDS view tiêu dùng dựa trên I_WorkflowTask."
keywords:
  - "maintenance"
  - "order"
  - "details"
  - "for"
  - "workflow"
  - "task"
  - "internal"
  - "desc"
  - "maint"
  - "priority"
  - "planning"
  - "plant"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDERWORKFLOWEMAIL

**Maintenance Order Details for WF**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERWORKFLOWEMAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` | `NUMC(12)` | Work item ID |
| `MaintenanceOrder` |  | | `_MaintenanceOrder` | `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceOrderDesc` |  | | `_MaintenanceOrder` | `MaintenanceOrderDesc` | `CHAR(40)` | Description |
| `MaintPriority` |  | | `_MaintenanceOrder` | `MaintPriority` | `CHAR(1)` | Priority |
| `MaintenancePlanningPlant` |  | | `_MaintenanceOrder` | `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlannerGroup` |  | | `_MaintenanceOrder` | `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenanceOrderType` |  | | `_MaintenanceOrder` | `MaintenanceOrderType` | `CHAR(4)` | Order Type |
| `MaintOrdBasicStartDate` |  | | `_MaintenanceOrder` | `MaintOrdBasicStartDate` | `DATS(8)` | Basic Start Date |
| `MaintOrdBasicEndDate` |  | | `_MaintenanceOrder` | `MaintOrdBasicEndDate` | `DATS(8)` | Basic Finish Date |
| `TechnicalObject` |  | | `_Techobj` | `TechnicalObject` | `CHAR(40)` | Technical Object |
| `TechObjIsEquipOrFuncnlLocDesc` |  | | `_Techobj` | `TechObjIsEquipOrFuncnlLocDesc` | `CHAR(40)` | Description of Technical Object Type |
| `TechnicalObjectDescription` |  | | `_Techobj` | `TechnicalObjectDescription` | `CHAR(40)` | Technical Object Description |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Techobj` | `C_TechObjMaintenanceOrder` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERWORKFLOWEMAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERWORKFLOWEMAIL')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Maintenance Order Details for WF'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED

@VDM.viewType : #CONSUMPTION
@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]

define view entity C_MaintOrderWorkflowEmail
  as select from I_WorkflowTask           as _Workflowtask

    inner join   I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                     and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                     and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'MaintenanceOrder'
                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    inner join   I_MaintenanceOrder       as _MaintenanceOrder       on _MaintenanceOrder.MaintenanceOrder = _WorkflowTaskApplObject.TechnicalWrkflwObject

  association [0..1] to C_TechObjMaintenanceOrder as _Techobj on  _Techobj.MaintenanceOrder =  _MaintenanceOrder.MaintenanceOrder
                                                              and _Techobj.TechnicalObject  <> ''

{

  key _Workflowtask.WorkflowTaskInternalID,
      _MaintenanceOrder.MaintenanceOrder,
      _MaintenanceOrder.MaintenanceOrderDesc,
      _MaintenanceOrder.MaintPriority,
      _MaintenanceOrder.MaintenancePlanningPlant,
      _MaintenanceOrder.MaintenancePlannerGroup,
      _MaintenanceOrder.MaintenanceOrderType,
      _MaintenanceOrder.MaintOrdBasicStartDate,
      _MaintenanceOrder.MaintOrdBasicEndDate,
      _Techobj.TechnicalObject,
      _Techobj.TechObjIsEquipOrFuncnlLocDesc,
      _Techobj.TechnicalObjectDescription
}
```
