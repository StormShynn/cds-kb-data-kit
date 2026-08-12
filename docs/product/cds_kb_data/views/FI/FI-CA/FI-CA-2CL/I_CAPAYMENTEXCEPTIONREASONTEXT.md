---
name: I_CAPAYMENTEXCEPTIONREASONTEXT
description: "Capaymentexceptionreasontext"
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
  - text-view
  - payment
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPAYMENTEXCEPTIONREASONTEXT

**Capaymentexceptionreasontext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAPaymentExceptionReason` | ✓ | |  | `poken` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAPaymentExceptionReasonName` |  | |  | `poket` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICAPAYMEXCRSNTXT'

@EndUserText.label: 'Payment Exception Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAPaymentExceptionReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPaymentExceptionReasonText
  as select from tfkpkt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key poken as CAPaymentExceptionReason,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      poket as CAPaymentExceptionReasonName,

      _Language
}
```
