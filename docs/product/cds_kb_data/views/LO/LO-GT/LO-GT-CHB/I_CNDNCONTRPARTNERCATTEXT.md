---
name: I_CNDNCONTRPARTNERCATTEXT
description: "This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCATTEXT')/$value
semantic_en: "This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?"
semantic_vi: "Cndn Contract Partner Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "contract"
  - "partner"
  - "category"
  - "text"
  - "contr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRPARTNERCATTEXT

**This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPartnerCat` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_owner_type )` | `CHAR(2)` | Type of Business Partner for Condition Contract |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrPartnerCatName` |  | |  | `cast( dd07t.ddtext as wcb_owner_type_name preserving type )` | `CHAR(60)` | Condition Contract Partner Category Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrPartnerCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCATTEXT')/$value)*

```abap
@EndUserText.label: 'Cndn Contract Partner Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrPartnerCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE,
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
  technicalName: 'IWCBCOCOPARTCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrPartnerCatText
  as select from dd07t

  association        to parent I_CndnContrPartnerCat as _CndnContrPartnerCat on $projection.CndnContrPartnerCat = _CndnContrPartnerCat.CndnContrPartnerCat
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrPartnerCat'
      @ObjectModel.text.element: ['CndnContrPartnerCatName']
  key cast(dd07t.domvalue_l as wcb_owner_type )                   as CndnContrPartnerCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                            as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_owner_type_name preserving type ) as CndnContrPartnerCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                            as DomainValue,

      /* Associations */
      _CndnContrPartnerCat,
      _Language
}

where
      dd07t.domname  = 'WCB_OWNER_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
