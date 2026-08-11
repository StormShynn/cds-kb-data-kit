---
name: I_PRATAXWYTRANSFORMTYPET
description: "PRA Tax WY Transaction Form Type Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPET')/$value
semantic_en: "PRA Tax WY Transaction Form Type Name - Text"
semantic_vi: "PRA Tax WY Transaction Form Type Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "tax"
  - "transaction"
  - "form"
  - "type"
  - "name"
  - "text"
  - "transac"
  - "language"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_PRATAXWYTRANSFORMTYPET

**PRA Tax WY Transaction Form Type Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxTransacFormType` | ✓ | |  | `cast (domvalue_l as oiux6_orig_amended_unknown_ind )` | `CHAR(1)` | Tax 2.0 - Original / Amended / Unknown Indicator |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `TaxTransacFormTypeName` |  | |  | `cast (ddtext as oiu_vdm_tax_tr_form_type_name )` | `CHAR(60)` | PRA Tax Wyoming Transaction Form Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPET')/$value)*

```abap
@EndUserText.label: 'PRA Tax WY Transaction Form Type Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXTRFORMTYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'TaxTransacFormType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
define view I_PRATaxWYTransFormTypeT
  as select from dd07t
{
  key cast (domvalue_l as oiux6_orig_amended_unknown_ind )                           as TaxTransacFormType,
      @Semantics.language
  key cast( ddlanguage as spras )                                                    as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_tax_tr_form_type_name )                                as TaxTransacFormTypeName
      //New Data element to be created for the above ddtext field
}
where
      domname  = 'OIUX6_ORIG_AMENDED_UNKNOWN_IND'
  and as4local = 'A';
```
