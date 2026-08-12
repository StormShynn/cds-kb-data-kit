---
name: I_WELL
description: "Well"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELL')/$value
semantic_en: "Well"
semantic_vi: "Well — CDS view giao diện dựa trên oiu_pr_well."
keywords:
  - "well"
  - "name"
  - "number"
  - "latitude"
  - "unit"
  - "longitude"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_WELL

**Well**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Well` | ✓ | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellName` |  | |  | `cast (wl_de as oiu_wl_de preserving type)` | `CHAR(35)` | Well Description |
| `APIWellNumber` |  | |  | `cast (api_no as oiuya_co_wlapi preserving type)` | `CHAR(12)` | Roy 2.0 CO -  Well API Number |
| `LatitudeUnit` |  | |  | `cast ( 'DEG' as oiu_uom )` | `UNIT(3)` | Unit of Measure |
| `LongitudeUnit` |  | |  | `cast ( 'DEG' as oiu_uom )` | `UNIT(3)` | Unit of Measure |
| `WellLatitude` |  | |  | `sur_lat_no` | `DEC(8)` | Surface Latitude |
| `WellLatitudeDirection` |  | |  | `sur_lat_d_cd` | `CHAR(1)` | Surface latitude Direction |
| `WellLongitude` |  | |  | `sur_lng_no` | `DEC(9)` | Surface longitude |
| `WellLongitudeDirection` |  | |  | `sur_lng_d_cd` | `CHAR(1)` | Surface longitude direction code |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELL')/$value)*

```abap
@EndUserText.label: 'Well'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVWELL'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.representativeKey: 'Well'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAWell'
@Metadata.ignorePropagatedAnnotations:true 

@Search.searchable: true
define view I_Well
  as select from oiu_pr_well
{
      @ObjectModel.text.element:  [ 'WellName' ]
      @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}      
  key wl_no                                          as Well,
      @Semantics.text: true
      @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}      
      cast (wl_de as oiu_wl_de preserving type)      as WellName,
      @EndUserText.label: 'API Well Number'
      cast (api_no as oiuya_co_wlapi preserving type) as APIWellNumber,
      cast ( 'DEG' as oiu_uom )   as LatitudeUnit,
      cast ( 'DEG' as oiu_uom )   as LongitudeUnit,      
      @Semantics.quantity.unitOfMeasure: 'LatitudeUnit'
      sur_lat_no                                     as WellLatitude,
      sur_lat_d_cd                                   as WellLatitudeDirection,  // no text as this is used in native format
      @Semantics.quantity.unitOfMeasure: 'LongitudeUnit'  
      sur_lng_no                                     as WellLongitude,
      sur_lng_d_cd                                   as WellLongitudeDirection, // no text as this is used in native format
 
      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )      as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts ) as CreationDateTime
};
```
