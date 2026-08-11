---
name: I_PRATAXREVENUEPROCESSCODET
description: "PRA Taxes Revenue Process Code - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREVENUEPROCESSCODET')/$value
semantic_en: "PRA Taxes Revenue Process Code - Text"
semantic_vi: "PRA Taxes Revenue Process Code - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "taxes"
  - "revenue"
  - "process"
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
# I_PRATAXREVENUEPROCESSCODET

**PRA Taxes Revenue Process Code - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREVENUEPROCESSCODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RevenueProcessCode` | ✓ | |  | `cast (domvalue_l as oiu_rev_prcs_cd )` | `CHAR(2)` | Revenue Process Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `RevenueProcessCodeName` |  | |  | `cast (ddtext as oiu_vdm_rev_proc_cd_name )` | `CHAR(60)` | PRA Tax Colorado Revenue Process Code Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREVENUEPROCESSCODET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREVENUEPROCESSCODET')/$value)*

```abap
@EndUserText.label: 'PRA Taxes Revenue Process Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVREVNPRCDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'RevenueProcessCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxRevenueProcessCodeT
  as select from dd07t
{
  key cast (domvalue_l as oiu_rev_prcs_cd )                as RevenueProcessCode,
      @Semantics.language
  key cast( ddlanguage as spras )                          as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_rev_proc_cd_name )           as RevenueProcessCodeName
}
where
      domname  = 'OIU_REV_PRCS_CD'
  and as4local = 'A';
```
