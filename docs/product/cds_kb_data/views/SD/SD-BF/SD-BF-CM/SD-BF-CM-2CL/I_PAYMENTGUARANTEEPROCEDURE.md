---
name: I_PAYMENTGUARANTEEPROCEDURE
description: "Paymentguaranteeprocedure"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - payment
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_PAYMENTGUARANTEEPROCEDURE

**Paymentguaranteeprocedure**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentGuaranteeProcedure` | ✓ | |  | `abssc` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentGuaranteeProcedureT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentGuaranteeProcedure'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Payment Guarantee Procedure'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPAYTGUARPROC'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PaymentGuaranteeProcedure'
define view I_PaymentGuaranteeProcedure
as select from t691m

association [0..*] to I_PaymentGuaranteeProcedureT as _Text on $projection.PaymentGuaranteeProcedure  = _Text.PaymentGuaranteeProcedure
{
    @ObjectModel.text.association: '_Text'
    key abssc as PaymentGuaranteeProcedure,
    
    //Associations
    _Text
};
```
