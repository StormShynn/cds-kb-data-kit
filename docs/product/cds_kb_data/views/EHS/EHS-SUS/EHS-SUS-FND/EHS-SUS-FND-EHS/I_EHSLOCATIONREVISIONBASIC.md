---
name: I_EHSLOCATIONREVISIONBASIC
description: "This CDS view allows customer extensions to access location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONBASIC')/$value
semantic_en: "This CDS view allows customer extensions to access location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Location Revision — CDS view giao diện dựa trên ehfndd_loc_rev."
keywords:
  - "location"
  - "revision"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
  - "last"
  - "change"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-FND-EHS
  - customer
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONREVISIONBASIC

**This CDS view allows customer extensions to access location revision data. It can be used in key user extensions as an association target or for selection of location data. This CDS view provides the data to answer the following business questions: How can I use location revisions in my key user extensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationRevisionUUID` | ✓ | |  | `db_key` | `RAW(16)` | EHS Location - Revision UUID |
| `EHSLocationUUID` |  | |  | `cast( parent_key as ehfnd_location_uuid_ref preserving type )` | `RAW(16)` | Location |
| `CreationDateTime` |  | |  | `cast( crea_date_time as ehfnd_bo_crea_date_time preserving type )` | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  | `cast( crea_uname as ehfnd_bo_crea_uname preserving type )` | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  | `cast( lchg_date_time as ehfnd_bo_lchg_date_time preserving type )` | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  | `cast( lchg_uname as ehfnd_bo_lchg_uname preserving type )` | `CHAR(12)` | Last Change By |
| `RevisionDescription` |  | |  | `revision_descr` | `CHAR(80)` | Revision Description |
| `RevisionStartDate` |  | |  | `split_date` | `DATS(8)` | Revision Start Date |
| `RevisionEndDate` |  | |  | `end_date` | `DATS(8)` | Revision End Date |
| `EHSLocationType` |  | |  | `cast( type as ehfnd_loc_type_code_nc preserving type )` | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  | `cast( status as ehfnd_loc_status_nc preserving type )` | `CHAR(2)` | Location Status |
| `EHSFunctionalLocation` |  | |  | `cast( funct_loc_id as ehfnd_funct_loc_id_nc preserving type )` | `CHAR(40)` | Functional Location ID |
| `Equipment` |  | |  | `equipment_id` | `CHAR(18)` | Equipment |
| `Plant` |  | |  | `plant_id` | `CHAR(4)` | Plant ID |
| `CompanyCode` |  | |  | `company_code` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `buss_area` | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  | `cost_center` | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  | `controlling_area` | `CHAR(4)` | Controlling Area |
| `OrganizationalUnit` |  | |  | `cast( org_unit as ehfnd_org_unit_id_nc preserving type )` | `NUMC(8)` | Organizational Unit ID |
| `EHSLocationAuthorizationGroup` |  | |  | `cast( auth_group as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `CityName` |  | |  | `city1` | `CHAR(40)` | City |
| `PostalCode` |  | |  | `post_code1` | `CHAR(10)` | City Postal Code |
| `StreetName` |  | |  | `street` | `CHAR(60)` | Street Address |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region |
| `Region` |  | |  | `region` | `CHAR(3)` | Region |
| `EHSLocationPhone` |  | |  | `phone` | `CHAR(30)` | Telephone Number |
| `Longitude` |  | |  | `cast( longitute as ehfnd_geoloc_longitude_nc preserving type )` | `DEC(15)` | Geographic Longitude |
| `Latitude` |  | |  | `cast( latitude as ehfnd_geoloc_latitude_nc preserving type )` | `DEC(15)` | Geographic Latitude |
| `LongitudeUnit` |  | |  | `cast( 'DEG' as ehfnd_geo_longitude_unit_code )` | `UNIT(3)` | Longitude Unit |
| `LatitudeUnit` |  | |  | `cast( 'DEG' as ehfnd_geo_latitude_unit_code )` | `UNIT(3)` | Latitude Unit |
| `StorageLocation` |  | |  | `storage_loc` | `CHAR(4)` | Storage Location |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONBASIC')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Location Revision'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@VDM.viewType: #BASIC
define view entity I_EHSLocationRevisionBasic
  as select from ehfndd_loc_rev
{
  key db_key                                                            as EHSLocationRevisionUUID,
      cast( parent_key as ehfnd_location_uuid_ref preserving type )     as EHSLocationUUID,
      @Semantics.systemDateTime.createdAt
      cast( crea_date_time as ehfnd_bo_crea_date_time preserving type ) as CreationDateTime,
      @Semantics.user.createdBy
      cast( crea_uname as ehfnd_bo_crea_uname preserving type )         as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt
      cast( lchg_date_time as ehfnd_bo_lchg_date_time preserving type ) as LastChangeDateTime,
      @Semantics.user.lastChangedBy
      cast( lchg_uname as ehfnd_bo_lchg_uname preserving type )         as LastChangedByUser,
      revision_descr                                                    as RevisionDescription,
      split_date                                                        as RevisionStartDate,
      //  split_time as SplitTime,
      end_date                                                          as RevisionEndDate,
      cast( type as ehfnd_loc_type_code_nc preserving type )            as EHSLocationType,
      cast( status as ehfnd_loc_status_nc preserving type )             as EHSLocationStatus,
      cast( funct_loc_id as ehfnd_funct_loc_id_nc preserving type )     as EHSFunctionalLocation,
      equipment_id                                                      as Equipment,
      plant_id                                                          as Plant,
      company_code                                                      as CompanyCode,
      buss_area                                                         as BusinessArea,
      cost_center                                                       as CostCenter,
      controlling_area                                                  as ControllingArea,
      cast( org_unit as ehfnd_org_unit_id_nc preserving type )          as OrganizationalUnit,
      cast( auth_group as ehfnd_loc_auth_group_nc preserving type )     as EHSLocationAuthorizationGroup,
      //  desc_key_ref as DescKeyRef,
      //  syncup_timestamp as SyncupTimestamp,
      //  name1 as Name1,
      //  name2 as Name2,
      city1                                                             as CityName,
      post_code1                                                        as PostalCode,
      street                                                            as StreetName,
      country                                                           as Country,
      region                                                            as Region,
      phone                                                             as EHSLocationPhone,
      //  fax as Fax,
      @Semantics.geoLocation.longitude: true
      @Semantics.quantity.unitOfMeasure: 'LongitudeUnit'
      cast( longitute as ehfnd_geoloc_longitude_nc preserving type )    as Longitude,
      @Semantics.geoLocation.latitude:  true
      @Semantics.quantity.unitOfMeasure: 'LatitudeUnit'
      cast( latitude as ehfnd_geoloc_latitude_nc preserving type )      as Latitude,
      cast( 'DEG' as ehfnd_geo_longitude_unit_code )                    as LongitudeUnit,
      cast( 'DEG' as ehfnd_geo_latitude_unit_code )                     as LatitudeUnit,
      //  elevation as Elevation,
      //  time_zone as TimeZone,
      storage_loc                                                       as StorageLocation
      //  warehouse_num as WarehouseNum,
      //  storage_type as StorageType,
      //  storage_section as StorageSection,
      //  storage_bin as StorageBin,
      //  image_key_ref as ImageKeyRef,
      //  eew_ehfnd_lrev_d as EewEhfndLrevD
}
```
