---
name: I_DELIVERYNETWORK
description: "Master Data for Delivery Network"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DELIVERYNETWORK')/$value
semantic_en: "Master Data for Delivery Network"
semantic_vi: "Master Data for Delivery Network — CDS view giao diện dựa trên oiu_pr_dn."
keywords:
  - "master"
  - "data"
  - "for"
  - "delivery"
  - "network"
  - "name"
  - "country"
  - "primary"
  - "geogrl"
  - "location"
  - "secondary"
tags:
  - IS
  - bo:businesspartner
  - component:IS-OIL-PRA
  - delivery
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - master-data
---
# I_DELIVERYNETWORK

**Master Data for Delivery Network**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DELIVERYNETWORK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryNetwork` | ✓ | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `DeliveryNetworkName` |  | |  | `cast (dn_de as oiu_dn_de preserving type)` | `CHAR(35)` | Delivery network description |
| `Country` |  | |  | `cast( cntry_cd as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  | `sec_geo_loc` | `CHAR(3)` | Secondary geographic location |
| `CompanyCode` |  | |  | `cast ( bukrs as fis_bukrs )` | `CHAR(4)` | Company Code |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DeliveryNetworkType` |  | |  | `type_cd` | `CHAR(1)` | Delivery network type code |
| `DeliveryNetworkHier` |  | |  | `dn_set` | `CHAR(15)` | Delivery Network Hierarchy Group |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `_CompanyCode` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_SecondaryGeogrlLocation` | | ✓ | | | | |
| `_DeliveryNetworkTypeCode` | | ✓ | | | | |
| `_DeliveryNetworkHier` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_SecondaryGeogrlLocation` | `I_SecondaryGeogrlLocation` | [0..1] |
| `_DeliveryNetworkTypeCode` | `I_DeliveryNetworkTypeCode` | [0..1] |
| `_DeliveryNetworkHier` | `I_DeliveryNetworkHier` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DELIVERYNETWORK')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DELIVERYNETWORK')/$value)*

```abap
@EndUserText.label: 'Master Data for Delivery Network'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVDELIVNTWK'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'DeliveryNetwork'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRADeliveryNetwork'

define view I_DeliveryNetwork
  as select from oiu_pr_dn
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAJointVenture         as _PRAJointVenture         on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                              and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_Country                 as _Country                 on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation   as _PrimaryGeogrlLocation   on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                              and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_SecondaryGeogrlLocation as _SecondaryGeogrlLocation on  $projection.Country                 = _SecondaryGeogrlLocation.Country
                                                                              and $projection.PrimaryGeogrlLocation   = _SecondaryGeogrlLocation.PrimaryGeogrlLocation
                                                                              and $projection.SecondaryGeogrlLocation = _SecondaryGeogrlLocation.SecondaryGeogrlLocation
  association [0..1] to I_DeliveryNetworkTypeCode as _DeliveryNetworkTypeCode on  $projection.DeliveryNetworkType = _DeliveryNetworkTypeCode.DeliveryNetworkType
  association [0..1] to I_DeliveryNetworkHier     as _DeliveryNetworkHier     on  $projection.DeliveryNetworkHier = _DeliveryNetworkHier.DeliveryNetworkHier
  association [0..1] to I_User                    as _CreatedByUser           on  $projection.CreatedByUser = _CreatedByUser.UserID
{
      @ObjectModel.text.element:  [ 'DeliveryNetworkName' ]
  key dn_no                                                                                                       as DeliveryNetwork,
      @Semantics.text: true
      cast (dn_de as oiu_dn_de preserving type)                                                                   as DeliveryNetworkName,
      @ObjectModel.foreignKey.association: '_Country'
      @Semantics.address.country: true
      cast( cntry_cd as land1_gp )                                                                                as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      @Semantics.address.region: true
      pri_geo_loc                                                                                                 as PrimaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_SecondaryGeogrlLocation'
      @Semantics.address.subRegion: true
      sec_geo_loc                                                                                                 as SecondaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast ( bukrs as fis_bukrs )                                                                                 as CompanyCode,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
      vname                                                                                                       as JointVenture,
      @ObjectModel.foreignKey.association: '_DeliveryNetworkTypeCode'
      type_cd                                                                                                     as DeliveryNetworkType,
      @ObjectModel.foreignKey.association: '_DeliveryNetworkHier'
      dn_set                                                                                                      as DeliveryNetworkHier,
      //@ObjectModel.foreignKey.association: '_CreatedByUser'
      cast( oiu_cruser as fclm_bam_created_by )                                                                   as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                                                              as CreationDateTime,
      _CreatedByUser,
      _DeliveryNetworkTypeCode,
      _DeliveryNetworkHier,
      _Country,
      _PrimaryGeogrlLocation,
      _SecondaryGeogrlLocation,
      _CompanyCode,
      _PRAJointVenture
};
```
