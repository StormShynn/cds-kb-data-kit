---
name: I_EWM_STORAGESECTIONTEXT_2
description: "This CDS view provides information about storage sections in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTIONTEXT_2')/$value
semantic_en: "This CDS view provides information about storage sections in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Storage Section - Text — CDS view giao diện (master data) dựa trên Warehouse Storage Section - Text."
keywords:
  - "warehouse"
  - "storage"
  - "section"
  - "text"
  - "language"
  - "type"
  - "name"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_STORAGESECTIONTEXT_2

**This CDS view provides information about storage sections in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTIONTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageType` | ✓ | |  | `lgtyp` | `CHAR(4)` | Storage Type |
| `EWMStorageSection` | ✓ | |  | `lgber` | `CHAR(4)` | Storage Section |
| `StorageSectionName` |  | |  | `lbert` | `CHAR(40)` | Description |
| `_Warehouse` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_StorageType` | `I_EWM_StorageType_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTIONTEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGESECTIONTEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Storage Section - Text'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMStorageSection'
@Analytics.technicalName: 'IEWMSTRGSCTTXT2'
@ObjectModel: {dataCategory: #TEXT,
               usageType: {serviceQuality: #A,
                           dataClass: #MASTER,
                           sizeCategory: #M}}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
define view entity I_EWM_StorageSectionText_2
  as select from /scwm/t302t as StorageSectionName
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse   on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..1] to I_EWM_StorageType_2     as _StorageType on  $projection.EWMStorageType = _StorageType.EWMStorageType
                                                                and $projection.EWMWarehouse   = _StorageType.EWMWarehouse

{
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum as EWMWarehouse,
      @ObjectModel.foreignKey.association: '_StorageType'
  key lgtyp as EWMStorageType,
  key lgber as EWMStorageSection,
      @Search:{
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW }
      @Semantics.text: true
      lbert as StorageSectionName,
      _Warehouse,
      _StorageType
}
```
