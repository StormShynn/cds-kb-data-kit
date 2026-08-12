---
name: I_EWM_CONFWHSETASKSERIALNUMBER
description: "This CDS view provides access to the serial numbers that are assigned to confirmed warehouse tasks in Warehouse Management. It is designed as a basic data source for tracking and auditing which serial numbers have been processed during the execution of warehouse tasks. This CDS view provides the data to answer the following business questions: Which serial numbers are assigned to each confirmed warehouse task and item? For a given warehouse, which serial numbers were moved as part of a specific task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value
semantic_en: "This CDS view provides access to the serial numbers that are assigned to confirmed warehouse tasks in Warehouse Management. It is designed as a basic data source for tracking and auditing which serial numbers have been processed during the execution of warehouse tasks. This CDS view provides the data to answer the following business questions: Which serial numbers are assigned to each confirmed warehouse task and item? For a given warehouse, which serial numbers were moved as part of a specific task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Srl Number of Confirmed Warehouse Task — CDS view giao diện dựa trên Srl Number of Confirmed Warehouse Task."
keywords:
  - "srl"
  - "number"
  - "confirmed"
  - "warehouse"
  - "task"
  - "item"
  - "serial"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - task
---
# I_EWM_CONFWHSETASKSERIALNUMBER

**This CDS view provides access to the serial numbers that are assigned to confirmed warehouse tasks in Warehouse Management. It is designed as a basic data source for tracking and auditing which serial numbers have been processed during the execution of warehouse tasks. This CDS view provides the data to answer the following business questions: Which serial numbers are assigned to each confirmed warehouse task and item? For a given warehouse, which serial numbers were moved as part of a specific task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTask` | ✓ | |  | `cast( tanum as /scwm/tanum_noconv preserving type )` | `NUMC(12)` | Warehouse Task |
| `WarehouseTaskItem` | ✓ | |  | `cast( tapos as /scwm/tapos_noconv preserving type )` | `NUMC(4)` | Warehouse Task Item |
| `EWMSerialNumber` | ✓ | |  | `cast( serid as char30 preserving type )` | `CHAR(30)` | 30 Characters |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #M

@VDM.viewType: #BASIC
@Analytics.internalName:#LOCAL  
@EndUserText.label: 'Srl Number of Confirmed Warehouse Task'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
define view entity I_EWM_ConfWhseTaskSerialNumber
  as select from /scwm/ordim_cs 
{
  key lgnum                                               as EWMWarehouse,
  key cast( tanum as /scwm/tanum_noconv preserving type ) as WarehouseTask,
  key cast( tapos as /scwm/tapos_noconv preserving type ) as WarehouseTaskItem,
  key cast( serid as char30 preserving type )             as EWMSerialNumber

}
```
