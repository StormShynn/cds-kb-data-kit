---
name: I_PAYMENTGUARANTEEPROCEDURET
description: Paymentguaranteeproceduret
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
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
# I_PAYMENTGUARANTEEPROCEDURET

**Paymentguaranteeproceduret**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `PaymentGuaranteeProcedureName` |  | |  | `bezei` |  |  |
| `_PaymentGuaranteeProcedure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentGuaranteeProcedure` | `I_PaymentGuaranteeProcedure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PaymentGuaranteeProcedure'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Payment Guarantee Procedure - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPAYTGUARPROCT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_PaymentGuaranteeProcedureT
as select from t691n

association[0..1] to I_PaymentGuaranteeProcedure as _PaymentGuaranteeProcedure on $projection.PaymentGuaranteeProcedure = _PaymentGuaranteeProcedure.PaymentGuaranteeProcedure
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{ 
    @ObjectModel.sapObjectNodeTypeReference: 'PaymentGuaranteeProcedure'
    @ObjectModel.foreignKey.association: '_PaymentGuaranteeProcedure'
    key abssc as PaymentGuaranteeProcedure,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text: true
    bezei as PaymentGuaranteeProcedureName,
    
    //Associations
    _PaymentGuaranteeProcedure,
    _Language    
};
```
