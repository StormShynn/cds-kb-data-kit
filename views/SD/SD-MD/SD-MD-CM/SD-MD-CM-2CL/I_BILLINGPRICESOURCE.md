---
name: I_BILLINGPRICESOURCE
description: Billingpricesource
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
  - billing
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPRICESOURCE

**Billingpricesource**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillingPriceSource` | `cast ( substring( domvalue_l, 1, 1 ) as prsqu )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingPriceSourceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBILLGPRICESRCE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Billing Price Source'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'BillingPriceSource'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.sapObjectNodeType.name: 'BillingPriceSource'
define view I_BillingPriceSource as select from dd07l
  association [0..*] to I_BillingPriceSourceText as _Text on $projection.BillingPriceSource = _Text.BillingPriceSource
{

  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as prsqu ) as BillingPriceSource,
  _Text

}

where domname = 'PRSQU' and as4local = 'A'
```
