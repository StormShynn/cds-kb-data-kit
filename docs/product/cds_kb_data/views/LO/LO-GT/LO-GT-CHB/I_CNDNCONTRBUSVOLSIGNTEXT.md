---
name: I_CNDNCONTRBUSVOLSIGNTEXT
description: "This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGNTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive"
semantic_vi: "Condition Contract Bus Vol Sign - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "bus"
  - "vol"
  - "sign"
  - "text"
  - "cndn"
  - "contr"
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
# I_CNDNCONTRBUSVOLSIGNTEXT

**This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrBusVolSign` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_bvb_incl_excl )` | `CHAR(1)` | Status Including / Excluding |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrBusVolSignName` |  | |  | `cast( dd07t.ddtext as wcb_bvb_incl_excl_txt preserving type )` | `CHAR(60)` | Description of Bus. Vol. Selection Criteria Sign Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrBusVolSign` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGNTEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Bus Vol Sign - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrBusVolSign',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY,
                          #EXTRACTION_DATA_SOURCE],
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
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICCBUSVOLSIGNT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrBusVolSignText
  as select from dd07t

  association        to parent I_CndnContrBusVolSign as _CndnContrBusVolSign on $projection.CndnContrBusVolSign = _CndnContrBusVolSign.CndnContrBusVolSign
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrBusVolSign'
      @ObjectModel.text.element: ['CndnContrBusVolSignName']
  key cast(dd07t.domvalue_l as wcb_bvb_incl_excl )                  as CndnContrBusVolSign,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                              as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_bvb_incl_excl_txt preserving type ) as CndnContrBusVolSignName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                              as DomainValue,

      /* Associations */
      _CndnContrBusVolSign,
      _Language
}

where
      dd07t.domname  = 'WCB_BVB_INCL_EXCL'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
