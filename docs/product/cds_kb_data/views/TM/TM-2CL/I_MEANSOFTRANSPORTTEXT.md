---
name: I_MEANSOFTRANSPORTTEXT
description: "Means of Transport - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORTTEXT')/$value
semantic_en: "Means of Transport - Text"
semantic_vi: "I_MEANSOFTRANSPORTTEXT — CDS view cơ bản dựa trên I_MEANSOFTRANSPORTTEXT."
keywords:
  - "meansoftransporttext"
  - "means"
  - "transport"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_MEANSOFTRANSPORTTEXT

**Means of Transport - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeansOfTransport` | ✓ | |  | `ttype` | `CHAR(10)` | Means of Transport |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MeansOfTransportDesc` |  | |  | `ttypetxt` | `CHAR(40)` | Means of Transport Description |
| `_MeansOfTransport` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MeansOfTransport` | `I_MeansOfTransport` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEANSOFTRANSPORTTEXT')/$value)*

```abap
@EndUserText:   {label:              'Means of Transport - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'MeansOfTransport',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IMEANSOFTRANSPT',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL,
                                      numberOfKeyFields: 000}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}
@Search.searchable: true
define view I_MeansOfTransportText
  as select from /sapapo/trtypet
  association [0..1] to I_MeansOfTransport as _MeansOfTransport on $projection.MeansOfTransport = _MeansOfTransport.MeansOfTransport
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_MeansOfTransport'
  key ttype    as MeansOfTransport,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras    as Language,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      ttypetxt as MeansOfTransportDesc,

      /* Associations */
      _MeansOfTransport,
      _Language
}
```
