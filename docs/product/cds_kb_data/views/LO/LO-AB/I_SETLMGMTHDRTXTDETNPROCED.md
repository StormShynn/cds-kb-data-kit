---
name: I_SETLMGMTHDRTXTDETNPROCED
description: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCED')/$value
semantic_en: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?"
semantic_vi: "Text Determination Procedure for Header — CDS view cơ bản dựa trên ttxg."
keywords:
  - "text"
  - "determination"
  - "procedure"
  - "for"
  - "header"
  - "settlmt"
  - "detn"
  - "proced"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETLMGMTHDRTXTDETNPROCED

**This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtHdrTxtDetnProced` | ✓ | |  | `cast (txtgr as txtgr_h preserving type )` | `CHAR(2)` | Text Determination Procedure for Header |
| `_SetlMgmtHdrTxtObjTypeAssgmt` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SetlMgmtHdrTxtObjTypeAssgmt` | `I_SetlMgmtHdrTxtObjTypeAssgmt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCED')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFHDRTXTDET',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #SINGLE,
    numberOfKeyFields: 001
  },
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_Text' , '_SetlMgmtHdrTxtObjTypeAssgmt' ],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'SettlmtHdrTxtDetnProced',
   modelingPattern: #NONE,
   supportedCapabilities : [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
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
@Analytics: {
//    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@EndUserText.label: 'Text Determination Procedure for Header' 
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}


define root view I_SetlMgmtHdrTxtDetnProced
  as select from ttxg
  
  composition [0..*] of I_SetlMgmtHdrTxtDetnProcedT as _Text
  association [0..*] to I_SetlMgmtHdrTxtObjTypeAssgmt as _SetlMgmtHdrTxtObjTypeAssgmt on $projection.SettlmtHdrTxtDetnProced = _SetlMgmtHdrTxtObjTypeAssgmt.SettlmtHdrTxtDetnProced

{

        @ObjectModel.text.association: '_Text'
  key   cast (txtgr as txtgr_h preserving type ) as SettlmtHdrTxtDetnProced,

        //Associations
        _Text,
        _SetlMgmtHdrTxtObjTypeAssgmt
}
where
  tdobject = 'WBRK'
```
