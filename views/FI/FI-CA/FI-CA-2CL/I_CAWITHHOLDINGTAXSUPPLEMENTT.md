---
name: I_CAWITHHOLDINGTAXSUPPLEMENTT
description: Cawithholdingtaxsupplementt
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
# I_CAWITHHOLDINGTAXSUPPLEMENTT

**Cawithholdingtaxsupplementt**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |
| `CAWithholdingTaxSupplement` | ✓ | |  | `qssew` |
| `Language` | ✓ | |  | `spras` |
| `CAWithholdingTaxSuplmntName` |  | |  | `txt30` |
| `_Country` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICAWTHLDNGTXSPMT'

@EndUserText.label: 'Withholding Tax Supplement - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAWithholdingTaxSupplement',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAWithholdingTaxSupplementT
  as select from tfk059et

  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Country'
  key land1 as Country,
  key qssew as CAWithholdingTaxSupplement,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      txt30 as CAWithholdingTaxSuplmntName,

      _Country,
      _Language
}
```
