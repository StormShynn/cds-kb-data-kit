---
name: I_PRAACCTDETNCATEGORYTEXT
description: "PRA Acct Determination Category - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTDETNCATEGORYTEXT')/$value
semantic_en: "PRA Acct Determination Category - Text"
semantic_vi: "PRA Acct Determination Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "acct"
  - "determination"
  - "category"
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
# I_PRAACCTDETNCATEGORYTEXT

**PRA Acct Determination Category - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTDETNCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AcctDeterminationCategory` | ✓ | |  | `cast (domvalue_l as oiu_acct_cat_cd )` | `CHAR(4)` | Account category code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `AcctDeterminationCategoryName` |  | |  | `cast (ddtext as oiu_vdm_acctg_cat_nm )` | `CHAR(60)` | Account Category Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTDETNCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTDETNCATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Acct Determination Category - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACCTCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'AcctDeterminationCategory'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAAcctDetnCategoryText
  as select from dd07t
{
  key cast (domvalue_l as oiu_acct_cat_cd )                as AcctDeterminationCategory,
      @Semantics.language
  key cast( ddlanguage as spras )                          as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_acctg_cat_nm )               as AcctDeterminationCategoryName
}
where
      domname  = 'OIU_ACCT_CAT_CD'
  and as4local = 'A';
```
