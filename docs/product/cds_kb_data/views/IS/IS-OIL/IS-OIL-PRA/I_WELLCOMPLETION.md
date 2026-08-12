---
name: I_WELLCOMPLETION
description: "Well Completion"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLETION')/$value
semantic_en: "Well Completion"
semantic_vi: "Well Completion — CDS view giao diện dựa trên oiu_pr_wc."
keywords:
  - "well"
  - "completion"
  - "name"
  - "number"
  - "development"
  - "program"
  - "nmbr"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_WELLCOMPLETION

**Well Completion**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLETION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Well` | ✓ | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `WellCompletionName` |  | |  | `cast (name as oiu_wc_nm preserving type)` | `CHAR(35)` | Well completion name |
| `APIWellCompletionNumber` |  | |  | `api_wc_no` | `CHAR(3)` | API well completion number |
| `DevelopmentProgramNmbr` |  | |  | `dev_pgm_no` | `CHAR(2)` | Development program number |
| `LatitudeUnit` |  | |  | `cast ( 'DEG' as oiu_uom )` | `UNIT(3)` | Unit of Measure |
| `WellCompletionLatitude` |  | |  | `lat_no` | `DEC(8)` | Latitude number |
| `WellCompltnLatitudeDirection` |  | |  | `lat_dir_cd` | `CHAR(1)` | Latitude direction code |
| `LongitudeUnit` |  | |  | `cast ( 'DEG' as oiu_uom )` | `UNIT(3)` | Unit of Measure |
| `WellCompletionLongitude` |  | |  | `lng_no` | `DEC(9)` | Longitude |
| `WellCompltnLongitudeDirection` |  | |  | `lng_dir_cd` | `CHAR(1)` | Longitude Direction Code |
| `Country` |  | |  | `cast( cntry_cd as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  | `sec_geo_loc` | `CHAR(3)` | Secondary geographic location |
| `OffshorePlatform` |  | |  | `pf_no` | `CHAR(10)` | Platform number |
| `Reservoir` |  | |  | `resrv` | `CHAR(10)` | Reservoir ID |
| `ReservoirZone` |  | |  | `reszn` | `CHAR(10)` | Reservoir zone |
| `GeologicField` |  | |  | `field` | `CHAR(10)` | Field ID |
| `WellPurpose` |  | |  | `pur_cd` | `CHAR(1)` | Well purpose code |
| `AlternateWellCompletionKey` |  | |  | `alt_wc_key` | `CHAR(40)` | Alternate WC Key |
| `WellCompletionHier` |  | |  | `wc_set` | `CHAR(15)` | Well Completion Hierarchy Group |
| `OrganizationalUnit` |  | |  | `or1_or_lvl_1_no` | `CHAR(3)` | Org. Level 1 - Company |
| `OrganizationalUnit2` |  | |  | `or2_or_lvl_2_no` | `CHAR(1)` | Second-highest organization level number ( Company Code) |
| `OrganizationalUnit3` |  | |  | `or3_or_lvl_3_no` | `CHAR(3)` | Third-highest organization level number ( Company Code) |
| `OrganizationalUnit4` |  | |  | `or4_or_lvl_4_no` | `CHAR(2)` | Fourth-highest organization level number ( Company Code) |
| `CoalBedMethaneRptgIsEnabled` |  | |  | `cbm_indicator` | `CHAR(1)` | Coal Bed Methane Indicator |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `_Well` | | ✓ | | | | |
| `_DevelopmentProgramNmbr` | | ✓ | | | | |
| `_WellPurpose` | | ✓ | | | | |
| `_WellCompletionHier` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_SecondaryGeogrlLocation` | | ✓ | | | | |
| `_OffshorePlatform` | | ✓ | | | | |
| `_Reservoir` | | ✓ | | | | |
| `_ReservoirZone` | | ✓ | | | | |
| `_GeologicField` | | ✓ | | | | |
| `_OrganizationalUnit` | | ✓ | | | | |
| `_OrganizationalUnit2` | | ✓ | | | | |
| `_OrganizationalUnit3` | | ✓ | | | | |
| `_OrganizationalUnit4` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_CoalBedMethaneRptgIsEnabled` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Well` | `I_Well` | [0..1] |
| `_DevelopmentProgramNmbr` | `I_DevelopmentProgramNmbr` | [0..1] |
| `_WellPurpose` | `I_WellPurpose` | [0..1] |
| `_WellCompletionHier` | `I_WellCompletionHier` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_SecondaryGeogrlLocation` | `I_SecondaryGeogrlLocation` | [0..1] |
| `_OffshorePlatform` | `I_OffshorePlatform` | [0..1] |
| `_Reservoir` | `I_Reservoir` | [0..1] |
| `_ReservoirZone` | `I_ReservoirZone` | [0..1] |
| `_GeologicField` | `I_GeologicField` | [0..1] |
| `_OrganizationalUnit` | `I_OrganizationalUnit` | [0..1] |
| `_OrganizationalUnit2` | `I_OrganizationalUnit2` | [0..1] |
| `_OrganizationalUnit3` | `I_OrganizationalUnit3` | [0..1] |
| `_OrganizationalUnit4` | `I_OrganizationalUnit4` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_CoalBedMethaneRptgIsEnabled` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLETION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLETION')/$value)*

```abap
@EndUserText.label: 'Well Completion'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVWELLCOMPLTN'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.representativeKey: 'WellCompletion'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAWellCompletion'
@Metadata.ignorePropagatedAnnotations:true 

@Search.searchable: true
define view I_WellCompletion
  as select from oiu_pr_wc
  association [0..1] to I_Well                    as _Well                        on  $projection.Well = _Well.Well
  association [0..1] to I_DevelopmentProgramNmbr  as _DevelopmentProgramNmbr      on  $projection.DevelopmentProgramNmbr = _DevelopmentProgramNmbr.DevelopmentProgramNmbr
  association [0..1] to I_WellPurpose             as _WellPurpose                 on  $projection.WellPurpose = _WellPurpose.WellPurpose
  association [0..1] to I_WellCompletionHier      as _WellCompletionHier          on  $projection.WellCompletionHier = _WellCompletionHier.WellCompletionHier
  association [0..1] to I_Country                 as _Country                     on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation   as _PrimaryGeogrlLocation       on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                  and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_SecondaryGeogrlLocation as _SecondaryGeogrlLocation     on  $projection.Country                 = _SecondaryGeogrlLocation.Country
                                                                                  and $projection.PrimaryGeogrlLocation   = _SecondaryGeogrlLocation.PrimaryGeogrlLocation
                                                                                  and $projection.SecondaryGeogrlLocation = _SecondaryGeogrlLocation.SecondaryGeogrlLocation
  association [0..1] to I_OffshorePlatform        as _OffshorePlatform            on  $projection.OffshorePlatform = _OffshorePlatform.OffshorePlatform
  association [0..1] to I_Reservoir               as _Reservoir                   on  $projection.Reservoir = _Reservoir.Reservoir
  association [0..1] to I_ReservoirZone           as _ReservoirZone               on  $projection.Reservoir     = _ReservoirZone.Reservoir
                                                                                  and $projection.ReservoirZone = _ReservoirZone.ReservoirZone
  association [0..1] to I_GeologicField           as _GeologicField               on  $projection.GeologicField = _GeologicField.GeologicField
  association [0..1] to I_OrganizationalUnit      as _OrganizationalUnit          on  $projection.OrganizationalUnit = _OrganizationalUnit.OrganizationalUnit
  association [0..1] to I_OrganizationalUnit2     as _OrganizationalUnit2         on  $projection.OrganizationalUnit  = _OrganizationalUnit2.OrganizationalUnit
                                                                                  and $projection.OrganizationalUnit2 = _OrganizationalUnit2.OrganizationalUnit2
  association [0..1] to I_OrganizationalUnit3     as _OrganizationalUnit3         on  $projection.OrganizationalUnit  = _OrganizationalUnit3.OrganizationalUnit
                                                                                  and $projection.OrganizationalUnit2 = _OrganizationalUnit3.OrganizationalUnit2
                                                                                  and $projection.OrganizationalUnit3 = _OrganizationalUnit3.OrganizationalUnit3
  association [0..1] to I_OrganizationalUnit4     as _OrganizationalUnit4         on  $projection.OrganizationalUnit  = _OrganizationalUnit4.OrganizationalUnit
                                                                                  and $projection.OrganizationalUnit2 = _OrganizationalUnit4.OrganizationalUnit2
                                                                                  and $projection.OrganizationalUnit3 = _OrganizationalUnit4.OrganizationalUnit3
                                                                                  and $projection.OrganizationalUnit4 = _OrganizationalUnit4.OrganizationalUnit4
  association [0..1] to I_User                    as _CreatedByUser               on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_Indicator               as _CoalBedMethaneRptgIsEnabled on  $projection.CoalBedMethaneRptgIsEnabled = _CoalBedMethaneRptgIsEnabled.IndicatorValue
{
      @ObjectModel.foreignKey.association: '_Well'
  key wl_no                                                                      as Well,
      @ObjectModel.text.element:  [ 'WellCompletionName' ]
      @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}      
  key wc_no                                                                      as WellCompletion,
      @Semantics.text: true
      @EndUserText.label: 'Well Completion Name'
      cast (name as oiu_wc_nm preserving type)                                   as WellCompletionName,
      api_wc_no                                                                  as APIWellCompletionNumber,
      @ObjectModel.foreignKey.association: '_DevelopmentProgramNmbr'
      dev_pgm_no                                                                 as DevelopmentProgramNmbr,
      cast ( 'DEG' as oiu_uom )   as LatitudeUnit,    
      @Semantics.quantity.unitOfMeasure: 'LatitudeUnit'      
      lat_no                                                                     as WellCompletionLatitude,
      lat_dir_cd                                                                 as WellCompltnLatitudeDirection,
      cast ( 'DEG' as oiu_uom )   as LongitudeUnit, 
      @Semantics.quantity.unitOfMeasure: 'LongitudeUnit'      
      lng_no                                                                     as WellCompletionLongitude,
      lng_dir_cd                                                                 as WellCompltnLongitudeDirection,
      @ObjectModel.foreignKey.association: '_Country'
      @Semantics.address.country: true
      cast( cntry_cd as land1_gp )                                               as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      @Semantics.address.region: true
      pri_geo_loc                                                                as PrimaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_SecondaryGeogrlLocation'
      @Semantics.address.subRegion: true
      sec_geo_loc                                                                as SecondaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_OffshorePlatform'
      pf_no                                                                      as OffshorePlatform,
      @ObjectModel.foreignKey.association: '_Reservoir'
      resrv                                                                      as Reservoir,
      @ObjectModel.foreignKey.association: '_ReservoirZone'
      reszn                                                                      as ReservoirZone,
      @ObjectModel.foreignKey.association: '_GeologicField'
      field                                                                      as GeologicField,
      @ObjectModel.foreignKey.association: '_WellPurpose'
      pur_cd                                                                     as WellPurpose,
      alt_wc_key                                                                 as AlternateWellCompletionKey,
      @ObjectModel.foreignKey.association: '_WellCompletionHier'
      wc_set                                                                     as WellCompletionHier,
      @ObjectModel.foreignKey.association: '_OrganizationalUnit'
      or1_or_lvl_1_no                                                            as OrganizationalUnit,
      @ObjectModel.foreignKey.association: '_OrganizationalUnit2'
      or2_or_lvl_2_no                                                            as OrganizationalUnit2,
      @ObjectModel.foreignKey.association: '_OrganizationalUnit3'
      or3_or_lvl_3_no                                                            as OrganizationalUnit3,
      @ObjectModel.foreignKey.association: '_OrganizationalUnit4'
      or4_or_lvl_4_no                                                            as OrganizationalUnit4,
      @ObjectModel.foreignKey.association: '_CoalBedMethaneRptgIsEnabled'
      cbm_indicator                                                              as CoalBedMethaneRptgIsEnabled,

      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                                  as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                             as CreationDateTime,

      _Well,
      _DevelopmentProgramNmbr,
      _WellPurpose,
      _WellCompletionHier,
      _Country,
      _PrimaryGeogrlLocation,
      _SecondaryGeogrlLocation,
      _OffshorePlatform,
      _Reservoir,
      _ReservoirZone,
      _GeologicField,
      _CoalBedMethaneRptgIsEnabled,
      _OrganizationalUnit,
      _OrganizationalUnit2,
      _OrganizationalUnit3,
      _OrganizationalUnit4,
      _CreatedByUser
};
```
