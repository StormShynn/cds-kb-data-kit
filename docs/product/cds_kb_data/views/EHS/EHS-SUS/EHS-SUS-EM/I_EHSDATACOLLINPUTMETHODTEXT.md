---
name: I_EHSDATACOLLINPUTMETHODTEXT
description: "EHS Data Collection Input Method - Text"
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHODTEXT')/$value
semantic_en: "EHS Data Collection Input Method - Text"
semantic_vi: "EHS Data Collection Input Method - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "ehs"
  - "data"
  - "collection"
  - "input"
  - "method"
  - "text"
  - "language"
  - "coll"
tags:
  - EHS
  - bo:salesorganization
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
---
# I_EHSDATACOLLINPUTMETHODTEXT

**EHS Data Collection Input Method - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHODTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSDataCollectionInputMethod` | ✓ | |  | `cast( dd07t.domvalue_l as ehenv_mdef_input_method )` | `CHAR(2)` | Data Collection Input Method |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EHSDataCollInputMethodText` |  | |  | `cast( dd07t.ddtext as ehenv_mdef_input_method_desc )` | `CHAR(60)` | Data Collection Input Method Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHODTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATACOLLINPUTMETHODTEXT')/$value)*

```abap
@EndUserText.label: 'EHS Data Collection Input Method - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:
{
    dataCategory: #TEXT,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
    modelingPattern: #NONE,
    representativeKey: 'EHSDataCollectionInputMethod',
    usageType:
    {
        serviceQuality: #A,
        sizeCategory:  #L,
        dataClass: #META
    }
}

define view entity I_EHSDataCollInputMethodText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( dd07t.domvalue_l as ehenv_mdef_input_method )  as EHSDataCollectionInputMethod,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
      @EndUserText.label: 'Language'
  key dd07t.ddlanguage                                     as Language,

      @Semantics.text:true
      @EndUserText.label: 'Input Method Description'
      cast( dd07t.ddtext as ehenv_mdef_input_method_desc ) as EHSDataCollInputMethodText,

      _Language
}
where
      dd07t.domname  = 'EHENV_MDEF_INPUT_METHOD'
  and dd07t.as4local = 'A'
```
