---
name: I_SUPLRBILLGDOCPLAINLONGTEXT
description: "Plain Long Text for Supplier Billing Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPLAINLONGTEXT')/$value
semantic_en: "Plain Long Text for Supplier Billing Document"
semantic_vi: "I_SUPLRBILLGDOCPLAINLONGTEXT — CDS view cơ bản (transactional data) dựa trên R_SetlMgmtDocPlainLongText."
keywords:
  - "suplrbillgdocplainlongtext"
  - "suplr"
  - "billg"
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
# I_SUPLRBILLGDOCPLAINLONGTEXT

**Plain Long Text for Supplier Billing Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  | `cast( SettlmtMgmtDoc as wlf_suplr_billg_doc preserving type )` | `CHAR(10)` | Supplier Billing Document Number |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `PlainLongText` |  | |  |  |  |  |
| `_SuplrBillgDoc` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrBillgDoc` | `I_SuplrBillgDoc` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPLAINLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPLAINLONGTEXT')/$value)*

```abap
@EndUserText: {
   label: 'Plain Long Text for Supplier Billing Doc'
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
    internalName: #LOCAL,
    dataExtraction.enabled: false
}   
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
   dataCategory: #TEXT,
   representativeKey: 'TextObjectType',
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]   
}
@Analytics.technicalName: 'IWLFSUPLRBGDPLT'
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SuplrBillgDocPlainLongText 
  as select from R_SetlMgmtDocPlainLongText
      
    association[1..1] to I_SuplrBillgDoc  as _SuplrBillgDoc  on  $projection.SuplrBillgDoc  = _SuplrBillgDoc.SuplrBillgDoc

{
      @ObjectModel.foreignKey.association: '_SuplrBillgDoc'                                                                                                   
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
  key cast( SettlmtMgmtDoc as wlf_suplr_billg_doc preserving type )               as SuplrBillgDoc,  
  key TextObjectType           as TextObjectType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                 as Language,
      @Semantics.text:true
      PlainLongText            as PlainLongText,
    
      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrBillgDoc,
      _Language
}

where SettlmtMgmtDocCat = 'A'
```
