---
name: I_PRAGLACCOUNTTYPETEXT
description: "PRA GL Account Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPETEXT')/$value
semantic_en: "PRA GL Account Type - Text"
semantic_vi: "PRA GL Account Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "account"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAGLACCOUNTTYPETEXT

**PRA GL Account Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountType` | ✓ | |  | `cast ( domvalue_l as oiuh_acctype )` | `CHAR(2)` | Account Type |
| `Language` | ✓ | |  | `cast( ddlanguage as spras)` | `LANG(1)` | Language Key |
| `GLAccountTypeName` |  | |  | `cast( ddtext as oiu_vdm_account_type_name )` | `CHAR(60)` | Account Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA GL Account Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACCTTYPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'GLAccountType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAGLAccountTypeText
  as select from dd07t
{
  key cast ( domvalue_l as oiuh_acctype )         as GLAccountType,
      @Semantics.language
  key cast( ddlanguage as spras)                  as Language,
      @Semantics.text
      cast( ddtext as oiu_vdm_account_type_name ) as GLAccountTypeName
}
where
      domname  = 'OIUH_ACCT_TYPE_CD'
  and as4local = 'A'
```
