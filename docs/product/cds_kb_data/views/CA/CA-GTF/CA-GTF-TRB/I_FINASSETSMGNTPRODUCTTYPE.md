---
name: I_FINASSETSMGNTPRODUCTTYPE
description: "Financial Assets Management Product Type"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPE')/$value
semantic_en: "Financial Assets Management Product Type"
semantic_vi: "Financial Assets Management Product Type — CDS view giao diện dựa trên tzpa."
keywords:
  - "financial"
  - "assets"
  - "management"
  - "product"
  - "type"
  - "mgmt"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - interface-view
  - lob:cross_application components
  - product
---
# I_FINASSETSMGNTPRODUCTTYPE

**Financial Assets Management Product Type**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialAssetsMgmtProductType` | ✓ | |  | `cast (gsart as vvsart)` | `CHAR(3)` | Product Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinAssetsMgntProductTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPE')/$value)*

```abap
@EndUserText.label: 'Financial Assets Management Product Type'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IFINASSMGNTPTYP'
@ObjectModel.representativeKey: 'FinancialAssetsMgmtProductType'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_FinAssetsMgntProductType
   as select from tzpa

    association [0..*] to I_FinAssetsMgntProductTypeT as _Text
       on $projection.FinancialAssetsMgmtProductType = _Text.FinancialAssetsMgmtProductType

{  
@ObjectModel.text.association: '_Text'

      key cast (gsart as vvsart) as  FinancialAssetsMgmtProductType,
      _Text

}
```
