---
name: I_US_TAXSTATE
description: "US Taxstate"
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - tax
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_US_TAXSTATE

**US Taxstate**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_US_TaxStateText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSTAXSTATE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'US External Tax State'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'US_TaxState'
@ObjectModel.sapObjectNodeType.name: 'US_TaxState'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_US_TaxState
  as select from I_Region as region
  association [0..*] to I_US_TaxStateText as _Text on $projection.US_TaxState = _Text.US_TaxState
{
      @ObjectModel.text.association: '_Text'
  key cast ( Region as fis_etxdc_region ) as US_TaxState,
      /* Associations */
      _Text
}
where
  region.Country = 'US'
```
