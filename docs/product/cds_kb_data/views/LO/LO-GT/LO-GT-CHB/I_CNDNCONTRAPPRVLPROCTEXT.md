---
name: I_CNDNCONTRAPPRVLPROCTEXT
description: "his CDS view exposes fixed values of the Condition Contract Approval Process field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROCTEXT')/$value
semantic_en: "his CDS view exposes fixed values of the Condition Contract Approval Process field."
semantic_vi: "Condition Contract Approval Proc - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "approval"
  - "proc"
  - "text"
  - "cndn"
  - "contr"
  - "apprvl"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRAPPRVLPROCTEXT

**his CDS view exposes fixed values of the Condition Contract Approval Process field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROCTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrApprvlProc` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_approval_process )` | `CHAR(1)` | Approval Process |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CndnContrApprvlProcName` |  | |  | `cast( dd07t.ddtext as wcb_approval_process_txt preserving type )` | `CHAR(60)` | Description of Approval Process Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrApprvlProc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROCTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRAPPRVLPROCTEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Approval Proc - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrApprvlProc',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWCBCCAPPRPROCT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrApprvlProcText
  as select from dd07t

  association        to parent I_CndnContrApprvlProc as _CndnContrApprvlProc on $projection.CndnContrApprvlProc = _CndnContrApprvlProc.CndnContrApprvlProc
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrApprvlProc'
      @ObjectModel.text.element: ['CndnContrApprvlProcName']
  key cast(dd07t.domvalue_l as wcb_approval_process )                                  as CndnContrApprvlProc,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_approval_process_txt preserving type )                 as CndnContrApprvlProcName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                 as DomainValue,

      /* Associations */
      _CndnContrApprvlProc,
      _Language
}

where
      dd07t.domname  = 'WCB_APPROVAL_PROCESS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
