---
name: I_MAINTMBLAPPLPUSHSRCETYPETEXT
description: "Mobile App Push Source Type - Text"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHSRCETYPETEXT')/$value
semantic_en: "Mobile App Push Source Type - Text"
semantic_vi: "Mobile App Push Source Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "mobile"
  - "app"
  - "push"
  - "source"
  - "type"
  - "text"
  - "language"
  - "appl"
  - "maint"
  - "name"
tags:
  - MOB
  - bo:salesorder
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MAINTMBLAPPLPUSHSRCETYPETEXT

**Mobile App Push Source Type - Text**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHSRCETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `MblUsrApplPushSourceType` | ✓ | |  | `cast( domvalue_l as /syclo/core_push_srctyp_dte )` | `CHAR(10)` | Push Scenario Source Type |
| `MaintMblApplPushSourceTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHSRCETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLAPPLPUSHSRCETYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IMAINTMBLAPPLPUSHSRCETYPETXT'

@EndUserText.label: 'Mobile App Push Source Type - Text'

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
define view entity I_MaintMblApplPushSrceTypeText
  as select from dd07t

  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type )       as Language,

      @ObjectModel.text.element: ['MaintMblApplPushSourceTypeName']
  key cast( domvalue_l as /syclo/core_push_srctyp_dte ) as MblUsrApplPushSourceType,

      @Semantics.text: true
      ddtext                                            as MaintMblApplPushSourceTypeName,

      _Language
}
where
      domname  = '/SYCLO/CORE_PUSH_SOURCE_TYPE'
  and as4local = 'A'
  and as4vers  = '0000'
```
