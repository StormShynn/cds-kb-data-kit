---
name: I_MBLDTAOBJHDLRMETHODTYPETEXT
description: "Mobile Object Handler Method Type - Text"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLDTAOBJHDLRMETHODTYPETEXT')/$value
semantic_en: "Mobile Object Handler Method Type - Text"
semantic_vi: "Mobile Object Handler Method Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "mobile"
  - "object"
  - "handler"
  - "method"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MBLDTAOBJHDLRMETHODTYPETEXT

**Mobile Object Handler Method Type - Text**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLDTAOBJHDLRMETHODTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `MblDtaObjectHandlerMethodType` | ✓ | |  | `cast( domvalue_l as /syclo/core_dohandle_mtyp_dte )` | `CHAR(3)` | Mobile Data Object Handler Method Type |
| `MblDtaObjHandlerMethodTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLDTAOBJHDLRMETHODTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLDTAOBJHDLRMETHODTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IMBLDTAOBJHDLRMETHODTYPETEXT'

@EndUserText.label: 'Mobile Object Handler Method Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  }
}

@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_MblDtaObjHdlrMethodTypeText
  as select from dd07t

  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type )         as Language,

      @ObjectModel.text.element: ['MblDtaObjHandlerMethodTypeName']
  key cast( domvalue_l as /syclo/core_dohandle_mtyp_dte ) as MblDtaObjectHandlerMethodType,

      @Semantics.text: true
      ddtext                                              as MblDtaObjHandlerMethodTypeName,

      _Language
}
where
      domname  = '/SYCLO/CORE_DOHANDLE_MTHD_TYPE'
  and as4local = 'A'
  and as4vers  = '0000'
```
