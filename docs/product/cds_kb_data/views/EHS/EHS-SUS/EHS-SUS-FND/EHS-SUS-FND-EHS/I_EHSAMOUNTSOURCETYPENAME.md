---
name: I_EHSAMOUNTSOURCETYPENAME
description: "EHS Amount Source Type - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPENAME')/$value
semantic_en: "EHS Amount Source Type - Text"
semantic_vi: "EHS Amount Source Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "ehs"
  - "amount"
  - "source"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - EHS
  - bo:salesorder
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSAMOUNTSOURCETYPENAME

**EHS Amount Source Type - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPENAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountSourceType` | ✓ | |  | `cast( dd07t.domvalue_l as abap.char(2))` | `CHAR(2)` |  |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EHSAmountSourceTypeName` |  | |  | `case dd07t.domvalue_l when '05' then _OTRText[1: OnlnTxtRpstryConceptID = '005056BA37B61EE4B4C265B98F615192'].Text else dd07t.ddtext end` | `CHAR(255)` | Text Field in OTR |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_OTRText` | `I_OTRText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPENAME')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSAMOUNTSOURCETYPENAME')/$value)*

```abap
@AbapCatalog:{ 
    sqlViewName: 'IAMNSRCTYPENAME',
    compiler.compareFilter: true
}
@EndUserText.label: 'EHS Amount Source Type - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel : { dataCategory: #TEXT,
                 supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
                 modelingPattern: #NONE,
                 representativeKey: 'EHSAmountSourceType',
                 usageType: { serviceQuality: #C,
                              sizeCategory: #L,
                              dataClass: #META } }

@Metadata.ignorePropagatedAnnotations:true
define view I_EHSAmountSourceTypeName as select from dd07t
  association [0..1] to I_Language     as _Language  on $projection.Language = _Language.Language
  association [0..*] to I_OTRText      as _OTRText   on  _OTRText.Language   = $session.system_language
  {
        @EndUserText.label: 'Data Source Type'
    key cast( dd07t.domvalue_l as abap.char(2)) as EHSAmountSourceType,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
        @EndUserText.label: 'Language'
    key dd07t.ddlanguage as Language,
        @Semantics.text:true
        @EndUserText.label: 'Data Source Type Name'
        case dd07t.domvalue_l
        when '05'  then _OTRText[1: OnlnTxtRpstryConceptID = '005056BA37B61EE4B4C265B98F615192'].Text // "Sampled Data"
        else dd07t.ddtext
        end as EHSAmountSourceTypeName,
        // association
        _Language
}
where dd07t.domname  = 'EHFND_AMNS_SRC_TYPE'
  and dd07t.as4local = 'A'
```
