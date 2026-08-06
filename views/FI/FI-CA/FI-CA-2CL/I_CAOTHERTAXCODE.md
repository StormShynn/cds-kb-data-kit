---
name: I_CAOTHERTAXCODE
description: Caothertaxcode
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - tax
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOTHERTAXCODE

**Caothertaxcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Country` | `land` |
| key `CAOtherTaxCode` | `strkz` |
| `CAOtherTaxPercentage` | `pertax` |
| `CACategoriesAreUsedForOtherTax` | `xkschl` |
| `CAIsValidForUSTelcomTaxCode` | `xustc` |
| `_Country` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Text` | `I_CAOtherTaxCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Other Tax Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAOtherTaxCode',
                sapObjectNodeType.name: 'ContrAcctgOtherTaxCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAOtherTaxCode
  as select from tfk007f

  association [0..1] to I_Country            as _Country on  $projection.Country = _Country.Country
  association [0..*] to I_CAOtherTaxCodeText as _Text    on  $projection.Country        = _Text.Country
                                                         and $projection.CAOtherTaxCode = _Text.CAOtherTaxCode
{
      @ObjectModel.foreignKey.association: '_Country'
  key land   as Country,
      @ObjectModel.text.association: '_Text'
  key strkz  as CAOtherTaxCode,

      pertax as CAOtherTaxPercentage,
      xkschl as CACategoriesAreUsedForOtherTax,
      xustc  as CAIsValidForUSTelcomTaxCode,
      //    xspgl,

      _Country,
      _Text
}
```
