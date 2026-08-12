---
name: I_SUPLRFRTINVCREQCONFSTATUS
description: "Supplier Freight Invoice Req Confirmation Status"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUS')/$value
semantic_en: "Supplier Freight Invoice Req Confirmation Status"
semantic_vi: "I_SUPLRFRTINVCREQCONFSTATUS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "suplrfrtinvcreqconfstatus"
  - "suplr"
  - "invc"
  - "conf"
  - "status"
tags:
  - TM
  - bo:billingdocument
  - component:TM-2CL
  - interface-view
  - invoice
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQCONFSTATUS

**Supplier Freight Invoice Req Confirmation Status**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqConfStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_confirm_status preserving type)` | `CHAR(2)` | Freight Settlement Confirmation Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SuplrFrtInvcReqConfStatusT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCONFSTATUS')/$value)*

```abap
@EndUserText:   {label:              'Supplier Freight Invoice Req Confirmation Status'}
@Analytics:     {dataCategory:       #DIMENSION, 
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL }
@ObjectModel:   {sapObjectNodeType.name: 'SuplrFrtInvcReqConfStatus',
                 representativeKey:  'SuplrFrtInvcReqConfStatus',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:             #BASIC,
                 lifecycle.status:     #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqConfSts_2'}
@AbapCatalog:   {sqlViewName:        'ISFIRCONFSTATUS',
                 buffering:                {status: #ACTIVE,
                                            type:   #FULL},
                 compiler:           {compareFilter: true},
                 preserveKey:        true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}

define view I_SuplrFrtInvcReqConfStatus
as select from dd07l
association[0..*] to I_SuplrFrtInvcReqConfStatusT as _Text on $projection.SuplrFrtInvcReqConfStatus = _Text.SuplrFrtInvcReqConfStatus
{
    @ObjectModel.text.association: '_Text'
key cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_confirm_status preserving type) as SuplrFrtInvcReqConfStatus,
    
    /* Associations */
    _Text
} 
where domname = '/SCMTMS/SFIR_CONFIRM_STATUS'
and as4local = 'A';
```
