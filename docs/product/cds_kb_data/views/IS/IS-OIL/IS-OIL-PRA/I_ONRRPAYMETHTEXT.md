---
name: I_ONRRPAYMETHTEXT
description: "ONRR Payment Method - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETHTEXT')/$value
semantic_en: "ONRR Payment Method - Text"
semantic_vi: "ONRR Payment Method - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "onrr"
  - "payment"
  - "method"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_ONRRPAYMETHTEXT

**ONRR Payment Method - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETHTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRPaymentMethod` | ✓ | |  | `cast (domvalue_l as /pra/fp_payment_method_code )` | `CHAR(1)` | ONRR-2014 - Payment Method Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ONRRPaymentMethodName` |  | |  | `cast (ddtext as oiu_vdm_onrr_payment_method )` | `CHAR(60)` | ONRR Payment Method Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETHTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETHTEXT')/$value)*

```abap
@EndUserText.label: 'ONRR Payment Method - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRPAYMETHT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRRPaymentMethod'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ONRRPayMethText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast (domvalue_l as /pra/fp_payment_method_code )                            as ONRRPaymentMethod,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras )                                                  as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_onrr_payment_method )                                as ONRRPaymentMethodName,
      _Language
}
where
      domname  = 'OIUREP_MMS_2014_PAY_METHOD_CD'
  and as4local = 'A';
```
