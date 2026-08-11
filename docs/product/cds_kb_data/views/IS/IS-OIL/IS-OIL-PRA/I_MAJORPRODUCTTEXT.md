---
name: I_MAJORPRODUCTTEXT
description: "Major Product - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCTTEXT')/$value
semantic_en: "Major Product - Text"
semantic_vi: "Major Product - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "major"
  - "product"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_MAJORPRODUCTTEXT

**Major Product - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MajorProduct` | ✓ | |  | `cast( domvalue_l as oiu_majpd_cd )` | `CHAR(1)` | Major product code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `MajorProductName` |  | |  | `cast( ddtext as oiu_vdm_major_pd_cd_nm )` | `CHAR(60)` | Major Product Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAJORPRODUCTTEXT')/$value)*

```abap
@EndUserText.label: 'Major Product - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMAJPDCDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'MajorProduct'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_MajorProductText
  as select from dd07t
{
  key cast( domvalue_l as oiu_majpd_cd )       as MajorProduct,
      @Semantics.language
  key cast( ddlanguage as spras )              as Language,
      @Semantics.text
      cast( ddtext as oiu_vdm_major_pd_cd_nm ) as MajorProductName
}
where
      domname  = 'OIU_MAJPD_CD'
  and as4local = 'A';
```
