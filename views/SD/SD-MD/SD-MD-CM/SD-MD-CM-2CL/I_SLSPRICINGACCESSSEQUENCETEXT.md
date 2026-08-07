---
name: I_SLSPRICINGACCESSSEQUENCETEXT
description: Slspricingaccesssequencetext
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_SLSPRICINGACCESSSEQUENCETEXT

**Slspricingaccesssequencetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `AccessSequence` | ✓ | |  | `kozgf` |  |  |
| `AccessSequenceText` |  | |  | `vtxtm` |  |  |
| `_SalesPricingAccessSequence` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesPricingAccessSequence` | `I_SalesPricingAccessSequence` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSCNDNACCESST'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@EndUserText.label: 'Access Sequence for Pricing - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'AccessSequence'
@Metadata.ignorePropagatedAnnotations:true
define view I_SlsPricingAccessSequenceText
  as select from t682t
  association [1..1] to I_SalesPricingAccessSequence as _SalesPricingAccessSequence on $projection.AccessSequence = _SalesPricingAccessSequence.AccessSequence
{
      @Semantics.language: true
  key spras as Language,
  key kozgf as AccessSequence,
      @Semantics.text: true
      vtxtm as AccessSequenceText,
      _SalesPricingAccessSequence
}
where
      kvewe = 'A'
  and kappl = 'V'
```
