---
name: I_PRAGLACCOUNTTYPE
description: "PRA GL Account Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPE')/$value
semantic_en: "PRA GL Account Type"
semantic_vi: "PRA GL Account Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "account"
  - "type"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAGLACCOUNTTYPE

**PRA GL Account Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountType` | ✓ | |  | `cast ( domvalue_l as oiuh_acctype )` | `CHAR(2)` | Account Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAGLAccountTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAGLACCOUNTTYPE')/$value)*

```abap
@EndUserText.label: 'PRA GL Account Type'
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVGLACCNTTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'GLAccountType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAGenLdgrAcctType'
define view I_PRAGLAccountType
  as select from dd07l
  association [0..*] to I_PRAGLAccountTypeText as _Text on $projection.GLAccountType = _Text.GLAccountType
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as oiuh_acctype ) as GLAccountType,
      _Text
}
where
      domname  = 'OIUH_ACCT_TYPE_CD'
  and as4local = 'A'
```
