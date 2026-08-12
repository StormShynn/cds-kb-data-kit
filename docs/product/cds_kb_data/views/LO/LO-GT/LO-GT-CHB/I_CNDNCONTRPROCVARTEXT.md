---
name: I_CNDNCONTRPROCVARTEXT
description: "This CDS view retrieves information about the process variant of the condition contract."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTEXT')/$value
semantic_en: "This CDS view retrieves information about the process variant of the condition contract."
semantic_vi: "Condition Contract Proc Variant - Text — CDS view cơ bản dựa trên wcb_c_proc_vart."
keywords:
  - "condition"
  - "contract"
  - "proc"
  - "variant"
  - "text"
  - "cndn"
  - "contr"
  - "language"
  - "desc"
tags:
  - LO
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPROCVARTEXT

**This CDS view retrieves information about the process variant of the condition contract.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcVar` | ✓ | |  | `process_variant` | `CHAR(4)` | Condition Contract Process Variant |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CndnContrProcVarDesc` |  | |  | `text` | `CHAR(40)` | Condition Contract Process Variant Text |
| `_CndnContrProcVar` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrProcVar` | `I_CndnContrProcVar` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTEXT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWCBCCPROCVART',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 002
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'CndnContrProcVar',
   modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #EXTRACTION_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Search.searchable: true
@Analytics: {
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@EndUserText.label: 'Condition Contract Proc Variant - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_CndnContrProcVarText
  as select from wcb_c_proc_vart

  association [0..1] to I_CndnContrProcVar as _CndnContrProcVar on $projection.CndnContrProcVar = _CndnContrProcVar.CndnContrProcVar
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CndnContrProcVar'
      @ObjectModel.text.element: ['CndnContrProcVarDesc']
  key process_variant as CndnContrProcVar,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras           as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      text            as CndnContrProcVarDesc,

      /* Associations */
      _CndnContrProcVar,
      _Language
}
```
