---
name: I_FINASSETSMGNTPRODUCTTYPET
description: "Fin Assets Mgmt Product Type - Text"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPET')/$value
semantic_en: "Fin Assets Mgmt Product Type - Text"
semantic_vi: "Fin Assets Mgmt Product Type - Text — CDS view giao diện dựa trên tzpat."
keywords:
  - "fin"
  - "assets"
  - "mgmt"
  - "product"
  - "type"
  - "text"
  - "financial"
  - "language"
  - "prod"
  - "long"
  - "name"
  - "short"
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
# I_FINASSETSMGNTPRODUCTTYPET

**Fin Assets Mgmt Product Type - Text**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialAssetsMgmtProductType` | ✓ | |  | `gsart` | `CHAR(3)` | Product Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FinAssetsMgmtProdTypeLongName` |  | |  | `ltx` | `CHAR(30)` | Text (30 Characters) |
| `FinAssetsMgmtProdTypeShortName` |  | |  | `ltxkurz` | `CHAR(10)` | Text (10 Characters) |
| `_Language` | | ✓ | | | | |
| `_FinAssetsMgntProductType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinAssetsMgntProductType` | `I_FinAssetsMgntProductType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINASSETSMGNTPRODUCTTYPET')/$value)*

```abap
@EndUserText.label: 'Fin Assets Mgmt Product Type - Text'  
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IFINASSMGNTPTYPT'
@ObjectModel.representativeKey: 'FinancialAssetsMgmtProductType'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]

define view I_FinAssetsMgntProductTypeT  
   as select from tzpat

   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
    association [1..1] to I_FinAssetsMgntProductType as _FinAssetsMgntProductType
       on $projection. FinancialAssetsMgmtProductType = _FinAssetsMgntProductType. FinancialAssetsMgmtProductType

{

   key gsart as  FinancialAssetsMgmtProductType,
   @Semantics.language: true
   key spras as Language,  
   @Semantics.text: true
   ltx as  FinAssetsMgmtProdTypeLongName,
   ltxkurz as FinAssetsMgmtProdTypeShortName,
   _FinAssetsMgntProductType, 
   _Language
  
}
```
