---
name: I_PH_ALPHANUMERICTAXCODE
description: "PH Alphanumerictaxcode"
app_component: FI-LOC-FI-PH
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - tax
  - component:FI-LOC-FI-PH
  - lob:Finance
---
# I_PH_ALPHANUMERICTAXCODE

**PH Alphanumerictaxcode**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-PH` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `country` |  |  |
| `AlphanumericTaxCode` | ✓ | |  | `fiph_atc` |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Text` | `I_PH_AlphanumericTaxCodeText` | [0..*] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl:{authorizationCheck: #NOT_REQUIRED, personalData.blocking: #NOT_REQUIRED}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API 
@AbapCatalog.sqlViewName: 'IPHATCC'
@ObjectModel:{representativeKey: 'AlphanumericTaxCode', usageType.sizeCategory: #S, usageType.dataClass: #CUSTOMIZING, 
              usageType.serviceQuality: #A, supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]}
@EndUserText.label: 'Philippines Alphanumeric Tax Code'
define view I_PH_AlphanumericTaxCode
  as select from fiph_atc_code
  association [0..1] to I_Country                    as _Country on  $projection.Country = _Country.Country
  association [0..*] to I_PH_AlphanumericTaxCodeText as _Text    on  $projection.Country             = _Text.Country
                                                                 and $projection.AlphanumericTaxCode = _Text.AlphanumericTaxCode
{
      @ObjectModel.foreignKey.association: '_Country'
  key country  as Country,
  key fiph_atc as AlphanumericTaxCode,
      _Country,
      _Text
}
```
