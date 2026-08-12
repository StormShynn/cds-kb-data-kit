---
name: I_MEASUREMENTPOINT
description: "Measurement Point"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINT')/$value
semantic_en: "Measurement Point"
semantic_vi: "Measurement Point — CDS view giao diện dựa trên oiu_pr_mp."
keywords:
  - "measurement"
  - "point"
  - "name"
  - "type"
  - "meter"
  - "class"
  - "country"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_MEASUREMENTPOINT

**Measurement Point**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasurementPoint` | ✓ | |  | `mp_no` | `CHAR(20)` | Measurement point number |
| `MeasurementPtName` |  | |  | `cast (mp_de as oiu_mp_de preserving type)` | `CHAR(35)` | Measurement point description |
| `MeasurementPtType` |  | |  | `type_cd` | `CHAR(2)` | Measurement point type code |
| `MeasurementPtMeterClass` |  | |  | `mtr_cl_cd` | `CHAR(1)` | Meter class |
| `Country` |  | |  | `cast( cntry_cd as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  | `sec_geo_loc` | `CHAR(3)` | Secondary geographic location |
| `LatitudeUnit` |  | |  | `cast ( 'DEG' as oiu_uom )` | `UNIT(3)` | Unit of Measure |
| `MeasurementPtLatitude` |  | |  | `lat_no` | `DEC(8)` | Latitude number |
| `MeasurementPtLatitudeDrctn` |  | |  | `lat_dir_cd` | `CHAR(1)` | Latitude direction code |
| `LongitudeUnit` |  | |  | `cast ( 'DEG' as oiu_uom )` | `UNIT(3)` | Unit of Measure |
| `MeasurementPtLongitude` |  | |  | `lng_no` | `DEC(9)` | Longitude |
| `MeasurementPtLongitudeDrctn` |  | |  | `lng_dir_cd` | `CHAR(1)` | Longitude Direction Code |
| `MeasurementPtHier` |  | |  | `mp_set` | `CHAR(15)` | Measurement point hierarchy group |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_SecondaryGeogrlLocation` | | ✓ | | | | |
| `_MeasurementPtType` | | ✓ | | | | |
| `_MeasurementPtMeterClass` | | ✓ | | | | |
| `_MeasurementPtHier` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_SecondaryGeogrlLocation` | `I_SecondaryGeogrlLocation` | [0..1] |
| `_MeasurementPtType` | `I_MeasurementPtType` | [0..1] |
| `_MeasurementPtMeterClass` | `I_MeasurementPtMeterClass` | [0..1] |
| `_MeasurementPtHier` | `I_MeasurementPtHier` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINT')/$value)*

```abap
@EndUserText.label: 'Measurement Point'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMEASPT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'MeasurementPoint'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAMeasurementPoint'

define view I_MeasurementPoint
  as select from oiu_pr_mp
  association [0..1] to I_Country                 as _Country                 on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation   as _PrimaryGeogrlLocation   on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                              and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_SecondaryGeogrlLocation as _SecondaryGeogrlLocation on  $projection.Country                 = _SecondaryGeogrlLocation.Country
                                                                              and $projection.PrimaryGeogrlLocation   = _SecondaryGeogrlLocation.PrimaryGeogrlLocation
                                                                              and $projection.SecondaryGeogrlLocation = _SecondaryGeogrlLocation.SecondaryGeogrlLocation
  association [0..1] to I_MeasurementPtType       as _MeasurementPtType       on  $projection.MeasurementPtType = _MeasurementPtType.MeasurementPtType
  association [0..1] to I_MeasurementPtMeterClass as _MeasurementPtMeterClass on  $projection.MeasurementPtMeterClass = _MeasurementPtMeterClass.MeasurementPtMeterClass
  association [0..1] to I_MeasurementPtHier       as _MeasurementPtHier       on  $projection.MeasurementPtHier = _MeasurementPtHier.MeasurementPtHier
  association [0..1] to I_User                    as _CreatedByUser           on  $projection.CreatedByUser = _CreatedByUser.UserID
{
      @ObjectModel.text.element:  [ 'MeasurementPtName' ]
  key mp_no                                                                      as MeasurementPoint,
      @Semantics.text: true
      cast (mp_de as oiu_mp_de preserving type)                                  as MeasurementPtName,
      @ObjectModel.foreignKey.association: '_MeasurementPtType'
      type_cd                                                                    as MeasurementPtType,
      @ObjectModel.foreignKey.association: '_MeasurementPtMeterClass'
      mtr_cl_cd                                                                  as MeasurementPtMeterClass,
      @ObjectModel.foreignKey.association: '_Country'
      @Semantics.address.country: true
      cast( cntry_cd as land1_gp )                                               as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      @Semantics.address.region: true
      pri_geo_loc                                                                as PrimaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_SecondaryGeogrlLocation'
      @Semantics.address.subRegion: true
      sec_geo_loc                                                                as SecondaryGeogrlLocation,
      cast ( 'DEG' as oiu_uom )   as LatitudeUnit,
      @Semantics.quantity.unitOfMeasure: 'LatitudeUnit'      
      lat_no                                                                     as MeasurementPtLatitude,
      lat_dir_cd                                                                 as MeasurementPtLatitudeDrctn,
      cast ( 'DEG' as oiu_uom )   as LongitudeUnit,      
      @Semantics.quantity.unitOfMeasure: 'LongitudeUnit'         
      lng_no                                                                     as MeasurementPtLongitude,
      lng_dir_cd                                                                 as MeasurementPtLongitudeDrctn,
      @ObjectModel.foreignKey.association: '_MeasurementPtHier'
      mp_set                                                                     as MeasurementPtHier,
      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                                  as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                             as CreationDateTime,
      _MeasurementPtType,
      _MeasurementPtMeterClass,
      _MeasurementPtHier,
      _Country,
      _PrimaryGeogrlLocation,
      _SecondaryGeogrlLocation,
      _CreatedByUser
};
```
