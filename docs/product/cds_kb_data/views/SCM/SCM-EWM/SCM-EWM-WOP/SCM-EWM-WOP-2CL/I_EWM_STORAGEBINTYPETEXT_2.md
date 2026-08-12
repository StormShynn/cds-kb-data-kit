---
name: I_EWM_STORAGEBINTYPETEXT_2
description: "This CDS view provides information about storage bin types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINTYPETEXT_2')/$value
semantic_en: "This CDS view provides information about storage bin types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Storage Bin Type - Text — CDS view cơ bản dựa trên Storage Bin Type - Text."
keywords:
  - "storage"
  - "bin"
  - "type"
  - "text"
  - "language"
  - "warehouse"
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
# I_EWM_STORAGEBINTYPETEXT_2

**This CDS view provides information about storage bin types in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINTYPETEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageBinType` | ✓ | |  | `lptyp` | `CHAR(4)` | Storage Bin Type |
| `StorageBinTypeName` |  | |  | `ptypt` | `CHAR(40)` | Description |
| `_Warehouse` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINTYPETEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_STORAGEBINTYPETEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Storage Bin Type - Text'
@VDM:
  {
    viewType: #BASIC
  }
@ObjectModel:
  {
    representativeKey: 'EWMStorageBinType',
    dataCategory: #TEXT,
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #S,
    usageType.dataClass: #CUSTOMIZING,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
  }

@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
define view entity I_EWM_StorageBinTypeText_2
  as select from /scwm/t303t
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on $projection.EWMWarehouse = _Warehouse.EWMWarehouse
{
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association:'_Warehouse'
  key lgnum as EWMWarehouse,
  key lptyp as EWMStorageBinType,
      @Search:{
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW }
      @Semantics.text: true
      ptypt as StorageBinTypeName,
      _Warehouse
}
```
