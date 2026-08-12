---
name: I_SEVERANCETAXTYPE
description: "Severance Tax Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPE')/$value
semantic_en: "Severance Tax Type"
semantic_vi: "Severance Tax Type — CDS view giao diện dựa trên oiu_cm_sevtty."
keywords:
  - "severance"
  - "tax"
  - "type"
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
# I_SEVERANCETAXTYPE

**Severance Tax Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `country` | `CHAR(3)` | Company Country/Region |
| `PrimaryGeogrlLocation` | ✓ | |  | `prim_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SeveranceTaxType` | ✓ | |  | `sevt_tax_ty` | `CHAR(2)` | Severance Tax Type |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_Text` | `I_SeveranceTaxTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPE')/$value)*

```abap
@EndUserText.label: 'Severance Tax Type'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSEVTAXTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'SeveranceTaxType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRASeveranceTaxType'

define view I_SeveranceTaxType
  as select from oiu_cm_sevtty
  association [0..1] to I_Country               as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation as _PrimaryGeogrlLocation on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                          and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..*] to I_SeveranceTaxTypeText  as _Text                  on  $projection.Country               = _Text.Country
                                                                          and $projection.PrimaryGeogrlLocation = _Text.PrimaryGeogrlLocation
                                                                          and $projection.SeveranceTaxType      = _Text.SeveranceTaxType
{
      @ObjectModel.foreignKey.association: '_Country'
  key country       as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
  key prim_geo_loc  as PrimaryGeogrlLocation,
      @ObjectModel.text.association: '_Text'
  key sevt_tax_ty   as SeveranceTaxType,
      _Country,
      _PrimaryGeogrlLocation,
      _Text
}
```
