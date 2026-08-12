---
name: I_PRALEGALFORMTEXT
description: "PRA Legal Form - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEGALFORMTEXT')/$value
semantic_en: "PRA Legal Form - Text"
semantic_vi: "PRA Legal Form - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "legal"
  - "form"
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
# I_PRALEGALFORMTEXT

**PRA Legal Form - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEGALFORMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRALegalForm` | ✓ | |  | `cast (domvalue_l as oiu_enty_cd )` | `CHAR(2)` | Entity Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `PRALegalFormName` |  | |  | `cast (ddtext as oiu_vdm_legal_form_name )` | `CHAR(60)` | Valuation Document Status Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEGALFORMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEGALFORMTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Legal Form - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVLEGALFORMT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'PRALegalForm'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRALegalFormText
  as select from dd07t
{
  key cast (domvalue_l as oiu_enty_cd )                     as PRALegalForm,
      @Semantics.language
  key cast( ddlanguage as spras )                           as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_legal_form_name )             as PRALegalFormName
}
where
      domname  = 'OIU_ENTITY_CD'
  and as4local = 'A';
```
