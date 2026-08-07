---
name: I_SECONDARYREGION
description: Secondaryregion
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
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_SECONDARYREGION

**Secondaryregion**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Country` | ✓ | |  | `country` |
| `Region` | ✓ | |  | `region` |
| `SecondaryRegion` | ✓ | |  | `county_code` |
| `_Country` | | ✓ | | |
| `_Region` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_Text` | `I_SecondaryRegionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISECONDARYREGION'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Secondary Region'
@ObjectModel.representativeKey: 'SecondaryRegion'
@ObjectModel.sapObjectNodeType.name: 'SecondaryRegion'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]

@VDM.viewType: #BASIC
define view I_SecondaryRegion
  as select from adrcounty
  association [1..1] to I_Country             as _Country on  $projection.Country = _Country.Country
  
  association [1..1] to I_Region              as _Region  on  $projection.Region  = _Region.Region
                                                          and $projection.Country = _Region.Country
                                                          
  association [0..*] to I_SecondaryRegionText as _Text    on  $projection.Country         = _Text.Country
                                                          and $projection.Region          = _Text.Region
                                                          and $projection.SecondaryRegion = _Text.SecondaryRegion
{
      @ObjectModel.foreignKey.association: '_Country'
  key country     as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key region      as Region,
      @ObjectModel.text.association: '_Text'
  key county_code as SecondaryRegion,
      _Country,
      _Region,
      _Text
}
```
