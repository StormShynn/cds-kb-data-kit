---
name: I_SETLMGMTHDRTXTDETNPROCEDT
description: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCEDT')/$value
semantic_en: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?"
semantic_vi: "Header Text Determination Proced - Text — CDS view cơ bản dựa trên ttxgt."
keywords:
  - "header"
  - "text"
  - "determination"
  - "proced"
  - "settlmt"
  - "detn"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETLMGMTHDRTXTDETNPROCEDT

**This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCEDT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtHdrTxtDetnProced` | ✓ | |  | `cast (txtgr as txtgr_h preserving type )` | `CHAR(2)` | Text Determination Procedure for Header |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SettlmtHdrTxtDetnProcedDesc` |  | |  | `cast (vtext as txtgr_h_text preserving type )` | `CHAR(20)` | Header Text Determination Procedure Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtHdrTxtDetnProced` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCEDT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCEDT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFHDRTXTDETT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 001
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: ['_SettlmtHdrTxtDetnProced'],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SettlmtHdrTxtDetnProced',
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Search.searchable: true
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Header Text Determination Proced - Text' 
@Metadata.ignorePropagatedAnnotations: true


define view I_SetlMgmtHdrTxtDetnProcedT
  as select from ttxgt
  
  association to parent I_SetlMgmtHdrTxtDetnProced as _SettlmtHdrTxtDetnProced on $projection.SettlmtHdrTxtDetnProced = _SettlmtHdrTxtDetnProced.SettlmtHdrTxtDetnProced
  association [0..1] to I_Language                 as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtHdrTxtDetnProced'
  key cast (txtgr as txtgr_h preserving type )      as SettlmtHdrTxtDetnProced,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast (vtext as txtgr_h_text preserving type ) as SettlmtHdrTxtDetnProcedDesc,

      //Associations
      _SettlmtHdrTxtDetnProced,
      _Language

}
where
  tdobject = 'WBRK'
```
