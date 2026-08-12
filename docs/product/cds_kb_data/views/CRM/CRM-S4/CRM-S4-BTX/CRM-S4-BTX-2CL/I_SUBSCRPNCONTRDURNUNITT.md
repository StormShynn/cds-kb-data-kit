---
name: I_SUBSCRPNCONTRDURNUNITT
description: "Subscrpn Contract Duration Unit - Text"
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITT')/$value
semantic_en: "Subscrpn Contract Duration Unit - Text"
semantic_vi: "Subscrpn Contract Duration Unit - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "subscrpn"
  - "contract"
  - "duration"
  - "unit"
  - "text"
  - "contr"
  - "language"
tags:
  - CRM
  - component:CRM-S4-BTX-2CL
  - contract
  - CRM-S4
  - CRM-S4-BTX
  - CRM-S4-BTX-2CL
  - interface-view
---
# I_SUBSCRPNCONTRDURNUNITT

**Subscrpn Contract Duration Unit - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubscrpnContrDurationUnit` | ✓ | |  | `cast(domvalue_l as crms4_som_ctr_term_unit)` | `CHAR(1)` | Unit for Contract Term |
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` | `LANG(1)` | Language Key |
| `SubscrpnContrDurationUnitText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUBSCRPNCONTRDURNUNITT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISUCTRDURUNITT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:
{
  dataCategory: #TEXT,
  representativeKey: 'SubscrpnContrDurationUnit',
  usageType:
  {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #C
  },
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Subscrpn Contract Duration Unit - Text'

define view I_SubscrpnContrDurnUnitT
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key  cast(domvalue_l as crms4_som_ctr_term_unit) as SubscrpnContrDurationUnit,
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  cast(ddlanguage as spras)                   as Language,
       @Semantics.text: true
       ddtext                                      as SubscrpnContrDurationUnitText,

       _Language

}
where
      domname        = 'CRMS4_SOM_CTR_PERIOD_UNIT_UI'
  and dd07t.as4local = 'A'
```
