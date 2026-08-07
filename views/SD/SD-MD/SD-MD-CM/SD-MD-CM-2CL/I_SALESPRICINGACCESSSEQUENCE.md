---
name: I_SALESPRICINGACCESSSEQUENCE
description: Salespricingaccesssequence
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
  - pricing
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_SALESPRICINGACCESSSEQUENCE

**Salespricingaccesssequence**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccessSequence` | ✓ | |  | `kozgf` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsPricingAccessSequenceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSCNDNACCESS'
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Access Sequence for Pricing'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'AccessSequence'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'SalesPricingAccessSequence'
define view I_SalesPricingAccessSequence
  as select from t682
  association [0..*] to I_SlsPricingAccessSequenceText as _Text on $projection.AccessSequence = _Text.AccessSequence
{
      //key kvewe as ConditionUsage,
      //key kappl as ConditionApplication,
      
      @ObjectModel.text.association: '_Text'
  key kozgf as AccessSequence,
      //  _PricingAccess,
      _Text
}
where
      kvewe = 'A'
  and kappl = 'V'
```
