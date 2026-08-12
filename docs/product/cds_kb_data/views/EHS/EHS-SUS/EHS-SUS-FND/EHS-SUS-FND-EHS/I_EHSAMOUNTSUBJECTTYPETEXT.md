---
name: I_EHSAMOUNTSUBJECTTYPETEXT
description: "EHS Subject Type - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPETEXT')/$value
semantic_en: "EHS Subject Type - Text"
semantic_vi: "EHS Subject Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "ehs"
  - "subject"
  - "type"
  - "text"
  - "amount"
  - "language"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSAMOUNTSUBJECTTYPETEXT

**EHS Subject Type - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountSubjectType` | ✓ | |  | `cast( dd07t.domvalue_l as ehfnd_amns_subj_type )` | `CHAR(2)` | Subject Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EHSAmountSubjectTypeText` |  | |  | `cast( dd07t.ddtext as ehfnd_amns_subj_type_desc )` | `CHAR(60)` | Amount Subject Type Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSUBJECTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'EHS Subject Type - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true

@ObjectModel:
{
    dataCategory: #TEXT,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #NONE,
    representativeKey: 'EHSAmountSubjectType',
    usageType:
    {
        serviceQuality: #A,
        sizeCategory:  #L,
        dataClass: #META
    }
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_EHSAmountSubjectTypeText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( dd07t.domvalue_l as ehfnd_amns_subj_type )  as EHSAmountSubjectType,

      @EndUserText.label: 'Language'
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                  as Language,

      @EndUserText.label: 'Subject Type Name'
      @Semantics.text:true
      cast( dd07t.ddtext as ehfnd_amns_subj_type_desc ) as EHSAmountSubjectTypeText,

      _Language
}
where
      dd07t.domname  = 'EHFND_AMNS_SUBJ_TYPE'
  and dd07t.as4local = 'A'
```
