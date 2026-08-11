---
name: I_INVOICINGSTATUS
description: "Invoicing Status"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUS')/$value
semantic_en: "Invoicing Status"
semantic_vi: "I_INVOICINGSTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "invoicingstatus"
  - "invoicing"
  - "status"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_INVOICINGSTATUS

**Invoicing Status**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoicingStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/invoicing_status_code preserving type)` | `CHAR(2)` | Invoicing Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InvoicingStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUS')/$value)*

```abap
@EndUserText:   {label:              'Invoicing Status'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'InvoicingStatus',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 resultSet.sizeCategory:#XS,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IINVSTATUS',
                 preserveKey:         true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}


define view I_InvoicingStatus
  as select from dd07l
  association [0..*] to I_InvoicingStatusText as _Text on $projection.InvoicingStatus = _Text.InvoicingStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/invoicing_status_code preserving type) as InvoicingStatus,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/D_INVOICING_STAT_CODE'
  and as4local = 'A';
```
