---
name: I_SUPLRFRTINVCREQCATEGORY
description: "Supplier Freight Invoice Request Category"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORY')/$value
semantic_en: "Supplier Freight Invoice Request Category"
semantic_vi: "I_SUPLRFRTINVCREQCATEGORY — CDS view cơ bản dựa trên dd07l."
keywords:
  - "suplrfrtinvcreqcategory"
  - "suplr"
  - "invc"
  - "category"
tags:
  - TM
  - bo:billingdocument
  - component:TM-2CL
  - interface-view
  - invoice
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQCATEGORY

**Supplier Freight Invoice Request Category**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_category preserving type)` | `CHAR(2)` | Freight Settlement Document Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SuplrFrtInvcReqCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCATEGORY')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText:   {label:              'Supplier Freight Invoice Request Category'}
@Analytics:     {dataCategory:       #DIMENSION, 
                 dataExtraction:     {enabled: true},
                 internalName:            #LOCAL }
@Analytics.technicalName: 'ISFIRCATEGORY'
@ObjectModel:   {sapObjectNodeType.name: 'SuplrFrtInvcReqCategory',
                 representativeKey:  'SuplrFrtInvcReqCategory',
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
@VDM:           {viewType:            #BASIC,
                 lifecycle.status:    #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqCategory_2'}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Search.searchable:                        false
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}

define root view entity I_SuplrFrtInvcReqCategory
as select from dd07l
association[0..*] to I_SuplrFrtInvcReqCategoryText as _Text on $projection.SuplrFrtInvcReqCategory = _Text.SuplrFrtInvcReqCategory
{
    @ObjectModel.text.association: '_Text'
key cast(substring(domvalue_l, 1, 2) as /scmtms/sfir_category preserving type) as SuplrFrtInvcReqCategory,

    /* Associations */
    _Text
} 
where domname = '/SCMTMS/SFIR_CATEGORY'
and as4local = 'A';
```
