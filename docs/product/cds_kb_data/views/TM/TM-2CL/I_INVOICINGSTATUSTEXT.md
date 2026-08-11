---
name: I_INVOICINGSTATUSTEXT
description: "Invoicing Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUSTEXT')/$value
semantic_en: "Invoicing Status - Text"
semantic_vi: "I_INVOICINGSTATUSTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "invoicingstatustext"
  - "invoicing"
  - "status"
  - "language"
  - "desc"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - TM-2CL
---
# I_INVOICINGSTATUSTEXT

**Invoicing Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoicingStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/invoicing_status_code preserving type)` | `CHAR(2)` | Invoicing Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `InvoicingStatusDesc` |  | |  | `cast(ddtext as /scmtms/vdm_chrgob_inv_st_txt preserving type )` | `CHAR(60)` | Transportation Charge Object Invoicing Status Description |
| `_InvoicingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoicingStatus` | `I_InvoicingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVOICINGSTATUSTEXT')/$value)*

```abap
@EndUserText:   {label:              'Invoicing Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'InvoicingStatus',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'IINVSTATUSTEXT',
                 preserveKey:         true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_InvoicingStatusText
  as select from dd07t
  association [0..1] to I_InvoicingStatus as _InvoicingStatus on $projection.InvoicingStatus = _InvoicingStatus.InvoicingStatus
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_InvoicingStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/invoicing_status_code preserving type) as InvoicingStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                         as Language,
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_chrgob_inv_st_txt preserving type )                     as InvoicingStatusDesc,

      /* Associations */
      _InvoicingStatus,
      _Language
}
where
      domname  = '/SCMTMS/D_INVOICING_STAT_CODE'
  and as4local = 'A';
```
