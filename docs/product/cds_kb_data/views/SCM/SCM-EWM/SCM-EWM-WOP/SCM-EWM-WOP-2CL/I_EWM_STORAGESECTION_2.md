---
name: I_EWM_STORAGESECTION_2
description: "This CDS view provides information about storage sections in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTION_2')/$value
semantic_en: "This CDS view provides information about storage sections in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Storage Section — CDS view giao diện dựa trên Warehouse Storage Section."
keywords:
  - "warehouse"
  - "storage"
  - "section"
  - "type"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_STORAGESECTION_2

**This CDS view provides information about storage sections in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTION_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageType` | ✓ | |  | `lgtyp` | `CHAR(4)` | Storage Type |
| `EWMStorageSection` | ✓ | |  | `lgber` | `CHAR(4)` | Storage Section |
| `_Warehouse` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_StorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_Text` | `I_EWM_StorageSectionText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTION_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTION_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Warehouse Storage Section'

@VDM.viewType:#BASIC
@Analytics.internalName:#LOCAL 
@ObjectModel.representativeKey: 'EWMStorageSection'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMSTRGSCT2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #MASTER,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                         
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
define view entity I_EWM_StorageSection_2
  as select from /scwm/t302 as StorageSection
  association [0..1] to I_EWM_WarehouseNumber_2    as _Warehouse   on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..1] to I_EWM_StorageType_2        as _StorageType on  $projection.EWMStorageType = _StorageType.EWMStorageType
                                                                 and $projection.EWMWarehouse   = _StorageType.EWMWarehouse
  association [0..*] to I_EWM_StorageSectionText_2 as _Text        on  $projection.EWMWarehouse      = _Text.EWMWarehouse
                                                                 and $projection.EWMStorageType    = _Text.EWMStorageType
                                                                 and $projection.EWMStorageSection = _Text.EWMStorageSection
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum         as EWMWarehouse,
      _Warehouse,
      @ObjectModel.foreignKey.association: '_StorageType'
  key lgtyp         as EWMStorageType,
      _StorageType,
      @ObjectModel.text.association: '_Text'
  key lgber         as EWMStorageSection,
      _Text

}
```
