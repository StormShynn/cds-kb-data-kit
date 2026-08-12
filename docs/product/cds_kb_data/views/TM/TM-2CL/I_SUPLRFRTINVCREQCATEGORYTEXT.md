---
name: I_SUPLRFRTINVCREQCATEGORYTEXT
description: "Supplier Freight Invoice Request Category - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORYTEXT')/$value
semantic_en: "Supplier Freight Invoice Request Category - Text"
semantic_vi: "I_SUPLRFRTINVCREQCATEGORYTEXT — CDS view cơ bản dựa trên dd07t."
keywords:
  - "suplrfrtinvcreqcategorytext"
  - "suplr"
  - "invc"
  - "category"
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
# I_SUPLRFRTINVCREQCATEGORYTEXT

**Supplier Freight Invoice Request Category - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_category preserving type)` | `CHAR(2)` | Freight Settlement Document Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SuplrFrtInvcReqCategoryDesc` |  | |  | `cast(ddtext as /scmtms/vdm_sfir_cat_desc preserving type)` | `CHAR(60)` | Freight Settlement Document Category Description |
| `_SuplrFrtInvcReqCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrFrtInvcReqCategory` | `I_SuplrFrtInvcReqCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORYTEXT')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText:   {label:              'Supplier Freight Invoice Request Category - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'SuplrFrtInvcReqCategory',
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
@Analytics.technicalName: 'ISFIRCATEGORYT'
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:   #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqCategoryT_2'}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_SuplrFrtInvcReqCategoryText
  as select from dd07t
  association [0..1] to I_SuplrFrtInvcReqCategory as _SuplrFrtInvcReqCategory on $projection.SuplrFrtInvcReqCategory = _SuplrFrtInvcReqCategory.SuplrFrtInvcReqCategory
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SuplrFrtInvcReqCategory'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_category preserving type) as SuplrFrtInvcReqCategory,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_sfir_cat_desc preserving type)                  as SuplrFrtInvcReqCategoryDesc,

      /* Associations */
      _SuplrFrtInvcReqCategory,
      _Language
}
where
      domname  = '/SCMTMS/SFIR_CATEGORY'
  and as4local = 'A';
```
