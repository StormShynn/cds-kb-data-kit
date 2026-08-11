---
name: I_PRAOPERATORORPURCHASERCODET
description: "Operator Or Purchaser Code - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODET')/$value
semantic_en: "Operator Or Purchaser Code - Text"
semantic_vi: "Operator Or Purchaser Code - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "operator"
  - "purchaser"
  - "code"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAOPERATORORPURCHASERCODET

**Operator Or Purchaser Code - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperatorOrPurchaserCode` | ✓ | |  | `cast (domvalue_l as oiux8_operator_purchaser_ind)` | `CHAR(1)` | Tax 2.0 - NM - Operator/Purchaser Indicator |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `OperatorOrPurchaserCodeName` |  | |  | `cast (ddtext as oiu_vdm_optr_prchr_code_name )` | `CHAR(60)` | Tax 2.0 - NM - Operator/Purchaser Indicator Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODET')/$value)*

```abap
@EndUserText.label: 'Operator Or Purchaser Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOPRTPRCHRCDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'OperatorOrPurchaserCode'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAOperatorOrPurchaserCodeT
  as select from dd07t
{
  key cast (domvalue_l as oiux8_operator_purchaser_ind)              as OperatorOrPurchaserCode,
      @Semantics.language
  key cast( ddlanguage as spras )                                    as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_optr_prchr_code_name )                 as OperatorOrPurchaserCodeName

}
where
      domname  = 'OIUX8_OPERATOR_PURCHASER_IND'
  and as4local = 'A';
```
