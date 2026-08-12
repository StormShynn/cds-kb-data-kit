---
name: I_PRAONRRLESSORTYPETEXT
description: "PRA ONRR Lessor Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRLESSORTYPETEXT')/$value
semantic_en: "PRA ONRR Lessor Type - Text"
semantic_vi: "PRA ONRR Lessor Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "onrr"
  - "lessor"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAONRRLESSORTYPETEXT

**PRA ONRR Lessor Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRLESSORTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRLessorType` | ✓ | |  | `cast (domvalue_l as /pra/fp_lessor_code )` | `CHAR(1)` | ONRR-2014 - Lessor Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ONRRLessorTypeName` |  | |  | `cast (ddtext as oiu_vdm_onrr_lessor_type_name )` | `CHAR(60)` | PRA ONRR Lessor type text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRLESSORTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRLESSORTYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA ONRR Lessor Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRLSRTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ONRRLessorType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAONRRLessorTypeText
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_lessor_code )                         as ONRRLessorType,
      @Semantics.language
  key cast( ddlanguage as spras )                                        as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_onrr_lessor_type_name )                    as ONRRLessorTypeName
}
where
      domname  = '/PRA/FP_LESSOR_CODE'
  and as4local = 'A';
```
