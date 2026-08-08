---
name: I_TAXINGCOUNTYTEXT
description: "Taxingcountytext"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - tax
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_TAXINGCOUNTYTEXT

**Taxingcountytext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `Country` | ✓ | |  | `land1` |  |  |
| `Region` | ✓ | |  | `regio` |  |  |
| `TaxingCounty` | ✓ | |  | `counc` |  |  |
| `TaxingCountyName` |  | |  | `bezei` |  |  |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_TaxingCounty` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_TaxingCounty` | `I_TaxingCounty` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'ITAXINGCOUNTYTXT'
@EndUserText.label: 'Description of Taxing County'
@ObjectModel.representativeKey: 'TaxingCounty'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_TaxingCountyText
  as select from t005f
  association [1..1] to I_Country      as _Country      on  $projection.Country = _Country.Country

  association [1..1] to I_Region       as _Region       on  $projection.Region  = _Region.Region
                                                        and $projection.Country = _Region.Country

  association [1..1] to I_TaxingCounty as _TaxingCounty on  $projection.Country      = _TaxingCounty.Country
                                                        and $projection.Region       = _TaxingCounty.Region
                                                        and $projection.TaxingCounty = _TaxingCounty.TaxingCounty
{
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_Country'
  key land1 as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key regio as Region,
  key counc as TaxingCounty,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      bezei as TaxingCountyName,
      _Country,
      _Region,
      _TaxingCounty
}
```
