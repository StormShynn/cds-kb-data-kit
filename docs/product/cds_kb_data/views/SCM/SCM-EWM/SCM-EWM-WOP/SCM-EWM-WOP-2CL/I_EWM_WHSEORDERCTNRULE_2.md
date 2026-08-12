---
name: I_EWM_WHSEORDERCTNRULE_2
description: "This CDS view provides information about warehouse order creation rules in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse order creation rules with the attribute WarehouseOrderCreationRule and its related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCTNRULE_2')/$value
semantic_en: "This CDS view provides information about warehouse order creation rules in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse order creation rules with the attribute WarehouseOrderCreationRule and its related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Order Creation Rules — CDS view giao diện dựa trên Warehouse Order Creation Rules."
keywords:
  - "warehouse"
  - "order"
  - "creation"
  - "rules"
  - "rule"
  - "whse"
  - "category"
  - "destination"
  - "storage"
  - "type"
  - "section"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - order
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WHSEORDERCTNRULE_2

**This CDS view provides information about warehouse order creation rules in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse order creation rules with the attribute WarehouseOrderCreationRule and its related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCTNRULE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseOrderCreationRule` | ✓ | |  | `wcr` | `CHAR(4)` | Warehouse Order Creation Rule |
| `WhseOrderCreationRuleCategory` |  | |  | `type` | `CHAR(1)` | Category of Warehouse Order Creation Rule |
| `DestinationStorageType` |  | |  | `dest_type` | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageSection` |  | |  | `dest_sect` | `CHAR(4)` | Destination Storage Section |
| `DestinationStorageBin` |  | |  | `dest_bin` | `CHAR(18)` | Destination Storage Bin |
| `StorageProcess` |  | |  | `prces` | `CHAR(4)` | Storage Process |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_WhseOrderCtnRuleText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCTNRULE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCTNRULE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Order Creation Rules'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'WarehouseOrderCreationRule'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMWOCTNRULE2'
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
define view entity I_EWM_WhseOrderCtnRule_2
  as select from /scwm/twcr as WhseOrderCtnRule
  association [0..1] to I_EWM_WarehouseNumber_2  as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_WhseOrderCtnRuleText_2  as  _Text   on  $projection.EWMWarehouse = _Text.EWMWarehouse
                                                                 and $projection.WarehouseOrderCreationRule = _Text.WarehouseOrderCreationRule
{
  @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum   as  EWMWarehouse,
  @ObjectModel.text.association: '_Text'
  key wcr     as  WarehouseOrderCreationRule,
      type    as  WhseOrderCreationRuleCategory,
//      filter_il as  FilterForItem,
//      filter_sl as  FilterForSubtotal,
//      limit   as  LimitForRule,
//      packprofile as  PackingProfileForWhseOrd,
//      shiphupprof as  PackgPrflForShipgHandlingUnit,
//      @DefaultAggregation: #SUM
//      @Semantics: { quantity : {unitOfMeasure: 'TimeUnit'} }
//      prep_time as  PreparationTime,
//      @Semantics.unitOfMeasure: true
//      unit_pt as  TimeUnit,
//      flgwholog as  WarehouseOrderLog,
      dest_type as  DestinationStorageType,
      dest_sect as  DestinationStorageSection,
      dest_bin  as  DestinationStorageBin,
//      noworkers as  NumberOfWorkers,
      prces     as  StorageProcess,
//      inactive  as  CreateWarehouseOrderLocked,
//      cap_compatible  as  CartonizationPlngCompatibility,
      _Text,
      _Warehouse
}
```
