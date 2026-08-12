---
name: I_PAYMENTTYPETEXT
description: "Payment Type Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTTYPETEXT')/$value
semantic_en: "Payment Type Name - Text"
semantic_vi: "Payment Type Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "payment"
  - "type"
  - "name"
  - "text"
  - "language"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_PAYMENTTYPETEXT

**Payment Type Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentType` | ✓ | |  | `cast (domvalue_l as /pra/pp_payment_type )` | `CHAR(1)` | Payment Type |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `PaymentTypeName` |  | |  | `cast (ddtext as oiu_vdm_payment_type_name )` | `CHAR(60)` | Payment Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Payment Type Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPAYMENTTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PaymentType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PaymentTypeText
  as select from dd07t
{
  key cast (domvalue_l as /pra/pp_payment_type )                     as PaymentType,
      @Semantics.language
  key cast( ddlanguage as spras )                                    as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_payment_type_name )                    as PaymentTypeName
}
where
      domname  = '/PRA/PP_PAYMENT_TYPE'
  and as4local = 'A';
```
