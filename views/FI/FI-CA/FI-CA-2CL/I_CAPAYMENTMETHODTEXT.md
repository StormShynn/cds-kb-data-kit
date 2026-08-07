---
name: I_CAPAYMENTMETHODTEXT
description: Capaymentmethodtext
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
  - text-view
  - payment
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPAYMENTMETHODTEXT

**Capaymentmethodtext**

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
| `CAPaymentMethod` | ✓ | |  | `zlsch` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAPaymentMethodName` |  | |  | `cast( text1 as pymet_text_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Payment Method - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAPaymentMethod',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPaymentMethodText
  as select from tfk042zt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country

{
      @ObjectModel.foreignKey.association: '_Country'
  key land1                                          as Country,
  key zlsch                                          as CAPaymentMethod,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                          as Language,

      @Semantics.text
      cast( text1 as pymet_text_kk preserving type ) as CAPaymentMethodName,

      _Language,
      _Country
}
```
