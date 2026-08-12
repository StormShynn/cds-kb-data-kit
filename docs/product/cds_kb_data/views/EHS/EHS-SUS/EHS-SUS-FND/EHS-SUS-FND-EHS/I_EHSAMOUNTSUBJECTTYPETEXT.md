---
name: I_EHSAMOUNTSUBJECTTYPETEXT
description: "EHS Subject Type - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
