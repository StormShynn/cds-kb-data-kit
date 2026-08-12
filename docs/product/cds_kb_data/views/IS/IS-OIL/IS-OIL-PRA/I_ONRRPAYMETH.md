---
name: I_ONRRPAYMETH
description: "ONRR Payment Method"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETH')/$value
semantic_en: "ONRR Payment Method"
semantic_vi: "ONRR Payment Method — CDS view giao diện dựa trên dd07l."
keywords:
  - "onrr"
  - "payment"
  - "method"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_ONRRPAYMETH

**ONRR Payment Method**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRPaymentMethod` | ✓ | |  | `cast (domvalue_l as /pra/fp_payment_method_code )` | `CHAR(1)` | ONRR-2014 - Payment Method Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ONRRPayMethText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETH')/$value)*

```abap
@EndUserText.label: 'ONRR Payment Method'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRPAYMETH'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ONRRPaymentMethod'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRPaymentMethodCode'

define view I_ONRRPayMeth
  as select from dd07l
  association [0..*] to I_ONRRPayMethText as _Text on $projection.ONRRPaymentMethod = _Text.ONRRPaymentMethod
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_payment_method_code )                         as ONRRPaymentMethod,
  _Text

}
where
      domname  = 'OIUREP_MMS_2014_PAY_METHOD_CD'
  and as4local = 'A';
```
