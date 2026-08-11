---
name: I_INVOICINGISBLOCKEDTEXT
description: "Indicator that Invoicing is Blocked - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKEDTEXT')/$value
semantic_en: "Indicator that Invoicing is Blocked - Text"
semantic_vi: "I_INVOICINGISBLOCKEDTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "invoicingisblockedtext"
  - "invoicing"
  - "blocked"
  - "language"
  - "desc"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_INVOICINGISBLOCKEDTEXT

**Indicator that Invoicing is Blocked - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKEDTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoicingIsBlocked` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/block_invoicing preserving type)` | `CHAR(1)` | Freight Settlement Document Block |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `InvoicingIsBlockedDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_InvoicingIsBlocked` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoicingIsBlocked` | `I_InvoicingIsBlocked` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKEDTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKEDTEXT')/$value)*

```abap
@EndUserText:   {label:              'Indicator that Invoicing is Blocked - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'InvoicingIsBlocked',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
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
                 sqlViewName:        'IFSDBLOCKTEXT',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_InvoicingIsBlockedText
  as select from dd07t
  association [0..1] to I_InvoicingIsBlocked as _InvoicingIsBlocked on $projection.InvoicingIsBlocked = _InvoicingIsBlocked.InvoicingIsBlocked
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_InvoicingIsBlocked'
      @Semantics.booleanIndicator: true
  key cast(substring(domvalue_l, 1, 1) as /scmtms/block_invoicing preserving type) as InvoicingIsBlocked,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                   as Language,
      @Semantics.text
      ddtext                                                                       as InvoicingIsBlockedDesc,

      /* Associations */
      _InvoicingIsBlocked,
      _Language
}
where
      domname  = '/SCMTMS/BLOCK_INVOICING'
  and as4local = 'A';
```
