---
name: I_EWM_RESOURCEGROUP_2
description: "This CDS view provides information about resource groups in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCEGROUP_2')/$value
semantic_en: "This CDS view provides information about resource groups in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Resource Group — CDS view giao diện dựa trên Resource Group."
keywords:
  - "resource"
  - "group"
  - "warehouse"
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
# I_EWM_RESOURCEGROUP_2

**This CDS view provides information about resource groups in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCEGROUP_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMResourceGroup` | ✓ | |  | `rsrc_grp` | `CHAR(4)` | Resource Group |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_ResourceGroupText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCEGROUP_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_RESOURCEGROUP_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Resource Group'


@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMResourceGroup'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRSCEGRP2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.internalName:#LOCAL 
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_ResourceGroup_2
  as select from /scwm/trsrc_grp as ResourceGroup
  association [0..1] to I_EWM_WarehouseNumber_2  as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_ResourceGroupText_2  as  _Text   on  $projection.EWMWarehouse = _Text.EWMWarehouse
                                                              and $projection.EWMResourceGroup = _Text.EWMResourceGroup
{
  @ObjectModel.foreignKey.association: '_Warehouse'
  key   lgnum     as  EWMWarehouse,
  @ObjectModel.text.association: '_Text'
  key   rsrc_grp  as  EWMResourceGroup,
  _Text,
  _Warehouse
}
```
