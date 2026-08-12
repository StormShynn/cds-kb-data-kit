---
name: I_PRAJOINTVENTURE
description: "PRA Joint Venture"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAJOINTVENTURE')/$value
semantic_en: "PRA Joint Venture"
semantic_vi: "PRA Joint Venture — CDS view giao diện dựa trên oiu_do_jv."
keywords:
  - "pra"
  - "joint"
  - "venture"
  - "company"
  - "code"
  - "name"
  - "country"
  - "primary"
  - "geogrl"
  - "location"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAJOINTVENTURE

**PRA Joint Venture**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAJOINTVENTURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( bukrs as fis_bukrs )` | `CHAR(4)` | Company Code |
| `PRAJointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `PRAJointVentureName` |  | |  | `vname_nm` | `CHAR(35)` | Venture Name |
| `Country` |  | |  | `cast( country as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `pri_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  | `sec_geo_loc` | `CHAR(3)` | Secondary geographic location |
| `JointVentureIsUnit` |  | |  | `unit_fl` | `CHAR(1)` | Unit venture flag |
| `DivisionOfInterestIsByTract` |  | |  | `doi_by_tr_fl` | `CHAR(1)` | DOI by tract flag |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_SecondaryGeogrlLocation` | | ✓ | | | | |
| `_JointVentureIsUnit` | | ✓ | | | | |
| `_DivisionOfInterestIsByTract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JointVenture` | `I_JointVenture` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_SecondaryGeogrlLocation` | `I_SecondaryGeogrlLocation` | [0..1] |
| `_JointVentureIsUnit` | `I_Indicator` | [0..1] |
| `_DivisionOfInterestIsByTract` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAJOINTVENTURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAJOINTVENTURE')/$value)*

```abap
@EndUserText.label: 'PRA Joint Venture'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPJNTVENTURE'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PRAJointVenture'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAJointVenture'
@Search.searchable: true

define view I_PRAJointVenture
  as select from oiu_do_jv
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_JointVenture            as _JointVenture            on  $projection.CompanyCode     = _JointVenture.CompanyCode
                                                                              and $projection.PRAJointVenture = _JointVenture.JointVenture
  association [0..1] to I_Country                 as _Country                 on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation   as _PrimaryGeogrlLocation   on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                              and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_SecondaryGeogrlLocation as _SecondaryGeogrlLocation on  $projection.Country                 = _SecondaryGeogrlLocation.Country
                                                                              and $projection.PrimaryGeogrlLocation   = _SecondaryGeogrlLocation.PrimaryGeogrlLocation
                                                                              and $projection.SecondaryGeogrlLocation = _SecondaryGeogrlLocation.SecondaryGeogrlLocation
  association [0..1] to I_Indicator              as _JointVentureIsUnit  on $projection.JointVentureIsUnit = _JointVentureIsUnit.IndicatorValue
  association [0..1] to I_Indicator              as _DivisionOfInterestIsByTract on $projection.DivisionOfInterestIsByTract = _DivisionOfInterestIsByTract.IndicatorValue
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( bukrs as fis_bukrs )                 as CompanyCode,
      @ObjectModel.text.element:  [ 'PRAJointVentureName' ]
      @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}      
  key vname                                      as PRAJointVenture,
      @Semantics.text: true
      @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}        
      vname_nm                                   as PRAJointVentureName,
      @ObjectModel.foreignKey.association: '_Country'
      cast( country as land1_gp )                as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      pri_geo_loc                                as PrimaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_SecondaryGeogrlLocation'
      sec_geo_loc                                as SecondaryGeogrlLocation,
      @ObjectModel.foreignKey.association: '_JointVentureIsUnit'
      unit_fl                                    as JointVentureIsUnit,
      @ObjectModel.foreignKey.association: '_DivisionOfInterestIsByTract'
      oiu_do_jv.doi_by_tr_fl                     as DivisionOfInterestIsByTract,
      _JointVenture,
      _CompanyCode,
      _Country,
      _PrimaryGeogrlLocation,
      _SecondaryGeogrlLocation,
      _JointVentureIsUnit,
      _DivisionOfInterestIsByTract
};
```
