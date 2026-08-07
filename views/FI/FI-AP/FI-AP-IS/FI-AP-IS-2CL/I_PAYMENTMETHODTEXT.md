---
name: I_PAYMENTMETHODTEXT
description: "Paymentmethodtext"
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-IS
  - interface-view
  - text-view
  - payment
  - text
  - component:FI-AP-IS-2CL
  - lob:Finance
---
# I_PAYMENTMETHODTEXT

**Paymentmethodtext**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  |  |  |  |
| `PaymentMethod` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `PaymentMethodDescription` |  | |  |  |  |  |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Payment Method - Text'
@AbapCatalog.sqlViewName: 'IFIPAYTMETHTEXT'
@ObjectModel.representativeKey: 'PaymentMethod'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@Search.searchable: true
define view I_PaymentMethodText
  as select from P_PaymentMethodText

  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
       @ObjectModel.foreignKey.association: '_Country'
  key  P_PaymentMethodText.Country,
       @ObjectModel.text.element: 'PaymentMethodDescription'
  key  P_PaymentMethodText.PaymentMethod,
       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  P_PaymentMethodText.Language,

       @Semantics.text: true
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       P_PaymentMethodText.PaymentMethodDescription,

       _Country,
       _Language
}
```
