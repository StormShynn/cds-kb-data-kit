---
name: I_FIXEDASSETNATLCLFN
description: "Fixed AssetNATLCLFN"
app_component: FI-LOC-AA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-AA
  - interface-view
  - fixed-asset
  - component:FI-LOC-AA
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSETNATLCLFN

**Fixed AssetNATLCLFN**

| Property | Value |
|---|---|
| App Component | `FI-LOC-AA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land` |  |  |
| `NationalClassification` | ✓ | |  | `glo_natl_clfn_code` |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1] |
| `_Text` | `I_FixedAssetNatlClfnText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIASTNATLCLFN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'IFixedAssetNatlClfn'
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'NationalClassification',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_FixedAssetNatlClfn
  as select from glofaanclcode
  association [1]    to I_Country                as _Country on  $projection.Country = _Country.Country
  association [0..*] to I_FixedAssetNatlClfnText as _Text    on  $projection.Country                = _Text.Country
                                                             and $projection.NationalClassification = _Text.NationalClassification
{
      @ObjectModel.foreignKey.association: '_Country'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Country', element: 'Country' }, useAsTemplate: true }]
  key land               as Country,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key glo_natl_clfn_code as NationalClassification,

      _Country,
      _Text
}
```
