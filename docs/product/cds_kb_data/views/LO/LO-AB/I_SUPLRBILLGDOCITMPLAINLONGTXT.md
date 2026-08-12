---
name: I_SUPLRBILLGDOCITMPLAINLONGTXT
description: "Plain Long Text for Supplier Billing Document Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITMPLAINLONGTXT')/$value
semantic_en: "Plain Long Text for Supplier Billing Document Item"
semantic_vi: "I_SUPLRBILLGDOCITMPLAINLONGTXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocItmPlainLongText."
keywords:
  - "suplrbillgdocitmplainlongtxt"
  - "suplr"
  - "billg"
  - "item"
  - "text"
  - "object"
  - "type"
  - "language"
  - "plain"
  - "long"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRBILLGDOCITMPLAINLONGTXT

**Plain Long Text for Supplier Billing Document Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITMPLAINLONGTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  | `cast( SettlmtMgmtDoc as wlf_suplr_billg_doc preserving type )` | `CHAR(10)` | Supplier Billing Document Number |
| `SuplrBillgDocItem` | ✓ | |  | `cast( SettlmtMgmtDocItem as wposnr_lf preserving type )` | `NUMC(6)` | Document Item |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SuplrBillgDoc` | | ✓ | | | | |
| `_SuplrBillgDocItem` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrBillgDoc` | `I_SuplrBillgDoc` | [1..1] |
| `_SuplrBillgDocItem` | `I_SuplrBillgDocItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITMPLAINLONGTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITMPLAINLONGTXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Suplr Billing Doc Item'
}   
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: { 
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Analytics: {
    internalName: #LOCAL
}   
@ObjectModel: {
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
   dataCategory: #TEXT,
   representativeKey: 'TextObjectType'
}
@Analytics.technicalName: 'IWLFSPLRBGDITPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SuplrBillgDocItmPlainLongTxt 
  as select from R_SetlMgmtDocItmPlainLongText
      
  association [1..1] to I_SuplrBillgDoc              as _SuplrBillgDoc     on  $projection.SuplrBillgDoc         = _SuplrBillgDoc.SuplrBillgDoc
  association [1..1] to I_SuplrBillgDocItem          as _SuplrBillgDocItem on  $projection.SuplrBillgDoc         = _SuplrBillgDocItem.SuplrBillgDoc
                                                                           and $projection.SuplrBillgDocItem     = _SuplrBillgDocItem.SuplrBillgDocItem

{
      @ObjectModel.foreignKey.association: '_SuplrBillgDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
  key cast( SettlmtMgmtDoc as wlf_suplr_billg_doc preserving type )    as SuplrBillgDoc,
      @ObjectModel.foreignKey.association: '_SuplrBillgDocItem'   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocItemStdVH', element: 'SuplrBillgDocItem' } }]
      }
  key cast( SettlmtMgmtDocItem as wposnr_lf preserving type )          as SuplrBillgDocItem,
  key TextObjectType                                                   as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                                                         as Language,
      @Semantics.text:true
      PlainLongText                                                    as PlainLongText,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SuplrBillgDoc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SuplrBillgDocItem,
      _Language
}
 where SettlmtMgmtDocCat = 'A'
```
