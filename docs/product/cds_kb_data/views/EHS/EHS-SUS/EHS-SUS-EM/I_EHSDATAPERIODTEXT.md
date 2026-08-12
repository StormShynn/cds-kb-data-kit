---
name: I_EHSDATAPERIODTEXT
description: "EHS Data Period - Text"
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
