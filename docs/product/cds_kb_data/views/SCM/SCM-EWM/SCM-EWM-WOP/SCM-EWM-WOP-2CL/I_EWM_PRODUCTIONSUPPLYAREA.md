---
name: I_EWM_PRODUCTIONSUPPLYAREA
description: "This CDS view provides a structured representation of the relationship between warehouse numbers and production supply areas. It serves as a master data view that links production supply areas to their respective warehouse numbers, along with associated descriptive texts. This CDS view provides the data to answer the following business questions: What are the production supply areas available within a specific warehouse? How can I retrieve descriptive information about production supply areas in a warehouse? How are production supply areas associated with different warehouse numbers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PRODUCTIONSUPPLYAREA')/$value
semantic_en: "This CDS view provides a structured representation of the relationship between warehouse numbers and production supply areas. It serves as a master data view that links production supply areas to their respective warehouse numbers, along with associated descriptive texts. This CDS view provides the data to answer the following business questions: What are the production supply areas available within a specific warehouse? How can I retrieve descriptive information about production supply areas in a warehouse? How are production supply areas associated with different warehouse numbers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Production Supply Area — CDS view giao diện dựa trên Warehouse Production Supply Area."
keywords:
  - "warehouse"
  - "production"
  - "supply"
  - "area"
tags:
  - SCM
  - bo:businesspartner
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - master-data
  - product
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - bo:material
---
# I_EWM_PRODUCTIONSUPPLYAREA

**This CDS view provides a structured representation of the relationship between warehouse numbers and production supply areas. It serves as a master data view that links production supply areas to their respective warehouse numbers, along with associated descriptive texts. This CDS view provides the data to answer the following business questions: What are the production supply areas available within a specific warehouse? How can I retrieve descriptive information about production supply areas in a warehouse? How are production supply areas associated with different warehouse numbers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PRODUCTIONSUPPLYAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMProductionSupplyArea` | ✓ | |  | `psa` | `CHAR(15)` | Production Supply Area |
| `_WarehouseNumber` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WarehouseNumber` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_ProductionSupplyAreaText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PRODUCTIONSUPPLYAREA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PRODUCTIONSUPPLYAREA')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Warehouse Production Supply Area'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]                            
@ObjectModel.representativeKey: 'EWMProductionSupplyArea'
define view entity I_EWM_ProductionSupplyArea
  as select from /scwm/tpsa
  association [0..1] to I_EWM_WarehouseNumber_2        as _WarehouseNumber on  $projection.EWMWarehouse = _WarehouseNumber.EWMWarehouse
  association [0..*] to I_EWM_ProductionSupplyAreaText as _Text            on  $projection.EWMProductionSupplyArea = _Text.EWMProductionSupplyArea
                                                                           and $projection.EWMWarehouse            = _Text.EWMWarehouse
{
      @ObjectModel.foreignKey.association: '_WarehouseNumber'
  key lgnum as EWMWarehouse,
      @ObjectModel.text.association: '_Text'
  key psa   as EWMProductionSupplyArea,

      _Text,
      _WarehouseNumber

}
```
