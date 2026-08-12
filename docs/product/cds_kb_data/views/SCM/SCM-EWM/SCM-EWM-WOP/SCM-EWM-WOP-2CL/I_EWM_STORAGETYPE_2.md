---
name: I_EWM_STORAGETYPE_2
description: "This CDS view provides information about storage types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPE_2')/$value
semantic_en: "This CDS view provides information about storage types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Storage Type — CDS view giao diện dựa trên Storage Type."
keywords:
  - "storage"
  - "type"
  - "warehouse"
  - "role"
  - "behavior"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_STORAGETYPE_2

**This CDS view provides information about storage types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageType` | ✓ | |  | `lgtyp` | `CHAR(4)` | Storage Type |
| `EWMStorageTypeRole` |  | |  | `st_role` | `CHAR(1)` | Storage Type Role |
| `EWMStorageBehavior` |  | |  | `behav` | `CHAR(1)` | Storage Behavior |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_StorageTypeText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGETYPE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Storage Type'

@VDM.viewType:#BASIC
@Analytics.internalName:#LOCAL
@ObjectModel.representativeKey: 'EWMStorageType'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMSTRGTYP2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name: 'WarehouseStorageType'
define view entity I_EWM_StorageType_2
  as select from /scwm/t301 as StorageType
    inner join   /scwm/t331 as StorageTypeControl on  StorageType.lgnum = StorageTypeControl.lgnum
                                                  and StorageType.lgtyp = StorageTypeControl.lgtyp
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_StorageTypeText_2 as _Text      on  $projection.EWMWarehouse   = _Text.EWMWarehouse
                                                              and $projection.EWMStorageType = _Text.EWMStorageType
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key StorageType.lgnum          as EWMWarehouse,
      _Warehouse,
      @ObjectModel.text.association: '_Text'
  key StorageType.lgtyp          as EWMStorageType,
      StorageTypeControl.st_role as EWMStorageTypeRole,
      StorageTypeControl.behav   as EWMStorageBehavior,
      _Text
}
```
