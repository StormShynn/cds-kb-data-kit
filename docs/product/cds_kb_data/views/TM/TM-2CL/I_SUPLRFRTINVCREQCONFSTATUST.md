---
name: I_SUPLRFRTINVCREQCONFSTATUST
description: "Supplier Freight Invoice Req Conf Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUST')/$value
semantic_en: "Supplier Freight Invoice Req Conf Status - Text"
semantic_vi: "I_SUPLRFRTINVCREQCONFSTATUST — CDS view cơ bản dựa trên dd07t."
keywords:
  - "suplrfrtinvcreqconfstatust"
  - "suplr"
  - "invc"
  - "conf"
  - "status"
  - "language"
  - "desc"
tags:
  - TM
  - bo:billingdocument
  - component:TM-2CL
  - interface-view
  - invoice
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQCONFSTATUST

**Supplier Freight Invoice Req Conf Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqConfStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_confirm_status preserving type)` | `CHAR(2)` | Freight Settlement Confirmation Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SuplrFrtInvcReqConfStatusDesc` |  | |  | `cast(ddtext as /scmtms/vdm_sfir_conf_sts_desc preserving type )` | `CHAR(60)` | Freight Settlement Document Confirmation Status Description |
| `_SuplrFrtInvcReqConfStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrFrtInvcReqConfStatus` | `I_SuplrFrtInvcReqConfStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUST')/$value)*

```abap
@EndUserText:   {label:              'Supplier Freight Invoice Req Conf Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'SuplrFrtInvcReqConfStatus',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:            #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqConfStsT_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ISFIRCONFSTATUST',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_SuplrFrtInvcReqConfStatusT
  as select from dd07t
  association [0..1] to I_SuplrFrtInvcReqConfStatus as _SuplrFrtInvcReqConfStatus on $projection.SuplrFrtInvcReqConfStatus = _SuplrFrtInvcReqConfStatus.SuplrFrtInvcReqConfStatus
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SuplrFrtInvcReqConfStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_confirm_status preserving type) as SuplrFrtInvcReqConfStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                       as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_sfir_conf_sts_desc preserving type )                  as SuplrFrtInvcReqConfStatusDesc,

      /* Associations */
      _SuplrFrtInvcReqConfStatus,
      _Language
}
where
      domname  = '/SCMTMS/SFIR_CONFIRM_STATUS'
  and as4local = 'A';
```
