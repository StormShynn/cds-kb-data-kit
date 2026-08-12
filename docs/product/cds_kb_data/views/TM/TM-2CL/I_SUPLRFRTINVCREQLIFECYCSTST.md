---
name: I_SUPLRFRTINVCREQLIFECYCSTST
description: "Supplier Freight Invc Req Life Cycle Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTST')/$value
semantic_en: "Supplier Freight Invc Req Life Cycle Status - Text"
semantic_vi: "I_SUPLRFRTINVCREQLIFECYCSTST — CDS view cơ bản dựa trên dd07t."
keywords:
  - "suplrfrtinvcreqlifecycstst"
  - "suplr"
  - "invc"
  - "life"
  - "language"
  - "desc"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQLIFECYCSTST

**Supplier Freight Invc Req Life Cycle Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqLifeCycSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_lc_status preserving type)` | `CHAR(2)` | Freight Settlement Document Life Cycle Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SuplrFrtInvcReqLifeCycStsDesc` |  | |  | `cast( ddtext as /scmtms/vdm_sfir_lc_stat_desc preserving type )` | `CHAR(60)` | Freight Settlement Document Life Cycle Status Description |
| `_SuplrFrtInvcReqLifeCycSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrFrtInvcReqLifeCycSts` | `I_SuplrFrtInvcReqLifeCycSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQLIFECYCSTST')/$value)*

```abap
@EndUserText:   {label:              'Supplier Freight Invc Req Life Cycle Status - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'SuplrFrtInvcReqLifeCycSts',
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
@VDM:           {viewType:             #BASIC,
                 lifecycle.status:     #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqLfcycStsT_2'}
@AbapCatalog:   {compiler:           {compareFilter: true},
                 sqlViewName:        'ISFIRLCSTATUTT',
                 preserveKey:        true,
                 buffering:          {status: #ACTIVE,
                                      type:   #FULL}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:      {ignorePropagatedAnnotations: true}

define view I_SuplrFrtInvcReqLifeCycStsT
  as select from dd07t
  association [0..1] to I_SuplrFrtInvcReqLifeCycSts as _SuplrFrtInvcReqLifeCycSts on $projection.SuplrFrtInvcReqLifeCycSts = _SuplrFrtInvcReqLifeCycSts.SuplrFrtInvcReqLifeCycSts
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      //    @ObjectModel.foreignKey.association: '_SuplrFrtInvcReqLifeCycleSts'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_lc_status preserving type) as SuplrFrtInvcReqLifeCycSts,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                      as Language,
      @Semantics.text
      cast( ddtext as /scmtms/vdm_sfir_lc_stat_desc preserving type )                 as SuplrFrtInvcReqLifeCycStsDesc,

      /* Associations */
      _SuplrFrtInvcReqLifeCycSts,
      _Language
}
where
      domname  = '/SCMTMS/SFIR_LC_STATUS'
  and as4local = 'A';
```
