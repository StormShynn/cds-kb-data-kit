---
name: I_SEVERANCETAXTYPETEXT
description: "Severance Tax Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPETEXT')/$value
semantic_en: "Severance Tax Type - Text"
semantic_vi: "Severance Tax Type - Text — CDS view giao diện dựa trên oiu_cm_sevtty_tx."
keywords:
  - "severance"
  - "tax"
  - "type"
  - "text"
  - "country"
  - "primary"
  - "geogrl"
  - "location"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_SEVERANCETAXTYPETEXT

**Severance Tax Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `country` | `CHAR(3)` | Company Country/Region |
| `PrimaryGeogrlLocation` | ✓ | |  | `prim_geo_loc` | `CHAR(2)` | Primary Geographical Location |
| `SeveranceTaxType` | ✓ | |  | `sevt_tax_ty` | `CHAR(2)` | Severance Tax Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SeveranceTaxTypeName` |  | |  | `sevt_tax_de` | `CHAR(50)` | Severance Tax Type Description |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEVERANCETAXTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Severance Tax Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSEVTAXTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'SeveranceTaxType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

define view I_SeveranceTaxTypeText
  as select from oiu_cm_sevtty_tx
  association [0..1] to I_Country               as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation as _PrimaryGeogrlLocation on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                          and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
{
      @ObjectModel.foreignKey.association: '_Country'
  key country       as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
  key prim_geo_loc  as PrimaryGeogrlLocation,
  key sevt_tax_ty   as SeveranceTaxType,
      @Semantics.language
  key spras         as Language,
      @Semantics.text
      sevt_tax_de   as SeveranceTaxTypeName,
      _Country,
      _PrimaryGeogrlLocation
}
```
