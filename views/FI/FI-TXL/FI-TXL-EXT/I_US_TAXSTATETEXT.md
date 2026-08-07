---
name: I_US_TAXSTATETEXT
description: US Taxstatetext
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - text-view
  - tax
  - text
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_US_TAXSTATETEXT

**US Taxstatetext**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `US_TaxState` | ✓ | |  | `cast ( Region as fis_etxdc_region )` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `US_TaxStateName` |  | |  | `RegionName` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSTAXSTATETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'US External Tax State - Text'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@Analytics: { dataExtraction.enabled: true  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'US_TaxState'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_US_TaxStateText
  as select from I_RegionText as regionText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['US_TaxStateName']
  key cast ( Region as fis_etxdc_region )     as US_TaxState,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      @Semantics.text
      RegionName as US_TaxStateName,
      /* Associations */
      _Language
}
where
  regionText.Country = 'US'
```
