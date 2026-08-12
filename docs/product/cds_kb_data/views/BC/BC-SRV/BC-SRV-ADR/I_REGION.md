---
name: I_REGION
description: "Region"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_REGION

**Region**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `Region` | ✓ | |  | `bland` | `CHAR(3)` | Region (State, Province, County) |
| `_RegionText` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RegionText` | `I_RegionText` | [0..*] |
| `_Country` | `I_Country` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'Region'
@ObjectModel.sapObjectNodeType.name: 'Region'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@AbapCatalog.sqlViewName: 'IREGION'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Region'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true

define view I_Region
  as select from t005s
  association [0..*] to I_RegionText as _RegionText on  $projection.Region  = _RegionText.Region
                                                    and $projection.Country = _RegionText.Country
  association [1..1] to I_Country    as _Country    on  $projection.Country = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Country'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key t005s.land1 as Country,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_RegionText'
  key t005s.bland as Region,

      _RegionText,
      _Country
}
```
