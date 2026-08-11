---
name: I_SUPLRFRTINVCREQLIFECYCSTS
description: "Supplier Freight Invoice Req Life Cycle Status"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTS')/$value
semantic_en: "Supplier Freight Invoice Req Life Cycle Status"
semantic_vi: "I_SUPLRFRTINVCREQLIFECYCSTS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "suplrfrtinvcreqlifecycsts"
  - "suplr"
  - "invc"
  - "life"
tags:
  - TM
  - bo:billingdocument
  - component:TM-2CL
  - interface-view
  - invoice
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQLIFECYCSTS

**Supplier Freight Invoice Req Life Cycle Status**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqLifeCycSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_lc_status preserving type)` | `CHAR(2)` | Freight Settlement Document Life Cycle Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SuplrFrtInvcReqLifeCycStsT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTS')/$value)*

```abap
@EndUserText:   {label:              'Supplier Freight Invoice Req Life Cycle Status'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:            #LOCAL }
@ObjectModel:   {sapObjectNodeType.name: 'SuplrFrtInvcReqLifeCycleStatus',
                 representativeKey:      'SuplrFrtInvcReqLifeCycSts',
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
                 lifecycle.successor: 'I_SuplrFrtInvcReqLfcycSts_2'}
@AbapCatalog:   {sqlViewName:        'ISFIRLCSTATUS',
                 buffering:                {status: #ACTIVE,
                                            type:   #FULL},
                 compiler:           {compareFilter: true},
                 preserveKey:         true}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}

define view I_SuplrFrtInvcReqLifeCycSts
  as select from dd07l
  association [0..*] to I_SuplrFrtInvcReqLifeCycStsT as _Text on $projection.SuplrFrtInvcReqLifeCycSts = _Text.SuplrFrtInvcReqLifeCycSts
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_lc_status preserving type) as SuplrFrtInvcReqLifeCycSts,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/SFIR_LC_STATUS'
  and as4local = 'A';
```
