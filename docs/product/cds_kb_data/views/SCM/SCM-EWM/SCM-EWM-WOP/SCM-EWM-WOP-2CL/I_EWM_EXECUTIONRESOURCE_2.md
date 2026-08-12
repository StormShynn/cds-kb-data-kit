---
name: I_EWM_EXECUTIONRESOURCE_2
description: "This CDS view provides information about resources in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXECUTIONRESOURCE_2')/$value
semantic_en: "This CDS view provides information about resources in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Execution Resource — CDS view giao diện dựa trên Execution Resource."
keywords:
  - "execution"
  - "resource"
  - "warehouse"
  - "executing"
  - "type"
  - "group"
  - "user"
  - "name"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - bo:salesorder
---
# I_EWM_EXECUTIONRESOURCE_2

**This CDS view provides information about resources in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXECUTIONRESOURCE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `ExecutingResource` | ✓ | |  | `rsrc` | `CHAR(18)` | Resource (Means of Transportation or User) |
| `ExecutingResourceType` |  | |  | `rsrc_type` | `CHAR(4)` | Resource Type |
| `ExecutingResourceGroup` |  | |  | `rsrc_grp` | `CHAR(4)` | Resource Group |
| `UserName` |  | |  | `uname` | `CHAR(12)` | User Name in User Master Record |
| `WarehouseOrderQueue` |  | |  | `queue` | `CHAR(10)` | Queue |
| `EWMCurrentQueue` |  | |  | `act_queue` | `CHAR(10)` | Actual Queue of Resource |
| `EWMStorTypeOfLastWhseTaskConf` |  | |  | `lgtyp` | `CHAR(4)` | Storage Type of Last Removal |
| `EWMDfltPresentationDvcePrfl` |  | |  | `def_prdvc` | `CHAR(4)` | Default Presentation Device |
| `EWMResourcePrintBehavior` |  | |  | `rsrc_print` | `CHAR(1)` | Resource Print Behavior |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXECUTIONRESOURCE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXECUTIONRESOURCE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Execution Resource'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]

@VDM.viewType:#BASIC

@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_ExecutionResource_2
  as select from /scwm/rsrc
{
  key lgnum     as EWMWarehouse,
  key rsrc      as ExecutingResource,
      rsrc_type as ExecutingResourceType,
      rsrc_grp  as ExecutingResourceGroup,
      uname     as UserName,
      queue     as WarehouseOrderQueue,
      act_queue as EWMCurrentQueue,
      lgtyp     as EWMStorTypeOfLastWhseTaskConf,
      def_prdvc as EWMDfltPresentationDvcePrfl,
      rsrc_print as EWMResourcePrintBehavior

}
```
