---
name: I_CAWITHHOLDINGTAXSUPPLEMENT
description: "Cawithholdingtaxsupplement"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CAWITHHOLDINGTAXSUPPLEMENT

**Cawithholdingtaxsupplement**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `CAWithholdingTaxSupplement` | ✓ | |  | `qssew` |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Text` | `I_CAWithholdingTaxSupplementT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Withholding Tax Supplement'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAWithholdingTaxSupplement',
                sapObjectNodeType.name: 'ContrAcctgWhldgTaxSupplement',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CAWithholdingTaxSupplement
  as select from tfk059e

  association [0..1] to I_Country                     as _Country on  $projection.Country = _Country.Country
  association [0..*] to I_CAWithholdingTaxSupplementT as _Text    on  $projection.Country                    = _Text.Country
                                                                  and $projection.CAWithholdingTaxSupplement = _Text.CAWithholdingTaxSupplement

{
      @ObjectModel.foreignKey.association: '_Country'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
  key land1 as Country,
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
  key qssew as CAWithholdingTaxSupplement,

      _Country,
      _Text
}
```
