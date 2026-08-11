---
name: I_EHSDATAPERIODTEXT
description: "EHS Data Period - Text"
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIODTEXT')/$value
semantic_en: "EHS Data Period - Text"
semantic_vi: "EHS Data Period - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "ehs"
  - "data"
  - "period"
  - "text"
  - "language"
tags:
  - EHS
  - bo:salesorganization
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
---
# I_EHSDATAPERIODTEXT

**EHS Data Period - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIODTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSDataPeriod` | ✓ | |  | `cast( dd07t.domvalue_l as ehenv_mdef_period_code_nc )` | `CHAR(3)` | Data Period of Data Collection Definition |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EHSDataPeriodText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIODTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSDATAPERIODTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSDPERTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'EHS Data Period - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel : { dataCategory: #TEXT,
                 supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
                 modelingPattern: #NONE,
                 representativeKey: 'EHSDataPeriod',
                 usageType: { serviceQuality: #A,
                              sizeCategory: #S,
                              dataClass: #META} }

@Metadata.ignorePropagatedAnnotations:true
define view I_EHSDataPeriodText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast( dd07t.domvalue_l as ehenv_mdef_period_code_nc ) as EHSDataPeriod,
      @EndUserText.label: 'Language'
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                                      as Language,
      @EndUserText.label: 'Data Period Name'
      @Semantics.text:true
      dd07t.ddtext                                          as EHSDataPeriodText,
      // association
      _Language
}
where
      dd07t.domname  = 'EHENV_MDEF_PERIOD_CODE'
  and dd07t.as4local = 'A'
```
