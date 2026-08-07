---
name: I_TAXINGCOUNTY
description: "Taxingcounty"
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
  - tax
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_TAXINGCOUNTY

**Taxingcounty**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `Region` | ✓ | |  | `regio` |  |  |
| `TaxingCounty` | ✓ | |  | `counc` |  |  |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_Text` | `I_TaxingCountyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Taxing County'
@ObjectModel.representativeKey: 'TaxingCounty'
@Analytics.technicalName: 'ITAXINGCOUNTY'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.sapObjectNodeType.name: 'TaxingCounty'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_TaxingCounty
  as select from t005e
  association [1..1] to I_Country          as _Country on  $projection.Country = _Country.Country

  association [1..1] to I_Region           as _Region  on  $projection.Region  = _Region.Region
                                                       and $projection.Country = _Region.Country

  association [0..*] to I_TaxingCountyText as _Text    on  $projection.Country      = _Text.Country
                                                       and $projection.Region       = _Text.Region
                                                       and $projection.TaxingCounty = _Text.TaxingCounty
{
      @ObjectModel.foreignKey.association: '_Country'
  key land1 as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key regio as Region,
      @ObjectModel.text.association: '_Text'
  key counc as TaxingCounty,
      _Country,
      _Region,
      _Text
}
```
