---
name: I_INVOICINGISBLOCKED
description: "Inidcator that Invoicing is Blocked"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKED')/$value
semantic_en: "Inidcator that Invoicing is Blocked"
semantic_vi: "I_INVOICINGISBLOCKED — CDS view cơ bản dựa trên dd07l."
keywords:
  - "invoicingisblocked"
  - "invoicing"
  - "blocked"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_INVOICINGISBLOCKED

**Inidcator that Invoicing is Blocked**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoicingIsBlocked` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/block_invoicing preserving type)` | `CHAR(1)` | Freight Settlement Document Block |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InvoicingIsBlockedText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGISBLOCKED')/$value)*

```abap
@EndUserText:   {label:              'Inidcator that Invoicing is Blocked'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'InvoicingIsBlocked',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IFSDBLOCK',
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Search.searchable:                  false
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view I_InvoicingIsBlocked
  as select from dd07l
  association [0..*] to I_InvoicingIsBlockedText as _Text on $projection.InvoicingIsBlocked = _Text.InvoicingIsBlocked
{
      @ObjectModel.text.association: '_Text'
      @Semantics.booleanIndicator: true
  key cast(substring(domvalue_l, 1, 1) as /scmtms/block_invoicing preserving type) as InvoicingIsBlocked,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/BLOCK_INVOICING'
  and as4local = 'A';
```
