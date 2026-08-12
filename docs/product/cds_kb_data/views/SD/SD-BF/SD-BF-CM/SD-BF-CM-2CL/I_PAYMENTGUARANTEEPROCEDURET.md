---
name: I_PAYMENTGUARANTEEPROCEDURET
description: "Paymentguaranteeproceduret"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_PAYMENTGUARANTEEPROCEDURET

**Paymentguaranteeproceduret**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
